import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // We use upsert so that if the post doesn't exist in DB yet (it's from static data), 
    // we don't crash, though ideally we should have a seed script.
    // For now, let's just increment if it exists.
    const post = await db.blogPost.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ views: post.views });
  } catch (error) {
    console.error("View increment error:", error);
    return NextResponse.json({ error: "Failed to increment view" }, { status: 500 });
  }
}
