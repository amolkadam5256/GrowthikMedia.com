import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const auditResults = []

function scanDir(dir) {
  const items = fs.readdirSync(path.join(rootDir, dir), { withFileTypes: true })
  for (const item of items) {
    const fullPath = path.join(dir, item.name)
    if (item.isDirectory()) {
      if (item.name !== 'node_modules' && item.name !== '.next' && item.name !== '_components') {
        scanDir(fullPath)
      }
    } else if (item.name === 'page.tsx') {
      const content = fs.readFileSync(path.join(rootDir, fullPath), 'utf8')
      const hasCanonical = content.includes('canonical:')
      const canonicalMatch = content.match(/canonical:\s*[`'"](.*)[`'"]/ )
      
      auditResults.push({
        file: fullPath,
        hasCanonical,
        canonicalValue: canonicalMatch ? canonicalMatch[1] : 'NONE'
      })
    }
  }
}

console.log('🔍 Auditing Canonical Tags...')
scanDir('app')

console.table(auditResults)

const missing = auditResults.filter(r => !r.hasCanonical)
if (missing.length > 0) {
  console.warn(`\n⚠️  Found ${missing.length} pages missing canonical tags:`)
  missing.forEach(m => console.log(` - ${m.file}`))
} else {
  console.log('\n✅ No missing canonical tags found in page.tsx files.')
}

const potentialIssues = auditResults.filter(r => r.hasCanonical && !r.canonicalValue.endsWith('/'))
if (potentialIssues.length > 3) { // Expect layout.tsx or root to potentially use different style
  console.warn(`\n⚠️  Found ${potentialIssues.length} pages with canonical values potentially missing trailing slashes.`)
}
