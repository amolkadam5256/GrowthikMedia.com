import { NextResponse } from "next/server";
import { CONTACT_INFO } from "@/constants/contact";

const INDEXNOW_URL = "https://api.indexnow.org/indexnow";
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "5adfb5166d66cb35e95c0605b5f6ad93";
const HOST = CONTACT_INFO.website.replace(/^https?:\/\//, "").replace(/\/$/, "");

/**
 * API Route to submit URLs to IndexNow (Bing, Yandex, etc.)
 * Usage: POST /api/indexnow
 * Body: { urls: ["https://example.com/page1", ...] }
 */
export async function POST(req: Request) {
  try {
    const { urls } = await req.json();

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json({ error: "urls array is required" }, { status: 400 });
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${CONTACT_INFO.website}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    };

    const response = await fetch(INDEXNOW_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`IndexNow API error: ${response.status} - ${errorText}`);
    }

    return NextResponse.json({
      success: true,
      message: `${urls.length} URLs submitted to IndexNow successfully.`,
      status: response.status,
    });
  } catch (error: any) {
    console.error("IndexNow Submission Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * GET request for manual testing (optional)
 */
export async function GET() {
  return NextResponse.json({
    message: "IndexNow API is ready. Use POST to submit URLs.",
    config: {
      host: HOST,
      keyLocation: `${CONTACT_INFO.website}/${INDEXNOW_KEY}.txt`,
    },
  });
}
