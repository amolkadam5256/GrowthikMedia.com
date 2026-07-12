import fs from "node:fs";
import path from "node:path";

const checks = [
  { path: "app/layout.tsx", description: "root metadata shell" },
  { path: "app/robots.ts", description: "robots route" },
  { path: "app/sitemap.ts", description: "sitemap route" },
  { path: "app/manifest.ts", description: "web app manifest" },
  { path: "app/opengraph-image.tsx", description: "social sharing image" },
  { path: "app/feed.xml/route.ts", description: "RSS feed" },
  { path: "components/PublicComponents/common/SEO.tsx", description: "structured data component" },
  { path: "components/PublicComponents/common/SkipLink.tsx", description: "accessibility skip link" },
];

const missing = checks.filter((check) => !fs.existsSync(path.join(process.cwd(), check.path)));

if (missing.length > 0) {
  console.error("SEO validation failed. Missing files:");
  for (const item of missing) {
    console.error(`- ${item.path} (${item.description})`);
  }
  process.exit(1);
}

console.log(`SEO validation passed. Checked ${checks.length} implementation points.`);
