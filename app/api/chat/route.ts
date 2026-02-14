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
    const body = await req.json();
    const { messages, sessionId } = body;
    const apiKey = process.env.GROQ_API_KEY;

    console.log("--- CHAT API DEBUG START ---");
    console.log("Session ID provided:", sessionId || "NONE");

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      console.error("Error: No messages provided in request");
      return NextResponse.json(
        { error: "No messages provided" },
        { status: 400 },
      );
    }

    if (!apiKey) {
      console.error("CRITICAL: GROQ_API_KEY is missing from .env");
      return NextResponse.json(
        { error: "AI Engine configuration missing. Please check .env file." },
        { status: 500 },
      );
    }

    // 1. Get AI Response from Groq
    console.log("Fetching AI response from Groq...");
    let response;
    try {
      response = await fetch(
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
            max_tokens: 1000,
          }),
        },
      );
    } catch (fetchError: any) {
      console.error("Groq Network Error:", fetchError);
      return NextResponse.json(
        { error: "Failed to connect to AI service" },
        { status: 502 },
      );
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API Error Response:", errorText);
      return NextResponse.json(
        { error: `AI Service Error: ${response.statusText}` },
        { status: response.status },
      );
    }

    const data = await response.json();

    if (!data.choices || !data.choices[0]?.message?.content) {
      console.error(
        "Invalid response structure from Groq:",
        JSON.stringify(data),
      );
      return NextResponse.json(
        { error: "AI returned an invalid response format" },
        { status: 500 },
      );
    }

    const reply = data.choices[0].message.content;
    console.log("AI Response successfully retrieved.");

    // 2. Log to Database if we have a sessionId
    if (sessionId) {
      try {
        const lastUserMessage = messages[messages.length - 1];

        // Verify session exists first to avoid foreign key issues
        const sessionExists = await db.chatSession.findUnique({
          where: { id: sessionId },
        });

        if (sessionExists) {
          console.log("Logging conversation to Database...");
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
          console.log("Conversation logged.");
        } else {
          console.warn(
            `Warning: Session ID ${sessionId} not found in database. Skipping log.`,
          );
        }
      } catch (dbError) {
        console.error("DATABASE LOGGING FAILED:", dbError);
        // We still return the reply to the user even if logging fails
      }
    }

    console.log("--- CHAT API DEBUG END ---");
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("GLOBAL CHAT API ERROR:", error);
    return NextResponse.json(
      { error: "A server error occurred while processing your request." },
      { status: 500 },
    );
  }
}
