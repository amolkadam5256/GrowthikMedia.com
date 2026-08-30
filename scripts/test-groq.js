const https = require("https");

require("dotenv").config();
const apiKey = process.env.GROQ_API_KEY;
const model = process.env.GROQ_MODEL || "openai/gpt-oss-20b";

const req = https.request(
  "https://api.groq.com/openai/v1/chat/completions",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  },
  (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => console.log("Status:", res.statusCode, "Body:", data));
  },
);

req.on("error", (e) => console.error(e));
req.write(
  JSON.stringify({
    model,
    messages: [{ role: "user", content: "test" }],
    temperature: 0.7,
    max_completion_tokens: 100,
    reasoning_effort: "low",
    include_reasoning: false,
  }),
);
req.end();
