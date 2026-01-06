const experiences = [
  {
    id: 1,
    title: "AYA Movement",
    subtitle: "Where movement becomes meditation",
    description: "The space of the awakened body. Experience the power of Lagree fitness in our state-of-the-art studio.",
    image: "/images/movement.jpg",
    icon: "🌿"
  },
  {
    id: 2,
    title: "AYA Rituals",
    subtitle: "Moments of presence",
    description: "A collection of sensory experiences and wellness ceremonies designed to reconnect you with your essence.",
    image: "/images/sectiono2.jpg",
    icon: "☀️"
  },
  {
    id: 3,
    title: "AYA Sanctum",
    subtitle: "Space of silence",
    description: "The sanctuary of introspection and wholeness. A place for meditation, sound healing, and inner peace.",
    image: "/images/breath.jpg",
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
    <section id="experiences" className="relative py-20 lg:py-32 bg-gradient-to-b from-[#d4ddc9] to-[#c8d5b9]">
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
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="/images/logo pn.png"
                    alt="AYA"
                    className="w-8 h-8 animate-breathe drop-shadow-lg"
                  />
                  <h3 className="font-display text-3xl lg:text-4xl font-light text-[#6b7c5e]">
                    {experience.title}
                  </h3>
                </div>

                <p className="font-display text-lg text-[#8b7355] italic mb-4">
                  {experience.subtitle}
                </p>

                <p className="font-body text-base text-[#8b7355]/90 leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Learn More Button */}
                <button className="group/btn relative overflow-hidden border-2 border-[#6b7c5e] px-6 py-3 font-body text-xs tracking-[0.3em] text-[#6b7c5e] transition-all duration-500 hover:text-white">
                  <span className="relative z-10">EXPLORE</span>
                  <div className="absolute inset-0 bg-[#6b7c5e] transform -translate-x-full transition-transform duration-500 group-hover/btn:translate-x-0" />
                </button>
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
    </section>
  );
}
