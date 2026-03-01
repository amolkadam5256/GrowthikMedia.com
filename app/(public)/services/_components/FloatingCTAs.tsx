"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { CONTACT_INFO } from "@/constants/contact";

export function FloatingCTAs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <Link
        href="/contact"
        className="w-12 h-12 bg-(--surface) text-(--color-primary) border border-(--color-primary) rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform sm:flex hidden"
        title="Book Consultation"
      >
        <Calendar className="w-5 h-5" />
      </Link>
      <Link
        href={`tel:${CONTACT_INFO.phone.primary.replace(/\s+/g, "")}`}
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex flex-col items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="Call Now"
      >
        <Phone className="w-5 h-5" />
      </Link>
      <Link
        href={CONTACT_INFO.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-7 h-7" />
      </Link>
    </div>
  );
}
