import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDeviceOptimizedStyles } from '../utils/deviceDetection';

const GoldenParticles = () => {
  const [particles, setParticles] = useState([]);
  const deviceStyles = getDeviceOptimizedStyles();

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
    <>
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
      `}</style>

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
    </>
  );
};

function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div
      className="relative h-[500px] lg:h-[700px] overflow-hidden group rounded-3xl"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} - Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
        aria-label="Next image"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75 w-2'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CoreTemplePage() {
  const navigate = useNavigate();
  const deviceStyles = getDeviceOptimizedStyles();
  const [showScrollTop, setShowScrollTop] = useState(true);

  const colors = {
    green: '#90ae83ff',
    goldPrimary: '#edcd67',
    goldSecondary: '#f0db8e'
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const roomData = {
    title: "Aya Core Temple",
    subtitle: "Forță conștientă, transformare profundă",
    icon: "🌿",
    images: [
      "/images/new/lagree3.webp",
      "/images/new/lagree1.webp",
      "/images/new/lagree2.webp"
    ]
  };

  const allRooms = [
    { id: 2, name: "Private Strength Chamber", path: "/private-strength", icon: "☀️" },
    { id: 3, name: "Breath Chamber", path: "/breath-chamber", icon: "🌙" },
    { id: 4, name: "Aya Healing Jade Bed Room", path: "/jade-bed-room", icon: "💧" },
    { id: 5, name: "Beauty Rituals", path: "/beauty-rituals", icon: "✨" },
    { id: 6, name: "AI Strength Training", path: "/ai-strength", icon: "💪" },
    { id: 7, name: "Aya Rituals", path: "/aya-rituals", icon: "🕉️" }
  ];

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8b9e7d 0%, #7a8d6e 25%, #6b7c5e 50%, #5e6f50 75%, #5a6b4d 100%)',
      }}
    >
      {/* Golden Particles Effect */}
      <GoldenParticles />

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
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 relative z-10">
        {/* Room Header */}
        <div className="text-center mb-12">
          <h1
            className="font-display text-5xl lg:text-7xl tracking-wider mb-6"
            style={{
              color: colors.goldPrimary,
              textShadow: '0 0 20px rgba(237, 205, 103, 0.6), 0 0 40px rgba(255, 248, 220, 0.3)',
              fontWeight: '300'
            }}
          >
            {roomData.title}
          </h1>
          <p
            className="font-display text-lg lg:text-xl tracking-wide"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', fontWeight: '300' }}
          >
            {roomData.subtitle}
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <ImageCarousel images={roomData.images} title={roomData.title} />
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto space-y-20">
          {/* Intro Section - Floating text without boxes with vertical divider */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto relative">
            <div className="text-center lg:text-left lg:pr-8">
              <p
                className="font-display text-lg lg:text-xl leading-relaxed"
                style={{
                  color: colors.goldPrimary,
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  fontWeight: '300'
                }}
              >
                Lagree în Aya Core Temple este o experiență de forță conștientă, construită pe control, precizie și prezență totală.
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
            <div className="text-center lg:text-right lg:pl-8">
              <p
                className="font-display text-lg lg:text-xl leading-relaxed"
                style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', fontWeight: '300' }}
              >
                Bazată pe mișcări lente, controlate și continue, metoda Lagree activează musculatura profundă, crește rezistența și sculptarea corpului, fără impact asupra articulațiilor.
              </p>
            </div>
          </div>

          {/* Image + Text Section - Grid Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div
                className="rounded-[2rem] overflow-hidden"
                style={{
                  boxShadow: '0 6px 30px rgba(0, 0, 0, 0.25), 0 0 50px rgba(237, 205, 103, 0.1)',
                }}
              >
                <img
                  src="/images/new/lagree2.webp"
                  alt="Lagree Training"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Text */}
            <div
              className={`order-1 lg:order-2 rounded-[2rem] p-12 lg:p-16 relative ${deviceStyles.getBackdropClass()}`}
              style={{
                background: 'rgba(144, 174, 131, 0.3)',
                border: `1px solid ${colors.goldPrimary}`,
                boxShadow: '0 6px 25px rgba(0, 0, 0, 0.2), 0 0 50px rgba(237, 205, 103, 0.15)',
                transform: 'translateZ(0)',
              }}
            >
              {/* Decorative vertical line on left side */}
              <div
                className="absolute left-0 top-12 bottom-12 w-px"
                style={{
                  background: `linear-gradient(180deg, transparent, ${colors.goldPrimary}, transparent)`,
                  boxShadow: `0 0 15px ${colors.goldPrimary}`,
                }}
              />
              <h2
                className="font-display text-2xl lg:text-3xl mb-10 tracking-wide"
                style={{ color: colors.goldPrimary, textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', fontWeight: '400' }}
              >
                Ce face Lagree diferit în Aya
              </h2>
              <ul className="space-y-5">
                {[
                  "mișcări lente care cresc intensitatea fără agresivitate",
                  "activare profundă a musculaturii, inclusiv core-ul stabilizator",
                  "focus pe calitatea mișcării, nu pe viteză sau competiție"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span
                      className="text-lg mt-1"
                      style={{ color: colors.goldPrimary, filter: 'brightness(1.1)' }}
                    >
                      ✦
                    </span>
                    <span
                      className="font-display text-base lg:text-lg flex-1"
                      style={{ color: colors.goldSecondary, fontWeight: '300' }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Atmosfera Section - Minimalist, no box, with vertical lines */}
          <div className="max-w-4xl mx-auto py-12 lg:py-20 relative">
            {/* Left vertical decorative line */}
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-px"
              style={{
                background: `linear-gradient(180deg, transparent, ${colors.goldPrimary}, transparent)`,
                boxShadow: `0 0 20px ${colors.goldPrimary}`,
              }}
            />
            {/* Right vertical decorative line */}
            <div
              className="hidden lg:block absolute right-0 top-0 bottom-0 w-px"
              style={{
                background: `linear-gradient(180deg, transparent, ${colors.goldPrimary}, transparent)`,
                boxShadow: `0 0 20px ${colors.goldPrimary}`,
              }}
            />
            <div className="text-center space-y-10 px-8 lg:px-16">
              <p
                className="font-display text-2xl lg:text-4xl tracking-wide"
                style={{ color: colors.goldPrimary, textShadow: '0 3px 12px rgba(0, 0, 0, 0.4)', fontWeight: '300' }}
              >
                Aici nu te compari.
              </p>
              <div
                className="w-32 h-px mx-auto"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.goldPrimary}, transparent)`,
                  boxShadow: `0 0 20px ${colors.goldPrimary}`,
                }}
              />
              <p
                className="font-display text-2xl lg:text-4xl tracking-wide"
                style={{ color: colors.goldPrimary, textShadow: '0 3px 12px rgba(0, 0, 0, 0.4)', fontWeight: '300' }}
              >
                Aici te întâlnești cu tine.
              </p>
            </div>
          </div>

          {/* Wide Photo Section */}
          <div className="max-w-6xl mx-auto">
            <div
              className="rounded-[2rem] overflow-hidden"
              style={{
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.3), 0 0 60px rgba(237, 205, 103, 0.12)',
              }}
            >
              <img
                src="/images/new/lagree1.webp"
                alt="Aya Core Temple"
                className="w-full h-[350px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Final Message - Overlay on image effect */}
          <div className="relative max-w-6xl mx-auto">
            <div
              className="absolute inset-0 rounded-[2rem]"
              style={{
                background: 'linear-gradient(135deg, rgba(107, 124, 94, 0.85) 0%, rgba(90, 107, 77, 0.9) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            />
            <div className="relative z-10 px-8 lg:px-20 py-16 lg:py-24 text-center">
              <div
                className="w-16 h-px mx-auto mb-8"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.goldPrimary}, transparent)`,
                  boxShadow: `0 0 15px ${colors.goldPrimary}`,
                }}
              />
              <p
                className="font-display text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto"
                style={{
                  color: colors.goldPrimary,
                  textShadow: '0 3px 12px rgba(0, 0, 0, 0.5)',
                  fontWeight: '300'
                }}
              >
                Lagree în Aya Core Temple este o practică a autocontrolului, a clarității și a transformării reale — din interior spre exterior.
              </p>
              <div
                className="w-16 h-px mx-auto mt-8"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colors.goldPrimary}, transparent)`,
                  boxShadow: `0 0 15px ${colors.goldPrimary}`,
                }}
              />
            </div>
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
