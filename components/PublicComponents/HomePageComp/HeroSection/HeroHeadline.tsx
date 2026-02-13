import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const HeroHeadline = () => {
  return (
    <header className="flex flex-col justify-center items-center text-center relative max-w-6xl mx-auto px-4 py-12 md:py-12">
      {/* Main Content Container */}
      <div className="relative z-10 space-y-6 md:space-y-8">
        {/* Pre-headline */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px w-8 md:w-12 bg-linear-to-r from-transparent to-(--color-primary)"></div>
          <span
            className="text-xs md:text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-primary)" }}
          >
            Award-Winning Digital Marketing Agency
          </span>
          <div className="h-px w-8 md:w-12 bg-linear-to-l from-transparent to-(--color-primary)"></div>
        </div>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.1] tracking-tight"
          style={{ color: "var(--color-white)" }}
        >
          <span className="sr-only">
            Growthik Media - Digital Marketing Agency Pune
          </span>
          Scale Your Revenue with
          <br />
          <span className="relative inline-block mt-2">
            <span className="bg-linear-to-r from-(--color-primary) via-(--color-primary-light) to-(--color-primary-light) bg-clip-text text-transparent">
              Performance Marketing
            </span>
            {/* Animated underline */}
            <svg
              className="absolute w-full h-4 md:h-6 -bottom-2 md:-bottom-3 left-0 animate-pulse"
              style={{ color: "var(--color-primary)" }}
              viewBox="0 0 200 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.00025 6.99997C69.5002 4.00003 128.5 -1.50002 198 2.49997"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <br />
          <span style={{ color: "var(--color-white)" }}>That Delivers ROI</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-xl max-w-3xl mx-auto font-medium leading-relaxed px-4"
          style={{ color: "var(--text-secondary)" }}
        >
          Dominate your niche with{" "}
          <span className="font-bold" style={{ color: "var(--color-primary)" }}>
            Data-Driven SEO Services
          </span>{" "}
          and high-converting Paid Ads. We specialize in precision lead
          generation to propel your business forward.
          <br className="hidden md:block" />
          <span
            className="text-sm md:text-base"
            style={{ color: "var(--text-tertiary)" }}
          >
            Turning clicks into customers with predictable growth strategies.
          </span>
        </p>

        {/* CTA Section */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          {/* Annotation: Free Growth Audit */}
          <div className="absolute -left-20 md:-left-32 top-0 hidden lg:block">
            <p
              className="text-lg md:text-xl transform -rotate-12 mb-2 font-medium"
              style={{
                color: "var(--color-white)",
                fontFamily: "var(--font-caveat), cursive",
              }}
            >
              Let’s Grow Your Business
            </p>
            <svg
              className="w-16 h-8 transform -scale-y-100 rotate-180"
              style={{ color: "var(--color-white)" }}
              viewBox="0 0 60 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M50,25 Q30,5 5,20 L10,15 M5,20 L15,22" />
            </svg>
          </div>

          {/* Primary CTA with Dashed Border */}
          <div className="relative group">
            <div className="relative p-1.5 md:p-2 border-2 border-dashed rounded-full border-(--color-primary)">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-3 md:px-12 md:py-4 text-base md:text-lg font-bold text-white shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1 flex items-center gap-2 border-0"
                  style={{ backgroundColor: "#d90b1c" }}
                >
                  Let’s Chat
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="relative group">
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-3 md:px-12 md:py-4 text-base md:text-lg font-bold border-2 transition-all transform hover:-translate-y-1 bg-transparent! hover:bg-primary! text-white! hover:text-white! shadow-lg hover:shadow-[0_0_20px_rgba(217,11,28,0.4)]"
                style={{
                  borderColor: "var(--color-primary)",
                }}
              >
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <ul className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-4 opacity-80 list-none p-0">
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              style={{ color: "var(--color-primary)" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="text-xs md:text-sm font-semibold"
              style={{ color: "var(--color-white)" }}
            >
              ROI Focused
            </span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              style={{ color: "var(--color-primary)" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="text-xs md:text-sm font-semibold"
              style={{ color: "var(--color-white)" }}
            >
              Google Certified
            </span>
          </li>
          <li className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              style={{ color: "var(--color-primary)" }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span
              className="text-xs md:text-sm font-semibold"
              style={{ color: "var(--color-white)" }}
            >
              Real-Time Reporting
            </span>
          </li>
        </ul>

        {/* Proof Above The Fold - Added Stats & Logo Strip */}
        <div className="pt-10 flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <span className="text-xl md:text-2xl font-black text-(--color-primary)">
                50+
              </span>
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider text-left leading-tight">
                Happy
                <br />
                Clients
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <span className="text-xl md:text-2xl font-black text-yellow-400">
                5.0
              </span>
              <div className="flex flex-col">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400 text-[8px]">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider text-left">
                  Google Rating
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white border-2 border-black">
                  G
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-400 flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white border-2 border-black">
                  M
                </div>
              </div>
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider text-left leading-tight">
                Google & Meta
                <br />
                Partner
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-bold text-white/40 uppercase tracking-[0.4em]">
              Trusted by 50+ brands across Pune
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                "TechFlow",
                "NexaCorp",
                "Vitality",
                "BuildScale",
                "GrowthGen",
              ].map((brand, i) => (
                <span
                  key={i}
                  className="text-lg md:text-xl font-black text-white"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* Annotation: Elevate your brand */}
      <div className="absolute top-40 md:top-20 lg:top-14 right-3 md:right-12 lg:right-0 hidden md:block opacity-80">
        <p
          className="text-lg md:text-xl transform -rotate-12 font-medium"
          style={{
            color: "var(--color-white)",
            fontFamily: "var(--font-caveat), cursive",
          }}
        >
          Elevate your brand
        </p>
        <svg
          className="w-24 h-12 transform rotate-90"
          style={{ color: "var(--color-white)" }}
          viewBox="0 0 100 50"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M10,10 Q50,5 50,40 L45,30 M50,40 L55,30" />
        </svg>
      </div>

      {/* Tic Marks */}
      <div className="absolute top-8 left-8 md:top-16 md:left-16 hidden sm:block opacity-40">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          stroke="var(--color-white)"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <path d="M10 20L15 25L30 10" />
        </svg>
      </div>
    </header>
  );
};

export default HeroHeadline;
