"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      // Global settings optimized for fast scrolling
      duration: 400, // Fast but visible animation (30ms is too fast to see)
      easing: "ease-out", // Snappier easing for quick reveal
      once: false, // Animation repeats when scrolling back
      mirror: true, // Elements animate out while scrolling past them
      offset: 120, // Trigger when element is 120px from bottom of viewport
      delay: 0, // No global delay
      anchorPlacement: "top-bottom", // Trigger when top of element hits bottom of viewport
    });

    // Refresh AOS on route changes
    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
}
