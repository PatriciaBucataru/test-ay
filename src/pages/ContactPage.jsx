import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ContactPage() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      duration: Math.random() * 10 + 6,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const colors = {
    green: '#90ae83ff',
    goldPrimary: '#edcd67',
    goldSecondary: '#f0db8e'
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #8b9e7d 0%, #6b7c5e 50%, #5a6b4d 100%)' }}
    >
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-35px) translateX(20px);
            opacity: 1;
          }
          50% {
            transform: translateY(-70px) translateX(-20px);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-35px) translateX(-25px);
            opacity: 1;
          }
        }

        @keyframes shimmerLight {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.8;
            transform: translateX(100%);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(237, 205, 103, 0.4), 0 0 40px rgba(255, 248, 220, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(237, 205, 103, 0.8), 0 0 80px rgba(255, 248, 220, 0.6);
          }
        }
      `}</style>

      {/* Radiant light overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(237, 205, 103, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255, 248, 220, 0.1) 0%, transparent 50%)',
        }}
      />

      {/* Animated particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 248, 220, 0.9) 20%, rgba(237, 205, 103, 0.7) 40%, rgba(237, 205, 103, 0.3) 100%)',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 30px rgba(237, 205, 103, 0.9), 0 0 50px rgba(255, 248, 220, 0.6), 0 0 70px rgba(255, 255, 255, 0.4)',
            filter: 'blur(1px)',
          }}
        />
      ))}

      {/* Header */}
      <nav className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/images/logo pn.png"
              alt="House of Aya"
              className="w-10 h-10"
              style={{ filter: 'drop-shadow(0 0 10px rgba(237, 205, 103, 0.7))' }}
            />
            <span
              className="font-display text-xl"
              style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              HOUSE OF AYA
            </span>
          </Link>
          <Link
            to="/"
            className="font-body text-sm tracking-wider transition-colors"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            ← Înapoi acasă
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="/images/logo pn.png"
              alt="AYA"
              className="w-12 h-12 animate-breathe"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(237, 205, 103, 0.9)) drop-shadow(0 0 10px rgba(255, 255, 255, 0.6))'
              }}
            />
            <h1
              className="font-display text-4xl lg:text-5xl"
              style={{
                color: colors.goldPrimary,
                textShadow: '0 0 12px rgba(237, 205, 103, 0.6), 0 0 20px rgba(255, 248, 220, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
              }}
            >
              Contact
            </h1>
          </div>
          <p
            className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            Vino să ne cunoști în spațiul nostru dedicat transformării și echilibrului interior.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address */}
            <div
              className="backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(144, 174, 131, 0.3)',
                border: `2px solid ${colors.goldPrimary}`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 50px rgba(237, 205, 103, 0.5), inset 0 0 60px rgba(255, 248, 220, 0.1)',
                animation: 'pulseGlow 4s ease-in-out infinite'
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 248, 220, 0.2) 50%, transparent 100%)',
                  animation: 'shimmerLight 6s ease-in-out infinite',
                  width: '50%',
                }}
              />
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                Adresă
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
              >
                Strada Madrigalului, Nr. 58<br />
                Sector 1, București<br />
                România
              </p>
            </div>

            {/* Opening Hours */}
            <div
              className="backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(144, 174, 131, 0.3)',
                border: `2px solid ${colors.goldPrimary}`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 50px rgba(237, 205, 103, 0.5), inset 0 0 60px rgba(255, 248, 220, 0.1)',
                animation: 'pulseGlow 4s ease-in-out infinite'
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 248, 220, 0.2) 50%, transparent 100%)',
                  animation: 'shimmerLight 7s ease-in-out infinite',
                  width: '50%',
                }}
              />
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                Program
              </h3>
              <div className="space-y-3 font-body" style={{ color: colors.goldSecondary }}>
                <div className="flex justify-between items-center">
                  <span>Luni - Vineri</span>
                  <span className="font-semibold" style={{ color: colors.goldPrimary }}>07:00 - 21:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sâmbătă</span>
                  <span className="font-semibold" style={{ color: colors.goldPrimary }}>08:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Duminică</span>
                  <span className="font-semibold" style={{ color: colors.goldPrimary }}>09:00 - 18:00</span>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div
              className="backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(144, 174, 131, 0.3)',
                border: `2px solid ${colors.goldPrimary}`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 50px rgba(237, 205, 103, 0.5), inset 0 0 60px rgba(255, 248, 220, 0.1)',
                animation: 'pulseGlow 4s ease-in-out infinite'
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 248, 220, 0.2) 50%, transparent 100%)',
                  animation: 'shimmerLight 8s ease-in-out infinite',
                  width: '50%',
                }}
              />
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                Contactează-ne
              </h3>
              <div className="space-y-3 font-body" style={{ color: colors.goldSecondary }}>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1 opacity-80">Email</p>
                  <a
                    href="mailto:hello@houseofaya.ro"
                    className="transition-opacity hover:opacity-70"
                    style={{ color: colors.goldPrimary }}
                  >
                    hello@houseofaya.ro
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider mb-1 opacity-80">Telefon</p>
                  <a
                    href="tel:+40771444554"
                    className="transition-opacity hover:opacity-70"
                    style={{ color: colors.goldPrimary }}
                  >
                    +40 771 444 554
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div
              className="backdrop-blur-sm rounded-2xl p-8 relative overflow-hidden"
              style={{
                background: 'rgba(144, 174, 131, 0.3)',
                border: `2px solid ${colors.goldPrimary}`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 50px rgba(237, 205, 103, 0.5), inset 0 0 60px rgba(255, 248, 220, 0.1)',
                animation: 'pulseGlow 4s ease-in-out infinite'
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 248, 220, 0.2) 50%, transparent 100%)',
                  animation: 'shimmerLight 5s ease-in-out infinite',
                  width: '50%',
                }}
              />
              <h3
                className="font-display text-2xl mb-4"
                style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                Urmărește-ne
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/houseofaya.manifest/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:opacity-70"
                  style={{ borderColor: colors.goldPrimary, color: colors.goldPrimary }}
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div
              className="backdrop-blur-sm rounded-2xl p-4"
              style={{
                background: 'rgba(144, 174, 131, 0.3)',
                border: `3px solid ${colors.goldPrimary}`,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(237, 205, 103, 0.6), 0 0 100px rgba(255, 248, 220, 0.4)',
                animation: 'pulseGlow 3s ease-in-out infinite'
              }}
            >
              <div className="w-full h-[500px] lg:h-[700px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.8364087505856!2d26.0956!3d44.4758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4f1b0e0001%3A0x1!2sStrada%20Madrigalului%2C%20Bucure%C8%99ti!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="House of Aya Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Golden Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center px-6">
        <div className="relative w-full max-w-4xl">
          <div
            className="h-0.5 w-full relative"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, #edcd67 50%, transparent 100%)',
              boxShadow: '0 0 15px rgba(237, 205, 103, 0.8), 0 0 30px rgba(255, 248, 220, 0.6), 0 0 45px rgba(237, 205, 103, 0.4)',
            }}
          >
            {/* Extra shine effect */}
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255, 248, 220, 0.9) 50%, transparent 100%)',
                boxShadow: '0 0 20px rgba(255, 248, 220, 0.9)',
                filter: 'blur(1px)',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
