"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { images } from "@/app/assets/images/images";
import React, { useState, useEffect } from "react";

interface LogoProps {
  onClick: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group"
      onClick={onClick}
    >
      <div className="relative">
        <div className="relative bg-white p-4 rounded-full">
          <Image
            src={images.icon}
            alt="Growthik Media Logo"
            width={50}
            height={50}
            className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col leading-tight">
        <span
          className="text-sm sm:text-lg font-bold bg-(--color-primary) bg-clip-text text-transparent transition-all duration-300 group-hover:from-(--color-primary-light) group-hover:to-(--color-primary-light)"
          style={{ fontFamily: "Rostex, sans-serif" }}
        >
          Growthik Media
        </span>
        <span className="text-[12px] sm:text-sm font-medium text-(--text-primary)">
          Digital Growth Partners
        </span>
      </div>
    </Link>
  );
}
