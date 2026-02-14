"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#D90B1C] shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <FiSun
          className={`absolute w-full h-full transition-all duration-500 transform ${
            theme === "dark"
              ? "translate-y-10 opacity-0 rotate-90"
              : "translate-y-0 opacity-100 rotate-0"
          } text-white`}
        />
        <FiMoon
          className={`absolute w-full h-full transition-all duration-500 transform ${
            theme === "dark"
              ? "translate-y-0 opacity-100 rotate-0"
              : "-translate-y-10 opacity-0 -rotate-90"
          } text-white`}
        />
      </div>

      {/* Subtle hover effect background */}
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
    </button>
  );
}
