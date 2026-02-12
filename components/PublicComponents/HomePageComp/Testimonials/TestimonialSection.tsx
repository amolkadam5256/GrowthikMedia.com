"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
} from "lucide-react";
import Link from "next/link";

const TESTIMONIALS = [
  {
    name: "Rajesh Kulkarni",
    role: "Founder & CEO",
    company: "Heritage Furnishings",
    city: "Pune",
    rating: 5,
    text: "As the top Digital Marketing Company in Pune, they didn't just manage our ads; they re-engineered our entire sales funnel. Our organic leads grew by 3x within 6 months, and the ROI on our performance marketing has never been better. Truly growth marketing experts!",
    metrics: "300% Growth in Leads",
    avatar: "/testimonials/rajesh.png",
  },
  {
    name: "Sneha Deshmukh",
    role: "Marketing Director",
    company: "TechNova Solutions",
    city: "Mumbai / Pune",
    rating: 5,
    text: "We were looking for the best SEO Agency in Pune to dominate international markets. Their technical SEO audit was eye-opening. They fixed issues we didn't even know existed, leading to a 150% increase in high-intent keyword rankings. Highly recommended.",
    metrics: "150% Increase in SEO Traffic",
    avatar: "/testimonials/sneha.png",
  },
  {
    name: "Amit Shinde",
    role: "COO",
    company: "Global Edunext",
    city: "Pune",
    rating: 5,
    text: "Partnering with this team transformed our student enrollment process. Their content strategy and video funnels created a high-trust environment before clients even spoke to us. They are more than just an agency; they are strategic growth partners.",
    metrics: "45% Lower CPL",
    avatar: "/testimonials/amit.png",
  },
  {
    name: "Priya Mehta",
    role: "Head of Growth",
    company: "Vibe E-commerce",
    city: "Pune",
    rating: 5,
    text: "The aggressive scaling they achieved for our D2C brand was incredible. We went from ₹5 Lakh to ₹25 Lakh monthly ad spend while improving our ROAS from 2.5 to 4.2. They truly understand the pulse of performance marketing in Pune.",
    metrics: "₹20L+ Monthly Revenue Scale",
    avatar: "/testimonials/priya.png",
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
    <section className="py-24 md:py-32 bg-(--background) relative overflow-hidden">
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
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8">
          <div data-aos="fade-right">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-(--color-primary)" />
              <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-sm">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-(--text-primary) uppercase tracking-tighter leading-[1.1]">
              REAL VOICES,{" "}
              <span className="text-(--color-primary)">REAL GROWTH</span>
            </h2>
            <p className="text-lg md:text-xl text-(--text-secondary) mt-4 font-light italic max-w-2xl">
              Don't take our word for it-listen to the results.
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
                  <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-5 h-5 fill-(--color-primary) text-(--color-primary)"
                      />
                    ))}
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
                        {t.city}, Maharashtra
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side: Video / Metrics */}
                <div className="lg:col-span-5">
                  <div className="relative group overflow-hidden border border-(--border) bg-(--surface) p-2 shadow-2xl">
                    {/* Video Placeholder Style */}
                    <div className="aspect-video bg-(--surface-secondary) relative flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                      <div className="flex flex-col items-center gap-4 text-center p-8">
                        <PlayCircle className="w-20 h-20 text-(--color-primary) opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all cursor-pointer will-change-transform" />
                        <span className="text-(--color-primary) font-bold uppercase tracking-widest text-xs">
                          Watch Video Testimonial
                        </span>
                      </div>
                    </div>

                    {/* Result Badge */}
                    <div className="absolute -bottom-6 -left-6 bg-(--color-primary) p-8 text-white shadow-xl z-20 will-change-transform">
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-widest font-bold opacity-80">
                          Proven Result
                        </span>
                        <span className="text-2xl font-black whitespace-nowrap">
                          {t.metrics}
                        </span>
                      </div>
                    </div>
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
              50+ Happy Clients
            </span>{" "}
            across Maharashtra to drive aggressive digital scale.
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
