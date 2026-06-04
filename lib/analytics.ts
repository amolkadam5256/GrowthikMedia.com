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
    fbq?: (
      command: string,
      eventName: string,
      params?: AnalyticsParams,
      options?: { eventID?: string }
    ) => void;
    fbqInitialized?: boolean;
  }
}

// ==========================================
// Google Ads Conversion Config
// ==========================================
export const GOOGLE_ADS_ID = "AW-CONVERSION_ID"; // TODO: Replace with your real Google Ads Conversion ID
export const GOOGLE_ADS_CONVERSIONS = {
  whatsapp_click:  "AW-CONVERSION_ID/WHATSAPP_LABEL",   // TODO: Replace
  phone_call:      "AW-CONVERSION_ID/PHONE_LABEL",       // TODO: Replace
  lead:            "AW-CONVERSION_ID/LEAD_LABEL",        // TODO: Replace
  contact:         "AW-CONVERSION_ID/CONTACT_LABEL",     // TODO: Replace
};

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

/** Generate a unique ID for event deduplication (Meta CAPI / Google Enhanced Conversions) */
export function generateEventId() {
  return "ev-" + Math.random().toString(36).substring(2, 11) + "-" + Date.now();
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  // Use provided event_id or generate a new one
  const event_id = (params.event_id as string) || generateEventId();
  const eventParams = { ...enrichParams(params), event_id };

  // Debug logging for development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: ${eventName}`, eventParams);
  }

  // 1. Google Tag Manager / Data Layer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: eventName, ...eventParams });

  // 2. Meta Pixel (Facebook)
  if (typeof window.fbq === "function") {
    const isStandard = META_STANDARD_EVENT_SET.has(eventName);
    if (isStandard) {
      window.fbq("track", eventName, eventParams, { eventID: event_id });
    } else {
      window.fbq("trackCustom", eventName, eventParams, { eventID: event_id });
    }
  }
}

export function trackMetaStandardEvent(
  eventName: MetaStandardEvent,
  params: AnalyticsParams = {},
) {
  trackEvent(eventName, params);
}

// ==========================================
// Meta Pixel Standard Event Helpers
// ==========================================

export function trackAddPaymentInfo(params: AnalyticsParams = {}) {
  trackMetaStandardEvent("AddPaymentInfo", params);
}

export function trackAddToCart(contentName: string, params: AnalyticsParams = {}) {
  trackMetaStandardEvent("AddToCart", {
    content_name: contentName,
    ...params,
  });
}

export function trackAddToWishlist(contentName: string, params: AnalyticsParams = {}) {
  trackMetaStandardEvent("AddToWishlist", {
    content_name: contentName,
    ...params,
  });
}

export function trackCompleteRegistration(contentName: string, params: AnalyticsParams = {}) {
  trackMetaStandardEvent("CompleteRegistration", {
    content_name: contentName,
    status: true,
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

export function trackCustomizeProduct(contentName: string, params: AnalyticsParams = {}) {
  trackMetaStandardEvent("CustomizeProduct", {
    content_name: contentName,
    ...params,
  });
}

export function trackDonate(params: AnalyticsParams = {}) {
  trackMetaStandardEvent("Donate", params);
}

export function trackFindLocation(params: AnalyticsParams = {}) {
  trackMetaStandardEvent("FindLocation", params);
}

export function trackInitiateCheckout(params: AnalyticsParams = {}) {
  trackMetaStandardEvent("InitiateCheckout", params);
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

export function trackPurchase(value: number, currency: string = 'INR', params: AnalyticsParams = {}) {
  trackMetaStandardEvent("Purchase", {
    value,
    currency,
    ...params,
  });
}

export function trackSchedule(params: AnalyticsParams = {}) {
  trackMetaStandardEvent("Schedule", params);
}

export function trackSearch(searchString: string, params: AnalyticsParams = {}) {
  trackMetaStandardEvent("Search", {
    search_string: searchString,
    ...params,
  });
}

export function trackStartTrial(params: AnalyticsParams = {}) {
  trackMetaStandardEvent("StartTrial", params);
}

export function trackSubmitApplication(params: AnalyticsParams = {}) {
  trackMetaStandardEvent("SubmitApplication", params);
}

export function trackSubscribe(params: AnalyticsParams = {}) {
  trackMetaStandardEvent("Subscribe", params);
}

export function trackViewContent(contentName: string, params: AnalyticsParams = {}) {
  trackMetaStandardEvent("ViewContent", {
    content_name: contentName,
    ...params,
  });
}

// Maintain backward compatibility for trackRegistration
export const trackRegistration = trackCompleteRegistration;

// ==========================================
// Google Ads Conversion Helpers
// ==========================================

/**
 * Fire a Google Ads conversion event.
 * conversionLabel should be the full "AW-ID/label" string.
 */
export function fireGoogleAdsConversion(
  conversionLabel: string,
  params: AnalyticsParams = {},
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "google_ads_conversion",
    conversion_label: conversionLabel,
    ...enrichParams(params),
  });
}

// ==========================================
// Contact Channel Helpers
// ==========================================

/** Track a WhatsApp click — GA4 + GTM + Meta Pixel + Google Ads */
export function trackWhatsAppClick(params: AnalyticsParams = {}) {
  // GA4 / GTM custom event
  trackEvent("whatsapp_click", {
    channel: "whatsapp",
    content_category: "Contact",
    content_name: "WhatsApp Click",
    ...params,
  });
  // Meta Pixel standard
  trackMetaStandardEvent("Contact", {
    content_name: "WhatsApp Click",
    content_category: "whatsapp",
    ...params,
  });
  // Google Ads conversion
  fireGoogleAdsConversion(GOOGLE_ADS_CONVERSIONS.whatsapp_click, params);
}

/** Track a phone call click — GA4 + GTM + Meta Pixel + Google Ads */
export function trackPhoneCall(params: AnalyticsParams = {}) {
  // GA4 / GTM custom event
  trackEvent("phone_call", {
    channel: "phone",
    content_category: "Contact",
    content_name: "Phone Call",
    ...params,
  });
  // Meta Pixel standard
  trackMetaStandardEvent("Contact", {
    content_name: "Phone Call",
    content_category: "phone",
    ...params,
  });
  // Google Ads conversion
  fireGoogleAdsConversion(GOOGLE_ADS_CONVERSIONS.phone_call, params);
}
