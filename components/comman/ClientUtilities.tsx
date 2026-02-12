"use client";

import dynamic from "next/dynamic";

const ScrollProgressBar = dynamic(() => import("./ScrollProgressBar"), {
  ssr: false,
});

const ProgressiveLeadCapture = dynamic(
  () => import("./ProgressiveLeadCapture"),
  { ssr: false },
);

export default function ClientUtilities() {
  return (
    <>
      <ScrollProgressBar />
      <ProgressiveLeadCapture />
    </>
  );
}
