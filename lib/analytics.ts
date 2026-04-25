"use client";

type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, eventName: string, params?: AnalyticsParams) => void;
    fbq?: (command: string, eventName: string, params?: AnalyticsParams) => void;
  }
}

const FB_STANDARD_EVENTS = [
  'AddPaymentInfo', 'AddToCart', 'AddToWishlist', 'CompleteRegistration',
  'Contact', 'CustomizeProduct', 'Donate', 'FindLocation', 'InitiateCheckout',
  'Lead', 'Purchase', 'Schedule', 'Search', 'StartTrial', 'SubmitApplication',
  'Subscribe', 'ViewContent', 'PageView'
];

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  // Debug logging for development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: ${eventName}`, params);
  }

  // 1. Google Tag Manager / Data Layer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...params });

  // 2. Google Analytics (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }

  // 3. Meta Pixel (Facebook)
  if (typeof window.fbq === "function") {
    const isStandard = FB_STANDARD_EVENTS.includes(eventName);
    if (isStandard) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("trackCustom", eventName, params);
    }
  }
}

export function trackLead(contentName: string, params: AnalyticsParams = {}) {
  // Track as generic form success for GTM/GA4
  trackEvent("form_submit_success", {
    content_name: contentName,
    ...params,
  });

  // Specifically track as 'Lead' for Meta Pixel
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: contentName,
      ...params,
    });
  }
}
