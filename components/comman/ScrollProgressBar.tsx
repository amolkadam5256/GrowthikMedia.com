"use client";

import React, { useEffect, useState } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  const updateScrollProgress = () => {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const totalHeight = docHeight - winHeight;
    const scrollPosition = window.scrollY;

    if (totalHeight > 0) {
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    }
  };

  const handleDrag = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX =
      "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const { innerWidth } = window;
    const percentage = clientX / innerWidth;
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: totalHeight * percentage, behavior: "auto" });
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleDrag(e);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    handleDrag(e);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const percentage = e.clientX / window.innerWidth;
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        window.scrollTo({ top: totalHeight * percentage, behavior: "auto" });
      }
    };

    const onMouseUp = () => setIsDragging(false);

    const onKeyDown = (e: KeyboardEvent) => {
      const scrollStep = 50;
      if (e.key === "ArrowRight") {
        window.scrollBy({ top: scrollStep, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        window.scrollBy({ top: -scrollStep, behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("keydown", onKeyDown);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isDragging]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[9999] bg-gray-100 dark:bg-white/5 transition-all duration-300 group ${
        isDragging ? "h-4 cursor-grabbing" : "h-2 cursor-pointer hover:h-4"
      }`}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      aria-hidden="true"
    >
      <div
        className="h-full relative transition-all duration-100 ease-out"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: "#d90b1c",
        }}
      >
        {/* Sharp White Square Tip - High Contrast */}
        <div className="absolute right-0 top-0 h-full w-2 bg-white shadow-[0_0_15px_#fff,0_0_5px_rgba(217,11,28,0.8)] z-10" />

        {/* Interaction hint for keyboard */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mt-1 whitespace-nowrap">
          Click & Drag or use Arrow keys
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
