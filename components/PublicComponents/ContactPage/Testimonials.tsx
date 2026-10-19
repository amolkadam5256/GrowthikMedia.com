"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content:
      "Growthik Media built our corporate gifting website and made it straightforward for Pune companies to understand our hampers and request a quotation. The site is clean, fast and easy for our team to manage.",
    initials: "SK",
    name: "Shraddha Kharate",
    title: "Co-founder, Reet Foods · Hinjewadi, Pune",
    link: "/portfolio/reet-foods-corporate-gifting-website",
  },
  {
    id: 2,
    content:
      "The Growthik team ran our Meta and Google Ads for the Neuro Mind Gym programme. They structured the campaign to reach the right audience and track qualified enquiries, not just clicks.",
    initials: "DP",
    name: "Dr. Dipti Panhalkar",
    title: "Founder & Chief Psychologist, Mind Spa Global · Pune & Mumbai",
    link: "/portfolio/mind-spa-global-paid-advertising-lead-generation",
  },
  {
    id: 3,
    content:
      "For the PULA Bazaar event we needed real footfall from Pune shoppers. The Meta Ads campaign reached 124,600 people with a ₹600 ad spend — genuine local awareness on a very tight budget.",
    initials: "HB",
    name: "House of Bunkar Team",
    title: "Premium Ethnic Fashion Boutique · Bhoslenagar, Pune",
    link: "/portfolio/house-of-bunkar-digital-marketing-case-study",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-(--text-primary) uppercase tracking-tight flex items-center gap-4 italic">
          <div className="w-10 h-10 rounded-xl bg-red-600/10 flex items-center justify-center">
            <Star className="w-5 h-5 text-red-600 fill-current" />
          </div>
          Client <span className="text-red-600">Results</span>
        </h2>
        {testimonials.length > 1 && (
          <div className="flex gap-2">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-(--border) flex items-center justify-center text-(--text-primary) hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-(--border) flex items-center justify-center text-(--text-primary) hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="w-full shrink-0 flex-none px-2 lg:px-4">
              <div className="rounded-3xl bg-(--surface) border border-(--border) p-8 shadow-xl relative transition-all group overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-red-600/10 transition-all"></div>

                <div className="text-red-600 font-serif text-5xl font-black mb-4 h-8 opacity-20">
                  "
                </div>
                <p className="text-(--text-primary) font-bold italic mb-8 text-lg mt-0 leading-relaxed relative z-10 min-h-[80px]">
                  {t.content}
                </p>
                <div className="flex items-center gap-4 pt-6 border-t border-(--border) relative z-10">
                  <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center font-black text-red-600">
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-black text-(--text-primary) uppercase tracking-tight leading-none text-sm">
                      {t.name}
                    </h3>
                    <p className="text-[10px] text-red-600 font-bold uppercase tracking-widest mt-1">
                      {t.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex
                  ? "bg-red-600 w-8"
                  : "bg-(--border) hover:bg-red-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
