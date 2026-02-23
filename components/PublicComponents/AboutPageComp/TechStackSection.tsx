"use client";

import React from "react";
import { Layers, Zap, Search, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const TechStackSection = () => {
  const stack = [
    {
      category: "Frontend Engineering",
      tools: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      category: "AI & Automation",
      tools: [
        "OpenAI Custom Models",
        "Predictive Analytics",
        "Automated Workflows",
        "Chat Intelligence",
      ],
      icon: <Layers className="w-8 h-8" />,
    },
    {
      category: "Paid Ads Systems",
      tools: [
        "Google Ads API",
        "Meta Conversion API",
        "Predictive Analytics",
        "Server-Side Tracking",
      ],
      icon: <Zap className="w-8 h-8" />,
    },
    {
      category: "Semantic SEO",
      tools: [
        "Semantic Architecture",
        "Programmatic Local SEO",
        "Core Web Vitals Optimization",
        "Schema Engineering",
      ],
      icon: <Search className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-24 border-b border-(--border) bg-(--background) overflow-hidden relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-(--color-primary)/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-[2px] bg-(--color-primary)" />
            <span className="text-sm font-bold uppercase tracking-widest text-(--text-secondary)">
              The Engine Room
            </span>
            <div className="w-8 h-[2px] bg-(--color-primary)" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-4">
            Our{" "}
            <span className="text-(--color-primary)">
              Growth Infrastructure
            </span>
          </h2>
          <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto font-medium">
            We power predictable revenue systems using an advanced stack of web
            engineering, artificial intelligence, and deep analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-(--surface) border border-(--border) p-8 hover:border-(--color-primary) hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.1)] transition-all group rounded-xl"
            >
              <div className="w-16 h-16 bg-(--background) border border-(--border) flex items-center justify-center text-(--color-primary) group-hover:bg-(--color-primary) group-hover:text-white transition-colors mb-8 rounded-2xl shadow-sm">
                {group.icon}
              </div>
              <h3 className="text-xl font-black text-(--text-primary) uppercase mb-6 tracking-tight">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.tools.map((tool, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-(--color-primary) rounded-full shadow-[0_0_5px_var(--color-primary)]" />
                    <span className="text-sm font-bold text-(--text-secondary) group-hover:text-(--text-primary) transition-colors">
                      {tool}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
