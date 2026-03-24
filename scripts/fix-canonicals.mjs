import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const CONTACT_INFO_WEBSITE = 'https://www.growthikmedia.com'

function fixCanonical(filePath) {
  // Extract slug from path like app/(public)/services/(digital-marketing)/seo/page.tsx
  const segments = filePath.split(path.sep)
  
  // Find "services" index
  const servicesIdx = segments.indexOf('services')
  let slug = ''
  if (servicesIdx !== -1 && segments.length > servicesIdx + 2) {
    // If it's something like services/(group)/slug/page.tsx
    if (segments[servicesIdx + 1].startsWith('(')) {
       slug = segments[servicesIdx + 2]
    } else {
       slug = segments[servicesIdx + 1]
    }
  }

  // Handle nested services like website-development/nextjs
  if (servicesIdx !== -1) {
     const relativeFromServices = segments.slice(servicesIdx + 1)
     const cleanSegments = relativeFromServices.filter(s => !s.startsWith('(') && s !== 'page.tsx')
     slug = cleanSegments.join('/')
  }

  if (!slug || slug === 'page.tsx') {
    // Check if it's a top level page like about/page.tsx
    if (segments.length >= 2 && segments[segments.length-1] === 'page.tsx') {
       const pageDir = segments[segments.length-2]
       if (!pageDir.startsWith('(')) slug = pageDir
    }
  }

  if (!slug || slug === 'page.tsx' || slug.includes('(')) return

  let content = fs.readFileSync(path.join(rootDir, filePath), 'utf8')
  
  // Create metadata if missing or update canonical
  const canonicalUrl = `${CONTACT_INFO_WEBSITE}/services/${slug}/`.replace('/services/about/', '/about/').replace('/services/contact/', '/contact/').replace('/services/blog/', '/blog/')
  
  const canonicalEntry = `alternates: { canonical: "${canonicalUrl}" }`
  
  if (content.includes('alternates:')) {
    // Update existing
    content = content.replace(/canonical:\s*[`'"].*[`'"]/, `canonical: "${canonicalUrl}"`)
  } else if (content.includes('export const metadata: Metadata = {')) {
    // Add to existing metadata object
    content = content.replace('export const metadata: Metadata = {', `export const metadata: Metadata = {\n  alternates: { canonical: "${canonicalUrl}" },`)
  } else if (content.includes('export const metadata: Metadata =')) {
      // Handle cases where it might be formatted differently
      content = content.replace('export const metadata: Metadata =', `export const metadata: Metadata = {\n  alternates: { canonical: "${canonicalUrl}" },\n`)
  } else {
    // Add new metadata block after imports
    const lines = content.split('\n')
    let lastImportIdx = -1
    lines.forEach((line, idx) => {
      if (line.startsWith('import')) lastImportIdx = idx
    })
    
    const metadataBlock = `\nexport const metadata: Metadata = {\n  alternates: { canonical: "${canonicalUrl}" },\n};\n`
    lines.splice(lastImportIdx + 1, 0, metadataBlock)
    content = lines.join('\n')
  }

  fs.writeFileSync(path.join(rootDir, filePath), content)
  console.log(`[FIXED] ${filePath} -> ${canonicalUrl}`)
}

function processDir(dir) {
  const items = fs.readdirSync(path.join(rootDir, dir), { withFileTypes: true })
  for (const item of items) {
    const fullPath = path.join(dir, item.name)
    if (item.isDirectory()) {
       if (!item.name.startsWith('admin') && item.name !== 'api' && item.name !== 'chat' && !item.name.startsWith('_')) {
          processDir(fullPath)
       }
    } else if (item.name === 'page.tsx' && !fullPath.includes('blog') && !fullPath.includes('[slug]') && !fullPath.includes('audit')) {
       fixCanonical(fullPath)
    }
  }
}

console.log('🚀 Automatic Canonical Repair Starting...')
processDir('app')
console.log('✅ Repair Done.')
