"use client";

import { useState, useEffect } from "react";

export default function ConsentBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (level: "granted" | "denied") => {
    localStorage.setItem("cookie_consent", level);
    setShow(false);

    // Update GTM Consent Mode
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: level,
        analytics_storage: level,
        ad_user_data: level,
        ad_personalization: level,
      });
    }

    // Push to dataLayer
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "consent_update",
        consent_level: level,
      });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-100 dark:border-gray-700">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
          Cookie Consent
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
          We use cookies to enhance your experience, analyze site traffic, and serve ROI-focused ads. 
          By clicking "Accept All", you agree to our use of cookies as described in our privacy policy.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => handleConsent("granted")}
            className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Accept All
          </button>
          <button
            onClick={() => handleConsent("denied")}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 font-semibold rounded-lg transition-colors text-sm"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
