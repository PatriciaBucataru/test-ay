import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import ExperiencesSection from '../components/ExperiencesSection';
import SubscriptionsSection from '../components/SubscriptionsSection';
import Footer from '../components/Footer';
import { getDeviceOptimizedStyles } from '../utils/deviceDetection';

const GoldenParticles = () => {
  const [particles, setParticles] = useState([]);
  const deviceStyles = getDeviceOptimizedStyles();

  useEffect(() => {
    const newParticles = Array.from({ length: deviceStyles.particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 6,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

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
          background: 'radial-gradient(circle at 20% 30%, rgba(237, 205, 103, 0.06) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 248, 220, 0.04) 0%, transparent 40%)',
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

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'CONTACT', href: '/contact' },
    { label: 'ABOUT US', href: '#about' },
    { label: 'EXPLORE', href: '#experiences' }
  ];

  return (
    <div className="min-h-screen font-sans overflow-x-hidden" style={{ background: 'linear-gradient(135deg, #8b9e7d 0%, #6b7c5e 50%, #5a6b4d 100%)' }}>
      {/* Navigation */}
      <nav className="relative z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="font-body text-sm tracking-[0.3em] transition-all duration-300"
              style={{ color: '#edcd67', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
            >
              MENU
            </button>

            {/* Desktop Navigation & Flower */}
            <div className="flex items-center gap-8 lg:gap-12">
              <div className="hidden md:flex items-center gap-8 lg:gap-12">
                {navItems.map((item, index) => (
                  item.href.startsWith('/') ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="font-body text-sm tracking-[0.2em] transition-all duration-300 relative group"
                      style={{ color: '#edcd67', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#f0db8e' }} />
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="font-body text-sm tracking-[0.2em] transition-all duration-300 relative group"
                      style={{ color: '#edcd67', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full" style={{ backgroundColor: '#f0db8e' }} />
                    </a>
                  )
                ))}
              </div>

              {/* Logo */}
              <div>
                <img
                  src="/images/logo.webp"
                  alt="House of Aya"
                  className="w-8 h-8 lg:w-10 lg:h-10 animate-breathe"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(237, 205, 103, 0.5))' }}
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
        <div className="absolute inset-0 bg-stone-100/98" onClick={() => setMenuOpen(false)} style={{ transform: 'translateZ(0)' }} />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navItems.map((item, index) => (
            item.href.startsWith('/') ? (
              <Link
                key={item.label}
                to={item.href}
                className={`font-display text-3xl tracking-[0.2em] text-[#6b7c5e] hover:text-[#8b7355] transition-all duration-300 ${
                  menuOpen ? 'animate-slideUp' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`font-display text-3xl tracking-[0.2em] text-[#6b7c5e] hover:text-[#8b7355] transition-all duration-300 ${
                  menuOpen ? 'animate-slideUp' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <main className="relative h-screen overflow-hidden">
        {/* Golden Particles Effect */}
        <GoldenParticles />

        <div className="relative w-full max-w-7xl mx-auto lg:px-12 h-full flex items-start pt-4 lg:pt-8">
          <div className="flex flex-col lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-start w-full">
            {/* Mobile Image - First */}
            <div className="lg:hidden">
              <div className="relative">
                <div className="relative overflow-hidden shadow-lg">
                  <div className="aspect-[4/3] relative">
                    <img
                      src="/images/herosectiondesk.jpg"
                      alt="Lagree Wellness"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      width="800"
                      height="600"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-100/20 via-transparent to-amber-100/30" />
                  </div>
                </div>
              </div>
            </div>

            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left px-6 py-8 lg:py-0">
              {/* Brand Name */}
              <div className="mb-4 lg:mb-8">
                <h1
                  className="font-display text-3xl lg:text-6xl xl:text-7xl font-light tracking-wide leading-none"
                  style={{
                    color: '#edcd67',
                    textShadow: '0 0 12px rgba(237, 205, 103, 0.6), 0 0 20px rgba(255, 248, 220, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  HOUSE OF AYA
                </h1>
                <p
                  className="font-display text-lg lg:text-2xl font-light tracking-widest mt-2 lg:mt-4"
                  style={{ color: '#f0db8e', textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                >
                  Manifest of Light
                </p>
              </div>

              {/* Tagline */}
              <div className="mb-6 lg:mb-10">
                <p
                  className="font-body text-sm lg:text-lg tracking-wide leading-relaxed text-center lg:text-left"
                  style={{ color: '#f0db8e', textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
                >
                  Un templu pentru trup, un sanctuar pentru suflet.
                </p>
                <div className="mt-6 flex justify-center lg:justify-start">
                  <div className="relative">
                    {/* Logo Container */}
                    <div
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 flex items-center justify-center relative"
                      style={{
                        borderColor: '#edcd67',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 0 20px rgba(237, 205, 103, 0.6)',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        transform: 'translateZ(0)',
                      }}
                    >
                      <div className="absolute inset-0 rounded-full border m-1" style={{ borderColor: '#edcd67' }}></div>
                      <img
                        src="/images/logo.webp"
                        alt="House of Aya"
                        className="object-contain relative z-10 w-16 h-16 lg:w-20 lg:h-20"
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(237, 205, 103, 0.7)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.5)) drop-shadow(1px 2px 3px rgba(5, 4, 4, 0.9))'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div>
                <button
                  className="group relative overflow-hidden border-2 px-6 py-2 lg:px-10 lg:py-4 font-body text-xs lg:text-sm tracking-[0.3em] transition-all duration-500"
                  style={{
                    borderColor: '#edcd67',
                    color: '#edcd67',
                    boxShadow: '0 0 20px rgba(237, 205, 103, 0.4)'
                  }}
                >
                  <span className="relative z-10 group-hover:text-[#5a6b4d] transition-colors duration-500">DESCOPERĂ</span>
                  <div
                    className="absolute inset-0 transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"
                    style={{ backgroundColor: '#edcd67' }}
                  />
                </button>
              </div> */}
            </div>

            {/* Desktop Image - Hidden on Mobile */}
            <div className="hidden lg:block order-1 lg:order-2 relative">
              <div className="relative">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] lg:h-[75vh] shadow-xl">
                  <div className="aspect-auto h-full relative">
                    <img
                      src="/images/herosectiondesk.jpg"
                      alt="Lagree Wellness"
                      className="w-full h-full object-contain object-right"
                      loading="eager"
                      width="1200"
                      height="900"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-100/20 via-transparent to-amber-100/30" />
                  </div>
                </div>
              </div>
            </div>
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
      </main>

      {/* About Section */}
      <AboutSection />

      {/* Experiences Section */}
      <ExperiencesSection />

      {/* Subscriptions Section */}
      <SubscriptionsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
