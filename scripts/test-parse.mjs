import fs from 'fs/promises';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogDir = path.join(__dirname, '..', '.next', 'server', 'app', 'blog');
const testFile = path.join(blogDir, 'b2b-content-marketing-india.html');

async function testParse() {
  const content = await fs.readFile(testFile, 'utf-8');
  const $ = cheerio.load(content);
  
  const timeElements = $('time').map((i, el) => $(el).attr('datetime') || $(el).text()).get();
  console.log('Time elements:', timeElements);
  
  // Let's also output a chunk of HTML from the top of the article to see where the date is
  console.log('Top of article HTML:', $('article').parent().parent().html().substring(0, 1000));
}

testParse().catch(console.error);
