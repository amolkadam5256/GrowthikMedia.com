import { Metadata } from "next";
import { headers } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { ThemeToggleButton } from "@/components/comman/header/ThemeToggleButton";

export const metadata: Metadata = {
  title: "Admin Dashboard - Growthik Media",
};

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production"
);

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get token from cookies via headers
  const headersList = await headers();
  const cookieHeader = headersList.get("cookie") || "";

  let token = "";
  const cookies = cookieHeader.split(";");
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");
    if (name === "authToken") {
      token = value;
      break;
    }
  }

  // Verify token and check admin role
  let user: any = null;
  if (token) {
    try {
      const verified = await jwtVerify(token, JWT_SECRET);
      user = verified.payload;

      // Check if user is admin
      if (user.role !== "ADMIN") {
        redirect("/");
      }
    } catch (error) {
      // Token invalid
      redirect("/admin/login");
    }
  } else {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0A0A0A] dark:to-[#1a1a1a] flex">
      <main className="w-full min-h-screen flex-1">{children}</main>
    </div>
  );
}
