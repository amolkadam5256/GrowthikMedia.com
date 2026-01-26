"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface ServiceButtonProps {
  text: string;
  onClick?: () => void;
}

export default function ServiceButton({ text, onClick }: ServiceButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="relative group overflow-hidden px-8 py-4 font-semibold transition-all duration-500"
      style={{
        backgroundColor: isHovered
          ? "var(--color-primary)"
          : "var(--color-black)",
        color: "var(--color-white)",
        border: `2px solid ${
          isHovered ? "var(--color-primary)" : "var(--color-white)"
        }`,
        transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 10px 30px rgba(217, 11, 28, 0.3)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Animated Background Slide */}
      <div
        className="absolute inset-0 transition-transform duration-500"
        style={{
          backgroundColor: "var(--color-primary)",
          transform: isHovered ? "translateX(0)" : "translateX(-100%)",
        }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3">
        <span className="text-base">{text}</span>
        <ArrowRight
          className="w-5 h-5 transition-transform duration-500"
          style={{
            transform: isHovered ? "translateX(4px)" : "translateX(0)",
          }}
        />
      </span>

      {/* Shine Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)",
          transform: "translateX(-100%)",
          animation: isHovered ? "shine 1.5s infinite" : "none",
        }}
      />

      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </button>
  );
}
