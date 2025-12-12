import { FiMenu, FiX } from "react-icons/fi";

interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export function MobileMenuButton({ isMobileMenuOpen, toggleMobileMenu }: MobileMenuButtonProps) {
  return (
    <button
      className="lg:hidden py-3 px-8  rounded-full  transition-colors relative"
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