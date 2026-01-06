import { google } from 'googleapis';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nume, prenume, telefon } = req.body;

    // Validate input
    if (!nume || !prenume || !telefon) {
      return res.status(400).json({ error: 'Toate câmpurile sunt obligatorii' });
    }

    // Configure Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get current date and time
    const now = new Date();
    const romaniaTime = now.toLocaleString('ro-RO', { timeZone: 'Europe/Bucharest' });

    // Append row to Google Sheet - Event 15 Ianuarie tab
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Event 15 Ianuarie!A:D',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[nume, prenume, telefon, romaniaTime]],
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Confirmare trimisă cu succes!'
    });

  } catch (error) {
    console.error('Error submitting RSVP for Event 15:', error);
    return res.status(500).json({
      error: 'A apărut o eroare. Te rugăm să încerci din nou.'
    });
  }
}
