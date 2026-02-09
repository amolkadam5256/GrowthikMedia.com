import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const JWT_SECRET_STR =
  process.env.NEXTAUTH_SECRET || "growthik_media_secret_secure_key_2024";
const JWT_SECRET = new TextEncoder().encode(JWT_SECRET_STR);

export default async function AdminRootRedirect() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (token) {
    try {
      await jwtVerify(token, JWT_SECRET);
      redirect("/admin/dashboard");
    } catch {
      redirect("/admin/login");
    }
  } else {
    redirect("/admin/login");
  }
}
