import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const { to, subject, body } = await req.json();

    if (!to || !subject || !body) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const html = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #D90B1C; padding: 20px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0;">Growthik Media Response</h2>
        </div>
        <div style="padding: 30px; background-color: #ffffff;">
          <div style="white-space: pre-wrap;">${body}</div>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee;">
             <p style="margin: 0; font-weight: bold; color: #D90B1C;">Best regards,</p>
             <p style="margin: 5px 0 0 0; font-weight: bold;">Growthik Media Team</p>
          </div>
        </div>
        <div style="background-color: #f5f5f5; padding: 15px; text-align: center; font-size: 11px; color: #888;">
          <p style="margin: 0;">This email was sent from the Growthik Media Dashboard.</p>
        </div>
      </div>
    `;

    const result = await sendEmail({
      to,
      subject: `RE: ${subject}`,
      html,
    });

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Reply API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
