"use client";

import { useState, useEffect, useRef } from "react";
import { navigationData } from "./navigationData";
import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";

import { MobileMenuButton } from "./MobileMenuButton";
import { GlobalStyles } from "./GlobalStyles";
import { FloatingThemeToggle } from "./FloatingThemeToggle";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const [isTopBarVisible, setIsTopBarVisible] = useState(true);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsTopBarVisible(window.scrollY <= 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <TopBar />

      <header
        ref={menuRef}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 shadow-[0_8px_30px_-18px_rgba(0,0,0,0.5)] bg-white dark:bg-neutral-900 backdrop-blur border-b border-gray-200 dark:border-neutral-800 ${
          isTopBarVisible ? "lg:top-12 top-0" : "top-0"
        }`}
      >
        <div className="relative max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center h-16 px-4 sm:px-6 lg:px-8 gap-6 bg-white dark:bg-neutral-900">
          <div className="justify-self-start">
            <Logo onClick={() => setIsMobileMenuOpen(false)} />
          </div>

          <div className="flex justify-center">
            <DesktopNavigation navigationData={navigationData.desktop} />
          </div>

          <div className="flex items-center justify-end">
            <MobileMenuButton
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
        </div>

        <MobileNavigation
          isMobileMenuOpen={isMobileMenuOpen}
          handleMobileLinkClick={handleMobileLinkClick}
          navigationData={navigationData}
        />
      </header>

      <GlobalStyles />
      <FloatingThemeToggle />
    </>
  );
}
