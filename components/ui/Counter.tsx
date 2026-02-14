"use client";

import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export default function Counter({
  value,
  direction = "up",
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        }).format(latest);
      }
    });
  }, [springValue, decimals]);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref} />
      {suffix}
    </span>
  );
}
