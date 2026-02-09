import { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export const metadata: Metadata = {
  title: "Admin Dashboard | Growthik Media",
};

// Use the exact same secret strategy as API and Middleware
const JWT_SECRET_STR =
  process.env.NEXTAUTH_SECRET || "growthik_media_secret_secure_key_2024";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

export default async function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token) {
    redirect("/admin/login");
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);

    // Allow both roles
    if (payload.role !== "ADMIN" && payload.role !== "SUPER_ADMIN") {
      console.log("[Layout] Forbidden role:", payload.role);
      redirect("/admin/login");
    }

    // Success - render the dashboard children
    return (
      <div className="min-h-screen w-full bg-[#0f172a] flex">
        <main className="w-full min-h-screen flex-1">{children}</main>
      </div>
    );
  } catch (err: any) {
    console.error("[Layout] Auth failed:", err.message);
    redirect("/admin/login");
  }
}
