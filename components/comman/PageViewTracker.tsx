"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const win = window as unknown as {
      gtag?: (command: string, id: string, config?: object) => void;
    };
    if (typeof window !== "undefined" && typeof win.gtag === "function") {
      win.gtag("config", "G-30C78ZK2G8", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
