"use client";

import React from "react";
import { Bot, Users } from "lucide-react";

const AIPhilosophySection = () => {
  return (
    <section className="py-24 border-b border-(--border)">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-2xl font-black text-(--text-primary) uppercase mb-4 flex items-center gap-3">
                <Bot className="w-6 h-6 text-(--color-primary)" /> AI-Powered
                Growth Architecture
              </h2>
              <p className="text-(--text-secondary) mb-6">
                Our AI-powered marketing systems combine semantic SEO analysis,
                predictive ad bidding, and advanced conversion tracking to help
                businesses outperform competitors in search rankings and paid
                media efficiency.
              </p>
              <div className="space-y-4 border-l-2 border-(--border) pl-6">
                <div>
                  <h4 className="font-bold text-(--text-primary) uppercase text-sm">
                    AI SEO Optimization
                  </h4>
                  <p className="text-xs text-(--text-secondary)">
                    Advanced semantic analysis for ranking domination.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-(--text-primary) uppercase text-sm">
                    Predictive Ads Scaling
                  </h4>
                  <p className="text-xs text-(--text-secondary)">
                    Algorithmic bidding strategies for max ROI.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-(--text-primary) uppercase text-sm">
                    Conversion Intelligence
                  </h4>
                  <p className="text-xs text-(--text-secondary)">
                    User behavior analysis to optimize funnels.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-(--text-primary) uppercase mb-4 flex items-center gap-3">
                <Users className="w-6 h-6 text-(--color-primary)" /> Client
                Philosophy
              </h2>
              <blockquote className="text-lg italic text-(--text-secondary) border-l-4 border-(--color-primary) pl-4 py-2 bg-(--surface) pr-4">
                "We don’t work with clients — we build long-term growth
                partnerships. Every campaign is engineered around measurable
                revenue, not vanity metrics."
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-7" data-aos="fade-left">
            <h2 className="text-xl font-black text-(--text-primary) uppercase mb-4 ml-6">
              Our Journey
            </h2>
            <p className="text-sm text-(--text-secondary) ml-6 mb-8 max-w-lg leading-relaxed">
              Since 2019, Growthik Media has evolved from a boutique digital
              marketing agency in Pune into a full-stack growth partner
              delivering scalable AI-powered marketing systems.
            </p>
            <div className="relative border-l-2 border-(--border) ml-6 space-y-12">
              {[
                {
                  year: "2019",
                  title: "Founded",
                  desc: "Started as a boutique digital consultancy in Pune.",
                },
                {
                  year: "2021",
                  title: "Performance Marketing Expansion",
                  desc: "Scaled team and introduced advanced paid media strategies.",
                },
                {
                  year: "2023",
                  title: "AI Marketing Systems",
                  desc: "Integrated AI tools for SEO and content automation.",
                },
                {
                  year: "2026",
                  title: "Advanced Growth Architecture",
                  desc: "Full-stack engineering + marketing for total dominance.",
                  current: true,
                },
              ].map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div
                    className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${
                      item.current
                        ? "bg-(--color-primary) border-(--color-primary)"
                        : "bg-(--background) border-(--text-secondary)"
                    }`}
                  />
                  <span
                    className={`text-sm font-bold uppercase tracking-widest ${
                      item.current
                        ? "text-(--color-primary)"
                        : "text-(--text-secondary)"
                    }`}
                  >
                    {item.year}
                  </span>
                  <h3 className="text-lg font-black text-(--text-primary) uppercase mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-(--text-secondary)">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPhilosophySection;
