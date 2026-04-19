import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const auditPath = path.resolve(__dirname, '../audit-reports');
const latestJsonPath = path.join(auditPath, 'latest.json');

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

async function sendSlackAlert() {
  if (!SLACK_WEBHOOK_URL) {
    console.warn('⚠️ Slack Webhook URL not set. Skipping Slack alert.');
    return;
  }

  if (!fs.existsSync(latestJsonPath)) {
    console.error('❌ latest.json for Slack alert not found.');
    return;
  }

  const data = JSON.parse(fs.readFileSync(latestJsonPath, 'utf8'));

  // Alert triggers: health < 80% or new 4xx errors
  const healthAlert = data.summary.healthScore < 80;
  const newErrors = data.pages.filter(p => (p.status >= 400 || p.errors.length > 0) && p.newIssues);
  const totalNewIssues = data.summary.new;

  if (!healthAlert && newErrors.length === 0 && totalNewIssues === 0) {
    console.log('✅ Site health is good. Skipping Slack alert.');
    return;
  }

  const statusEmoji = healthAlert ? '🚨 CRITICAL' : totalNewIssues > 0 ? '⚠️ WARNING' : 'ℹ️ INFO';
  const topErrors = newErrors.slice(0, 3).map(p => `• <${p.url}|${p.url.split('/').pop()}> - ${p.errors.join(', ')}`).join('\n') || 'None';

  const slackBody = {
    text: `*Growthik SEO Audit Result - ${data.date}*`,
    blocks: [
      {
        type: 'header',
        text: { type: 'plain_text', text: `${statusEmoji}: SEO Health Audit` }
      },
      {
        type: 'section',
        fields: [
          { type: 'mrkdwn', text: `*Health Score:* ${data.summary.healthScore}%` },
          { type: 'mrkdwn', text: `*Total Pages:* ${data.summary.total}` },
          { type: 'mrkdwn', text: `*New Issues:* ${data.summary.new}` },
          { type: 'mrkdwn', text: `*Fixed Issues:* ${data.summary.fixed}` }
        ]
      },
      {
        type: 'section',
        text: { type: 'mrkdwn', text: `*Top 3 Critical Errors:*\n${topErrors}` }
      },
      {
        type: 'actions',
        elements: [
          {
            type: 'button',
            text: { type: 'plain_text', text: 'View Full Report' },
            url: `https://github.com/${process.env.GITHUB_REPOSITORY}/actions`
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
    console.log('✅ Slack alert sent.');
  } else {
    console.error(`❌ Failed to send Slack alert: ${res.statusText}`);
  }
}

sendSlackAlert().catch(console.error);
