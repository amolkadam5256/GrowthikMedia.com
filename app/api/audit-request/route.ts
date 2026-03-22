import { NextResponse } from "next/server";
import { sendUnifiedEmail, sendEmail, TEAM_EMAIL } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, businessName, websiteUrl, website, monthlyBudget, mainGoal, goal } = data;

    const finalWebsite = websiteUrl || website || "N/A";
    const finalGoal = mainGoal || goal || "SEO Audit";
    const finalBusiness = businessName || "N/A";

    await sendUnifiedEmail({
      userEmail: email,
      userName: name,
      adminSubject: `🔍 Audit Request: ${finalBusiness} [${finalWebsite}]`,
      adminData: {
        name,
        email,
        phone: phone || "N/A",
        business_name: finalBusiness,
        website: finalWebsite,
        monthly_budget: monthlyBudget || "N/A",
        goal: finalGoal,
      },
      userSubject: `Your Audit is Booked! — Growthik Media`
    });

    return NextResponse.json({ success: true, message: "Audit booked!" });
  } catch (error) {
    console.error("❌ Audit API Error:", error);
    return NextResponse.json({ success: false, error: "Failed." }, { status: 500 });
  }
}
