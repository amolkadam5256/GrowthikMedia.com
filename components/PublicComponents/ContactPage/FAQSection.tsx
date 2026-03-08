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
    <div className="rounded-sm mt-12 bg-white dark:bg-zinc-900 border-2 border-black dark:border-white/20 shadow-[12px_12px_0_#000] dark:shadow-[12px_12px_0_#fff] max-w-5xl mx-auto overflow-hidden transition-colors">
      <div className="border-b-4 border-black dark:border-white/20 bg-white dark:bg-zinc-900 p-8 sm:p-12">
        <h2 className="text-4xl sm:text-5xl font-black text-black dark:text-white uppercase tracking-tighter">
          FAQ_
        </h2>
        <p className="text-gray-600 dark:text-gray-400 font-bold uppercase tracking-widest mt-2 text-sm border-l-4 border-red-600 pl-4">
          Vital Knowledge Base
        </p>
      </div>
      <div className="space-y-0 text-black dark:text-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border-b-2 border-black dark:border-white/20 last:border-b-0 transition-colors ${openFaq === index ? "bg-red-50 dark:bg-red-900/10" : ""}`}
          >
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              aria-expanded={openFaq === index}
              aria-controls={`faq-answer-${index}`}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left outline-none group"
            >
              <h3
                className={`text-xl font-black pr-8 uppercase tracking-wide transition-colors m-0 ${openFaq === index ? "text-red-600" : "text-black dark:text-white group-hover:text-red-600"}`}
              >
                0{index + 1}. {faq.q}
              </h3>
              <div
                className={`rounded-sm w-10 h-10 flex items-center justify-center border-2 transition-all flex-shrink-0 ${openFaq === index ? "bg-red-600 border-red-600 text-white" : "bg-white dark:bg-black border-black dark:border-white text-black dark:text-white group-hover:border-red-600 group-hover:text-red-600 shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#fff]"}`}
              >
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                />
              </div>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              <p className="px-6 sm:px-8 pb-8 pt-0 text-gray-800 dark:text-gray-300 font-bold text-lg">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
