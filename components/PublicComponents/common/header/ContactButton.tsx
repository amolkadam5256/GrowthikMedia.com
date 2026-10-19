import Link from "next/link";

export function ContactButton() {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center justify-center bg-(--color-primary) text-white px-3 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-[11px] sm:text-xs tracking-wide shadow-lg shadow-red-500/25 hover:opacity-90 transition-opacity whitespace-nowrap"
    >
      <span className="sm:hidden">Book a Call</span>
      <span className="hidden sm:inline">Book Your Free Strategy Call</span>
    </Link>
  );
}
