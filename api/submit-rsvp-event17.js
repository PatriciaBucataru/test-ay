import { google } from 'googleapis';
import { put } from '@vercel/blob';

// In-memory rate limiting (simple but effective for serverless)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS_PER_WINDOW = 3; // Max 3 submissions per hour per IP

// Input sanitization - removes HTML tags and dangerous characters
function sanitizeInput(input) {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/[<>]/g, '') // Remove < >
    .trim()
    .substring(0, 100); // Max 100 characters
}

// Validate Romanian phone number
function isValidRomanianPhone(phone) {
  // Accept formats: 07XX XXX XXX, 07XXXXXXXX, +407XXXXXXXX, 407XXXXXXXX
  const phoneRegex = /^(\+?40|0)?7[0-9]{8}$/;
  const cleanPhone = phone.replace(/[\s\-\.]/g, ''); // Remove spaces, dashes, dots
  return phoneRegex.test(cleanPhone);
}

// Validate name (letters, spaces, dashes, Romanian diacritics only)
function isValidName(name) {
  const nameRegex = /^[a-zA-ZăâîșțĂÂÎȘȚ\s\-]{2,50}$/;
  return nameRegex.test(name);
}

// Rate limiting check
function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];

  // Filter out old requests outside the window
  const recentRequests = userRequests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);

  if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
    return false; // Rate limit exceeded
  }

  // Add current request
  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);

  return true; // Allow request
}

// Get client IP
function getClientIP(req) {
  return req.headers['x-forwarded-for']?.split(',')[0] ||
         req.headers['x-real-ip'] ||
         req.connection?.remoteAddress ||
         'unknown';
}

// Save to JSON backup
async function saveToBackup(data, eventId) {
  try {
    // Skip backup if token is not available
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      console.warn('⚠️ BLOB_READ_WRITE_TOKEN not found, skipping backup');
      return false;
    }

    const timestamp = new Date().toISOString();
    const filename = `rsvp-backup/${eventId}/${timestamp}.json`;

    // Note: Don't pass token manually on Vercel - it uses env automatically
    const blob = await put(filename, JSON.stringify(data, null, 2), {
      access: 'public',
    });

    console.log(`✅ Backup saved: ${blob.url}`);
    return true;
  } catch (error) {
    console.error('❌ Backup failed:', {
      message: error.message,
      eventId: eventId,
      hasToken: !!process.env.BLOB_READ_WRITE_TOKEN
    });
    return false;
  }
}

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS configuration (only allow your domain in production)
  const allowedOrigins = [
    'https://lagree-wellness.vercel.app',
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:5173',
    'http://localhost:5174'
  ];

  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Rate limiting
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    console.warn(`⚠️ Rate limit exceeded for IP: ${clientIP}`);
    return res.status(429).json({
      error: 'Prea multe cereri. Te rugăm să încerci din nou mai târziu.'
    });
  }

  try {
    const { nume, prenume, telefon } = req.body;

    // Validate presence
    if (!nume || !prenume || !telefon) {
      return res.status(400).json({ error: 'Toate câmpurile sunt obligatorii' });
    }

    // Sanitize inputs
    const sanitizedNume = sanitizeInput(nume);
    const sanitizedPrenume = sanitizeInput(prenume);
    const sanitizedTelefon = sanitizeInput(telefon);

    // Validate name format
    if (!isValidName(sanitizedNume)) {
      return res.status(400).json({
        error: 'Numele conține caractere invalide. Te rugăm să folosești doar litere.'
      });
    }

    if (!isValidName(sanitizedPrenume)) {
      return res.status(400).json({
        error: 'Prenumele conține caractere invalide. Te rugăm să folosești doar litere.'
      });
    }

    // Validate phone format
    if (!isValidRomanianPhone(sanitizedTelefon)) {
      return res.status(400).json({
        error: 'Numărul de telefon nu este valid. Format acceptat: 07XX XXX XXX'
      });
    }

    // Normalize phone (remove spaces/dashes for storage)
    const normalizedTelefon = sanitizedTelefon.replace(/[\s\-\.]/g, '');

    // Get current date and time
    const now = new Date();
    const romaniaTime = now.toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' });

    // Prepare data
    const rsvpData = {
      nume: sanitizedNume,
      prenume: sanitizedPrenume,
      telefon: normalizedTelefon,
      timestamp: romaniaTime,
      eventId: 'event17',
      ip: clientIP,
      submittedAt: now.toISOString()
    };

    // Save to JSON backup FIRST (before Google Sheets)
    await saveToBackup(rsvpData, 'event17');

    // Configure Google Sheets API with timeout
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append row to Google Sheet with timeout protection
    const appendPromise = sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Event 17 Ianuarie!A:D',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[sanitizedNume, sanitizedPrenume, normalizedTelefon, romaniaTime]],
      },
    });

    // Timeout after 8 seconds
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), 8000)
    );

    await Promise.race([appendPromise, timeoutPromise]);

    console.log(`✅ RSVP saved for Event 17: ${sanitizedNume} ${sanitizedPrenume}`);

    return res.status(200).json({
      success: true,
      message: 'Confirmare trimisă cu succes!'
    });

  } catch (error) {
    // Log error securely (don't expose details to client)
    console.error('❌ Error submitting RSVP for Event 17:', {
      message: error.message,
      type: error.constructor.name,
      timestamp: new Date().toISOString()
    });

    // Return generic error to client
    return res.status(500).json({
      error: 'A apărut o eroare. Te rugăm să încerci din nou.'
    });
  }
}
