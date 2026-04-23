"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "How quickly will you respond to inquiries?",
      a: "Our team typically responds within 12–24 hours during business days. For urgent enquiries, call us directly at +91 80557 54054.",
    },
    {
      q: "Do you offer free consultations?",
      a: "Yes, we provide a free digital marketing strategy consultation for new clients. Book your session to get a customised growth plan for your business.",
    },
    {
      q: "What services does Growthik Media provide?",
      a: "SEO, Social Media Marketing, PPC / Google Ads, Website Development, Branding & Design and E-Commerce Solutions - serving businesses across Pune and India.",
    },
    {
      q: "Do you work with businesses outside Pune?",
      a: "Yes, we scale businesses across India and globally. While headquartered in Pune, we serve clients in Mumbai, Bangalore, Delhi and internationally.",
    },
    {
      q: "What is the cost of digital marketing services in Pune?",
      a: "Our packages are customised based on your business goals, competition and channels. Contact us for a free consultation and a tailored proposal.",
    },
    {
      q: "How long does it take to see results from digital marketing?",
      a: "SEO typically delivers measurable results in 3–6 months. PPC and Google Ads can generate leads within 2–4 weeks. Social media growth depends on content strategy and ad spend.",
    },
  ];

  return (
    <div className="rounded-3xl mt-24 bg-(--surface) border border-(--border) shadow-2xl max-w-5xl mx-auto overflow-hidden transition-all">
      <div className="border-b border-(--border) bg-(--surface-secondary) p-8 sm:p-12">
        <h2 className="text-4xl sm:text-5xl font-black text-(--text-primary) uppercase tracking-tighter">
          Frequently Asked <span className="text-red-600">Questions</span>
        </h2>
        <p className="text-(--text-secondary) font-bold uppercase tracking-widest mt-2 text-xs border-l-4 border-red-600 pl-4">
          Digital Marketing Services - Pune & India
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
