"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function VisitorTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const logVisit = async () => {
      try {
        const fullPath = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
        const referrer = document.referrer;

        await fetch("/api/visitor", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path: fullPath,
            referrer: referrer || "direct",
          }),
        });
      } catch (err) {
        // Silently fail as this shouldn't break the UI
      }
    };

    logVisit();
  }, [pathname, searchParams]);

  return null;
}
