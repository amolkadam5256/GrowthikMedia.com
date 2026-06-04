"use client";

import React, { useState } from "react";
import { Plus, Minus, CheckCircle2 } from "lucide-react";
import Script from "next/script";

interface FAQItem {
  q: string;
  a: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  schemaId?: string;
}

export const ServiceFAQ: React.FC<ServiceFAQProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about our services and process.",
  schemaId = "faq-schema",
}) => {
  const [openId, setOpenId] = useState<number | null>(0);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="px-6 lg:px-12 py-20 bg-(--surface) border-t border-(--border)">
      <Script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-(--text-primary)">
            {title}
          </h2>
          <div className="w-16 h-1.5 bg-(--color-primary) mx-auto mb-6 rounded-full" />
          <p className="text-(--text-secondary) font-medium max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`transition-all duration-300 border-2 bg-(--background) ${
                openId === idx
                  ? "border-(--color-primary) shadow-[0_0_30px_rgba(217,11,28,0.05)]"
                  : "border-(--border) hover:border-(--color-primary)/50"
              }`}
            >
              <button
                className="w-full text-left p-6 flex items-center justify-between gap-6 bg-transparent border-none focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-primary)"
                onClick={() => toggleFaq(idx)}
                aria-expanded={openId === idx}
                aria-controls={`service-faq-answer-${idx}`}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className={`w-5 h-5 mt-1 shrink-0 transition-colors ${
                      openId === idx ? "text-(--color-primary)" : "text-(--text-secondary) opacity-40"
                    }`}
                  />
                  <h3
                    className={`text-lg font-black transition-colors duration-300 ${
                      openId === idx ? "text-(--color-primary)" : "text-(--text-primary)"
                    }`}
                  >
                    {faq.q}
                  </h3>
                </div>
                <div className="shrink-0">
                  <div
                    className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${
                      openId === idx
                        ? "border-(--color-primary) bg-(--color-primary) text-white rotate-180"
                        : "border-(--border) text-(--text-secondary)"
                    }`}
                  >
                    {openId === idx ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </button>

              <div
                id={`service-faq-answer-${idx}`}
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openId === idx ? "max-h-[800px] opacity-100 pb-8" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 ml-14">
                  <p className="text-base md:text-lg leading-relaxed text-(--text-secondary) font-medium border-l-2 border-(--color-primary)/20 pl-6">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
