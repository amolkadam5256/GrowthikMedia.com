"use client";

import { useState } from "react";
import { Video, Megaphone, TrendingUp, Palette } from "lucide-react";
import ServiceCard from "./ServiceCard";
import ServiceButton from "./ServiceButton";
import Link from "next/link";

const services = [
  {
    icon: Video,
    number: "01",
    title: "Video Production",
    description:
      "Professional video production services including corporate videos, promotional content, and social media videos that captivate your audience and tell your brand story.",
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Digital Marketing",
    description:
      "Comprehensive digital marketing strategies that drive traffic, increase engagement, and boost your online presence across all platforms with measurable results.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "SEO Optimization",
    description:
      "Advanced SEO techniques to improve your search rankings, increase organic traffic, and dominate your industry online with data-driven strategies.",
  },
  {
    icon: Palette,
    number: "04",
    title: "Content Creation",
    description:
      "Engaging and creative content that tells your brand story, resonates with your audience, and drives meaningful conversions across all digital channels.",
  },
];

export default function OurServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Animated Top Line */}
          <div
            className="flex items-center justify-center gap-4 mb-6"
            data-aos="fade-down"
          >
            <div
              className="h-px w-16 transition-all duration-500"
              style={{
                backgroundColor: "var(--color-primary)",
              }}
            />
            <span
              className="text-sm font-semibold tracking-widest uppercase"
              style={{
                color: "var(--color-primary)",
              }}
            >
              What We Offer
            </span>
            <div
              className="h-px w-16 transition-all duration-500"
              style={{
                backgroundColor: "var(--color-primary)",
              }}
            />
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Services
          </h2>

          {/* Animated Underline */}
          <div
            className="w-24 h-1 mx-auto mb-8 relative overflow-hidden"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div
              className="absolute inset-0 animate-pulse"
              style={{
                backgroundColor: "var(--color-primary)",
                width: "100%",
              }}
            />
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Empowering your brand with innovative solutions that drive growth,
            engagement, and success in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="h-full"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <ServiceCard
                icon={service.icon}
                number={service.number}
                title={service.title}
                description={service.description}
                delay={index * 100}
              />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/services">
              <ServiceButton text="Explore All Services" />
            </Link>
            <Link href="/contact">
              <ServiceButton text="Get Started Today" />
            </Link>
          </div>

          {/* Stats Section */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t"
            style={{
              borderColor: "var(--border)",
            }}
          >
            {[
              { number: "20+", label: "Projects Completed" },
              { number: "50+", label: "Happy Clients" },
              { number: "10+", label: "Team Members" },
              { number: "5+", label: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer"
                data-aos="zoom-in"
                data-aos-delay={500 + index * 100}
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-2 transition-all duration-300 group-hover:scale-110"
                  style={{
                    color: "var(--color-primary)",
                  }}
                >
                  {stat.number}
                </div>
                <div
                  className="text-sm md:text-base font-medium"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 opacity-10 pointer-events-none">
        <div
          className="w-full h-full border-4 animate-spin"
          style={{
            borderColor: "var(--color-primary)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animationDuration: "10s",
          }}
        />
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10 pointer-events-none">
        <div
          className="w-full h-full border-4 animate-spin"
          style={{
            borderColor: "#FFD700",
            borderRadius: "70% 30% 30% 70% / 70% 70% 30% 30%",
            animationDuration: "8s",
            animationDirection: "reverse",
          }}
        />
      </div>
    </section>
  );
}
