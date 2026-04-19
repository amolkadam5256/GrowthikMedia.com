"use client";

import React from "react";
import { Check, ArrowRight, Zap, Target, Crown } from "lucide-react";
import { Button } from "@/components/PublicComponents/ui/GButton";
import Link from "next/link";
import { Counter } from "@/components/PublicComponents/ui/GCounter";

const tiers = [
  {
    name: "Starter / Launch Pad",
    icon: Zap,
    description:
      "Perfect for small Pune brands and startups wanting a professional start online.",
    startingAt: "Starting from",
    price: 25000,
    priceSuffix: "/mo",
    idealFor: "Businesses with < ₹50k monthly ad spend",
    features: [
      "Local SEO Optimization",
      "Basic Content Strategy",
      "Social Media Management (2 Platforms)",
      "Monthly Performance Report",
    ],
    cta: "Start Small",
    popular: false,
  },
  {
    name: "Growth / Accelerator",
    icon: Target,
    description:
      "For businesses serious about growth and ready to invest in what actually works.",
    startingAt: "Starting from",
    price: 65000,
    priceSuffix: "/mo",
    idealFor: "Businesses spending ₹50k - ₹2L on ads",
    features: [
      "Advanced AI-Driven SEO",
      "Performance Marketing (PPC)",
      "Full-Funnel CRO (Conversion Rate Optimization)",
      "Weekly Strategy Updates",
      "Dedicated Account Manager",
    ],
    cta: "Scale Now",
    popular: true,
  },
  {
    name: "Enterprise / Custom",
    icon: Crown,
    description:
      "Bespoke strategy for established brands with high-growth targets.",
    startingAt: "Custom",
    price: 150000,
    priceSuffix: "+",
    idealFor: "High-growth brands with ₹5L+ ad spend",
    features: [
      "Omnichannel Digital Strategy",
      "Custom Web Engineering",
      "Influencer & PR Management",
      "Real-time Data BI Dashboard",
      "Direct Founder Access",
    ],
    cta: "Request Consultation",
    popular: false,
  },
];

const InvestmentSection = () => {
  return (
    <section className="py-16 md:py-20 bg-(--background) relative overflow-hidden border-y border-(--border)">
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-(--color-primary)/2 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-(--color-primary)/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Investment Guide
            </span>
            <div className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-none">
            Simple, Transparent <br />
            <span className="text-(--color-primary)">Pricing</span>
          </h2>
          <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto leading-relaxed">
            No hidden fees, no padded retainers. Just clear pricing for what your Pune business actually needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 bg-(--surface) border-2 transition-all duration-500 group ${
                tier.popular
                  ? "border-(--color-primary) shadow-2xl shadow-(--color-primary)/10 scale-105 z-20"
                  : "border-(--border) hover:border-(--color-primary)/30"
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-(--color-primary) text-white px-4 py-1 text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <div className="w-14 h-14 bg-(--color-primary)/10 flex items-center justify-center mb-6 group-hover:bg-(--color-primary) group-hover:text-white transition-all">
                  <tier.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-(--text-primary) uppercase tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs text-(--text-secondary) leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="mb-8 p-4 bg-(--background) border border-(--border)">
                <span className="block text-[10px] uppercase font-black text-(--text-secondary) mb-1 opacity-60">
                  {tier.startingAt}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-(--text-primary)">
                    <Counter value={tier.price} prefix="₹" />
                  </span>
                  <span className="text-sm font-bold text-(--text-secondary)">
                    {tier.priceSuffix}
                  </span>
                </div>
                <div className="mt-3 pt-3 border-t border-(--border) flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--color-primary)" />
                  <span className="text-[10px] font-bold text-(--text-primary) uppercase tracking-wider">
                    {tier.idealFor}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm">
                    <Check className="w-5 h-5 text-(--color-primary) shrink-0" />
                    <span className="text-(--text-secondary) font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="mt-auto">
                <Button
                  variant={tier.popular ? "primary" : "outline"}
                  className="w-full rounded-none py-6 font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-sm text-(--text-secondary) italic">
            * Not sure which plan fits? Book a free call and we&apos;ll recommend the right starting point for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
