import { NextResponse } from "next/server";
import { syncBlogPosts } from "@/lib/blog/sync";

export async function GET() {
  await syncBlogPosts();
  return NextResponse.json({ message: "Synced" });
}
