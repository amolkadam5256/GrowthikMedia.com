"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket, Target, Lightbulb, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { images } from "@/app/assets/images/images";

const WhoWeAreSection = () => {
  return (
    <section className="py-24 overflow-hidden relative border-b border-(--border) bg-(--background)">
      {/* Background Abstract Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-(--color-primary)/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Content & Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-(--surface) border border-(--border) rounded-lg shadow-sm">
                <Rocket className="w-5 h-5 text-(--color-primary)" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-(--color-primary)">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-8 leading-tight">
              We Don’t Just Market. <br />
              <span className="text-(--color-primary)">
                We Engineer Growth.
              </span>
            </h2>

            <div className="space-y-6 text-(--text-secondary) text-lg leading-relaxed">
              <p>
                Growthik Media was built to bridge the gap between complex
                <strong className="text-(--text-primary)">
                  {" "}
                  digital technology{" "}
                </strong>
                and real{" "}
                <strong className="text-(--text-primary)"> business ROI</strong>
                . Most agencies focus on vanity metrics; we obsess over your
                bottom line.
              </p>

              <p className="text-base opacity-80 border-l-4 border-(--color-primary)/20 pl-4">
                We combine engineering precision with creative storytelling to
                build scalable growth engines. From startups to enterprise
                brands, we specialize in
                <Link
                  href="/services/seo"
                  className="text-(--color-primary) font-bold hover:underline mx-1"
                >
                  SEO
                </Link>
                ,
                <Link
                  href="/services/performance"
                  className="text-(--color-primary) font-bold hover:underline mx-1"
                >
                  Performance Marketing
                </Link>
                , and{" "}
                <Link
                  href="/services/development"
                  className="text-(--color-primary) font-bold hover:underline mx-1"
                >
                  Web Architecture
                </Link>
                .
              </p>
            </div>

            {/* Stats / Proof */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-(--border)">
              {[
                { label: "Established", val: "2019" },
                { label: "Growth Ratio", val: "300%" },
                { label: "Retention", val: "95%" },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-black text-(--text-primary) mb-1">
                    {stat.val}
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-(--text-secondary)">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Visual Cards Grid */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-(--surface) border border-(--border) p-8 rounded-2xl shadow-lg hover:border-(--color-primary) transition-all group"
              >
                <div className="w-12 h-12 bg-(--color-primary)/10 rounded-xl flex items-center justify-center text-(--color-primary) mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-(--text-primary) uppercase mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-(--text-secondary) leading-relaxed">
                  To help Pune and global businesses dominate search engines
                  through AI-powered strategies and conversion-focused digital
                  engineering.
                </p>
              </motion.div>

              {/* Vision Card - Offset */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-(--surface) border border-(--border) p-8 rounded-2xl shadow-lg hover:border-(--color-primary) transition-all group md:mt-12"
              >
                <div className="w-12 h-12 bg-(--color-primary)/10 rounded-xl flex items-center justify-center text-(--color-primary) mb-6 group-hover:scale-110 transition-transform">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-(--text-primary) uppercase mb-3">
                  Our Vision
                </h3>
                <p className="text-sm text-(--text-secondary) leading-relaxed">
                  To become India’s most trusted ROI-driven digital growth
                  partner, replacing guesswork with predictable revenue systems.
                </p>
              </motion.div>
            </div>

            {/* Decorative Elements around grid */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-stripes opacity-10 rounded-full" />
            <div className="absolute bottom-10 -left-10 w-24 h-24 border-4 border-(--color-primary)/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
