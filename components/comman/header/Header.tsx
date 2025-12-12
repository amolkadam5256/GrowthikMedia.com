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

export default function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActive(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActive(null);
  };

  return (
    <>
      <TopBar />

      <header
        ref={menuRef}
        className="transition-all duration-500 fixed top-8 left-0 right-0 z-50 shadow-lg rounded-full mt-6 mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-auto 2xl:max-w-7xl"
        style={{
          top: "20px",
          backgroundColor: theme === "light" ? "white" : "var(--color-dark)",
          color: theme === "light" ? "var(--color-dark)" : "white",
        }}
      >
        <div className="flex justify-between items-center py-0 px-0">
          <Logo onClick={() => setIsMobileMenuOpen(false)} />

          <DesktopNavigation
            active={active}
            setActive={setActive}
            navigationData={navigationData.desktop}
          />

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
          active={active}
          setActive={setActive}
          handleMobileLinkClick={handleMobileLinkClick}
          navigationData={navigationData.mobile}
        />
      </header>

      <GlobalStyles />
    </>
  );
}
