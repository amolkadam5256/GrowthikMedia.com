import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const HeroHeadline = () => {
  return (
    <header
      className="flex flex-col justify-center items-center text-center relative max-w-6xl mx-auto px-4 py-12 md:py-12"
      role="banner"
    >
      {/* Main Content Container */}
      <div className="relative z-10 space-y-6 md:space-y-8">
        {/* New Core Identity Message */}
        <div
          className="inline-block px-6 py-2 rounded-full border border-(--color-primary)/30 bg-(--color-primary)/5 backdrop-blur-sm shadow-xl shadow-primary/10 animate-fade-in"
          data-aos="fade-down"
        >
          <p className="text-xs md:text-sm font-bold tracking-wider text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-(--color-primary) animate-pulse" />
            Growthik Media: AI-Powered Growth Engineering
          </p>
        </div>

        {/* Main Headline - SEO Optimized H1 */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight"
          style={{ color: "var(--color-white)" }}
        >
          <span className="sr-only">
            AI-Powered Growth Engineering Company in Pune - Growthik Media
          </span>
          <span aria-hidden="true">
            Building
            <span className="relative inline-block mx-4">
              <span className="bg-linear-to-r from-(--color-primary) via-(--color-primary-light) to-(--color-primary-light) bg-clip-text text-transparent">
                Predictable Revenue
              </span>
              <svg
                className="absolute w-full h-4 md:h-6 -bottom-2 md:-bottom-3 left-0"
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
            Systems, Not Just Ads
          </span>
        </h1>

        {/* Subheadline - The Core Identity Line */}
        <p
          className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto font-medium leading-[1.6] px-4"
          style={{ color: "var(--color-white)" }}
        >
          Growthik Media is an{" "}
          <strong className="text-(--color-primary) font-black">
            AI-powered growth engineering company
          </strong>{" "}
          that builds predictable revenue systems -{" "}
          <span className="opacity-80">not just marketing campaigns.</span>
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
