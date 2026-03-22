import { NextResponse } from "next/server";
import { sendEmail, TEAM_EMAIL, getUserAutoReplyHTML, getAdminNotificationHTML } from "@/lib/mailer";
import { db as prisma } from "@/lib/db";

/**
 * Unified Email API Route
 * Handles: Contact Form, Lead Form, Inquiry, etc.
 * Features: DB Logging, Admin Alert, User Auto-Reply
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message, subject, formType = "General Inquiry" } = body;

    // 1. Validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required." },
        { status: 400 }
      );
    }

    // 2. Save to Database (Logging)
    let inquiryId = null;
    try {
      const inquiry = await prisma.inquiry.create({
        data: {
          name,
          email,
          phone: phone || null,
          subject: subject || formType,
          message: message || `Source: ${formType}`,
          status: "NEW",
        },
      });
      inquiryId = inquiry.id;
    } catch (dbError) {
      console.error("❌ DB Logging Error:", dbError);
      // We continue even if DB fails, as email is higher priority
    }

    // 3. Prepare Admin Email
    const adminSubject = `🔴 New Lead: ${name} [${formType}]`;
    const adminHtml = getAdminNotificationHTML({
      name,
      email,
      phone,
      form_type: formType,
      subject: subject || "No Subject",
      message: message || "No message provided.",
      inquiry_id: inquiryId || "Not logged in DB",
      submitted_at: new Date().toLocaleString(),
    });

    // 4. Prepare User Auto-Reply
    const userSubject = `We've received your inquiry | Growthik Media`;
    const userHtml = getUserAutoReplyHTML(name);

    // 5. Send Emails (in parallel)
    const [adminResult, userResult] = await Promise.all([
      sendEmail({
        to: TEAM_EMAIL,
        subject: adminSubject,
        html: adminHtml,
        replyTo: email,
      }),
      sendEmail({
        to: email,
        subject: userSubject,
        html: userHtml,
      }),
    ]);

    return NextResponse.json({ 
      success: true, 
      message: "Lead captured successfully!",
      inquiryId
    });

  } catch (error: any) {
    console.error("❌ API Route Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
