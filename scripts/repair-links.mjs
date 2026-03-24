import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const replacements = [
  { from: /"\/blog\/importance-of-seo"/g, to: '"/blog/why-seo-is-important/"' },
  { from: /'\/blog\/importance-of-seo'/g, to: "'/blog/why-seo-is-important/'" },
  { from: /\/website-design-company-in-[a-zA-Z0-9-]+/g, to: '/services/website-design-company-pune/' },
  { from: /\/seo-company-in-hinjewadi/g, to: '/services/seo/' },
  { from: /\/google-ads-pune/g, to: '/services/ppc-google-ads/' },
  { from: /\/website-development-pune/g, to: '/services/website-development/' },
]

function walkDir(dir) {
  const items = fs.readdirSync(dir)
  for (const item of items) {
    const fullPath = path.join(dir, item)
    if (fs.statSync(fullPath).isDirectory()) {
      if (item !== 'node_modules' && item !== '.next' && item !== '.git') {
        walkDir(fullPath)
      }
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.mdx') || fullPath.endsWith('.md')) {
      processFile(fullPath)
    }
  }
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  let changed = false
  
  replacements.forEach(({ from, to }) => {
    if (from.test(content)) {
      content = content.replace(from, to)
      changed = true
    }
  })
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`[FIXED] ${filePath.replace(rootDir, '')}`)
  }
}

console.log('🚀 Starting Global Link Repair...')
walkDir(rootDir)
console.log('✅ Global Repair Complete.')
