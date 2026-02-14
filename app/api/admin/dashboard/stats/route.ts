import { NextResponse } from "next/server";
import { db as prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // 1. Fetch Counts in Parallel for Performance
    const [
      adminsCount,
      servicesCount,
      projectsCount,
      blogPostsCount,
      newInquiriesCount,
      totalInquiriesCount,
      chatLeadsCount,
    ] = await Promise.all([
      prisma.admin.count(),
      prisma.service.count(),
      prisma.portfolioProject.count(),
      prisma.blogPost.count(),
      prisma.inquiry.count({ where: { status: "NEW" } }),
      prisma.inquiry.count(),
      prisma.chatLead.count(),
    ]);

    // 2. Fetch Recent Activities
    // limiting to small numbers to keep payload light
    const recentInquiries = await prisma.inquiry.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        subject: true,
        createdAt: true,
        status: true,
      },
    });

    const recentProjects = await prisma.portfolioProject.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        client: true,
        createdAt: true,
      },
    });

    const recentBlogs = await prisma.blogPost.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        title: true,
        createdAt: true,
        isPublished: true,
      },
    });

    // 3. Construct the response
    return NextResponse.json({
      counts: {
        admins: adminsCount,
        services: servicesCount,
        projects: projectsCount,
        blogs: blogPostsCount,
        newInquiries: newInquiriesCount,
        totalInquiries: totalInquiriesCount,
        chatLeads: chatLeadsCount,
      },
      recentActivity: {
        inquiries: recentInquiries,
        projects: recentProjects,
        blogs: recentBlogs,
      },
    });
  } catch (error) {
    console.error("[Dashboard Stats API] Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats" },
      { status: 500 },
    );
  }
}
