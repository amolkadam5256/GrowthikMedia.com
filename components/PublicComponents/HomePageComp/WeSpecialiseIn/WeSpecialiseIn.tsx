"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Video,
  Megaphone,
  TrendingUp,
  Palette,
  Share2,
  BarChart3,
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Video,
    title: "Video Production",
    description:
      "Professional video production services including corporate videos, promotional content, and social media videos that captivate your audience.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies that drive traffic, increase engagement, and boost your online presence across all platforms.",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Advanced SEO techniques to improve your search rankings, increase organic traffic, and dominate your industry online.",
  },
  {
    icon: Palette,
    title: "Content Creation",
    description:
      "Engaging and creative content that tells your brand story, resonates with your audience, and drives meaningful conversions.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Strategic social media campaigns that build communities, increase brand awareness, and generate leads across all major platforms.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Data-driven insights and comprehensive reporting to track performance, measure ROI, and optimize your marketing strategies.",
  },
];

export default function WeSpecialiseIn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
        setIsAnimating(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentService = services[currentIndex];
  const CurrentIcon = currentService.icon;

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Auto-scrolling Carousel */}
          <div
            className="relative"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <article
              className={`p-12 transition-all duration-500 ${
                isAnimating
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
              style={{
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {/* Icon */}
              <div className="mb-8">
                <div
                  className="w-20 h-20 flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--color-primary)",
                  }}
                >
                  <CurrentIcon
                    className="w-10 h-10 text-white"
                    strokeWidth={2}
                  />
                </div>
              </div>

              {/* Content */}
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {currentService.title}
              </h3>

              <p
                className="text-base leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
              >
                {currentService.description}
              </p>

              {/* Progress Indicators */}
              <div className="flex gap-2">
                {services.map((_, index) => (
                  <div
                    key={index}
                    className="h-1 flex-1 rounded-full overflow-hidden"
                    style={{
                      backgroundColor: "var(--border)",
                    }}
                  >
                    <div
                      className="h-full transition-all duration-300"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        width: index === currentIndex ? "100%" : "0%",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </article>

            {/* Card Counter */}
            <div
              className="absolute bottom-0 right-8 px-6 py-3 font-semibold"
              style={{
                color: "var(--color-primary)",
              }}
            >
              {currentIndex + 1} / {services.length}
            </div>

            {/* CTA Button */}
            <div className="mt-12" data-aos="zoom-in" data-aos-delay="200">
              <Link href="/contact">
                <button
                  className="w-1/2 px-6 py-3 font-semibold text-white transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-primary)",
                  }}
                >
                  Let&apos;s Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - We Specialise Content */}
          <div
            className="space-y-8"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "var(--text-primary)" }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                We Specialise In
              </h2>
              <div
                className="w-24 h-1 mb-8"
                style={{ backgroundColor: "var(--color-primary)" }}
                data-aos="fade-right"
                data-aos-delay="200"
              ></div>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--text-secondary)" }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Transforming your ideas into impactful digital experiences with
                our comprehensive suite of creative and strategic services.
              </p>
            </div>

            {/* Services List */}
            <ul
              className="space-y-4 list-none p-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <li
                    key={index}
                    className={`flex items-center gap-4 p-1 transition-all duration-500 ${
                      index === currentIndex ? "scale-105" : "scale-100"
                    }`}
                    style={{
                      backgroundColor:
                        index === currentIndex
                          ? "var(--surface)"
                          : "transparent",
                      border:
                        index === currentIndex
                          ? "1px solid var(--border)"
                          : "1px solid transparent",
                    }}
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor:
                          index === currentIndex
                            ? "var(--color-primary)"
                            : "var(--surface)",
                        border:
                          index === currentIndex
                            ? "none"
                            : "1px solid var(--border)",
                      }}
                    >
                      <Icon
                        className="w-6 h-6"
                        style={{
                          color:
                            index === currentIndex
                              ? "white"
                              : "var(--text-secondary)",
                        }}
                        strokeWidth={2}
                      />
                    </div>
                    <span
                      className="text-base font-semibold"
                      style={{
                        color:
                          index === currentIndex
                            ? "var(--text-primary)"
                            : "var(--text-secondary)",
                      }}
                    >
                      {service.title}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
