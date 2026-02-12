"use client";

import React from "react";
import Image from "next/image";
import HeroHeadline from "./HeroHeadline";
import { images } from "@/app/assets/images/images";

const HomeHeroSection = React.memo(() => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center pt-20 md:pt-35 min-h-[600px] md:min-h-[800px]">
      {/* Background Image for Headline */}
      <div className="absolute inset-0 z-0">
        <Image
          src={images.bg}
          alt="Premium Marketing Background"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Semi-transparent overlay for both light and dark modes */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-brightness-75"></div>
      </div>

      {/* Headline Content */}
      <HeroHeadline />
    </section>
  );
});

HomeHeroSection.displayName = "HomeHeroSection";
export default HomeHeroSection;
