import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImage(file) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const name = path.basename(file, ext);
  const inputPath = path.join(inputDir, file);
  const desktopOutput = path.join(outputDir, `${name}-desktop.webp`);
  const mobileOutput = path.join(outputDir, `${name}-mobile.webp`);

  try {
    await sharp(inputPath)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(desktopOutput);

    await sharp(inputPath)
      .resize(600, null, { withoutEnlargement: true })
      .webp({ quality: 78 })
      .toFile(mobileOutput);

    console.log(`✓ ${name}`);
  } catch (err) {
    console.error(`✗ ${name}: ${err.message}`);
  }
}

const files = fs.readdirSync(inputDir);
console.log(`Processing ${files.length} images from /public/images/...\n`);
await Promise.all(files.map(optimizeImage));
console.log('\nDone.');
