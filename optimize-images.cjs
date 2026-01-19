const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
  console.log('Using sharp for image optimization...');
} catch (err) {
  console.log('Sharp not available, will use alternative method');
}

const imagesToOptimize = [
  { input: 'public/images/img1.png', output: 'public/images/img1.jpg', quality: 85 },
  { input: 'public/images/img2.png', output: 'public/images/img2.jpg', quality: 85 },
  { input: 'public/images/img3.png', output: 'public/images/img3.jpg', quality: 85 },
  { input: 'public/images/breath.png', output: 'public/images/breath2.jpg', quality: 85 },
  { input: 'public/images/herosectiondesk.png', output: 'public/images/herosectiondesk.jpg', quality: 90 }
];

async function optimizeImages() {
  if (!sharp) {
    console.log('Please install sharp: npm install sharp');
    console.log('Skipping image optimization for now.');
    return;
  }

  for (const img of imagesToOptimize) {
    if (!fs.existsSync(img.input)) {
      console.log(`Skipping ${img.input} - file not found`);
      continue;
    }

    try {
      console.log(`Optimizing ${img.input}...`);

      await sharp(img.input)
        .resize(2000, null, { // Max width 2000px, maintain aspect ratio
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: img.quality, progressive: true })
        .toFile(img.output);

      const originalSize = fs.statSync(img.input).size;
      const newSize = fs.statSync(img.output).size;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(`✓ Created ${img.output}`);
      console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`  Optimized: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`  Savings: ${savings}%\n`);
    } catch (err) {
      console.error(`Error optimizing ${img.input}:`, err.message);
    }
  }
}

optimizeImages();
