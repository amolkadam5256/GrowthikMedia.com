import { NextRequest, NextResponse } from "next/server";
import { db as prisma } from "@/lib/db";
import { jwtVerify } from "jose";
import bcrypt from "bcryptjs";

const JWT_SECRET_STR =
  process.env.NEXTAUTH_SECRET || "growthik_media_secret_secure_key_2024";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

async function getAuthUser(req: NextRequest) {
  const token = req.cookies.get("authToken")?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch (err) {
    return null;
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getAuthUser(req);
  const { id } = await params;

  if (!user || user.role !== "SUPER_ADMIN") {
    return NextResponse.json(
      { error: "Only Super Admin can update users" },
      { status: 403 },
    );
  }

  try {
    const { name, email, password, role, isActive } = await req.json();

    const updateData: any = {
      name,
      email,
      role,
      isActive,
    };

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedAdmin = await prisma.admin.update({
      where: { id },
      data: updateData,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
      },
    });

    return NextResponse.json(updatedAdmin);
  } catch (error) {
    console.error("Update User Error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const user = await getAuthUser(req);
  const { id } = await params;

  if (!user || user.role !== "SUPER_ADMIN") {
    return NextResponse.json(
      { error: "Only Super Admin can delete users" },
      { status: 403 },
    );
  }

  try {
    // Check if target user is Super Admin
    const targetUser = await prisma.admin.findUnique({
      where: { id },
    });

    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (targetUser.role === "SUPER_ADMIN") {
      // Find how many super admins are left
      const superAdminCount = await prisma.admin.count({
        where: { role: "SUPER_ADMIN" },
      });

      if (superAdminCount <= 1) {
        return NextResponse.json(
          { error: "Cannot delete the last Super Admin" },
          { status: 400 },
        );
      }
    }

    await prisma.admin.delete({
      where: { id },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete User Error:", error);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 },
    );
  }
}
