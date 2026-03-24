import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { 
  getAuthorizedClient, 
  fetchUnrepliedReviews, 
  replyToReview, 
  generateAIResponse 
} from "@/lib/google-business";
import { sendEmail, getReviewThankYouHTML } from "@/lib/mailer";

// Utility for rate limiting (delays)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * PRODUCTION GOOGLE REVIEWS AUTO-REPLY SYSTEM
 * Flow:
 * 1. Auth via Service Account
 * 2. Fetch all active Google Business configs from DB
 * 3. For each config, fetch unreplied reviews from Google
 * 4. Filter out reviews already processed locally
 * 5. Generate AI response via Gemini
 * 6. Post reply to Google with Retry & Rate Limiting
 * 7. Mark as processed in DB
 * 8. (Optional) Send Thank You email
 */
/**
 * Helper: API Authorization & Dev Bypass
 * Prevents unauthorized access and safely logs attempts without exposing secrets.
 */
function validateCronAuth(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");
  
  // 1. Development Bypass
  if (process.env.NODE_ENV === "development" && request.headers.get("x-dev-bypass") === "true") {
    console.log("[AUTH] Development bypass active.");
    return { ok: true };
  }

  // 2. Production Security Checks
  if (!cronSecret) {
    console.error("[AUTH] CRON_SECRET is missing from environment variables!");
    return { ok: false, status: 500, error: "Internal Server Error", message: "Server misconfiguration" };
  }

  if (!authHeader) {
    console.warn(`[AUTH] Missing Authorization header from IP: ${request.headers.get('x-forwarded-for') || 'unknown'}`);
    return { ok: false, status: 401, error: "Unauthorized", message: "Missing Authorization header" };
  }

  if (!authHeader.startsWith("Bearer ")) {
    console.warn(`[AUTH] Invalid Authorization format.`);
    return { ok: false, status: 401, error: "Unauthorized", message: "Invalid format. Use 'Bearer <token>'" };
  }

  const token = authHeader.split(" ")[1];
  if (token !== cronSecret) {
    console.warn(`[AUTH] Invalid token attempt from IP: ${request.headers.get('x-forwarded-for') || 'unknown'}`);
    return { ok: false, status: 401, error: "Unauthorized", message: "Invalid security token" };
  }

  return { ok: true };
}

