import { useState, useEffect } from 'react';
import AboutSection from './components/AboutSection';
import ExperiencesSection from './components/ExperiencesSection';

const GoldenParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(40)].map((_, i) => {
      const size = Math.random() * 4 + 2;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 4 + 4;

      return (
        <div
          key={i}
          className="absolute rounded-full bg-[#c9a961] animate-dance"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${startX}%`,
            top: `${startY}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            boxShadow: '0 0 8px rgba(201, 169, 97, 0.6)',
          }}
        />
      );
    })}
  </div>
);

export default function HouseOfAya() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['CONTACT', 'ABOUT US', 'EXPLORE'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c8d5b9] via-[#d4ddc9]/50 to-[#b8c9a4] font-sans overflow-x-hidden">
      {/* Custom Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Josefin+Sans:wght@300;400&display=swap');

        .font-display { font-family: 'Cormorant Garamond', serif; }
        .font-body { font-family: 'Josefin Sans', sans-serif; }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.4; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.8; }
        }

        @keyframes gentleSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes dance {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          50% {
            transform: translate(20px, -30px);
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translate(-15px, 20px);
            opacity: 0;
          }
        }

        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-sway { animation: gentleSway 6s ease-in-out infinite; }
        .animate-breathe { animation: breathe 4s ease-in-out infinite; }
        .animate-slideUp { animation: slideUp 1s ease-out forwards; }
        .animate-slideIn { animation: slideIn 1s ease-out forwards; }
        .animate-fadeIn { animation: fadeIn 1.5s ease-out forwards; }
        .animate-dance { animation: dance 8s ease-in-out infinite; }

        .shimmer-btn {
          background: linear-gradient(90deg, #8b7355 0%, #c9a961 25%, #8b7355 50%, #c9a961 75%, #8b7355 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
        }

        .text-shadow-soft { text-shadow: 0 2px 10px rgba(139, 115, 85, 0.3); }

        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-[#6b7c5e] lg:bg-transparent ${
        scrollY > 50 ? 'lg:bg-stone-100/90 lg:backdrop-blur-md lg:shadow-sm' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`font-body text-sm tracking-[0.3em] text-white lg:text-[#6b7c5e] hover:text-[#8b7355] transition-all duration-300 ${
                isLoaded ? 'animate-fadeIn' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              MENU
            </button>

            {/* Desktop Navigation & Flower */}
            <div className="flex items-center gap-8 lg:gap-12">
              <div className="hidden md:flex items-center gap-8 lg:gap-12">
                {navItems.map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className={`font-body text-sm tracking-[0.2em] text-[#6b7c5e] hover:text-[#8b7355] transition-all duration-300 relative group ${
                      isLoaded ? 'animate-fadeIn' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8b7355] transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>

              {/* Logo */}
              <div className={`${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <img
                  src="/images/logo pn.png"
                  alt="House of Aya"
                  className="w-8 h-8 lg:w-10 lg:h-10 animate-breathe drop-shadow-[0_0_8px_rgba(244,208,63,0.8)]"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 transition-all duration-500 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-stone-100/95 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {['MENU', ...navItems].map((item, index) => (
            <a
              key={item}
              href="#"
              className={`font-display text-3xl tracking-[0.2em] text-[#6b7c5e] hover:text-[#8b7355] transition-all duration-300 ${
                menuOpen ? 'animate-slideUp' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#c8d5b9]/30 via-transparent to-[#b8c9a4]/20" />

        {/* Golden Particles Effect */}
        <GoldenParticles />

        <div className="relative w-full max-w-7xl mx-auto lg:px-12 lg:py-0">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-center lg:min-h-screen">
            {/* Mobile Image - First */}
            <div className="lg:hidden pt-20">
              <div className="relative">
                <div className="relative overflow-hidden shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="/images/herosectiondesk.png"
                      alt="Lagree Wellness"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-100/20 via-transparent to-amber-100/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left px-6 py-8 lg:py-0">
              {/* Brand Name */}
              <div className={`mb-4 lg:mb-8 ${isLoaded ? 'animate-slideIn' : 'opacity-0'}`}>
                <h1 className="font-display text-3xl lg:text-7xl xl:text-8xl font-light tracking-wide text-[#6b7c5e] leading-none text-shadow-soft">
                  HOUSE OF AYA
                </h1>
                <p className="font-display text-lg lg:text-2xl font-light tracking-widest text-[#8b7355] mt-2 lg:mt-4">
                  Manifest of Light
                </p>
              </div>

              {/* Tagline */}
              <div
                className={`mb-6 lg:mb-10 ${
                  isLoaded ? 'animate-slideUp' : 'opacity-0'
                }`}
                style={{ animationDelay: '0.4s' }}
              >
                <p className="font-body text-sm lg:text-lg text-[#8b7355]/80 tracking-wide leading-relaxed text-center lg:text-left">
                  Un templu pentru trup, un sanctuar pentru suflet.
                </p>
                <div className="mt-4 flex justify-center lg:justify-start">
                  <img
                    src="/images/logo pn.png"
                    alt="House of Aya Logo"
                    className="h-16 lg:h-20 w-auto drop-shadow-lg"
                  />
                </div>
              </div>

              {/* CTA Button */}
              <div
                className={`${isLoaded ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ animationDelay: '0.6s' }}
              >
                <button className="group relative overflow-hidden border-2 border-[#6b7c5e] px-6 py-2 lg:px-10 lg:py-4 font-body text-xs lg:text-sm tracking-[0.3em] text-[#6b7c5e] transition-all duration-500 hover:text-white">
                  <span className="relative z-10">DESCOPERĂ</span>
                  <div className="absolute inset-0 bg-[#6b7c5e] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
                </button>
              </div>
            </div>

            {/* Desktop Image - Hidden on Mobile */}
            <div
              className={`hidden lg:block order-1 lg:order-2 relative ${isLoaded ? 'animate-fadeIn' : 'opacity-0'}`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-gradient-to-tr from-[#6b7c5e]/10 to-transparent rounded-full blur-3xl" />

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] lg:h-[75vh] shadow-xl">
                  <div className="aspect-auto h-full relative">
                    <img
                      src="/images/herosectiondesk.png"
                      alt="Lagree Wellness"
                      className="w-full h-full object-contain object-right"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-100/20 via-transparent to-amber-100/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <AboutSection />

      {/* Experiences Section */}
      <ExperiencesSection />
    </div>
  );
}
