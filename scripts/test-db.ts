import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function test() {
  try {
    console.log("Testing connection...");
    const adminCount = await prisma.admin.count();
    console.log("Admin count:", adminCount);

    const admin = await prisma.admin.findFirst();
    console.log("First admin email:", admin?.email);
    console.log("Has password:", !!admin?.password);
  } catch (e) {
    console.error(
      "Connection failed:",
      e instanceof Error ? e.message : String(e),
    );
  } finally {
    await prisma.$disconnect();
  }
}

test();
