import React, { useState, useEffect, useRef } from 'react';

const EventInvitation = ({ 
  eventDate, 
  eventTime, 
  eventId, 
  eventName = "Event", 
  apiEndpoint,
  language = "ro" // Default to Romanian
}) => {
  const [formData, setFormData] = useState({ nume: '', prenume: '', telefon: '' });
  const [particles, setParticles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [scrollY, setScrollY] = useState(0);
  
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const dividerRef = useRef(null);
  const bodyRef = useRef(null);
  const quoteRef = useRef(null);
  const formRef = useRef(null);
  const footerRef = useRef(null);

  // Translations
  const translations = {
    ro: {
      manifestOfLight: "MANIFEST OF LIGHT",
      spiritualMessage: "Mesajul Spiritual al Zilei:",
      quote: "Începuturile sunt porți. Când le treci cu inimă deschisă, lumina se așază în tine.",
      location: "Locație",
      dressCode: "Dress Code",
      confirmPresence: "Confirmă Prezența",
      firstName: "Prenume",
      lastName: "Nume",
      phone: "Număr de Telefon",
      submitButton: "Trimite RSVP",
      submitting: "Se trimite...",
      thankYou: "Mulțumim pentru confirmare! Ne vedem pe",
      fillAllFields: "Te rugăm să completezi toate câmpurile",
      invalidName: "Numele poate conține doar litere (2-50 caractere)",
      invalidFirstName: "Prenumele poate conține doar litere (2-50 caractere)",
      invalidPhone: "Numărul de telefon nu este valid. Format: 07XX XXX XXX",
      tooManyRequests: "Ai trimis prea multe cereri. Te rugăm să încerci din nou peste o oră.",
      connectionError: "Nu s-a putut trimite confirmarea. Verifică conexiunea la internet și încearcă din nou.",
      sending: "Se trimite confirmarea...",
      awaitsYou: "Te așteaptă:",
      experience1: "Tur în prezență și tăcere frumoasă",
      experience2: "Micro-experiențe",
      experience3: "Lagree & Yoga",
      bodyText1: "Te invităm cu drag să pășești în interiorul tău, odată cu primii pași în House of Aya.",
      bodyText2: "În această zi de deschidere, îți oferim un spațiu al liniștii, transformării și renașterii interioare – un sanctuar în care corpul, mintea și sufletul se întâlnesc în armonie.",
      addressLine1: "Madrigalului Nr. 58",
      addressLine2: "București, Sector 1"
    },
    en: {
      manifestOfLight: "MANIFEST OF LIGHT",
      spiritualMessage: "Spiritual Message of the Day:",
      quote: "Beginnings are gateways. When you cross them with an open heart, light settles within you.",
      location: "Location",
      dressCode: "Dress Code",
      confirmPresence: "Confirm Your Presence",
      firstName: "First Name",
      lastName: "Last Name",
      phone: "Phone Number",
      submitButton: "Send RSVP",
      submitting: "Sending...",
      thankYou: "Thank you for confirming! See you on",
      fillAllFields: "Please fill in all fields",
      invalidName: "Last name can only contain letters (2-50 characters)",
      invalidFirstName: "First name can only contain letters (2-50 characters)",
      invalidPhone: "Phone number is not valid. Format: 07XX XXX XXX",
      tooManyRequests: "You've sent too many requests. Please try again in an hour.",
      connectionError: "Could not send confirmation. Check your internet connection and try again.",
      sending: "Sending confirmation...",
      awaitsYou: "What Awaits You:",
      experience1: "Tour in presence and beautiful silence",
      experience2: "Micro-experiences",
      experience3: "Lagree & Yoga",
      bodyText1: "We warmly invite you to step into your inner self, with your first steps into House of Aya.",
      bodyText2: "On this opening day, we offer you a space of peace, transformation, and inner rebirth – a sanctuary where body, mind, and soul meet in harmony.",
      addressLine1: "Madrigalului No. 58",
      addressLine2: "Bucharest, Sector 1"
    }
  };

  const t = translations[language];

  // Adjusted colors - green more yellow/pale
  const colors = {
    green: '#90ae83ff',
    goldPrimary: '#edcd67',
    goldSecondary: '#f0db8e'
  };

  // Generate light particles
  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 6 + 8,
      delay: Math.random() * 3
    }));
    setParticles(newParticles);
  }, []);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elements = [logoRef, headerRef, dividerRef, bodyRef, quoteRef, formRef, footerRef];
    elements.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const primaryGoldStyle = { color: colors.goldPrimary };
  const secondaryGoldStyle = { color: colors.goldSecondary };

  const cardStyle = {
    backgroundColor: colors.green,
    color: colors.goldSecondary,
    border: `3px solid ${colors.goldPrimary}`,
  };

  const elegantSignatureStyle = {
    color: colors.goldPrimary,
    fontFamily: 'ArinttikaSignature, "Zapfino", "Monotype Corsiva", cursive',
    fontSize: '4.5rem',
    lineHeight: '1',
  };

  // Client-side validation
  const validateName = (name) => {
    const nameRegex = /^[a-zA-ZăâîșțĂÂÎȘȚ\s\-]{2,50}$/;
    return nameRegex.test(name.trim());
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^(\+?40|0)?7[0-9]{8}$/;
    const cleanPhone = phone.replace(/[\s\-\.]/g, '');
    return phoneRegex.test(cleanPhone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.nume || !formData.prenume || !formData.telefon) {
      setSubmitMessage(t.fillAllFields);
      return;
    }

    if (!validateName(formData.nume)) {
      setSubmitMessage(t.invalidName);
      return;
    }

    if (!validateName(formData.prenume)) {
      setSubmitMessage(t.invalidFirstName);
      return;
    }

    if (!validatePhone(formData.telefon)) {
      setSubmitMessage(t.invalidPhone);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(t.sending);

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, eventId }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(`${t.thankYou} ${eventDate}!`);
        setFormData({ nume: '', prenume: '', telefon: '' });
      } else {
        if (data.error.includes('Prea multe cereri') || data.error.includes('Too many requests')) {
          setSubmitMessage(t.tooManyRequests);
        } else {
          setSubmitMessage(data.error);
        }
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitMessage(t.connectionError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    border: `2.5px solid ${colors.goldPrimary}`,
    color: colors.goldPrimary,
    backgroundColor: 'rgba(237, 205, 103, 0.08)',
    padding: '14px 8px',
    fontSize: '17px',
    width: '100%',
    textShadow: '0 2px 3px rgba(0, 0, 0, 0.6)',
    outline: 'none',
    boxShadow: '0 1px 4px rgba(237, 205, 103, 0.2)',
    fontFamily: 'inherit',
    fontWeight: '500',
    borderRadius: '8px'
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
         style={{ background: 'linear-gradient(135deg, #c8d5b9 0%, #b8c9a4 50%, #a8b894 100%)' }}>

      {/* Animated light particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,248,220,0.8) 40%, rgba(237,205,103,0.4) 100%)',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 20px rgba(255,248,220,0.6), 0 0 30px rgba(237,205,103,0.3)',
          }}
        />
      ))}

   <style>{`
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
      opacity: 0.5;
    }
    25% {
      transform: translateY(-25px) translateX(15px);
      opacity: 1;
    }
    50% {
      transform: translateY(-50px) translateX(-15px);
      opacity: 0.7;
    }
    75% {
      transform: translateY(-25px) translateX(-20px);
      opacity: 0.9;
    }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.6;
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
  .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }

  @font-face {
    font-family: 'ArinttikaSignature';
    src: url('/fonts/ArinttikaSignature.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  .text-shadow-strong { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9); }
  .text-shadow-medium { text-shadow: 0 2px 3px rgba(0, 0, 0, 0.7); }

  .gold-input::placeholder {
    color: #f0db8e;
    opacity: 0.7;
    font-style: italic;
    font-size: 16px;
  }

  .gold-input:focus {
    border: 2.5px solid #edcd67 !important;
    outline: none !important;
    box-shadow: 0 2px 8px rgba(237, 205, 103, 0.4) !important;
    background-color: rgba(237, 205, 103, 0.12) !important;
  }

  .gold-input:-webkit-autofill,
  .gold-input:-webkit-autofill:hover,
  .gold-input:-webkit-autofill:focus {
    -webkit-text-fill-color: #edcd67 !important;
    -webkit-box-shadow: 0 0 0px 1000px rgba(237, 205, 103, 0.08) inset !important;
    box-shadow: 0 0 0px 1000px rgba(237, 205, 103, 0.08) inset !important;
    transition: background-color 5000s ease-in-out 0s;
  }

  .info-box {
    background: rgba(96, 135, 104, 0.3);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(237, 205, 103, 0.5);
    border-radius: 12px;
    padding: 16px;
    margin-top: 20px;
  }
`}</style>
      <div
        className="flex flex-col items-center text-center space-y-6 font-serif shadow-2xl relative z-10"
        style={{
          ...cardStyle,
          width: '420px',
          maxWidth: '90vw',
          borderRadius: '32px',
          padding: '48px 40px',
          boxShadow: '0 0 60px rgba(237, 205, 103, 0.3), 0 0 100px rgba(255, 248, 220, 0.2), 0 20px 40px rgba(0, 0, 0, 0.3)',
          background: `linear-gradient(135deg, ${colors.green} 0%, rgba(107, 135, 104, 0.95) 50%, ${colors.green} 100%)`
        }}
      >
        {/* Brand Header with Logo */}
        <div ref={logoRef} className="mb-4 opacity-0 space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-[0.15em] font-serif font-light text-shadow-strong" style={primaryGoldStyle}>
            HOUSE OF AYA
          </h1>

          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  width: '140px',
                  height: '140px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(255, 248, 220, 0.5) 0%, rgba(237, 205, 103, 0.4) 25%, rgba(255, 248, 220, 0.25) 50%, transparent 75%)',
                  animation: 'pulse 3s ease-in-out infinite',
                  filter: 'blur(15px)',
                  boxShadow: '0 0 50px rgba(237, 205, 103, 0.6), 0 0 80px rgba(255, 248, 220, 0.4)'
                }}
              />

              <div
                className="absolute inset-0 rounded-full"
                style={{
                  width: '100px',
                  height: '100px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(237, 205, 103, 0.5) 35%, rgba(255, 248, 220, 0.3) 60%, transparent 80%)',
                  animation: 'pulse 3s ease-in-out infinite reverse',
                  filter: 'blur(8px)',
                }}
              />

              <div
                className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full border-2 flex items-center justify-center relative"
                style={{
                  borderColor: colors.goldPrimary,
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 25px rgba(237, 205, 103, 0.7), 0 0 40px rgba(255, 248, 220, 0.5), inset 0 0 20px rgba(255, 248, 220, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.08)'
                }}
              >
                <div className="absolute inset-0 rounded-full border m-1" style={{ borderColor: colors.goldPrimary }}></div>
                <img
                  src="/images/logo.webp"
                  alt="House of Aya Logo"
                  className="object-contain relative z-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24"
                  width="96"
                  height="96"
                  loading="eager"
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(237, 205, 103, 0.7)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.5)) drop-shadow(1px 2px 3px rgba(5, 4, 4, 0.9))'
                  }}
                />
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base tracking-[0.25em] font-serif font-light opacity-95 text-shadow-medium" style={secondaryGoldStyle}>
            {t.manifestOfLight}
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="w-full px-8 pb-6 opacity-0" ref={dividerRef}>
          <div
            style={{
              height: '1.5px',
              background: `linear-gradient(to right, transparent, ${colors.goldPrimary}, transparent)`,
              boxShadow: `0 0 8px rgba(237, 205, 103, 0.3)`
            }}
          />
        </div>

        {/* Event Title */}
        <div className="space-y-2 opacity-0" ref={headerRef}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-wide text-shadow-strong" style={primaryGoldStyle}>
            {eventName}
          </h2>
          <div className="text-lg sm:text-xl lg:text-2xl font-medium tracking-wider text-shadow-strong" style={primaryGoldStyle}>
            <p>{eventDate}</p>
            <p>{eventTime}</p>
          </div>
        </div>

        {/* Body Text */}
        <div ref={bodyRef} className="space-y-4 text-[17px] sm:text-[19px] leading-relaxed font-normal px-2 text-shadow-medium opacity-0 pt-4">
          <p>{t.bodyText1}</p>
          <p>{t.bodyText2}</p>
        </div>

        {/* Quote */}
        <div ref={quoteRef} className="pt-4 space-y-2 opacity-0">
          <h3 className="uppercase tracking-widest text-base sm:text-lg font-serif text-shadow-strong" style={primaryGoldStyle}>
            {t.spiritualMessage}
          </h3>
          <p className="italic text-[17px] sm:text-[19px] lg:text-xl font-normal text-shadow-medium leading-relaxed">
            {t.quote}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full px-8 py-4">
          <div
            style={{
              height: '2px',
              background: `linear-gradient(to right, transparent, ${colors.goldPrimary}, transparent)`,
              boxShadow: `0 0 8px rgba(237, 205, 103, 0.4)`
            }}
          />
        </div>

        {/* Location & Dress Code */}
        <div className="w-full space-y-3 opacity-0" ref={quoteRef}>
          <div className="info-box">
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: colors.goldPrimary, fontSize: '16px' }}>✦</span>
              <h4 className="uppercase tracking-wider text-sm font-serif text-shadow-medium" style={primaryGoldStyle}>
                {t.location}
              </h4>
            </div>
            <p className="text-[16px] font-normal text-shadow-medium leading-relaxed">
              <span className="font-medium">{t.addressLine1}</span>, {t.addressLine2}
            </p>
          </div>

          <div className="info-box">
            <div className="flex items-center gap-2 mb-3">
              <span style={{ color: colors.goldPrimary, fontSize: '16px' }}>✦</span>
              <h4 className="uppercase tracking-wider text-sm font-serif text-shadow-medium" style={primaryGoldStyle}>
                {t.dressCode}
              </h4>
            </div>
            <p className="text-[16px] font-normal text-shadow-medium leading-relaxed">
              Soft white | Sage | Nude | Gold accents
            </p>
          </div>
        </div>

        {/* RSVP Form */}
        <div ref={formRef} className="w-full pt-6 px-2 sm:px-4 opacity-0">
          <h3 className="uppercase tracking-widest text-xl sm:text-2xl font-serif mb-6 text-shadow-strong" style={primaryGoldStyle}>
            {t.confirmPresence}
          </h3>
          <div>
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder={t.lastName}
                  value={formData.nume}
                  onChange={(e) => setFormData({...formData, nume: e.target.value})}
                  style={inputStyle}
                  className="font-serif gold-input"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder={t.firstName}
                  value={formData.prenume}
                  onChange={(e) => setFormData({...formData, prenume: e.target.value})}
                  style={inputStyle}
                  className="font-serif gold-input"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder={t.phone}
                  value={formData.telefon}
                  onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                  style={inputStyle}
                  className="font-serif gold-input"
                />
              </div>
            </div>

            {/* Submit Message */}
            {submitMessage && (
              <div
                className="text-center mt-5 text-[15px] font-medium animate-fadeIn"
                style={{
                  color: submitMessage.includes(t.thankYou.split(' ')[0])
                    ? colors.goldPrimary
                    : submitMessage.includes(t.sending.split(' ')[0])
                      ? colors.goldSecondary
                      : '#ff8888',
                  textShadow: '0 2px 3px rgba(0, 0, 0, 0.8)',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(107, 135, 104, 0.4)',
                  border: `1px solid ${
                    submitMessage.includes(t.thankYou.split(' ')[0])
                      ? colors.goldPrimary
                      : submitMessage.includes(t.sending.split(' ')[0])
                        ? colors.goldSecondary
                        : '#ff6b6b'
                  }`,
                  backdropFilter: 'blur(4px)'
                }}
              >
                {submitMessage}
              </div>
            )}

            <div style={{ marginTop: '32px' }} className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="font-serif uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: isSubmitting ? colors.goldSecondary : colors.goldPrimary,
                  color: colors.green,
                  boxShadow: isSubmitting
                    ? '0 0 10px rgba(240, 219, 142, 0.4)'
                    : '0 0 15px rgba(237, 205, 103, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)',
                  padding: '10px 28px',
                  fontSize: '14px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '700',
                  opacity: isSubmitting ? 0.85 : 1,
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  minWidth: '150px',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  {isSubmitting && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: '12px',
                        height: '12px',
                        border: `2px solid ${colors.green}`,
                        borderTopColor: 'transparent',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite'
                      }}
                    />
                  )}
                  {isSubmitting ? t.submitting : t.submitButton}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div ref={footerRef} className="w-full pt-4 pb-2 opacity-0">
          <div className="mb-4 text-center">
            <p className="text-xl sm:text-2xl mb-4 text-shadow-strong" style={primaryGoldStyle}>
              {t.awaitsYou}
            </p>
            <div className="space-y-2 text-[17px] sm:text-[18px] font-normal text-shadow-medium">
              <div className="flex items-center justify-center gap-2">
                <span style={{ color: colors.goldPrimary, fontSize: '12px' }}>◆</span>
                <p>{t.experience1}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span style={{ color: colors.goldPrimary, fontSize: '12px' }}>◆</span>
                <p>{t.experience2}</p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span style={{ color: colors.goldPrimary, fontSize: '12px' }}>◆</span>
                <p>{t.experience3}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full mt-8">
            <span className="transform -rotate-6 block text-shadow-strong" style={elegantSignatureStyle}>
              Cecilia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInvitation;