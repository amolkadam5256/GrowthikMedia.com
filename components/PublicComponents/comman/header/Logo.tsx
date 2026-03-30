"use client";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/app/assets/images/images";

interface LogoProps {
  onClick: () => void;
}

export function Logo({ onClick }: LogoProps) {
  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group"
      aria-label="Home - Growthik Media Digital Marketing Agency Pune"
      onClick={onClick}
    >
      <div className="relative  px-4 py-2">
        <div className="relative h-8 w-[184px] sm:h-9 sm:w-[208px] lg:h-10 lg:w-[400px]">
          <Image
            src={images.BlackLogo}
            alt="Growthik Media logo, digital marketing agency in Pune"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
