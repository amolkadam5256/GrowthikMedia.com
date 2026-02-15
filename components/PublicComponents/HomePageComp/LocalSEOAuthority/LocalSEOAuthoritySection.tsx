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
              We understand Pune's unique business ecosystem, from Hinjewadi's
              tech corridor to Koregaon Park's retail landscape.
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
                href="/seo-marketing-pune"
                className="text-(--color-primary) font-bold hover:underline"
              >
                local SEO strategies
              </Link>{" "}
              dominate Google Map Pack rankings, ensuring visibility when Pune
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
              Face-to-face strategy sessions, real-time market insightsand deep
              understanding of regional consumer behavior.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div
          className="max-w-4xl mx-auto bg-(--background) border-2 border-(--border) p-8 md:p-12 hover:border-(--color-primary) transition-all duration-500 hover:shadow-2xl hover:shadow-(--color-primary)/10"
          data-aos="fade-up"
        >
          <p className="text-lg md:text-xl text-(--text-primary) leading-relaxed mb-6">
            Choosing a Pune-based{" "}
            <Link
              href="/digital-marketing-agency-pune"
              className="text-(--color-primary) font-bold hover:underline"
            >
              digital marketing company
            </Link>{" "}
            isn't just about proximity-it's about local expertise that drives
            results. Unlike remote agencies, we offer face-to-face strategy
            sessions, real-time market insightsand deep understanding of
            regional consumer behavior.
          </p>

          <div className="w-20 h-1 bg-(--color-primary) mb-6" />

          <p className="text-base md:text-lg text-(--text-secondary) leading-relaxed mb-6">
            We've helped{" "}
            <span className="text-(--color-primary) font-bold">
              50+ Pune businesses
            </span>{" "}
            scale from local players to market leaders. Our team lives, works,
            and breathes Pune's digital landscape-giving you the competitive
            edge that off-shore agencies simply cannot match.
          </p>

          {/* Location Badges */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-4 py-2 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary) hover:border-(--color-primary) transition-colors">
              Serving Pune
            </span>
            <span className="px-4 py-2 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary) hover:border-(--color-primary) transition-colors">
              Pimpri-Chinchwad
            </span>
            <span className="px-4 py-2 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary) hover:border-(--color-primary) transition-colors">
              Wakad
            </span>
            <span className="px-4 py-2 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary) hover:border-(--color-primary) transition-colors">
              Baner
            </span>
            <span className="px-4 py-2 bg-(--surface) border border-(--border) rounded-full text-xs font-bold text-(--text-secondary) hover:border-(--color-primary) transition-colors">
              Across Maharashtra
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalSEOAuthoritySection;
