"use client";

import React from "react";
import Link from "next/link";
import { Download, FileText, BarChart3, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Counter from "@/components/ui/Counter";

const magnets = [
  {
    id: "seo-checklist",
    icon: FileText,
    title: "Free SEO Checklist",
    description: (
      <>
        The exact <Counter value={45} suffix="-point checklist" /> we use to
        rank our clients #1 on Google Pune. Complete technical and on-page
        guide.
      </>
    ),
    cta: "Download PDF",
    color: "from-(--color-primary)/10 to-(--color-primary-light)/5",
    iconColor: "text-(--color-primary)",
  },
  {
    id: "ads-audit",
    icon: Download,
    title: "Free Ads Audit PDF",
    description:
      "Identify why your Google or Meta Ads aren't converting. Get actionable fixes for your local Pune business.",
    cta: "Get Free Audit",
    color: "from-(--color-primary)/10 to-(--color-primary-light)/5",
    iconColor: "text-(--color-primary)",
  },
  {
    id: "website-score",
    icon: BarChart3,
    title: "Instant Website Score",
    description: (
      <>
        Get a performance and SEO score for your website in under{" "}
        <Counter value={60} suffix=" seconds" />. Know exactly where you stand.
      </>
    ),
    cta: "Check Score",
    color: "from-(--color-primary)/10 to-(--color-primary-light)/5",
    iconColor: "text-(--color-primary)",
  },
];

const LeadMagnetSection = () => {
  return (
    <section className="py-16 md:py-20 bg-(--surface) relative overflow-hidden border-y border-(--border)">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-linear-to-l from-(--color-primary)/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6 px-4 py-2">
            <div className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Direct Value
            </span>
            <div className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-none">
            Grab Our <br />
            <span className="text-(--color-primary)">Growth Resources</span>
          </h2>
          <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto leading-relaxed">
            Stop guessing and start growing. Access the internal toolkits and
            checklists our team uses to dominate search results in Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {magnets.map((magnet, idx) => (
            <motion.div
              key={magnet.id}
              whileHover={{ y: -10 }}
              className={`bg-(--background) p-8 border-2 border-(--border) hover:border-(--color-primary) transition-all duration-300 group shadow-lg relative flex flex-col h-full overflow-hidden`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Card Accent Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${magnet.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-linear-to-br from-(--color-primary) to-(--color-primary-light) flex items-center justify-center mb-8 shadow-lg shadow-(--color-primary)/20 group-hover:scale-110 transition-transform duration-500 text-white">
                  <magnet.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4 tracking-tight leading-tight">
                  {magnet.title}
                </h3>

                <p className="text-(--text-secondary) mb-8 grow leading-relaxed font-medium">
                  {magnet.description}
                </p>

                <Link href="/contact" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs py-5 border-2 border-(--color-primary)! text-(--color-primary)! hover:bg-(--color-primary)! hover:text-white! transition-all duration-300 rounded-full!"
                  >
                    {magnet.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;
