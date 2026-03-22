import fetch from 'node-fetch';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const TEST_ENDPOINT = `${SITE_URL}/api/send-email`;

async function testFormSubmission() {
  console.log(`🧪 Testing Email System at: ${TEST_ENDPOINT}`);
  
  const testData = {
    name: "Growthik Test Bot",
    email: "growthikmedia@gmail.com", // Send to self for testing
    phone: "9876543210",
    message: "This is a test message to verify the new SMTP setup and professional templates.",
    formType: "Automated Test System",
    subject: "SMTP Verification Test"
  };

  try {
    const response = await fetch(TEST_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      console.log("✅ TEST SUCCESSFUL!");
      console.log("Response:", JSON.stringify(result, null, 2));
    } else {
      console.error("❌ TEST FAILED!");
      console.error("Status:", response.status);
      console.error("Error Details:", result.error || "Unknown error");
    }
  } catch (error) {
    console.error("❌ CONNECTION ERROR:");
    console.error(error.message);
    console.log("\n💡 Tip: Make sure your Next.js server is running (npm run dev)");
  }
}

testFormSubmission();
