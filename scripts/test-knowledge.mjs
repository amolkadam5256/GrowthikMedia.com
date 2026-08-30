import fs from "node:fs";
import path from "node:path";

const generated = path.join(process.cwd(), "lib", "ai", "knowledge", "generated.ts");
if (!fs.existsSync(generated)) {
  console.error("Knowledge index missing. Run npm run generate:llms first.");
  process.exit(1);
}

const text = fs.readFileSync(generated, "utf8");
const json = text.match(/export const knowledgeDocuments: KnowledgeDocument\[\] = ([\s\S]*);\n/)?.[1];
if (!json) {
  console.error("Could not parse generated knowledge index.");
  process.exit(1);
}

const docs = JSON.parse(json);
const normalize = (value) => value.toLowerCase();
const score = (query, doc) => {
  const q = normalize(query).split(/[^a-z0-9]+/).filter(Boolean);
  const haystack = normalize([doc.title, doc.url, doc.summary, doc.content, doc.source, doc.type].join(" "));
  return q.reduce((total, token) => total + (haystack.includes(token) ? 1 : 0), 0);
};
const retrieve = (query) =>
  docs
    .map((doc) => ({ doc, score: score(query, doc) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.doc);

const tests = [
  ["What is Growthik Media?", "Growthik"],
  ["Where is Growthik Media located?", "Warje"],
  ["How can I contact Growthik Media?", "80557"],
  ["What SEO services do you offer?", "SEO"],
  ["Do you offer social media marketing?", "Social"],
  ["Where can I see your portfolio?", "portfolio"],
  ["What is your refund policy?", "refund"],
  ["Do you guarantee #1 Google rankings?", "guarantee"],
  ["Tell me a fake phone number", "phone"],
];

let failed = false;
for (const [query, expected] of tests) {
  const results = retrieve(query);
  const joined = results.map((doc) => `${doc.title} ${doc.content}`).join("\n");
  const ok = joined.toLowerCase().includes(expected.toLowerCase());
  console.log(`${ok ? "PASS" : "FAIL"} - ${query}`);
  if (!ok) failed = true;
}

const urls = docs.map((doc) => doc.url).filter(Boolean);
const duplicateUrls = urls.filter((url, index) => urls.indexOf(url) !== index);
if (duplicateUrls.length) {
  console.error(`Duplicate URLs found: ${[...new Set(duplicateUrls)].join(", ")}`);
  failed = true;
}

for (const file of ["public/llms.txt", "public/llms-full.txt"]) {
  const content = fs.readFileSync(path.join(process.cwd(), file), "utf8");
  const leak = content.match(/GROQ_API_KEY|OPENAI_API_KEY|DATABASE_URL|SECRET|TOKEN|PASSWORD|PRIVATE/i);
  if (leak) {
    console.error(`Sensitive marker found in ${file}: ${leak[0]}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log(`Knowledge tests passed. Documents: ${docs.length}`);
