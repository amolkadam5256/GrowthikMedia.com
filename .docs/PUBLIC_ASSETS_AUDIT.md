# GrowthikMedia.com — Public Assets Audit

> **Build Status:** ✅ Passing — 141 pages, exit code 0
> **Central Registry:** `app/assets/images/images.ts`
> **Last Audited:** 2026-03-29

---

## Overview

All assets in this project are accessed via a single centralized file:
`app/assets/images/images.ts`

This file exports two objects:

| Export | Purpose |
|---|---|
| `images` | Statically-imported Next.js images + backwards-compat brand string aliases |
| `publicAssets` | Typed string URL paths for all `public/` served assets (brand, videos, portfolio) |

---

## Section 1 — `public/brand/` Brand Assets

Accessed via `images.publicAssets.brand.*`

| Key | File | Type | Size |
|---|---|---|---|
| `appleTouchIcon` | `apple-touch-icon.png` | PNG | 2.7 KB |
| `favicon96` | `favicon-96x96.png` | PNG | 1.5 KB |
| `faviconIco` | `favicon.ico` | ICO | 14.7 KB |
| `faviconSvg` | `favicon.svg` | SVG | 0.9 KB |
| `growthikMediaBrandMarkPng` | `growthik-media-brand-mark.png` | PNG | 181 KB |
| `growthikMediaBrandMarkSvg` | `growthik-media-brand-mark.svg` | SVG | 0.6 KB |
| `growthikMediaTransparentLogo` | `growthik-media-transparent-logo.png` | PNG | 42.6 KB |
| `growthikMediaWordmarkSvg` | `growthik-media-wordmark.svg` | SVG | 2.5 KB |
| `siteManifest` | `site.webmanifest` | JSON | 0.4 KB |
| `webApp192` | `web-app-manifest-192x192.png` | PNG | 3.3 KB |
| `webApp512` | `web-app-manifest-512x512.png` | PNG | 17.2 KB |

---

## Section 2 — `public/` Videos

Accessed via `images.publicAssets.videos.*`

| Key | File | Size | Used In |
|---|---|---|---|
| `robotMascot` | `robot-mascot.mp4` | 976 KB | ⚠️ Not used in any component |
| `robotMascot2` | `robot-mascot-2.mp4` | 1.06 MB | `OurApproachSection.tsx` |

---

## Section 3 — `public/portfolio/` Client Thumbnails (21 files)

Accessed via `images.publicAssets.portfolio.*`

| Key | File |
|---|---|
| `amitKadamFinance` | `amit-kadam-finance-portfolio.jpg` |
| `ardyRealEstate` | `ardy-real-estate-dubai.jpg` |
| `ariaFreightways` | `aria-freightways-logistics.jpg` |
| `autobatManufacturing` | `autobat-manufacturing-website.jpg` |
| `dikshaComputers` | `diksha-computers-it-training.jpg` |
| `doctordomAppointment` | `doctordom-appointment-platform.jpg` |
| `dubaiBusinessConnect` | `dubai-business-connect-uae.jpg` |
| `ectiEducational` | `ecti-educational-institute-portal.jpg` |
| `growthikmediaOfficial` | `growthikmedia-official-website.jpg` |
| `hajjUmrahTravel` | `hajj-umrah-travel-portal.jpg` |
| `healurmindMentalHealth` | `healurmind-mental-health-platform.jpg` |
| `majesticRealties` | `majestic-realties-pune.jpg` |
| `mountCastleHilltop` | `mount-castle-hilltop-plots.jpg` |
| `nandavanPark` | `nandavan-park-bhugaon.jpg` |
| `naukriIndiaDubai` | `naukri-india-dubai-jobs.jpg` |
| `puneDreamHomes` | `pune-dream-homes.jpg` |
| `shabdbramhandCreative` | `shabdbramhand-creative-agency.jpg` |
| `shopnexusEcommerce` | `shopnexus-ecommerce-platform.jpg` |
| `skSalonBeauty` | `sk-salon-beauty-website.jpg` |
| `webmarkxDigitalMarketing` | `webmarkx-digital-marketing-agency.jpg` |
| `zeusManpowerRecruitment` | `zeus-manpower-recruitment.jpg` |

---

## Section 4 — `public/images/blog/` Blog Images

| File | Public Path | Size |
|---|---|---|
| `seo-services-in-pune-rank-1-google-growthik-media-thumbnail.png` | `/images/blog/seo-services-...thumbnail.png` | 1.1 MB |

> Also statically imported as `images.blog.seoGuidePune` — but **no component uses it**. The static import may be unused.

---

## Section 5 — `app/assets/images/` Statically Imported Images

### Backgrounds
| Key | File | Size | Note |
|---|---|---|---|
| `images.bg` | `Bg.jpg` | **2.5 MB** | ⚠️ Too large — target < 200 KB WebP |
| `images.download` | `download.jpg` | 12.5 KB | OK |

### Brand / Logo
| Key | File | Size | Used In |
|---|---|---|---|
| `images.BlackLogo` | `brand/logos/BlackLogo.png` | 42.6 KB | `Logo.tsx` |

### Founder
| Key | File | Size | Used In |
|---|---|---|---|
| `images.founder.amol1` | `Amol-kadam/Amolkadam-1.png` | **2.25 MB** | `FounderSection.tsx`, `AboutHeroSection.tsx`, `AboutFounderSection.tsx` |
| `images.founder.amol2` | `Amol-kadam/Amolkadam-2.png` | 605 KB | `AboutFounderSection.tsx` |

> Unused file also present: `Amol-kadam/amol_pic.jfif` — delete it.

