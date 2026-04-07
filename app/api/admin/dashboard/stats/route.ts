import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { performance } from "perf_hooks";
import { db as prisma } from "@/lib/db";
import { DashboardStats } from "@/types/dashboard";

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

  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const queryStart = performance.now ? performance.now() : Date.now();

  try {
    const [
      inquiriesTotal,
      inquiriesNew,
      inquiriesReplied,
      inquiriesWeek,
      chatTotal,
      chatHighIntent,
      chatPending,
      portfolioTotal,
      portfolioFeatured,
      blogTotal,
      blogPublished,
      blogDrafts,
      googleSuccess,
      googleErrors,
      adminsTotal,
      adminsActive,
      adminsSuper,
      googleCronActive,
    ] = await Promise.all([
      prisma.inquiry.count(),
      prisma.inquiry.count({ where: { status: { in: ["NEW", "new"] } } }),
      prisma.inquiry.count({
        where: { status: { in: ["REPLIED", "RESOLVED", "replied", "resolved"] } },
      }),
      prisma.inquiry.count({ where: { createdAt: { gte: weekAgo } } }),
      prisma.chatLead.count(),
      prisma.chatLead.count({ where: { intentScore: { gte: 70 } } }),
      prisma.chatLead.count({
        where: { status: { in: ["PENDING", "pending", "NEW", "new"] } },
      }),
      prisma.portfolioProject.count(),
      prisma.portfolioProject.count({ where: { isFeatured: true } }),
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { isPublished: true } }),
      prisma.blogPost.count({ where: { isPublished: false } }),
      prisma.processedReview.count({
        where: { status: { in: ["SUCCESS", "success"] } },
      }),
      prisma.processedReview.count({
        where: { status: { in: ["FAILED", "ERROR", "failed", "error"] } },
      }),
      prisma.admin.count(),
      prisma.admin.count({ where: { isActive: true } }),
      prisma.admin.count({ where: { role: "SUPER_ADMIN" } }),
      prisma.googleConfig.count({ where: { isActive: true } }),
    ]);

    const apiLatencyMs = Math.round(
      (performance.now ? performance.now() : Date.now()) - queryStart,
    );

    const smtpConnected = Boolean(
      process.env.EMAIL_USER &&
        (process.env.EMAIL_PASS || process.env.EMAIL_PASSWORD),
    );

    const groqConnected = Boolean(process.env.GROQ_API_KEY);

    const payload: DashboardStats = {
      inquiries: {
        total: inquiriesTotal,
        newCount: inquiriesNew,
        repliedCount: inquiriesReplied,
        thisWeek: inquiriesWeek,
      },
      chatLeads: {
        total: chatTotal,
        highIntent: chatHighIntent,
        pending: chatPending,
      },
      portfolioProjects: {
        total: portfolioTotal,
        featured: portfolioFeatured,
      },
      blogPosts: {
        total: blogTotal,
        published: blogPublished,
        drafts: blogDrafts,
      },
      googleReviews: {
        totalReplied: googleSuccess,
        pendingErrors: googleErrors,
      },
      admins: {
        total: adminsTotal,
        active: adminsActive,
        superAdmins: adminsSuper,
      },
      system: {
        dbStatus: "operational",
        apiLatencyMs,
        smtpConnected,
        groqConnected,
        googleCronConfigured: googleCronActive > 0,
      },
    };

    return NextResponse.json(payload, { status: 200 });
  } catch (error) {
    console.error("[Dashboard Stats API] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats" },
      { status: 500 },
    );
  }
}
