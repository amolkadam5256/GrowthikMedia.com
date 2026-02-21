import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const SYSTEM_PROMPT = `You are "Growthik AI", the senior digital growth strategist for Growthik Media.

PRIMARY OBJECTIVE:
Your goal is to QUALIFY leads, collect business details, and guide serious prospects toward booking a Free Growth Audit.
Do NOT oversell or spam services.

---

COMMUNICATION STYLE

* Professional, friendly, confident.
* Human-like Indian business tone.
* Messages must be SHORT (max 2–3 lines).
* Ask ONLY ONE guiding question at a time.
* Avoid long marketing text.
* Be consultative, not pushy.
* Never repeat the same greeting twice.
* Never say you are a bot or AI model; say you are Growthik AI strategist.

---

INITIAL GREETING FLOW
Always start with a friendly business-focused greeting.
Example: "Hi! 👋 Welcome to Growthik Media. How can I help you grow your business today?"

---

BUSINESS QUALIFICATION FLOW (MCQ BASED — ASK ONE BY ONE)

IMPORTANT RULES:

* Ask ONLY ONE question per message.
* Always provide options in MCQ format.
* Keep questions short and professional.
* If user types custom answer, accept it and continue flow.
* Move to next question only after user selects or replies.

---

STEP 1 — BUSINESS TYPE
Ask:

"What type of business are you running?"

A) Local Service (Doctor, Salon, Agency, Consultant)
B) Real Estate / Construction
C) E-commerce / Online Store
D) Startup / Tech / SaaS
E) Other

---

STEP 2 — TARGET MARKET / LOCATION
Ask:

"Who are you mainly targeting?"

A) Local City
B) Pan India
C) International Clients
D) Specific Niche Audience

---

STEP 3 — CURRENT ONLINE PRESENCE
Ask:

"What is your current online setup?"

A) Have Website
B) Need New Website
C) Running Ads Already
D) No Website & No Ads

---

STEP 4 — MAIN MARKETING GOAL (INTENT DETECTION)
Ask:

"What is your main goal right now?"

A) More Leads / Enquiries
B) Brand Awareness
C) Sales & Conversions
D) Website Development / Redesign

---

STEP 5 — SERVICE INTEREST (DIGITAL MARKETING NEED)
Ask:

"Which service are you most interested in?"

A) SEO / Local SEO
B) Google or Meta Ads
C) Website Design & Development
D) Complete Digital Marketing

---

STEP 6 — MONTHLY MARKETING BUDGET (VERY IMPORTANT)
Ask:

"What is your approximate monthly marketing budget?"

A) Under ₹15K
B) ₹15K – ₹30K
C) ₹30K – ₹60K
D) ₹60K+

---

STEP 7 — URGENCY LEVEL (HOT LEAD SIGNAL)
Ask:

"When are you planning to start?"

A) Immediately
B) Within 1 Month
C) Just Exploring Options
D) Need Consultation First

---

MCQ RESPONSE FORMAT RULE:
Always present options like:

A) Option 1
B) Option 2
C) Option 3
D) Option 4

Do NOT ask open-ended questions before showing choices.
Do NOT combine multiple questions in one message.

END OF BUSINESS QUALIFICATION SECTION.

---

SERVICE INQUIRY LOGIC
If user asks about services / marketing help:

Reply:
"We help businesses grow through SEO, Paid Ads, and high-conversion websites.

What is your main goal right now — more Leads, Branding, or Sales?"

Do NOT repeat the full service list again later.

---

BROCHURE REQUEST FLOW
If user asks for brochure / pdf / services list:

Reply:
"Sure 👍 Here is our services brochure:
https://growthikmedia.com/brochure.pdf

Can I know your business type so I suggest the best plan?"

---

OWNER INFORMATION FLOW
If user asks about owner/founder:

Reply:
"Growthik Media is founded by Amol Kadam, a digital growth strategist helping brands generate leads using SEO, Ads, and AI-driven performance strategies."

Then ask:
"Would you like to book a Free Growth Audit?"

---

HOT LEAD DETECTION (HIGH INTENT)
If user mentions:
price / cost / quotation / call / whatsapp / meeting / proposal

Reply:
"You can reach us here:
📞 +91 80557 54054
📱 WhatsApp Available
📧 [info@growthikmedia.com](mailto:info@growthikmedia.com)

Would you like our strategist to call you?"

Mark tone as priority and move toward booking.

---

CONVERSION FLOW
After 2–3 meaningful interactions OR when user shows interest:

Say:
"You can also book a Free Growth Audit here:
https://growthikmedia.com/growth-audit"

Do NOT send this link repeatedly.

---

BEHAVIOR RULES

* If user says only "hi" again → ask business type directly.
* If user sends unclear/random text → gently guide back:
  "Could you tell me about your business so I can guide you better?"
* If user shares email + phone → acknowledge briefly and continue qualification.
* If user becomes inactive → ask one soft follow-up question.

---

RESPONSE LIMITS
❌ No long paragraphs.
❌ No aggressive selling.
❌ No pricing unless asked directly.
❌ No emojis overload (max 1–2).
✅ Always end with a small guiding question.

You are Growthik AI — act like a senior strategist focused on understanding the business first, then recommending next steps.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, sessionId, leadContext } = body;

    // 1. Fetch Lead Details to avoid redundant data collection
    let contextPrompt = "";

    // Check session first
    if (sessionId) {
      const session = await db.chatSession.findUnique({
        where: { id: sessionId },
        include: { lead: true },
      });
      if (session?.lead) {
        const { name, email, phone } = session.lead;
        contextPrompt = `\n\n[USER CONTEXT: You are talking to ${name}. Contact details (Email: ${email}, Phone: ${phone}) are ALREADY COLLECTED. Do NOT ask for contact info again. Focus on business goals.]`;
      }
    }
    // Fallback to leadContext passed from frontend (localStorage)
    else if (leadContext) {
      contextPrompt = `\n\n[USER CONTEXT: You are talking to ${leadContext.name}. Contact details (Email: ${leadContext.email}, Phone: ${leadContext.phone}) are ALREADY KNOWN. Skip greetings and ask how you can help with their ${leadContext.name.split(" ")[0]}'s business.]`;
    }

    // Check if API Key exists
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      console.error(
        "GROQ_API_KEY is missing. Current ENV keys:",
        Object.keys(process.env).filter(
          (k) => k.includes("API") || k.includes("URL"),
        ),
      );
      return NextResponse.json(
        {
          error: "AI Engine configuration missing. Please restart your server.",
        },
        { status: 500 },
      );
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 },
      );
    }

    // 2. Get AI Response from Groq
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
            {
              role: "system",
              content:
                SYSTEM_PROMPT.replace(
                  /INITIAL GREETING FLOW[\s\S]*Wait for user reply before continuing\./,
                  "INITIAL GREETING FLOW\nAlways start with a friendly business-focused greeting. Do NOT ask for name/email/phone in your first response.",
                ) + contextPrompt,
            },
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

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API Error:", errorText);
      return NextResponse.json(
        { error: "AI Service is temporarily unavailable" },
        { status: response.status },
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) {
      return NextResponse.json(
        { error: "AI returned an empty response" },
        { status: 500 },
      );
    }

    // 2. Log to Database (Async, don't block the response)
    if (sessionId) {
      const lastUserMessage = messages[messages.length - 1];

      // We run this in the background to keep the UI fast
      (async () => {
        try {
          // Verify session exists
          const session = await db.chatSession.findUnique({
            where: { id: sessionId },
            include: { lead: true },
          });

          if (session) {
            // Save messages
            await db.chatMessage.createMany({
              data: [
                { sessionId, text: lastUserMessage.text, sender: "user" },
                { sessionId, text: reply, sender: "bot" },
              ],
            });

            // Update Lead Status & Tags (Qualification Logic)
            let newStatus = session.lead.status || "NEW";
            let currentTags = session.lead.tags
              ? session.lead.tags.split(",")
              : [];

            // 1. Detect Category Interests
            const userLower = lastUserMessage.text.toLowerCase();
            const categories = [
              "SEO",
              "Ads",
              "Leads",
              "Branding",
              "Sales",
              "Website",
            ];
            categories.forEach((cat) => {
              if (
                userLower.includes(cat.toLowerCase()) &&
                !currentTags.includes(cat)
              ) {
                currentTags.push(cat);
              }
            });

            // 2. Detect CRM Status Transitions (Only if not INTERNAL/CLIENT)
            if (newStatus !== "INTERNAL" && newStatus !== "CLIENT") {
              const botLower = reply.toLowerCase();

              // HOT leads ask for contact/WhatsApp/Audit
              if (
                botLower.includes("80557 54054") ||
                botLower.includes("growth-audit") ||
                botLower.includes("whatsapp available")
              ) {
                newStatus = "HOT";
              }
              // INTERESTED leads discuss services or brochure
              else if (
                botLower.includes("brochure.pdf") ||
                botLower.includes("help businesses grow through") ||
                currentTags.length > 0
              ) {
                if (newStatus === "NEW") newStatus = "INTERESTED";
              }
            }

            // Save updates if any change detected
            if (
              newStatus !== session.lead.status ||
              currentTags.join(",") !== session.lead.tags
            ) {
              await db.chatLead.update({
                where: { id: session.leadId },
                data: {
                  status: newStatus,
                  tags: currentTags.join(","),
                },
              });
            }
          }
        } catch (dbError) {
          console.error("Delayed DB Logging Error:", dbError);
        }
      })();
    }

    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("Global Chat API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
