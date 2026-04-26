# 🤖 Growthik Media - Automation Hub

This folder contains all GitHub Actions automation scripts, organized by workflow category.

---

## 📂 Folder Structure

```
automation/
├── README.md                   ← You are here
│
├── seo-audit/                  ← Weekly SEO crawl + reporting
│   ├── README.md
│   ├── crawler.mjs             ← Crawls sitemap, audits each URL
│   ├── generate-report.mjs     ← Produces HTML report from JSON
│   ├── send-email.mjs          ← Emails the HTML report via SMTP/Gmail
│   └── alert-slack.mjs         ← Posts Slack alert on issues
│
├── indexnow/                   ← Auto-submit new pages to IndexNow
│   ├── submit.mjs              ← Fetches sitemap and submits to Bing/Yandex
│   └── (key).txt               ← In public/ for ownership verification
│
└── (future automations here)
    ├── backlink-monitor/       ← Monitor backlinks weekly
    └── sitemap-ping/           ← Ping search engines on deploy
```

---

## ⚙️ GitHub Actions Workflows

| Workflow | File | Schedule | Description |
|---|---|---|---|
| Weekly SEO Audit | `.github/workflows/seo-audit.yml` | Mon 9:00 AM IST | Crawls all pages, generates HTML report, sends email + Slack |
| IndexNow Submission | `.github/workflows/indexnow.yml` | On Deploy / Manual | Submits sitemap URLs to IndexNow endpoints |

---

## 🔐 Required GitHub Secrets

Go to **GitHub → Settings → Secrets and variables → Actions** and add:

| Secret Name | Description |
|---|---|
| `SMTP_USER` | Gmail address used to send audit email |
| `SMTP_PASS` | Gmail App Password (not regular password) |
| `REPORT_EMAIL` | Recipient email for the audit report |
| `SLACK_WEBHOOK_URL` | (Optional) Slack incoming webhook URL |
| `INDEXNOW_KEY` | (Optional) Custom IndexNow API key |

> **Tip:** For Gmail, generate an App Password at: https://myaccount.google.com/apppasswords

---

## 🏃 Running Locally

```bash
# Run a quick test audit (first 10 pages only)
npm run audit:test

# Run the full audit pipeline
npm run audit:full

# Submit all sitemap URLs to IndexNow
npm run indexnow:submit

# Individual steps
npm run audit:crawl      # Step 1: Crawl all pages
npm run audit:report     # Step 2: Generate HTML report
npm run audit:email      # Step 3: Send email (needs .env)
npm run audit:slack      # Step 4: Send Slack alert (needs .env)
```

---

## 📊 Output Files

All reports are saved to `audit-reports/` (git-tracked):

| File | Description |
|---|---|
| `audit-reports/latest.json` | Most recent audit data (always overwritten) |
| `audit-reports/report-YYYY-MM-DD.json` | Dated JSON archive |
| `audit-reports/report-YYYY-MM-DD.html` | HTML email report (not committed) |

---

## 🔍 SEO Audit - What It Checks

For each page in the sitemap, the crawler checks:

| Check | Type |
|---|---|
| HTTP Status Code | Error if non-200 |
| Title Tag present | Error if missing |
| Title Tag length | Warning if > 70 chars |
| Meta Description | Error if missing |
| Meta Description length | Warning if > 165 chars |
| H1 Tag present | Error if missing |
| Multiple H1s | Warning |
| Word Count | Warning if < 300 words |
| Missing Image Alt Text | Count of images without alt |
| Noindex meta tag | Warning |
| Canonical mismatch | Warning |
| Response Time | Tracked (ms) |

---

## Adding New Automations

1. Create a new folder under `automation/your-automation/`
2. Add your scripts inside it
3. Create a new workflow in `.github/workflows/your-automation.yml`
4. Add a row to the table above
5. Document required secrets
