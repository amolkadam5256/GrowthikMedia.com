const fs = require('fs')
const path = require('path')

const slugs = [
  'ardy-real-estate-dubai', 'majestic-realties-pune', 'mount-castle-hilltop-plots',
  'nandavan-park-bhugaon', 'pune-dream-homes', 'naukri-india-dubai-jobs',
  'autobat-manufacturing-website', 'dubai-business-connect-uae', 'zeus-manpower-recruitment',
  'aria-freightways-logistics', 'amit-kadam-finance-portfolio',
  'webmarkx-digital-marketing-agency', 'shabdbramhand-creative-agency', 'hajj-umrah-travel-portal',
  'healurmind-mental-health-platform', 'ecti-educational-institute-portal',
  'diksha-computers-it-training', 'doctordom-appointment-platform',
  'shopnexus-ecommerce-platform', 'growthikmedia-official-website', 'sk-salon-beauty-website'
]

const dir = path.join(__dirname, '../public/portfolio')
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

slugs.forEach(slug => {
  const title = slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <rect width="1200" height="630" fill="#111827"/>
    <rect x="2" y="2" width="1196" height="626" rx="12" fill="none" stroke="#374151" stroke-width="1"/>
    <text x="600" y="290" font-family="Arial,sans-serif" font-size="26" font-weight="bold"
      fill="#e85d04" text-anchor="middle">${title}</text>
    <text x="600" y="336" font-family="Arial,sans-serif" font-size="15"
      fill="#6b7280" text-anchor="middle">Growthik Media - Portfolio Project</text>
    <text x="600" y="364" font-family="Arial,sans-serif" font-size="12"
      fill="#4b5563" text-anchor="middle">Replace with actual project screenshot (1200×630px)</text>
  </svg>`
  fs.writeFileSync(path.join(dir, `${slug}.jpg`), svg)
  console.log(`✓ ${slug}.jpg`)
})
console.log(`\nDone - ${slugs.length} placeholders created in /public/portfolio/`)
