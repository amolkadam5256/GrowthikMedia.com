"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

const TESTIMONIALS = [
  {
    name: "Shraddha Kharate",
    role: "Co-founder",
    company: "Reet Foods",
    city: "Hinjewadi, Pune",
    rating: 5,
    text: "Growthik Media built our corporate gifting website and made it simple for Pune companies to understand our hampers and request a quotation. The site is clear, fast and easy for our team to use.",
    metrics: "Website live",
    site: "https://www.reetfoodsngiftings.com/",
  },
  {
    name: "Harshad Kharate",
    role: "Co-founder",
    company: "Reet Foods",
    city: "Hinjewadi, Pune",
    rating: 5,
    text: "We needed a site that could handle corporate Diwali gifting enquiries, not just look pretty. Growthik set up the pages, quotation flow and WhatsApp contact so buyers can reach us quickly.",
    metrics: "Corporate enquiry flow",
    site: "https://www.reetfoodsngiftings.com/",
  },
  {
    name: "Client",
    role: "Ecommerce brand",
    company: "Skincare Serum & Facewash",
    city: "India",
    rating: 5,
    text: "Growthik set up Google Ads, SEO and conversion tracking for our serum and facewash store. We now see which campaigns create real enquiries instead of guessing from clicks.",
    metrics: "Ads + SEO measurement",
    site: "/portfolio/skincare-serum-facewash-ecommerce-campaign/",
  },
  {
    name: "Client",
    role: "Food brand",
    company: "Mango Pulp Campaign",
    city: "India",
    rating: 5,
    text: "The WhatsApp lead campaign helped us reach distributors and buyers across India. Follow-up became clearer because every enquiry was tagged by buyer type and location.",
    metrics: "WhatsApp lead capture",
    site: "/portfolio/mango-pulp-whatsapp-lead-generation-campaign/",
  },
];

const TestimonialSection = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-(--background) relative overflow-hidden">
      {/* Background Decorative */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
          <div data-aos="fade-right">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-(--color-primary)" />
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-sm">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) uppercase tracking-tighter leading-[1.1]">
              CLIENT NOTES,{" "}
              <span className="text-(--color-primary)">REAL WORK</span>
            </h2>
            <p className="text-lg md:text-xl text-(--text-secondary) mt-4 font-light italic max-w-2xl">
              Simple feedback from work we actually delivered.
            </p>
          </div>

          <div className="flex gap-4" data-aos="fade-left">
            <button
              onClick={prev}
              className="w-14 h-14 border-2 border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={next}
              className="w-14 h-14 border-2 border-(--color-primary) text-(--color-primary) hover:bg-(--color-primary) hover:text-white transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[500px] md:min-h-[400px]">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                i === activeIndex
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 translate-x-20 pointer-events-none"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left side: Content */}
                <div className="lg:col-span-7">
                  <Quote className="w-16 h-16 text-primary/10 mb-6" />
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-5 h-5 fill-(--color-primary) text-(--color-primary)"
                        />
                      ))}
                    </div>
                    <span className="text-(--text-primary) font-bold text-sm">
                      Client feedback
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl font-medium text-(--text-primary) leading-relaxed mb-8 italic">
                    "{t.text}"
                  </p>

                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-xl font-black text-(--text-primary) uppercase">
                        {t.name}
                      </span>
                      <span className="text-(--color-primary) font-bold text-sm uppercase tracking-widest mt-1">
                        {t.role} @ {t.company}
                      </span>
                      <span className="text-(--text-secondary) text-sm mt-1">
                        {t.city}
                      </span>
                      {t.site && (
                        <Link
                          href={t.site}
                          target={t.site.startsWith("http") ? "_blank" : undefined}
                          rel={t.site.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-(--color-primary) text-sm font-bold mt-2 hover:underline"
                        >
                          View project
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right side: Video / Metrics */}
                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden border border-(--border) bg-(--surface) p-8 shadow-xl">
                    <span className="text-xs uppercase tracking-widest font-bold text-(--text-secondary)">
                      Work delivered
                    </span>
                    <p className="text-2xl font-black text-(--text-primary) mt-3">
                      {t.metrics}
                    </p>
                    <p className="text-sm text-(--text-secondary) mt-4">
                      {t.company} · {t.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Soft CTA */}
        <div className="mt-24 border-t border-(--border) pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-(--text-secondary) font-light">
            Working with over{" "}
            <span className="text-(--color-primary) font-bold">
              10+ Happy Clients
            </span>{" "}
            across Maharashtra to help local businesses grow.
          </p>
          <Link
            href="/portfolio"
            className="group flex items-center gap-4 text-(--color-primary) font-black uppercase tracking-widest text-sm"
          >
            <span>See More Success Stories</span>
            <div className="w-12 h-12 border-2 border-(--color-primary) flex items-center justify-center group-hover:bg-(--color-primary) transition-all duration-300">
              <ChevronRight className="w-6 h-6 group-hover:text-white transition-all" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
});

TestimonialSection.displayName = "TestimonialSection";
export default TestimonialSection;
