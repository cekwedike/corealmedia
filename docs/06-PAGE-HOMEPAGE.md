# Page Development Doc — Homepage
# Coréal Media Agency Website

---

## Overview

**Page:** Homepage
**Route:** /
**File:** src/app/page.tsx
**Priority:** Critical
**Goal:** First impression, service introduction, trust building, and lead capture

This page is the most important page on the site. It must make the right visitor stop, understand what Coréal does, feel the quality of the brand, and take action. Every section has a specific job. Nothing is decorative without purpose.

---

## Sections (in order)

1. Hero
2. Problem Statement
3. Services Teaser
4. Process Strip
5. Who We Serve
6. Social Proof
7. CTA Banner

---

## Section 1: Hero

### Purpose
Immediate impact. The visitor must understand within 3 seconds what Coréal does and feel the premium quality of the brand.

### Layout
- Full viewport height (100vh) minimum
- Background: #0A0A0A with a subtle full-bleed dark editorial stock image behind an overlay
- Overlay: linear-gradient from rgba(10,10,10,0.75) to rgba(10,10,10,0.95)
- Content centered vertically and left-aligned horizontally within the container
- The image should feel editorial and dark, not generic

### Content (from Content Doc)
- Section label above headline: "CONTENT SYSTEMS AGENCY" (DM Mono, uppercase, accent color)
- Headline: "Your Brand Deserves to Be Everywhere. Consistently." (Cormorant Garamond, display-2xl)
- Subheadline paragraph (DM Sans, body-lg, text-secondary)
- Two CTA buttons side by side: "Work With Us" (primary) and "See Our Work" (ghost)
- Scroll indicator at the bottom center: small text "Scroll to explore" with a Lucide ChevronDown icon that bobs gently

### Animation
- On page load, stagger the following with Framer Motion:
  - Section label: fade in, delay 0ms
  - Headline: fade up (30px), delay 150ms
  - Subheadline: fade up, delay 300ms
  - CTA buttons: fade up, delay 450ms
  - Scroll indicator: fade in, delay 700ms
- Duration for each: 800ms, easing: ease-out

### Responsive
- Mobile: text centered, buttons stack vertically, reduce headline size using clamp
- Tablet: left-aligned, buttons side by side
- Desktop: left-aligned, max-width on text block ~680px

### Component File
src/components/sections/home/Hero.tsx

---

## Section 2: Problem Statement

### Purpose
Make the visitor feel understood. Describe the problem before offering the solution. This is where trust begins.

### Layout
- Background: #111111 (alternating from hero)
- Full container width
- Two-column layout on desktop: left column heading + intro, right column the four problem points with icons
- Single column on mobile, stacked

### Content (from Content Doc)
- Section label: "THE REAL PROBLEM"
- Headline: "Most Agencies Create Content. We Build What Runs It."
- Body paragraph: two paragraphs explaining the problem
- Four problem points, each with a Lucide XCircle icon in accent color, short title, and one-line description

### Animation
- ScrollReveal on the entire section
- Headline: fade up, delay 0ms
- Body text: fade up, delay 150ms
- Problem points: staggered fade up, 100ms delay between each

### Responsive
- Mobile: single column, problem points listed vertically
- Desktop: two-column grid (5/12 left, 7/12 right)

### Component File
src/components/sections/home/ProblemSection.tsx

---

## Section 3: Services Teaser

### Purpose
Introduce the three services clearly without overwhelming. Each card teases enough to drive clicks to the full Services page.

### Layout
- Background: #0A0A0A
- Section label + headline centered above the cards
- Three cards in a horizontal grid on desktop
- Cards have equal height, border, and hover state
- Cards are NOT clickable as a whole. Only the "Explore This Service" link at the bottom of each card is the CTA

### Content (from Content Doc)
- Section label: "WHAT WE DO"
- Headline: "Three Services. One System. Real Results."
- Intro paragraph centered below headline, max-width 600px
- Three service cards with icon, title, tagline, description, and link

### Card Specs
- Background: #161616
- Border: 1px solid #242424
- Border radius: 4px
- Padding: 32px
- Hover: border color rgba(139,26,26,0.4), background lifts to #1C1C1C
- Icon: Lucide icon in accent color, 32px, displayed at top of card
- Title: Cormorant Garamond, display-md
- Tagline: DM Mono, label size, uppercase, text-muted
- Description: DM Sans, body-md, text-secondary
- Link: "Explore This Service" with ArrowRight icon, links to /services

### Animation
- Section label and headline: ScrollReveal fade up
- Cards: ScrollReveal staggered, 150ms between each card

### Responsive
- Mobile: single column
- Tablet: two cards per row (first row 2, second row 1 centered) or single column
- Desktop: three columns

### Component File
src/components/sections/home/ServicesTeaser.tsx

---

## Section 4: Process Strip

### Purpose
Show the five-stage process in a clean, visual strip that communicates "there is a real system behind this agency."

### Layout
- Background: #111111
- Horizontal scrollable strip on mobile, full grid on desktop
- Five stages displayed in a row on desktop
- Numbered, with icon, title, and one-line description per stage
- Thin dividing lines between stages on desktop

### Content (from Content Doc)
- Section label: "HOW WE WORK"
- Headline: "The Coréal Method"
- Intro: "One workflow. Five stages. Everything fits inside it."
- Five stages with number (DM Mono), Lucide icon, title (Cormorant), description (DM Sans)

