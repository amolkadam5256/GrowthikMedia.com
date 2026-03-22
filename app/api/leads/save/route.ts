import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from "@/lib/db";
import { sendEmail, TEAM_EMAILS, getAdminNotificationHTML, getUserAutoReplyHTML } from "@/lib/mailer";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service } = await request.json();

    // 1. Save to DB
    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        message: `Service interest: ${service}`,
        subject: "Progressive Lead Capture",
        status: "NEW",
      },
    });

    // 2. Notifications
    const adminHtml = getAdminNotificationHTML({
      name,
      email,
      phone,
      service,
      source: "Progressive Lead Capture (Legacy Route)",
      inquiry_id: inquiry.id
    });

    const userHtml = getUserAutoReplyHTML(name);

    await Promise.all([
      sendEmail({
        to: TEAM_EMAILS[0],
        subject: `🔴 New Lead: ${name} (Progressive)`,
        html: adminHtml,
        replyTo: email,
      }),
      sendEmail({
        to: email,
        subject: `We've received your inquiry | Growthik Media`,
        html: userHtml,
      }),
    ]);

    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    console.error("Save lead error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
