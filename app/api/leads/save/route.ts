import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const { name, email, phone, service } = await request.json();

    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        phone,
        message: `Service interest: ${service}`,
        subject: "Progressive Lead Capture",
        status: "NEW",
      },
    });

    return NextResponse.json({ success: true, inquiry });
  } catch (error) {
    console.error("Save lead error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
