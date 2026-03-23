import { NextResponse } from "next/server";
import { sendUnifiedEmail } from "@/lib/mailer";
import { db as prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, businessName, websiteUrl, website, monthlyBudget, mainGoal, goal } = data;

    const finalWebsite = websiteUrl || website || "N/A";
    const finalGoal = mainGoal || goal || "SEO Audit";
    const finalBusiness = businessName || "N/A";

    // Combine for DB Message
    const fullMessage = `
💼 Business: ${finalBusiness}
🌐 Website: ${finalWebsite}
💰 Budget: ${monthlyBudget || "N/A"}
🎯 Goal: ${finalGoal}
    `.trim();

    // DB Logging
    let inquiryId = null;
    try {
      const inquiry = await prisma.inquiry.create({
        data: {
          name,
          email,
          phone: phone || null,
          subject: `Audit: ${finalBusiness}`,
          message: fullMessage,
          status: "NEW",
        },
      });
      inquiryId = inquiry.id;
    } catch (e) {
      console.error("❌ DB Logging Error:", e);
    }

    await sendUnifiedEmail({
      userEmail: email,
      userName: name,
      adminSubject: `New Audit Request: ${finalBusiness} [${finalWebsite}]`,
      adminData: {
        ...data,
        inquiry_id: inquiryId || "Not logged in DB",
        source: "Audit Request Form"
      },
      userSubject: `Your Audit Request Form — Growthik Media`
    });

    return NextResponse.json({ success: true, message: "Audit booked! Check your email for confirmation." });
  } catch (error) {
    console.error("❌ Audit API Error:", error);
    return NextResponse.json({ success: false, error: "Failed." }, { status: 500 });
  }
}
