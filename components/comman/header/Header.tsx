"use client";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { navigationData } from "./navigationData";
import { TopBar } from "./TopBar";
import { Logo } from "./Logo";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { ContactButton } from "./ContactButton";
import { MobileMenuButton } from "./MobileMenuButton";
import { GlobalStyles } from "./GlobalStyles";
import { FloatingThemeToggle } from "./FloatingThemeToggle";

export default function Header() {
  const { theme } = useTheme();
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
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);
  if (!mounted) return null;

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
        className={`transition-all duration-500 fixed left-0 right-0 z-50 shadow-lg rounded-full mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-auto 2xl:max-w-7xl ${
          isTopBarVisible ? "top-4 lg:top-14" : "top-4"
        }`}
        style={{
          backgroundColor:
            theme === "dark" ? "var(--color-black)" : "var(--color-white)",
          color: theme === "dark" ? "var(--color-white)" : "var(--color-black)",
        }}
      >
        <div className="flex justify-between items-center py-0 px-0">
          <Logo onClick={() => setIsMobileMenuOpen(false)} />

          <DesktopNavigation navigationData={navigationData.desktop} />

          <div className="flex items-center space-x-4">
            <ContactButton />

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
