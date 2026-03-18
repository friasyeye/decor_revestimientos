import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageName = process.argv[2] || 'nosotros';
const rawDir = path.join(__dirname, 'src', 'assets', 'raw');
const optimizedDir = path.join(__dirname, 'public', 'optimized');

// Ensure optimized directory exists
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

const inputPath = path.join(rawDir, `${imageName}.jpg`);
const desktopOutput = path.join(optimizedDir, `${imageName}-desktop.webp`);
const mobileOutput = path.join(optimizedDir, `${imageName}-mobile.webp`);

async function optimizeImage() {
  try {
    console.log(`Optimizing ${imageName}...`);

    // Desktop version (1200px)
    await sharp(inputPath)
      .resize(1200, 1200, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(desktopOutput);
    console.log(`✓ Created: ${imageName}-desktop.webp`);

    // Mobile version (600px)
    await sharp(inputPath)
      .resize(600, 600, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 75 })
      .toFile(mobileOutput);
    console.log(`✓ Created: ${imageName}-mobile.webp`);

    console.log('Done!');
  } catch (error) {
    console.error('Error optimizing image:', error);
    process.exit(1);
  }
}

optimizeImage();
