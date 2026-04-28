"use client";
import React, { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const panel = document.querySelector<HTMLElement>(".blog-scroll-panel");

    const handleScroll = () => {
      const panelIsScrollable =
        panel && panel.scrollHeight > panel.clientHeight + 1;
      const el = panelIsScrollable ? panel : document.documentElement;
      const scrollTop = panelIsScrollable
        ? panel.scrollTop
        : el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    panel?.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      panel?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-9999 h-[3px] transition-all duration-100"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, var(--color-primary), var(--color-primary-light))",
        }}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />
    </>
  );
}
