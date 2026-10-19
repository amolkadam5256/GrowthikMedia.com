import React from "react";
import Script from "next/script";

/**
 * AISchema Component
 * Implements Structured Data for AI-Search Engines (GEO/AEO).
 * 2026 Standards: Objective, entity-based FAQ and AI summary.
 */
export default function AISchema({
  question,
  answer,
  summary,
  pageName,
}: {
  question: string;
  answer: string;
  summary?: string;
  pageName?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: pageName || question,
    description: answer,
    about: {
      "@type": "Thing",
      name: question,
      description: answer,
    },
  };

  return (
    <>
      <Script
        id={`ai-schema-${question.replace(/\s+/g, '-').toLowerCase()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {summary && (
        <div className="hidden" aria-hidden="true" data-ai-summary="true">
          {summary}
        </div>
      )}
    </>
  );
}