export async function GET(request: Request) {
  const startTime = Date.now();
  
  // Security Check
  const authStatus = validateCronAuth(request);
  if (!authStatus.ok) {
    return NextResponse.json(
      { error: authStatus.error, message: authStatus.message },
      { status: authStatus.status }
    );
  }

  console.log("[CRON] Starting Google Reviews Auto-Reply sync...");

  const results = {
    success: true,
    totalAccounts: 0,
    totalReviewsFound: 0,
    repliedCount: 0,
    emailsSent: 0,
    errors: [] as { account: string; error: string }[],
    logs: [] as string[],
    durationMs: 0
  };

  try {
    // 1. Fetch active configs
    const configs = await db.googleConfig.findMany({
      where: { isActive: true },
    });

    results.totalAccounts = configs.length;

    if (configs.length === 0) {
      results.logs.push("No active Google Business configurations found.");
      return NextResponse.json(results);
    }

    // Initialize Auth (once for all accounts if using a single Service Account)
    const authClient = await getAuthorizedClient();

    for (const config of configs) {
      const accountLogs: string[] = [];
      accountLogs.push(`Processing account: ${config.email} (${config.businessName})`);

      try {
        // 2. Fetch reviews from Google
        const unrepliedReviews = await fetchUnrepliedReviews(
          authClient, 
          config.accountId!, 
          config.locationId!
        );

        accountLogs.push(`Fetched ${unrepliedReviews.length} unreplied reviews from Google.`);
        results.totalReviewsFound += unrepliedReviews.length;

        for (const review of unrepliedReviews) {
          try {
            // 3. Duplicate Check: Check local DB
            const existing = await db.processedReview.findUnique({
              where: { reviewId: review.name },
            });

            if (existing && (existing.status === "SUCCESS" || existing.reply)) {
              accountLogs.push(`Skipping review ${review.name} - already replied.`);
              continue;
            }

            // 4. Generate AI Reply
            accountLogs.push(`Generating AI reply for review by ${review.reviewer?.displayName || 'Anonymous'}...`);
            const replyText = await generateAIResponse(review.starRating, review.comment);

            // 5. Post to Google with Rate Limiting
            // Add a small delay (1s) between requests to avoid hitting rate limits
            await delay(1000); 

            // Retry logic for Posting to Google
            let retryCount = 0;
            const maxRetries = 2;
            let posted = false;

            while (retryCount <= maxRetries && !posted) {
              try {
                await replyToReview(authClient, review.name, replyText);
                posted = true;
              } catch (postErr: any) {
                retryCount++;
                if (retryCount <= maxRetries) {
                  accountLogs.push(`Retry ${retryCount}/${maxRetries} for review ${review.name} after error: ${postErr.message}`);
                  await delay(2000 * retryCount); // Exponential backoff
                } else {
                  throw postErr;
                }
              }
            }

            // 6. Database Update
            const reviewerEmail = review.reviewer?.email || null;
            await db.processedReview.upsert({
              where: { reviewId: review.name },
              create: {
                reviewId: review.name,
                reviewer: review.reviewer?.displayName || "Anonymous",
                reviewerEmail: reviewerEmail,
                rating: String(review.starRating),
                comment: review.comment || "",
                reply: replyText,
                status: "SUCCESS",
              },
              update: {
                status: "SUCCESS",
                reply: replyText,
                reviewerEmail: reviewerEmail,
              },
            });

            results.repliedCount++;
            accountLogs.push(`Successfully replied to review ${review.name}`);

            // 7. Send Thank You Email (Internal logic)
            if (reviewerEmail) {
              try {
                await sendEmail({
                  to: reviewerEmail,
                  subject: `Thank you for your ${review.starRating}-star review! ⭐`,
                  html: getReviewThankYouHTML(review.reviewer.displayName, review.starRating, replyText)
                });
                results.emailsSent++;
              } catch (emailErr: any) {
                console.error(`Email send failed for ${reviewerEmail}:`, emailErr.message);
              }
            }
          } catch (reviewErr: any) {
            const errMsg = `Failed to process review ${review.name}: ${reviewErr.message}`;
            console.error(errMsg);
            accountLogs.push(`[ERROR] ${errMsg}`);
            
            // Mark as FAILED in DB so we don't keep retrying if it's a persistent issue
            await db.processedReview.upsert({
              where: { reviewId: review.name },
              create: {
                reviewId: review.name,
                status: "FAILED",
                error: reviewErr.message
              },
              update: {
                status: "FAILED",
                error: reviewErr.message
              }
            });
          }
        }

        // Update lastSync timestamp
        await db.googleConfig.update({
          where: { id: config.id },
          data: { lastSync: new Date(), isActive: true }, // Ensure active stay active
        });

      } catch (accountErr: any) {
        const errorMsg = accountErr.message;
        results.errors.push({ account: config.email, error: errorMsg });
        accountLogs.push(`[CRITICAL] Error for ${config.email}: ${errorMsg}`);
        
        // Deactivate if auth fails completely
        if (errorMsg.includes("401") || errorMsg.includes("auth")) {
           await db.googleConfig.update({
             where: { id: config.id },
             data: { isActive: false }
           });
        }
      } finally {
        results.logs.push(...accountLogs);
      }
      
      // Delay between accounts
      await delay(2000);
    }
  } catch (globalErr: any) {
    console.error("[CRON] Global Automation Error:", globalErr.message);
    results.success = false;
    results.logs.push(`[CRITICAL] Global failure: ${globalErr.message}`);
  }

  results.durationMs = Date.now() - startTime;
  console.log(`[CRON] Automation cycle finished in ${results.durationMs}ms. Replied: ${results.repliedCount}`);
  
  return NextResponse.json(results);
}
