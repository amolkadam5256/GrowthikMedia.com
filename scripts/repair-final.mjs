import fs from 'fs'
import path from 'path'

const replacements = [
  // Blog slug fix
  { from: /blog\/importance-of-seo/g, to: 'blog/why-seo-is-important/' },
  // Area slug consolidation
  { from: /website-design-company-in-(baner|hadapsar|wakad|pcmc|viman-nagar|aundh|kothrud)/g, to: 'services/website-design-company-pune' },
  { from: /seo-company-in-hinjewadi/g, to: 'services/seo' },
  // Generic Pune service redirects
  { from: /google-ads-pune/g, to: 'services/ppc-google-ads' },
  { from: /website-development-pune/g, to: 'services/website-development' },
  { from: /seo-services-pune/g, to: 'services/seo' },
]

function fixRecursive(folder) {
  const items = fs.readdirSync(folder, { withFileTypes: true })
  for (const item of items) {
    const fullPath = path.join(folder, item.name)
    if (item.isDirectory()) {
      if (item.name !== 'node_modules' && item.name !== '.next') {
        fixRecursive(fullPath)
      }
    } else if (/\.(tsx|ts|mdx|md)$/.test(item.name)) {
      let content = fs.readFileSync(fullPath, 'utf8')
      let changed = false
      replacements.forEach(r => {
        if (r.from.test(content)) {
          content = content.replace(r.from, r.to)
          changed = true
        }
      })
      if (changed) {
        fs.writeFileSync(fullPath, content)
        console.log(`[FIXED] ${fullPath}`)
      }
    }
  }
}

console.log('🚀 Final Repair Sweep...')
fixRecursive('app')
fixRecursive('components')
fixRecursive('constants')
console.log('✅ Done.')
