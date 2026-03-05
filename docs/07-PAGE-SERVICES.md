# Page Development Doc — Services Page
# Coréal Media Agency Website

---

## Overview

**Page:** Services
**Route:** /services
**File:** src/app/services/page.tsx
**Priority:** Critical
**Goal:** Convert interested visitors into inquiries by clearly explaining what Coréal offers, how it works, and why it matters

This is the page visitors go to when they are already interested. The job here is to remove all doubt. Be specific. Be detailed. Make the services feel tangible, not abstract. Every section of this page should make the visitor think "this is exactly what I need."

---

## Sections (in order)

1. Services Hero
2. Service 1 — The Content OS
3. Service 2 — The Operational Engine
4. Service 3 — The Visibility Matrix
5. Workflow Detail (5 Stages)
6. Services CTA

---

## Section 1: Services Hero

### Purpose
Orient the visitor. Confirm they are in the right place. Set the tone for everything that follows.

### Layout
- Background: #0A0A0A
- Full width, not full viewport height (around 50vh to 60vh)
- Content left-aligned inside container
- Thin decorative horizontal line below the section label
- No background image here — keep it clean and text-forward

### Content (from Content Doc)
- Section label: "OUR SERVICES" (DM Mono, uppercase, accent color)
- Headline: "Three Ways We Help You Stop Guessing and Start Scaling" (Cormorant Garamond, display-xl)
- Body paragraph: (DM Sans, body-lg, text-secondary, max-width 640px)
- No CTA button in the hero — the page itself guides the visitor through the services

### Animation
- Section label: fade in, delay 0ms
- Headline: fade up, delay 150ms
- Body: fade up, delay 300ms

### Responsive
- Mobile: all left-aligned, reduced headline size via clamp
- Desktop: headline max-width ~700px

### Component File
src/components/sections/services/ServicesHero.tsx

---

## Section 2: Service 1 — The Content OS

### Purpose
Explain the first service in full. Make it feel real, specific, and valuable.

### Layout
- Background: #111111
- Two-column layout on desktop: left column (service number, label, headline, description), right column (deliverables list)
- Full-width single column on mobile
- Section number displayed large in the background as a decorative element (very faint, like a watermark behind the content — "01" in Cormorant, very large, opacity 0.04)
- A thin full-width horizontal divider above this section

### Content (from Content Doc)
- Section label: "SERVICE 01" (DM Mono, accent color)
- Headline: "The Content OS" (Cormorant Garamond, display-lg)
- Tagline: "Done-For-You Content Systems" (DM Mono, label, text-muted)
- Full description: three paragraphs
- "What You Get" list: seven items, each with a Lucide Check icon in accent color
- "Best For" note: short paragraph with an italicized label before it
- "The Outcome" note: one sentence in a highlighted callout box

### Deliverables List Item Design
- Lucide Check icon: 16px, accent color
- Text: DM Sans, body-md, text-primary
- Spacing: 12px between items

### Outcome Callout Box
- Background: rgba(139,26,26,0.08)
- Border left: 3px solid #8B1A1A
- Padding: 20px 24px
- Text: DM Sans, body-md, text-primary
- Label above: "THE OUTCOME" in DM Mono, label, accent color

### CTA at bottom of this service block
- Text link: "Enquire About The Content OS" with ArrowRight icon, links to /contact

### Animation
- Section label and headline: ScrollReveal fade up
- Description paragraphs: ScrollReveal fade up, staggered
- Deliverables: ScrollReveal staggered, 60ms between items

### Responsive
- Mobile: single column, watermark number hidden
- Desktop: two-column (6/12 each), watermark visible

### Component File
src/components/sections/services/ServiceBlock.tsx
(This component is reusable across all three services. Pass props for service number, label, headline, tagline, description, deliverables, bestFor, outcome, and link)

---

## Section 3: Service 2 — The Operational Engine

### Purpose
Explain the second service. Emphasize the execution and consistency angle.

### Layout
- Background: #0A0A0A (alternating from Service 1)
- Same two-column layout as Service 1
- On desktop, flip the columns: deliverables list on the left, description on the right
- This creates visual rhythm alternating between sections
- Same decorative large background number: "02"
- Thin horizontal divider above this section

### Content (from Content Doc)
- Section label: "SERVICE 02" (DM Mono, accent color)
- Headline: "The Operational Engine" (Cormorant Garamond, display-lg)
- Tagline: "Marketing Execution & Management" (DM Mono, label, text-muted)
- Full description: three paragraphs
- "What You Get" list: six items with Lucide Check icons
- "Best For" note
- "The Outcome" callout box
- CTA link: "Enquire About The Operational Engine"

