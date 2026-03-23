import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAuthorizedClient, fetchUnrepliedReviews, replyToReview, generateAIResponse } from "@/lib/google-business";

export async function GET(request: Request) {
  // CRON SECURE ACCESS - check authorization header
  const authHeader = request.headers.get("authorization");
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch all active Google Business configs
  const configs = await db.googleConfig.findMany({
    where: { isActive: true },
  });

  if (configs.length === 0) {
    return NextResponse.json({ message: "No active Google Business configurations found." });
  }

  const results = {
    totalAccounts: configs.length,
    processed: 0,
    repliedCount: 0,
    errors: [] as string[],
  };

  for (const config of configs) {
    try {
      const auth = await getAuthorizedClient(config.email);
      const unrepliedReviews = await fetchUnrepliedReviews(auth, config.accountId!, config.locationId!);

      for (const review of unrepliedReviews) {
        // Double check in DB if we already replied to avoid redundancy
        const existing = await db.processedReview.findUnique({
          where: { reviewId: review.name },
        });
        if (existing && existing.status === "SUCCESS") continue;

        // Generate AI response
        const replyText = await generateAIResponse(review.starRating, review.comment);

        // Post to Google
        await replyToReview(auth, review.name, replyText);

        // Mark as processed
        await db.processedReview.upsert({
          where: { reviewId: review.name },
          create: {
            reviewId: review.name,
            reviewer: review.reviewer.displayName,
            rating: review.starRating,
            comment: review.comment,
            reply: replyText,
            status: "SUCCESS",
          },
          update: {
            status: "SUCCESS",
            reply: replyText,
          },
        });

        results.repliedCount++;
      }

      await db.googleConfig.update({
        where: { id: config.id },
        data: { lastSync: new Date() },
      });

      results.processed++;
    } catch (err: any) {
      console.error(`Error processing reviews for ${config.email}:`, err.message);
      results.errors.push(`${config.email}: ${err.message}`);
    }
  }

  return NextResponse.json(results);
}
