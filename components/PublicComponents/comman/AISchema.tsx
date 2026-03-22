import React from "react";

/**
 * AISchema Component
 * Implements Structured Data for AI-Search Engines (GEO/AEO).
 * 2026 Standards: Objective, entity-based FAQ and AI summary.
 */
export default function AISchema({
  question,
  answer,
  summary,
}: {
  question: string;
  answer: string;
  summary?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      },
    ],
  };

  return (
    <>
      <script
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
