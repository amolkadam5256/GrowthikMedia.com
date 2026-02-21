import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, initialMessage } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const INTERNAL_EMAILS = [
      "growthikmedia@gmail.com",
      "amolkadam1274@gmail.com",
    ];

    // 1. Find or Update Lead by Email OR Phone
    let lead = await db.chatLead.findFirst({
      where: {
        OR: [{ email }, { phone }],
      },
    });

    const isInternal = INTERNAL_EMAILS.includes(email.toLowerCase());
    const initialStatus = isInternal ? "INTERNAL" : "NEW";

    if (lead) {
      // Update existing lead info
      lead = await db.chatLead.update({
        where: { id: lead.id },
        data: {
          name,
          email,
          phone,
          status: lead.status === "INTERNAL" ? "INTERNAL" : lead.status, // Preserve internal status
        },
      });
    } else {
      // Create new lead
      lead = await db.chatLead.create({
        data: {
          name,
          email,
          phone,
          status: initialStatus,
        },
      });
    }

    // 2. Create NEW Session (Every time as per rules)
    const session = await db.chatSession.create({
      data: {
        leadId: lead.id,
      },
    });

    // 3. Save initial bot message if provided
    if (initialMessage) {
      await db.chatMessage.create({
        data: {
          sessionId: session.id,
          text: initialMessage,
          sender: "bot",
        },
      });
    }

    return NextResponse.json({
      sessionId: session.id,
      leadId: lead.id,
      isReturning:
        !!lead.createdAt &&
        new Date().getTime() - new Date(lead.createdAt).getTime() > 1000,
    });
  } catch (error) {
    console.error("Lead API Error:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
