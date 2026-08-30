import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://www.growthikmedia.com";
const publicDir = path.join(root, "public");
const generatedDir = path.join(root, "lib", "ai", "knowledge");
const pageRoots = [path.join(root, "app")];
const contentFiles = [
  "constants/contact.ts",
  "constants/faqData.ts",
  "constants/locationData.ts",
  "lib/blog/data.ts",
  "lib/data/portfolio.ts",
  "components/PublicComponents/common/header/navigationData.ts",
  "components/PublicComponents/FooterLinks.tsx",
  "components/PublicComponents/FooterServicesLinks.tsx",
  "app/sitemap.ts",
  "app/robots.ts",
];

function walk(dir, predicate, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, predicate, acc);
    else if (predicate(full)) acc.push(full);
  }
  return acc;
}

function routeFromPage(file) {
  const rel = path.relative(path.join(root, "app"), file).replaceAll("\\", "/");
  if (rel.startsWith("api/") || rel.startsWith("admin/") || rel.startsWith("chat/")) return null;
  let parts = rel.replace(/\/page\.(tsx|ts|jsx|js)$/, "").split("/");
  if (parts.some((part) => part.startsWith("_"))) return null;
  parts = parts.filter((part) => !part.startsWith("("));
  if (parts.includes("[leadId]")) return null;
  parts = parts.map((part) => {
    if (part === "[slug]") return "[slug]";
    if (part === "[seoStrategy]") return "[seoStrategy]";
    return part;
  });
  const route = `/${parts.join("/")}`.replace(/\/+/g, "/");
  return route === "/page.tsx" || route === "/" ? "/" : route;
}

