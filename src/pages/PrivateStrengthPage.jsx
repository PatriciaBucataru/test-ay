import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getDeviceOptimizedStyles } from '../utils/deviceDetection';

// Hook for scroll animations
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

export default function PrivateStrengthPage() {
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

  // Scroll animation refs
  const [ref1, isVisible1] = useScrollAnimation();
  const [ref2, isVisible2] = useScrollAnimation();
  const [ref3, isVisible3] = useScrollAnimation();
  const [ref4, isVisible4] = useScrollAnimation();

  useEffect(() => {
    const newParticles = Array.from({ length: deviceStyles.particleCount * 1.5 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 3,
      duration: Math.random() * 10 + 6,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, [deviceStyles.particleCount]);

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8b9e7d 0%, #7a8d6e 25%, #6b7c5e 50%, #5e6f50 75%, #5a6b4d 100%)',
      }}
    >
      {/* Radiant light overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(237, 205, 103, 0.32) 0%, rgba(255, 248, 220, 0.18) 30%, transparent 55%), radial-gradient(circle at 80% 70%, rgba(255, 248, 220, 0.30) 0%, rgba(237, 205, 103, 0.15) 30%, transparent 55%), radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.10) 0%, transparent 65%), radial-gradient(circle at 10% 80%, rgba(255, 248, 220, 0.22) 0%, transparent 45%), radial-gradient(circle at 90% 20%, rgba(255, 248, 220, 0.18) 0%, transparent 45%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Animated particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 248, 220, 0.6) 20%, rgba(237, 205, 103, 0.4) 40%, rgba(237, 205, 103, 0.15) 100%)',
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
              boxShadow: deviceStyles.getParticleShadow(),
              filter: deviceStyles.getParticleFilter(),
              willChange: 'transform, opacity',
              transform: 'translateZ(0)',
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.4;
          }
          25% {
            transform: translate3d(10px, -20px, 0);
            opacity: 0.6;
          }
          50% {
            transform: translate3d(-10px, -40px, 0);
            opacity: 0.5;
          }
          75% {
            transform: translate3d(-12px, -20px, 0);
            opacity: 0.6;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-on-scroll {
          opacity: 0;
        }

        .animate-on-scroll.visible {
          animation: fadeInUp 0.8s ease-out forwards;
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="font-display text-5xl lg:text-7xl tracking-wider mb-6"
            style={{
              color: colors.goldPrimary,
              textShadow: '0 0 20px rgba(237, 205, 103, 0.6), 0 0 40px rgba(255, 248, 220, 0.3)',
              fontWeight: '300'
            }}
          >
            Aya Strength Room
          </h1>
          <p
            className="font-display text-lg lg:text-xl tracking-wide"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontWeight: '300' }}
          >
            Putere Inteligentă
          </p>
        </div>

        {/* Section 1: Intro text centered */}
        <div ref={ref1} className={`max-w-4xl mx-auto text-center mb-20 lg:mb-32 animate-on-scroll ${isVisible1 ? 'visible' : ''}`}>
          <p className="font-display text-lg lg:text-xl leading-relaxed" style={{ color: colors.goldSecondary, fontWeight: '300' }}>
            Aya Strength Room este dedicată antrenamentelor de forță asistate de tehnologie de ultimă generație. Designul este curat, aerisit și orientat spre progres real. Aici corpul este construit inteligent, iar performanța este susținută prin control, nu prin presiune.
          </p>
        </div>

        {/* Section 2: Large hero image */}
        <div ref={ref2} className={`relative mb-20 lg:mb-32 animate-on-scroll ${isVisible2 ? 'visible' : ''}`}>
          <div
            className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-3xl"
            style={{
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(237, 205, 103, 0.6), 0 0 100px rgba(255, 248, 220, 0.4), inset 0 0 80px rgba(237, 205, 103, 0.15)',
              border: `2px solid ${colors.goldPrimary}`,
            }}
          >
            <img
              src="/images/new/private1.webp"
              alt="Aya Strength Room"
              className="w-full h-full object-cover"
            />
            {/* Bottom to top gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Subtle glowy overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 50% 80%, rgba(237, 205, 103, 0.08) 0%, transparent 60%),
                             radial-gradient(circle at 30% 30%, rgba(255, 248, 220, 0.06) 0%, transparent 50%)`
              }}
            />
          </div>
        </div>

        {/* Section 3: Image grid - 2 photos side by side */}
        <div ref={ref3} className={`grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-32 animate-on-scroll ${isVisible3 ? 'visible' : ''}`}>
          <div className="relative h-[350px] lg:h-[500px] overflow-hidden rounded-3xl">
            <img
              src="/images/new/private2.webp"
              alt="Strength Training Space"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(180deg, rgba(90, 107, 77, 0.15) 0%, transparent 30%, transparent 70%, rgba(90, 107, 77, 0.2) 100%)`
              }}
            />
          </div>
          <div className="relative h-[350px] lg:h-[500px] overflow-hidden rounded-3xl">
            <img
              src="/images/new/private3.webp"
              alt="Training Equipment"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `radial-gradient(circle at 30% 50%, rgba(237, 205, 103, 0.12) 0%, transparent 60%)`
              }}
            />
          </div>
        </div>

        {/* Section 4: Centered statement with framing vertical lines */}
        <div ref={ref4} className={`relative mb-20 lg:mb-32 animate-on-scroll ${isVisible4 ? 'visible' : ''}`}>
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
              Control inteligent, progres real
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
