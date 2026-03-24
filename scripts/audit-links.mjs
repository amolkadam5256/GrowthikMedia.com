import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

/**
 * Growthik Media: Technical SEO Link Audit Script
 * Scans codebase for hardcoded broken links.
 */

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const brokenLinks = {
  '/google-ads-pune': '/services/ppc-google-ads/',
  '/services/digital-marketing': '/services/',
  '/services/google-ads': '/services/ppc-google-ads/',
  '/services/video-production': '(410 Gone)',
  '/website-development-pune': '/services/website-development/',
  '/seo-services-pune': '/services/seo/',
  '/seo-company-in-hinjewadi': '/services/seo/',
  '/services/seo-company-in-pune': '/services/seo/',
  '/website-design-company-in-aundh': '/services/website-design-company-pune/',
  '/website-design-company-in-baner': '/services/website-design-company-pune/',
  '/website-design-company-in-hadapsar': '/services/website-design-company-pune/',
  '/website-design-company-in-kothrud': '/services/website-design-company-pune/',
  '/website-design-company-in-pcmc': '/services/website-design-company-pune/',
  '/website-design-company-in-viman-nagar': '/services/website-design-company-pune/',
  '/website-design-company-in-wakad': '/services/website-design-company-pune/',
  '/blog/importance-of-seo': '/blog/why-seo-is-important/',
}

const auditDirs = ['app', 'pages', 'components', 'content']
const extensions = ['.tsx', '.ts', '.mdx', '.md']

function scanFiles(dir) {
  const absoluteDir = path.join(rootDir, dir)
  if (!fs.existsSync(absoluteDir)) return

  const items = fs.readdirSync(absoluteDir)
  for (const item of items) {
    const fullPath = path.join(absoluteDir, item)
    if (fs.statSync(fullPath).isDirectory()) {
      scanFiles(path.join(dir, item))
    } else if (extensions.includes(path.extname(fullPath))) {
      auditFile(fullPath)
    }
  }
}

function auditFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const lines = content.split('\n')
  
  lines.forEach((line, index) => {
    Object.keys(brokenLinks).forEach((broken) => {
      // Check for exact href or value matches (excluding canonicals which are usually longer)
      if (line.includes(`"${broken}"`) || line.includes(`'${broken}'`)) {
        console.warn(`[AUDIT] Broken link in ${filePath.replace(rootDir, '')} (Line ${index + 1}): "${broken}" -> Suggested: "${brokenLinks[broken]}"`)
      }
    })
  })
}

console.log('🚀 Starting Growthik Media Link Audit...')
auditDirs.forEach(scanFiles)
console.log('✅ Audit Complete.')