### Stage Item Design
- Number: DM Mono, 0.7rem, accent color, letter-spacing 0.1em (e.g. "01", "02")
- Icon: Lucide, 24px, text-muted
- Title: Cormorant Garamond, 1.25rem, text-primary
- Description: DM Sans, body-sm, text-secondary
- Divider between stages: 1px vertical line, #1A1A1A (desktop only)

### Animation
- Headline: ScrollReveal fade up
- Stages: ScrollReveal staggered from left, 80ms between each

### Responsive
- Mobile: horizontal scroll or vertically stacked
- Desktop: five equal columns in a row

### Component File
src/components/sections/home/ProcessStrip.tsx

---

## Section 5: Who We Serve

### Purpose
Speak directly to the four client types. Make each one feel like Coréal is describing them specifically.

### Layout
- Background: #0A0A0A
- Section label + headline + intro centered at top
- Four cards below in a 2x2 grid on desktop, single column on mobile
- Cards are softer here, less bordered, more open with a subtle left accent line

### Content (from Content Doc)
- Section label: "WHO WE SERVE"
- Headline: "Built for Brands That Mean Business"
- Intro paragraph
- Four client type cards: icon, title, description

### Card Specs
- Background: transparent to very subtle (#111111)
- Left border: 2px solid #8B1A1A
- Padding: 24px 24px 24px 28px (extra left padding for border)
- Icon: Lucide, 24px, accent color
- Title: Cormorant Garamond, display-md
- Description: DM Sans, body-md, text-secondary
- No hover state needed here, these are informational

### Animation
- Headline and intro: ScrollReveal fade up
- Cards: ScrollReveal staggered, 100ms between

### Responsive
- Mobile: single column
- Desktop: 2x2 grid

### Component File
src/components/sections/home/WhoWeServe.tsx

---

## Section 6: Social Proof

### Purpose
Build trust through client voices. For V1, use placeholder testimonials as specified in the Content Doc.

### Layout
- Background: #111111
- Section label + headline centered
- Two testimonial cards side by side on desktop, stacked on mobile
- Large opening quote icon above each quote

### Content (from Content Doc)
- Section label: "WHAT CLIENTS SAY"
- Headline: "The Work Speaks First"
- Intro paragraph
- Two testimonial cards

### Testimonial Card Specs
- Background: #161616
- Border: 1px solid #242424
- Padding: 40px
- Border radius: 4px
- Quote icon: Lucide Quote, 32px, rgba(139,26,26,0.4), top left of card
- Quote text: Cormorant Garamond, 1.25rem, font-style italic, text-primary, line-height 1.6
- Author: DM Sans, body-sm, text-muted, below quote with a thin divider above
- Role: DM Mono, label, text-muted

### Animation
- Headline: ScrollReveal fade up
- Cards: ScrollReveal staggered left and right

### Responsive
- Mobile: single column
- Desktop: two columns equal width

### Component File
src/components/sections/home/SocialProof.tsx

---

## Section 7: CTA Banner

### Purpose
Final push on the homepage. One clear headline, one clear CTA. No distractions.

### Layout
- Background: very subtle gradient from #111111 to #161616 or a textured dark background
- Full container width
- Content centered
- Large headline, body copy, one primary CTA button, one secondary text link below

### Content (from Content Doc)
- Headline: "Ready to Build Your Content Engine?"
- Body copy paragraph
- Primary button: "Start the Conversation" — links to /contact
- Secondary text link: "Or explore our services first →" — links to /services, uses ArrowRight icon

### Animation
- Entire section: ScrollReveal fade up
- Button: slight bounce or scale on mount (subtle)

### Responsive
- Centered on all screen sizes
- Button full width on mobile
- Headline uses clamp for fluid sizing

### Component File
src/components/sections/home/HomeCTA.tsx

---

## Page File (src/app/page.tsx)

```typescript
import Hero from '@/components/sections/home/Hero'
import ProblemSection from '@/components/sections/home/ProblemSection'
import ServicesTeaser from '@/components/sections/home/ServicesTeaser'
import ProcessStrip from '@/components/sections/home/ProcessStrip'
import WhoWeServe from '@/components/sections/home/WhoWeServe'
import SocialProof from '@/components/sections/home/SocialProof'
import HomeCTA from '@/components/sections/home/HomeCTA'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Coréal Media | Content Systems for Brands That Scale',
  description:
    'Coréal Media builds content engines for founders, personal brands, multi-brand companies, and agencies. Strategy, execution, and scale — without losing what makes your brand human.',
  openGraph: {
    title: 'Coréal Media | Content Systems for Brands That Scale',
    description:
      'We build the content engine that ensures you never stop showing up — with strategy, quality, and a system that scales.',
    url: 'https://corealmedia.com',
    images: [{ url: '/images/og/og-home.jpg', width: 1200, height: 630, alt: 'Coréal Media' }],
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ServicesTeaser />
      <ProcessStrip />
      <WhoWeServe />
      <SocialProof />
      <HomeCTA />
    </>
  )
}
```

---

## Checklist Before Marking Homepage Complete

- [ ] All seven sections render correctly on desktop
- [ ] All sections are fully responsive on mobile (320px) and tablet (768px)
- [ ] All animations work on scroll and on page load
- [ ] prefers-reduced-motion disables all animations
- [ ] All copy matches the Content Doc exactly
- [ ] All links are correct: /contact for "Work With Us", /services for service links
- [ ] All icons are from Lucide React, no emojis
- [ ] Metadata is set correctly with OG and Twitter tags
- [ ] No console errors
- [ ] Lighthouse score 90+ on all categories
- [ ] Navbar is sticky and visible on scroll
- [ ] Footer renders below the CTA section
