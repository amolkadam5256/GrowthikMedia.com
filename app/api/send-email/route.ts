import { NextResponse } from "next/server";
import { sendUnifiedEmail, getUserAutoReplyHTML, getAdminNotificationHTML } from "@/lib/mailer";
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
    
    // Dynamically build data for email (all fields from body)
    const adminData = {
      ...body,
      inquiry_id: inquiryId || "Not logged in DB",
      submitted_at: new Date().toLocaleString(),
      form_type: formType,
    };

    // 4. Send Emails (Unified Parallel Sequence)
    const { adminResult, userResult } = await sendUnifiedEmail({
      userEmail: email,
      userName: name,
      adminSubject: adminSubject,
      adminData: adminData,
      userSubject: `We've received your inquiry | Growthik Media`,
    });

    // 6. Final Status Check
    // If BOTH fail, it's a critical failure
    if (!adminResult.success && !userResult.success) {
      return NextResponse.json({ 
        success: false, 
        error: "Failed to send notification emails. Please contact us directly.",
        inquiryId
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: adminResult.success ? "Enquiry received! Our team will contact you soon." : "Enquiry received, but notification delay occurred.",
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
