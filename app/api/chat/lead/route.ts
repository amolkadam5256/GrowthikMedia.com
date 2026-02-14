import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, phone } = await req.json();

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 1. Create or Find Lead
    let lead = await db.chatLead.findFirst({
      where: { email },
    });

    if (!lead) {
      lead = await db.chatLead.create({
        data: { name, email, phone },
      });
    }

    // 2. Create a new session for this chat session
    const session = await db.chatSession.create({
      data: {
        leadId: lead.id,
      },
    });

    return NextResponse.json({
      sessionId: session.id,
      leadId: lead.id,
    });
  } catch (error) {
    console.error("Lead API Error:", error);
    return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
  }
}
