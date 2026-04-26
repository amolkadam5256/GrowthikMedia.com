/**
 * automation/indexnow/submit.mjs
 * ─────────────────────────────────
 * Submits all URLs from the sitemap to IndexNow (Bing, Yandex, etc.)
 *
 * Usage:
 *   node automation/indexnow/submit.mjs
 *
 * Requirements:
 *   - SITE_URL in .env or default
 *   - INDEXNOW_KEY in .env
 */

import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = process.env.SITE_URL || 'https://www.growthikmedia.com';
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '7b7a8d5e8c4b4f5a9b7e7a8d5e8c4b4f'; // Default key
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

async function fetchUrlsFromSitemap(url) {
  console.log(`🌐 Fetching sitemap: ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xmlData = await res.text();
  const parser = new XMLParser();
  const jsonObj = parser.parse(xmlData);

  let urls = [];

  // Handle sitemap index
  if (jsonObj.sitemapindex && jsonObj.sitemapindex.sitemap) {
    const sitemaps = Array.isArray(jsonObj.sitemapindex.sitemap)
      ? jsonObj.sitemapindex.sitemap
      : [jsonObj.sitemapindex.sitemap];
    
    for (const sm of sitemaps) {
      const childUrls = await fetchUrlsFromSitemap(sm.loc);
      urls = urls.concat(childUrls);
    }
  } 
  // Handle urlset
  else if (jsonObj.urlset && jsonObj.urlset.url) {
    const urlEntries = Array.isArray(jsonObj.urlset.url)
      ? jsonObj.urlset.url
      : [jsonObj.urlset.url];
    urls = urlEntries.map(u => u.loc);
  }

  return urls.filter(u => u && u.startsWith('http'));
}

async function submitToIndexNow(urls) {
  if (urls.length === 0) {
    console.log('❌ No URLs found to submit.');
    return;
  }

  console.log(`🚀 Submitting ${urls.length} URLs to IndexNow...`);

  const payload = {
    host: new URL(SITE_URL).hostname,
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
    'https://search.yandex.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`📤 Sending to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log(`✅ Success for ${endpoint}`);
      } else {
        const text = await response.text();
        console.error(`❌ Failed for ${endpoint}: ${response.status} ${text}`);
      }
    } catch (error) {
      console.error(`❌ Error submitting to ${endpoint}:`, error.message);
    }
  }
}

async function run() {
  try {
    const allUrls = await fetchUrlsFromSitemap(SITEMAP_URL);
    // Unique URLs only
    const uniqueUrls = [...new Set(allUrls)];
    await submitToIndexNow(uniqueUrls);
    console.log('🏁 IndexNow submission process finished.');
  } catch (error) {
    console.error('❌ Fatal error:', error.message);
    process.exit(1);
  }
}

run();
