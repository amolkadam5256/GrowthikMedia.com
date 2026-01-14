"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 800, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether animation should happen only once
      mirror: true, // Whether elements should animate out while scrolling past them
      offset: 100, // Offset (in px) from the original trigger point
      delay: 0, // Delay in milliseconds
      anchorPlacement: "top-bottom", // Defines which position of the element should trigger the animation
    });

    // Refresh AOS on route changes
    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
}
