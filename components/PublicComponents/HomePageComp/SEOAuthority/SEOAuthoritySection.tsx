"use client";

import React from "react";
import { Search, MapPin, ShoppingCart, Video, BarChart2 } from "lucide-react";
import Link from "next/link";

const seoExpertise = [
  {
    icon: Search,
    title: "Technical SEO",
    desc: "Core web vitals, schema markupand advanced architecture.",
    link: "/seo-services-pune",
  },
  {
    icon: MapPin,
    title: "Local SEO Pune",
    desc: "Dominate local searches and map packs in the Pune region.",
    link: "/seo-marketing-pune",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce SEO",
    desc: "Scale product visibility and increase Shopify/Woo sales.",
    link: "/performance-marketing-pune",
  },
  {
    icon: Video,
    title: "Video SEO",
    desc: "Rank your YouTube content and video snippets on Google.",
    link: "/video-production-pune",
  },
  {
    icon: BarChart2,
    title: "CRO SEO",
    desc: "Conversion Rate Optimization to turn traffic into revenue.",
    link: "/google-ads-agency-pune",
  },
];

const SEOAuthoritySection = () => {
  return (
    <section className="py-12 md:py-16 bg-(--surface) border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-black text-(--text-primary) uppercase tracking-tighter mb-6">
              SEO Services in Pune -{" "}
              <span className="text-(--color-primary)">Our Expertise </span>
              Includes:
            </h2>
            <p className="text-(--text-secondary) leading-relaxed">
              We don't just find keywords; we find customers. Our
              performance-driven SEO approach is built on technical precision
              and local authority.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoExpertise.map((item, idx) => (
              <Link
                href={item.link}
                key={idx}
                className="p-6 border border-(--border) hover:border-(--color-primary)/30 transition-all group block decoration-none"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <item.icon className="w-6 h-6 text-(--color-primary) mb-4" />
                <h3 className="text-lg font-bold text-(--text-primary) uppercase mb-2 group-hover:text-(--color-primary) transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-(--text-secondary) leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOAuthoritySection;
