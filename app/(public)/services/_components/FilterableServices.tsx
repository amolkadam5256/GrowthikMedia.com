"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Code, Target, PenTool, CheckCircle2 } from "lucide-react";

type Service = {
  name: string;
  category: "Development" | "Marketing" | "Branding";
  link: string;
};

const allServices: Service[] = [
  // --- Development ---
  { name: "Website Development", category: "Development", link: "/services/website-development/" },
  { name: "eCommerce Development", category: "Development", link: "/services/ecommerce-development/" },
  { name: "WordPress Development", category: "Development", link: "/services/wordpress-development/" },
  { name: "Mobile App Development", category: "Development", link: "/services/mobile-app-development/" },
  { name: "Software Development", category: "Development", link: "/services/software-development/" },
  { name: "Website Design", category: "Development", link: "/services/website-design/" },

  // --- Marketing ---
  { name: "SEO Company in Pune", category: "Marketing", link: "/services/seo/" },
  { name: "Google Ads Agency", category: "Marketing", link: "/services/ppc-google-ads/" },
  { name: "Local SEO Services", category: "Marketing", link: "/services/local-seo/" },
  { name: "Social Media Marketing", category: "Marketing", link: "/services/social-media-marketing/" },
  { name: "Content Marketing", category: "Marketing", link: "/services/content-marketing/" },

  // --- Branding ---
  { name: "Brand Identity Design", category: "Branding", link: "/services/brand-identity/" },
  { name: "Logo Design Agency", category: "Branding", link: "/services/logo-design/" },
  { name: "Branding Consulting", category: "Branding", link: "/services/branding-consulting/" },
  { name: "Brand Strategy", category: "Branding", link: "/services/brand-strategy/" },
  { name: "Brand Naming", category: "Branding", link: "/services/brand-name/" },
  { name: "Brand Marketing", category: "Branding", link: "/services/brand-marketing-communications/" },
  { name: "Brochure Design", category: "Branding", link: "/services/brochure-design/" },
  { name: "Business Card Design", category: "Branding", link: "/services/business-card-design/" },
  { name: "Letterhead Design", category: "Branding", link: "/services/letterhead-design/" },
];

export function FilterableServices() {
  const [activeFilter, setActiveFilter] = useState<
    "All" | "Development" | "Marketing" | "Branding"
  >("All");

  const filteredServices = allServices.filter(
    (s) => activeFilter === "All" || s.category === activeFilter,
  );

  return (
    <div className="mt-12">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        {["All", "Development", "Marketing", "Branding"].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter as any)}
            className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border ${
              activeFilter === filter
                ? "bg-(--color-primary) text-white border-(--color-primary) shadow-md shadow-(--color-primary)/20 scale-105"
                : "bg-(--surface) text-(--text-secondary) border-(--border) hover:border-(--color-primary) hover:text-(--color-primary) hover:scale-105"
            }`}
          >
            {filter === "Development" && (
              <Code className="w-4 h-4 inline-block mr-2" />
            )}
            {filter === "Marketing" && (
              <Target className="w-4 h-4 inline-block mr-2" />
            )}
            {filter === "Branding" && (
              <PenTool className="w-4 h-4 inline-block mr-2" />
            )}
            {filter}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredServices.map((service, idx) => (
          <Link
            href={service.link}
            key={idx}
            className="group flex items-center justify-between p-4 bg-(--surface) border border-(--border) rounded-xl hover:border-(--color-primary) hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-(--background) flex items-center justify-center border border-(--border) group-hover:bg-(--color-primary) group-hover:border-transparent transition-colors shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-(--text-secondary) group-hover:text-white transition-colors" />
              </div>
              <span className="font-bold text-sm text-(--text-primary) group-hover:text-(--color-primary) transition-colors">
                {service.name}
              </span>
            </div>
            <ArrowRight className="w-4 h-4 text-(--border) group-hover:text-(--color-primary) transform group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
