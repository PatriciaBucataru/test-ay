import React, { useState, useEffect } from 'react';

const EventInvitation = ({ eventDate, eventTime, eventId, eventName = "Event", apiEndpoint }) => {
  const [formData, setFormData] = useState({ nume: '', prenume: '', telefon: '' });
  const [particles, setParticles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // Define colors directly
  const colors = {
    green: '#60825d',
    goldPrimary: '#edcd67',
    goldSecondary: '#ebe386'
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

    // Validate empty fields
    if (!formData.nume || !formData.prenume || !formData.telefon) {
      setSubmitMessage('❌ Te rugăm să completezi toate câmpurile');
      return;
    }

    // Client-side validation for better UX
    if (!validateName(formData.nume)) {
      setSubmitMessage('❌ Numele poate conține doar litere (2-50 caractere)');
      return;
    }

    if (!validateName(formData.prenume)) {
      setSubmitMessage('❌ Prenumele poate conține doar litere (2-50 caractere)');
      return;
    }

    if (!validatePhone(formData.telefon)) {
      setSubmitMessage('❌ Numărul de telefon nu este valid. Format: 07XX XXX XXX');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('⏳ Se trimite confirmarea...');

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
        setSubmitMessage(`✅ Mulțumim pentru confirmare! Ne vedem pe ${eventDate}!`);
        setFormData({ nume: '', prenume: '', telefon: '' });
      } else {
        // Friendly error messages
        if (data.error.includes('Prea multe cereri')) {
          setSubmitMessage('⏰ Ai trimis prea multe cereri. Te rugăm să încerci din nou peste o oră.');
        } else {
          setSubmitMessage(`❌ ${data.error}`);
        }
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitMessage('❌ Nu s-a putut trimite confirmarea. Verifică conexiunea la internet și încearcă din nou.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    border: 'none',
    borderBottom: `1px solid ${colors.goldPrimary}`,
    color: colors.goldPrimary,
    backgroundColor: 'transparent',
    padding: '10px 4px',
    fontSize: '16px',
    width: '100%',
    textShadow: '0 1px 1px rgba(0, 0, 0, 0.817)',
    outline: 'none',
    boxShadow: 'none',
    fontFamily: 'inherit'
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
         style={{ background: 'linear-gradient(135deg, #f5e6a8 0%, #edcd67 50%, #f5e6a8 100%)' }}>

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
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        @font-face {
          font-family: 'ArinttikaSignature';
          src: url('/fonts/ArinttikaSignature.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .text-shadow-subtle {
          text-shadow: 0 1px 1px rgba(0, 0, 0, 0.817);
        }

        .gold-input {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

        .gold-input::placeholder {
          color: #ebe386;
          opacity: 0.75;
          font-style: italic;
          font-size: 15px;
        }

        .gold-input:focus {
          border: none !important;
          border-bottom: 1px solid #edcd67 !important;
          outline: none !important;
          box-shadow: none !important;
        }
      `}</style>

      <div
        className="flex flex-col items-center text-center space-y-6 font-serif shadow-2xl relative z-10"
        style={{
          ...cardStyle,
          width: '400px',
          maxWidth: '90vw',
          borderRadius: '32px',
          padding: '48px 40px',
          boxShadow: '0 0 60px rgba(237, 205, 103, 0.3), 0 0 100px rgba(255, 248, 220, 0.2), 0 20px 40px rgba(0, 0, 0, 0.3)',
          background: `linear-gradient(135deg,
            ${colors.green} 0%,
            rgba(96, 130, 93, 0.95) 50%,
            ${colors.green} 100%)`
        }}
      >
        {/* Logo */}
        <div className="mb-2">
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 flex items-center justify-center relative"
            style={{
              borderColor: colors.goldPrimary,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 20px rgba(237, 205, 103, 0.4), inset 0 0 20px rgba(255, 248, 220, 0.1)'
            }}
          >
            <div className="absolute inset-0 rounded-full border m-1" style={{ borderColor: colors.goldPrimary }}></div>
            <img
              src="/images/logo%20pn.png"
              alt="House of Aya Logo"
              className="object-contain"
              style={{
                width: '80px',
                height: '80px',
                filter: 'drop-shadow(0 0 8px rgba(237, 205, 103, 0.6)) drop-shadow(1px 2px 3px rgba(5, 4, 4, 0.9))'
              }}
            />
          </div>
        </div>

        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-widest font-serif font-light text-shadow-subtle" style={primaryGoldStyle}>
            HOUSE OF AYA
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.2em] font-sans uppercase opacity-90 text-shadow-subtle">
            Manifest of Light
          </p>
        </div>

        {/* Event Title */}
        <div className="pt-2 space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-wide text-shadow-subtle" style={primaryGoldStyle}>
            {eventName}
          </h2>
          <div className="text-base sm:text-lg lg:text-xl font-light tracking-wider opacity-90 text-shadow-subtle" style={primaryGoldStyle}>
            <p>{eventDate}</p>
            <p>{eventTime}</p>
          </div>
        </div>

        {/* Body Text */}
        <div className="space-y-4 text-base sm:text-lg leading-relaxed font-light opacity-95 px-2 text-shadow-subtle">
          <p>
            Te invităm cu drag să pășești în interiorul tău,
            odată cu primii pași în House of Aya.
          </p>
          <p>
            În această zi de deschidere, îți oferim un spațiu
            al liniștii, transformării și renașterii interioare – un
            sanctuar în care corpul, mintea și sufletul se
            întâlnesc în armonie.
          </p>
        </div>

        {/* Quote */}
        <div className="pt-2 space-y-2">
          <h3 className="uppercase tracking-widest text-base sm:text-lg font-serif text-shadow-subtle">
            Mesajul Spiritual al Zilei:
          </h3>
          <p className="italic text-base sm:text-lg lg:text-xl font-light text-shadow-subtle">
            „Începuturile sunt porți. Când le treci <br/>
            cu inimă deschisă, lumina se așază în tine."
          </p>
        </div>

        {/* RSVP Form */}
        <div className="w-full pt-6 px-2 sm:px-4">
          <h3 className="uppercase tracking-widest text-lg sm:text-xl font-serif mb-6 text-shadow-subtle" style={primaryGoldStyle}>
            Confirmă Prezența
          </h3>
          <div>
            <div className="space-y-4">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Nume"
                  value={formData.nume}
                  onChange={(e) => setFormData({...formData, nume: e.target.value})}
                  style={inputStyle}
                  className="font-serif gold-input"
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Prenume"
                  value={formData.prenume}
                  onChange={(e) => setFormData({...formData, prenume: e.target.value})}
                  style={inputStyle}
                  className="font-serif gold-input"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Număr de Telefon"
                  value={formData.telefon}
                  onChange={(e) => setFormData({...formData, telefon: e.target.value})}
                  style={inputStyle}
                  className="font-serif gold-input"
                />
              </div>
            </div>

            {/* Submit Message with smooth animation */}
            {submitMessage && (
              <div
                className="text-center mt-4 text-sm font-light animate-fadeIn"
                style={{
                  color: submitMessage.includes('✅')
                    ? colors.goldPrimary
                    : submitMessage.includes('⏳')
                      ? colors.goldSecondary
                      : '#ff8888',
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.7)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(96, 130, 93, 0.3)',
                  border: `1px solid ${
                    submitMessage.includes('✅')
                      ? colors.goldPrimary
                      : submitMessage.includes('⏳')
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
                    ? '0 0 10px rgba(235, 227, 134, 0.4)'
                    : '0 0 15px rgba(237, 205, 103, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)',
                  padding: '8px 24px',
                  fontSize: '13px',
                  borderRadius: '8px',
                  border: 'none',
                  fontWeight: '600',
                  opacity: isSubmitting ? 0.85 : 1,
                  cursor: isSubmitting ? 'wait' : 'pointer',
                  minWidth: '140px',
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
                  {isSubmitting ? 'Se trimite...' : 'Trimite RSVP'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full pt-4 pb-2">
          <div className="mb-4 text-center">
            <p className="text-lg sm:text-xl mb-2 text-shadow-subtle">Te așteaptă:</p>
            <div className="space-y-1 text-base sm:text-lg font-light text-shadow-subtle">
              <p>Tur în prezență și tăcere frumoasă</p>
              <p>Micro-experiențe</p>
              <p>Lagree & Yoga</p>
            </div>
          </div>
          <div className="flex justify-end w-full mt-8">
            <span className="transform -rotate-6 block text-shadow-subtle" style={elegantSignatureStyle}>
              Cecilia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInvitation;
