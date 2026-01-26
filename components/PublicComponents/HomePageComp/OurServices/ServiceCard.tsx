"use client";

import { useState } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  number,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      data-aos="fade-up"
      data-aos-delay={delay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card */}
      <div
        className="relative h-full p-8 transition-all duration-500 overflow-hidden flex flex-col"
        style={{
          backgroundColor: "var(--color-black)",
          border: "1px solid var(--border)",
          transform: isHovered ? "translateY(-8px)" : "translateY(0)",
          boxShadow: isHovered
            ? "0 20px 40px rgba(217, 11, 28, 0.2)"
            : "0 4px 6px rgba(0, 0, 0, 0.1)",
          minHeight: "320px",
        }}
      >
        {/* Animated Background Gradient */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(135deg, var(--color-primary) 0%, transparent 100%)",
          }}
        />

        {/* Number Badge */}
        <div className="absolute top-6 right-6">
          <span
            className="text-6xl font-bold transition-all duration-500"
            style={{
              color: isHovered ? "var(--color-primary)" : "var(--border)",
              opacity: 0.3,
            }}
          >
            {number}
          </span>
        </div>

        {/* Icon Container with Animation */}
        <div className="relative mb-6 z-10">
          <div
            className="w-16 h-16 flex items-center justify-center transition-all duration-500"
            style={{
              backgroundColor: isHovered
                ? "var(--color-primary)"
                : "transparent",
              border: `2px solid ${
                isHovered ? "var(--color-primary)" : "var(--border)"
              }`,
              transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
            }}
          >
            <Icon
              className="w-8 h-8 transition-all duration-500"
              style={{
                color: isHovered
                  ? "var(--color-white)"
                  : "var(--color-primary)",
                strokeWidth: 2,
              }}
            />
          </div>

          {/* Animated Circle Effect */}
          <div
            className="absolute top-0 left-0 w-16 h-16 rounded-full transition-all duration-700"
            style={{
              border: "2px solid var(--color-primary)",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "scale(1.5)" : "scale(1)",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3
            className="text-xl font-bold mb-4 transition-colors duration-300"
            style={{
              color: isHovered ? "var(--color-white)" : "var(--color-white)",
            }}
          >
            {title}
          </h3>

          <p
            className="text-sm leading-relaxed transition-colors duration-300"
            style={{
              color: isHovered
                ? "var(--color-neutral)"
                : "var(--color-neutral)",
            }}
          >
            {description}
          </p>
        </div>

        {/* Bottom Left Yellow Accent - Appears on Hover */}
        <div
          className="absolute bottom-0 left-0 transition-all duration-500"
          style={{
            width: isHovered ? "70px" : "0px",
            height: isHovered ? "70px" : "0px",
            // backgroundColor: "#FFD700",
            backgroundColor: "var(--color-primary)",
            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Animated Border Effect */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-500"
          style={{
            opacity: isHovered ? 1 : 0,
            background:
              "linear-gradient(90deg, var(--color-primary) 0%, transparent 50%, var(--color-primary) 100%)",
            backgroundSize: "200% 2px",
            backgroundPosition: "0 0",
            backgroundRepeat: "no-repeat",
            animation: isHovered ? "borderSlide 2s linear infinite" : "none",
          }}
        />
      </div>

      {/* Floating Particles Effect */}
      {isHovered && (
        <>
          <div
            className="absolute top-4 right-4 w-2 h-2 rounded-full animate-ping"
            style={{
              backgroundColor: "var(--color-primary)",
              animationDuration: "2s",
            }}
          />
          <div
            className="absolute bottom-20 left-8 w-1.5 h-1.5 rounded-full animate-pulse"
            style={{
              backgroundColor: "#FFD700",
              animationDuration: "1.5s",
            }}
          />
        </>
      )}

      <style jsx>{`
        @keyframes borderSlide {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