### Portfolio Card Images (Homepage highlights)
| Key | File | Size |
|---|---|---|
| `images.portfolio.seoRealEstate` | `portfolio/seo-real-estate.png` | 663 KB |
| `images.portfolio.socialMedia` | `portfolio/social-media.png` | 719 KB |
| `images.portfolio.videoMarketing` | `portfolio/video-marketing.png` | 802 KB |
| `images.portfolio.websiteRedesign` | `portfolio/website-redesign.png` | 801 KB |
| `images.portfolio.luxuryBranding` | `portfolio/luxury-branding.png` | 757 KB |
| `images.portfolio.educationContent` | `portfolio/education-content.png` | 722 KB |

> All used in `PortfolioHighlightsSection.tsx`. These are mock showcase cards; real client thumbnails are in `public/portfolio/`.

### Team
| Key | File | Size | Used In |
|---|---|---|---|
| `images.team.prachi` | `Prachi.png` | 692 KB | `AboutFounderSection.tsx` |
| `images.team.amit` | `Amit Kadam.jpg` | 8.7 KB | `AboutFounderSection.tsx` |

### Blog
| Key | File | Size | Used In |
|---|---|---|---|
| `images.blog.seoGuidePune` | `blog/seo-services-...thumbnail.png` | 1.1 MB | ⚠️ Not used in any component |

---

## Section 6 — `public/fonts/` Custom Fonts (Rostex)

| File | Format | Size |
|---|---|---|
| `Rostex-Regular.ttf` | TTF | 51 KB |
| `Rostex-Regular.otf` | OTF | 26.8 KB |
| `Rostex-Oblique.ttf` | TTF | 42.5 KB |
| `Rostex-Oblique.otf` | OTF | 28.2 KB |
| `Rostex-ObliqueOutline.ttf` | TTF | 120 KB |
| `Rostex-ObliqueOutline.otf` | OTF | 45.5 KB |
| `Rostex-Outline.ttf` | TTF | 135 KB |
| `Rostex-Outline.otf` | OTF | 41.7 KB |
| `1001fonts-rostex-eula.txt` | License | 2.4 KB |

---

## Section 7 — `app/assets/images/brand/` Design Source Files

These are source/reference files **not imported into any component**.
Production-ready copies live in `public/brand/`.

| Subfolder | Contents |
|---|---|
| `brand/logos/` | `BlackLogo.png`, SVGs, PNGs |
| `brand/favicons/` | Full-res favicon sources |
| `brand/manifest/` | Webmanifest source file |
| `brand/palette/` | Color swatch references |

---

## Section 8 — `public/` Root — Duplicate Files

The following brand files exist **both** at `public/` root AND in `public/brand/`. The canonical versions are in `public/brand/`. The root copies are legacy duplicates:

- `apple-touch-icon.png`
- `favicon-96x96.png`
- `favicon.ico`
- `favicon.svg`
- `growthik-media-brand-mark.png`
- `growthik-media-brand-mark.svg`
- `growthik-media-transparent-logo.png`
- `growthik-media-wordmark.svg`
- `site.webmanifest`
- `web-app-manifest-192x192.png`
- `web-app-manifest-512x512.png`

> Before deleting root copies, verify no external tools (Google Search Console, social OG tags, email templates) reference the root `/` paths directly.

---

## Section 9 — Component to Asset Map

| Component | Assets Used |
|---|---|
| `Logo.tsx` | `images.BlackLogo` |
| `OurApproachSection.tsx` | `images.publicAssets.videos.robotMascot2` |
| `PortfolioHighlightsSection.tsx` | `images.portfolio.*` (6 items) |
| `FounderSection.tsx` | `images.founder.amol1` |
| `AboutHeroSection.tsx` | `images.founder.amol1` |
| `AboutFounderSection.tsx` | `images.founder.amol1`, `amol2`, `images.team.prachi`, `images.team.amit` |
| `HomeHeroSection.tsx` | `images.bg` |
| `website-maintenance/page.tsx` | `images.bg` + logo via CONTACT_INFO URL |
| `website-design-company-pune/page.tsx` | `images.bg` + logo via CONTACT_INFO URL |
| `web-application/page.tsx` | `images.bg` + logo via CONTACT_INFO URL |
| `application-maintenance/page.tsx` | `images.bg` + logo via CONTACT_INFO URL |
| `SEO.tsx` | Hardcoded `/brand/growthik-media-transparent-logo.png` |
| `LocalBusinessSchema.tsx` | Hardcoded `/brand/growthik-media-transparent-logo.png` |
| `layout.tsx` (public) | Hardcoded `/brand/` favicon paths |

---

## Section 10 — Prioritized Action Items

| Priority | Item |
|---|---|
| 🔴 **High** | Compress `Bg.jpg` — 2.5 MB → target < 200 KB as WebP |
| 🔴 **High** | Compress `Amolkadam-1.png` — 2.25 MB → target < 300 KB as WebP |
| 🟡 **Medium** | Remove 11 duplicate brand files from `public/` root (keep `public/brand/` copies) |
| 🟡 **Medium** | Delete unused `Amol-kadam/amol_pic.jfif` |
| 🟡 **Medium** | Remove unused `images.blog.seoGuidePune` static import (or use it in a blog component) |
| 🟢 **Low** | Convert portfolio card PNGs in `app/assets/images/portfolio/` to WebP |
| 🟢 **Low** | Either use `robotMascot` in a component or remove it from `publicAssets.videos` |
| 🟢 **Low** | Add `publicAssets.fonts.*` entries for Rostex font files |
