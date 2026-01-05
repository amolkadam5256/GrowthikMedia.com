import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import HeroCarousel from "./HeroCarousel";
import HeroHeadline from "./HeroHeadline";

const carouselItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop",
    alt: "Nature scene",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=500&fit=crop",
    alt: "Spa treatment",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1514995669114-6081e934b693?w=400&h=500&fit=crop",
    alt: "Food styling",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=500&fit=crop",
    alt: "Beauty makeup",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1558981852-426c6c22a060?w=400&h=500&fit=crop",
    alt: "Motorcycle ride",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=500&fit=crop",
    alt: "Product pour",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?w=400&h=500&fit=crop",
    alt: "Urban style",
  },
];

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
    <div className="relative min-h-dvh w-full overflow-hidden flex flex-col items-center justify-center pt-28 md:pt-44 wnat role back dont edit ">
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

        {/* Carousel Section - Responsive margins */}
        <div className="w-full relative -my-2 md:-my-4 perspective-1000 overflow-hidden">
          <HeroCarousel items={carouselItems} />
        </div>

        {/* CTA Section */}
        <div className="relative my-5 flex flex-col items-center">
          {/* Annotation: It's free */}
          <div className="absolute -left-15 md:-left-32 top-1/2 -translate-y-1/2  sm:block">
            <p className="font-handwriting text-gray-800 text-sm md:text-lg transform -rotate-12 mb-2 font-medium">
              It's free
            </p>
            <svg
              className="w-10 h-6 md:w-16 md:h-8 text-gray-800 transform -scale-y-100 rotate-180"
              viewBox="0 0 60 30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M50,25 Q30,5 5,20 L10,15 M5,20 L15,22" />
            </svg>
          </div>

          <div className="p-1.5 md:p-2 border-2 border-dashed border-orange-300 rounded-full">
            <Button
              size="lg"
              className="rounded-full px-4 py-2 sm:px-4 sm:py-3 md:px-10 md:py-6 text-sm sm:text-base md:text-base lg:text-base font-bold bg-[#FF7F50] hover:bg-[#FF6347] text-white shadow-xl shadow-orange-200 hover:shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              Get Started
            </Button>
          </div>
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
