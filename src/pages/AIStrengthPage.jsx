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

export default function AIStrengthPage() {
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
  const [ref5, isVisible5] = useScrollAnimation();

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);

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
            The Strength Room
          </h1>
          <p
            className="font-display text-lg lg:text-xl tracking-wide"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontWeight: '300' }}
          >
            AI-Powered Intelligent Training
          </p>
        </div>

        {/* Section 1: Intro text */}
        <div ref={ref1} className={`max-w-4xl mx-auto text-center mb-20 lg:mb-32 animate-on-scroll ${isVisible1 ? 'visible' : ''}`}>
          <p className="font-display text-lg lg:text-xl leading-relaxed mb-6" style={{ color: colors.goldSecondary, fontWeight: '300' }}>
            The Strength Room este spațiul unde forța clasică întâlnește inteligența artificială.
            Un loc dedicat puterii funcționale, controlului și evoluției personale, în care tehnologia devine aliat, nu presiune.
          </p>
          <p className="font-display text-lg lg:text-xl leading-relaxed mb-6" style={{ color: colors.goldSecondary, fontWeight: '300' }}>
            Aici, antrenamentul nu este despre greutăți brute, ci despre forță ghidată, adaptată și conștientă. Fiecare mișcare este susținută de date, precizie și siguranță, pentru un progres real și sustenabil.
          </p>
          <p className="font-display text-lg lg:text-xl leading-relaxed" style={{ color: colors.goldSecondary, fontWeight: '300' }}>
            The Strength Room este creat pentru cei care vor rezultate clare, fără riscuri inutile, într-un spațiu elegant, concentrat și profund eficient.
          </p>
        </div>

        {/* Section 2: Images side by side */}
        <div ref={ref2} className={`grid lg:grid-cols-2 gap-6 lg:gap-8 mb-20 lg:mb-32 animate-on-scroll ${isVisible2 ? 'visible' : ''}`}>
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-3xl">
            <img
              src="/images/new/strength1.webp"
              alt="The Strength Room"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: `linear-gradient(180deg, rgba(90, 107, 77, 0.15) 0%, transparent 30%, transparent 70%, rgba(90, 107, 77, 0.2) 100%)`
              }}
            />
          </div>
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-3xl">
            <img
              src="/images/new/strength2.webp"
              alt="AI Strength Training"
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

        {/* Section 3: Speediance Content */}
        <div
          ref={ref3}
          className={`rounded-3xl p-12 lg:p-16 max-w-5xl mx-auto relative mb-20 lg:mb-32 animate-on-scroll ${isVisible3 ? 'visible' : ''} ${deviceStyles.getBackdropClass()}`}
          style={{
            background: 'rgba(144, 174, 131, 0.3)',
            border: `1px solid ${colors.goldPrimary}`,
            boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2), 0 0 50px rgba(237, 205, 103, 0.15)',
            transform: 'translateZ(0)',
          }}
        >
          <h2
            className="font-display text-3xl lg:text-5xl mb-10 tracking-wide text-center"
            style={{ color: colors.goldPrimary, textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', fontWeight: '300' }}
          >
            Speediance – AI-Powered Strength Training
          </h2>
          <p
            className="font-display text-lg lg:text-xl leading-relaxed mb-8"
            style={{ color: colors.goldSecondary, fontWeight: '300' }}
          >
            Speediance Gym Monster 2 Pro este un aparat de forță de ultimă generație, bazat pe inteligență artificială, care învață, se adaptează și optimizează fiecare antrenament în timp real.
          </p>
          <p
            className="font-display text-lg lg:text-xl leading-relaxed mb-8"
            style={{ color: colors.goldSecondary, fontWeight: '300' }}
          >
            Sistemul AI ajustează automat rezistența, corectează execuția și personalizează exercițiile în funcție de nivelul, obiectivele și starea ta din acel moment.
          </p>

          <h3
            className="font-display text-2xl lg:text-3xl mb-6 tracking-wide"
            style={{ color: colors.goldPrimary, textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', fontWeight: '300' }}
          >
            Beneficii esențiale:
          </h3>
          <ul className="space-y-4 mb-8">
            {[
              "antrenament de forță complet, într-un singur aparat",
              "rezistență digitală precisă, fără impact agresiv asupra articulațiilor",
              "adaptare automată la nivelul tău și progres inteligent",
              "siguranță maximă și control total al mișcării"
            ].map((benefit, index) => (
              <li
                key={index}
                className="font-display text-lg lg:text-xl flex items-start gap-3"
                style={{ color: colors.goldSecondary, fontWeight: '300' }}
              >
                <span style={{ color: colors.goldPrimary }}>•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <p
            className="font-display text-lg lg:text-xl leading-relaxed text-center"
            style={{ color: colors.goldSecondary, fontWeight: '300' }}
          >
            Este forță, dar cu inteligență. Putere, dar cu finețe.
          </p>
        </div>

        {/* Section 4: Large image */}
        <div ref={ref4} className={`relative mb-20 lg:mb-32 animate-on-scroll ${isVisible4 ? 'visible' : ''}`}>
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-3xl">
            <img
              src="/images/new/strength3.webp"
              alt="Strength Training Experience"
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

        {/* Section 5: Experience */}
        <div ref={ref5} className={`max-w-5xl mx-auto mb-20 lg:mb-32 animate-on-scroll ${isVisible5 ? 'visible' : ''}`}>
          <h2
            className="font-display text-3xl lg:text-5xl mb-12 tracking-wide text-center"
            style={{ color: colors.goldPrimary, textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', fontWeight: '300' }}
          >
            Experiența The Strength Room
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {[
              "Sesiuni personalizate, ghidate de tehnologie AI",
              "Antrenamente eficiente pentru tonifiere, forță și stabilitate",
              "Monitorizare inteligentă a progresului",
              "Atmosferă premium, focusată și modernă"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <span style={{ color: colors.goldPrimary, fontSize: '1.5rem' }}>•</span>
                <p
                  className="font-display text-lg lg:text-xl leading-relaxed"
                  style={{ color: colors.goldSecondary, fontWeight: '300' }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p
            className="font-display text-lg lg:text-xl leading-relaxed text-center mb-8"
            style={{ color: colors.goldSecondary, fontWeight: '300' }}
          >
            The Strength Room redefinește antrenamentul de forță:
            mai smart, mai sigur, mai profund.
          </p>
        </div>

        {/* Section 6: Final statement */}
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
              Intelligent strength. Controlled power. Conscious progress.
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
