"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGES } from "@/app/assets/images/images";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen flex items-center justify-center relative transition-colors duration-500">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.logo}
          alt="Admin Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay for light/dark theme */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${
          theme === "light" ? "bg-white/30" : "bg-black/60"
        }`}
      />

      {/* Admin Content */}
      <section className="relative z-10 w-full max-w-md bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-red-600">Admin Dashboard</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Secure access for administrators only
          </p>
        </div>

        {/* Admin Actions */}
        <div className="space-y-4">
          <Link
            href="/admin/login"
            className="block w-full text-center bg-[var(--color-primary)] text-white py-2.5 rounded-full font-medium transition hover:opacity-90"
          >
            Admin Login
          </Link>

          <Link
            href="/admin/dashboard"
            className="block w-full text-center border border-red-500 text-red-600 py-2.5 rounded-full font-medium transition hover:bg-red-50 dark:hover:bg-white/10"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
