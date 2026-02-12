"use client";

import React from "react";
import PortfolioCard from "./PortfolioCard";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { images } from "@/app/assets/images/images";

const PROJECTS = [
  {
    category: "SEO & Content",
    title: "SEO Growth for Real Estate Client",
    image: images.portfolio.seoRealEstate,
    link: "/portfolio/seo-growth-real-estate",
  },
  {
    category: "Social Media",
    title: "Social Media Campaign for E-commerce Brand",
    image: images.portfolio.socialMedia,
    link: "/portfolio/social-media-ecommerce",
  },
  {
    category: "Video Production",
    title: "Video Marketing for Startup",
    image: images.portfolio.videoMarketing,
    link: "/portfolio/video-marketing-startup",
  },
  {
    category: "Web Development",
    title: "Website Redesign for Local Business",
    image: images.portfolio.websiteRedesign,
    link: "/portfolio/website-redesign-local",
  },
  {
    category: "Branding",
    title: "Branding for Luxury App",
    image: images.portfolio.luxuryBranding,
    link: "/portfolio/luxury-branding-app",
  },
  {
    category: "Content Strategy",
    title: "Content Strategy for Education",
    image: images.portfolio.educationContent,
    link: "/portfolio/education-content-strategy",
  },
];

const PortfolioHighlightsSection = React.memo(() => {
  return (
    <section className="py-24 md:py-32 px-4 bg-(--background) relative transition-colors duration-500 overflow-hidden">
      {/* Background Patterns - Adjusted for Theme Consistency */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft Topic Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6" data-aos="fade-right">
              <span className="w-16 h-[2px] bg-(--color-primary)" />
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-sm">
                Portfolio Highlights
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) leading-[1.1] uppercase tracking-tighter"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Recent <br /> <span className="text-(--color-primary)">Work</span>
            </h2>
          </div>

          <div
            className="flex flex-col items-start lg:items-end gap-6"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <p className="text-lg md:text-xl text-(--text-secondary) lg:text-right max-w-sm leading-relaxed font-medium">
              We create digital experiences that set new standards. Dive into
              our latest projects.
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-10">
          {PROJECTS.map((project, index) => (
            <PortfolioCard
              key={project.title}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>

        {/* BIG CENTERED "VIEW ALL" BUTTON */}
        <div className="mt-32 flex justify-center" data-aos="fade-up">
          <Link
            href="/portfolio"
            className="group relative inline-flex items-center gap-6 px-12 py-5 border-2 border-primary transition-all duration-500 hover:bg-(--color-primary) hover:scale-105 shadow-xl hover:shadow-primary/20 hover:border-(--color-primary)"
          >
            <span className="relative z-10 text-primary group-hover:text-white font-black uppercase tracking-[0.3em] text-sm transition-colors duration-300">
              View All Projects
            </span>

            <div className="relative z-10 w-12 h-12 border-2 border-primary group-hover:border-white bg-transparent group-hover:bg-(--color-primary)/20 flex items-center justify-center transition-all duration-300">
              <MoveRight className="w-6 h-6 text-primary group-hover:text-white group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        </div>

        {/* Bottom Banner Stats */}
        <div className="mt-32 pt-20 border-t border-(--border) flex flex-wrap justify-between items-center gap-12">
          {[
            { val: "500+", label: "Projects Done" },
            { val: "50+", label: "Happy Clients" },
            { val: "98%", label: "Success Rate" },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex flex-col"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <span className="text-5xl md:text-6xl font-black text-(--text-primary)">
                {stat.val}
              </span>
              <span className="w-4 h-px bg-primary" /> {stat.label}
            </div>
          ))}
          <div className="max-w-sm lg:text-right" data-aos="fade-left">
            <p className="text-(--text-secondary) italic font-medium">
              "Pushing the boundaries of what's possible in the digital space,
              one project at a time."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

PortfolioHighlightsSection.displayName = "PortfolioHighlightsSection";
export default PortfolioHighlightsSection;
