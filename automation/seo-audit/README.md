# 🔍 SEO Audit - Automation

This directory contains all scripts for the **Weekly SEO Audit** pipeline.

---

## Scripts

| Script | Description |
|---|---|
| `crawler.mjs` | Fetches sitemap, crawls each URL, checks SEO health |
| `generate-report.mjs` | Reads `latest.json` and produces a styled HTML report |
| `send-email.mjs` | Emails the HTML report via Gmail SMTP |
| `alert-slack.mjs` | Posts a Slack alert when health drops or new issues appear |

---

## Output

Reports are saved to `audit-reports/` at the **project root**:
- `latest.json` - always updated, used for week-over-week comparison
- `report-YYYY-MM-DD.json` - dated JSON snapshot
- `report-YYYY-MM-DD.html` - HTML email (not committed to git)

---

## Workflow Trigger

- **Scheduled**: Every Monday at 3:30 AM UTC (9:00 AM IST)
- **Manual**: GitHub Actions → "Weekly SEO Audit" → Run workflow

---

## Environment Variables Required

| Variable | Source | Description |
|---|---|---|
| `SITE_URL` | GitHub Vars | Live site URL (default: `https://www.growthikmedia.com`) |
| `SITEMAP_URL` | GitHub Vars | Sitemap URL (default: `{SITE_URL}/sitemap.xml`) |
| `SMTP_USER` | GitHub Secret | Gmail address |
| `SMTP_PASS` | GitHub Secret | Gmail App Password |
| `REPORT_EMAIL` | GitHub Secret | Recipient(s) for the audit email |
| `SLACK_WEBHOOK_URL` | GitHub Secret | (Optional) Slack webhook |
