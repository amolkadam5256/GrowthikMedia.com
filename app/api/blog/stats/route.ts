import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const posts = await db.blogPost.findMany({
      where: { isPublished: true },
      select: {
        slug: true,
        views: true,
        likesCount: true,
        _count: {
          select: {
            comments: {
              where: { isApproved: true },
            },
          },
        },
      },
    });

    return NextResponse.json(
      posts.reduce<Record<string, { views: number; likesCount: number; commentsCount: number }>>(
        (stats, post) => {
          stats[post.slug] = {
            views: post.views,
            likesCount: post.likesCount,
            commentsCount: post._count.comments,
          };
          return stats;
        },
        {},
      ),
    );
  } catch (error) {
    console.error("Blog stats error:", error);
    return NextResponse.json({ error: "Failed to fetch blog stats" }, { status: 500 });
  }
}
