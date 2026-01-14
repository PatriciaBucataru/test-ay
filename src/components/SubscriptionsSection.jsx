import { useState, useEffect } from 'react';

const subscriptions = [
  {
    id: 1,
    name: "INFINITY AYA",
    price: "2.000 €",
    period: "month",
    annualPrice: "18.000 €",
    annualBonus: "3 months free",
    featured: true,
    benefits: [
      "Unlimited access to Lagree",
      "Unlimited access to AI Strength",
      "Unlimited access to Yoga & Breathwork",
      "Unlimited access to Breath Chamber",
      "Unlimited access to Aya Healing Jade Bed",
      "2 private Megaformer sessions / month",
      "Beauty ritual after each session",
      "Concierge + Beauty Desk + Personal Locker"
    ]
  },
  {
    id: 2,
    name: "BLACK LOTUS",
    price: "1.200 €",
    period: "month",
    annualPrice: "10.800 €",
    annualBonus: "1.5 months free",
    featured: false,
    benefits: [
      "3 Lagree / week",
      "2 AI Strength / week",
      "1 Yoga / Breathwork / week",
      "1 Beauty ritual / week",
      "2 Jade Bed / month",
      "1 private Megaformer session / month"
    ]
  },
  {
    id: 3,
    name: "EVOLUTION",
    price: "850 €",
    period: "month",
    annualPrice: "7.650 €",
    annualBonus: "1 month free",
    featured: false,
    benefits: [
      "2 Lagree / week",
      "2 AI Strength / week",
      "1 Breath Ritual / week",
      "2 beauty rituals / month",
      "1 Jade Bed / month"
    ]
  },
  {
    id: 4,
    name: "STILLNESS & BEAUTY",
    price: "450 €",
    period: "month",
    annualPrice: "4.050 €",
    annualBonus: "1 month free",
    featured: false,
    benefits: [
      "Unlimited Yoga & Breathwork",
      "1 beauty ritual / week",
      "2 Jade Bed / month"
    ]
  },
  {
    id: 5,
    name: "AYA FLOW",
    price: "300 €",
    period: "month",
    annualPrice: "2.700 €",
    annualBonus: "1 month free",
    featured: false,
    benefits: [
      "1 Lagree / week",
      "1 AI Strength / week",
      "1 Breath Ritual / week",
      "1 beauty / month",
      "1 Jade Bed / season"
    ]
  },
  {
    id: 6,
    name: "GIFT OF LIGHT PASS",
    price: "550 €",
    period: "package",
    featured: false,
    benefits: [
      "8 mixed sessions",
      "Breath Chamber access",
      "1 beauty ritual",
      "Jade Bed add-on available with discount"
    ]
  }
];

