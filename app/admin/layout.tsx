// app/layout.tsx
import "../assets/styles/globals.css";
import "../assets/styles/fonts.css";
import { Metadata } from "next";
import { headers } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin Dashboard - Growthik Media",
  description: "Admin dashboard for Growthik Media",
};

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production"
);

export default async function AdminLayout({
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
      redirect("/auth/login");
    }
  } else {
    redirect("/auth/login");
  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#0A0A0A] dark:to-[#1a1a1a]">
          {/* Admin Header */}
          <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a1a1a] sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">GM</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    Growthik Media Admin
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Dashboard
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {user?.email}
                  </span>
                </div>

                <a
                  href="/api/auth/logout"
                  className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition-colors"
                >
                  Logout
                </a>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
