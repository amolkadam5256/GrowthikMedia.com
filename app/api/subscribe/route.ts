import { NextResponse } from "next/server";
import { sendEmail, TEAM_EMAILS } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { email, name } = data;

    // 1. Notification to Team
    await sendEmail({
      to: TEAM_EMAILS[0],
      subject: `New Blog Subscriber: ${email}`,
      html: `<p>New newsletter subscriber: <strong>${email}</strong>${name ? ` (Name: ${name})` : ""}</p>`,
    });

    // 2. Welcome to User
    const userHtml = `
      <div style="font-family: Arial; padding: 20px; color: #333; max-width: 600px;">
        <h2 style="color: #D90B1C;">Welcome to Growthik Media!</h2>
        <p>Hi ${name || "there"}, you're now subscribed to the latest digital growth insights from Pune.</p>
        <p><strong>Check out our top guides while you wait:</strong></p>
        <ul>
          <li><a href="https://www.growthikmedia.com/blog/complete-seo-guide/">Complete Beginner Guide to SEO</a></li>
          <li><a href="https://www.growthikmedia.com/blog/website-cost-in-pune/">Website Development Cost in Pune</a></li>
        </ul>
        <hr style="margin-top: 30px; border: 0; border-top: 1px solid #eee;">
        <p style="font-size: 11px; color: #999;">Don't want these emails? <a href="#">Unsubscribe</a></p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: `Welcome to Growthik Media!`,
      html: userHtml,
    });

    return NextResponse.json({ success: true, message: "Subscribed!" });
  } catch (error) {
    console.error("❌ Subscribe API Error:", error);
    return NextResponse.json({ success: false, error: "Failed." }, { status: 500 });
  }
}
