"use client";

import React from "react";
import { MapPin, TrendingUp, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const PuneMarketInsightSection = () => {
  return (
    <section className="py-12 md:py-16 bg-(--background) border-b border-(--border) relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Content - Takes up 7 columns */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[2px] bg-(--color-primary)" />
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
                Pune Market Insights
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-[1.1]">
              Why Pune Brands Need a <br />
              <span className="text-(--color-primary)">
                Digital-First Strategy
              </span>{" "}
              in 2026
            </h2>

            <div className="prose prose-lg text-(--text-secondary) mb-8">
              <p className="leading-relaxed mb-4">
                Pune is evolving from an IT hub to a global startup capital.
                With over <strong>45% of local consumer queries</strong> now
                containing &quot;near me&quot; or &quot;best in Pune,&quot;
                traditional marketing is losing ground.
              </p>
              <p className="leading-relaxed">
                Whether you are a manufacturing unit in PCMC or a D2C brand in
                Koregaon Park, your customers are searching online{" "}
                <em>right now</em>. Growthik Media bridges the gap between your
                local dominance and digital visibility, ensuring you capture
                high-intent traffic before your competitors do.
              </p>
            </div>

            <Link
              href="/seo-services-pune"
              className="inline-flex items-center gap-2 bg-(--color-primary) text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-opacity-90 transition-all group"
            >
              Dominate the Pune Market
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats/Visuals - Takes up 5 columns */}
          <div
            className="lg:col-span-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="bg-(--surface) p-8 border border-(--border) relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-(--color-primary)/10 rounded-full blur-2xl pointer-events-none" />

              <div className="space-y-8">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-(--color-primary)/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-(--text-primary) mb-1">
                      Local Intent
                    </h3>
                    <p className="text-sm text-(--text-secondary)">
                      Surge in &quot;Near Me&quot; searches across{" "}
                      <Link
                        href="/seo-marketing-pune"
                        className="text-(--color-primary) hover:underline font-semibold"
                      >
                        Pune & PCMC
                      </Link>{" "}
                      regions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-(--color-primary)/20 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-(--text-primary) mb-1">
                      Digital Adoption
                    </h3>
                    <p className="text-sm text-(--text-secondary)">
                      Punekars spend 4+ hours daily on digital platforms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-(--color-primary)/20 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-(--text-primary) mb-1">
                      Competition
                    </h3>
                    <p className="text-sm text-(--text-secondary)">
                      70% of Pune businesses are now investing in{" "}
                      <Link
                        href="/services/seo"
                        className="text-(--color-primary) hover:underline font-semibold"
                      >
                        SEO
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PuneMarketInsightSection;
