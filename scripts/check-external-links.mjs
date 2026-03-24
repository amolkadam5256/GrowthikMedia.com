import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const SCAN_DIRS = ['app', 'components', 'content'];
const EXTENSIONS = ['.tsx', '.ts', '.mdx'];

// Regex to find external URLs (starting with http/https)
const EXT_LINK_REGEX = /href=["'](https?:\/\/[^"']+)["']/g;

async function checkUrl(url) {
  try {
    const res = await fetch(url, { method: 'HEAD', timeout: 5000 });
    if (res.status >= 400) {
      return { success: false, status: res.status };
    }
    return { success: true };
  } catch (err) {
    return { success: false, error: err.message };
  }
}

async function scanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  const issues = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let match;
    while ((match = EXT_LINK_REGEX.exec(line)) !== null) {
      const url = match[1];
      // Skip internal domain if mistakenly fully qualified
      if (url.includes('growthikmedia.com')) continue;

      const result = await checkUrl(url);
      if (!result.success) {
        issues.push({ 
          line: i + 1, 
          url, 
          error: result.status || result.error 
        });
      }
    }
  }

  if (issues.length > 0) {
    console.log(`\n📄 File: ${path.relative(root, filePath)}`);
    issues.forEach(issue => {
      console.log(`   [L${issue.line}] ❌ Broken External Link: ${issue.url} (Error: ${issue.error})`);
    });
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      await walkDir(fullPath);
    } else if (stats.isFile() && EXTENSIONS.includes(path.extname(file))) {
      await scanFile(fullPath);
    }
  }
}

console.log('🔍 Checking all external links (HEAD requests)...');
(async () => {
  for (const dir of SCAN_DIRS) {
    const dirPath = path.join(root, dir);
    if (fs.existsSync(dirPath)) {
      await walkDir(dirPath);
    }
  }
  console.log('\n✅ External link check complete.');
})();
