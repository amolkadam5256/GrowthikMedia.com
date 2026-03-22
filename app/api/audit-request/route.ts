import { NextResponse } from "next/server";
import { sendEmail, TEAM_EMAIL } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, businessName, websiteUrl, website, monthlyBudget, mainGoal, goal } = data;

    const finalWebsite = websiteUrl || website || "N/A";
    const finalGoal = mainGoal || goal || "SEO Audit";
    const finalBusiness = businessName || "N/A";

    // 1. Notification to Business (TEAM)
    const teamHtml = `
      <div style="font-family: Arial; padding: 20px; color: #333;">
        <h2 style="color: #D90B1C;">🔍 New Audit Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${phone || "N/A"}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Business:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${finalBusiness}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Website:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${finalWebsite}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Budget:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${monthlyBudget || "N/A"}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Goal:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${finalGoal}</td></tr>
        </table>
        <p style="margin-top: 20px; border-left: 4px solid #D90B1C; padding-left: 10px;">ACTION REQUIRED: Generate and send audit within 48hrs.</p>
      </div>
    `;

    await sendEmail({
      to: TEAM_EMAIL,
      subject: `🔍 Audit Request: ${businessName}`,
      html: teamHtml,
      replyTo: email,
    });

    // 2. Auto-reply to User
    const userHtml = `
      <div style="font-family: Arial; padding: 20px; color: #333; max-width: 600px;">
        <h2 style="color: #D90B1C;">Your audit is booked!</h2>
        <p>Hi ${name}, you've taken a huge step toward market dominance. We've received your request for <strong>${finalBusiness === "N/A" ? finalWebsite : finalBusiness}</strong>.</p>
        <p><strong>What Happens Next:</strong></p>
        <ul>
          <li>Our technical team manually audits your website & SEO data.</li>
          <li>We'll build your custom growth roadmap including ROI projection.</li>
          <li>Your detailed report will land in your inbox within 48 hours.</li>
        </ul>
        <p>Best regards,<br>The Growthik SEO Team</p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: `Your Audit is Booked! — Growthik Media`,
      html: userHtml,
    });

    return NextResponse.json({ success: true, message: "Audit booked!" });
  } catch (error) {
    console.error("❌ Audit API Error:", error);
    return NextResponse.json({ success: false, error: "Failed." }, { status: 500 });
  }
}
