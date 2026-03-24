const WEBSITE_URL = "https://www.growthikmedia.com";
const INDEXNOW_URL = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "5adfb5166d66cb35e95c0605b5f6ad93";
const HOST = "www.growthikmedia.com";

async function submit() {
  console.log("🚀 Starting post-build IndexNow submission...");

  const urls = [
    WEBSITE_URL,
    `${WEBSITE_URL}/backlink-strategy`,
    `${WEBSITE_URL}/services/seo-services-in-pune`,
    `${WEBSITE_URL}/blog/website-cost-in-pune`,
    `${WEBSITE_URL}/audit`,
  ];

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${WEBSITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  try {
    const response = await fetch(INDEXNOW_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log(`✅ IndexNow submission successful! Submitted ${urls.length} URLs.`);
    } else {
      const text = await response.text();
      console.error(`❌ IndexNow submission failed: ${response.status} - ${text}`);
    }
  } catch (err) {
    console.error("❌ Error during IndexNow submission:", err.message);
  }
}

submit();
