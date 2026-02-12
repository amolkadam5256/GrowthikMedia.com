"use client";

import React from "react";
import { XCircle, CheckCircle } from "lucide-react";

const problems = [
  {
    title: "Low Quality Leads",
    desc: "Tired of inquiries that never convert?",
  },
  {
    title: "High Ad Spend, Low ROI",
    desc: "Burning budget with zero returns?",
  },
  { title: "Invisible Online Presence", desc: "Hard to find on Google?" },
  {
    title: "Website Traffic Not Converting",
    desc: "Lots of clicks, no sales?",
  },
];

const solutions = [
  {
    title: "High-Intent Lead Generation",
    desc: "Leads that are ready to buy.",
  },
  {
    title: "Data-Driven Performance Marketing",
    desc: "Maximize every rupee spent.",
  },
  {
    title: "Dominate Search (SEO) & Socials",
    desc: "Be seen everywhere that matters.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    desc: "Turn visitors into loyal customers.",
  },
];

const ProblemSolutionSection = React.memo(() => {
  return (
    <section className="py-12 md:py-20 bg-(--background) relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-24" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-sm">
              Our Vision
            </span>
            <span className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) mb-6 tracking-tight leading-[1.1]">
            <span className="opacity-40 line-through decoration-red-500/50 decoration-4 mr-0 md:mr-4">
              Stop Guessing.
            </span>
            <br className="md:hidden" />
            <span className="text-(--color-primary)">Start Growing.</span>
          </h2>
          <p className="text-lg md:text-xl text-(--text-secondary) max-w-2xl mx-auto leading-relaxed">
            We bridge the gap between where you are and where you want to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start max-w-6xl mx-auto relative">
          {/* Connector Arrow (Desktop) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-(--surface) rounded-full border border-(--border) shadow-xl text-(--color-primary)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse will-change-transform"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </div>

          {/* Problems Column */}
          <div
            className="bg-(--surface) border border-(--border)  p-8 md:p-12 relative overflow-hidden group hover:border-red-500/30 transition-all duration-500 hover:shadow-lg"
            data-aos="fade-right"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14  bg-red-100 dark:bg-red-900/20 flex items-center justify-center shadow-inner">
                <XCircle className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-(--text-primary)">
                The Struggle
              </h3>
            </div>

            <div className="space-y-8">
              {problems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group/item">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-1 opacity-60 group-hover/item:opacity-100 transition-opacity" />
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-(--text-primary)/80 group-hover/item:text-red-500 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-base text-(--text-secondary) leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div
            className="bg-(--surface) border border-(--border) p-8 md:p-12 relative overflow-hidden group hover:border-green-500/30 transition-all duration-500 hover:shadow-lg"
            data-aos="zoom-in"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14  bg-green-100 dark:bg-green-900/20 flex items-center justify-center shadow-inner">
                <CheckCircle className="w-7 h-7 text-green-500 " />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-(--text-primary)">
                The Growthik Solution
              </h3>
            </div>

            <div className="space-y-8">
              {solutions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group/item">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-(--text-primary) group-hover/item:text-green-500 transition-colors mb-1">
                      {item.title}
                    </h4>
                    <p className="text-base text-(--text-secondary) leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ProblemSolutionSection.displayName = "ProblemSolutionSection";
export default ProblemSolutionSection;
