import fs from 'fs/promises';
import path from 'path';
import * as cheerio from 'cheerio';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NEXT_DIR = path.join(__dirname, '..', '.next', 'server', 'app');
const OUTPUT_DIR = path.join(__dirname, '..', 'extracted_json_pages');

async function getHtmlFiles(dir, fileList = []) {
  try {
    const files = await fs.readdir(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);
      if (stat.isDirectory()) {
        await getHtmlFiles(filePath, fileList);
      } else if (filePath.endsWith('.html')) {
        fileList.push(filePath);
      }
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
        console.error('Error reading directory:', dir, error);
    }
  }
  return fileList;
}

async function extractContent() {
  const htmlFiles = await getHtmlFiles(NEXT_DIR);
  
  if (htmlFiles.length === 0) {
      console.log('No HTML files found in .next/server/app. Please run "npm run build" first.');
      return;
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  for (const filePath of htmlFiles) {
    // Determine page path (e.g., /services/seo)
    let pagePath = filePath.replace(NEXT_DIR, '').replace(/\\/g, '/').replace('.html', '');
    if (pagePath.endsWith('/index')) {
        pagePath = pagePath.replace('/index', '/') || '/';
    }
    if (pagePath === '') pagePath = '/';

    const htmlContent = await fs.readFile(filePath, 'utf-8');
    const $ = cheerio.load(htmlContent);

    const pageData = {
      url: pagePath,
      title: $('title').text() || '',
      description: $('meta[name="description"]').attr('content') || '',
      faqs: [],
      sections: [],
      rawText: ''
    };

    // Extract JSON-LD FAQs
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const jsonData = JSON.parse($(el).html());
        const extractFaq = (data) => {
            if (Array.isArray(data)) {
                data.forEach(extractFaq);
            } else if (data && typeof data === 'object') {
                if (data['@type'] === 'FAQPage' && Array.isArray(data.mainEntity)) {
                    data.mainEntity.forEach(faq => {
                        if (faq['@type'] === 'Question') {
                            pageData.faqs.push({
                                question: faq.name,
                                answer: faq.acceptedAnswer?.text || ''
                            });
                        }
                    });
                } else {
                    Object.values(data).forEach(extractFaq);
                }
            }
        };
        extractFaq(jsonData);
      } catch (e) {
        // ignore parse errors
      }
    });

    // Clean up unwanted tags for text extraction
    $('script, style, noscript, svg, nav, footer, iframe').remove();

    // Extract sections
    // Group content by section or headers
    let currentSection = { heading: 'Main', content: [] };
    
    // Fallback: extract all visible text word by word
    // We get text from body, replacing multiple spaces and newlines
    pageData.rawText = $('body').text().replace(/\s+/g, ' ').trim();

    // Heuristically find sections
    $('section, div').each((_, el) => {
        const $el = $(el);
        const heading = $el.find('h1, h2, h3, h4').first().text().replace(/\s+/g, ' ').trim();
        const textContent = $el.text().replace(/\s+/g, ' ').trim();
        
        // Try to filter out duplicate huge divs by checking text length and if it's a structural section
        if (el.tagName === 'section' || (heading && textContent.length > 50 && textContent.length < 5000)) {
            pageData.sections.push({
                heading: heading || 'Unnamed Section',
                content: textContent
            });
        }
    });

    // Remove overlapping sections (simple deduplication by content)
    const uniqueSections = [];
    const seenContent = new Set();
    pageData.sections.forEach(sec => {
        if (!seenContent.has(sec.content) && sec.content.length > 20) {
            seenContent.add(sec.content);
            uniqueSections.push(sec);
        }
    });
    pageData.sections = uniqueSections;

    // If no specific FAQs were found in schema, try to find them in text
    if (pageData.faqs.length === 0) {
        $('h2, h3').each((_, el) => {
            const text = $(el).text().trim();
            if (text.endsWith('?')) {
                const answer = $(el).nextUntil('h1, h2, h3').text().replace(/\s+/g, ' ').trim();
                if (answer) {
                    pageData.faqs.push({ question: text, answer });
                }
            }
        });
    }

    let filename = pagePath === '/' ? 'home.json' : pagePath.replace(/^\//, '').replace(/\//g, '_') + '.json';
    const outPath = path.join(OUTPUT_DIR, filename);
    await fs.writeFile(outPath, JSON.stringify(pageData, null, 2));
    console.log(`Saved: ${filename}`);
  }

  console.log(`Successfully extracted content for ${htmlFiles.length} pages to ${OUTPUT_DIR}/`);
}

extractContent().catch(console.error);
