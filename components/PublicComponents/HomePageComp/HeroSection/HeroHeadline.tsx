import React from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const HeroHeadline = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center relative max-w-6xl mx-auto px-4 py-12 md:py-12">
      {/* Main Content Container */}
      <div className="relative z-10 space-y-6 md:space-y-8">
        {/* Pre-headline */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-[var(--color-primary)]"></div>
          <span
            className="text-xs md:text-sm font-semibold uppercase tracking-wider"
            style={{ color: "var(--color-primary)" }}
          >
            Professional Content Creation
          </span>
          <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-[var(--color-primary)]"></div>
        </div>

        {/* Main Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-black tracking-wider leading-[1.1] tracking-tight"
          style={{ color: "var(--color-white)" }}
        >
          Engage Audiences
          <br />
          <span className="relative inline-block mt-2">
            <span className="bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary-light)] to-[var(--color-primary-light)] bg-clip-text text-transparent">
              with Stunning
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
          <span style={{ color: "var(--color-white)" }}>Videos</span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-base sm:text-lg md:text-xl lg:text-xl max-w-3xl mx-auto font-medium leading-relaxed px-4"
          style={{ color: "var(--text-secondary)" }}
        >
          Boost Your Brand with{" "}
          <span className="font-bold" style={{ color: "var(--color-primary)" }}>
            High-Impact
          </span>{" "}
          Short Videos from our expert content creators.
          <br className="hidden md:block" />
          <span
            className="text-sm md:text-base"
            style={{ color: "var(--text-tertiary)" }}
          >
            Our team is ready to propel your business forward.
          </span>
        </p>

        {/* CTA Section */}
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          {/* Annotation: It's free */}
          <div className="absolute left-3 md:-left-2 top-1/2 -translate-y-1/2  lg:block">
            <p
              className="font-handwriting text-lg md:text-xl transform -rotate-12 mb-2 font-medium"
              style={{ color: "var(--color-white)" }}
            >
              It's free
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

          {/* Primary CTA */}
          <div className="relative group">
            <div
              className="relative p-1.5 md:p-2 border-2 border-dashed rounded-full"
              style={{
                borderColor: "var(--color-primary)",
              }}
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="rounded-full px-6 py-2 sm:px-8 sm:py-2 md:px-12 md:py-3 text-sm sm:text-lg md:text-lg font-bold text-white shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1 hover:scale-105 flex items-center gap-2"
                  style={{
                    background: `linear-gradient(to right, var(--color-primary), var(--color-primary-light))`,
                  }}
                >
                  Get Started Free
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-1 opacity-60">
          <div className="flex items-center gap-2">
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
              className="text-xs md:text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              No Credit Card
            </span>
          </div>
          <div className="flex items-center gap-2">
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
              className="text-xs md:text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Cancel Anytime
            </span>
          </div>
          <div className="flex items-center gap-2">
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
              className="text-xs md:text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Fast Turnaround
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* Annotation: Elevate your brand */}
      <div className="absolute top-40 md:top-20 lg:top-14 right-3 md:right-12 lg:right-0 md:block opacity-80">
        <p
          className="font-handwriting text-lg md:text-xl transform -rotate-12 font-medium"
          style={{ color: "var(--color-white)" }}
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

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap");
        .font-handwriting {
          font-family: "Caveat", cursive;
        }
      `}</style>
    </div>
  );
};

export default HeroHeadline;
