"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";
import { formatNumber } from "@/lib/blog/utils";

interface BlogViewCounterProps {
  slug: string;
  initialViews: number;
}

export default function BlogViewCounter({ slug, initialViews }: BlogViewCounterProps) {
  const [views, setViews] = useState(initialViews);

  useEffect(() => {
    let isMounted = true;

    async function incrementView() {
      try {
        const res = await fetch(`/api/blog/${slug}/view`, { method: "POST" });
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && typeof data.views === "number") {
          setViews(data.views);
        }
      } catch (error) {
        console.error("View counter error:", error);
      }
    }

    incrementView();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <span className="flex items-center gap-1.5">
      <Eye className="w-4 h-4" />
      {formatNumber(views)} views
    </span>
  );
}
