import nodemailer from "nodemailer";

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

// Fallback sender if env is missing
export const SENDER_EMAIL = EMAIL_USER || "info@growthikmedia.com";
export const SENDER = `"Growthik Media" <${SENDER_EMAIL}>`;

export const TEAM_EMAILS = [
  "info@growthikmedia.com",
  "amolkadam1274@gmail.com",
  "growthikmedia@gmail.com"
];

/**
 * Configure Nodemailer transporter (Gmail SMTP)
 * Using explicit host/port for better reliability in different environments.
 */
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  pool: true, // Use connection pooling for fast multiple sends
  maxConnections: 5,
  maxMessages: 100,
});

/**
 * Send an email with error handling and logging.
 */
export async function sendEmail({ 
  to, 
  subject, 
  html, 
  text,
  replyTo,
  bcc
}: { 
  to: string | string[]; 
  subject: string; 
  html: string; 
  text?: string;
  replyTo?: string;
  bcc?: string | string[];
}) {
  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("❌ CRITICAL: EMAIL_USER or EMAIL_PASS not set in environment variables!");
    return { success: false, error: "Email credentials missing" };
  }

  // Simple text fallback if none provided (strip basic HTML)
  const plainText = text || html.replace(/<[^>]*>?/gm, '');

  try {
    const info = await transporter.sendMail({
      from: SENDER,
      to,
      bcc, // Re-added BCC support
      subject: subject.trim(),
      html,
      text: plainText,
      replyTo: replyTo || SENDER_EMAIL,
    });
    console.log(`✅ Email sent to ${Array.isArray(to) ? to.join(', ') : to} | ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error(`❌ SMTP Error sending to ${to}:`, error.message || error);
    return { success: false, error: error.message || "Failed to send email." };
  }
}

/**
 * Sends both User confirmation and Admin notification in parallel for speed.
 */
export async function sendUnifiedEmail({
  userEmail,
  userName,
  adminSubject,
  adminData,
  userSubject = "We've received your enquiry | Growthik Media"
}: {
  userEmail: string;
  userName: string;
  adminSubject: string;
  adminData: any;
  userSubject?: string;
}) {
  console.log(`📩 Starting Unified Email sequence for: ${userName} (${userEmail})`);

  // Prepare both emails
  const userHtml = getUserAutoReplyHTML(userName);
  const adminHtml = getAdminNotificationHTML(adminData);

  // Send BOTH in parallel for instant response
  const [userResult, adminResult] = await Promise.all([
    sendEmail({
      to: userEmail,
      subject: userSubject,
      html: userHtml,
    }),
    sendEmail({
      to: TEAM_EMAILS, // Send to all team emails directly (safer than BCC)
      subject: adminSubject,
      html: adminHtml,
      replyTo: userEmail,
    })
  ]);

  if (!userResult.success) console.error("❌ User Email failed:", userResult.error);
  if (!adminResult.success) console.error("❌ Admin Email failed:", adminResult.error);

  return { userResult, adminResult };
}

/**
 * Professional HTML template for User Auto-Reply
 */
export function getUserAutoReplyHTML(name: string) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #D90B1C; padding: 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Thank you for reaching out!</h1>
      </div>
      <div style="padding: 30px; background-color: #ffffff;">
        <p style="font-size: 18px; font-weight: bold; margin-top: 0;">Hi ${name},</p>
        <p>We've successfully received your inquiry through the <strong>Growthik Media</strong> website. Our team of marketing experts is already reviewing your request.</p>
        <p>You can expect to hear from one of our strategists within <strong>24 business hours</strong> to discuss how we can help grow your brand.</p>
        
        <div style="margin: 30px 0; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #D90B1C; border-radius: 4px;">
          <p style="margin: 0; font-style: italic;">"Our mission is to bridge the gap between where you are and where you want to be."</p>
        </div>

        <p>While you wait, feel free to check out some of our latest success stories and insights:</p>
        <div style="display: flex; gap: 10px; margin-bottom: 25px;">
           <a href="https://www.growthikmedia.com/services" style="background-color: #D90B1C; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Explore Our Services</a>
        </div>
        
        <p style="margin-bottom: 0;">Best regards,</p>
        <p style="font-weight: bold; color: #D90B1C; margin-top: 5px;">The Growthik Media Team</p>
      </div>
      <div style="background-color: #f5f5f5; padding: 20px; text-align: center; font-size: 12px; color: #666666;">
        <p style="margin: 0;">&copy; 2026 Growthik Media. All rights reserved.</p>
        <p style="margin: 5px 0;">Digital Marketing Agency | Scale Your Business with AI & Data</p>
      </div>
    </div>
  `;
}

/**
 * Professional HTML template for Admin Notification
 */
export function getAdminNotificationHTML(data: any) {
  const fields = Object.entries(data)
    .filter(([key]) => key !== 'subject' && key !== 'message')
    .map(([key, value]) => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #eee; font-weight: bold; text-transform: capitalize; width: 150px;">${key.replace(/_/g, ' ')}:</td>
        <td style="padding: 12px; border-bottom: 1px solid #eee;">${value || 'N/A'}</td>
      </tr>
    `).join('');

  const message = data.message ? `
    <div style="margin-top: 20px; padding: 15px; background: #fdfdfd; border: 1px solid #eee; border-radius: 5px;">
      <p style="margin: 0 0 10px 0; font-weight: bold; color: #D90B1C;">Message:</p>
      <p style="margin: 0;">${data.message}</p>
    </div>
  ` : '';

  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #D90B1C; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #D90B1C; padding: 20px; text-align: center;">
        <h2 style="color: #ffffff; margin: 0;">🔴 New Lead Received!</h2>
      </div>
      <div style="padding: 25px; background-color: #ffffff;">
        <p style="font-size: 16px; margin-top: 0;">You have a new inquiry from the website. Here are the details:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;">
          ${fields}
        </table>
        ${message}
        <div style="margin-top: 25px; padding: 15px; background: #fff5f5; border: 1px dashed #D90B1C; border-radius: 5px; text-align: center;">
           <p style="margin: 0; font-weight: bold;">Quick Action: Please reply to this lead within 4 hours for maximum conversion.</p>
        </div>
      </div>
    </div>
  `;
}
