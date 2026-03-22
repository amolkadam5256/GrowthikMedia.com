import { NextResponse } from "next/server";
import { sendUnifiedEmail } from "@/lib/mailer";
import { db as prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message, service } = data;
    const finalService = subject || service || "General Inquiry";

    // DB Logging
    let inquiryId = null;
    try {
      const inquiry = await prisma.inquiry.create({
        data: {
          name,
          email,
          phone: phone || null,
          subject: `Contact: ${finalService}`,
          message: message || `Service Interested: ${finalService}`,
          status: "NEW",
        },
      });
      inquiryId = inquiry.id;
    } catch (dbError) {
      console.error("❌ DB Logging Error:", dbError);
    }

    await sendUnifiedEmail({
      userEmail: email,
      userName: name,
      adminSubject: `New Enquiry: ${name} — ${finalService}`,
      adminData: {
        ...data,
        inquiry_id: inquiryId || "Not logged in DB",
        service: finalService,
        source: "Main Contact Form"
      }
    });

    return NextResponse.json({ success: true, message: "Enquiry sent! We'll be in touch." });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json({ success: false, error: "Failed." }, { status: 500 });
  }
}
