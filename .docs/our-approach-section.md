# Our Approach Section - Implementation Guide

## 📋 Overview

An SEO-optimized section featuring a robot mascot video, keyword-rich content about digital marketing services in Puneand 6 feature cards highlighting key services.

## 📁 Location

```
components/PublicComponents/HomePageComp/OurApproach/
├── OurApproachSection.tsx
└── index.ts
```

## 🎯 Features

- **Robot Mascot Video** - Auto-playing, looping, full-screen video
- **SEO Content** - Two keyword-rich paragraphs
- **2-Column Layout** - Content left, video right
- **6 Feature Cards** - Service highlights with icons
- **CTA Button** - Links to contact page
- **Floating Badge** - "AI-Powered Marketing" with bounce animation
- **Responsive Design** - Stacks on mobile

## 🎬 Video Integration

### File Details

- **Location**: `public/robot-mascot.mp4`
- **Size**: ~998KB
- **Path**: `/robot-mascot.mp4`

### Video Features

- Auto-plays on load
- Loops continuously
- Muted (for auto-play compliance)
- Full-screen coverage with `object-cover`
- Smooth fade-in loading animation
- Loading spinner while video loads
- Minimum heights: 400px (mobile), 500px (desktop)

### Video Container

```typescript
<div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/robot-mascot.mp4" type="video/mp4" />
  </video>
</div>
```

## 🔍 SEO Keywords

### Primary Keywords

- Digital marketing
- Digital marketing company in Pune
- Social media marketing
- SEO companies in Pune
- Professional SEO services
- Social media marketing agencies

### Secondary Keywords

- Google Analytics
- YouTube SEO
- Email marketing campaigns
- Media planning
- Digital presence
- Brand visibility

### Long-tail Keywords

- "Trusted digital marketing company in Pune"
- "Professional SEO services in Pune"
- "Social media marketing agencies in Pune"

## 📝 Content Structure

### Paragraph 1 (130 words)

Focuses on:

- Approach combining creativity, strategy results
- Positioning as trusted company in Pune
- Services: social media, email campaigns, media planning
- Tools: Google Analytics, YouTube SEO
- Results: measurable growth

### Paragraph 2 (95 words)

Focuses on:

- Recognition among agencies and SEO companies
- Professional services and comprehensive solutions
- Balance of creativity and data
- Brand visibility and engagement
- Call-to-action to connect

## 🎨 Feature Cards

1. **🎯 Tailored Strategy** - Custom digital marketing strategies
2. **📈 SEO Excellence** - Professional SEO services
3. **📊 Data-Driven Results** - Analytics and measurable growth
4. **💡 Creative Innovation** - Engaging content and campaigns
5. **👥 Social Media Mastery** - Strategic social media marketing
6. **🏆 Proven Expertise** - Trusted company in Pune

## 🎬 Animations

### On Load (AOS)

- Section header fades up
- Content fades right
- Video fades left
- Feature cards fade up with staggered delays (0-500ms)

### Hover Effects

- Content cards: shadow lift
- Feature cards: scale up (105%) + shadow
- Feature icons: scale up (110%)
- CTA button: shadow + scale

### Continuous Animations

- "AI-Powered Marketing" badge bounces (3s duration)
- Background gradient blurs pulse subtly

## 🎨 Colors Used

```css
--color-primary: #d90b1c (Red) --background: (theme-aware)
  --surface: (theme-aware) --text-primary: (theme-aware)
  --text-secondary: (theme-aware) --border: (theme-aware);
```

## 📱 Responsive Design

- **Mobile** (< 768px): Single column, content stacks above video
- **Tablet** (768px - 1024px): 2-column grid, feature cards 2 columns
- **Desktop** (> 1024px): Full 2-column layout, feature cards 3 columns

## 💻 Usage

```tsx
import OurApproachSection from "@/components/PublicComponents/HomePageComp/OurApproach/OurApproachSection";

export default function Page() {
  return <OurApproachSection />;
}
```

## 🔧 Customization

### Update Content

Edit the paragraphs in `OurApproachSection.tsx`:

```typescript
<p>
  Our approach to{" "}
  <strong>digital marketing</strong>{" "}
  combines creativity, strategy...
</p>
```

### Update Features

Edit the `features` array:

```typescript
const features = [
  {
    icon: Target,
    title: "Your Feature",
    description: "Your description",
  },
  // Add more features...
];
```

### Change Video

Replace `public/robot-mascot.mp4` with your video file and update the source:

```typescript
<source src="/your-video.mp4" type="video/mp4" />
```

### Update Badge Text

```typescript
<span className="text-white font-bold text-sm">
  Your Badge Text
</span>
```

## 📊 SEO Benefits

### On-Page SEO

- ✅ Semantic HTML structure
- ✅ Proper heading hierarchy (H2)
- ✅ Keyword-rich content (2-3% density)
- ✅ Internal linking (CTA to /contact)
- ✅ Mobile-responsive
- ✅ Fast loading

### Local SEO

- ✅ "Pune" mentioned 3+ times
- ✅ Local service keywords
- ✅ Geographic targeting

### Content Quality

- ✅ 200+ words of SEO content
- ✅ Bold important keywords
- ✅ Clear CTAs
- ✅ Engaging multimedia (video)

## 🎯 Key Code Snippets

### Full-Screen Video

```typescript
<div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/robot-mascot.mp4" type="video/mp4" />
  </video>
</div>
```

### SEO-Optimized Content

```typescript
<p>
  Our approach to{" "}
  <strong style={{ color: "var(--text-primary)" }}>
    digital marketing
  </strong>{" "}
  combines creativity, strategyand a commitment to results.
</p>
```

### Floating Badge

```typescript
<div
  className="absolute -top-6 -right-6 px-6 py-3 rounded-full shadow-lg animate-bounce"
  style={{
    backgroundColor: "var(--color-primary)",
    animationDuration: "3s",
  }}
>
  <span className="text-white font-bold text-sm">
    AI-Powered Marketing
  </span>
</div>
```

## 📈 Performance

- Video lazy loads
- Smooth loading animation
- Optimized file size (~998KB)
- No external dependencies
- Efficient re-renders (useState for video load)

## ✅ Best Practices

1. Keep paragraphs concise (3-4 sentences)
2. Maintain keyword density at 2-3%
3. Use bold for important keywords
4. Ensure video is optimized for web
5. Test video auto-play on different browsers
6. Provide fallback for unsupported browsers

## 🔄 Content Guidelines

When updating content:

- **Keyword density**: 2-3% for primary keywords
- **Readability**: 8th-grade reading level
- **Length**: 200-300 words per section
- **Structure**: Short paragraphs (3-4 sentences)
- **Bold keywords**: Highlight important terms
- **Call-to-action**: Clear next steps

---

**Created**: January 26, 2026  
**Last Updated**: January 26, 2026
