import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { dirname } from 'path';

const outputPath = 'blog_exports/2024/11/13_why-your-website-bounce-rate-is-high-and-how-to-fix-it-.html';
const imgUrl = 'https://www.growthikmedia.com/images/blog/fix-high-bounce-rate-pune-website-seo-2026.jpg';

// Read the user's hand-crafted HTML template
const templatePath = 'scripts/bounce-rate-template.html';
let html = readFileSync(templatePath, 'utf8');

// Inject the thumbnail between HERO and ARTICLE BODY
const thumbnailBlock = `
<!-- ═══════════════════════════════════════════
     THUMBNAIL
═══════════════════════════════════════════ -->
<div style="max-width:800px;margin:0 auto;padding:40px 32px 0;">
  <img src="${imgUrl}" alt="High bounce rate fix for Pune business websites - SEO guide 2026 by Growthik Media" style="width:100%;height:auto;display:block;border-radius:12px;">
</div>
`;

// Insert thumbnail right before ARTICLE BODY comment
html = html.replace(
  '<!-- ═══════════════════════════════════════════\n     ARTICLE BODY\n═══════════════════════════════════════════ -->',
  thumbnailBlock + '\n<!-- ═══════════════════════════════════════════\n     ARTICLE BODY\n═══════════════════════════════════════════ -->'
);

// Also add og:image meta tag
html = html.replace(
  '<link rel="canonical"',
  `<meta property="og:image" content="${imgUrl}">\n<link rel="canonical"`
);

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, html, 'utf8');
console.log(`✅ Written: ${outputPath} (${html.length} bytes)`);
