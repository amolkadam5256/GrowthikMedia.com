import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const REPORT_EMAIL = process.env.REPORT_EMAIL || 'info@growthikmedia.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: SMTP_USER, pass: SMTP_PASS }
});

async function sendReport() {
  const latestPath = path.join(root, 'audit-reports', 'latest.json');
  if (!fs.existsSync(latestPath)) {
    console.error('Latest report not found.');
    return;
  }

  const data = JSON.parse(fs.readFileSync(latestPath, 'utf8'));
  const { healthScore, stats, issues, date } = data;

  const isCritical = healthScore < 80 || issues.some(is => is.status === 404 && is.isNew);
  const subjectPrefix = isCritical ? '⚠️ ALERT: ' : '✅ ';
  const subject = `${subjectPrefix}Weekly SEO Audit: ${healthScore}% - ${date}`;

  const html = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 800px; margin: auto;">
      <h1 style="color: #D90B1C;">Weekly SEO Health Report</h1>
      <p>Date: ${date}</p>
      
      <div style="display: flex; gap: 20px; margin: 30px 0;">
        <div style="background: #f8f8f8; padding: 20px; border-radius: 12px; flex: 1; text-align: center;">
          <h2 style="margin: 0; font-size: 40px; color: ${healthScore > 90 ? '#10B981' : '#F59E0B'};">${healthScore}%</h2>
          <p style="margin: 5px 0 0 0; font-weight: bold;">Health Score</p>
        </div>
        <div style="background: #f8f8f8; padding: 20px; border-radius: 12px; flex: 1; text-align: center;">
          <h2 style="margin: 0; font-size: 40px; color: #ef4444;">${stats.errors}</h2>
          <p style="margin: 5px 0 0 0; font-weight: bold;">Total Errors</p>
        </div>
      </div>

      <h2>Detailed Issues Dashboard</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr style="background: #eee; text-align: left;">
            <th style="padding: 10px; border: 1px solid #ddd;">URL</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Issue</th>
            <th style="padding: 10px; border: 1px solid #ddd;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${issues.map(issue => `
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; font-size: 12px;">${issue.url}</td>
              <td style="padding: 10px; border: 1px solid #ddd; color: #ef4444;">${issue.message}</td>
              <td style="padding: 10px; border: 1px solid #ddd;">
                <span style="padding: 4px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; background: ${issue.isNew ? '#FEE2E2; color: #991B1B;' : '#D1FAE5; color: #065F46;'}">
                  ${issue.isNew ? 'NEW' : 'FIXED'}
                </span>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <p style="margin-top: 40px; font-size: 12px; color: #999;">
        This is an automated audit from Growthik Media. View full details in GitHub Actions artifacts.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Audit Bot" <${SMTP_USER}>`,
    to: REPORT_EMAIL,
    subject,
    html
  });

  console.log('✅ Weekly report sent successfully!');
}

sendReport().catch(console.error);
