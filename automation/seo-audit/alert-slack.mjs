/**
 * automation/seo-audit/alert-slack.mjs
 * ──────────────────────────────────────
 * Posts a Slack alert when SEO health drops or new issues appear.
 *
 * Usage:
 *   node automation/seo-audit/alert-slack.mjs
 *
 * Required env var:
 *   SLACK_WEBHOOK_URL — Incoming Webhook URL from Slack app settings
 *                       (Optional — step is skipped if not set)
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const auditPath      = path.resolve(__dirname, '../../audit-reports');
const latestJsonPath = path.join(auditPath, 'latest.json');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

async function sendSlackAlert() {
  // ── Guard: skip gracefully if webhook not configured ──────────────────────
  if (!SLACK_WEBHOOK_URL) {
    console.warn('⚠️  SLACK_WEBHOOK_URL not set. Skipping Slack alert.');
    console.warn('   Add it as a GitHub Secret to enable Slack notifications.');
    process.exit(0); // Not a failure — optional integration
  }

  if (!fs.existsSync(latestJsonPath)) {
    console.error('❌ latest.json not found. Run the crawler first.');
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(latestJsonPath, 'utf8'));

  // Only alert on health < 80% or new issues appearing
  const healthAlert  = data.summary.healthScore < 80;
  const newErrors    = data.pages.filter(p => (p.status >= 400 || p.errors.length > 0) && p.newIssues);
  const totalNewIssues = data.summary.new;

  if (!healthAlert && newErrors.length === 0 && totalNewIssues === 0) {
    console.log(`✅ Site health is good (${data.summary.healthScore}%). No Slack alert needed.`);
    return;
  }

  const statusEmoji =
    healthAlert       ? '🚨 CRITICAL' :
    totalNewIssues > 0 ? '⚠️  WARNING' : 'ℹ️  INFO';

  const topErrors = newErrors
    .slice(0, 3)
    .map(p => `• <${p.url}|${decodeURIComponent(p.url.split('/').pop() || '/')}> — ${p.errors.join(', ')}`)
    .join('\n') || 'None';

  const repoUrl = process.env.GITHUB_REPOSITORY
    ? `https://github.com/${process.env.GITHUB_REPOSITORY}/actions`
    : 'https://github.com/amolkadam5256/GrowthikMedia.com/actions';

  const slackBody = {
    text: `*Growthik SEO Audit — ${data.date}*`,
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: `${statusEmoji}: SEO Health Audit` }
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Health Score:*\n${data.summary.healthScore}%` },
          { type: 'mrkdwn', text: `*Pages Crawled:*\n${data.summary.total}` },
          { type: 'mrkdwn', text: `*New Issues:*\n+${data.summary.new}` },
          { type: 'mrkdwn', text: `*Fixed Issues:*\n-${data.summary.fixed}` },
          { type: 'mrkdwn', text: `*Errors:*\n${data.summary.errors}` },
          { type: 'mrkdwn', text: `*Warnings:*\n${data.summary.warnings}` },
        ]
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Top Critical Errors:*\n${topErrors}` }
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            style: 'danger',
            text: { type: 'plain_text', text: '📋 View Full Report' },
            url: repoUrl
          }
        ]
      }
    ]
  };

  console.log(`📡 Sending Slack alert: ${statusEmoji}...`);

  const res = await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify(slackBody),
    headers: { 'Content-Type': 'application/json' }
  });

  if (res.ok) {
    console.log('✅ Slack alert sent successfully.');
  } else {
    const body = await res.text();
    console.error(`❌ Failed to send Slack alert: ${res.status} ${res.statusText} — ${body}`);
    process.exit(1);
  }
}

sendSlackAlert().catch(err => {
  console.error('❌ Error sending Slack alert:', err.message);
  process.exit(1);
});
