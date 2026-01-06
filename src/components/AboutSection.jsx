export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-gradient-to-b from-[#b8c9a4] to-[#d4ddc9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-display text-4xl lg:text-6xl font-light tracking-wide text-[#6b7c5e] mb-4">
            Manifest of Light
          </h2>
          <div className="w-20 h-px bg-[#c9a961] mx-auto"></div>
        </div>

        {/* Introduction - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-xl h-64 lg:h-96">
              <img
                src="/images/about.jpg"
                alt="House of Aya Space"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Introduction Text */}
          <div className="order-1 lg:order-2">
            <p className="font-display text-xl lg:text-2xl font-light text-[#6b7c5e] leading-relaxed mb-6 italic">
              This Manifest is the breath of House of Aya — the word of Light calling us toward harmony, presence, and awakening.
            </p>
            <p className="font-body text-base lg:text-lg text-[#8b7355]/90 leading-relaxed">
              Within every breath, there is a calling toward Light. An unseen thread binds the body to the spirit, matter to essence, earth to sky. Here, in the House of AYA, the body becomes a temple, and the soul remembers its origin.
            </p>
          </div>
        </div>

        {/* Core Philosophy Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          <div className="text-center">
            <div className="mb-4">
              <img
                src="/images/logo pn.png"
                alt="AYA"
                className="w-12 h-12 mx-auto animate-breathe drop-shadow-lg"
              />
            </div>
            <h3 className="font-display text-2xl font-light text-[#6b7c5e] mb-3">Beauty</h3>
            <p className="font-body text-sm lg:text-base text-[#8b7355]/80 leading-relaxed">
              Not a shape, but a state of grace
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <img
                src="/images/logo pn.png"
                alt="AYA"
                className="w-12 h-12 mx-auto animate-breathe drop-shadow-lg"
              />
            </div>
            <h3 className="font-display text-2xl font-light text-[#6b7c5e] mb-3">Power</h3>
            <p className="font-body text-sm lg:text-base text-[#8b7355]/80 leading-relaxed">
              Not control, but presence
            </p>
          </div>

          <div className="text-center">
            <div className="mb-4">
              <img
                src="/images/logo pn.png"
                alt="AYA"
                className="w-12 h-12 mx-auto animate-breathe drop-shadow-lg"
              />
            </div>
            <h3 className="font-display text-2xl font-light text-[#6b7c5e] mb-3">Balance</h3>
            <p className="font-body text-sm lg:text-base text-[#8b7355]/80 leading-relaxed">
              Not silence, but harmony
            </p>
          </div>
        </div>

        {/* Main Message */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="font-display text-2xl lg:text-3xl font-light text-[#6b7c5e] leading-relaxed italic">
            "We do not rise above the world — we illuminate it from within. We are living creation. We are the Manifest of Light. We are AYA."
          </p>
        </div>

        {/* What is AYA */}
        <div className="max-w-3xl mx-auto bg-white/40 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-lg">
          <h3 className="font-display text-3xl lg:text-4xl font-light text-[#6b7c5e] mb-6 text-center">
            The Origin of AYA
          </h3>
          <p className="font-body text-base lg:text-lg text-[#8b7355]/90 leading-relaxed mb-4">
            "AYA" comes from the Quechua language and means <span className="italic font-semibold">spirit, soul, eternal life</span>. In some South American traditions, it is a sacred word connected to the "plant of the spirit." Yet, when used alone, "AYA" transcends that reference.
          </p>
          <p className="font-body text-base lg:text-lg text-[#8b7355]/90 leading-relaxed">
            It becomes the symbol of the pure essence of being — the light that exists beyond form, name, and time. For House of Aya, this word represents the meeting point between body and consciousness, the place where light takes form and energy becomes living creation.
          </p>
        </div>
      </div>
    </section>
  );
}
