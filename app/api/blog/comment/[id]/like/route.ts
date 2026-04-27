import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const comment = await db.blogComment.update({
      where: { id },
      data: {
        likesCount: {
          increment: 1,
        },
      },
    });

    return NextResponse.json({ likesCount: comment.likesCount });
  } catch (error) {
    console.error("Comment like error:", error);
    return NextResponse.json({ error: "Failed to like comment" }, { status: 500 });
  }
}
