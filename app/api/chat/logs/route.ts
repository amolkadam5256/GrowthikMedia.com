import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const leads = await db.chatLead.findMany({
      include: {
        sessions: {
          include: {
            messages: {
              orderBy: {
                createdAt: "asc",
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("Fetch Chat Logs Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch logs" },
      { status: 500 },
    );
  }
}
