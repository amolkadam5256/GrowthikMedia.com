import { knowledgeDocuments, type KnowledgeDocument } from "./generated";

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "can",
  "do",
  "does",
  "for",
  "from",
  "have",
  "how",
  "i",
  "in",
  "is",
  "it",
  "me",
  "of",
  "on",
  "or",
  "our",
  "the",
  "to",
  "what",
  "where",
  "which",
  "with",
  "you",
  "your",
]);

const COMPANY_TERMS = [
  "growthik",
  "growthik media",
  "service",
  "services",
  "price",
  "pricing",
  "cost",
  "package",
  "contact",
  "phone",
  "email",
  "address",
  "office",
  "location",
  "portfolio",
  "case study",
  "client",
  "testimonial",
  "guarantee",
  "refund",
  "policy",
  "team",
  "founder",
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9+.#/\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value: string) {
  return normalize(value)
    .split(" ")
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token));
}

function scoreDocument(query: string, doc: KnowledgeDocument) {
  const normalizedQuery = normalize(query);
  const queryTokens = tokens(query);
  const haystack = normalize(
    [doc.title, doc.url, doc.summary, doc.content, doc.source, doc.type].filter(Boolean).join(" "),
  );

  let score = 0;
  if (doc.url && normalizedQuery.includes(doc.url.replace(/\/$/, ""))) score += 30;
  if (haystack.includes(normalizedQuery) && normalizedQuery.length > 3) score += 20;

  for (const token of queryTokens) {
    if (normalize(doc.title).includes(token)) score += 8;
    if (doc.url && normalize(doc.url).includes(token)) score += 7;
    if (normalize(doc.summary).includes(token)) score += 4;
    if (haystack.includes(token)) score += 1;
  }

  if (normalizedQuery.includes("contact") && doc.source.includes("contact")) score += 12;
  if (normalizedQuery.includes("phone") && doc.source.includes("contact")) score += 12;
  if (normalizedQuery.includes("email") && doc.source.includes("contact")) score += 12;
  if (normalizedQuery.includes("location") && doc.source.includes("locationData")) score += 10;
  if (normalizedQuery.includes("where") && doc.source.includes("contact")) score += 10;
  if (normalizedQuery.includes("faq") && doc.source.includes("faqData")) score += 12;
  if (normalizedQuery.includes("blog") && doc.source.includes("blog")) score += 8;
  if (normalizedQuery.includes("portfolio") && doc.source.includes("portfolio")) score += 10;
  if (normalizedQuery.includes("service") && doc.type === "Service Page") score += 5;

  return score;
}

export function isCompanySpecificQuestion(question: string) {
  const normalized = normalize(question);
  return COMPANY_TERMS.some((term) => normalized.includes(term));
}

export function retrieveKnowledge(question: string, limit = 7) {
  const scored = knowledgeDocuments
    .map((doc) => ({ doc, score: scoreDocument(question, doc) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.doc.id.localeCompare(b.doc.id))
    .slice(0, limit);

  return {
    documents: scored.map((item) => item.doc),
    topScore: scored[0]?.score ?? 0,
    hasRelevantContext: (scored[0]?.score ?? 0) >= 3,
    companySpecific: isCompanySpecificQuestion(question),
  };
}

export function formatKnowledgeContext(documents: KnowledgeDocument[]) {
  return documents
    .map(
      (doc, index) => `[${index + 1}] ${doc.title}
Type: ${doc.type}
URL: ${doc.canonicalUrl || doc.url || "N/A"}
Source: ${doc.source}
Summary: ${doc.summary || "N/A"}
Content:
${doc.content.slice(0, 2200)}`,
    )
    .join("\n\n---\n\n");
}