export default function SubscriptionsSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 10 + 6,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);

  const colors = {
    goldPrimary: '#edcd67',
    goldSecondary: '#f0db8e'
  };

  return (
    <section
      id="subscriptions"
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #8b9e7d 0%, #6b7c5e 50%, #5a6b4d 100%)' }}
    >
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-40px) translateX(-10px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-20px) translateX(-12px);
            opacity: 0.6;
          }
        }
      `}</style>

      {/* Radiant light overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(237, 205, 103, 0.08) 0%, transparent 50%)',
        }}
      />

      {/* Animated particles */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 248, 220, 0.6) 20%, rgba(237, 205, 103, 0.4) 40%, rgba(237, 205, 103, 0.15) 100%)',
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
            boxShadow: '0 0 10px rgba(237, 205, 103, 0.4), 0 0 20px rgba(255, 248, 220, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
            filter: 'blur(0.5px)',
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2
            className="font-display text-4xl lg:text-6xl font-light tracking-wide mb-4"
            style={{
              color: colors.goldPrimary,
              textShadow: '0 0 12px rgba(237, 205, 103, 0.6), 0 0 20px rgba(255, 248, 220, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Memberships
          </h2>
          <div
            className="w-20 h-px mx-auto mb-6"
            style={{
              backgroundColor: colors.goldPrimary,
              boxShadow: '0 0 20px rgba(237, 205, 103, 0.9), 0 0 40px rgba(255, 248, 220, 0.6)',
              height: '2px'
            }}
          ></div>
          <p
            className="font-body text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.goldSecondary, textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}
          >
            Choose your path to transformation. Each membership is an invitation to balance, strength, and inner light.
          </p>
        </div>

        {/* Subscriptions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {subscriptions.map((sub) => (
            <div
              key={sub.id}
              className={`relative backdrop-blur-sm rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                sub.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                background: sub.featured
                  ? 'rgba(237, 205, 103, 0.15)'
                  : 'rgba(144, 174, 131, 0.3)',
                border: `2px solid ${colors.goldPrimary}`,
                boxShadow: sub.featured
                  ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(237, 205, 103, 0.6), inset 0 0 80px rgba(255, 248, 220, 0.15)'
                  : '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 40px rgba(237, 205, 103, 0.4), inset 0 0 60px rgba(255, 248, 220, 0.1)'
              }}
            >
              {/* Membership Name */}
              <div className="mb-6">
                <h3
                  className="font-display text-2xl lg:text-3xl font-light mb-2"
                  style={{
                    color: colors.goldPrimary,
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {sub.name}
                </h3>
                {sub.featured && (
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs tracking-wider"
                    style={{
                      backgroundColor: colors.goldPrimary,
                      color: '#5a6b4d',
                      boxShadow: '0 0 15px rgba(237, 205, 103, 0.6)'
                    }}
                  >
                    RECOMANDAT
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span
                    className="font-display text-4xl lg:text-5xl font-light"
                    style={{ color: colors.goldPrimary }}
                  >
                    {sub.price}
                  </span>
                  <span
                    className="font-body text-lg"
                    style={{ color: colors.goldSecondary }}
                  >
                    / {sub.period}
                  </span>
                </div>
                {sub.annualPrice && (
                  <p
                    className="font-body text-sm"
                    style={{ color: colors.goldSecondary }}
                  >
                    Annual: <span style={{ color: colors.goldPrimary }}>{sub.annualPrice}</span> ({sub.annualBonus})
                  </p>
                )}
              </div>

              {/* Benefits */}
              <ul className="space-y-3">
                {sub.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-body text-sm"
                    style={{ color: colors.goldSecondary }}
                  >
                    <span style={{ color: colors.goldPrimary }}>✦</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Extra Services Section */}
        <div
          className="max-w-4xl mx-auto backdrop-blur-sm rounded-3xl p-8 lg:p-12 mt-16"
          style={{
            background: 'rgba(144, 174, 131, 0.3)',
            border: `2px solid ${colors.goldPrimary}`,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 50px rgba(237, 205, 103, 0.5)'
          }}
        >
          <h3
            className="font-display text-3xl lg:text-4xl font-light mb-8 text-center"
            style={{
              color: colors.goldPrimary,
              textShadow: '0 0 12px rgba(237, 205, 103, 0.6), 0 0 20px rgba(255, 248, 220, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Extra Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="font-body text-sm leading-relaxed"
              style={{ color: colors.goldSecondary }}
            >
              <p className="mb-2">
                <span style={{ color: colors.goldPrimary }}>✦</span> Private Megaformer session 45 min: <strong>350 lei</strong>
              </p>
              <p className="mb-2">
                <span style={{ color: colors.goldPrimary }}>✦</span> 5 private sessions package: <strong>1.500 lei</strong>
              </p>
            </div>
            <div
              className="font-body text-sm leading-relaxed"
              style={{ color: colors.goldSecondary }}
            >
              <p className="mb-2">
                <span style={{ color: colors.goldPrimary }}>✦</span> Aya Healing Jade Bed 30 min: <strong>120 lei</strong>
              </p>
              <p className="mb-2">
                <span style={{ color: colors.goldPrimary }}>✦</span> Aya Healing Jade Bed 45 min: <strong>180 lei</strong>
              </p>
            </div>
          </div>
          <p
            className="font-body text-sm text-center mt-6 italic"
            style={{ color: colors.goldPrimary }}
          >
            30% discount for members on any additional session
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
