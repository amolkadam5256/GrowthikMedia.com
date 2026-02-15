"use client";

import React from "react";
import { TrendingUp, Target, DollarSign, Users } from "lucide-react";
import Link from "next/link";
import Counter from "@/components/ui/Counter";

const metrics = [
  {
    icon: TrendingUp,
    value: 247,
    suffix: "%",
    label: "Avg. Organic Traffic Increase",
    timeframe: "Within 6 Months",
  },
  {
    icon: Target,
    value: 3.8,
    suffix: "x",
    label: "Average ROAS",
    timeframe: "On Paid Campaigns",
  },
  {
    icon: DollarSign,
    value: 68,
    suffix: "%",
    label: "Reduction in Cost-Per-Acquisition",
    timeframe: "Year-over-Year",
  },
  {
    icon: Users,
    value: 12,
    suffix: " Cr+",
    label: "Attributed Revenue Generated",
    timeframe: "For Pune Businesses",
  },
];

const ClientSuccessMetricsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-(--surface) border-b border-(--border) relative overflow-hidden">
      {/* Background Decorative */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-(--color-primary)/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-(--color-primary)/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Proven Results
            </span>
            <span className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-[1.1]">
            Real Results from Real{" "}
            <span className="text-(--color-primary)">Pune Businesses</span>
          </h2>

          <p className="text-lg md:text-xl text-(--text-secondary) leading-relaxed max-w-3xl mx-auto">
            Numbers don't lie. Our Pune clients experience transformative growth
            through data-driven strategies that deliver measurable ROI.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="group relative bg-(--background) border-2 border-(--border) p-8 hover:border-(--color-primary) transition-all duration-500 hover:shadow-xl hover:shadow-(--color-primary)/20"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-(--color-primary)/10 flex items-center justify-center mb-6 group-hover:bg-(--color-primary) transition-all duration-500">
                <metric.icon className="w-6 h-6 text-(--color-primary) group-hover:text-white transition-colors duration-500" />
              </div>

              {/* Value */}
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-black text-(--color-primary) leading-none">
                  <Counter value={metric.value} suffix={metric.suffix} />
                </span>
              </div>

              {/* Label */}
              <h3 className="text-base font-bold text-(--text-primary) uppercase mb-2 leading-tight">
                {metric.label}
              </h3>

              {/* Timeframe */}
              <p className="text-xs text-(--text-secondary) uppercase tracking-wider">
                {metric.timeframe}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-(--color-primary)/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div
          className="max-w-4xl mx-auto bg-(--background) border-2 border-(--border) p-8 md:p-12 hover:border-(--color-primary) transition-all duration-500 hover:shadow-2xl hover:shadow-(--color-primary)/10"
          data-aos="fade-up"
        >
          <h3 className="text-2xl md:text-3xl font-black text-(--text-primary) uppercase mb-6">
            Average Client Growth Metrics
          </h3>

          <p className="text-base md:text-lg text-(--text-secondary) leading-relaxed mb-6">
            From local startups to established enterprises, we've helped Pune
            businesses generate over{" "}
            <span className="text-(--color-primary) font-bold">
              ₹12 crore in attributed revenue
            </span>{" "}
            through our{" "}
            <Link
              href="/performance-marketing-pune"
              className="text-(--color-primary) font-bold hover:underline"
            >
              performance marketing strategies
            </Link>
            . Our{" "}
            <Link
              href="/seo-services-pune"
              className="text-(--color-primary) font-bold hover:underline"
            >
              SEO services in Pune
            </Link>{" "}
            consistently deliver first-page rankings for high-intent keywords,
            while our{" "}
            <Link
              href="/google-ads-agency-pune"
              className="text-(--color-primary) font-bold hover:underline"
            >
              Google Ads campaigns
            </Link>{" "}
            maintain industry-leading conversion rates.
          </p>

          <div className="w-20 h-1 bg-(--color-primary) mb-6" />

          <p className="text-base text-(--text-secondary) leading-relaxed">
            These aren't vanity metrics-they're revenue-driving results that
            transform businesses. Every client receives transparent monthly
            reporting, dedicated account managementand strategic growth
            roadmaps. We don't just track clicks-we track revenue, customer
            lifetime valueand sustainable growth. When you partner with Growthik
            Media, you're investing in measurable, scalable success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessMetricsSection;
