'use client';
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center">
      {/* Radio-style toggle */}
      <div className="relative flex items-center">
        {/* Background track */}
        <div 
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all duration-300 ${
            theme === "light" 
              ? "bg-black" 
              : "bg-[var(--color-primary)]"
          }`}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleTheme();
            }
          }}
        >
          {/* Toggle knob */}
          <div 
            className={`w-5 h-5 bg-white rounded-full shadow-lg transform transition-transform duration-300 ${
              theme === "light" ? "translate-x-0" : "translate-x-7"
            }`}
          >
            {/* Icon inside knob */}
            <div className="flex items-center justify-center h-full">
              {theme === "light" ? (
                <FiSun className="w-3 h-3 text-[var(--color-primary)]" />
              ) : (
                <FiMoon className="w-3 h-3 text-[var(--color-dark)]" />
              )}
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}