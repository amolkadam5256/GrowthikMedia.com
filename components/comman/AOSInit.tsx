"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 400,         // Fast but visible animation
      easing: "ease-out",   // Snappier easing for quick reveal
      once: true,            // Animate once — stops tracking after trigger (better perf)
      mirror: false,         // Don't animate out — reduces scroll overhead
      offset: 120,           // Trigger when element is 120px from bottom of viewport
      delay: 0,              // No global delay
      anchorPlacement: "top-bottom",
    });

    // No cleanup needed when once:true — AOS self-removes listeners on elements
    // that have already animated.
  }, []);

  return null;
}
