import { db } from "@/lib/db";
import { BLOG_POSTS } from "./data";

export async function syncBlogPosts() {
  try {
    for (const post of BLOG_POSTS) {
      await db.blogPost.upsert({
        where: { slug: post.slug },
        update: {
          title: post.title,
          excerpt: post.excerpt,
          author: post.author.name,
          image: post.featuredImage,
          isPublished: true,
          publishedAt: new Date(post.publishDate),
          tags: post.tags as any,
        },
        create: {
          slug: post.slug,
          title: post.title,
          excerpt: post.excerpt,
          author: post.author.name,
          image: post.featuredImage,
          isPublished: true,
          publishedAt: new Date(post.publishDate),
          tags: post.tags as any,
          views: post.views,
        },
      });
    }
    console.log("Blog posts synced successfully");
  } catch (error) {
    console.error("Sync error:", error);
  }
}
