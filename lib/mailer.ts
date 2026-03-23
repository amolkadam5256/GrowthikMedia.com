import nodemailer from "nodemailer";

// ─── Brand Constants ───────────────────────────────────────────────────────────
const BRAND = {
  name:    "Growthik Media",
  tagline: "Scale Your Business with AI & Data",
  website: "https://www.growthikmedia.com",
  email:   "info@growthikmedia.com",
  phone:   "+91 80557 54054",
  address: "Warje, Pune, Maharashtra 411058, India",
  year:    new Date().getFullYear(),
  color:   "#D90B1C",
  colorDark: "#A3081A",
  social: [
    { label: "Instagram", url: "https://instagram.com/growthikmedia",        icon: "📸" },
    { label: "LinkedIn",  url: "https://linkedin.com/company/growthikmedia",  icon: "💼" },
    { label: "YouTube",   url: "https://youtube.com/@growthikmedia",          icon: "▶️" },
    { label: "Facebook",  url: "https://facebook.com/growthikmedia",          icon: "📘" },
    { label: "WhatsApp",  url: "https://wa.me/918055754054",                  icon: "💬" },
  ],
};

// ─── Shared Email Wrapper ──────────────────────────────────────────────────────
/**
 * Wraps any inner HTML content in the branded email shell.
 * Table-based layout for maximum Gmail/Outlook/mobile compatibility.
 */
