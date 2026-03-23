import { NextResponse } from "next/server";
import { sendEmail, getAdminReplyHTML } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const { to, subject, body } = await req.json();

    if (!to || !subject || !body) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await sendEmail({
      to,
      subject: `RE: ${subject}`,
      html:    getAdminReplyHTML(body),
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
