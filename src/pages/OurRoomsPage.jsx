import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(237, 205, 103, 0.15) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 248, 220, 0.12) 0%, transparent 40%)',
          transform: 'translateZ(0)',
        }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      className="relative h-full overflow-hidden group"
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

export default function OurRoomsPage() {
  const deviceStyles = getDeviceOptimizedStyles();

  const colors = {
    goldPrimary: '#edcd67',
    goldSecondary: '#f0db8e'
  };

  const rooms = [
    {
      id: 1,
      title: "The Core Temple",
      subtitle: "Forță conștientă",
      path: "/core-temple",
      icon: "🌿",
      images: [
        "/images/new/lagree3.webp",
        "/images/new/lagree1.webp",
        "/images/new/lagree2.webp"
      ],
      layout: "large-left" // Featured large card
    },
    {
      id: 2,
      title: "Private Strength",
      subtitle: "Moments of presence",
      path: "/private-strength",
      icon: "☀️",
      images: [
        "/images/new/private1.webp",
        "/images/new/private2.webp",
      ],
      layout: "small"
    },
    {
      id: 3,
      title: "Breath Chamber",
      subtitle: "Where breath becomes practice",
      path: "/breath-chamber",
      icon: "🌙",
      images: [
        "/images/new/breath1.webp",
        "/images/new/breath2.webp",
      ],
      layout: "small"
    },
    {
      id: 4,
      title: "Jade Bed Room",
      subtitle: "Deep restoration",
      path: "/jade-bed-room",
      icon: "💧",
      images: [
        "/images/new/jade1.webp",
        "/images/new/jade2.webp"
      ],
      layout: "wide"
    },
    {
      id: 5,
      title: "Beauty Rituals",
      subtitle: "Inner radiance",
      path: "/beauty-rituals",
      icon: "✨",
      images: [
        "/images/new/beauty1.webp",
        "/images/new/beauty2.webp"
      ],
      layout: "tall"
    },
    {
      id: 6,
      title: "AI Strength",
      subtitle: "Technology meets intuition",
      path: "/ai-strength",
      icon: "💪",
      images: [
        "/images/new/strength1.webp",
        "/images/new/strength2.webp",
        "/images/new/strength3.webp"
      ],
      layout: "medium"
    },
    {
      id: 7,
      title: "Aya Rituals",
      subtitle: "Sacred ceremonies",
      path: "/aya-rituals",
      icon: "🕉️",
      images: [
        "/images/new/up1.webp",
        "/images/new/up2.webp",
        "/images/new/up3.webp"
      ],
      layout: "medium"
    }
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
            to="/"
            className="font-body text-sm tracking-wider transition-colors"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            ← Înapoi Acasă
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-12 relative z-10">
        {/* Page Header - Floating text */}
        <div className="text-center mb-20 relative">
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-32 hidden lg:block"
            style={{
              background: `linear-gradient(180deg, transparent, ${colors.goldPrimary}, transparent)`,
              boxShadow: `0 0 20px ${colors.goldPrimary}`,
            }}
          />
          <h1
            className="font-display text-5xl lg:text-7xl font-light mb-6"
            style={{
              color: colors.goldPrimary,
              textShadow: '0 0 20px rgba(237, 205, 103, 0.6), 0 0 40px rgba(255, 248, 220, 0.4)'
            }}
          >
            Our Spaces
          </h1>
          <p
            className="font-body text-lg lg:text-xl max-w-2xl mx-auto"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            Seven unique sanctuaries, each a portal to transformation
          </p>
        </div>

        {/* Magazine-style Masonry Layout */}
        <div className="space-y-8 lg:space-y-12">
          {/* Row 1: Large Featured + Two Small */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Large Featured Card - Core Temple */}
            <div
              onClick={() => window.location.href = rooms[0].path}
              className="lg:col-span-2 group relative rounded-[2rem] overflow-hidden h-[400px] lg:h-[600px]"
              style={{
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(237, 205, 103, 0.6), 0 0 100px rgba(255, 248, 220, 0.4), inset 0 0 80px rgba(237, 205, 103, 0.15)',
                border: `2px solid ${colors.goldPrimary}`,
                cursor: 'pointer',
              }}
            >
              <img
                src={rooms[0].images[0]}
                alt={rooms[0].title}
                className="absolute inset-0 w-full h-full object-cover"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <h2
                  className="font-display text-3xl lg:text-5xl font-light mb-2"
                  style={{
                    color: colors.goldPrimary,
                    textShadow: '0 0 20px rgba(237, 205, 103, 0.8), 0 0 40px rgba(255, 248, 220, 0.4), 0 2px 8px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {rooms[0].title}
                </h2>
                <p
                  className="font-display text-lg lg:text-xl italic"
                  style={{
                    color: colors.goldSecondary,
                    textShadow: '0 0 15px rgba(240, 219, 142, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {rooms[0].subtitle}
                </p>
              </div>
            </div>

            {/* Two Small Cards Stacked */}
            <div className="space-y-6 lg:space-y-8">
              {[rooms[1], rooms[2]].map((room) => (
                <div
                  key={room.id}
                  onClick={() => window.location.href = room.path}
                  className="group relative rounded-[2rem] overflow-hidden h-[280px]"
                  style={{
                    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(237, 205, 103, 0.6), 0 0 100px rgba(255, 248, 220, 0.4), inset 0 0 80px rgba(237, 205, 103, 0.15)',
                    border: `2px solid ${colors.goldPrimary}`,
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={room.images[0]}
                    alt={room.title}
                    className="absolute inset-0 w-full h-full object-cover"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3
                      className="font-display text-3xl lg:text-5xl font-light mb-2"
                      style={{
                        color: colors.goldPrimary,
                        textShadow: '0 0 20px rgba(237, 205, 103, 0.8), 0 0 40px rgba(255, 248, 220, 0.4), 0 2px 8px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {room.title}
                    </h3>
                    <p
                      className="font-display text-lg lg:text-xl italic"
                      style={{
                        color: colors.goldSecondary,
                        textShadow: '0 0 15px rgba(240, 219, 142, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {room.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Wide Card - Jade Bed Room */}
          <div
            onClick={() => window.location.href = rooms[3].path}
            className="group relative rounded-[2rem] overflow-hidden h-[350px] lg:h-[450px]"
            style={{
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(237, 205, 103, 0.6), 0 0 100px rgba(255, 248, 220, 0.4), inset 0 0 80px rgba(237, 205, 103, 0.15)',
              border: `2px solid ${colors.goldPrimary}`,
              cursor: 'pointer',
            }}
          >
            <img
              src={rooms[3].images[0]}
              alt={rooms[3].title}
              className="absolute inset-0 w-full h-full object-cover"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
              <h2
                className="font-display text-3xl lg:text-5xl font-light mb-2"
                style={{
                  color: colors.goldPrimary,
                  textShadow: '0 0 20px rgba(237, 205, 103, 0.8), 0 0 40px rgba(255, 248, 220, 0.4), 0 2px 8px rgba(0, 0, 0, 0.5)'
                }}
              >
                {rooms[3].title}
              </h2>
              <p
                className="font-display text-lg lg:text-xl italic"
                style={{
                  color: colors.goldSecondary,
                  textShadow: '0 0 15px rgba(240, 219, 142, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                {rooms[3].subtitle}
              </p>
            </div>
          </div>

          {/* Row 3: Tall + Two Medium */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Tall Card - Beauty Rituals */}
            <div
              onClick={() => window.location.href = rooms[4].path}
              className="group relative rounded-[2rem] overflow-hidden h-[500px] lg:h-[700px]"
              style={{
                boxShadow: '0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(237, 205, 103, 0.6), 0 0 100px rgba(255, 248, 220, 0.4), inset 0 0 80px rgba(237, 205, 103, 0.15)',
                border: `2px solid ${colors.goldPrimary}`,
                cursor: 'pointer',
              }}
            >
              <img
                src={rooms[4].images[0]}
                alt={rooms[4].title}
                className="absolute inset-0 w-full h-full object-cover"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2
                  className="font-display text-3xl lg:text-5xl font-light mb-2"
                  style={{
                    color: colors.goldPrimary,
                    textShadow: '0 0 20px rgba(237, 205, 103, 0.8), 0 0 40px rgba(255, 248, 220, 0.4), 0 2px 8px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {rooms[4].title}
                </h2>
                <p
                  className="font-display text-lg lg:text-xl italic"
                  style={{
                    color: colors.goldSecondary,
                    textShadow: '0 0 15px rgba(240, 219, 142, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {rooms[4].subtitle}
                </p>
              </div>
            </div>

            {/* Two Medium Cards */}
            <div className="lg:col-span-2 grid gap-6 lg:gap-8">
              {[rooms[5], rooms[6]].map((room) => (
                <div
                  key={room.id}
                  onClick={() => window.location.href = room.path}
                  className="group relative rounded-[2rem] overflow-hidden h-[330px]"
                  style={{
                    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.25), 0 0 60px rgba(237, 205, 103, 0.6), 0 0 100px rgba(255, 248, 220, 0.4), inset 0 0 80px rgba(237, 205, 103, 0.15)',
                    border: `2px solid ${colors.goldPrimary}`,
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={room.images[0]}
                    alt={room.title}
                    className="absolute inset-0 w-full h-full object-cover"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3
                      className="font-display text-3xl lg:text-5xl font-light mb-2"
                      style={{
                        color: colors.goldPrimary,
                        textShadow: '0 0 20px rgba(237, 205, 103, 0.8), 0 0 40px rgba(255, 248, 220, 0.4), 0 2px 8px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {room.title}
                    </h3>
                    <p
                      className="font-display text-lg lg:text-xl italic"
                      style={{
                        color: colors.goldSecondary,
                        textShadow: '0 0 15px rgba(240, 219, 142, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      {room.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