function wrapEmailShell(innerHtml: string, previewText = ""): string {
  const socialLinks = BRAND.social
    .map(
      (s) =>
        `<a href="${s.url}" target="_blank" rel="noopener"
            style="display:inline-block;margin:0 6px;color:#94a3b8;font-size:11px;
                   font-family:Arial,sans-serif;text-decoration:none;">
           ${s.icon}&nbsp;${s.label}
         </a>`
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>${BRAND.name}</title>
  ${previewText ? `<!--[if !mso]><!--><div style="display:none;max-height:0;overflow:hidden;">${previewText}&nbsp;‌&nbsp;‌&nbsp;‌</div><!--<![endif]-->` : ""}
  <style>
    @media only screen and (max-width:600px){
      .email-card  { width:100% !important; border-radius:0 !important; }
      .email-body  { padding:24px 20px !important; }
      .btn-row a   { display:block !important; margin:8px 0 !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;-webkit-text-size-adjust:100%;">

<!-- Outer table -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation"
       style="background:#f1f5f9;">
<tr><td align="center" style="padding:28px 12px 40px;">

  <!-- Card -->
  <table class="email-card" width="600" cellpadding="0" cellspacing="0" border="0"
         role="presentation"
         style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;
                overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">

    <!-- ─── HEADER ─────────────────────────────────────────────────────────── -->
    <tr>
      <td style="background:linear-gradient(135deg,${BRAND.color} 0%,${BRAND.colorDark} 100%);
                 padding:28px 40px 24px;text-align:center;">
        <!-- Wordmark logo -->
        <div style="margin-bottom:8px;">
          <span style="font-size:26px;font-weight:900;color:#ffffff;
                       font-family:Arial,Helvetica,sans-serif;letter-spacing:-0.5px;">
            Growthik
          </span>
          <span style="font-size:26px;font-weight:400;color:rgba(255,255,255,0.80);
                       font-family:Arial,Helvetica,sans-serif;">
            &nbsp;Media
          </span>
        </div>
        <!-- Divider line -->
        <div style="width:40px;height:2px;background:rgba(255,255,255,0.4);
                    margin:0 auto 8px;border-radius:2px;"></div>
        <div style="font-size:11px;color:rgba(255,255,255,0.75);letter-spacing:1.5px;
                    text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;">
          ${BRAND.tagline}
        </div>
      </td>
    </tr>

    <!-- ─── INNER CONTENT (injected per template) ────────────────────────── -->
    ${innerHtml}

    <!-- ─── CONTACT STRIP ──────────────────────────────────────────────────── -->
    <tr>
      <td style="background:#1e293b;padding:20px 32px;text-align:center;">
        <div style="font-size:13px;font-weight:700;color:#fff;
                    font-family:Arial,Helvetica,sans-serif;margin-bottom:8px;">
          ${BRAND.name}
        </div>
        <div style="font-size:11px;color:#94a3b8;font-family:Arial,Helvetica,sans-serif;line-height:1.9;">
          <a href="mailto:${BRAND.email}" style="color:#fca5a5;text-decoration:none;">
            ✉&nbsp;${BRAND.email}
          </a>
          &nbsp;|&nbsp;
          <a href="tel:${BRAND.phone.replace(/\s/g, "")}"
             style="color:#94a3b8;text-decoration:none;">
            📞&nbsp;${BRAND.phone}
          </a>
          <br>
          <span>📍&nbsp;${BRAND.address}</span>
        </div>
      </td>
    </tr>

    <!-- ─── SOCIAL LINKS ───────────────────────────────────────────────────── -->
    <tr>
      <td style="background:#0f172a;padding:16px 28px 20px;text-align:center;">
        <div style="font-size:9px;font-weight:700;color:#475569;letter-spacing:2px;
                    text-transform:uppercase;font-family:Arial,sans-serif;margin-bottom:10px;">
          Follow Us
        </div>
        <div style="line-height:2.2;">${socialLinks}</div>
      </td>
    </tr>

    <!-- ─── FOOTER LEGAL ───────────────────────────────────────────────────── -->
    <tr>
      <td style="background:#0f172a;padding:0 28px 20px;text-align:center;
                 border-top:1px solid #1e293b;">
        <p style="font-size:10px;color:#334155;font-family:Arial,sans-serif;margin:0;">
          &copy; ${BRAND.year} ${BRAND.name}. All rights reserved.
          &nbsp;&nbsp;
          <a href="${BRAND.website}/privacy-policy" style="color:#475569;text-decoration:none;">Privacy</a>
          &nbsp;·&nbsp;
          <a href="${BRAND.website}" style="color:#475569;text-decoration:none;">Website</a>
        </p>
      </td>
    </tr>

  </table>
  <!-- /Card -->

</td></tr>
</table>
<!-- /Outer table -->

</body>
</html>`;
}

// ─── Helpers ───────────────────────────────────────────────────────────────────
export const getSenderEmail = () => process.env.EMAIL_USER || "info@growthikmedia.com";
export const getSender      = () => `"Growthik Media" <${getSenderEmail()}>`;

export const TEAM_EMAILS = [
  "info@growthikmedia.com",
  "amolkadam1274@gmail.com",
  "growthikmedia@gmail.com",
];

// ─── Transporter ───────────────────────────────────────────────────────────────
export const transporter = nodemailer.createTransport({
  host:   "smtp.gmail.com",
  port:   465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ─── Core Send Function ────────────────────────────────────────────────────────
export async function sendEmail({
  to,
  subject,
  html,
  text,
  replyTo,
  bcc,
}: {
  to:       string | string[];
  subject:  string;
  html:     string;
  text?:    string;
  replyTo?: string;
  bcc?:     string | string[];
}) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ CRITICAL: EMAIL_USER or EMAIL_PASS not set!");
    return { success: false, error: "Email credentials missing" };
  }

  const plainText = text || html.replace(/<[^>]*>?/gm, "");

  try {
    const info = await transporter.sendMail({
      from:    getSender(),
      to,
      bcc,
      subject: subject.trim(),
      html,
      text:    plainText,
      replyTo: replyTo || getSenderEmail(),
    });
    console.log(`✅ Email sent to ${Array.isArray(to) ? to.join(", ") : to} | ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error(`❌ SMTP Error:`, error.message);
    return { success: false, error: error.message || "Failed to send email." };
  }
}

// ─── Unified Sender (parallel user + admin) ────────────────────────────────────
export async function sendUnifiedEmail({
  userEmail,
  userName,
  adminSubject,
  adminData,
  userSubject = "We've received your enquiry | Growthik Media",
}: {
  userEmail:    string;
  userName:     string;
  adminSubject: string;
  adminData:    any;
  userSubject?: string;
}) {
  console.log(`📩 Unified email sequence for: ${userName} (${userEmail})`);

  const [userResult, adminResult] = await Promise.all([
    sendEmail({ to: userEmail,    subject: userSubject,    html: getUserAutoReplyHTML(userName) }),
    sendEmail({ to: TEAM_EMAILS,  subject: adminSubject,   html: getAdminNotificationHTML(adminData), replyTo: userEmail }),
  ]);

  if (!userResult.success)  console.error("❌ User email failed:", userResult.error);
  if (!adminResult.success) console.error("❌ Admin email failed:", adminResult.error);

  return { userResult, adminResult };
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 1 — User Auto-Reply (sent to the person who submitted the form)
// ═══════════════════════════════════════════════════════════════════════════════
export function getUserAutoReplyHTML(name: string): string {
  const inner = `
    <!-- Greeting -->
    <tr>
      <td class="email-body" style="padding:36px 40px 0;">
        <p style="margin:0 0 6px;font-size:13px;font-weight:700;color:#D90B1C;
                  text-transform:uppercase;letter-spacing:1px;font-family:Arial,sans-serif;">
          Hi ${name},
        </p>
        <h1 style="margin:0 0 20px;font-size:22px;font-weight:900;color:#1e293b;
                   font-family:Arial,Helvetica,sans-serif;line-height:1.3;">
          Thanks for reaching out! 🙌
        </h1>
        <p style="margin:0 0 16px;font-size:14px;color:#475569;line-height:1.7;
                  font-family:Arial,sans-serif;">
          We've received your inquiry through the <strong style="color:#1e293b;">Growthik Media</strong>
          website. Our team of digital marketing experts is already reviewing your request.
        </p>
      </td>
    </tr>

    <!-- What happens next -->
    <tr>
      <td style="padding:16px 40px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:#fff5f5;border-left:4px solid #D90B1C;border-radius:0 8px 8px 0;
                       padding:18px 20px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#D90B1C;
                         text-transform:uppercase;letter-spacing:0.8px;font-family:Arial,sans-serif;">
                What's next?
              </p>
              <p style="margin:0;font-size:13px;color:#475569;line-height:1.6;font-family:Arial,sans-serif;">
                One of our growth strategists will reach out within
                <strong style="color:#1e293b;">24 business hours</strong>
                to discuss how we can scale your brand with AI-powered marketing.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- 3-step process -->
    <tr>
      <td style="padding:8px 40px 20px;">
        <p style="margin:0 0 14px;font-size:13px;font-weight:700;color:#1e293b;
                  font-family:Arial,sans-serif;">Here's what you can expect:</p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          ${[
            ["01", "Strategy Call", "We'll understand your goals and business needs in depth."],
            ["02", "Custom Plan",   "Receive a tailored digital marketing roadmap built for you."],
            ["03", "Grow Fast",     "Execute the plan and start seeing measurable results."],
          ]
            .map(
              ([num, title, desc]) => `
            <tr>
              <td style="padding:8px 0;">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td style="width:36px;height:36px;background:#D90B1C;border-radius:50%;
                               text-align:center;vertical-align:middle;">
                      <span style="font-size:11px;font-weight:900;color:#fff;font-family:Arial,sans-serif;">
                        ${num}
                      </span>
                    </td>
                    <td style="padding-left:14px;vertical-align:middle;">
                      <strong style="font-size:13px;color:#1e293b;font-family:Arial,sans-serif;">${title}</strong>
                      <span style="font-size:12px;color:#64748b;font-family:Arial,sans-serif;"> — ${desc}</span>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>`
            )
            .join("")}
        </table>
      </td>
    </tr>

    <!-- Inspirational quote -->
    <tr>
      <td style="padding:0 40px 24px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:linear-gradient(135deg,#1e293b,#334155);border-radius:10px;
                       padding:20px 24px;text-align:center;">
              <p style="margin:0;font-size:14px;font-style:italic;color:#e2e8f0;line-height:1.6;
                         font-family:Georgia,serif;">
                "Our mission is to bridge the gap between where you are<br>and where you want to be."
              </p>
              <p style="margin:8px 0 0;font-size:11px;font-weight:700;color:#D90B1C;
                         font-family:Arial,sans-serif;letter-spacing:0.5px;">
                — Growthik Media Team
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- CTA Buttons -->
    <tr>
      <td class="btn-row" style="padding:0 40px 36px;text-align:center;">
        <a href="${BRAND.website}/services" target="_blank"
           style="display:inline-block;background:linear-gradient(135deg,#D90B1C,#A3081A);
                  color:#fff;font-size:13px;font-weight:700;padding:13px 28px;
                  border-radius:8px;font-family:Arial,sans-serif;text-decoration:none;
                  margin:4px;box-shadow:0 4px 12px rgba(217,11,28,0.3);">
          Explore Our Services →
        </a>
        <a href="https://wa.me/918055754054" target="_blank"
           style="display:inline-block;background:#25D366;color:#fff;
                  font-size:13px;font-weight:700;padding:13px 28px;
                  border-radius:8px;font-family:Arial,sans-serif;text-decoration:none;margin:4px;">
          💬 WhatsApp Us
        </a>
      </td>
    </tr>
  `;
  return wrapEmailShell(inner, `Hi ${name}, we've received your inquiry and will respond within 24 hours.`);
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 2 — Admin Lead Notification (sent to team when a form is submitted)
// ═══════════════════════════════════════════════════════════════════════════════
export function getAdminNotificationHTML(data: any): string {
  const excludeKeys = new Set(["subject", "message"]);

  const fieldRows = Object.entries(data)
    .filter(([key]) => !excludeKeys.has(key))
    .map(
      ([key, value]) => `
      <tr>
        <td style="padding:12px 16px;background:#f8fafc;border-bottom:1px solid #e2e8f0;
                   font-size:11px;font-weight:700;color:#475569;text-transform:uppercase;
                   letter-spacing:0.5px;font-family:Arial,sans-serif;width:130px;
                   white-space:nowrap;">
          ${key.replace(/_/g, " ")}
        </td>
        <td style="padding:12px 16px;border-bottom:1px solid #e2e8f0;font-size:13px;
                   color:#1e293b;font-family:Arial,sans-serif;">
          ${value || "<span style='color:#94a3b8;'>N/A</span>"}
        </td>
      </tr>`
    )
    .join("");

  const messageBlock = data.message
    ? `
    <tr>
      <td style="padding:20px 40px 8px;">
        <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#D90B1C;
                   text-transform:uppercase;letter-spacing:0.8px;font-family:Arial,sans-serif;">
          Message
        </p>
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;
                    padding:16px;font-size:13px;color:#334155;font-family:Arial,sans-serif;
                    line-height:1.7;white-space:pre-wrap;">
          ${data.message}
        </div>
      </td>
    </tr>`
    : "";

  const inner = `
    <!-- Alert banner -->
    <tr>
      <td style="background:#fff5f5;border-left:4px solid #D90B1C;margin:0;padding:16px 40px;">
        <p style="margin:0;font-size:15px;font-weight:700;color:#D90B1C;font-family:Arial,sans-serif;">
          🔴 New Lead Received!
        </p>
        <p style="margin:4px 0 0;font-size:12px;color:#64748b;font-family:Arial,sans-serif;">
          A visitor submitted a form on <strong>growthikmedia.com</strong>.
          Respond within 4 hours for maximum conversion.
        </p>
      </td>
    </tr>

    <!-- Lead details table -->
    <tr>
      <td class="email-body" style="padding:24px 40px 8px;">
        <p style="margin:0 0 12px;font-size:12px;font-weight:700;color:#475569;
                   text-transform:uppercase;letter-spacing:0.8px;font-family:Arial,sans-serif;">
          Lead Details
        </p>
        <table width="100%" cellpadding="0" cellspacing="0" border="0"
               style="border-collapse:collapse;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
          ${fieldRows}
        </table>
      </td>
    </tr>

    <!-- Message (if any) -->
    ${messageBlock}

    <!-- Action reminder -->
    <tr>
      <td style="padding:20px 40px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:linear-gradient(135deg,#1e293b,#0f172a);border-radius:10px;
                       padding:18px 24px;text-align:center;">
              <p style="margin:0 0 12px;font-size:13px;font-weight:700;color:#fca5a5;
                         font-family:Arial,sans-serif;">
                ⚡ Reply to this lead within 4 hours for 3× higher conversion rate
              </p>
              <a href="${BRAND.website}/admin" target="_blank"
                 style="display:inline-block;background:#D90B1C;color:#fff;
                        font-size:12px;font-weight:700;padding:10px 24px;
                        border-radius:6px;font-family:Arial,sans-serif;text-decoration:none;">
                Open Admin Dashboard →
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;

  return wrapEmailShell(inner, "🔴 New lead received on growthikmedia.com — action required.");
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEMPLATE 3 — Admin Reply to Lead (used in reply-email route)
// ═══════════════════════════════════════════════════════════════════════════════
export function getAdminReplyHTML(bodyText: string): string {
  const inner = `
    <!-- Greeting -->
    <tr>
      <td class="email-body" style="padding:36px 40px 20px;">
        <p style="margin:0 0 16px;font-size:14px;color:#475569;line-height:1.7;font-family:Arial,sans-serif;">
          Thank you for getting in touch with us. Here is our response to your inquiry:
        </p>
        <!-- Message body -->
        <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;
                    padding:24px;font-size:14px;color:#334155;font-family:Arial,sans-serif;
                    line-height:1.7;white-space:pre-wrap;">
          ${bodyText}
        </div>
      </td>
    </tr>

    <!-- Signature -->
    <tr>
      <td style="padding:8px 40px 36px;">
        <table cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="width:4px;background:#D90B1C;border-radius:2px;"></td>
            <td style="padding-left:14px;">
              <p style="margin:0;font-size:14px;font-weight:700;color:#1e293b;font-family:Arial,sans-serif;">
                Growthik Media Team
              </p>
              <p style="margin:3px 0 0;font-size:12px;color:#64748b;font-family:Arial,sans-serif;">
                Digital Marketing Agency · Pune, India
              </p>
              <p style="margin:3px 0 0;font-size:12px;font-family:Arial,sans-serif;">
                <a href="mailto:${BRAND.email}" style="color:#D90B1C;text-decoration:none;">${BRAND.email}</a>
                &nbsp;·&nbsp;
                <a href="tel:+918055754054" style="color:#64748b;text-decoration:none;">${BRAND.phone}</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
  return wrapEmailShell(inner, "A response from Growthik Media regarding your inquiry.");
}
