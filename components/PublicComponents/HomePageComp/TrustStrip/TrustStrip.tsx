"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Counter from "@/components/ui/Counter";

const logos = [
  "TechFlow",
  "NexaCorp",
  "Vitality",
  "BuildScale",
  "GrowthGen",
  "EcoShift",
  "Synergy",
  "ApexLabs",
  "Quantum",
  "Visionary",
];

const TrustStrip = React.memo(() => {
  return (
    <div className="w-full py-12 md:py-16 overflow-hidden relative z-20 transition-colors duration-300 bg-(--surface) border-b border-(--border)">
      {/* Background Animated Shapes */}
      <div className="absolute -left-10 -top-10 w-40 h-40 md:w-60 md:h-60 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--color-primary)"
            d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,87.4,-6.8C84.7,6.8,76.6,19.7,68.4,31.4C60.2,43.1,51.9,53.6,41.2,62.8C30.5,72,17.4,80,3.3,74.5C-10.8,69,-25.9,50,-38.6,33.5C-51.3,17,-61.6,3,-67.6,-13.4C-73.6,-29.8,-75.3,-48.6,-66.3,-58.3C-57.3,-68,-37.6,-68.6,-21.8,-74.6C-6,-80.6,5.9,-92,18.7,-93.6C31.5,-95.2,45.2,-87,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute -right-10 -bottom-10 w-48 h-48 md:w-72 md:h-72 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="var(--color-primary)"
            d="M39.9,-65.7C52.1,-60.5,62.6,-50.2,70.5,-38.1C78.4,-26,83.7,-12.1,81.3,0.7C78.9,13.5,68.8,25.2,59.3,37.3C49.8,49.4,40.9,61.9,29.3,69.5C17.7,77.1,3.4,79.8,-9.4,76.5C-22.2,73.2,-33.5,63.9,-43.3,53.8C-53.1,43.7,-61.4,32.8,-66.8,20.3C-72.2,7.8,-74.7,-6.3,-71.1,-19.5C-67.5,-32.7,-57.8,-45,-46.3,-50.9C-34.8,-56.8,-21.5,-56.3,-9.6,-54.6C2.3,-52.9,14.6,-50,27,-48.2C39.4,-46.4,51.9,-45.7,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
        {/* Left Section: Big Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-(--text-primary) leading-tight tracking-tight">
            Trusted by <br className="hidden md:block" />
            <span className="text-(--color-primary)">
              <Counter value={50} suffix="+ Happy Clients" />
            </span>
          </h2>
        </div>

        {/* Right Section: Reviews (Top) & Logos (Bottom) */}
        <div className="flex flex-col gap-8 md:gap-10 w-full overflow-hidden">
          {/* Top: Google Reviews & Certifications */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
            {/* Google Rating */}
            <a
              href="https://share.google/0OoJEAVJyM0LuBFcT"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-(--surface) px-5 py-3 rounded-full shadow-sm border border-(--border) hover:border-(--color-primary) hover:shadow-md transition-all duration-300 cursor-pointer shrink-0"
            >
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-(--text-primary) group-hover:text-(--color-primary) transition-colors">
                  <Counter value={5} suffix=".0 Rating" />
                </span>
                <span className="text-[10px] text-(--text-secondary) uppercase tracking-wider transition-colors">
                  Google Reviews
                </span>
              </div>
            </a>

            {/* Certifications & Partners */}
            <div className="flex items-center gap-3 bg-(--surface) px-4 py-2 rounded-full border border-(--border) shadow-sm shrink-0">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white border-2 border-(--surface) shadow-sm">
                  G
                </div>
                <div className="w-7 h-7 rounded-full bg-blue-400 flex items-center justify-center text-[10px] font-bold text-white border-2 border-(--surface) shadow-sm">
                  M
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xs font-bold text-(--text-primary)">
                  Certified Partner
                </span>
                <span className="text-[9px] text-(--text-secondary) uppercase tracking-wider">
                  Google & Meta
                </span>
              </div>
            </div>
          </div>

          {/* Bottom: Scrolling Logos */}
          <div
            className="w-full overflow-hidden relative"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <motion.div
              className="flex gap-12 md:gap-16 items-center whitespace-nowrap w-max will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 40,
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={index}
                  className="text-2xl md:text-3xl font-bold text-(--text-secondary) grayscale hover:grayscale-0 hover:text-(--text-primary) transition-all duration-300 cursor-default select-none"
                >
                  {logo}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
});

TrustStrip.displayName = "TrustStrip";
export default TrustStrip;
