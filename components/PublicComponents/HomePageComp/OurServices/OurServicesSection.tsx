"use client";

import React from "react";
import Link from "next/link";
import ServiceButton from "./ServiceButton";
import { trackEvent } from "@/lib/analytics";
import {
  Search,
  Target,
  Facebook,
  BarChart,
  Code,
  Zap,
} from "lucide-react";

const CORE_SERVICES = [
  {
    title: "SEO Services in Pune",
    description: "Technical, local and content SEO that builds organic demand over time.",
    href: "/services/seo/",
    icon: Search,
  },
  {
    title: "Google Ads Management",
    description: "High-intent paid search campaigns measured on leads and cost per result.",
    href: "/services/ppc-google-ads/",
    icon: Target,
  },
  {
    title: "Meta Ads",
    description: "Facebook and Instagram campaigns for reach, remarketing and conversions.",
    href: "/services/meta-ads/",
    icon: Facebook,
  },
  {
    title: "Performance Marketing",
    description: "CPA, ROAS and funnel tracking across paid channels.",
    href: "/services/performance-marketing/",
    icon: BarChart,
  },
  {
    title: "Website Development",
    description: "Next.js, React and WordPress sites built to load fast and convert.",
    href: "/services/website-development/",
    icon: Code,
  },
  {
    title: "B2B Lead Generation",
    description: "Search, LinkedIn and conversion paths for qualified enquiries.",
    href: "/services/lead-generation/",
    icon: Zap,
  },
];

const OurServicesSection = React.memo(() => {
  return (
    <section
      className="relative py-12 md:py-24 px-4 overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="text-center mb-20">
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
              What We Do Best
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
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.1]"
            style={{ color: "var(--text-primary)" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Digital Marketing & Web Services <br /> <span style={{ color: "var(--color-primary)" }}>in Pune</span>
          </h2>

          <div
            className="w-24 h-1.5 mx-auto mb-8 relative overflow-hidden"
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
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium"
            style={{ color: "var(--text-secondary)" }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Six core growth services for Pune businesses. Everything else lives on the full services directory.
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {CORE_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="block p-8 border-2 border-(--border) bg-(--surface) hover:border-(--color-primary) transition-all group"
              >
                <Icon className="w-8 h-8 text-(--color-primary) mb-5" />
                <h3 className="text-xl font-black text-(--text-primary) mb-3 group-hover:text-(--color-primary) transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-(--text-secondary) leading-relaxed">
                  {service.description}
                </p>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="text-center mt-16"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/services">
              <ServiceButton text="Explore All Services" onClick={() => trackEvent("ViewContent", { content_name: "All Services" })} />
            </Link>
            <Link href="/contact">
              <ServiceButton text="Get Started Today" onClick={() => trackEvent("Lead", { content_name: "Services Section CTA" })} />
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
              { number: "50+", label: "Projects Completed" },
              { number: "10+", label: "Happy Clients" },
              { number: "5+", label: "Team Members" },
              { number: "2019", label: "Established" },
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
