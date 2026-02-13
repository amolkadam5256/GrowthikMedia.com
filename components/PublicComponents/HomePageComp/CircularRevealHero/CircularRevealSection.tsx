"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Seamless Execution",
    subtitle: "Transforming ideas into impact with",
    description: "Let's flip your brand's challenges into success",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Synergistic Consulting",
    subtitle: "Transforming ideas into impact with",
    description: "Let's flip your brand's challenges into success",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Integrated Digital",
    subtitle: "Transforming ideas into impact with",
    description: "Let's flip your brand's challenges into success",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
];

const CircularRevealSection = React.memo(() => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealOrigin, setRevealOrigin] = useState("50% 50%");

  const navigate = (dir: "next" | "prev", origin: string) => {
    if (isAnimating) return;
    setRevealOrigin(origin);
    if (dir === "next") {
      setIndex((prev) => (prev + 1) % slides.length);
    } else {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => navigate("next", "50% 50%"), 7000);
    return () => clearInterval(timer);
  }, [index, isAnimating]);

  return (
    <section
      className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black select-none border-y border-white/10 my-1"
      aria-label="Services Banner"
    >
      {/* Static Background (Previous Slide) */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url(${slides[(index - 1 + slides.length) % slides.length].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" />
      </div>

      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          initial={{ clipPath: `circle(0% at ${revealOrigin})` }}
          animate={{ clipPath: `circle(150% at ${revealOrigin})` }}
          exit={{ clipPath: `circle(0% at ${revealOrigin})` }}
          transition={{
            duration: 1.2,
            ease: [0.77, 0, 0.175, 1],
          }}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
          className="absolute inset-0 w-full h-full z-10 overflow-hidden"
        >
          {/* Main Slide Content */}
          <article
            className="absolute inset-0 w-full h-full bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
            style={{ backgroundImage: `url(${slides[index].image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/40 to-black/90" />

            {/* Content Container */}
            <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center">
              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-(--color-primary) text-xs md:text-lg font-bold tracking-[0.4em] uppercase mb-4"
              >
                {slides[index].subtitle}
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-white text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight uppercase"
              >
                {slides[index].title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "80px" }}
                transition={{ delay: 1, duration: 0.6 }}
                className="h-1 bg-(--color-primary) mb-8"
              />

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-white/70 text-base md:text-xl font-medium max-w-xl mx-auto leading-relaxed"
              >
                {slides[index].description}
              </motion.p>
            </div>
          </article>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => !isAnimating && setIndex(i)}
            className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer ${index === i ? "w-10 bg-(--color-primary)" : "w-3 bg-white/20 hover:bg-white/40"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Decorative Branding */}
      <div className="absolute top-8 right-8 z-40">
        <span className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase">
          Growthik
        </span>
      </div>

      {/* Interactive Navigation Zones (Arrows) */}
      <div className="absolute inset-0 z-30 flex pointer-events-none">
        <div
          className="w-1/4 h-full cursor-pointer pointer-events-auto group relative flex items-center justify-start pl-6 md:pl-10"
          onClick={(e) => navigate("prev", `${e.clientX}px ${e.clientY}px`)}
        >
          <div className="p-3 rounded-full border border-white/10 hover:border-(--color-primary) hover:bg-(--color-primary) transition-all duration-300 opacity-0 group-hover:opacity-100">
            <ChevronLeft className="text-white w-5 h-5" />
          </div>
        </div>
        <div className="flex-1" />
        <div
          className="w-1/4 h-full cursor-pointer pointer-events-auto group relative flex items-center justify-end pr-6 md:pr-10"
          onClick={(e) => navigate("next", `${e.clientX}px ${e.clientY}px`)}
        >
          <div className="p-3 rounded-full border border-white/10 hover:border-(--color-primary) hover:bg-(--color-primary) transition-all duration-300 opacity-0 group-hover:opacity-100">
            <ChevronRight className="text-white w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
});

CircularRevealSection.displayName = "CircularRevealSection";
export default CircularRevealSection;
