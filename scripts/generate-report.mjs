import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const auditPath = path.resolve(__dirname, '../audit-reports');
const latestJsonPath = path.join(auditPath, 'latest.json');
const today = new Date().toISOString().split('T')[0];
const todayHtmlPath = path.join(auditPath, `report-${today}.html`);

if (!fs.existsSync(latestJsonPath)) {
  console.error('Latest JSON report not found.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(latestJsonPath, 'utf8'));

const generateHtml = (data) => {
  const { summary, pages, trend, date } = data;
  
  const scoreColor = summary.healthScore > 90 ? '#10b981' : summary.healthScore > 80 ? '#f59e0b' : '#ef4444';
  
  const pageRows = pages
    .filter(p => p.errors.length > 0 || p.warnings.length > 0)
    .sort((a, b) => b.errors.length - a.errors.length)
    .map(p => `
      <tr>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px;">
          <a href="${p.url}" target="_blank" style="color: #2563eb; text-decoration: none;">${p.url.replace('https://www.growthikmedia.com', '/')}</a>
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">
          ${p.errors.map(e => `<span style="background: #fee2e2; color: #b91c1c; padding: 2px 6px; border-radius: 4px; font-size: 11px; margin-right: 4px; display: inline-block;">${e}</span>`).join('')}
          ${p.warnings.map(w => `<span style="background: #fef3c7; color: #92400e; padding: 2px 6px; border-radius: 4px; font-size: 11px; margin-right: 4px; display: inline-block;">${w}</span>`).join('')}
        </td>
        <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px;">
          ${p.newIssues ? `<span style="color: #ef4444; font-weight: bold;">New!</span>` : ''}
          ${p.fixedIssues ? `<span style="color: #10b981; font-weight: bold;">Fixed!</span>` : ''}
        </td>
      </tr>
    `).join('');

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>SEO Audit Report</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #334155;">
  <div style="max-width: 800px; margin: 20px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
    <!-- Header -->
    <div style="background: linear-gradient(to right, #D90B1C, #F22E52); padding: 30px; color: #ffffff; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; text-transform: uppercase; letter-spacing: 2px; font-weight: 900;">SEO Audit Report</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.8; font-size: 14px;">growthikmedia.com | ${date}</p>
    </div>

    <!-- Health Score Card -->
    <div style="padding: 30px; text-align: center;">
      <div style="display: inline-block; padding: 20px; border-radius: 50%; border: 8px solid ${scoreColor};">
        <span style="font-size: 48px; font-weight: 900; color: ${scoreColor};">${summary.healthScore}%</span>
      </div>
      <h2 style="margin: 10px 0 0 0; color: #334155;">Site Health Score</h2>
      
      <!-- Sparkline Simulation (Trend) -->
      ${trend.length > 1 ? `
        <div style="margin-top: 15px; display: flex; justify-content: center; align-items: flex-end; gap: 4px; height: 30px;">
          ${trend.map((t, i) => `
            <div style="width: 8px; height: ${t/2}px; background-color: ${i === trend.length - 1 ? scoreColor : '#cbd5e1'}; border-radius: 2px;"></div>
          `).join('')}
          <span style="font-size: 10px; color: #94a3b8; font-weight: bold; margin-left: 5px;">Trend</span>
        </div>
      ` : ''}
    </div>

    <!-- Summary Stats -->
    <div style="display: grid; display: flex; flex-wrap: wrap; padding: 0 30px 30px 30px; gap: 15px;">
      <div style="flex: 1; min-width: 150px; background: #f1f5f9; padding: 15px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: 900; color: #334155;">${summary.total}</div>
        <div style="font-size: 11px; text-transform: uppercase; color: #64748b; font-weight: bold;">Pages Crawled</div>
      </div>
      <div style="flex: 1; min-width: 150px; background: #ecfdf5; padding: 15px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: 900; color: #10b981;">${summary.healthy}</div>
        <div style="font-size: 11px; text-transform: uppercase; color: #059669; font-weight: bold;">Healthy Pages</div>
      </div>
      <div style="flex: 1; min-width: 150px; background: #fff7ed; padding: 15px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: 900; color: #ea580c;">${summary.warnings}</div>
        <div style="font-size: 11px; text-transform: uppercase; color: #c2410c; font-weight: bold;">Warnings</div>
      </div>
      <div style="flex: 1; min-width: 150px; background: #fef2f2; padding: 15px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: 900; color: #ef4444;">${summary.errors}</div>
        <div style="font-size: 11px; text-transform: uppercase; color: #b91c1c; font-weight: bold;">Errors</div>
      </div>
      <div style="flex: 1; min-width: 150px; background: #fef2f2; border: 2px solid #ef4444; padding: 15px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: 900; color: #ef4444;">+${summary.new}</div>
        <div style="font-size: 11px; text-transform: uppercase; color: #b91c1c; font-weight: bold;">New Issues</div>
      </div>
      <div style="flex: 1; min-width: 150px; background: #ecfdf5; border: 2px solid #10b981; padding: 15px; border-radius: 8px; text-align: center;">
        <div style="font-size: 20px; font-weight: 900; color: #10b981;">-${summary.fixed}</div>
        <div style="font-size: 11px; text-transform: uppercase; color: #059669; font-weight: bold;">Fixed Issues</div>
      </div>
    </div>

    <!-- Details Table -->
    <div style="padding: 0 30px 30px 30px;">
      <h3 style="margin-bottom: 15px;">Issues by Page</h3>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f1f5f9;">
              <th style="padding: 12px; text-align: left; font-size: 12px; font-weight: 900; text-transform: uppercase; color: #475569; width: 40%;">URL Path</th>
              <th style="padding: 12px; text-align: left; font-size: 12px; font-weight: 900; text-transform: uppercase; color: #475569;">Detected Issues</th>
              <th style="padding: 12px; text-align: left; font-size: 12px; font-weight: 900; text-transform: uppercase; color: #475569;">Change</th>
            </tr>
          </thead>
          <tbody>
            ${pageRows}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f1f5f9; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
      <p style="margin: 0; font-size: 12px; color: #64748b; font-weight: bold;">Automated SEO Audit for Growthik Media</p>
      <p style="margin: 5px 0 0 0; font-size: 10px; color: #94a3b8;">This is an automated system run via GitHub Actions.</p>
    </div>
  </div>
</body>
</html>
  `;
};

const html = generateHtml(data);
fs.writeFileSync(todayHtmlPath, html);
console.log(`✅ HTML Report Generated: report-${today}.html`);
