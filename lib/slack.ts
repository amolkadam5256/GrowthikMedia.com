/**
 * lib/slack.ts
 * ─────────────────────────────────
 * Utility to send alerts to Slack via Incoming Webhooks.
 */

export async function sendSlackAlert(payload: {
  title: string;
  fields: { label: string; value: string }[];
  color?: string;
  footer?: string;
}) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;

  if (!webhookUrl) {
    console.warn("⚠️ SLACK_WEBHOOK_URL is not defined. Skipping Slack alert.");
    return;
  }

  const slackPayload = {
    attachments: [
      {
        color: payload.color || "#d90b1c", // Growthik Red
        title: payload.title,
        fields: payload.fields.map((f) => ({
          title: f.label,
          value: f.value,
          short: true,
        })),
        footer: payload.footer || "Growthik Media Lead System",
        ts: Math.floor(Date.now() / 1000),
      },
    ],
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(slackPayload),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`❌ Slack API Error: ${response.status} ${text}`);
    }
  } catch (error: any) {
    console.error("❌ Slack Alert Exception:", error.message);
  }
}
