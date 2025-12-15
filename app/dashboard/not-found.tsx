// app/not-found.tsx (for App Router)
// or pages/404.tsx (for Pages Router)
import Link from "next/link";
import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found | ShabdBramhandCo</title>
        <meta
          name="description"
          content="Oops! The page you are looking for does not exist. Go back home or explore our website."
        />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6">
        {/* Decorative Circle */}
        <div className="relative w-64 h-64 mb-10">
          <div className="absolute w-64 h-64 bg-white opacity-20 rounded-full animate-ping"></div>
          <div className="absolute w-48 h-48 bg-white opacity-30 rounded-full top-8 left-8 animate-pulse"></div>
          <h1 className="absolute inset-0 flex items-center justify-center text-7xl font-extrabold">
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className="text-4xl font-bold mb-4 text-center">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-white/90 mb-8 text-center max-w-md">
          The page you are looking for does not exist or has been moved. Don’t
          worry, we’ll help you find your way back.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow-lg hover:bg-purple-100 transition"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* Social Links / Optional */}
        <div className="flex gap-6 mt-12">
          <a
            href="https://instagram.com/shabdbramh_and_co"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/shabdbramhandco"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/shabdbramhandco"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform"
          >
            Facebook
          </a>
        </div>
      </div>
    </>
  );
}
