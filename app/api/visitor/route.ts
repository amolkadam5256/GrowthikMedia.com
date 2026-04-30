import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const { path, referrer } = await req.json();
    const headersList = await headers();
    
    // Get basic info
    const userAgent = headersList.get("user-agent");
    const forwardedFor = headersList.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "unknown";

    await db.visitor.create({
      data: {
        path,
        referrer,
        userAgent,
        ip,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Visitor log error:", error);
    return NextResponse.json({ error: "Failed to log visitor" }, { status: 500 });
  }
}