### Animation
- Same as Service 1, mirrored direction (fade from right for flipped column)

### Responsive
- Mobile: same single column as Service 1
- Desktop: columns flipped

### Component File
Same ServiceBlock.tsx component with a prop for column direction (default or reversed)

---

## Section 4: Service 3 — The Visibility Matrix

### Purpose
Explain the third service. This one is about scale and demand. Position it as the growth phase.

### Layout
- Background: #111111 (alternating back)
- Same two-column layout as Service 1 (not flipped, back to original direction)
- Decorative number: "03"
- Thin horizontal divider above

### Content (from Content Doc)
- Section label: "SERVICE 03" (DM Mono, accent color)
- Headline: "The Visibility Matrix" (Cormorant Garamond, display-lg)
- Tagline: "Growth & Demand Systems" (DM Mono, label, text-muted)
- Full description: three paragraphs
- "What You Get" list: six items with Lucide Check icons
- "Best For" note
- "The Outcome" callout box
- CTA link: "Enquire About The Visibility Matrix"

### Animation
Same as Service 1

### Component File
Same ServiceBlock.tsx

---

## Section 5: Workflow Detail

### Purpose
Show the full five-stage process in detail. This builds confidence that there is a real operational system behind every service.

### Layout
- Background: #0A0A0A
- Section label + headline + intro text at the top, left-aligned in container
- Five stages listed vertically (not a strip like the homepage version)
- Each stage gets more space here because this is the detailed version
- Stage items have a number, icon, title, and a full paragraph description
- Thin horizontal lines between stages act as dividers
- Stages alternate slightly with an indented description block on desktop

### Stage Item Design
- Stage number: DM Mono, large (1.5rem), accent color, displayed prominently to the left
- Lucide icon: 24px, text-muted, inline with the number
- Title: Cormorant Garamond, display-md, text-primary
- Description: DM Sans, body-md, text-secondary, max-width 560px
- Divider line: 1px, #1A1A1A, full width, between stages
- Last stage has no divider below it

### Content (from Content Doc)
- Section label: "THE PROCESS"
- Headline: "Every Client. One Workflow."
- Intro paragraph
- Five stages with full descriptions as specified in the Content Doc

### Animation
- Headline and intro: ScrollReveal fade up
- Each stage: ScrollReveal fade up, staggered 120ms between stages

### Responsive
- Mobile: simplified layout, stage number and icon above title
- Desktop: horizontal layout with number column on left, content on right

### Component File
src/components/sections/services/WorkflowDetail.tsx

---

## Section 6: Services CTA

### Purpose
Final conversion point on the page. Remove the last barrier between interest and action.

### Layout
- Background: linear-gradient from #111111 to #161616
- Centered content
- Headline, body, one primary button
- No distractions

### Content (from Content Doc)
- Headline: "Not Sure Which Service Is Right for You?"
- Body paragraph
- CTA button: "Let's Talk" — links to /contact

### Animation
- ScrollReveal fade up on everything

### Component File
Reuse the shared CTABanner component: src/components/shared/CTABanner.tsx

---

## Page File (src/app/services/page.tsx)

```typescript
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServiceBlock from '@/components/sections/services/ServiceBlock'
import WorkflowDetail from '@/components/sections/services/WorkflowDetail'
import CTABanner from '@/components/shared/CTABanner'
import { services } from '@/data/services'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Three ways Coréal Media helps brands scale: The Content OS, The Operational Engine, and The Visibility Matrix.',
  openGraph: {
    title: 'Services | Coréal Media',
    description:
      'Content strategy, done-for-you execution, and demand growth systems. Built for brands that are serious about scale.',
    url: 'https://corealmedia.com/services',
    images: [{ url: '/images/og/og-services.jpg', width: 1200, height: 630, alt: 'Services — Coréal Media' }],
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceBlock service={services[0]} reversed={false} />
      <ServiceBlock service={services[1]} reversed={true} />
      <ServiceBlock service={services[2]} reversed={false} />
      <WorkflowDetail />
      <CTABanner
        headline="Not Sure Which Service Is Right for You?"
        body="That's what the first conversation is for. Tell us where you are, where you want to be, and we'll tell you exactly how we can help."
        ctaLabel="Let's Talk"
        ctaHref="/contact"
      />
    </>
  )
}
```

