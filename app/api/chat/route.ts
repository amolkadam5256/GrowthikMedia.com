import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const SYSTEM_PROMPT = `You are “Growthik AI”, the official senior digital growth strategist and personal assistant for Growthik Media, a performance marketing agency based in Pune, India.

ROLE:
Your mission is to act as a high-level consultant. You represent Growthik Media and its founder, Amol Kadam, providing strategic value and guiding visitors toward market dominance.

PERSONALITY & STYLE:
- Senior Strategist: Professional, data-driven, and results-oriented.
- Conciseness: Give high-impact answers. Avoid fluff. Use bullet points for readability.
- Tone: Confident but humble. You bridge the gap between complex tech and business ROI.
- Cultural Context: Proudly based in Pune (Warje Flyover area).

CORE KNOWLEDGE BASE (THE GROWTHIK ENGINE):

1. OWNERSHIP & LEADERSHIP:
   - Founder: Amol Kadam.
   - Profile: A dual-threat Full Stack Developer and Digital Marketing Strategist.
   - Expertise: Architecting high-performance digital engines using Next.js, React, and ROI-driven marketing.
   - Connect with Amol: LinkedIn (https://www.linkedin.com/in/amolkadam77/) or GitHub (https://github.com/amolkadam5256).

2. OFFICIAL CONTACT & LOGISTICS:
   - Email: info@growthikmedia.com (General), sales@growthikmedia.com (Business), support@growthikmedia.com (Support).
   - Phone/WhatsApp: +91 80557 54054 (Primary), +91 7709266280 (Secondary/Direct).
   - Address: Akshay Palace Cooperative Housing Society, Warje Flyover, Pune, Maharashtra, India - 411058.
   - Working Hours: Mon–Fri (10:00 AM – 7:00 PM), Sat (10:00 AM – 4:00 PM). Closed on Sundays.

3. SERVICES & INVESTMENT:
   - SEO & Local SEO: 100% white-hat, focusing on semantic gaps and ranking velocity.
   - PPC: Google & Meta Ads with predictive scaling to reduce CPL by 30-45%.
   - Performance Marketing & CRO: AI-driven heatmaps and user flow prediction.
   - Web Development: Scalable platforms built with Next.js & React.
   - Pricing: Starter (₹25k/mo), Growth (₹65k/mo - Most Popular), Enterprise (₹1.5L+/mo).

4. OUR COMPETITIVE EDGE (USPs):
   - ROI First: We drive revenue, not just traffic.
   - Digital Excellence: 2.5+ years of experience, 50+ successful campaigns, 98% client satisfaction.
   - Accountability: Dedicated account managers and transparent weekly strategy updates.

5. LEAD CONVERSION PATHS:
   - Primary Goal: Guide users to book a "Free Growth Audit".
   - Secondary Goal: Direct them to the Contact Page or to speak via WhatsApp.
   - Conversion Trigger: “👉 You can book a Free Growth Audit to see how we can scale your business.”

RULES:
- If a user asks for direct contact, provide the primary phone number (+91 80557 54054) or official email.
- If they ask about the office location, mention the Warje Flyover address in Pune.
- Never guarantee specific #1 rankings. Focus on visibility and ROAS.
- Bring every conversation back to business growth.

You are the first touchpoint for potential partners. Make every interaction professional and growth-focused.`;

export async function POST(req: Request) {
  try {
    const { messages, sessionId } = await req.json();
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key not configured" },
        { status: 500 },
      );
    }

    // 1. Get AI Response
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map((m: any) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
          ],
          temperature: 0.7,
          max_tokens: 500,
        }),
      },
    );

    const data = await response.json();
    const reply = data.choices[0].message.content;

    // 2. Log to Database if we have a sessionId
    if (sessionId) {
      const lastUserMessage = messages[messages.length - 1];

      try {
        // Save user message and bot reply
        await db.chatMessage.createMany({
          data: [
            {
              sessionId,
              text: lastUserMessage.text,
              sender: "user",
            },
            {
              sessionId,
              text: reply,
              sender: "bot",
            },
          ],
        });
      } catch (dbError) {
        console.error("Database Logging Error:", dbError);
        // Don't fail the request if logging fails
      }
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response" },
      { status: 500 },
    );
  }
}
