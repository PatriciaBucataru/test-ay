const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
  console.log('Using sharp for image optimization...');
} catch (err) {
  console.log('Sharp not available, will use alternative method');
}

const imagesToOptimize = [
  { input: 'public/images/new/breath1.jpg', output: 'public/images/new/breath1.webp', quality: 85 },
  { input: 'public/images/new/breath2.jpg', output: 'public/images/new/breath2.webp', quality: 85 },
  { input: 'public/images/new/breath3.jpg', output: 'public/images/new/breath3.webp', quality: 85 },
  { input: 'public/images/new/breath4.jpg', output: 'public/images/new/breath4.webp', quality: 85 }
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
        .resize(1920, null, { // Max width 1920px, maintain aspect ratio
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: img.quality })
        .toFile(img.output);

      const originalSize = fs.statSync(img.input).size;
      const newSize = fs.statSync(img.output).size;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(`✓ Created ${img.output}`);
      console.log(`  Original: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
      console.log(`  Optimized: ${(newSize / 1024).toFixed(2)} KB`);
      console.log(`  Savings: ${savings}%\n`);
    } catch (err) {
      console.error(`Error optimizing ${img.input}:`, err.message);
    }
  }
}

optimizeImages();
