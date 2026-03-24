import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { XMLParser } from 'fast-xml-parser';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const auditPath = path.resolve(__dirname, '../audit-reports');

// Ensure directory exists
if (!fs.existsSync(auditPath)) {
  fs.mkdirSync(auditPath, { recursive: true });
}

const latestJsonPath = path.join(auditPath, 'latest.json');
const today = new Date().toISOString().split('T')[0];
const todayJsonPath = path.join(auditPath, `report-${today}.json`);

const SITE_URL = process.env.SITE_URL || 'https://www.growthikmedia.com';
const SITEMAP_URL = process.env.SITEMAP_URL || `${SITE_URL}/sitemap.xml`;
const TEST_MODE = process.argv.includes('--test-mode');

const DELAY = 1000; // 1s rate limit
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchSitemap() {
  console.log(`🌐 Fetching sitemap: ${SITEMAP_URL}`);
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xmlData = await res.text();
  const parser = new XMLParser();
  const jsonObj = parser.parse(xmlData);
  
  if (!jsonObj.urlset || !jsonObj.urlset.url) {
    throw new Error('Sitemap format not recognized or empty.');
  }
  
  const urls = Array.isArray(jsonObj.urlset.url) 
    ? jsonObj.urlset.url.map(u => u.loc) 
    : [jsonObj.urlset.url.loc];

  return urls.filter(u => u && u.startsWith('http'));
}

async function auditUrl(url) {
  const start = Date.now();
  const results = {
    url,
    status: 0,
    responseTime: 0,
    title: '',
    metaDesc: '',
    h1: '',
    canonical: '',
    wordCount: 0,
    links: 0,
    missingAlt: 0,
    noindex: false,
    errors: [],
    warnings: []
  };

  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'GrowthikSEOAuditBot/1.0' } });
    results.status = res.status;
    results.responseTime = Date.now() - start;

    if (res.status !== 200) {
      results.errors.push(`HTTP ${res.status}`);
      return results;
    }

    const html = await res.text();
    const $ = cheerio.load(html);

    results.title = $('title').text().trim();
    results.metaDesc = $('meta[name="description"]').attr('content') || '';
    results.h1 = $('h1').first().text().trim();
    results.canonical = $('link[rel="canonical"]').attr('href') || '';
    results.noindex = $('meta[name="robots"]').attr('content')?.includes('noindex') || false;
    
    // Word count (approximate visible text)
    const text = $('body').text();
    results.wordCount = text.split(/\s+/).filter(w => w.length > 0).length;

    // Alt text check
    $('img').each((i, el) => {
      if (!$(el).attr('alt')) results.missingAlt++;
    });

    results.links = $('a[href]').length;

    // SEO Validation
    if (!results.title) results.errors.push('Missing Title Tag');
    if (results.title.length > 70) results.warnings.push('Title too long (>70 chars)');
    
    if (!results.metaDesc) results.errors.push('Missing Meta Description');
    if (results.metaDesc.length > 165) results.warnings.push('Meta description too long (>165 chars)');
    
    if (!results.h1) results.errors.push('Missing H1 Tag');
    if ($('h1').length > 1) results.warnings.push('Multiple H1 tags detected');

    if (results.wordCount < 300) results.warnings.push('Low word count (<300)');
    if (results.noindex) results.warnings.push('Page is noindex');
    if (results.canonical && results.canonical !== url && !results.canonical.endsWith('/') && results.canonical + '/' !== url) {
        results.warnings.push('Canonical mismatch');
    }

  } catch (err) {
    results.status = 500;
    results.errors.push(`Bot Error: ${err.message}`);
  }

  return results;
}

async function run() {
  const allUrls = await fetchSitemap();
  const urlsToAudit = TEST_MODE ? allUrls.slice(0, 10) : allUrls;
  
  console.log(`🚀 Starting audit for ${urlsToAudit.length} URLs (Test Mode: ${TEST_MODE})`);
  
  const report = {
    date: today,
    summary: { total: 0, healthy: 0, errors: 0, warnings: 0, new: 0, fixed: 0, healthScore: 0 },
    pages: [],
    trend: []
  };

  const lastWeekReport = fs.existsSync(latestJsonPath) 
    ? JSON.parse(fs.readFileSync(latestJsonPath, 'utf8')) 
    : { pages: [], summary: { healthScore: 0 }, trend: [] };

  for (const url of urlsToAudit) {
    console.log(`🔍 Auditing: ${url}`);
    const result = await auditUrl(url);
    
    // Compare with last week
    const pastResult = lastWeekReport.pages.find(p => p.url === url);
    if (pastResult) {
      const currentIssues = [...result.errors, ...result.warnings];
      const pastIssues = [...pastResult.errors, ...pastResult.warnings];
      
      const newIssues = currentIssues.filter(i => !pastIssues.includes(i));
      const fixedIssues = pastIssues.filter(i => !currentIssues.includes(i));
      
      if (newIssues.length > 0) {
        result.newIssues = newIssues;
        report.summary.new += newIssues.length;
      }
      if (fixedIssues.length > 0) {
        result.fixedIssues = fixedIssues;
        report.summary.fixed += fixedIssues.length;
      }
    }

    report.pages.push(result);
    report.summary.total++;
    if (result.errors.length > 0) report.summary.errors += result.errors.length;
    if (result.warnings.length > 0) report.summary.warnings += result.warnings.length;
    if (result.errors.length === 0 && result.warnings.length === 0) report.summary.healthy++;

    await sleep(DELAY);
  }

  // Health Score Calculation
  const totalPotentialErrors = report.summary.total * 2; // Arbitrary weights
  const actualImpact = (report.summary.errors * 2) + (report.summary.warnings * 0.5);
  report.summary.healthScore = Math.max(0, Math.min(100, Math.round(100 - (actualImpact / totalPotentialErrors * 100))));

  // Trend (last 3 weeks from previous report + current)
  report.trend = [...(lastWeekReport.trend || []).slice(-3), report.summary.healthScore];

  fs.writeFileSync(todayJsonPath, JSON.stringify(report, null, 2));
  fs.writeFileSync(latestJsonPath, JSON.stringify(report, null, 2));
  
  console.log(`✅ Audit Complete. Health Score: ${report.summary.healthScore}%`);
}

run().catch(console.error);
