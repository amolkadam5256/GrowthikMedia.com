/**
 * automation/seo-audit/generate-report.mjs
 * ──────────────────────────────────────────
 * Reads audit-reports/latest.json and produces a fully branded,
 * responsive HTML email report for Growthik Media.
 *
 * Usage:
 *   node automation/seo-audit/generate-report.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const auditPath = path.resolve(__dirname, '../../audit-reports');
const latestJsonPath = path.join(auditPath, 'latest.json');
const today = new Date().toISOString().split('T')[0];
const todayHtmlPath = path.join(auditPath, `report-${today}.html`);

if (!fs.existsSync(latestJsonPath)) {
  console.error('❌ latest.json not found. Run the crawler first.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(latestJsonPath, 'utf8'));

// ── Brand constants ────────────────────────────────────────────────────────────
const BRAND = {
  name: 'Growthik Media',
  website: 'https://www.growthikmedia.com',
  email: 'info@growthikmedia.com',
  phone: '+91 80557 54054',
  address: 'Warje, Pune, Maharashtra 411058, India',
  gradientStart: '#D90B1C',
  gradientEnd: '#F22E52',
  social: {
    facebook: { url: 'https://facebook.com/growthikmedia', label: 'Facebook', color: '#1877F2', icon: 'f' },
    instagram: { url: 'https://instagram.com/growthikmedia', label: 'Instagram', color: '#E1306C', icon: 'in' },
    twitter: { url: 'https://twitter.com/growthikmedia', label: 'X/Twitter', color: '#000000', icon: 'X' },
    linkedin: { url: 'https://linkedin.com/company/growthikmedia', label: 'LinkedIn', color: '#0A66C2', icon: 'li' },
    youtube: { url: 'https://youtube.com/@growthikmedia', label: 'YouTube', color: '#FF0000', icon: '▶' },
    whatsapp: { url: 'https://wa.me/918055754054', label: 'WhatsApp', color: '#25D366', icon: 'W' },
    telegram: { url: 'https://t.me/growthikmedia', label: 'Telegram', color: '#26A5E4', icon: '✈' },
    pinterest: { url: 'https://pinterest.com/growthikmedia', label: 'Pinterest', color: '#E60023', icon: 'P' },
    medium: { url: 'https://medium.com/@growthikmedia', label: 'Medium', color: '#000000', icon: 'M' },
    github: { url: 'https://github.com/growthikmedia', label: 'GitHub', color: '#181717', icon: 'G' },
    discord: { url: 'https://discord.gg/growthikmedia', label: 'Discord', color: '#5865F2', icon: 'D' },
    dribbble: { url: 'https://dribbble.com/growthikmedia', label: 'Dribbble', color: '#EA4C89', icon: 'dr' },
    behance: { url: 'https://behance.net/growthikmedia', label: 'Behance', color: '#1769FF', icon: 'Be' },
    reddit: { url: 'https://reddit.com/user/growthikmedia', label: 'Reddit', color: '#FF4500', icon: 'R' },
    quora: { url: 'https://www.quora.com/profile/growthikmedia', label: 'Quora', color: '#B92B27', icon: 'Q' },
    snapchat: { url: 'https://snapchat.com/add/growthikmedia', label: 'Snapchat', color: '#FFFC00', icon: '👻' },
  }
};

// ── HTML Generator ─────────────────────────────────────────────────────────────

const generateHtml = (data) => {
  const { summary, pages, trend, date } = data;

  // Score colour thresholds
  const scoreColor =
    summary.healthScore >= 90 ? '#10b981' :
      summary.healthScore >= 75 ? '#f59e0b' : '#ef4444';

  const scoreLabel =
    summary.healthScore >= 90 ? '🟢 Excellent' :
      summary.healthScore >= 75 ? '🟡 Good' :
        summary.healthScore >= 60 ? '🟠 Fair' : '🔴 Critical';

  // Trend sparkline bars
  const trendBars = trend.length > 1
    ? trend.map((t, i) => `
        <td style="vertical-align:bottom;padding:0 2px;">
          <div style="width:12px;height:${Math.max(4, Math.round(t * 0.4))}px;
                      background:${i === trend.length - 1 ? scoreColor : '#dde2ea'};
                      border-radius:3px 3px 0 0;"
               title="${t}% - Week ${i + 1}"></div>
        </td>`).join('')
    : '';

  // Issue rows
  const issuePages = pages
    .filter(p => p.errors.length > 0 || p.warnings.length > 0)
    .sort((a, b) => b.errors.length - a.errors.length);

  const pageRows = issuePages.map(p => {
    const path = p.url.replace('https://www.growthikmedia.com', '') || '/';
    const statusBg = p.status >= 400 ? '#fee2e2' : p.status === 200 ? '#ecfdf5' : '#fef3c7';
    const statusTxt = p.status >= 400 ? '#b91c1c' : p.status === 200 ? '#059669' : '#92400e';

    return `
    <tr style="border-bottom:1px solid #f1f5f9;">
      <td style="padding:14px 12px;font-size:12px;font-family:Arial,sans-serif;word-break:break-all;max-width:200px;">
        <a href="${p.url}" target="_blank"
           style="color:#D90B1C;text-decoration:none;font-weight:600;">${path}</a>
        <div style="margin-top:3px;font-size:10px;color:#94a3b8;">${p.responseTime}ms response</div>
      </td>
      <td style="padding:14px 12px;text-align:center;font-size:11px;width:50px;">
        <span style="background:${statusBg};color:${statusTxt};padding:3px 7px;border-radius:20px;font-weight:700;font-size:11px;">
          ${p.status}
        </span>
      </td>
      <td style="padding:14px 12px;font-size:11px;font-family:Arial,sans-serif;max-width:250px;">
        ${p.errors.map(e => `<span style="display:inline-block;margin:2px;background:#fee2e2;color:#b91c1c;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:600;">${e}</span>`).join('')}
        ${p.warnings.map(w => `<span style="display:inline-block;margin:2px;background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:20px;font-size:10px;font-weight:600;">${w}</span>`).join('')}
      </td>
      <td style="padding:14px 12px;text-align:center;white-space:nowrap;font-size:11px;width:80px;">
        ${p.newIssues?.length ? `<span style="color:#ef4444;font-weight:700;">+${p.newIssues.length} New</span><br>` : ''}
        ${p.fixedIssues?.length ? `<span style="color:#10b981;font-weight:700;">-${p.fixedIssues.length} Fixed</span>` : ''}
        ${!p.newIssues?.length && !p.fixedIssues?.length ? `<span style="color:#cbd5e1;">-</span>` : ''}
      </td>
    </tr>`;
  }).join('');

  // Social icon pills
  const socialIcons = Object.values(BRAND.social).map(s => `
    <a href="${s.url}" target="_blank" rel="noopener"
       style="display:inline-block;margin:3px;padding:5px 10px;
              background:${s.color};color:${s.color === '#FFFC00' ? '#000' : '#fff'};
              border-radius:4px;font-size:10px;font-weight:700;
              text-decoration:none;letter-spacing:0.3px;font-family:Arial,sans-serif;
              white-space:nowrap;">${s.icon}&nbsp;${s.label}</a>
  `).join('');

  // 4-week trend text
  const trendDelta = trend.length > 1
    ? trend[trend.length - 1] - trend[trend.length - 2]
    : 0;
  const trendText = trendDelta > 0
    ? `<span style="color:#10b981;">▲ ${trendDelta}% vs last week</span>`
    : trendDelta < 0
      ? `<span style="color:#ef4444;">▼ ${Math.abs(trendDelta)}% vs last week</span>`
      : `<span style="color:#64748b;">→ No change vs last week</span>`;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>SEO Audit Report - growthikmedia.com | ${date}</title>
  <!--[if mso]>
  <noscript>
    <xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml>
  </noscript>
  <![endif]-->
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #f1f5f9; font-family: Arial, Helvetica, sans-serif; color: #334155; }
    a { text-decoration: none; }
    img { border: 0; display: block; }
    /* Responsive */
    @media only screen and (max-width: 600px) {
      .email-wrapper  { width: 100% !important; }
      .email-body     { padding: 16px !important; }
      .stat-cell      { display: block !important; width: 48% !important; margin-bottom: 10px !important; }
      .stat-row       { display: flex !important; flex-wrap: wrap !important; }
      .hide-mobile    { display: none !important; }
      .issue-table td { font-size: 11px !important; padding: 8px 6px !important; }
      .score-circle   { width: 110px !important; height: 110px !important; line-height: 110px !important; font-size: 32px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;">

<!-- Outer wrapper -->
<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;">
<tr><td align="center" style="padding:24px 12px 40px;">

  <!-- Email card -->
  <table class="email-wrapper" width="640" cellpadding="0" cellspacing="0" border="0"
         style="max-width:640px;width:100%;background:#ffffff;border-radius:16px;
                overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.1);">

    <!-- ══════════════════════════════════════════════════════════════════════
         HEADER BAND
    ═════════════════════════════════════════════════════════════════════════ -->
    <tr>
      <td style="background:linear-gradient(135deg,${BRAND.gradientStart} 0%,${BRAND.gradientEnd} 100%);padding:32px 40px;text-align:center;">
        <!-- Logo wordmark -->
        <div style="margin-bottom:12px;">
          <span style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-0.5px;font-family:Arial,sans-serif;">
            Growthik
          </span>
          <span style="font-size:28px;font-weight:400;color:rgba(255,255,255,0.85);font-family:Arial,sans-serif;">
            Media
          </span>
        </div>
        <!-- Report title -->
        <div style="display:inline-block;background:rgba(255,255,255,0.15);
                    border:1px solid rgba(255,255,255,0.3);
                    border-radius:24px;padding:4px 18px;margin-bottom:6px;">
          <span style="font-size:11px;font-weight:700;color:#fff;letter-spacing:2px;text-transform:uppercase;font-family:Arial,sans-serif;">
            Weekly SEO Audit Report
          </span>
        </div>
        <div style="font-size:13px;color:rgba(255,255,255,0.8);font-family:Arial,sans-serif;">
          ${date} &nbsp;|&nbsp; growthikmedia.com
        </div>
      </td>
    </tr>

    <!-- ══════════════════════════════════════════════════════════════════════
         HEALTH SCORE HERO
    ═════════════════════════════════════════════════════════════════════════ -->
    <tr>
      <td style="padding:36px 40px 20px;text-align:center;background:#ffffff;">

        <!-- Score circle -->
        <div class="score-circle" style="display:inline-flex;align-items:center;justify-content:center;
                  width:130px;height:130px;border-radius:50%;
                  border:6px solid ${scoreColor};background:#fff;
                  box-shadow:0 0 0 12px ${scoreColor}18;
                  margin-bottom:12px;">
          <span style="font-size:38px;font-weight:900;color:${scoreColor};font-family:Arial,sans-serif;
                       line-height:1;">${summary.healthScore}%</span>
        </div>

        <div style="font-size:20px;font-weight:700;color:#1e293b;font-family:Arial,sans-serif;margin-bottom:4px;">
          Site Health Score
        </div>
        <div style="font-size:14px;color:#64748b;font-family:Arial,sans-serif;margin-bottom:8px;">
          ${scoreLabel}
        </div>

        <!-- Trend -->
        ${trend.length > 1 ? `
        <div style="margin-top:6px;">
          <table cellpadding="0" cellspacing="0" border="0" style="display:inline-table;vertical-align:middle;margin-right:8px;">
            <tr>${trendBars}</tr>
          </table>
          <span style="font-size:12px;font-family:Arial,sans-serif;">${trendText}</span>
        </div>` : ''}

      </td>
    </tr>

    <!-- ══════════════════════════════════════════════════════════════════════
         SUMMARY STATS
    ═════════════════════════════════════════════════════════════════════════ -->
    <tr>
      <td style="padding:4px 28px 28px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" class="stat-row">
          <tr>
            ${[
      { label: 'Pages Crawled', value: summary.total, bg: '#f8fafc', color: '#334155', border: '#e2e8f0' },
      { label: 'Healthy', value: summary.healthy, bg: '#ecfdf5', color: '#059669', border: '#a7f3d0' },
      { label: 'Warnings', value: summary.warnings, bg: '#fffbeb', color: '#d97706', border: '#fde68a' },
      { label: 'Errors', value: summary.errors, bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
      { label: '↑ New Issues', value: `+${summary.new}`, bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
      { label: '✓ Fixed', value: `-${summary.fixed}`, bg: '#ecfdf5', color: '#059669', border: '#a7f3d0' },
    ].map(s => `
              <td class="stat-cell" style="padding:6px 5px;width:16.66%;vertical-align:top;">
                <div style="background:${s.bg};border:1px solid ${s.border};border-radius:10px;padding:14px 8px;text-align:center;">
                  <div style="font-size:26px;font-weight:900;color:${s.color};font-family:Arial,sans-serif;line-height:1.1;">
                    ${s.value}
                  </div>
                  <div style="font-size:10px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;margin-top:4px;font-family:Arial,sans-serif;">
                    ${s.label}
                  </div>
                </div>
              </td>
            `).join('')}
          </tr>
        </table>
      </td>
    </tr>

    <!-- ══════════════════════════════════════════════════════════════════════
         STATUS BADGE BANNER
    ═════════════════════════════════════════════════════════════════════════ -->
    ${summary.errors > 0 || summary.new > 0 ? `
    <tr>
      <td style="padding:0 28px 20px;">
        <div style="background:linear-gradient(135deg,#fef2f2,#fee2e2);border:1px solid #fecaca;
                    border-radius:10px;padding:14px 20px;text-align:center;">
          <span style="font-size:13px;font-weight:700;color:#dc2626;font-family:Arial,sans-serif;">
            ⚠️ &nbsp;Action Required: ${summary.errors} error${summary.errors !== 1 ? 's' : ''} and ${summary.new} new issue${summary.new !== 1 ? 's' : ''} detected this week
          </span>
        </div>
      </td>
    </tr>` : `
    <tr>
      <td style="padding:0 28px 20px;">
        <div style="background:linear-gradient(135deg,#ecfdf5,#d1fae5);border:1px solid #a7f3d0;
                    border-radius:10px;padding:14px 20px;text-align:center;">
          <span style="font-size:13px;font-weight:700;color:#059669;font-family:Arial,sans-serif;">
            ✅ &nbsp;Great job! No new issues detected this week. Site health is excellent.
          </span>
        </div>
      </td>
    </tr>`}

    <!-- ══════════════════════════════════════════════════════════════════════
         ISSUES TABLE
    ═════════════════════════════════════════════════════════════════════════ -->
    ${issuePages.length > 0 ? `
    <tr>
      <td style="padding:0 28px 28px;">
        <div style="font-size:16px;font-weight:700;color:#1e293b;font-family:Arial,sans-serif;
                    margin-bottom:12px;padding-bottom:8px;border-bottom:2px solid #f1f5f9;">
          📋 Issues by Page
          <span style="font-size:12px;font-weight:400;color:#64748b;margin-left:8px;">${issuePages.length} page${issuePages.length !== 1 ? 's' : ''} with issues</span>
        </div>

        <!-- scrollable on mobile via overflow-x -->
        <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;">
          <table class="issue-table" width="100%" cellpadding="0" cellspacing="0" border="0"
                 style="min-width:500px;border-collapse:collapse;border-radius:8px;overflow:hidden;
                        border:1px solid #e2e8f0;">
            <!-- Table head -->
            <thead>
              <tr style="background:#f8fafc;">
                <th style="padding:11px 12px;text-align:left;font-size:10px;font-weight:700;
                           color:#475569;text-transform:uppercase;letter-spacing:0.8px;
                           font-family:Arial,sans-serif;border-bottom:1px solid #e2e8f0;">URL Path</th>
                <th style="padding:11px 12px;text-align:center;font-size:10px;font-weight:700;
                           color:#475569;text-transform:uppercase;letter-spacing:0.8px;
                           font-family:Arial,sans-serif;border-bottom:1px solid #e2e8f0;width:60px;">Status</th>
                <th style="padding:11px 12px;text-align:left;font-size:10px;font-weight:700;
                           color:#475569;text-transform:uppercase;letter-spacing:0.8px;
                           font-family:Arial,sans-serif;border-bottom:1px solid #e2e8f0;">Detected Issues</th>
                <th style="padding:11px 12px;text-align:center;font-size:10px;font-weight:700;
                           color:#475569;text-transform:uppercase;letter-spacing:0.8px;
                           font-family:Arial,sans-serif;border-bottom:1px solid #e2e8f0;width:85px;">Change</th>
              </tr>
            </thead>
            <tbody>
              ${pageRows}
            </tbody>
          </table>
        </div>
      </td>
    </tr>` : ''}

    <!-- ══════════════════════════════════════════════════════════════════════
         CTA BUTTON
    ═════════════════════════════════════════════════════════════════════════ -->
    <tr>
      <td style="padding:0 28px 36px;text-align:center;">
        <a href="${BRAND.website}" target="_blank"
           style="display:inline-block;background:linear-gradient(135deg,${BRAND.gradientStart},${BRAND.gradientEnd});
                  color:#ffffff;font-size:14px;font-weight:700;padding:14px 36px;
                  border-radius:8px;font-family:Arial,sans-serif;letter-spacing:0.3px;
                  text-decoration:none;box-shadow:0 4px 12px rgba(217,11,28,0.3);">
          Visit Dashboard →
        </a>
        &nbsp;&nbsp;
        <a href="https://github.com/amolkadam5256/GrowthikMedia.com/actions" target="_blank"
           style="display:inline-block;background:#f1f5f9;color:#475569;font-size:14px;
                  font-weight:700;padding:14px 36px;border-radius:8px;
                  font-family:Arial,sans-serif;border:1px solid #e2e8f0;
                  text-decoration:none;">
          View Full Logs
        </a>
      </td>
    </tr>

    <!-- ══════════════════════════════════════════════════════════════════════
         CONTACT INFO STRIP
    ═════════════════════════════════════════════════════════════════════════ -->
    <tr>
      <td style="background:#1e293b;padding:24px 40px;text-align:center;">
        <div style="font-size:13px;font-weight:700;color:#ffffff;font-family:Arial,sans-serif;margin-bottom:10px;">
          ${BRAND.name}
        </div>
        <div style="font-size:11px;color:#94a3b8;font-family:Arial,sans-serif;line-height:2;">
          <a href="mailto:${BRAND.email}" style="color:#f87171;text-decoration:none;">✉ ${BRAND.email}</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <a href="tel:${BRAND.phone.replace(/\s/g, '')}" style="color:#94a3b8;text-decoration:none;">📞 ${BRAND.phone}</a>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span>📍 ${BRAND.address}</span>
        </div>
      </td>
    </tr>

    <!-- ══════════════════════════════════════════════════════════════════════
         SOCIAL LINKS
    ═════════════════════════════════════════════════════════════════════════ -->
    <tr>
      <td style="background:#0f172a;padding:20px 28px;text-align:center;">
        <div style="font-size:10px;font-weight:700;color:#64748b;letter-spacing:1.5px;
                    text-transform:uppercase;font-family:Arial,sans-serif;margin-bottom:12px;">
          Follow Us
        </div>
        <div style="line-height:2;">
          ${socialIcons}
        </div>
      </td>
    </tr>

    <!-- ══════════════════════════════════════════════════════════════════════
         FOOTER NOTE
    ═════════════════════════════════════════════════════════════════════════ -->
    <tr>
      <td style="background:#0f172a;padding:0 28px 24px;text-align:center;border-top:1px solid #1e293b;">
        <p style="font-size:10px;color:#475569;font-family:Arial,sans-serif;margin:0;">
          This is an automated report generated by the Growthik Media SEO Audit Bot via GitHub Actions.
          &nbsp;|&nbsp;
          <a href="${BRAND.website}/unsubscribe" style="color:#64748b;">Unsubscribe</a>
        </p>
        <p style="font-size:10px;color:#334155;font-family:Arial,sans-serif;margin:6px 0 0;">
          © ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.
        </p>
      </td>
    </tr>

  </table>
  <!-- /Email card -->

</td></tr>
</table>
<!-- /Outer wrapper -->

</body>
</html>`;
};

// ── Write output ───────────────────────────────────────────────────────────────
const html = generateHtml(data);
fs.writeFileSync(todayHtmlPath, html);
console.log(`✅ HTML Report Generated: ${todayHtmlPath}`);
