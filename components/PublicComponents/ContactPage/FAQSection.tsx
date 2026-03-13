"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly will you respond to inquiries?",
      a: "Our team typically responds within 12–24 hours during business days.",
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes, we provide a free digital marketing strategy consultation for new clients.",
    },
    {
      q: "What services does Growthik Media provide?",
      a: "SEO, Social Media Marketing, PPC Advertising, Website Development, Branding & Design, and E-Commerce Solutions.",
    },
    {
      q: "Do you work with businesses outside Pune?",
      a: "Yes, we scale businesses across India and globally.",
    },
  ];

  return (
    <div className="rounded-3xl mt-24 bg-(--surface) border border-(--border) shadow-2xl max-w-5xl mx-auto overflow-hidden transition-all">
      <div className="border-b border-(--border) bg-(--surface-secondary) p-8 sm:p-12">
        <h2 className="text-4xl sm:text-5xl font-black text-(--text-primary) uppercase tracking-tighter">
          FAQ<span className="text-red-600">.</span>
        </h2>
        <p className="text-(--text-secondary) font-bold uppercase tracking-widest mt-2 text-xs border-l-4 border-red-600 pl-4">
          Common Questions
        </p>
      </div>
      <div className="divide-y divide-(--border)">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`transition-colors ${openFaq === index ? "bg-red-600/2" : "bg-transparent"}`}
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              aria-expanded={openFaq === index}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left outline-none group cursor-pointer"
            >
              <h3
                className={`text-lg sm:text-xl font-black pr-8 uppercase tracking-wide transition-colors ${openFaq === index ? "text-red-600" : "text-(--text-primary) group-hover:text-red-600"}`}
              >
                0{index + 1}. {faq.q}
              </h3>
              <div
                className={`rounded-xl w-10 h-10 flex items-center justify-center border transition-all shrink-0 ${openFaq === index ? "bg-red-600 border-red-600 text-white" : "bg-(--surface-secondary) border-(--border) text-(--text-secondary) group-hover:border-red-600 group-hover:text-red-600"}`}
              >
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-500 ${openFaq === index ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"}`}
            >
              <p className="px-6 sm:px-8 text-(--text-secondary) font-bold text-base sm:text-lg leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
