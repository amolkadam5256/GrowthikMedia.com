"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackEvent, trackMetaStandardEvent, trackWhatsAppClick, trackPhoneCall, fireGoogleAdsConversion, GOOGLE_ADS_CONVERSIONS } from "@/lib/analytics";

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

function textIncludes(value: string, terms: string[]) {
  return terms.some((term) => value.includes(term));
}

function getElementLabel(element: HTMLElement) {
  return (
    element.getAttribute("aria-label") ||
    element.getAttribute("title") ||
    element.textContent?.trim().replace(/\s+/g, " ").slice(0, 100) ||
    ""
  );
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

    // Internal Visitor Tracking
    const logInternalVisit = async () => {
      try {
        await fetch("/api/visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path: pathname,
            referrer: typeof document !== "undefined" ? document.referrer : "direct",
          }),
        });
      } catch (err) {
        console.error("Internal tracking error:", err);
      }
    };
    logInternalVisit();

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

    // 2. Service Page Tracking (Meta Pixel & GA4)
    const isServicePage =
      pathname.includes("/services/") ||
      pathname.includes("-marketing") ||
      pathname.includes("-ads") ||
      pathname.includes("seo") ||
      pathname.includes("development");

    if (isServicePage) {
      trackEvent("ViewContent", {
        content_category: "Service",
      });
      trackEvent("service_intent", {
        page_path: pathname,
        page_group,
        intent_action: "view",
      });
    }
  }, [pathname]);

  // 3. Scroll Depth Tracking
  useEffect(() => {
    const firedThresholds = new Set<number>();
    const thresholds = [25, 50, 75, 90];

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      );
      const scrollableHeight = documentHeight - viewportHeight;

      if (scrollableHeight <= 0) return;

      const scrollPercent = Math.min(
        100,
        Math.round(((scrollTop + viewportHeight) / documentHeight) * 100),
      );

      thresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !firedThresholds.has(threshold)) {
          firedThresholds.add(threshold);
          trackEvent("scroll_depth", {
            page_path: pathname,
            page_group: getPageGroup(pathname),
            percent_scrolled: threshold,
          });
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  // 4. Global Click Event Listener for WhatsApp & Tel Links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const clickable = (e.target as HTMLElement).closest(
        "a, button, [role='button'], [data-analytics-event]",
      ) as HTMLElement | null;

      if (!clickable) return;

      const href =
        clickable instanceof HTMLAnchorElement ? clickable.href || "" : "";
      const label = getElementLabel(clickable);
      const actionText = `${label} ${href} ${
        clickable.dataset.analyticsEvent || ""
      }`.toLowerCase();
      const commonParams = {
        page_path: pathname,
        page_group: getPageGroup(pathname),
        content_name: label,
        destination: href || undefined,
      };

      const explicitEvent = clickable.dataset.analyticsEvent;
      if (explicitEvent) {
        trackEvent(explicitEvent, {
          ...commonParams,
          content_category: clickable.dataset.analyticsCategory,
          content_type: clickable.dataset.analyticsType,
          value: clickable.dataset.analyticsValue
            ? Number(clickable.dataset.analyticsValue)
            : undefined,
          currency: clickable.dataset.analyticsCurrency,
        });
      }

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
          ...commonParams,
          cta_text: label,
        });

        // Map to Meta Pixel 'Contact' or 'Lead'
        if (href.includes("/audit")) {
          trackEvent("Lead", { content_name: `Audit Request: ${label}` });
          fireGoogleAdsConversion(GOOGLE_ADS_CONVERSIONS.lead, { content_name: `Audit Request: ${label}` });
        } else if (!href.includes("wa.me") && !href.includes("api.whatsapp.com") && !href.startsWith("tel:")) {
          trackEvent("Contact", { content_name: `Contact Click: ${label}` });
          fireGoogleAdsConversion(GOOGLE_ADS_CONVERSIONS.contact, { content_name: `Contact Click: ${label}` });
        }
      }

      // Track Service & Portfolio Views
      if (href.includes("/services/") || href.includes("/portfolio/") || href.includes("/blog/")) {
        trackEvent("ViewContent", {
          content_name: label,
          content_category: href.includes("/services/") ? "Service" : href.includes("/portfolio/") ? "Portfolio" : "Blog",
          content_type: "product",
        });
      }

      if (textIncludes(actionText, ["add to cart", "cart"])) {
        trackMetaStandardEvent("AddToCart", {
          ...commonParams,
          content_category: "Commerce",
        });
      }

      if (textIncludes(actionText, ["wishlist", "save for later", "bookmark"])) {
        trackMetaStandardEvent("AddToWishlist", {
          ...commonParams,
          content_category: "Commerce",
        });
      }

      if (
        textIncludes(actionText, [
          "checkout",
          "book consultation",
          "book a call",
          "schedule call",
          "claim my free growth audit",
        ])
      ) {
        trackMetaStandardEvent("InitiateCheckout", {
          ...commonParams,
          content_category: "Lead Funnel",
        });
      }

      if (textIncludes(actionText, ["payment", "billing", "card details"])) {
        trackMetaStandardEvent("AddPaymentInfo", {
          ...commonParams,
          content_category: "Commerce",
        });
      }

      if (textIncludes(actionText, ["purchase", "buy now", "pay now", "order"])) {
        trackMetaStandardEvent("Purchase", {
          ...commonParams,
          content_category: "Commerce",
          currency: "INR",
        });
      }

      if (textIncludes(actionText, ["donate", "donation", "contribute"])) {
        trackMetaStandardEvent("Donate", {
          ...commonParams,
          content_category: "Donation",
        });
      }

      // WhatsApp Tracking — fires GA4, GTM, Meta Pixel & Google Ads
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackWhatsAppClick({
          page_path: pathname,
          page_group: getPageGroup(pathname),
          destination: href,
          cta_text: label,
        });
      }

      // Phone Call Tracking — fires GA4, GTM, Meta Pixel & Google Ads
      if (href.startsWith("tel:")) {
        trackPhoneCall({
          page_path: pathname,
          page_group: getPageGroup(pathname),
          destination: href,
          cta_text: label,
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
        trackEvent("Schedule", {
          content_name: "Google Calendar Booking",
        });
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
