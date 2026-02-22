import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Re-use an existing global prisma instance if possible, but for simplicity creating a new one or using the one from the project if we know its path
const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter") || "ALL";

    // Same baseline query for Inquiry Leads
    let whereClause = {};
    if (filter !== "ALL") {
      // Map frontend status (active/idle) to possible backend states if needed
      // but status inside the model is usually NEW, CONTACTED, RESOLVED
      whereClause = { status: filter === "NEW" ? "NEW" : filter };
    }

    const inquiries = await prisma.inquiry.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(inquiries);
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiry leads" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const newInquiry = await prisma.inquiry.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        subject: data.subject || "Manual Entry",
        message: data.message || "",
        status: data.status || "NEW",
      },
    });

    return NextResponse.json(newInquiry);
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { error: "Failed to create inquiry lead" },
      { status: 500 },
    );
  }
}
