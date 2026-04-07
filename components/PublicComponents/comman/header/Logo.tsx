"use client";
import Image from "next/image";
import Link from "next/link";
import { images } from "@/app/assets/images/images";

interface LogoProps {
  onClick?: () => void;
}

export function Logo({ onClick }: LogoProps) {
  // Always use the black logo version across themes to match brand guidelines.
  const logoSrc = images.BlackLogo || images.growthikMediaLogo || images.logo;

  return (
    <Link
      href="/"
      className="flex items-center space-x-3 group shrink-0"
      aria-label="Home - Growthik Media Digital Marketing Agency Pune"
      onClick={onClick}
    >
      <div className="relative px-2 py-1">
        <div className="relative h-8 w-[150px] sm:h-9 sm:w-[170px] lg:h-10 lg:w-[220px]">
          <Image
            src={logoSrc}
            alt="Growthik Media logo, digital marketing agency in Pune"
            fill
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 170px, 150px"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
