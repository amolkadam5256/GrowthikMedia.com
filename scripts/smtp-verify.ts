import { sendEmail, TEAM_EMAIL, getAdminNotificationHTML, getUserAutoReplyHTML } from '../lib/mailer';

const testData = {
  name: "SMTP Test Bot",
  email: "growthikmedia@gmail.com", 
  phone: "1234567890",
  message: "This is a direct SMTP test using lib/mailer.ts",
  form_type: "Direct SMTP Test",
  submitted_at: new Date().toLocaleString()
};

async function runDirectTest() {
  console.log("------------------------------------------");
  console.log("🚀 STARTING DIRECT SMTP TEST...");
  console.log("------------------------------------------");
  console.log(`SMTP User: ${process.env.EMAIL_USER}`);
  console.log(`Recipient: ${TEAM_EMAIL}`);
  console.log("------------------------------------------");

  // 1. Generate HTML
  const adminHtml = getAdminNotificationHTML(testData);
  const userHtml = getUserAutoReplyHTML("SMTP Test Bot");

  console.log("📨 Sending Admin Notification...");
  const adminResult = await sendEmail({
    to: TEAM_EMAIL,
    subject: "🔴 SMTP TEST: New Lead Alert",
    html: adminHtml
  });

  if (adminResult.success) {
    console.log("✅ Admin Email Sent Successfully!");
    console.log(`MessageID: ${adminResult.messageId}`);
  } else {
    console.error("❌ Admin Email FAILED!");
    console.error(adminResult.error);
  }

  console.log("\n📨 Sending User Auto-Reply...");
  const userResult = await sendEmail({
    to: testData.email,
    subject: "✨ SMTP TEST: Auto-Reply Confirmation",
    html: userHtml
  });

  if (userResult.success) {
    console.log("✅ User Auto-Reply Sent Successfully!");
  } else {
    console.error("❌ User Auto-Reply FAILED!");
  }

  console.log("------------------------------------------");
  console.log("🏁 TEST COMPLETE!");
  console.log("------------------------------------------");
  process.exit(adminResult.success && userResult.success ? 0 : 1);
}

runDirectTest().catch(err => {
  console.error("💥 CRITICAL ERROR:", err);
  process.exit(1);
});
