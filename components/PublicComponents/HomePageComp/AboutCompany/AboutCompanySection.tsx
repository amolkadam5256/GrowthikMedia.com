"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

const AboutCompanySection = React.memo(() => {
  return (
    <section className="relative py-10 md:py-16 bg-(--background) overflow-hidden">
      {/* Animated Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-(--color-primary)/10 rounded-full blur-3xl animate-pulse will-change-[opacity]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-(--color-primary)/5 rounded-full blur-3xl animate-pulse will-change-[opacity]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10" data-aos="fade-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-(--color-primary)" />
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
                Our Heritage
              </span>
              <div className="w-12 h-[2px] bg-(--color-primary)" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) mb-8 tracking-tight leading-[1.1]">
              We Turn{" "}
              <span className="relative inline-block">
                <span className="text-(--color-primary)">Clicks</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 5.5C50 1.5 150 1.5 199 5.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-(--color-primary)"
                  />
                </svg>
              </span>{" "}
              Into Customers
            </h2>
          </div>

          {/* Content Card */}
          <div
            className="relative group bg-(--surface) border-2 border-(--border) p-8 md:p-12 hover:border-(--color-primary) transition-all duration-500 hover:shadow-2xl hover:shadow-(--color-primary)/20"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {/* Decorative Corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-(--color-primary) opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-(--color-primary) opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-(--color-primary)/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative space-y-6 text-center">
              <p className="text-xl md:text-2xl text-(--text-primary) font-semibold leading-relaxed">
                Performance-driven digital marketing agency in{" "}
                <span className="text-(--color-primary) font-black">Pune</span>,
                transforming ambitious businesses into market leaders.
              </p>

              <div className="w-20 h-1 bg-(--color-primary) mx-auto" />

              <p className="text-lg md:text-xl text-(--text-secondary) leading-relaxed max-w-3xl mx-auto">
                We believe in{" "}
                <span className="text-(--color-primary) font-bold">
                  data over guesswork
                </span>
                , results over vanity metrics. Our mission: help you dominate
                your industry with ROI-focused strategies that scale.
              </p>
            </div>
          </div>

          {/* Company Info Badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 mt-12"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 px-6 py-3 bg-(--surface) border border-(--border) rounded-full hover:border-(--color-primary) transition-all">
              <span className="text-sm font-bold text-(--text-secondary)">
                Pune Digital Marketing Experts
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-(--surface) border border-(--border) rounded-full hover:border-(--color-primary) transition-all">
              <span className="text-sm font-bold text-(--text-secondary)">
                Serving Pune, Mumbai, Maharashtra
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-(--surface) border border-(--border) rounded-full hover:border-(--color-primary) transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-(--color-primary)"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-sm font-bold text-(--text-secondary)">
                Based in Pune
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-(--surface) border border-(--border) rounded-full hover:border-(--color-primary) transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-(--color-primary)"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
              </svg>
              <span className="text-sm font-bold text-(--text-secondary)">
                Established 2019
              </span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-(--surface) border border-(--border) rounded-full hover:border-(--color-primary) transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-(--color-primary)"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span className="text-sm font-bold text-(--text-secondary)">
                50+ Clients Served
              </span>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12" data-aos="fade-up">
            <a
              href="/about"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-(--color-primary) text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-(--color-primary-light) transition-all duration-300 shadow-xl hover:shadow-primary/30 hover:scale-105"
            >
              <span>Discover Our Story</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutCompanySection.displayName = "AboutCompanySection";
export default AboutCompanySection;
