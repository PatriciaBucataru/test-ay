const fs = require('fs');

const rooms = [
  {
    filename: 'PrivateStrengthPage.jsx',
    id: 2,
    title: "Private Strength Chamber",
    subtitle: "Moments of presence",
    icon: "☀️",
    images: `"/images/new/private1.webp",
      "/images/new/private2.webp",
      "/images/new/private3.webp"`,
    description: "The Private Strength Chamber offers an intimate setting for personalized training and wellness ceremonies. This exclusive space is designed for one-on-one sessions where you can focus entirely on your journey without distractions. Experience tailored programs that honor your unique needs and goals.",
    features: `"Private one-on-one training sessions",
      "Customized wellness programs",
      "Exclusive use of premium equipment",
      "Personalized attention from expert trainers",
      "Serene and private atmosphere"`,
    schedule: "Private sessions by appointment, Monday-Saturday"
  },
  {
    filename: 'BreathChamberPage.jsx',
    id: 3,
    title: "Breath Chamber",
    subtitle: "Space of silence",
    icon: "🌙",
    images: `"/images/new/breath4.webp",
      "/images/new/breath1.webp",
      "/images/new/breath2.webp",
      "/images/new/breath3.webp"`,
    description: "The Breath Chamber is a sanctuary of introspection and wholeness. Here, ancient breathwork practices meet modern wellness science in a space designed for deep meditation, sound healing, and inner peace. Discover the transformative power of conscious breathing.",
    features: `"Guided breathwork sessions",
      "Sound healing and meditation",
      "Private and group sessions available",
      "Sacred space for inner work",
      "Expert facilitators"`,
    schedule: "Sessions available Monday-Saturday, by appointment"
  },
  {
    filename: 'JadeBedRoomPage.jsx',
    id: 4,
    title: "Aya Healing Jade Bed Room",
    subtitle: "Inspired by light and nature",
    icon: "💧",
    images: `"/images/new/jade2.webp",
      "/images/new/jade1.webp"`,
    description: "Experience the ancient healing properties of jade in our exclusive Jade Bed Room. This sacred space combines traditional jade therapy with modern wellness technology to promote deep relaxation, cellular regeneration, and energetic balance.",
    features: `"Far-infrared jade therapy bed",
      "Private healing sessions",
      "Promotes deep relaxation and detoxification",
      "Cellular regeneration support",
      "Energetic balancing"`,
    schedule: "Sessions available Monday-Saturday, by appointment"
  },
  {
    filename: 'BeautyRitualsPage.jsx',
    id: 5,
    title: "Beauty Rituals",
    subtitle: "Radiance from within",
    icon: "✨",
    images: `"/images/new/beauty1.webp",
      "/images/new/beauty2.webp",
      "/images/new/beauty3.webp"`,
    description: "A sanctuary of beauty and self-care where ancient rituals meet modern aesthetics. Our Beauty Rituals room offers transformative treatments that honor your natural essence and enhance your radiance from within.",
    features: `"Holistic facial treatments",
      "Natural and organic products",
      "Personalized beauty rituals",
      "Relaxing atmosphere",
      "Expert aestheticians"`,
    schedule: "Appointments available Monday-Saturday"
  },
  {
    filename: 'AIStrengthPage.jsx',
    id: 6,
    title: "AI Strength Training",
    subtitle: "Precision-guided power",
    icon: "💪",
    images: `"/images/new/strength1.webp",
      "/images/new/strength2.webp",
      "/images/new/strength3.webp"`,
    description: "Experience the future of fitness with AI-powered strength training. Our cutting-edge technology provides personalized guidance and real-time feedback, optimizing every movement for maximum results while minimizing injury risk.",
    features: `"AI-powered form correction",
      "Personalized training programs",
      "Real-time performance tracking",
      "Progressive difficulty adaptation",
      "Expert human supervision"`,
    schedule: "Sessions available Monday-Saturday"
  },
  {
    filename: 'AyaRitualsPage.jsx',
    id: 7,
    title: "Aya Rituals",
    subtitle: "Sacred moments of transformation",
    icon: "🕉️",
    images: `"/images/new/up2.webp",
      "/images/new/up1.webp",
      "/images/new/up3.webp"`,
    description: "Immerse yourself in ancient wellness practices and modern healing ceremonies. Aya Rituals offers a holistic journey of renewal and connection, combining traditional wisdom with contemporary therapeutic approaches for profound transformation.",
    features: `"Traditional wellness ceremonies",
      "Modern therapeutic approaches",
      "Holistic healing practices",
      "Personalized ritual experiences",
      "Sacred space for transformation"`,
    schedule: "Rituals available by appointment, Monday-Saturday"
  }
];

rooms.forEach(room => {
  const content = `import RoomPageTemplate from '../components/RoomPageTemplate';

export default function ${room.filename.replace('.jsx', '')}() {
  const roomData = {
    title: "${room.title}",
    subtitle: "${room.subtitle}",
    icon: "${room.icon}",
    images: [
      ${room.images}
    ],
    fullDescription: "${room.description}",
    features: [
      ${room.features}
    ],
    schedule: "${room.schedule}"
  };

  return <RoomPageTemplate roomData={roomData} currentRoomId={${room.id}} />;
}
`;

  fs.writeFileSync(`src/pages/${room.filename}`, content);
  console.log(`Created ${room.filename}`);
});

console.log('All room pages created successfully!');
