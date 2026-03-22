import Link from "next/link";
import { FiTrendingUp } from "react-icons/fi";

export function ContactButton() {
  return (
    <div className="hidden lg:block">
      <Link
        href="/contact"
        className="bg-(--color-primary) hover:from-(--color-primary-light) 
        hover:to-(--color-primary-light) text-white px-7 py-3 rounded-full font-bold uppercase text-xs tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-500/30 flex items-center space-x-2 group/contact"
      >
        <FiTrendingUp className="group-hover/contact:animate-bounce" />
        <span>Get Free Growth Audit</span>
      </Link>
    </div>
  );
}
