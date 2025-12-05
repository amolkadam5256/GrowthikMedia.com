// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              Amol Tukaram Kadam<span className="text-yellow-400">Digital Marketing</span>
            </h1>
            <p className="mb-8 text-lg">
              SEO, Social Media Marketing, Google Ads, and Web Development to take your business to the next level.
            </p>
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-300 transition"
            >
              Get Started
            </Link>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/demo-hero.png" // Replace with your hero image
              alt="Digital Marketing Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
