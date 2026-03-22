# 🚀 Automated SEO Audit System

This system performs a weekly SEO audit of `growthikmedia.com`, generates a health report, and sends alerts via Email and Slack.

## 🛠️ Components
1. **GitHub Action**: Runs every Monday at 9:00 AM IST.
2. **Crawler**: Scans all URLs in `sitemap.xml` for SEO issues (1 req/sec).
3. **Reporter**: Generates a Gmail-compatible HTML report.
4. **Notifier**: Sends Email (Nodemailer) and Slack alerts.

---

## ⚙️ Setup Instructions

### 1. SMTP Setup (Gmail)
- Enable **2-Step Verification** on your Google Account.
- Go to [App Passwords](https://myaccount.google.com/apppasswords).
- Generate a new password named "SEO Audit Bot".
- Copy the **16-character code**.

### 2. Configure GitHub Secrets
Go to **Settings > Secrets and Variables > Actions** and add:
- `SMTP_USER`: Your Gmail address.
- `SMTP_PASS`: The 16-character app password.
- `REPORT_EMAIL`: Destination email for reports.
- `SLACK_WEBHOOK_URL`: (Optional) Your Slack Incoming Webhook URL.

### 3. Configure Variables (Optional)
- `SITE_URL`: `https://www.growthikmedia.com`
- `SITEMAP_URL`: `https://www.growthikmedia.com/sitemap.xml`

---

## 🏃 Local Testing

1. Install dependencies:
   ```bash
   npm install node-fetch@2 cheerio fast-xml-parser nodemailer
   ```
2. Create a `.env` file (see `.env.example`).
3. Run a test audit (limited to 10 URLs):
   ```bash
   npm run audit:test
   ```
4. Generate report:
   ```bash
   npm run audit:report
   ```

---

## 📂 Directory Structure
- `scripts/audit-crawler.mjs`: Core logic for crawling and data extraction.
- `scripts/generate-report.mjs`: JSON to HTML conversion.
- `scripts/send-email.mjs`: SMTP delivery.
- `scripts/alert-slack.mjs`: Slack notifications.
- `audit-reports/`: Stores historical JSON and HTML reports.

---

## ⚠️ Troubleshooting
- **500 Errors**: Check if the site is down or blocking the bot's User-Agent.
- **Email fail**: Ensure App Password is correct and 2FA is enabled.
- **No data**: Verify the `SITEMAP_URL` returns valid XML.
