"use client";

import React from "react";
import { Video, Megaphone, TrendingUp, Palette } from "lucide-react";
import ServiceCard from "./ServiceCard";
import ServiceButton from "./ServiceButton";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    number: "01",
    title: "Website & Landing Pages",
    description:
      "High-performance websites and landing pages designed to convert visitors into loyal customers with seamless user experiences.",
  },
  {
    icon: Megaphone,
    number: "02",
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that amplify your brand presence, engage your audience, and drive measurable growth.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "SEO & Local SEO",
    description:
      "Dominate search results with advanced SEO and local optimization techniques that bring high-intent traffic to your business.",
  },
  {
    icon: Video,
    number: "04",
    title: "Google & Meta Ads",
    description:
      "Precision-targeted ad campaigns on Google and Meta platforms designed to lower CPA and maximize your Return on Ad Spend (ROAS).",
  },
];

const OurServicesSection = React.memo(() => {
  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="text-center mb-16">
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
              className="text-sm font-bold uppercase tracking-[0.3em]"
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
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1]"
            style={{ color: "var(--text-primary)" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Our Services
          </h2>

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

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Empowering your brand with innovative solutions that drive growth,
            engagement, and success in the digital landscape.
          </p>
        </header>

        {/* Services Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 list-none p-0">
          {services.map((service, index) => (
            <li key={index} className="h-full">
              <article className="h-full">
                <ServiceCard
                  icon={service.icon}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  delay={index * 100}
                />
              </article>
            </li>
          ))}
        </ul>

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
          <ul
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t list-none p-0"
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
              <li
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
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 opacity-10 pointer-events-none">
        <div
          className="w-full h-full border-4 animate-spin will-change-transform"
          style={{
            borderColor: "var(--color-primary)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            animationDuration: "10s",
          }}
        />
      </div>
      <div className="absolute bottom-10 left-10 w-16 h-16 opacity-10 pointer-events-none">
        <div
          className="w-full h-full border-4 animate-spin will-change-transform"
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
});

OurServicesSection.displayName = "OurServicesSection";
export default OurServicesSection;
