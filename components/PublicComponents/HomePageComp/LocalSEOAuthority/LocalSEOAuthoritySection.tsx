"use client";

import React from "react";
import { MapPin, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

const LocalSEOAuthoritySection = () => {
  return (
    <section className="py-12 md:py-16 bg-(--surface) border-b border-(--border) relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-(--color-primary)/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-(--color-primary)/5 rounded-full blur-[150px] translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Local Expertise
            </span>
            <span className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-[1.1]">
            Why Pune Businesses Choose{" "}
            <span className="text-(--color-primary)">Growthik Media</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Deep Local Market Knowledge */}
          <div
            className="relative bg-(--background) border-2 border-(--border) p-8 hover:border-(--color-primary) transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            <div className="w-14 h-14 bg-(--color-primary)/10 flex items-center justify-center mb-6 group-hover:bg-(--color-primary) transition-all duration-500">
              <MapPin className="w-7 h-7 text-(--color-primary) group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4 group-hover:text-(--color-primary) transition-colors">
              Deep Local Market Knowledge
            </h3>
            <p className="text-(--text-secondary) leading-relaxed">
               We understand Pune's unique business landscape, from Hinjewadi's
              tech corridor to Koregaon Park's retail hubs.
            </p>
          </div>

          {/* Pune-Centric SEO Strategies */}
          <div
            className="relative bg-(--background) border-2 border-(--border) p-8 hover:border-(--color-primary) transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-14 h-14 bg-(--color-primary)/10 flex items-center justify-center mb-6 group-hover:bg-(--color-primary) transition-all duration-500">
              <TrendingUp className="w-7 h-7 text-(--color-primary) group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4 group-hover:text-(--color-primary) transition-colors">
              Pune-Centric SEO Strategies
            </h3>
            <p className="text-(--text-secondary) leading-relaxed">
               Our{" "}
              <Link
                href="/services/local-seo"
                className="text-(--color-primary) font-bold hover:underline"
              >
                Local SEO services in Pune
              </Link>{" "}
              help you rank higher on Google Maps, ensuring visibility when Pune
              customers search.
            </p>
          </div>

          {/* On-Ground Support */}
          <div
            className="relative bg-(--background) border-2 border-(--border) p-8 hover:border-(--color-primary) transition-all duration-500 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-14 h-14 bg-(--color-primary)/10 flex items-center justify-center mb-6 group-hover:bg-(--color-primary) transition-all duration-500">
              <Users className="w-7 h-7 text-(--color-primary) group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4 group-hover:text-(--color-primary) transition-colors">
              On-Ground Support & Strategy Sessions
            </h3>
            <p className="text-(--text-secondary) leading-relaxed">
              Face-to-face strategy sessions, real-time market deep
              understanding of regional consumer behavior and insights.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="max-w-4xl mx-auto bg-(--background) border-2 border-(--border) p-8 md:p-12 hover:border-(--color-primary) transition-all duration-500 hover:shadow-2xl hover:shadow-(--color-primary)/10"
          data-aos="fade-up"
        >
          <p className="text-lg md:text-xl text-(--text-primary) leading-relaxed mb-6">
            Growthik Media is a digital marketing agency based in Pune, serving
            startups, SMEs and growth-focused businesses across Pune and PCMC.
            Our team works with businesses in areas including Baner, Hinjewadi,
            Wakad, Kharadi, Viman Nagar, Aundh, Kothrud and Hadapsar, while also
            supporting clients across India.
          </p>

          <div className="w-20 h-1 bg-(--color-primary) mb-6" />

          <p className="text-base md:text-lg text-(--text-secondary) leading-relaxed mb-6">
            We have helped{" "}
            <span className="text-(--color-primary) font-bold">
              10+ clients
            </span>{" "}
            improve their digital presence. Face-to-face strategy sessions and
            local market context are available when they help the work — the
            office address is listed in the footer and on Google Business Profile.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary)">
              Serving Pune
            </span>
            <span className="px-4 py-2 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary)">
              Pimpri-Chinchwad
            </span>
            <span className="px-4 py-2 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary)">
              Across Maharashtra
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOAuthoritySection;
