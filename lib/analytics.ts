"use client";

export type AnalyticsParams = Record<
  string,
  string | number | boolean | null | undefined
>;

export type MetaStandardEvent =
  | "AddPaymentInfo"
  | "AddToCart"
  | "AddToWishlist"
  | "CompleteRegistration"
  | "Contact"
  | "CustomizeProduct"
  | "Donate"
  | "FindLocation"
  | "InitiateCheckout"
  | "Lead"
  | "Purchase"
  | "Schedule"
  | "Search"
  | "StartTrial"
  | "SubmitApplication"
  | "Subscribe"
  | "ViewContent"
  | "PageView";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (command: string, eventName: string, params?: AnalyticsParams) => void;
    fbq?: (command: string, eventName: string, params?: AnalyticsParams) => void;
  }
}

export const META_STANDARD_EVENTS: MetaStandardEvent[] = [
  "AddPaymentInfo",
  "AddToCart",
  "AddToWishlist",
  "CompleteRegistration",
  "Contact",
  "CustomizeProduct",
  "Donate",
  "FindLocation",
  "InitiateCheckout",
  "Lead",
  "Purchase",
  "Schedule",
  "Search",
  "StartTrial",
  "SubmitApplication",
  "Subscribe",
  "ViewContent",
  "PageView",
];

const META_STANDARD_EVENT_SET = new Set<string>(META_STANDARD_EVENTS);

function enrichParams(params: AnalyticsParams) {
  const pageParams =
    typeof window === "undefined"
      ? {}
      : {
          page_location: window.location.href,
          page_path: window.location.pathname,
          page_title: document.title,
        };

  return {
    ...pageParams,
    ...params,
  };
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const eventParams = enrichParams(params);

  // Debug logging for development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: ${eventName}`, eventParams);
  }

  // 1. Google Tag Manager / Data Layer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventParams });

  // 2. Google Analytics (gtag)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
  }

  // 3. Meta Pixel (Facebook)
  if (typeof window.fbq === "function") {
    const isStandard = META_STANDARD_EVENT_SET.has(eventName);
    if (isStandard) {
      window.fbq("track", eventName, eventParams);
    } else {
      window.fbq("trackCustom", eventName, eventParams);
    }
  }
}

export function trackMetaStandardEvent(
  eventName: MetaStandardEvent,
  params: AnalyticsParams = {},
) {
  trackEvent(eventName, params);
}

export function trackLead(contentName: string, params: AnalyticsParams = {}) {
  // Track as generic form success for GTM/GA4
  trackEvent("form_submit_success", {
    content_name: contentName,
    ...params,
  });

  trackMetaStandardEvent("Lead", {
    content_name: contentName,
    content_category: "Lead Form",
    ...params,
  });
}

export function trackContact(contentName: string, params: AnalyticsParams = {}) {
  trackMetaStandardEvent("Contact", {
    content_name: contentName,
    content_category: "Contact",
    ...params,
  });
}

export function trackRegistration(
  contentName: string,
  params: AnalyticsParams = {},
) {
  trackMetaStandardEvent("CompleteRegistration", {
    content_name: contentName,
    status: true,
    ...params,
  });
}
