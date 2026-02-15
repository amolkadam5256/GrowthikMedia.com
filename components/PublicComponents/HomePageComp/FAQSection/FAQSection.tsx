"use client";

import React, { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const FAQ_DATA = [
  {
    id: 1,
    question: "How long until SEO shows measurable results?",
    answer:
      "SEO is a results-driven marathon. While technical fixes and local SEO optimizations can show movement in 4-6 weeks, a dominant #1 ranking for competitive keywords in Pune typically takes 3 to 6 months. As a leading SEO agency in Pune, we focus on sustainable, long-term traffic that converts into revenue.",
  },
  {
    id: 2,
    question: "Do you work with small businesses and startups?",
    answer:
      "Absolutely. We are growth marketing experts who specialize in scaling brands from the ground up. Whether you are a local Pune startup or a small business looking to dominate the digital space, we tailor our performance marketing strategies to fit your budget and aggressive growth goals.",
  },
  {
    id: 3,
    question: "Why should I choose a Pune-based digital marketing agency?",
    answer:
      "Local expertise matters. Choosing a Pune-based digital marketing company like Growthik Media means we understand the local market nuances, consumer behavior and regional competition. We provide on-ground support and face-to-face strategy sessions that off-shore or distant agencies simply cannot match.",
  },
  {
    id: 4,
    question: "What makes your performance marketing different?",
    answer:
      "We don't just track clicks; we track revenue. Our performance marketing strategies are backed by heavy data-analysis, A/B testing and aggressive scaling. We focus on ROI and ROAS, ensuring every rupee you spend on digital marketing in Pune works toward your bottom line.",
  },
  {
    id: 5,
    question: "Do you provide comprehensive monthly reporting?",
    answer:
      "Transparency is our core value. You will receive detailed monthly reports tracking KPIs, traffic growth, lead conversion and keyword rankings. We schedule monthly strategy calls to review performance and adjust our roadmap for the next growth sprint.",
  },
];

const FAQSection = React.memo(() => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="relative py-16 md:py-24 bg-(--background) overflow-hidden"
    >
      {/* Background Decorative */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">
              Help Center
            </span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-4 leading-[1.1]">
            FAQ<span className="text-primary">.</span>
          </h2>
          <p className="text-lg md:text-xl text-(--text-secondary) font-light italic max-w-2xl mx-auto">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={faq.id}
              className="group transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`transition-all duration-500 overflow-hidden cursor-pointer border-2 bg-(--surface) ${
                  openId === faq.id
                    ? "border-(--color-primary) shadow-[0_0_30px_rgba(217,11,28,0.05)]"
                    : "border-(--border) hover:border-(--color-primary)/50 hover:bg-(--color-primary)/2"
                }`}
                onClick={() => toggleFaq(faq.id)}
              >
                {/* Question Area */}
                <div className="p-6 md:p-8 flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <span className="text-xl font-black text-(--color-primary) opacity-40 group-hover:opacity-100 transition-opacity">
                      0{index + 1}
                    </span>
                    <h3
                      className={`text-lg md:text-xl font-black uppercase tracking-tight transition-colors duration-300 ${openId === faq.id ? "text-(--color-primary)" : "text-(--text-primary)"}`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <div className="shrink-0">
                    <div
                      className={`w-10 h-10 flex items-center justify-center border-2 transition-all duration-300 ${openId === faq.id ? "border-(--color-primary) bg-(--color-primary) text-white rotate-180" : "border-(--border) text-(--text-secondary) group-hover:border-(--color-primary) group-hover:text-(--color-primary)"}`}
                    >
                      {openId === faq.id ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Answer Area */}
                <div
                  className={`transition-all duration-500 ease-in-out ${
                    openId === faq.id
                      ? "max-h-[500px] opacity-100 pb-8"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 md:px-8 ml-16">
                    <p className="text-base md:text-lg leading-relaxed text-(--text-secondary) font-light italic border-l-2 border-(--color-primary)/20 pl-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* High-Conversion Footer CTA */}
        <div className="mt-20 text-center" data-aos="zoom-in">
          <div className="p-5 md:p-8 bg-(--surface) border-2 border-(--border) hover:border-(--color-primary) relative overflow-hidden group transition-all duration-500 shadow-xl hover:shadow-[0_0_50px_rgba(217,11,28,0.1)]">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-(--color-primary)/5 -translate-y-1/2 translate-x-1/2 rotate-45 group-hover:bg-(--color-primary)/10 transition-colors" />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="w-20 h-20 bg-(--color-primary)/10 flex items-center justify-center rounded-full">
                <MessageCircle className="w-10 h-10 text-(--color-primary)" />
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl font-black text-(--text-primary) uppercase mb-3 tracking-tighter">
                  Still have questions?
                </h3>
                <p className="text-(--text-secondary) max-w-md mx-auto">
                  Our growth experts are ready to help. Start a conversation now
                  or use our{" "}
                  <span className="text-(--color-primary) font-bold">
                    Live Chat
                  </span>{" "}
                  in the bottom-right corner.
                </p>
              </div>

              <Link
                href="/contact"
                className="group/btn relative inline-flex items-center gap-6 px-12 py-5 bg-(--color-primary) hover:bg-(--color-primary-light) transition-all duration-300 shadow-xl hover:shadow-primary/30"
              >
                <span className="text-white font-black uppercase tracking-[0.2em] text-sm">
                  Chat with us
                </span>
                <ArrowRight className="w-5 h-5 text-white group-hover/btn:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FAQSection.displayName = "FAQSection";
export default FAQSection;
