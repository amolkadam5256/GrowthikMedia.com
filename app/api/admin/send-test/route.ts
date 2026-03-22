import { NextResponse } from "next/server";
import { sendEmail, TEAM_EMAILS } from "@/lib/mailer";

/**
 * API to send a test email from the Admin Template System
 */
export async function POST(req: Request) {
  try {
    const { subject, body, recipient, type } = await req.json();

    if (!recipient) {
      return NextResponse.json({ success: false, error: "Recipient required" }, { status: 400 });
    }

    const res = await sendEmail({
      to: recipient,
      subject: `[TEST] ${subject}`,
      html: `<div style="white-space: pre-wrap; font-family: sans-serif;">${body}</div>`,
    });

    if (res.success) {
      return NextResponse.json({ success: true, messageId: res.messageId });
    } else {
      return NextResponse.json({ success: false, error: res.error }, { status: 500 });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
