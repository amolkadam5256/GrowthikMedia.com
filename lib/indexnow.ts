import { CONTACT_INFO } from "@/constants/contact";

/**
 * Utility function to submit URLs to IndexNow (Bing, Yandex, etc.)
 */
export async function submitToIndexNow(urls: string[]) {
  if (!urls || urls.length === 0) return;

  const INDEXNOW_API_ENDPOINT = `${CONTACT_INFO.website}/api/indexnow`;

  try {
    const response = await fetch(INDEXNOW_API_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ urls }),
    });

    const data = await response.json();

    if (data.success) {
      console.log(`[IndexNow] Successfully submitted ${urls.length} URLs.`);
      return true;
    } else {
      console.error(`[IndexNow] Submission failed:`, data.error);
      return false;
    }
  } catch (error) {
    console.error(`[IndexNow] Fetch error:`, error);
    return false;
  }
}

/**
 * Automatically submit all URLs from sitemap to IndexNow
 */
export async function submitSitemapToIndexNow() {
  const sitemapUrl = `${CONTACT_INFO.website}/sitemap.xml`;

  try {
    // Instead of fetching XML and parsing (slow), we can use the logic from sitemap.ts
    // but for simplicity, let's assume we want to submit current page + common pages
    const commonUrls = [
      CONTACT_INFO.website,
      `${CONTACT_INFO.website}/services/seo-services-in-pune`,
      `${CONTACT_INFO.website}/services/website-design-company-in-pune`,
      `${CONTACT_INFO.website}/blog/website-cost-in-pune`,
    ];

    return await submitToIndexNow(commonUrls);
  } catch (error) {
    console.error(`[IndexNow] Sitemap submission failed:`, error);
    return false;
  }
}
