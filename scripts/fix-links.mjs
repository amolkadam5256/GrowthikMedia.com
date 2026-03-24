import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const SCAN_DIRS = ['app', 'components', 'content', 'lib'];
const EXTENSIONS = ['.tsx', '.ts', '.mdx'];

// Old -> New URL Map
const URL_MAP = {
  '/google-ads-pune/': '/services/ppc-google-ads/',
  '/google-ads-pune': '/services/ppc-google-ads/',
  '/services/digital-marketing/': '/services/',
  '/services/digital-marketing': '/services/',
  '/services/google-ads/': '/services/ppc-google-ads/',
  '/services/google-ads': '/services/ppc-google-ads/',
  '/seo-services-pune/': '/services/seo/',
  '/seo-services-pune': '/services/seo/',
  '/services/video-production/': 'REMOVE THIS LINK (410)',
  '/services/video-production': 'REMOVE THIS LINK (410)',
  '/website-development-pune/': '/services/website-development/',
  '/website-development-pune': '/services/website-development/',
  '/blog/importance-of-seo/': '/blog/why-seo-is-important/',
  '/blog/importance-of-seo': '/blog/why-seo-is-important/',
  '/services/seo-company-in-pune/': '/services/seo/',
  '/services/seo-company-in-pune': '/services/seo/',
};

function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  let hasIssue = false;

  lines.forEach((line, index) => {
    Object.keys(URL_MAP).forEach(oldUrl => {
      // Look for href="oldUrl" or href='oldUrl'
      const pattern = new RegExp(`href=["']${oldUrl}["']`, 'g');
      if (pattern.test(line)) {
        if (!hasIssue) {
          console.log(`\n📄 File: ${path.relative(root, filePath)}`);
          hasIssue = true;
        }
        console.log(`   [L${index + 1}] Found: ${oldUrl} -> Suggested: ${URL_MAP[oldUrl]}`);
      }
    });
  });
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      walkDir(fullPath);
    } else if (stats.isFile() && EXTENSIONS.includes(path.extname(file))) {
      scanFile(fullPath);
    }
  });
}

console.log('🔍 Scanning for broken internal links...');
SCAN_DIRS.forEach(dir => {
  const dirPath = path.join(root, dir);
  if (fs.existsSync(dirPath)) {
    walkDir(dirPath);
  }
});

console.log('\n✅ Scan complete.');
