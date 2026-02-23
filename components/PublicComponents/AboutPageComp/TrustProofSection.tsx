"use client";

import React from "react";
import { motion } from "framer-motion";

const TrustProofSection = () => {
  const stats = [
    { label: "Client Retention", val: "95%" },
    { label: "Growth Ratio", val: "300%" },
    { label: "Growth Projects Across Pune Businesses", val: "50+" },
    { label: "Satisfaction", val: "98%" },
  ];

  return (
    <section className="py-12 border-b border-(--border) bg-(--surface)/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-black text-(--text-primary) group-hover:text-(--color-primary) transition-colors mb-2">
                {stat.val}
              </div>
              <div className="text-xs uppercase font-bold tracking-widest text-(--text-secondary)">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustProofSection;
