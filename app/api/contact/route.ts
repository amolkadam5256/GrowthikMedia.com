import { NextResponse } from "next/server";
import { sendUnifiedEmail, sendEmail, TEAM_EMAIL } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, subject, message, service } = data;
    const finalService = subject || service || "General Inquiry";

    await sendUnifiedEmail({
      userEmail: email,
      userName: name,
      adminSubject: `New Enquiry: ${name} — ${finalService}`,
      adminData: {
        name,
        email,
        phone: phone || "N/A",
        service: finalService,
        message: message || "No message provided.",
      }
    });

    return NextResponse.json({ success: true, message: "Enquiry sent!" });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json({ success: false, error: "Failed." }, { status: 500 });
  }
}
