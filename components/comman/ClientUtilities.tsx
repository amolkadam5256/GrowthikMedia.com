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
  () => import("../PublicComponents/AIChatBot/AIChatBot"),
  { ssr: false },
);

export default function ClientUtilities() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback when available so the browser prioritises
    // painting before we trigger the widget chunk downloads.
    const schedule =
      typeof window !== "undefined" && "requestIdleCallback" in window
        ? (cb: () => void) =>
            (
              window as Window &
                typeof globalThis & {
                  requestIdleCallback: (cb: () => void) => number;
                }
            ).requestIdleCallback(cb)
        : (cb: () => void) => setTimeout(cb, 200);

    const id = schedule(() => setMounted(true));
    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (
          window as Window &
            typeof globalThis & { cancelIdleCallback: (id: number) => void }
        ).cancelIdleCallback(id as unknown as number);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ScrollProgressBar />
      <ProgressiveLeadCapture />
      <FloatingSocials />
      <FloatingWhatsApp />
      <GrowthStrategistBot />
    </>
  );
}