---

## Data File (src/data/services.ts)

```typescript
import { Service } from '@/types/service'

export const services: Service[] = [
  {
    id: 'content-os',
    name: 'The Content OS',
    tagline: 'Done-For-You Content Systems',
    description: `Most brands treat content like a task. Something to check off. Something to outsource and forget. The Content OS changes that entirely.\n\nWe design and engineer your full content infrastructure. That means you get a clear content strategy, a repeatable production workflow, defined themes and messaging pillars, and a system that produces high-quality content on a predictable schedule.\n\nContent stops being a daily decision. It becomes a predictable asset that grows your brand whether you're in the room or not.`,
    deliverables: [
      'A full content strategy built around your brand voice and audience',
      'Defined content pillars and messaging themes',
      'Script writing for talking head and faceless video formats',
      'Captions engineered for clarity, engagement, and conversion',
      'Design briefs and video briefs for your creative team',
      'A Custom GPT built to maintain your brand\'s tone and voice consistently',
      'A repeatable monthly content production workflow',
    ],
    outcome:
      'You know exactly what to post, when to post it, and why it matters. Content goes from chaos to system.',
    whoItsFor: ['Founders and personal brands who need structure and direction without the guesswork.'],
    icon: 'Layers',
  },
  {
    id: 'operational-engine',
    name: 'The Operational Engine',
    tagline: 'Marketing Execution & Management',
    description: `Building a system is one thing. Running it consistently is another. The Operational Engine is for brands who have clarity on their content direction and now need a team to execute it, day after day, without gaps.\n\nWe only offer execution once the content system is built. This is intentional. Execution without a system creates noise. Execution with a system creates momentum.\n\nThis is where your brand stops being active and starts being omnipresent.`,
    deliverables: [
      'Full content calendar management',
      'Scheduling and posting across all relevant platforms',
      'Platform formatting (hashtags, tags, link placement, aspect ratios)',
      'Engagement coordination where included in the package',
      'Monthly analytics and performance reporting',
      'Consistent delivery without last-minute panic or gaps',
    ],
    outcome:
      'Your brand shows up. Consistently. On time. At quality. Every month, without exception.',
    whoItsFor: [
      'Brands who have a clear direction and need a reliable team to execute it without founder involvement in every step.',
    ],
    icon: 'Settings2',
  },
  {
    id: 'visibility-matrix',
    name: 'The Visibility Matrix',
    tagline: 'Growth & Demand Systems',
    description: `Consistency gets you seen by your existing audience. The Visibility Matrix gets you found by people who are not even looking for you yet.\n\nThis is not SEO and email in the traditional sense. This is demand compounding. Once your content system is consistent and your execution is running, we turn up the volume. We build the infrastructure that ensures your message reaches further, converts better, and compounds over time.`,
    deliverables: [
      'SEO-aligned content strategy and blog system',
      'Email marketing infrastructure and nurture sequences',
      'Demand generation content for cold and warm audiences',
      'Content repurposing systems (one piece of content, multiple formats, multiple platforms)',
      'Optimization decisions based on monthly performance data',
      'Partnership and collaboration content strategy where applicable',
    ],
    outcome:
      'Your content works harder. It reaches more people, builds more trust, and generates more inbound without requiring more effort from you.',
    whoItsFor: [
      'Brands that are already posting consistently and want to extend their reach, attract inbound interest, and convert at a higher rate.',
    ],
    icon: 'TrendingUp',
  },
]
```

---

## Checklist Before Marking Services Page Complete

- [ ] All six sections render correctly on desktop
- [ ] Service sections alternate background colors correctly (#111111 and #0A0A0A)
- [ ] ServiceBlock columns flip correctly for Service 2 on desktop
- [ ] Decorative watermark numbers are visible but extremely subtle (opacity 0.04)
- [ ] All deliverables lists render with correct Lucide Check icons
- [ ] Outcome callout boxes have correct accent left border styling
- [ ] WorkflowDetail shows all five stages with full descriptions
- [ ] CTA banner links to /contact
- [ ] Individual service enquiry links go to /contact
- [ ] All copy matches the Content Doc exactly
- [ ] Page is fully responsive on mobile and tablet
- [ ] All animations work correctly with scroll
- [ ] prefers-reduced-motion disables animations
- [ ] Metadata is correct with OG tags
- [ ] No console errors
- [ ] Lighthouse 90+ on all categories
