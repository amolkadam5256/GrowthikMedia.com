"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

function getPageGroup(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/services")) return "services";
  if (pathname.startsWith("/portfolio")) return "portfolio";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/success-stories")) return "success_stories";
  if (pathname.startsWith("/contact")) return "contact";
  if (pathname.startsWith("/audit")) return "audit";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/privacy-policy") || pathname.startsWith("/terms")) {
    return "legal";
  }
  return "other";
}

function getReferrerSource(referrer: string) {
  if (!referrer) return "direct";

  try {
    const hostname = new URL(referrer).hostname.toLowerCase();

    if (
      hostname.includes("chatgpt.com") ||
      hostname.includes("openai.com") ||
      hostname.includes("perplexity.ai") ||
      hostname.includes("gemini.google.com") ||
      hostname.includes("copilot.microsoft.com") ||
      hostname.includes("claude.ai")
    ) {
      return "ai";
    }

    if (
      hostname.includes("google.") ||
      hostname.includes("bing.com") ||
      hostname.includes("yahoo.com") ||
      hostname.includes("duckduckgo.com")
    ) {
      return "search";
    }

    if (
      hostname.includes("facebook.com") ||
      hostname.includes("instagram.com") ||
      hostname.includes("linkedin.com") ||
      hostname.includes("x.com") ||
      hostname.includes("twitter.com") ||
      hostname.includes("youtube.com")
    ) {
      return "social";
    }

    return "referral";
  } catch {
    return "unknown";
  }
}

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    const page_group = getPageGroup(pathname);
    const referrer_source =
      typeof document !== "undefined"
        ? getReferrerSource(document.referrer)
        : "unknown";

    trackEvent("page_view", {
      page_path: pathname,
      page_group,
      referrer_source,
      ai_referral: referrer_source === "ai",
    });

    // 1. Google Analytics Tracking
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("config", "G-30C78ZK2G8", {
        page_path: pathname,
        page_title: document.title,
        page_group,
      });
    }

    // 2. Meta Pixel PageView Tracking
    if (
      typeof window !== "undefined" &&
      typeof window.fbq === "function"
    ) {
      window.fbq("track", "PageView");

      // 3. Service Page Tracking
      const isServicePage =
        pathname.includes("/services/") ||
        pathname.includes("-marketing") ||
        pathname.includes("-ads") ||
        pathname.includes("seo") ||
        pathname.includes("development");
      if (isServicePage) {
        window.fbq("track", "ViewContent", {
          content_category: "Service",
        });
        trackEvent("service_intent", {
          page_path: pathname,
          page_group,
          intent_action: "view",
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
      const label =
        link.textContent?.trim().replace(/\s+/g, " ").slice(0, 80) || "";

      if (
        href.includes("/contact") ||
        href.includes("/audit") ||
        href.startsWith("tel:") ||
        href.startsWith("mailto:") ||
        href.includes("wa.me") ||
        href.includes("api.whatsapp.com") ||
        href.includes("calendar.app.google")
      ) {
        trackEvent("cta_click", {
          page_path: pathname,
          page_group: getPageGroup(pathname),
          cta_text: label,
          destination: href,
        });
      }

      // WhatsApp Tracking
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        if (
          typeof window !== "undefined" &&
          typeof window.fbq === "function"
        ) {
          window.fbq("track", "Contact", {
            content_name: "WhatsApp Click",
          });
        }
        trackEvent("contact_click", {
          page_path: pathname,
          page_group: getPageGroup(pathname),
          channel: "whatsapp",
          destination: href,
        });
      }

      // Phone Call Tracking
      if (href.startsWith("tel:")) {
        if (
          typeof window !== "undefined" &&
          typeof window.fbq === "function"
        ) {
          window.fbq("track", "Contact", {
            content_name: "Phone Call",
          });
        }
        trackEvent("contact_click", {
          page_path: pathname,
          page_group: getPageGroup(pathname),
          channel: "phone",
          destination: href,
        });
      }

      if (href.startsWith("mailto:")) {
        trackEvent("contact_click", {
          page_path: pathname,
          page_group: getPageGroup(pathname),
          channel: "email",
          destination: href,
        });
      }

      if (href.includes("calendar.app.google")) {
        trackEvent("contact_click", {
          page_path: pathname,
          page_group: getPageGroup(pathname),
          channel: "calendar",
          destination: href,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [pathname]);

  return null;
}
