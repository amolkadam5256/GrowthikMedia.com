"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Lazy-load both widgets - neither is needed for the first paint.
// Splitting them into separate chunks means the browser only parses
// the code it needs, keeping main-thread time low during page load.
const ScrollProgressBar = dynamic(() => import("./ScrollProgressBar"), {
  ssr: false,
});
const ProgressiveLeadCapture = dynamic(
  () => import("./ProgressiveLeadCapture"),
  { ssr: false },
);
const FloatingSocials = dynamic(() => import("./FloatingSocials"), {
  ssr: false,
});
const FloatingWhatsApp = dynamic(() => import("./FloatingWhatsApp"), {
  ssr: false,
});
const GrowthStrategistBot = dynamic(
  () => import("../AIChatBot/AIChatBot"),
  { ssr: false },
);

export default function ClientUtilities() {
  const [loadStep, setLoadStep] = useState(0);

  useEffect(() => {
    // 1. Initial trigger: prioritize painting basic UI first
    const schedule =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? (cb: () => void) =>
            (
              window as Window &
                typeof globalThis & {
                  requestIdleCallback: (cb: () => void) => number;
                }
            ).requestIdleCallback(cb)
        : (cb: () => void) => setTimeout(cb, 500);

    const id = schedule(() => setLoadStep(1));
    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (
          window as Window &
            typeof globalThis & { cancelIdleCallback: (id: number) => void }
        ).cancelIdleCallback(id as unknown as number);
      }
    };
  }, []);

  useEffect(() => {
    // 2. Continuous staging: load heavier elements one by one with gaps
    if (loadStep > 0 && loadStep < 3) {
      const delay = loadStep === 1 ? 1500 : 3000;
      const timer = setTimeout(() => {
        setLoadStep((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [loadStep]);

  if (loadStep === 0) return null;

  return (
    <>
      <ScrollProgressBar />
      {/* Social contacts: fast to parse, high priority for conversion */}
      {loadStep >= 1 && (
        <>
          <FloatingSocials />
          <FloatingWhatsApp />
        </>
      )}
      {/* Interaction forms: medium weight */}
      {loadStep >= 2 && <ProgressiveLeadCapture />}
      {/* Heavy chatbot: last to load so TBT stays low during initial session */}
      {loadStep >= 3 && <GrowthStrategistBot />}
    </>
  );
}
