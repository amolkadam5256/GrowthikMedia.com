# AOS (Animate On Scroll) Implementation Guide

## Overview

This document describes the implementation of scroll animations using the AOS (Animate On Scroll) library across the Growthik Media website.

## Installation

The following packages have been installed:

- `aos` - The main AOS library
- `@types/aos` - TypeScript type definitions for AOS

## Configuration

### Global Setup

AOS is initialized in `components/comman/AOSInit.tsx` with the following settings:

```typescript
AOS.init({
  duration: 800, // Animation duration in milliseconds
  easing: "ease-in-out", // Easing function
  once: false, // Animation repeats on scroll up/down
  mirror: true, // Elements animate out while scrolling past them
  offset: 100, // Offset (in px) from trigger point
  delay: 0, // Global delay
  anchorPlacement: "top-bottom", // Trigger point
});
```

### Layout Integration

The AOSInit component is imported and rendered in `app/(public)/layout.tsx` to enable animations site-wide.

## Animation Types Used

### 1. **fade-up**

- Elements fade in while moving upward
- Used for: Headings, text content, buttons
- Example: `data-aos="fade-up"`

### 2. **fade-down**

- Elements fade in while moving downward
- Used for: Top-level elements
- Example: `data-aos="fade-down"`

### 3. **fade-left**

- Elements fade in while moving from right to left
- Used for: Right-side content sections
- Example: `data-aos="fade-left"`

### 4. **fade-right**

- Elements fade in while moving from left to right
- Used for: Left-side content sections
- Example: `data-aos="fade-right"`

### 5. **zoom-in**

- Elements scale up from smaller size
- Used for: CTA buttons, important elements
- Example: `data-aos="zoom-in"`

## Components with Animations

### 1. HeroHeadline Component

**Location:** `components/PublicComponents/HomePageComp/HeroSection/HeroHeadline.tsx`

Animations:

- Pre-headline: `zoom-in` (800ms duration)
- Main headline: `fade-up` (200ms delay)
- Subheadline: `fade-up` (400ms delay)
- CTA button: `zoom-in` (600ms delay)
- Trust indicators: `fade-up` (800ms delay)

### 2. WeSpecialiseIn Component

**Location:** `components/PublicComponents/HomePageComp/WeSpecialiseIn/WeSpecialiseIn.tsx`

Animations:

- Left carousel: `fade-right` (1000ms duration)
- CTA button: `zoom-in` (200ms delay)
- Right content: `fade-left` (1000ms duration)
- Heading: `fade-up` (100ms delay)
- Divider: `fade-right` (200ms delay)
- Description: `fade-up` (300ms delay)
- Services list: `fade-up` (400ms delay)

### 3. AboutUsSection Component

**Location:** `components/PublicComponents/HomePageComp/AboutUsSection/AboutUsSection.tsx`

Animations:

- Left visual element: `fade-right` (1000ms duration)
- Company name: `fade-up` (100ms delay)
- Mission card: `fade-up` (200ms delay)
- Vision card: `fade-up` (300ms delay)
- Stats: `zoom-in` (400ms delay)
- Right content: `fade-left` (1000ms duration)
- "About Us" badge: `fade-up` (100ms delay)
- Heading: `fade-up` (200ms delay)
- Divider: `fade-right` (300ms delay)
- Text content: `fade-up` (400ms delay)
- "Why We Exist" card: `fade-up` (500ms delay)
- CTA button: `zoom-in` (600ms delay)

### 4. Footer Component

**Location:** `components/comman/Footer.tsx`

Animations:

- Brand column: `fade-up` (800ms duration)
- Quick links: `fade-up` (200ms delay)
- Services: `fade-up` (400ms delay)
- Business hours: `fade-up` (600ms delay)

## Customization Options

### Per-Element Attributes

You can customize animations on individual elements using these data attributes:

```html
<!-- Basic animation -->
<div data-aos="fade-up">Content</div>

<!-- With custom duration -->
<div data-aos="fade-up" data-aos-duration="1200">Content</div>

<!-- With delay -->
<div data-aos="fade-up" data-aos-delay="300">Content</div>

<!-- With custom easing -->
<div data-aos="fade-up" data-aos-easing="ease-in-out">Content</div>

<!-- With offset -->
<div data-aos="fade-up" data-aos-offset="200">Content</div>

<!-- Animation only once -->
<div data-aos="fade-up" data-aos-once="true">Content</div>
```

## Available Animation Types

### Fade animations

- `fade`
- `fade-up`
- `fade-down`
- `fade-left`
- `fade-right`
- `fade-up-right`
- `fade-up-left`
- `fade-down-right`
- `fade-down-left`

### Flip animations

- `flip-up`
- `flip-down`
- `flip-left`
- `flip-right`

### Slide animations

- `slide-up`
- `slide-down`
- `slide-left`
- `slide-right`

### Zoom animations

- `zoom-in`
- `zoom-in-up`
- `zoom-in-down`
- `zoom-in-left`
- `zoom-in-right`
- `zoom-out`
- `zoom-out-up`
- `zoom-out-down`
- `zoom-out-left`
- `zoom-out-right`

## Best Practices

1. **Stagger Delays**: Use incremental delays (100ms, 200ms, 300ms) for sequential elements
2. **Duration**: Keep animations between 600-1000ms for smooth experience
3. **Mirror Mode**: Enabled to allow animations on scroll up AND down
4. **Offset**: Set to 100px to trigger animations slightly before elements enter viewport
5. **Performance**: Avoid animating too many elements simultaneously

## Troubleshooting

### Animations not working?

1. Ensure AOSInit component is rendered in layout
2. Check that AOS CSS is imported in AOSInit.tsx
3. Verify data-aos attributes are correctly spelled
4. Check browser console for errors

### Animations too fast/slow?

- Adjust `data-aos-duration` attribute
- Modify global duration in AOSInit.tsx

### Animations triggering too early/late?

- Adjust `data-aos-offset` attribute
- Modify global offset in AOSInit.tsx

## Resources

- [AOS Documentation](https://michalsnik.github.io/aos/)
- [AOS GitHub](https://github.com/michalsnik/aos)
