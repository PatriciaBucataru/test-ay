const experiences = [
  {
    id: 1,
    title: "AYA Movement",
    subtitle: "Where movement becomes meditation",
    description: "The space of the awakened body. Experience the power of Lagree fitness in our state-of-the-art studio.",
    image: "/images/img3.png",
    icon: "🌿"
  },
  {
    id: 2,
    title: "AYA Rituals",
    subtitle: "Moments of presence",
    description: "A collection of sensory experiences and wellness ceremonies designed to reconnect you with your essence.",
    image: "/images/img1.png",
    icon: "☀️"
  },
  {
    id: 3,
    title: "AYA Sanctum",
    subtitle: "Space of silence",
    description: "The sanctuary of introspection and wholeness. A place for meditation, sound healing, and inner peace.",
    image: "/images/img2.png",
    icon: "🌙"
  },
  {
    id: 4,
    title: "AYA Elements",
    subtitle: "Inspired by light and nature",
    description: "Curated products including aromas, candles, and elixirs to bring the AYA energy into your daily life.",
    image: "/images/food.jpg",
    icon: "💧"
  }
];

export default function ExperiencesSection() {
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
              className="group relative bg-white/30 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-80 lg:h-96 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="font-display text-3xl lg:text-4xl font-light text-[#6b7c5e] mb-4">
                  {experience.title}
                </h3>

                <p className="font-display text-lg text-[#8b7355] italic mb-4">
                  {experience.subtitle}
                </p>

                <p className="font-body text-base text-[#8b7355]/90 leading-relaxed">
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
