"use client";
import { FiMenu, FiX } from "react-icons/fi";

interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export function MobileMenuButton({
  isMobileMenuOpen,
  toggleMobileMenu,
}: MobileMenuButtonProps) {
  return (
    <button
      className="lg:hidden py-2.5 px-4 rounded-full transition-colors relative bg-white dark:bg-neutral-900 shadow-sm"
      onClick={toggleMobileMenu}
      aria-label="Toggle menu"
    >
      {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      {!isMobileMenuOpen && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--color-primary)] rounded-full animate-ping opacity-75"></div>
      )}
    </button>
  );
}
