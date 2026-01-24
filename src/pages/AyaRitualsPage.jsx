import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDeviceOptimizedStyles } from '../utils/deviceDetection';

export default function AyaRitualsPage() {
  const colors = {
    goldPrimary: '#edcd67',
    goldSecondary: '#f0db8e'
  };

  const deviceStyles = getDeviceOptimizedStyles();

  // Golden Particles Effect
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: deviceStyles.particleCount * 1.5 }, (_, i) => ({
      id: i,
      size: Math.random() * 5 + 3,
      left: Math.random() * 100,
      animationDuration: Math.random() * 20 + 15,
      animationDelay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.2,
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
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      {/* Navigation */}
      <nav className="relative z-10 p-6 lg:p-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 transition-all duration-300 hover:gap-4"
          style={{ color: colors.goldPrimary }}
        >
          <span className="text-2xl">←</span>
          <span className="text-sm tracking-wider">BACK TO HOME</span>
        </Link>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20">

        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h1
            className="text-5xl lg:text-7xl font-light tracking-wider mb-4"
            style={{
              color: colors.goldPrimary,
              textShadow: `0 0 30px ${colors.goldPrimary}80, 0 0 60px ${colors.goldPrimary}40`
            }}
          >
            AYA RITUAL COUNTER
          </h1>
          <p className="text-xl lg:text-2xl tracking-wide" style={{ color: colors.goldSecondary }}>
            Ritual Bar
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

        {/* Section 1: Opening statement - centered with framing */}
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
              className="text-2xl lg:text-4xl font-light leading-relaxed tracking-wide mb-8"
              style={{
                color: colors.goldPrimary,
                textShadow: `0 0 30px ${colors.goldPrimary}40`
              }}
            >
              Aya Ritual Counter este barul sacru al energiei curate.
            </p>
          </div>
        </div>

        {/* Section 2: Wide image */}
        <div className="mb-20 lg:mb-32">
          <div className="relative h-[350px] lg:h-[550px] overflow-hidden rounded-lg">
            <img
              src="/images/new/up1.webp"
              alt="Aya Ritual Counter"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(90, 107, 77, 0.6), transparent 60%)'
              }}
            />
          </div>
        </div>

        {/* Section 3: Two-column content with vertical divider */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-32 relative">
          <div>
            <p className="text-lg lg:text-xl leading-relaxed mb-6">
              Aici se servesc shake-uri funcționale Aya, matcha, cafea atent preparată, ceaiuri, cookies Aya și ciocolată selectată pentru echilibru și vitalitate.
            </p>
          </div>

          <div>
            <p className="text-lg lg:text-xl leading-relaxed mb-6" style={{ color: colors.goldSecondary }}>
              Este un spațiu de integrare după practică, de socializare blândă și reîncărcare.
            </p>
            <p className="text-lg lg:text-xl leading-relaxed">
              Fiecare produs Aya este ales cu intenție.
            </p>
          </div>

          {/* Vertical divider line */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(180deg, transparent, ${colors.goldPrimary}, transparent)`,
              boxShadow: `0 0 20px ${colors.goldPrimary}`,
            }}
          />
        </div>

        {/* Section 4: Image grid - 2 images side by side */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-32">
          <div className="relative h-[300px] lg:h-[450px] overflow-hidden rounded-lg">
            <img
              src="/images/new/up2.webp"
              alt="Ritual Bar Space"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[300px] lg:h-[450px] overflow-hidden rounded-lg">
            <img
              src="/images/new/up3.webp"
              alt="Ritual Counter Details"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Section 5: Philosophy statement - offset with vertical line */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-32 relative">
          <div className="lg:col-span-2"></div>

          <div className="lg:col-span-9">
            <div className="relative">
              {/* Decorative vertical line on left */}
              <div
                className="hidden lg:block absolute -left-8 top-0 bottom-0 w-px"
                style={{
                  background: `linear-gradient(180deg, transparent, ${colors.goldPrimary}, ${colors.goldPrimary}, transparent)`,
                  boxShadow: `0 0 20px ${colors.goldPrimary}`,
                }}
              />

              <div
                className="p-8 lg:p-12 rounded-lg"
                style={{
                  background: 'rgba(144, 174, 131, 0.25)',
                  border: `1px solid ${colors.goldPrimary}40`,
                  boxShadow: `0 0 40px ${colors.goldPrimary}20, inset 0 0 40px ${colors.goldPrimary}10`
                }}
              >
                <p
                  className="text-2xl lg:text-3xl font-light leading-relaxed tracking-wide"
                  style={{
                    color: colors.goldPrimary,
                    textShadow: `0 0 20px ${colors.goldPrimary}40`
                  }}
                >
                  Spațiu de integrare, socializare blândă și reîncărcare
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1"></div>
        </div>

        {/* Final overlay banner */}
        <div className="relative -mx-6 lg:-mx-12">
          <div
            className="relative h-[200px] lg:h-[280px] flex items-center justify-center overflow-hidden"
            style={{
              background: `linear-gradient(135deg, rgba(139, 158, 125, 0.4), rgba(107, 124, 94, 0.4))`,
              borderTop: `1px solid ${colors.goldPrimary}30`,
              borderBottom: `1px solid ${colors.goldPrimary}30`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at center, ${colors.goldPrimary}15, transparent 70%)`
              }}
            />
            <p
              className="relative text-2xl lg:text-4xl font-light tracking-widest text-center px-8"
              style={{
                color: colors.goldPrimary,
                textShadow: `0 0 40px ${colors.goldPrimary}80, 0 0 80px ${colors.goldPrimary}40`
              }}
            >
              Energie curată, aleasă cu intenție
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
