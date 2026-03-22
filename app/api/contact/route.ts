import { NextResponse } from "next/server";
import { sendEmail, TEAM_EMAIL } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message, service } = data;
    const finalService = subject || service || "General Inquiry";

    // 1. Notification to Business (TEAM)
    const teamHtml = `
      <div style="font-family: Arial; padding: 20px; color: #333;">
        <h2 style="color: #D90B1C;">New Website Enquiry</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${phone || "N/A"}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Service:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${finalService}</td></tr>
          <tr><td style="padding: 10px; border: 1px solid #eee;"><strong>Message:</strong></td><td style="padding: 10px; border: 1px solid #eee;">${message}</td></tr>
        </table>
      </div>
    `;

    await sendEmail({
      to: TEAM_EMAIL,
      subject: `New Enquiry: ${name} — ${finalService}`,
      html: teamHtml,
      replyTo: email,
    });

    // 2. Auto-reply to User
    const userHtml = `
      <div style="font-family: Arial; padding: 20px; color: #333; max-width: 600px;">
        <h2 style="color: #D90B1C;">Thanks ${name}!</h2>
        <p>We've received your enquiry and our team will reply within 24 hours.</p>
        <div style="margin: 25px 0;">
           <a href="https://www.growthikmedia.com/services/" style="background: #D90B1C; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-right: 15px;">Our Services</a>
           <a href="https://wa.me/91XXXXXXXXXX" style="color: #25D366; text-decoration: none; font-weight: bold;">WhatsApp Us</a>
        </div>
        <p>Best regards,<br>The Growthik Media Team</p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: `We've received your enquiry | Growthik Media`,
      html: userHtml,
    });

    return NextResponse.json({ success: true, message: "Enquiry sent!" });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json({ success: false, error: "Failed." }, { status: 500 });
  }
}
