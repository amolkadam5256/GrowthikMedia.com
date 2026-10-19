# Our Services Section - Implementation Guide

## 📋 Overview

A creative, animated services showcase section featuring 4 service cards with hover effects, stats displayand CTA buttons.

## 📁 Location

```
components/PublicComponents/HomePageComp/OurServices/
├── ServiceCard.tsx
├── ServiceButton.tsx
├── OurServicesSection.tsx
└── index.ts
```

## 🎯 Features

### ServiceCard Component

- Black card background with numbered badge (01-04)
- Icon with rotation and scale animation on hover
- **Red triangle accent** in bottom-left corner (appears on hover)
- Floating particle effects
- Background gradient overlay
- Border slide animation
- Equal heights (min-height: 320px)

### ServiceButton Component

- Slide-in background effect
- Shine animation overlay
- Arrow icon that moves on hover
- Smooth color transitions

### OurServicesSection Component

- 4-column responsive grid (1/2/4 columns)
- Section header with animated lines
- Stats section with company metrics
- Two CTA buttons
- Decorative background elements

## 🎨 Services Included

1. **Video Production** (📹)
2. **Digital Marketing** (📢)
3. **SEO Optimization** (📈)
4. **Content Creation** (🎨)

## 📊 Stats Display

- **20+** Projects Completed
- **50+** Happy Clients
- **10+** Team Members
- **5+** Years Experience

## 🎬 Animations

### On Load (AOS)

- Cards fade up with staggered delays (0ms, 100ms, 200ms, 300ms)
- Stats zoom in with delays

### On Hover

- Card lifts with red shadow glow
- Icon rotates 5° and scales to 110%
- Red triangle slides in from bottom-left (70px × 70px)
- Number badge changes to red
- Floating particles appear
- Background gradient fades in
- Border animation activates

## 🎨 Colors Used

```css
--color-primary: #d90b1c (Red) --color-black: #000000 --color-white: #ffffff
  --color-neutral: #979da6;
```

## 📱 Responsive Design

- **Mobile** (< 768px): 1 column
- **Tablet** (768px - 1024px): 2 columns
- **Desktop** (> 1024px): 4 columns

## 💻 Usage

```tsx
import OurServicesSection from "@/components/PublicComponents/HomePageComp/OurServices/OurServicesSection";

export default function Page() {
  return <OurServicesSection />;
}
```

## 🔧 Customization

### Update Services

Edit the `services` array in `OurServicesSection.tsx`:

```typescript
const services = [
  {
    icon: Video,
    number: "01",
    title: "Your Service",
    description: "Your description here",
  },
  // Add more services...
];
```

### Update Stats

Edit the stats array:

```typescript
{
  [
    { number: "20+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    // Modify as needed...
  ];
}
```

### Change Triangle Size

In `ServiceCard.tsx`:

```typescript
width: isHovered ? "70px" : "0px",  // Adjust size
height: isHovered ? "70px" : "0px",
```

### Change Card Height

```typescript
minHeight: "320px",  // Adjust minimum height
```

## 🎯 Key Code Snippets

### Triangle Accent (Bottom-Left)

```typescript
<div
  className="absolute bottom-0 left-0 transition-all duration-500"
  style={{
    width: isHovered ? "70px" : "0px",
    height: isHovered ? "70px" : "0px",
    backgroundColor: "var(--color-primary)",
    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
    opacity: isHovered ? 1 : 0,
  }}
/>
```

### Icon Animation

```typescript
<div
  style={{
    backgroundColor: isHovered ? "var(--color-primary)" : "transparent",
    transform: isHovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
  }}
>
  <Icon />
</div>
```

## 📈 Performance

- Optimized re-renders with useState
- CSS transitions (no JavaScript animations)
- Efficient hover state management
- No external dependencies

## ✅ Best Practices

1. Keep service descriptions concise (under 150 characters)
2. Use consistent icon sizes
3. Maintain equal card heights
4. Test hover effects on touch devices
5. Ensure color contrast for accessibility

---

**Created**: January 26, 2026  
**Last Updated**: January 26, 2026
