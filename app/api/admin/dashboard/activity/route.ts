import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { db as prisma } from "@/lib/db";
import { ActivityItem } from "@/types/dashboard";

export const dynamic = "force-dynamic";

const JWT_SECRET_STR =
  process.env.NEXTAUTH_SECRET || "growthik_media_secret_secure_key_2024";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

async function verifyJWT(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as { id: string; email: string; role: string };
  } catch {
    return null;
  }
}

export async function GET(request: NextRequest) {
  const session = await verifyJWT(request);
  if (!session || !["ADMIN", "SUPER_ADMIN"].includes(String(session.role))) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const [inquiries, chatLeads, reviews] = await Promise.all([
      prisma.inquiry.findMany({
        take: 12,
        orderBy: { createdAt: "desc" },
        select: { id: true, name: true, subject: true, status: true, createdAt: true },
      }),
      prisma.chatLead.findMany({
        take: 12,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          name: true,
          intentScore: true,
          intentCategory: true,
          status: true,
          createdAt: true,
        },
      }),
      prisma.processedReview.findMany({
        take: 12,
        orderBy: { repliedAt: "desc" },
        select: {
          id: true,
          reviewer: true,
          rating: true,
          status: true,
          repliedAt: true,
        },
      }),
    ]);

    const mapped: ActivityItem[] = [
      ...inquiries.map((item) => ({
        id: item.id,
        type: "inquiry" as const,
        name: item.name,
        subject: item.subject,
        status: item.status,
        createdAt: item.createdAt,
      })),
      ...chatLeads.map((item) => ({
        id: item.id,
        type: "chat_lead" as const,
        name: item.name,
        intentScore: item.intentScore,
        intentCategory: item.intentCategory,
        status: item.status,
        createdAt: item.createdAt,
      })),
      ...reviews.map((item) => ({
        id: item.id,
        type: "review_reply" as const,
        reviewer: item.reviewer,
        rating: item.rating,
        status: item.status,
        createdAt: item.repliedAt,
      })),
    ];

    const items = mapped
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 10);

    return NextResponse.json({ items }, { status: 200 });
  } catch (error) {
    console.error("[Dashboard Activity API] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard activity" },
      { status: 500 },
    );
  }
}
