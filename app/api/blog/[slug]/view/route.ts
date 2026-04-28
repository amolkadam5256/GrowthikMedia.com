import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { getPostBySlug } from "@/lib/blog/data";

export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const staticPost = getPostBySlug(slug);

    if (!staticPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    const post = await db.blogPost.upsert({
      where: { slug },
      create: {
        slug: staticPost.slug,
        title: staticPost.title,
        excerpt: staticPost.excerpt,
        author: staticPost.author.name,
        image: staticPost.featuredImage,
        isPublished: true,
        publishedAt: new Date(staticPost.publishDate),
        tags: staticPost.tags as unknown as Prisma.InputJsonValue,
        views: staticPost.views + 1,
      },
      update: {
        title: staticPost.title,
        excerpt: staticPost.excerpt,
        author: staticPost.author.name,
        image: staticPost.featuredImage,
        isPublished: true,
        publishedAt: new Date(staticPost.publishDate),
        tags: staticPost.tags as unknown as Prisma.InputJsonValue,
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
