"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { StaticImageData } from "next/image";

interface PortfolioCardProps {
  category: string;
  title: string;
  image: string | StaticImageData;
  link: string;
  delay?: number;
}

export default function PortfolioCard({
  category,
  title,
  image,
  link,
  delay = 0,
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group h-[520px] w-full"
      data-aos="fade-up"
      data-aos-delay={delay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Decorative L-shape (Solid Red) */}
      <div
        className="absolute -bottom-2 -left-2 w-32 h-32 z-0"
        style={{
          borderLeft: "20px solid var(--color-primary)",
          borderBottom: "20px solid var(--color-primary)",
          opacity: 1,
        }}
      />

      {/* Main Card Container */}
      <div
        className="relative h-full w-full bg-(--surface) border border-primary overflow-hidden z-10 flex flex-col transition-all duration-500"
        style={{
          boxShadow: isHovered ? "0 30px 60px rgba(0,0,0,0.15)" : "none",
          transform: isHovered ? "translateY(-8px)" : "none",
        }}
      >
        {/* Top Right Rounded Triangle Accent - Animated on Hover */}
        <div
          className="absolute top-0 right-0 w-24 h-24 z-20 pointer-events-none overflow-hidden transition-all duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered
              ? "translate(0, 0) scale(1)"
              : "translate(20px, -20px) scale(0.8)",
          }}
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full text-(--color-primary) fill-current drop-shadow-lg"
            preserveAspectRatio="none"
          >
            <path d="M100 0 H40 C25 0 25 10 35 20 L80 65 C90 75 100 75 100 60 V0 Z" />
          </svg>
        </div>

        {/* Content Top */}
        <div className="p-8 pb-4 relative z-30">
          <div className="mb-2">
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">
              {category}
            </span>
          </div>
          <h3 className="text-3xl font-black text-primary leading-tight tracking-tight">
            {title}
          </h3>
        </div>

        {/* Image Area */}
        <div className="relative flex-grow mx-8 overflow-hidden bg-(--surface-secondary) group-hover:shadow-lg transition-all duration-700">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>

        {/* Button Area - FIXED HOVER STATE */}
        <div className="p-8">
          <Link
            href={link}
            className="group/btn relative inline-flex items-center gap-4 px-10 py-3 border border-primary  transition-all duration-300 bg-transparent hover:bg-(--color-primary) shadow-sm hover:shadow-primary/20 hover:border-(--color-primary)"
          >
            {/* Text stays consistent and visible */}
            <span className="text-primary font-bold group-hover/btn:text-white transition-colors duration-300">
              Explore <span className="font-extrabold">More</span>
            </span>

            {/* Arrow with fixed hover color */}
            <span className="text-primary group-hover/btn:text-white transition-colors duration-300 flex items-center">
              <svg
                width="34"
                height="14"
                viewBox="0 0 34 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform duration-300 group-hover/btn:translate-x-2"
              >
                <path
                  d="M1 7H32M32 7L26 1M32 7L26 13"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
