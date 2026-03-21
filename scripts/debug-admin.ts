import { db } from "./lib/db";
import bcrypt from "bcryptjs";

async function checkAdmin() {
  const email = "admingrowthikmedia.com";
  const password = "Admin@123";

  console.log("Checking admin in DB...");
  const admin = await db.admin.findUnique({
    where: { email },
  });

  if (!admin) {
    console.log("Admin not found in DB!");
    return;
  }

  console.log("Admin found:", admin.email);
  console.log("Admin isActive:", admin.isActive);
  console.log("Admin role:", admin.role);

  const match = await bcrypt.compare(password, admin.password!);
  console.log("Password matches DB hash:", match);

  await db.$disconnect();
}

checkAdmin();
