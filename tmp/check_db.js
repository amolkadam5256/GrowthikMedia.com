const { PrismaClient } = require("d:/Company/Growthikmedia.com/Website/GrowthikMedia.com/generated/client");
const prisma = new PrismaClient();

async function main() {
  try {
    const configs = await prisma.googleConfig.findMany();
    console.log("Google Configs counts:", configs.length);
    configs.forEach(c => {
      console.log(`- ${c.email}: active=${c.isActive}, accountId=${c.accountId}, locationId=${c.locationId}`);
    });

    const reviews = await prisma.processedReview.findMany({ take: 5 });
    console.log("Recent Processed Reviews counts:", reviews.length);
    reviews.forEach(r => {
      console.log(`- ReviewId: ${r.reviewId}, status: ${r.status}`);
    });
  } catch (e) {
    console.error("Database connection error:", e.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
