import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const searchDirs = ['app', 'components'];
const servicePagesPath = '/services/';

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else if (name.endsWith('.tsx') || name.endsWith('.mdx')) {
      files.push(name);
    }
  }
  return files;
}

const allFiles = searchDirs.flatMap(dir => getFiles(path.join(rootDir, dir)));
const linkCounts = {};

// Regex for internal links: href="/path" or href={`/path`}
const hrefRegex = /href=["'](\/services\/[^"'\s?#]+)["']|href=\{\s*[`'"](\/services\/[^`'"\s?#]+)[`'"]\s*\}/g;

allFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = hrefRegex.exec(content)) !== null) {
    const link = match[1] || match[2];
    // Clean trailing slash for consistency
    const cleanLink = link.endsWith('/') ? link : link + '/';
    linkCounts[cleanLink] = (linkCounts[cleanLink] || 0) + 1;
  }
});

const sortedLinks = Object.entries(linkCounts)
  .sort((a, b) => a[1] - b[1]);

console.log('\n--- Internal Link Audit Report ---');
console.log('Sorted by link count (ascending):\n');
console.table(sortedLinks.map(([path, count]) => ({ 'Path': path, 'Internal Links': count })));

console.log('\nTotal service pages found with at least one link:', sortedLinks.length);
