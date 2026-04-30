import React from 'react';
import Script from 'next/script';

/**
 * Reusable FAQPage Structured Data
 * Ensures FAQ lists on service pages are indexed as rich snippets.
 */

interface FAQProps {
  questions: { q: string; a: string }[];
}

export default function FAQSchema({ questions }: FAQProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
