import { useState } from 'react';
import { getDeviceOptimizedStyles } from '../utils/deviceDetection';

const experiences = [
  {
    id: 1,
    title: "The Core Temple",
    subtitle: "Where movement becomes meditation",
    description: "The space of the awakened body. Experience the power of Lagree fitness in our state-of-the-art studio.",
    images: [
      "/images/new/lagree3.webp",
      "/images/new/lagree1.webp",
      "/images/new/lagree2.webp"
    ],
    icon: "🌿"
  },
  {
    id: 2,
    title: "Private Strength Chamber",
    subtitle: "Moments of presence",
    description: "A collection of sensory experiences and wellness ceremonies designed to reconnect you with your essence.",
    images: [
      "/images/new/private1.webp",
      "/images/new/private2.webp",
      "/images/new/private3.webp"
    ],
    icon: "☀️"
  },
  {
    id: 3,
    title: "Breath Chamber",
    subtitle: "Space of silence",
    description: "The sanctuary of introspection and wholeness. A place for meditation, sound healing, and inner peace.",
    images: [
      "/images/new/breath4.webp",
      "/images/new/breath1.webp",
      "/images/new/breath2.webp",
      "/images/new/breath3.webp"
    ],
    icon: "🌙"
  },
  {
    id: 4,
    title: "Aya Healing Jade Bed Room",
    subtitle: "Inspired by light and nature",
    description: "Curated products including aromas, candles, and elixirs to bring the AYA energy into your daily life.",
    images: [
      "/images/new/jade2.webp",
      "/images/new/jade1.webp"
    ],
    icon: "💧"
  },
  {
    id: 5,
    title: "Beauty Rituals",
    subtitle: "Radiance from within",
    description: "A sanctuary of beauty and self-care. Experience transformative beauty treatments that honor your natural essence.",
    images: [
      "/images/new/beauty1.webp",
      "/images/new/beauty2.webp",
      "/images/new/beauty3.webp"
    ],
    icon: "✨"
  },
  {
    id: 6,
    title: "AI Strength Training",
    subtitle: "Precision-guided power",
    description: "Experience the future of fitness with AI-powered strength training. Personalized guidance and real-time feedback for optimal results.",
    images: [
      "/images/new/strength1.webp",
      "/images/new/strength2.webp",
      "/images/new/strength3.webp"
    ],
    icon: "💪"
  },
  {
    id: 7,
    title: "Aya Rituals",
    subtitle: "Sacred moments of transformation",
    description: "Immerse yourself in ancient wellness practices and modern healing ceremonies. A holistic journey of renewal and connection.",
    images: [
      "/images/new/up2.webp",
      "/images/new/up1.webp",
      "/images/new/up3.webp"
    ],
    icon: "🕉️"
  }
];

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

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0); // Reset touch end
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
      className="relative h-96 lg:h-[500px] overflow-hidden group"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Images */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${title} - Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
          width="800"
          height="600"
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/30"
        aria-label="Next image"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ExperiencesSection() {
  const deviceStyles = getDeviceOptimizedStyles();

  return (
    <section id="experiences" className="relative py-20 lg:py-32 bg-gradient-to-b from-[#d4ddc9] to-[#c8d5b9] pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-4xl lg:text-6xl font-light tracking-wide text-[#6b7c5e] mb-4">
            Our Experiences
          </h2>
          <div className="w-20 h-px bg-[#c9a961] mx-auto mb-6"></div>
          <p className="font-body text-lg lg:text-xl text-[#8b7355]/90 max-w-3xl mx-auto">
            Each experience is a facet of the same consciousness, meant to bring light into every dimension of being.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative rounded-3xl overflow-hidden shadow-lg ${deviceStyles.getBackdropClass()}`}
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                transform: 'translateZ(0)',
              }}
            >
              {/* Image Carousel */}
              <ImageCarousel images={experience.images} title={experience.title} />

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl lg:text-3xl font-light text-[#6b7c5e] mb-2">
                  {experience.title}
                </h3>

                <p className="font-display text-base text-[#8b7355] italic mb-2">
                  {experience.subtitle}
                </p>

                <p className="font-body text-sm text-[#8b7355]/90 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <p className="font-display text-2xl lg:text-3xl font-light text-[#6b7c5e] leading-relaxed italic max-w-4xl mx-auto">
            "All these forms are facets of the same consciousness, meant to bring light into everyday experience."
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
