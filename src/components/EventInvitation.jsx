import React, { useState, useEffect, useRef } from 'react';

const EventInvitation = ({ eventDate, eventTime, eventId, eventName = "Event", apiEndpoint }) => {
  const [formData, setFormData] = useState({ nume: '', prenume: '', telefon: '' });
  const [particles, setParticles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [scrollY, setScrollY] = useState(0);
  
  const logoRef = useRef(null);
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const quoteRef = useRef(null);
  const formRef = useRef(null);
  const footerRef = useRef(null);

  // Adjusted colors - green more yellow/pale
  const colors = {
    green: '#6b8768',
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

    const elements = [logoRef, headerRef, bodyRef, quoteRef, formRef, footerRef];
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
      setSubmitMessage('Te rugăm să completezi toate câmpurile');
      return;
    }

    if (!validateName(formData.nume)) {
      setSubmitMessage('Numele poate conține doar litere (2-50 caractere)');
      return;
    }

    if (!validateName(formData.prenume)) {
      setSubmitMessage('Prenumele poate conține doar litere (2-50 caractere)');
      return;
    }

    if (!validatePhone(formData.telefon)) {
      setSubmitMessage('Numărul de telefon nu este valid. Format: 07XX XXX XXX');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('Se trimite confirmarea...');

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
        setSubmitMessage(`Mulțumim pentru confirmare! Ne vedem pe ${eventDate}!`);
        setFormData({ nume: '', prenume: '', telefon: '' });
      } else {
        if (data.error.includes('Prea multe cereri')) {
          setSubmitMessage('Ai trimis prea multe cereri. Te rugăm să încerci din nou peste o oră.');
        } else {
          setSubmitMessage(data.error);
        }
      }
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setSubmitMessage('Nu s-a putut trimite confirmarea. Verifică conexiunea la internet și încearcă din nou.');
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }

        @font-face {
          font-family: 'ArinttikaSignature';
          src: url('/fonts/ArinttikaSignature.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }

        .text-shadow-strong {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
        }

        .text-shadow-medium {
          text-shadow: 0 2px 3px rgba(0, 0, 0, 0.7);
        }

        .gold-input {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
        }

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
          background: `linear-gradient(135deg,
            ${colors.green} 0%,
            rgba(107, 135, 104, 0.95) 50%,
            ${colors.green} 100%)`
        }}
      >
        {/* Logo */}
        <div ref={logoRef} className="mb-2 opacity-0">
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
        <div ref={headerRef} className="space-y-1 opacity-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl tracking-widest font-serif font-light text-shadow-strong" style={primaryGoldStyle}>
            HOUSE OF AYA
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.2em] font-sans uppercase opacity-90 text-shadow-medium">
            Manifest of Light
          </p>
        </div>

        {/* Event Title */}
        <div className="pt-2 space-y-2 opacity-0" ref={headerRef}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-wide text-shadow-strong" style={primaryGoldStyle}>
            {eventName}
          </h2>
          <div className="text-lg sm:text-xl lg:text-2xl font-medium tracking-wider text-shadow-strong" style={primaryGoldStyle}>
            <p>{eventDate}</p>
            <p>{eventTime}</p>
          </div>
        </div>

        {/* Body Text */}
        <div ref={bodyRef} className="space-y-4 text-[17px] sm:text-[19px] leading-relaxed font-normal px-2 text-shadow-medium opacity-0">
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
        <div ref={quoteRef} className="pt-2 space-y-2 opacity-0">
          <h3 className="uppercase tracking-widest text-base sm:text-lg font-serif text-shadow-strong" style={primaryGoldStyle}>
            Mesajul Spiritual al Zilei:
          </h3>
          <p className="italic text-[17px] sm:text-[19px] lg:text-xl font-normal text-shadow-medium leading-relaxed">
            „Începuturile sunt porți. Când le treci <br/>
            cu inimă deschisă, lumina se așază în tine."
          </p>
        </div>

        {/* Divider */}
        <div className="w-full px-8 py-2">
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
            <h4 className="uppercase tracking-wider text-sm font-serif mb-2 text-shadow-medium" style={primaryGoldStyle}>
              Locație
            </h4>
            <p className="text-[16px] font-normal text-shadow-medium">
              Madrigalului nr. 58<br/>
              București, Sector 1
            </p>
          </div>
          
          <div className="info-box">
            <h4 className="uppercase tracking-wider text-sm font-serif mb-2 text-shadow-medium" style={primaryGoldStyle}>
              Dress Code
            </h4>
            <p className="text-[16px] font-normal text-shadow-medium">
              Soft white | Sage | Nude | Gold accents
            </p>
          </div>
        </div>

        {/* RSVP Form */}
        <div ref={formRef} className="w-full pt-6 px-2 sm:px-4 opacity-0">
          <h3 className="uppercase tracking-widest text-xl sm:text-2xl font-serif mb-6 text-shadow-strong" style={primaryGoldStyle}>
            Confirmă Prezența
          </h3>
          <div>
            <div className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Nume"
                  value={formData.nume}
                  onChange={(e) => setFormData({...formData, nume: e.target.value})}
                  style={inputStyle}
                  className="font-serif gold-input"
                />
              </div>
              <div>
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

            {/* Submit Message */}
            {submitMessage && (
              <div
                className="text-center mt-5 text-[15px] font-medium animate-fadeIn"
                style={{
                  color: submitMessage.includes('Mulțumim')
                    ? colors.goldPrimary
                    : submitMessage.includes('Se trimite')
                      ? colors.goldSecondary
                      : '#ff8888',
                  textShadow: '0 2px 3px rgba(0, 0, 0, 0.8)',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(107, 135, 104, 0.4)',
                  border: `1px solid ${
                    submitMessage.includes('Mulțumim')
                      ? colors.goldPrimary
                      : submitMessage.includes('Se trimite')
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
                  {isSubmitting ? 'Se trimite...' : 'Trimite RSVP'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div ref={footerRef} className="w-full pt-4 pb-2 opacity-0">
          <div className="mb-4 text-center">
            <p className="text-xl sm:text-2xl mb-3 text-shadow-strong" style={primaryGoldStyle}>
              Te așteaptă:
            </p>
            <div className="space-y-1 text-[17px] sm:text-[18px] font-normal text-shadow-medium">
              <p>Tur în prezență și tăcere frumoasă</p>
              <p>Micro-experiențe</p>
              <p>Lagree & Yoga</p>
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