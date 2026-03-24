import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const auditPath = path.resolve(__dirname, '../audit-reports');

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const REPORT_EMAIL = process.env.REPORT_EMAIL;

async function sendEmail() {
  if (!SMTP_USER || !SMTP_PASS || !REPORT_EMAIL) {
    console.error('❌ Missing environment variables for email.');
    process.exit(1);
  }

  const latestJsonPath = path.join(auditPath, 'latest.json');
  if (!fs.existsSync(latestJsonPath)) {
    console.error('❌ latest.json not found.');
    return;
  }

  const data = JSON.parse(fs.readFileSync(latestJsonPath, 'utf8'));
  const today = data.date;
  const htmlPath = path.join(auditPath, `report-${today}.html`);

  if (!fs.existsSync(htmlPath)) {
    console.error(`❌ HTML report for ${today} not found.`);
    return;
  }

  const htmlContent = fs.readFileSync(htmlPath, 'utf8');

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  // Calculate if alert prefix is needed
  const newErrors = data.pages.some(p => p.status >= 400 && p.newIssues);
  const healthDropped = data.trend && data.trend.length > 1 && (data.trend[data.trend.length - 2] - data.summary.healthScore >= 5);
  
  const subjectPrefix = (newErrors || healthDropped || data.summary.healthScore < 80) ? '🔴 ALERT: ' : '🟢 ';
  const subject = `${subjectPrefix}SEO Audit — growthikmedia.com | ${today} | Health: ${data.summary.healthScore}%`;

  console.log(`📧 Sending email to ${REPORT_EMAIL}...`);

  await transporter.sendMail({
    from: `"Growthik SEO Bot" <${SMTP_USER}>`,
    to: REPORT_EMAIL,
    subject,
    html: htmlContent,
    attachments: [
      {
        filename: `seo-report-${today}.html`,
        path: htmlPath
      }
    ]
  });

  console.log('✅ Email sent successfully.');
}

sendEmail().catch(console.error);
