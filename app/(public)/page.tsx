"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/app/assets/images/images";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen flex items-center justify-center relative transition-colors duration-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={images.logo} // <-- use public path
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for light/dark theme */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          theme === "light" ? "bg-white/20" : "bg-black/50"
        }`}
      ></div>

      {/* Content */}
      <section className="relative text-center px-6 z-10">
        <h1 className="text-5xl font-bold text-red-500 dark:text-white">
          Grow Your Business with Digital Marketing
        </h1>
      </section>
    </main>
  );
}
