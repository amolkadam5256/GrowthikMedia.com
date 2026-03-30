/**
 * compress-images.mjs
 * Run once with: node scripts/compress-images.mjs
 * Compresses large images in app/assets/images/ to WebP using Next.js's bundled sharp.
 */
import sharp from "sharp";
import { existsSync, mkdirSync, statSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const ASSETS = path.join(ROOT, "app", "assets", "images");

const targets = [
  {
    input: path.join(ASSETS, "Bg.jpg"),
    output: path.join(ASSETS, "Bg.webp"),
    maxWidth: 1920,
    quality: 75,
  },
  {
    input: path.join(ASSETS, "Amol-kadam", "Amolkadam-1.png"),
    output: path.join(ASSETS, "Amol-kadam", "Amolkadam-1.webp"),
    maxWidth: 900,
    quality: 80,
  },
  {
    input: path.join(ASSETS, "Amol-kadam", "Amolkadam-2.png"),
    output: path.join(ASSETS, "Amol-kadam", "Amolkadam-2.webp"),
    maxWidth: 900,
    quality: 80,
  },
  {
    input: path.join(ASSETS, "Prachi.png"),
    output: path.join(ASSETS, "Prachi.webp"),
    maxWidth: 600,
    quality: 80,
  },
  // Portfolio card images
  ...["seo-real-estate", "social-media", "video-marketing", "website-redesign", "luxury-branding", "education-content"].map((name) => ({
    input: path.join(ASSETS, "portfolio", `${name}.png`),
    output: path.join(ASSETS, "portfolio", `${name}.webp`),
    maxWidth: 800,
    quality: 80,
  })),
];

function fmtKB(bytes) {
  return (bytes / 1024).toFixed(1) + " KB";
}

async function run() {
  for (const { input, output, maxWidth, quality } of targets) {
    if (!existsSync(input)) {
      console.warn(`⚠  Skipping (not found): ${path.relative(ROOT, input)}`);
      continue;
    }
    const beforeSize = statSync(input).size;
    await sharp(input)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality })
      .toFile(output);
    const afterSize = statSync(output).size;
    const savings = (((beforeSize - afterSize) / beforeSize) * 100).toFixed(0);
    console.log(
      `✓  ${path.relative(ROOT, output).padEnd(60)} ${fmtKB(beforeSize)} → ${fmtKB(afterSize)}  (${savings}% savings)`
    );
  }
  console.log("\n✅ Done. Update import paths in images.ts to use .webp files.");
}

run().catch(console.error);
