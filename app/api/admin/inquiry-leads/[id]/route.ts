import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function PUT(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const p = await params;
    const { id } = p;
    const body = await request.json();

    const updated = await prisma.inquiry.update({
      where: { id },
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone,
        subject: body.subject,
        message: body.message,
        status: body.status,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update inquiry lead" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const p = await params;
    const { id } = p;

    // "Soft delete" conceptually usually implies marking status as DELETED.
    // The model currently has statuses: NEW, CONTACTED, RESOLVED.
    // I will set the status to "DELETED" so it is filtered out by default.
    const deleted = await prisma.inquiry.update({
      where: { id },
      data: {
        status: "DELETED",
      },
    });

    return NextResponse.json(deleted);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete inquiry lead" },
      { status: 500 },
    );
  }
}
