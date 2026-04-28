import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { getPostBySlug } from "@/lib/blog/data";

// Fetch comments
export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    const comments = await db.blogComment.findMany({
      where: {
        post: { slug },
        parentId: null, // Get top-level comments
        isApproved: true,
      },
      include: {
        replies: {
          where: { isApproved: true },
          orderBy: { createdAt: "asc" },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(comments);
  } catch (error) {
    console.error("Fetch comments error:", error);
    return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
  }
}

// Add comment
export async function POST(
  req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const body = await req.json();
    const { authorName, authorEmail, content, parentId } = body;

    if (!authorName || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Static blog posts may not be synced to the database yet. Upsert the
    // current post on demand so comment submission works for newly added posts.
    let post = await db.blogPost.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (!post) {
      const staticPost = getPostBySlug(slug);

      if (!staticPost) {
        return NextResponse.json({ error: "Post not found" }, { status: 404 });
      }

      post = await db.blogPost.create({
        data: {
          slug: staticPost.slug,
          title: staticPost.title,
          excerpt: staticPost.excerpt,
          author: staticPost.author.name,
          image: staticPost.featuredImage,
          isPublished: true,
          publishedAt: new Date(staticPost.publishDate),
          tags: staticPost.tags as unknown as Prisma.InputJsonValue,
          views: staticPost.views,
        },
        select: { id: true },
      });
    }

    const comment = await db.blogComment.create({
      data: {
        postId: post.id,
        authorName,
        authorEmail,
        content,
        parentId,
      },
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error("Add comment error:", error);
    return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
  }
}
