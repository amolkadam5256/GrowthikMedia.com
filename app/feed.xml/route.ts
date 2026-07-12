import { BLOG_POSTS } from "@/lib/blog/data";
import { CONTACT_INFO } from "@/constants/contact";

export function GET() {
  const items = BLOG_POSTS.slice(0, 10)
    .map(
      (post) => `
      <item>
        <title>${post.title}</title>
        <link>${CONTACT_INFO.website}/blog/${post.slug}/</link>
        <description>${post.excerpt}</description>
        <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${CONTACT_INFO.companyName} Blog</title>
      <link>${CONTACT_INFO.website}/blog/</link>
      <description>Latest articles and insights from Growthik Media.</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
