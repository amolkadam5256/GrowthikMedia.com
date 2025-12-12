import Link from "next/link";
import { FiMessageCircle } from "react-icons/fi";

export function ContactButton() {
  return (
    <div className="hidden lg:block">
      <Link
        href="/contact"
        className="bg-[var(--color-primary)]  hover:from-[var(--color-primary-light)] 
        hover:to-[var(--color-primary-light)] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30 flex items-center space-x-2 group/contact"
      >
        <FiMessageCircle className="group-hover/contact:animate-pulse" />
        <span>Contact Us</span>
      </Link>
    </div>
  );
}