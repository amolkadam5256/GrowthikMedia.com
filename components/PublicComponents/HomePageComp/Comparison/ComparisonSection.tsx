"use client";

import React from "react";
import { X, Check } from "lucide-react";

const comparisonData = [
  {
    item: "Measurement focus",
    traditional: "Vanity Metrics",
    growthik: "ROI & Revenue Focused",
  },
  {
    item: "Strategy type",
    traditional: "Guesswork",
    growthik: "Data & AI Driven",
  },
  {
    item: "Campaign style",
    traditional: "Generic Templates",
    growthik: "Custom Growth Systems",
  },
  {
    item: "Communication",
    traditional: "Monthly Static Reports",
    growthik: "Real-time Live Reporting",
  },
  {
    item: "Speed to scale",
    traditional: "Slow & Steady",
    growthik: "Aggressive Market Dominance",
  },
];

const ComparisonSection = () => {
  return (
    <section className="py-16 md:py-20 bg-(--background)">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-black text-(--text-primary) uppercase tracking-tighter">
            Traditional Agency{" "}
            <span className="text-(--color-primary)">vs Growthik</span>
          </h2>
        </div>

        <div
          className="overflow-hidden border-2 border-(--border)"
          data-aos="zoom-in"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-(--surface-secondary) border-b-2 border-(--border)">
                <th className="p-6 text-xs font-black uppercase tracking-[0.2em] text-(--text-secondary) border-r border-(--border)/50">
                  Feature
                </th>
                <th className="p-6 text-xs font-black uppercase tracking-[0.2em] text-red-500/40 border-r border-(--border)/50 text-center">
                  Others
                </th>
                <th className="p-6 text-xs font-black uppercase tracking-[0.2em] text-(--color-primary) bg-(--color-primary)/5 text-center">
                  Growthik Media
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className="border-b border-(--border) hover:bg-(--surface-secondary)/50 transition-colors group"
                >
                  <td className="p-6 text-xs font-bold text-(--text-secondary) uppercase tracking-widest border-r border-(--border)/50">
                    {row.item}
                  </td>
                  <td className="p-6 border-r border-(--border)/50">
                    <div className="flex items-center gap-3 text-sm font-medium text-(--text-secondary)/50 italic">
                      <X className="w-4 h-4 text-red-500/40 shrink-0" />
                      <span>{row.traditional}</span>
                    </div>
                  </td>
                  <td className="p-6 bg-(--color-primary)/2 group-hover:bg-(--color-primary)/5 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-(--color-primary)/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-(--color-primary)" />
                      </div>
                      <span className="text-sm font-black text-(--text-primary) uppercase tracking-tight">
                        {row.growthik}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
