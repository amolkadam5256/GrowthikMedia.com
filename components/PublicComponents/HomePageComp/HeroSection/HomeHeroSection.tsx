import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeroHeadline from "./HeroHeadline";
import { images } from "@/app/assets/images/images";

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
    <div className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-20 md:pt-35">
      {/* Background Image for Headline */}
      <div className="absolute inset-0 z-0c">
        <Image
          src={images.bg}
          alt="Warm Light Background"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
        {/* Semi-transparent overlay for both light and dark modes */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
      </div>

      {/* Headline Content */}
      <HeroHeadline />
    </div>
  );
};

export default HomeHeroSection;
