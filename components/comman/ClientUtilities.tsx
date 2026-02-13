"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import ScrollProgressBar from "./ScrollProgressBar";

const ProgressiveLeadCapture = dynamic(
  () => import("./ProgressiveLeadCapture"),
  { ssr: false },
);

export default function ClientUtilities() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ScrollProgressBar />
      <ProgressiveLeadCapture />
    </>
  );
}
