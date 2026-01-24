import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDeviceOptimizedStyles } from '../utils/deviceDetection';

export default function BreathChamberPage() {
  const colors = {
    goldPrimary: '#edcd67',
    goldSecondary: '#f0db8e'
  };

  const deviceStyles = getDeviceOptimizedStyles();

  // Golden Particles Effect
  const [particles, setParticles] = useState([]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const newParticles = Array.from({ length: deviceStyles.particleCount * 0.5 }, (_, i) => ({
      id: i,
      size: Math.random() * 5 + 3,
      left: Math.random() * 100,
      animationDuration: Math.random() * 25 + 20,
      animationDelay: Math.random() * 8,
      opacity: Math.random() * 0.3 + 0.15,
    }));
    setParticles(newParticles);
  }, [deviceStyles.particleCount]);

  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8b9e7d 0%, #7a8d6e 25%, #6b7c5e 50%, #5e6f50 75%, #5a6b4d 100%)',
      }}
    >
      {/* Golden Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full opacity-60"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              background: `radial-gradient(circle, rgba(255, 255, 255, 0.9), ${colors.goldPrimary}, ${colors.goldSecondary})`,
              boxShadow: `0 0 ${particle.size * 3}px ${colors.goldPrimary}, 0 0 ${particle.size * 5}px rgba(255, 248, 220, 0.4)`,
              animation: `floatParticle ${particle.animationDuration}s infinite ease-in-out`,
              animationDelay: `${particle.animationDelay}s`,
              opacity: particle.opacity,
            }}
          />
        ))}

        {/* Radiant Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, rgba(237, 205, 103, 0.28) 0%, rgba(255, 248, 220, 0.15) 30%, transparent 55%),
              radial-gradient(circle at 80% 70%, rgba(255, 248, 220, 0.25) 0%, rgba(240, 219, 142, 0.12) 30%, transparent 55%),
              radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08) 0%, rgba(237, 205, 103, 0.08) 40%, transparent 70%),
              radial-gradient(circle at 10% 80%, rgba(255, 248, 220, 0.18) 0%, transparent 45%),
              radial-gradient(circle at 90% 20%, rgba(255, 248, 220, 0.15) 0%, transparent 45%)
            `,
            pointerEvents: 'none'
          }}
        />
      </div>

      <style>{`
        @keyframes floatParticle {
          0%, 100% { transform: translate(0, 100vh) scale(1); }
          50% { transform: translate(20px, 50vh) scale(1.2); }
        }
      `}</style>

      {/* Navigation Header */}
      <nav className="relative z-10 py-6 border-b border-white/10">
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
            to="/our-rooms"
            className="font-body text-sm tracking-wider transition-colors"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            ← Înapoi
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24 mt-12">
          <h1
            className="font-display text-3xl lg:text-5xl tracking-wider mb-6"
            style={{
              color: colors.goldPrimary,
              textShadow: `0 0 20px rgba(237, 205, 103, 0.6), 0 0 40px rgba(255, 248, 220, 0.3)`,
              fontWeight: '300'
            }}
          >
            AYA BREATH CHAMBER
          </h1>
          <p className="font-display text-base lg:text-lg tracking-wide" style={{ color: colors.goldSecondary, fontWeight: '300' }}>
            Respirație Conștientă
          </p>

          {/* Decorative horizontal line */}
          <div
            className="w-32 h-px mx-auto mt-8"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.goldPrimary}, transparent)`,
              boxShadow: `0 0 20px ${colors.goldPrimary}`
            }}
          />
        </div>

        {/* Section 1: Text intro */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-32">
          <p className="font-display text-base lg:text-lg leading-relaxed mb-4" style={{ fontWeight: '300' }}>
            Aya Breath Chamber este un spațiu intim dedicat respirației conștiente, reglării sistemului nervos și eliberării emoționale.
          </p>
          <p className="font-display text-base lg:text-lg leading-relaxed" style={{ color: colors.goldSecondary, fontWeight: '300' }}>
            Lumina joasă, sunetul profund și atmosfera protejată creează condițiile pentru resetare interioară.
          </p>
        </div>

        {/* Section 2: Large hero image */}
        <div className="relative mb-20 lg:mb-32">
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-lg">
            <img
              src="/images/new/breath4.webp"
              alt="Aya Breath Chamber"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(180deg, rgba(90, 107, 77, 0.15) 0%, transparent 30%, transparent 70%, rgba(90, 107, 77, 0.2) 100%)`
              }}
            />
          </div>
        </div>

        {/* Section 3: Image grid - 3 photos with different sizes */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 mb-20 lg:mb-32">
          <div className="lg:col-span-7 relative h-[350px] lg:h-[550px] overflow-hidden rounded-lg">
            <img
              src="/images/new/breath1.webp"
              alt="Breath Chamber Interior"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 30% 50%, rgba(237, 205, 103, 0.12) 0%, transparent 60%)`
              }}
            />
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">
            <div className="relative h-[300px] lg:h-[265px] overflow-hidden rounded-lg">
              <img
                src="/images/new/breath2.webp"
                alt="Breath Chamber Space"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, rgba(255, 248, 220, 0.08) 0%, transparent 50%)`
                }}
              />
            </div>
            <div className="relative h-[300px] lg:h-[265px] overflow-hidden rounded-lg">
              <img
                src="/images/new/breath3.webp"
                alt="Breath Chamber Experience"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 70% 30%, rgba(240, 219, 142, 0.1) 0%, transparent 60%)`
                }}
              />
            </div>
          </div>
        </div>

        {/* Section 4: Centered statement with framing vertical lines */}
        <div className="relative mb-20 lg:mb-32">
          <div className="max-w-4xl mx-auto text-center relative py-12">
            {/* Left vertical line */}
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-px"
              style={{
                background: `linear-gradient(180deg, transparent, ${colors.goldPrimary}, transparent)`,
                boxShadow: `0 0 20px ${colors.goldPrimary}`,
              }}
            />

            {/* Right vertical line */}
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 w-px"
              style={{
                background: `linear-gradient(180deg, transparent, ${colors.goldPrimary}, transparent)`,
                boxShadow: `0 0 20px ${colors.goldPrimary}`,
              }}
            />

            <p
              className="font-display text-3xl lg:text-5xl leading-relaxed tracking-wide"
              style={{
                color: colors.goldPrimary,
                textShadow: `0 0 30px ${colors.goldPrimary}40`,
                fontWeight: '300'
              }}
            >
              Respirația devine instrument de transformare
            </p>
          </div>
        </div>

      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${colors.goldPrimary}, ${colors.goldSecondary})`,
          boxShadow: `0 4px 20px rgba(237, 205, 103, 0.4), 0 0 30px rgba(237, 205, 103, 0.3)`,
        }}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="rgba(90, 107, 77, 0.9)"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
