/**
 * automation/seo-audit/send-email.mjs
 * ─────────────────────────────────────
 * Sends the HTML audit report via Gmail SMTP (nodemailer).
 *
 * Usage:
 *   node automation/seo-audit/send-email.mjs
 *
 * Required env vars:
 *   SMTP_USER      - Gmail address
 *   SMTP_PASS      - Gmail App Password
 *   REPORT_EMAIL   - Recipient email (comma-separated for multiple)
 */

import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const auditPath = path.resolve(__dirname, '../../audit-reports');

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const REPORT_EMAIL = process.env.REPORT_EMAIL;

async function sendEmail() {
  // ── Guard: skip gracefully if secrets not configured ──────────────────────
  if (!SMTP_USER || !SMTP_PASS || !REPORT_EMAIL) {
    console.warn('⚠️  Email env vars not set (SMTP_USER / SMTP_PASS / REPORT_EMAIL). Skipping email step.');
    console.warn('   Set these as GitHub Secrets to enable email reports.');
    process.exit(0); // exit 0 = not a failure, just skipped
  }

  const latestJsonPath = path.join(auditPath, 'latest.json');
  if (!fs.existsSync(latestJsonPath)) {
    console.error('❌ latest.json not found. Run the crawler first.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(latestJsonPath, 'utf8'));
  const today = data.date;
  const htmlPath = path.join(auditPath, `report-${today}.html`);

  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ HTML report for ${today} not found. Run generate-report first.`);
    process.exit(1);
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  // Smart subject line - flag urgent issues
  const newErrors = data.pages.some(p => p.status >= 400 && p.newIssues);
  const healthDropped = data.trend?.length > 1 &&
    (data.trend[data.trend.length - 2] - data.summary.healthScore >= 5);

  const isAlert = newErrors || healthDropped || data.summary.healthScore < 80;
  const prefix = isAlert ? '🔴 ALERT: ' : '🟢 ';
  const subject = `${prefix}SEO Audit - growthikmedia.com | ${today} | Health: ${data.summary.healthScore}%`;

  console.log(`📧 Sending audit report to ${REPORT_EMAIL}...`);

  await transporter.sendMail({
    from: `"Growthik SEO Bot" <${SMTP_USER}>`,
    to: REPORT_EMAIL,
    subject,
    html: htmlContent,
    attachments: [
      {
        filename: `seo-report-${today}.html`,
        path: htmlPath,
      }
    ]
  });

  console.log('✅ Email sent successfully.');
}

sendEmail().catch(err => {
  console.error('❌ Error sending email:', err.message);
  process.exit(1);
});
