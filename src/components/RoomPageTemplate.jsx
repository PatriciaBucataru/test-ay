import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDeviceOptimizedStyles } from '../utils/deviceDetection';

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

export default function RoomPageTemplate({ roomData, currentRoomId }) {
  const navigate = useNavigate();
  const deviceStyles = getDeviceOptimizedStyles();

  const colors = {
    green: '#90ae83ff',
    goldPrimary: '#edcd67',
    goldSecondary: '#f0db8e'
  };

  const allRooms = [
    { id: 1, name: "The Core Temple", path: "/core-temple", icon: "🌿" },
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
      style={{ background: 'linear-gradient(135deg, #8b9e7d 0%, #6b7c5e 50%, #5a6b4d 100%)' }}
    >
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
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 relative z-10">
        {/* Room Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-5xl">{roomData.icon}</span>
            <h1
              className="font-display text-4xl lg:text-6xl font-light"
              style={{
                color: colors.goldPrimary,
                textShadow: '0 0 12px rgba(237, 205, 103, 0.6), 0 0 20px rgba(255, 248, 220, 0.4)'
              }}
            >
              {roomData.title}
            </h1>
          </div>
          <p
            className="font-display text-xl lg:text-2xl italic"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            {roomData.subtitle}
          </p>
        </div>

        {/* Image Carousel */}
        <div className="mb-16">
          <ImageCarousel images={roomData.images} title={roomData.title} />
        </div>

        {/* Room Details */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Description */}
          <div
            className={`rounded-3xl p-8 lg:p-10 ${deviceStyles.getBackdropClass()}`}
            style={{
              background: 'rgba(144, 174, 131, 0.3)',
              border: `2px solid ${colors.goldPrimary}`,
              boxShadow: deviceStyles.getBoxShadow(false),
              transform: 'translateZ(0)',
            }}
          >
            <h2
              className="font-display text-3xl font-light mb-6"
              style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              About This Space
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-6"
              style={{ color: colors.goldSecondary }}
            >
              {roomData.fullDescription}
            </p>
            <p
              className="font-body text-sm italic"
              style={{ color: colors.goldSecondary, opacity: 0.9 }}
            >
              {roomData.schedule}
            </p>
          </div>

          {/* Features */}
          <div
            className={`rounded-3xl p-8 lg:p-10 ${deviceStyles.getBackdropClass()}`}
            style={{
              background: 'rgba(144, 174, 131, 0.3)',
              border: `2px solid ${colors.goldPrimary}`,
              boxShadow: deviceStyles.getBoxShadow(false),
              transform: 'translateZ(0)',
            }}
          >
            <h2
              className="font-display text-3xl font-light mb-6"
              style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              What to Expect
            </h2>
            <ul className="space-y-4">
              {roomData.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="text-2xl mt-1"
                    style={{ color: colors.goldPrimary }}
                  >
                    ✦
                  </span>
                  <span
                    className="font-body text-base"
                    style={{ color: colors.goldSecondary }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Navigate to Other Rooms */}
        <div
          className={`rounded-3xl p-8 lg:p-10 ${deviceStyles.getBackdropClass()}`}
          style={{
            background: 'rgba(144, 174, 131, 0.3)',
            border: `2px solid ${colors.goldPrimary}`,
            boxShadow: deviceStyles.getBoxShadow(true),
            transform: 'translateZ(0)',
          }}
        >
          <h2
            className="font-display text-3xl font-light mb-8 text-center"
            style={{ color: colors.goldPrimary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
          >
            Explore Other Spaces
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allRooms.filter(room => room.id !== currentRoomId).map((room) => (
              <button
                key={room.id}
                onClick={() => navigate(room.path)}
                className="p-4 rounded-2xl transition-all hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: `1px solid ${colors.goldPrimary}`,
                }}
              >
                <div className="text-3xl mb-2">{room.icon}</div>
                <div
                  className="font-body text-sm text-center"
                  style={{ color: colors.goldSecondary }}
                >
                  {room.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
