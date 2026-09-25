import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Growthik Media',
  robots: { index: false, follow: true },
};

/**
 * This not-found.tsx sits inside app/(public)/ so it renders WITHIN
 * the public layout (Header + Footer). No <html>/<body> tags here.
 *
 * It is triggered whenever notFound() is called from any page inside
 * the (public) route group, e.g. portfolio/[slug]/page.tsx.
 */
export default function PublicNotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24 bg-gray-50 dark:bg-black text-center">
      {/* Animated 404 number */}
      <div className="relative mb-8 select-none">
        <span className="text-[120px] md:text-[200px] font-black leading-none text-gray-100 dark:text-gray-900 absolute inset-0 flex items-center justify-center pointer-events-none">
          404
        </span>
        <span className="relative text-[80px] md:text-[140px] font-black leading-none text-red-600">
          404
        </span>
      </div>

      {/* Message */}
      <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Double-check the URL or head back to a working page.
      </p>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-600/20 transition-all hover:scale-105"
        >
          ← Back to Home
        </Link>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold rounded-xl transition-all hover:scale-105"
        >
          View Our Work
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-red-600 hover:text-red-600 font-bold rounded-xl transition-all hover:scale-105"
        >
          Contact Us
        </Link>
      </div>

      {/* Decorative */}
      <div className="mt-16 flex flex-wrap gap-6 justify-center text-gray-300 dark:text-gray-800 text-xs font-bold uppercase tracking-widest">
        <Link href="/services" className="hover:text-red-500 transition-colors">Services</Link>
        <Link href="/about" className="hover:text-red-500 transition-colors">About</Link>
        <Link href="/blog" className="hover:text-red-500 transition-colors">Blog</Link>
        <Link href="/success-stories" className="hover:text-red-500 transition-colors">Success Stories</Link>
        <Link href="/audit" className="hover:text-red-500 transition-colors">Free Audit</Link>
      </div>
    </div>
  );
}
