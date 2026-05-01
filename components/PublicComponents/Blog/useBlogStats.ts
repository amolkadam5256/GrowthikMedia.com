"use client";

import { useEffect, useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog/types";

type BlogStat = {
  views: number;
  likesCount: number;
  commentsCount: number;
};

type BlogStats = Record<string, BlogStat>;

export function useBlogPostsWithStats(posts: BlogPost[]) {
  const [stats, setStats] = useState<BlogStats>({});

  useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      try {
        const res = await fetch("/api/blog/stats", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (isMounted && data && typeof data === "object") {
          setStats(data);
        }
      } catch (error) {
        console.error("Failed to load blog stats:", error);
      }
    }

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  return useMemo(
    () =>
      posts.map((post) => {
        const stat = stats[post.slug];
        return stat ? { ...post, ...stat } : post;
      }),
    [posts, stats],
  );
}
