import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import * as xlsx from "xlsx";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter") || "ALL";
    const format = searchParams.get("format") || "csv";

    // Same baseline query
    const whereClause = {
      NOT: { status: "DELETED" },
    };
    if (filter !== "ALL") {
      (whereClause as any).status = filter;
    }

    const inquiries = await prisma.inquiry.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        subject: true,
        message: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (format === "json") {
      return new NextResponse(JSON.stringify(inquiries, null, 2), {
        headers: {
          "Content-Type": "application/json",
          "Content-Disposition": `attachment; filename="inquiry_leads_export.json"`,
        },
      });
    }

    if (format === "csv") {
      const header = [
        "ID,Name,Email,Phone,Subject,Message,Status,Created At,Updated At",
      ];
      const rows = inquiries.map((i) => {
        return `"${i.id}","${(i.name || "").replace(/"/g, '""')}","${(i.email || "").replace(/"/g, '""')}","${i.phone || ""}","${(i.subject || "").replace(/"/g, '""')}","${(i.message || "").replace(/"/g, '""')}","${i.status}","${i.createdAt.toISOString()}","${i.updatedAt.toISOString()}"`;
      });
      const csv = [header, ...rows].join("\n");
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="inquiry_leads_export.csv"`,
        },
      });
    }

    if (format === "xlsx" || format === "excel") {
      // Create worksheet
      const ws = xlsx.utils.json_to_sheet(
        inquiries.map((i) => ({
          ID: i.id,
          Name: i.name,
          Email: i.email,
          Phone: i.phone || "",
          Subject: i.subject || "",
          Message: i.message,
          Status: i.status,
          "Created At": i.createdAt.toISOString(),
          "Updated At": i.updatedAt.toISOString(),
        })),
      );

      const wb = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(wb, ws, "Inquiry Leads");

      // Generate buffer
      const buf = xlsx.write(wb, { type: "buffer", bookType: "xlsx" });

      return new NextResponse(buf, {
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          "Content-Disposition": `attachment; filename="inquiry_leads_export.xlsx"`,
        },
      });
    }

    return NextResponse.json(
      { error: "Invalid format requested" },
      { status: 400 },
    );
  } catch (error) {
    console.error("Export Error:", error);
    return NextResponse.json(
      { error: "Failed to generate export" },
      { status: 500 },
    );
  }
}
