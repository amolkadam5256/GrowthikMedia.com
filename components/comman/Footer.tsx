"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <footer
      className={`py-6 mt-12 transition-colors duration-500 ${
        theme === "light" ? "bg-red-500 text-white" : "bg-black text-red-500"
      }`}
    >
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Growthik Media. All rights reserved.</p>
        <p>Designed with ❤️ for businesses looking to grow online.</p>
      </div>
    </footer>
  );
}
