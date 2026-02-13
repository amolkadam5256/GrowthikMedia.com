"use client";
import React, { useState, useEffect } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function FloatingThemeToggle() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-100">
      <ThemeToggleButton />
    </div>
  );
}
