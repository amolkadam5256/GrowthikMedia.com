'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag('config', 'G-30C78ZK2G8', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
}
