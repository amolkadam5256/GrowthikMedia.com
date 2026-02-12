"use client";

import React from "react";
import { Zap, ArrowRight, Sparkles } from "lucide-react";

const FinalCTASection = React.memo(() => {
  return (
    <section className="relative py-12 md:py-20 bg-(--surface) overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Very Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-(--background)/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Icon Badge */}
          <div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-(--surface) border border-(--border) rounded-full"
            data-aos="zoom-in"
          >
            <Sparkles className="w-5 h-5 text-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Ready to Grow?
            </span>
          </div>

          {/* Main Headline */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) mb-6 tracking-tight leading-[1.1]"
            data-aos="fade-up"
          >
            Let's Turn Your Business Into a{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-(--color-primary)">
                Growth Machine
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8C50 3 150 3 199 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="text-(--color-primary)"
                />
              </svg>
            </span>
          </h2>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-(--text-secondary) mb-10 max-w-2xl mx-auto leading-relaxed"
            data-aos="fade-up"
          >
            Book a free strategy session and discover how we can 3X your revenue
            in the next 90 days.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            data-aos="fade-up"
          >
            {/* Primary CTA */}
            <a
              href="/contact"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-(--color-primary) text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-(--color-primary-light) transition-all duration-300 shadow-2xl hover:shadow-primary/30 hover:scale-105 overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 will-change-transform" />

              <Zap className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Get Free Strategy Session</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary CTA */}
            <a
              href="/portfolio"
              className="group inline-flex items-center gap-3 px-8 py-5 bg-transparent border-2 border-(--border) text-(--text-primary) font-bold uppercase tracking-[0.2em] text-sm hover:bg-(--surface) hover:border-(--color-primary) transition-all duration-300"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Trust Indicators */}
          <div
            className="flex flex-wrap items-center justify-center gap-6 text-(--text-secondary) text-xs uppercase tracking-wider"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>No Long-Term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>100% Transparent Reporting</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>ROI-Focused Strategies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

FinalCTASection.displayName = "FinalCTASection";
export default FinalCTASection;
