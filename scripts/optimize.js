import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../src/assets/raw');
const outputDir = path.join(__dirname, '../public/optimized');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err);
        return;
    }

    files.forEach(file => {
        const inputPath = path.join(inputDir, file);
        const fileName = path.parse(file).name;

        // Desktop version
        sharp(inputPath)
            .resize(1920)
            .webp({ quality: 75 })
            .toFile(path.join(outputDir, `${fileName}-desktop.webp`))
            .then(() => console.log(`Processed ${file} (Desktop)`))
            .catch(err => console.error(`Error processing ${file} (Desktop):`, err));

        // Mobile version
        sharp(inputPath)
            .resize(600)
            .webp({ quality: 75 })
            .toFile(path.join(outputDir, `${fileName}-mobile.webp`))
            .then(() => console.log(`Processed ${file} (Mobile)`))
            .catch(err => console.error(`Error processing ${file} (Mobile):`, err));
    });
});
