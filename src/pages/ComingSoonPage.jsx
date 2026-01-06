import React, { useState, useEffect } from 'react';

export default function ComingSoonPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setIsLoaded(true);
    const newParticles = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 7 + 8,
      delay: Math.random() * 3
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #8b9e7d 0%, #6b7c5e 50%, #5a6b4d 100%)' }}
    >
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

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.7;
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @font-face {
          font-family: 'ArinttikaSignature';
          src: url('/fonts/ArinttikaSignature.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      {/* Animated particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(255, 248, 220, 0.9) 0%, rgba(237, 205, 103, 0.7) 40%, rgba(237, 205, 103, 0.4) 100%)',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 20px rgba(237, 205, 103, 0.6), 0 0 30px rgba(255, 248, 220, 0.4)',
          }}
        />
      ))}

      <div className="relative z-10 text-center px-6">
        {/* Logo with Halo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer Halo */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                width: '180px',
                height: '180px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(255, 248, 220, 0.6) 0%, rgba(237, 205, 103, 0.5) 25%, rgba(255, 248, 220, 0.3) 50%, transparent 75%)',
                filter: 'blur(20px)',
                boxShadow: '0 0 60px rgba(237, 205, 103, 0.7), 0 0 100px rgba(255, 248, 220, 0.5)'
              }}
            />

            {/* Inner Glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                width: '140px',
                height: '140px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(237, 205, 103, 0.5) 35%, rgba(255, 248, 220, 0.4) 60%, transparent 80%)',
                filter: 'blur(10px)',
              }}
            />

            {/* Logo Container */}
            <div
              className="w-28 h-28 rounded-full border-2 flex items-center justify-center relative"
              style={{
                borderColor: colors.goldPrimary,
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 25px rgba(237, 205, 103, 0.7), 0 0 40px rgba(255, 248, 220, 0.5), inset 0 0 20px rgba(255, 248, 220, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.08)'
              }}
            >
              <div className="absolute inset-0 rounded-full border m-1" style={{ borderColor: colors.goldPrimary }}></div>
              <img
                src="/images/logo.webp"
                alt="House of Aya"
                className="object-contain relative z-10 w-24 h-24"
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

        {/* Brand Text */}
        <div className="space-y-4 mb-12">
          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-light tracking-wide"
            style={{ color: colors.goldPrimary, textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
          >
            HOUSE OF AYA
          </h1>
          <p
            className="font-display text-xl sm:text-2xl font-light tracking-[0.25em]"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            MANIFEST OF LIGHT
          </p>
        </div>

        {/* Coming Soon Message */}
        <div className="space-y-6">
          <div
            className="inline-block px-8 py-4 rounded-2xl"
            style={{
              background: 'rgba(144, 174, 131, 0.3)',
              backdropFilter: 'blur(10px)',
              border: `2px solid ${colors.goldPrimary}`,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
            }}
          >
            <p
              className="font-serif text-2xl sm:text-3xl font-light tracking-wide"
              style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              În curând...
            </p>
          </div>

          <p
            className="font-body text-base sm:text-lg max-w-md mx-auto leading-relaxed"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            Un spațiu al liniștii, transformării și renașterii interioare.
            <br />
            Un sanctuar în care corpul, mintea și sufletul se întâlnesc în armonie.
          </p>
        </div>
      </div>
    </div>
  );
}
