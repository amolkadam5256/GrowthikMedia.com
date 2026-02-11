import { NextResponse } from "next/server";
import { db as prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { identifier } = await request.json();

    if (!identifier) {
      return NextResponse.json(
        { error: "Missing identifier" },
        { status: 400 },
      );
    }

    // Search for a lead with this email OR phone in the inquiries table
    const existingInquiry = await prisma.inquiry.findFirst({
      where: {
        OR: [{ email: identifier }, { phone: identifier }],
      },
    });

    return NextResponse.json({
      exists: !!existingInquiry,
      name: existingInquiry?.name || null,
    });
  } catch (error) {
    console.error("Check lead error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
