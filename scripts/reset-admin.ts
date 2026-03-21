import { db } from "./lib/db";
import bcrypt from "bcryptjs";

async function resetAdmin() {
  const email = "admingrowthikmedia.com";
  const newPassword = "Admin@123";
  const hashedPassword = await bcrypt.hash(newPassword, 10);

  console.log("Resetting admin password for:", email);

  const updatedAdmin = await db.admin.update({
    where: { email },
    data: {
      password: hashedPassword,
      isActive: true,
      role: "ADMIN",
    },
  });

  console.log("Admin updated successfully!");
  console.log("New Email (copy this):", updatedAdmin.email);
  console.log("New Password (copy this):", newPassword);

  await db.$disconnect();
}

resetAdmin();
