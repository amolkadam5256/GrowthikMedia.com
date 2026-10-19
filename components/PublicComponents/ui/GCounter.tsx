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
  /** When true, renders the value as a plain string with no thousands separators (use for years etc.) */
  raw?: boolean;
}

export const Counter = ({
  value,
  direction = "up",
  duration = 2,
  className = "",
  prefix = "",
  suffix = "",
  decimals = 0,
  raw = false,
}: CounterProps) => {
  const formatValue = (v: number) => {
    if (raw) return String(Math.round(v));
    return Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(v);
  };

  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      motionValue.set(direction === "down" ? value : 0);
      motionValue.set(value);
    }
  }, [motionValue, isInView, value, direction]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = formatValue(latest);
      }
    });
  }, [springValue, decimals, raw]);

  return (
    <span className={className}>
      {prefix}
      <span ref={ref}>{formatValue(value)}</span>
      {suffix}
    </span>
  );
}
