"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Google Analytics Tracking
    if (
      typeof window !== "undefined" &&
      typeof (window as any).gtag === "function"
    ) {
      (window as any).gtag("config", "G-30C78ZK2G8", {
        page_path: pathname,
      });
    }

    // 2. Meta Pixel PageView Tracking
    if (
      typeof window !== "undefined" &&
      typeof (window as any).fbq === "function"
    ) {
      (window as any).fbq("track", "PageView");

      // 3. Service Page Tracking
      const isServicePage =
        pathname.includes("/services/") ||
        pathname.includes("-marketing") ||
        pathname.includes("-ads") ||
        pathname.includes("seo") ||
        pathname.includes("development");
      if (isServicePage) {
        (window as any).fbq("track", "ViewContent", {
          content_category: "Service",
        });
      }
    }
  }, [pathname]);

  // 4. Global Click Event Listener for WhatsApp & Tel Links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a");
      if (!link) return;

      const href = link.href || "";

      // WhatsApp Tracking
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        if (
          typeof window !== "undefined" &&
          typeof (window as any).fbq === "function"
        ) {
          (window as any).fbq("track", "Contact", {
            content_name: "WhatsApp Click",
          });
        }
      }

      // Phone Call Tracking
      if (href.startsWith("tel:")) {
        if (
          typeof window !== "undefined" &&
          typeof (window as any).fbq === "function"
        ) {
          (window as any).fbq("track", "Contact", {
            content_name: "Phone Call",
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
