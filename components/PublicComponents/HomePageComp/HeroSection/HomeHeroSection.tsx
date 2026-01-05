import React, { useEffect, useState } from "react";
import HeroCarousel from "./HeroCarousel";
import HeroHeadline from "./HeroHeadline";

const HomeHeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative  w-full overflow-hidden flex flex-col items-center justify-center pt-20 md:pt-35 wnat role back dont edit ">
      {/* 1. Background Image (Full 100vh) */}
      <div className="absolute inset-0 z-0">
        {/* Subtle paper/grain texture to match the cream aesthetic */}
        <img
          src="https://www.transparenttextures.com/patterns/cream-paper.png"
          className="w-full h-full object-cover opacity-50 mix-blend-multiply hidden"
          alt="texture"
        />
        <img
          src="https://images.unsplash.com/photo-1493612276216-9c78fe07dcf9?q=80&w=2670&auto=format&fit=crop"
          alt="Warm Light Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#fdfbf6]/80 via-[#fdfbf6]/90 to-[#fdfbf6]"></div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
        {/* Headline Section */}
        <HeroHeadline />

        {/* Carousel Section - Now displays social media cards */}
        <div className="w-full relative -my-2 md:-my-4 perspective-1000 overflow-hidden">
          <HeroCarousel />
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&display=swap");
        .font-handwriting {
          font-family: "Caveat", cursive;
        }
      `}</style>
    </div>
  );
};

export default HomeHeroSection;
