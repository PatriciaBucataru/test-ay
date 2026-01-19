import { useState, useEffect } from 'react';
import { getDeviceOptimizedStyles } from '../utils/deviceDetection';

export default function AboutSection() {
  const [particles, setParticles] = useState([]);
  const deviceStyles = getDeviceOptimizedStyles();

  useEffect(() => {
    const newParticles = Array.from({ length: deviceStyles.particleCount }, (_, i) => ({
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
    <section
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden"
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
          background: 'radial-gradient(circle at 20% 30%, rgba(237, 205, 103, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 248, 220, 0.1) 0%, transparent 50%)',
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
            boxShadow: deviceStyles.getParticleShadow(),
            filter: deviceStyles.getParticleFilter(),
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2
            className="font-display text-4xl lg:text-6xl font-light tracking-wide mb-4"
            style={{
              color: colors.goldPrimary,
              textShadow: '0 0 12px rgba(237, 205, 103, 0.6), 0 0 20px rgba(255, 248, 220, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Manifest of Light
          </h2>
          <div
            className="w-20 h-px mx-auto relative"
            style={{
              backgroundColor: colors.goldPrimary,
              boxShadow: '0 0 20px rgba(237, 205, 103, 0.9), 0 0 40px rgba(255, 248, 220, 0.6)',
              height: '2px'
            }}
          ></div>
        </div>

        {/* Introduction - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div
              className="relative overflow-hidden rounded-3xl h-64 lg:h-96"
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(237, 205, 103, 0.6), 0 0 100px rgba(255, 248, 220, 0.4)',
                border: `3px solid ${colors.goldPrimary}`,
                animation: 'pulseGlow 3s ease-in-out infinite'
              }}
            >
              <img
                src="/images/about.jpg"
                alt="House of Aya Space"
                className="w-full h-full object-cover"
              />
              {/* Light overlay on image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 248, 220, 0.15) 0%, transparent 70%)',
                }}
              />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="order-1 lg:order-2">
            <p
              className="font-display text-xl lg:text-2xl font-light leading-relaxed mb-6 italic"
              style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              This Manifest is the breath of House of Aya — the word of Light calling us toward harmony, presence, and awakening.
            </p>
            <p
              className="font-body text-base lg:text-lg leading-relaxed"
              style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
            >
              Within every breath, there is a calling toward Light. An unseen thread binds the body to the spirit, matter to essence, earth to sky. Here, in the House of AYA, the body becomes a temple, and the soul remembers its origin.
            </p>
          </div>
        </div>

        {/* Core Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <div className="text-center">
            <h3
              className="font-display text-2xl font-light mb-3"
              style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Beauty
            </h3>
            <p
              className="font-body text-sm lg:text-base leading-relaxed"
              style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Not a shape, but a state of grace
            </p>
          </div>

          <div className="text-center">
            <h3
              className="font-display text-2xl font-light mb-3"
              style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Power
            </h3>
            <p
              className="font-body text-sm lg:text-base leading-relaxed"
              style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Not control, but presence
            </p>
          </div>

          <div className="text-center">
            <h3
              className="font-display text-2xl font-light mb-3"
              style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Balance
            </h3>
            <p
              className="font-body text-sm lg:text-base leading-relaxed"
              style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Not silence, but harmony
            </p>
          </div>
        </div>

        {/* Main Message */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p
            className="font-display text-2xl lg:text-3xl font-light leading-relaxed italic"
            style={{ color: colors.goldPrimary, textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}
          >
            "We do not rise above the world — we illuminate it from within. We are living creation. We are the Manifest of Light. We are AYA."
          </p>
        </div>

        {/* What is AYA */}
        <div
          className={`max-w-3xl mx-auto rounded-3xl p-8 lg:p-12 relative overflow-hidden ${deviceStyles.getBackdropClass()}`}
          style={{
            background: 'rgba(144, 174, 131, 0.3)',
            border: `2px solid ${colors.goldPrimary}`,
            boxShadow: deviceStyles.getBoxShadow(false),
            transform: 'translateZ(0)',
          }}
        >
          <h3
            className="font-display text-3xl lg:text-4xl font-light mb-6 text-center"
            style={{
              color: colors.goldPrimary,
              textShadow: '0 0 12px rgba(237, 205, 103, 0.6), 0 0 20px rgba(255, 248, 220, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            The Origin of AYA
          </h3>
          <p
            className="font-body text-base lg:text-lg leading-relaxed mb-4"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            "AYA" comes from the Quechua language and means <span className="italic font-semibold">spirit, soul, eternal life</span>. In some South American traditions, it is a sacred word connected to the "plant of the spirit." Yet, when used alone, "AYA" transcends that reference.
          </p>
          <p
            className="font-body text-base lg:text-lg leading-relaxed"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            It becomes the symbol of the pure essence of being — the light that exists beyond form, name, and time. For House of Aya, this word represents the meeting point between body and consciousness, the place where light takes form and energy becomes living creation.
          </p>
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
    </section>
  );
}