function stripCode(text) {
  return text
    .replace(/import[\s\S]*?;\n/g, "")
    .replace(/<Script[\s\S]*?<\/Script>/g, " ")
    .replace(/dangerouslySetInnerHTML=\{\{[\s\S]*?\}\}/g, " ")
    .replace(/[{}()[\]<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stringLiterals(text) {
  const values = [];
  const re = /(["'`])((?:\\.|(?!\1)[\s\S])*?)\1/g;
  let match;
  while ((match = re.exec(text))) {
    const value = match[2]
      .replace(/\\n/g, " ")
      .replace(/\\"/g, '"')
      .replace(/\\'/g, "'")
      .replace(/\$\{[^}]+\}/g, "")
      .replace(/&apos;/g, "'")
      .replace(/&amp;/g, "&")
      .replace(/\s+/g, " ")
      .trim();
    if (value.length >= 8 && !value.startsWith("@/") && !value.includes("application/ld+json")) {
      values.push(value);
    }
  }
  return [...new Set(values)].slice(0, 80);
}

function titleFromText(text, route) {
  const title = text.match(/title\s*[:=]\s*["'`]([^"'`]+)["'`]/)?.[1];
  if (title) return title;
  return route === "/" ? "Growthik Media Homepage" : route.split("/").filter(Boolean).pop()?.replace(/-/g, " ") || "Page";
}

function descriptionFromText(text, strings) {
  return (
    text.match(/description\s*[:=]\s*["'`]([^"'`]+)["'`]/)?.[1] ||
    text.match(/metaDescription\s*[:=]\s*["'`]([^"'`]+)["'`]/)?.[1] ||
    strings.find((item) => item.length > 80) ||
    ""
  );
}

function pageType(route) {
  if (route === "/") return "Homepage";
  if (route.includes("[slug]") || route.includes("[seoStrategy]")) return "Dynamic Route Pattern";
  if (route.startsWith("/services/")) return "Service Page";
  if (route === "/services") return "Services Index";
  if (route.startsWith("/blog/")) return "Blog Page";
  if (route === "/blog") return "Blog Index";
  if (route.startsWith("/portfolio/")) return "Portfolio Page";
  if (route.startsWith("/success-stories")) return "Success/Proof Page";
  if (route.includes("policy") || route === "/terms" || route === "/shipping-policy") return "Policy Page";
  if (route === "/contact") return "Contact Page";
  if (route === "/about") return "About Page";
  return "Public Page";
}

const docs = [];
const pages = walk(pageRoots[0], (file) => /page\.(tsx|ts|jsx|js)$/.test(file))
  .map((file) => ({ file, route: routeFromPage(file) }))
  .filter((item) => item.route)
  .sort((a, b) => a.route.localeCompare(b.route));

for (const page of pages) {
  const raw = fs.readFileSync(page.file, "utf8");
  const strings = stringLiterals(raw);
  const title = titleFromText(raw, page.route);
  const description = descriptionFromText(raw, strings);
  const body = strings.join("\n- ");
  docs.push({
    id: `page:${page.route}`,
    type: pageType(page.route),
    title,
    url: page.route,
    canonicalUrl: `${siteUrl}${page.route === "/" ? "/" : `${page.route.replace(/\/$/, "")}/`}`,
    source: path.relative(root, page.file).replaceAll("\\", "/"),
    summary: description,
    content: [`Title: ${title}`, description && `Description: ${description}`, body && `Extracted public page content:\n- ${body}`]
      .filter(Boolean)
      .join("\n\n"),
  });
}

for (const rel of contentFiles) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) continue;
  const raw = fs.readFileSync(file, "utf8");
  const strings = stringLiterals(raw);
  docs.push({
    id: `source:${rel}`,
    type: "Structured Source",
    title: rel,
    url: null,
    canonicalUrl: null,
    source: rel,
    summary: strings.slice(0, 5).join(" "),
    content: strings.join("\n- "),
  });
}

function addDynamicDocsFromSlugs(rel, urlPrefix, type, slugPattern) {
  const file = path.join(root, rel);
  if (!fs.existsSync(file)) return;
  let raw = fs.readFileSync(file, "utf8");
  if (type === "Blog Article") {
    raw = raw.slice(raw.indexOf("export const BLOG_POSTS"));
  }
  const slugRe = slugPattern;
  const used = new Set();
  let match;
  while ((match = slugRe.exec(raw))) {
    const slug = match[1];
    if (used.has(slug) || slug.length < 4) continue;
    const start = Math.max(0, match.index - 1200);
    const end = Math.min(raw.length, match.index + 2600);
    const window = raw.slice(start, end);
    const strings = stringLiterals(window);
    const title =
      window.match(/title:\s*["'`]([^"'`]+)["'`]/)?.[1] ||
      window.match(/headline:\s*["'`]([^"'`]+)["'`]/)?.[1] ||
      slug.replace(/-/g, " ");
    const description =
      window.match(/description:\s*["'`]([^"'`]+)["'`]/)?.[1] ||
      window.match(/excerpt:\s*["'`]([^"'`]+)["'`]/)?.[1] ||
      window.match(/metaDescription:\s*["'`]([^"'`]+)["'`]/)?.[1] ||
      strings.find((item) => item.length > 70) ||
      "";
    docs.push({
      id: `${type.toLowerCase().replaceAll(" ", "-")}:${slug}`,
      type,
      title,
      url: `${urlPrefix}/${slug}`,
      canonicalUrl: `${siteUrl}${urlPrefix}/${slug}/`,
      source: rel,
      summary: description,
      content: [`Title: ${title}`, description && `Description: ${description}`, strings.join("\n- ")]
        .filter(Boolean)
        .join("\n\n"),
    });
    used.add(slug);
  }
}

addDynamicDocsFromSlugs("lib/blog/data.ts", "/blog", "Blog Article", /slug:\s*["'`]([^"'`]+)["'`]/g);
addDynamicDocsFromSlugs("constants/locationData.ts", "", "Location Landing Page", /["'`]([a-z0-9-]+)["'`]\s*:\s*\{/g);

const seenUrls = new Set();
const duplicateUrls = [];
for (const doc of docs) {
  if (!doc.url) continue;
  if (seenUrls.has(doc.url)) duplicateUrls.push(doc.url);
  seenUrls.add(doc.url);
}

function mdEscape(text) {
  return String(text || "").replace(/\r/g, "").trim();
}

const includedPages = docs.filter((doc) => doc.url);
const services = includedPages.filter((doc) => doc.type === "Service Page");
const blogPages = includedPages.filter((doc) => doc.type === "Blog Page");
const policies = includedPages.filter((doc) => doc.type === "Policy Page");

const llms = `# Growthik Media

Growthik Media is a Pune-based digital marketing and web development company. This file summarizes public website information for AI assistants. Use the linked pages as source-of-truth and do not invent prices, guarantees, clients, services, locations, or policies that are not present in the website content.

## Website

- Canonical domain: ${siteUrl}
- Homepage: ${siteUrl}/
- Services: ${siteUrl}/services/
- Blog: ${siteUrl}/blog/
- Portfolio: ${siteUrl}/portfolio/
- Contact: ${siteUrl}/contact/
- Full AI-readable knowledge: ${siteUrl}/llms-full.txt

## Contact

The authoritative public contact details are maintained in \`constants/contact.ts\` and included in the full knowledge file.

## Main Service Pages

${services.map((doc) => `- [${mdEscape(doc.title)}](${doc.canonicalUrl}) - ${mdEscape(doc.summary)}`).join("\n")}

## Blog And Resource Pages

${blogPages.map((doc) => `- [${mdEscape(doc.title)}](${doc.canonicalUrl}) - ${mdEscape(doc.summary)}`).join("\n")}

## Policy Pages

${policies.map((doc) => `- [${mdEscape(doc.title)}](${doc.canonicalUrl})`).join("\n")}

Generated locally from project source files. Last generated: 2026-08-30.
`;

const llmsFull = `# Growthik Media Full Website Knowledge

Generated from local project source files. This document is public AI-readable content and excludes credentials, environment values, admin-only data, and API keys.

## Coverage Summary

- Total documents: ${docs.length}
- Public route documents: ${includedPages.length}
- Service pages: ${services.length}
- Blog route patterns/pages: ${blogPages.length}
- Policy pages: ${policies.length}
- Duplicate URLs detected: ${duplicateUrls.length ? duplicateUrls.join(", ") : "None"}

${docs
  .map(
    (doc) => `## Page: ${mdEscape(doc.title)}

URL: ${doc.url || "N/A"}
Canonical URL: ${doc.canonicalUrl || "N/A"}
Type: ${doc.type}
Source: ${doc.source}

Summary:
${mdEscape(doc.summary) || "No explicit summary extracted."}

Key information:
${mdEscape(doc.content) || "No public text extracted."}
`,
  )
  .join("\n")}
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.mkdirSync(generatedDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "llms.txt"), llms);
fs.writeFileSync(path.join(publicDir, "llms-full.txt"), llmsFull);
fs.writeFileSync(
  path.join(generatedDir, "generated.ts"),
  `// Generated by scripts/generate-llms.mjs. Do not edit manually.\n\nexport type KnowledgeDocument = {\n  id: string;\n  type: string;\n  title: string;\n  url: string | null;\n  canonicalUrl: string | null;\n  source: string;\n  summary: string;\n  content: string;\n};\n\nexport const knowledgeDocuments: KnowledgeDocument[] = ${JSON.stringify(docs, null, 2)};\n`,
);

console.log(`Generated ${docs.length} knowledge documents.`);
console.log(`Public routes included: ${includedPages.length}`);
console.log(`Service pages included: ${services.length}`);
if (duplicateUrls.length) console.warn(`Duplicate URLs: ${duplicateUrls.join(", ")}`);
