/**
 * Growthik Media blog thumbnail generator.
 * Three templates, original founder photo composited as-is.
 * Run: node scripts/generate-blog-thumbnails.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT_DIR = path.join(ROOT, "public", "images", "blog");
const PREVIEW_DIR = path.join(OUT_DIR, "_preview");
const FOUNDER_SRC = path.join(ROOT, "app", "assets", "images", "Amol-kadam", "Amolkadam-1.png");

const WIDTH = 1200;
const HEIGHT = 630;

const fontBold = fs.readFileSync("C:/Windows/Fonts/arialbd.ttf").toString("base64");
const fontReg = fs.readFileSync("C:/Windows/Fonts/arial.ttf").toString("base64");

const POSTS = [
  { file: "ai-search-optimization-growthik-media.webp", label: "AI SEARCH", lines: ["Master AI Search"], support: "SEO · AEO · GEO", template: "founder", visual: "ai" },
  { file: "viral-marketing-lessons-growthik-media.webp", label: "CASE STUDY", lines: ["Viral Marketing", "Lessons"], support: "", template: "results", visual: "viral" },
  { file: "what-is-marketing-growthik-media.webp", label: "MARKETING", lines: ["What Is Marketing"], support: "Strategy that sells", template: "founder", visual: "funnel" },
  { file: "ipl-marketing-lessons-growthik-media.webp", label: "PERFORMANCE", lines: ["IPL Marketing", "Lessons"], support: "", template: "concept", visual: "moment" },
  { file: "real-estate-seo-pune-growthik.webp", label: "LOCAL SEO", lines: ["Win Property Search"], support: "", template: "concept", visual: "property" },
  { file: "moment-marketing-growthik-media.webp", label: "PERFORMANCE", lines: ["Moment Marketing"], support: "", template: "concept", visual: "trend" },
  { file: "what-is-seo-growthik-media.webp", label: "SEO", lines: ["What Is SEO"], support: "How search works", template: "founder", visual: "search" },
  { file: "search-engine-submission-growthik.webp", label: "SEO", lines: ["Get Indexed Faster"], support: "", template: "concept", visual: "index" },
  { file: "seo-audit-checklist-growthik-media.webp", label: "SEO", lines: ["SEO Audit", "Checklist"], support: "", template: "concept", visual: "checklist" },
  { file: "why-seo-matters-growthik-media.webp", label: "SEO", lines: ["Why SEO Matters"], support: "Compounding growth", template: "founder", visual: "growth" },
  { file: "choose-website-company-growthik.webp", label: "WEB DEVELOPMENT", lines: ["Choose a", "Web Partner"], support: "", template: "concept", visual: "browser" },
  { file: "website-cost-pune-growthik-media.webp", label: "WEB DEVELOPMENT", lines: ["Website Cost Guide"], support: "", template: "concept", visual: "cost" },
  { file: "google-ads-vs-meta-growthik.webp", label: "GOOGLE ADS", lines: ["Google Ads", "vs Meta"], support: "", template: "results", visual: "ads" },
  { file: "core-web-vitals-growthik-media.webp", label: "PERFORMANCE", lines: ["Core Web Vitals"], support: "", template: "results", visual: "vitals" },
  { file: "local-seo-pune-growthik.webp", label: "LOCAL SEO", lines: ["Win Local Search"], support: "", template: "concept", visual: "maps" },
  { file: "fix-bounce-rate-growthik-media.webp", label: "CRO", lines: ["Fix Bounce Rate"], support: "", template: "results", visual: "bounce" },
  { file: "b2b-content-strategy-growthik-media.webp", label: "LEAD GENERATION", lines: ["B2B Content", "Strategy"], support: "Content that converts", template: "founder", visual: "content" },
];

function visualMarkup(kind) {
  const x = 760;
  const y = 145;
  const w = 380;
  const h = 300;
  const card = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="28" fill="#1c1c20" stroke="rgba(255,255,255,0.08)"/>`;

  switch (kind) {
    case "ai":
      return `${card}
        <rect x="${x + 28}" y="${y + 36}" width="${w - 56}" height="54" rx="27" fill="#141416" stroke="rgba(255,255,255,0.1)"/>
        <circle cx="${x + 56}" cy="${y + 63}" r="8" fill="none" stroke="#d90b1c" stroke-width="3"/>
        <rect x="${x + 76}" y="${y + 59}" width="200" height="8" rx="4" fill="#3a3a3e"/>
        <rect x="${x + 28}" y="${y + 116}" width="86" height="36" rx="18" fill="none" stroke="rgba(255,255,255,0.16)"/>
        <rect x="${x + 126}" y="${y + 116}" width="86" height="36" rx="18" fill="none" stroke="rgba(255,255,255,0.16)"/>
        <rect x="${x + 224}" y="${y + 116}" width="86" height="36" rx="18" fill="none" stroke="rgba(255,255,255,0.16)"/>
        <text x="${x + 71}" y="${y + 140}" fill="#fff" font-size="14" font-family="GMBold" font-weight="700">SEO</text>
        <text x="${x + 168}" y="${y + 140}" fill="#fff" font-size="14" font-family="GMBold" font-weight="700">AEO</text>
        <text x="${x + 267}" y="${y + 140}" fill="#fff" font-size="14" font-family="GMBold" font-weight="700">GEO</text>
        <circle cx="${x + 80}" cy="${y + 220}" r="9" fill="#d90b1c"/>
        <circle cx="${x + 190}" cy="${y + 232}" r="9" fill="#d90b1c" opacity=".7"/>
        <circle cx="${x + 300}" cy="${y + 214}" r="9" fill="#d90b1c" opacity=".85"/>`;
    case "viral":
    case "growth":
    case "trend":
      return `${card}
        <polyline points="${x + 36},${y + 230} ${x + 90},${y + 200} ${x + 140},${y + 186} ${x + 190},${y + 140} ${x + 250},${y + 88} ${x + 336},${y + 54}" fill="none" stroke="#d90b1c" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="${x + 336}" cy="${y + 54}" r="7" fill="#d90b1c"/>
        <text x="${x + 36}" y="${y + 272}" fill="#a8a8ad" font-size="16" font-family="GMReg">Performance trend</text>`;
    case "funnel":
      return `${card}
        <rect x="${x + 36}" y="${y + 48}" width="${w - 72}" height="48" rx="10" fill="rgba(217,11,28,0.18)"/>
        <rect x="${x + 70}" y="${y + 116}" width="${w - 140}" height="48" rx="10" fill="rgba(217,11,28,0.34)"/>
        <rect x="${x + 108}" y="${y + 184}" width="${w - 216}" height="48" rx="10" fill="#d90b1c"/>
        <text x="${x + 190}" y="${y + 79}" text-anchor="middle" fill="#fff" font-size="18" font-family="GMBold">Reach</text>
        <text x="${x + 190}" y="${y + 147}" text-anchor="middle" fill="#fff" font-size="18" font-family="GMBold">Interest</text>
        <text x="${x + 190}" y="${y + 215}" text-anchor="middle" fill="#fff" font-size="18" font-family="GMBold">Action</text>`;
    case "moment":
      return `${card}
        <rect x="${x + 86}" y="${y + 110}" width="70" height="130" rx="10" fill="#3a3a3e"/>
        <rect x="${x + 210}" y="${y + 58}" width="70" height="182" rx="10" fill="#d90b1c"/>
        <text x="${x + 121}" y="${y + 266}" text-anchor="middle" fill="#c7c7cb" font-size="15" font-family="GMReg">Brand</text>
        <text x="${x + 245}" y="${y + 266}" text-anchor="middle" fill="#c7c7cb" font-size="15" font-family="GMReg">Moment</text>`;
    case "property":
      return `${card}
        <path d="M${x + 80} ${y + 150} L${x + 190} ${y + 70} L${x + 300} ${y + 150}" fill="none" stroke="#d90b1c" stroke-width="8" stroke-linejoin="round"/>
        <rect x="${x + 96}" y="${y + 150}" width="188" height="110" rx="8" fill="none" stroke="#fff" stroke-width="6"/>
        <circle cx="${x + 190}" cy="${y + 196}" r="16" fill="#d90b1c"/>`;
    case "search":
      return `${card}
        <rect x="${x + 28}" y="${y + 48}" width="${w - 56}" height="58" rx="29" fill="#141416" stroke="rgba(255,255,255,0.1)"/>
        <circle cx="${x + 58}" cy="${y + 77}" r="9" fill="none" stroke="#d90b1c" stroke-width="3"/>
        <rect x="${x + 80}" y="${y + 73}" width="230" height="8" rx="4" fill="#3a3a3e"/>
        <rect x="${x + 36}" y="${y + 136}" width="300" height="14" rx="7" fill="#2c2c30"/>
        <rect x="${x + 36}" y="${y + 168}" width="240" height="14" rx="7" fill="#2c2c30"/>
        <rect x="${x + 36}" y="${y + 200}" width="190" height="14" rx="7" fill="#2c2c30"/>`;
    case "index":
      return `${card}
        <path d="M${x + 190} ${y + 70} L${x + 150} ${y + 130} H${x + 170} V${y + 190} H${x + 210} V${y + 130} H${x + 230} Z" fill="#d90b1c"/>
        <text x="${x + 190}" y="${y + 240}" text-anchor="middle" fill="#fff" font-size="20" font-family="GMBold">Submit · Crawl · Index</text>`;
    case "checklist":
      return `${card}
        <rect x="${x + 40}" y="${y + 58}" width="28" height="28" rx="7" fill="#d90b1c"/>
        <rect x="${x + 84}" y="${y + 66}" width="240" height="12" rx="6" fill="#2c2c30"/>
        <rect x="${x + 40}" y="${y + 122}" width="28" height="28" rx="7" fill="#d90b1c"/>
        <rect x="${x + 84}" y="${y + 130}" width="210" height="12" rx="6" fill="#2c2c30"/>
        <rect x="${x + 40}" y="${y + 186}" width="28" height="28" rx="7" fill="#d90b1c"/>
        <rect x="${x + 84}" y="${y + 194}" width="180" height="12" rx="6" fill="#2c2c30"/>`;
    case "browser":
      return `${card}
        <rect x="${x + 36}" y="${y + 48}" width="${w - 72}" height="210" rx="16" fill="#141416" stroke="rgba(255,255,255,0.1)"/>
        <rect x="${x + 36}" y="${y + 48}" width="${w - 72}" height="36" rx="16" fill="#1b1b1e"/>
        <circle cx="${x + 62}" cy="${y + 66}" r="5" fill="#d90b1c"/>
        <circle cx="${x + 80}" cy="${y + 66}" r="5" fill="#3a3a3e"/>
        <circle cx="${x + 98}" cy="${y + 66}" r="5" fill="#3a3a3e"/>
        <rect x="${x + 56}" y="${y + 110}" width="200" height="20" rx="10" fill="#2c2c30"/>
        <rect x="${x + 56}" y="${y + 148}" width="260" height="12" rx="6" fill="#2c2c30"/>
        <rect x="${x + 56}" y="${y + 176}" width="180" height="12" rx="6" fill="#2c2c30"/>`;
    case "cost":
      return `${card}
        <rect x="${x + 36}" y="${y + 78}" width="142" height="150" rx="18" fill="#1d1d20" stroke="rgba(255,255,255,0.08)"/>
        <rect x="${x + 202}" y="${y + 78}" width="142" height="150" rx="18" fill="rgba(217,11,28,0.16)" stroke="rgba(217,11,28,0.35)"/>
        <text x="${x + 107}" y="${y + 160}" text-anchor="middle" fill="#fff" font-size="22" font-family="GMBold">Basic</text>
        <text x="${x + 273}" y="${y + 160}" text-anchor="middle" fill="#fff" font-size="22" font-family="GMBold">Custom</text>`;
    case "ads":
      return `${card}
        <rect x="${x + 36}" y="${y + 78}" width="142" height="150" rx="18" fill="#1d1d20" stroke="rgba(255,255,255,0.08)"/>
        <rect x="${x + 202}" y="${y + 78}" width="142" height="150" rx="18" fill="rgba(217,11,28,0.16)" stroke="rgba(217,11,28,0.35)"/>
        <text x="${x + 107}" y="${y + 148}" text-anchor="middle" fill="#fff" font-size="20" font-family="GMBold">Search</text>
        <text x="${x + 107}" y="${y + 176}" text-anchor="middle" fill="#c7c7cb" font-size="16" font-family="GMReg">intent</text>
        <text x="${x + 273}" y="${y + 148}" text-anchor="middle" fill="#fff" font-size="20" font-family="GMBold">Social</text>
        <text x="${x + 273}" y="${y + 176}" text-anchor="middle" fill="#c7c7cb" font-size="16" font-family="GMReg">scale</text>`;
    case "vitals":
      return `${card}
        <rect x="${x + 28}" y="${y + 86}" width="100" height="130" rx="18" fill="#1d1d20"/>
        <rect x="${x + 140}" y="${y + 86}" width="100" height="130" rx="18" fill="#1d1d20"/>
        <rect x="${x + 252}" y="${y + 86}" width="100" height="130" rx="18" fill="#1d1d20"/>
        <text x="${x + 78}" y="${y + 146}" text-anchor="middle" fill="#fff" font-size="26" font-family="GMBold">LCP</text>
        <text x="${x + 190}" y="${y + 146}" text-anchor="middle" fill="#fff" font-size="26" font-family="GMBold">CLS</text>
        <text x="${x + 302}" y="${y + 146}" text-anchor="middle" fill="#fff" font-size="26" font-family="GMBold">INP</text>
        <text x="${x + 78}" y="${y + 178}" text-anchor="middle" fill="#a8a8ad" font-size="14" font-family="GMReg">Load</text>
        <text x="${x + 190}" y="${y + 178}" text-anchor="middle" fill="#a8a8ad" font-size="14" font-family="GMReg">Stability</text>
        <text x="${x + 302}" y="${y + 178}" text-anchor="middle" fill="#a8a8ad" font-size="14" font-family="GMReg">Input</text>`;
    case "maps":
      return `${card}
        <path d="M${x + 190} ${y + 58} c-38 0 -68 30 -68 68 0 52 68 122 68 122 s68 -70 68 -122 c0 -38 -30 -68 -68 -68 z" fill="none" stroke="#fff" stroke-width="6"/>
        <circle cx="${x + 190}" cy="${y + 126}" r="18" fill="#d90b1c"/>`;
    case "bounce":
      return `${card}
        <rect x="${x + 48}" y="${y + 70}" width="${w - 96}" height="70" rx="16" fill="#1d1d20"/>
        <rect x="${x + 48}" y="${y + 162}" width="${w - 96}" height="70" rx="16" fill="#d90b1c"/>
        <text x="${x + 190}" y="${y + 114}" text-anchor="middle" fill="#8d8d92" font-size="24" font-family="GMBold">Leave</text>
        <text x="${x + 190}" y="${y + 206}" text-anchor="middle" fill="#fff" font-size="24" font-family="GMBold">Stay</text>`;
    case "content":
      return `${card}
        <rect x="${x + 86}" y="${y + 70}" width="130" height="180" rx="14" fill="#1d1d20" stroke="rgba(255,255,255,0.1)" transform="rotate(-8 ${x + 151} ${y + 160})"/>
        <rect x="${x + 126}" y="${y + 54}" width="130" height="196" rx="14" fill="#242428" stroke="rgba(255,255,255,0.12)"/>
        <rect x="${x + 166}" y="${y + 70}" width="130" height="180" rx="14" fill="#1d1d20" stroke="rgba(217,11,28,0.4)" transform="rotate(8 ${x + 231} ${y + 160})"/>`;
    default:
      return card;
  }
}

function overlaySvg(post) {
  const headlineTs = post.lines
    .map((line, i) => `<tspan x="72" dy="${i === 0 ? 0 : 70}">${line}</tspan>`)
    .join("");
  const supportY = 214 + post.lines.length * 70;
  const visual = post.template === "founder" ? "" : visualMarkup(post.visual);
  const founderFade =
    post.template === "founder"
      ? `<rect x="560" y="0" width="640" height="${HEIGHT}" fill="url(#founderFade)"/>`
      : "";

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face { font-family: 'GMBold'; src: url('data:font/ttf;base64,${fontBold}') format('truetype'); }
      @font-face { font-family: 'GMReg'; src: url('data:font/ttf;base64,${fontReg}') format('truetype'); }
    </style>
    <radialGradient id="glow" cx="12%" cy="0%" r="55%">
      <stop offset="0%" stop-color="#d90b1c" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#d90b1c" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="founderFade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#141416" stop-opacity="1"/>
      <stop offset="22%" stop-color="#141416" stop-opacity="0.82"/>
      <stop offset="48%" stop-color="#141416" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#glow)"/>
  <rect x="0" y="0" width="8" height="${HEIGHT}" fill="#d90b1c"/>
  ${founderFade}
  ${visual}
  <rect x="72" y="68" rx="8" width="${Math.max(post.label.length * 16 + 28, 96)}" height="40" fill="rgba(217,11,28,0.16)"/>
  <text x="86" y="95" fill="#ff4d5c" font-size="18" font-family="GMBold">${post.label}</text>
  <text x="72" y="220" fill="#ffffff" font-size="62" font-family="GMBold">${headlineTs}</text>
  ${post.support ? `<text x="72" y="${supportY + 6}" fill="#c4c4c8" font-size="24" font-family="GMReg">${post.support}</text>` : ""}
  <g transform="translate(72,540)">
    <path fill="#ffffff" d="M31.4 16.3 8.1 29.7c-.4.2-.9-.1-.9-.5V2.3c0-.5.5-.8.9-.5l23.3 13.4c.4.2.4.8 0 1.1z" transform="scale(1.35)"/>
    <path fill="#d90b1c" d="M28.7 21.4 5.4 34.8c-.4.2-.9-.1-.9-.5V7.4c0-.5.5-.8.9-.5l23.3 13.4c.4.2.4.8 0 1.1z" transform="scale(1.35)"/>
    <text x="56" y="28" fill="#f2f2f2" font-size="20" font-family="GMBold">GROWTHIK MEDIA</text>
  </g>
</svg>`;
}

async function founderLayer() {
  return sharp(FOUNDER_SRC)
    .resize(624, HEIGHT, {
      fit: "cover",
      position: "north",
    })
    .png()
    .toBuffer();
}

async function renderPost(post, photo) {
  const layers = [
    {
      input: Buffer.from(
        `<svg width="${WIDTH}" height="${HEIGHT}"><rect width="100%" height="100%" fill="#141416"/></svg>`,
      ),
    },
  ];

  if (post.template === "founder") {
    layers.push({ input: photo, left: 576, top: 0 });
  }

  layers.push({ input: Buffer.from(overlaySvg(post)), left: 0, top: 0 });

  const outPath = path.join(OUT_DIR, post.file);
  await sharp({
    create: { width: WIDTH, height: HEIGHT, channels: 3, background: "#141416" },
  })
    .composite(layers)
    .webp({ quality: 86, effort: 5 })
    .toFile(outPath);

  return { file: post.file, kb: Math.round(fs.statSync(outPath).size / 1024), template: post.template };
}

async function main() {
  if (!fs.existsSync(FOUNDER_SRC)) {
    throw new Error(`Approved founder photo missing: ${FOUNDER_SRC}`);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(PREVIEW_DIR, { recursive: true });

  const photo = await founderLayer();
  const rows = [];
  for (const post of POSTS) {
    rows.push(await renderPost(post, photo));
    console.log(`✓ ${post.file}`);
  }

  const cards = POSTS.map(
    (post) => `<figure>
      <img src="../${post.file}" alt="${post.lines.join(" ")}" width="360" height="189" />
      <figcaption>${post.label} · ${post.lines.join(" ")} · ${post.template}</figcaption>
    </figure>`,
  ).join("\n");

  fs.writeFileSync(
    path.join(PREVIEW_DIR, "index.html"),
    `<!doctype html><meta charset="utf-8"><title>Blog thumbnail preview</title>
    <style>
      body{font-family:"Segoe UI",sans-serif;background:#111;color:#eee;padding:24px}
      h1{font-size:20px;margin:24px 0 12px}
      .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(360px,1fr));gap:20px}
      figure{margin:0}
      img{width:100%;height:auto;border-radius:16px;display:block}
      figcaption{font-size:12px;margin-top:8px;color:#bbb}
      .mobile{max-width:360px}
    </style>
    <h1>Card size</h1>
    <div class="grid">${cards}</div>
    <h1>Mobile width (360px)</h1>
    <div class="mobile">${cards}</div>`,
  );

  console.table(rows);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
