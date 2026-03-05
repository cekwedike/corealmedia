# Page Development Docs — Remaining Pages
# Coréal Media Agency Website

---
---

# CASE STUDIES INDEX PAGE (/work)

## Overview

**Page:** Case Studies Index
**Route:** /work
**File:** src/app/work/page.tsx
**Priority:** Critical
**Goal:** Show the quality of Coréal's work, build trust through results, drive visitors to read individual case studies

---

## Sections (in order)

1. Work Hero
2. Case Study Grid
3. Work Page CTA

---

## Section 1: Work Hero

### Layout
- Background: #0A0A0A
- 50vh height approximately
- Left-aligned content in container
- Clean, text-forward. No background image needed here

### Content
- Section label: "OUR WORK" (DM Mono, uppercase, accent color)
- Headline: "The Work" (Cormorant Garamond, display-xl)
- Body paragraph (DM Sans, body-lg, text-secondary, max-width 580px)

### Animation
- Section label: fade in, delay 0ms
- Headline: fade up, delay 150ms
- Body: fade up, delay 300ms

### Component File
src/components/sections/work/WorkHero.tsx

---

## Section 2: Case Study Grid

### Layout
- Background: #111111
- Section padding top and bottom
- Optional filter tabs at top (All Work, Personal Brands, Multi-Brand, Agencies) — implement as simple button tabs that filter the grid. If filtering is complex for V1, show all cards without filter tabs
- Three-column grid on desktop, two-column on tablet, single column on mobile
- Cards are equal height using CSS Grid with align-items: stretch

### Case Study Card Design

**Card Specs:**
- Background: #161616
- Border: 1px solid #242424
- Border radius: 4px
- Overflow: hidden (for image)
- Hover: border color rgba(139,26,26,0.4), slight translateY(-4px)
- Transition: all 300ms ease
- Cursor: pointer — entire card is clickable, links to /work/[slug]

**Card Structure (top to bottom):**
1. Featured image: 16:9 ratio, object-fit cover, with a subtle dark overlay (rgba(0,0,0,0.2))
2. Tags row: one or two tags using the Badge component, accent color
3. Client type: Cormorant Garamond, 1.375rem, text-primary
4. Challenge summary: DM Sans, body-sm, text-secondary, max 2 lines (CSS line-clamp: 2)
5. Result headline: DM Sans, body-md, text-primary, font-weight 500, highlighted with a faint accent underline or left bar
6. "Read Case Study" link: DM Sans, body-sm, text-secondary, with ArrowRight icon that slides on hover

### Content (from Content Doc)
Use the three placeholder case studies from the Content Doc until real ones are available. Each card must render using data from src/data/caseStudies.ts.

### Animation
- Grid intro: ScrollReveal fade up on the grid container
- Cards: appear with a staggered fade-up, 80ms between each card

### Component Files
- src/components/sections/work/CaseStudyGrid.tsx
- src/components/sections/work/CaseStudyCard.tsx

---

## Section 3: Work Page CTA

### Content
- Headline: "Want Results Like These?"
- Body: "Every case study started with a conversation. Let's start yours."
- CTA Button: "Work With Us" — links to /contact

### Component File
Reuse src/components/shared/CTABanner.tsx

---

## Page File (src/app/work/page.tsx)

```typescript
import WorkHero from '@/components/sections/work/WorkHero'
import CaseStudyGrid from '@/components/sections/work/CaseStudyGrid'
import CTABanner from '@/components/shared/CTABanner'
import { caseStudies } from '@/data/caseStudies'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'See how Coréal Media has helped founders and brands build consistent, high-quality content systems that generate trust, visibility, and growth.',
  openGraph: {
    title: 'Our Work | Coréal Media',
    description: 'Real results from real brands. Browse case studies from Coréal Media clients.',
    url: 'https://corealmedia.com/work',
    images: [{ url: '/images/og/og-work.jpg', width: 1200, height: 630, alt: 'Our Work — Coréal Media' }],
  },
}

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <CaseStudyGrid caseStudies={caseStudies} />
      <CTABanner
        headline="Want Results Like These?"
        body="Every case study started with a conversation. Let's start yours."
        ctaLabel="Work With Us"
        ctaHref="/contact"
      />
    </>
  )
}
```

---

## Data File (src/data/caseStudies.ts)

```typescript
import { CaseStudy } from '@/types/caseStudy'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'personal-brand-business-coach',
    clientType: 'Personal Brand / Founder',
    industry: 'Business Coaching',
    challenge: 'Inconsistent posting, no clear content direction, founder doing everything manually with no system in place.',
    challengeDetail:
      'The founder was spending hours every week trying to figure out what to post, writing captions at midnight, and still missing weeks at a time. There was no strategy, no workflow, and no consistency. The brand existed, but it was not building anything.',
    solution: 'We implemented The Content OS — building a full content strategy, defining three core content pillars, writing three months of scripts and captions in advance, and setting up a repeatable monthly production workflow.',
    solutionDetail:
      'The founder recorded content in one session per month. We handled everything else: scripting, editing briefs, caption writing, scheduling, and optimization. The system ran whether the founder was present or not.',
    results: [
      {
        metric: '3 Months',
        value: '3',
        description: 'Of consecutive consistent posting from day one of going live',
      },
      {
        metric: 'Zero Gaps',
        value: '0',
        description: 'Missed posting days across the entire engagement',
      },
      {
        metric: '4 Hours Saved',
        value: '4+',
        description: 'Per week previously spent on content guesswork, returned to the founder',
      },
    ],
    servicesUsed: ['The Content OS'],
    featuredImage: '/images/case-studies/case-study-1.jpg',
    publishedAt: '2026-01-15',
    featured: true,
  },
  {
    slug: 'multi-brand-lifestyle-wellness',
    clientType: 'Multi-Brand Company',
    industry: 'Lifestyle & Wellness',
    challenge: 'Managing content across three brands simultaneously with a small team and no repeatable workflow.',
    challengeDetail:
      'Three different brands. Three different audiences. Three different content calendars. A small internal team was stretched across all of them with no system connecting the work. Quality was inconsistent and deadlines were missed regularly.',
    solution: 'We deployed The Content OS and The Operational Engine across all three brands simultaneously, building a unified production workflow that treated all three brands as one coordinated system.',
    solutionDetail:
      'Each brand got its own content strategy and messaging pillars, but the production workflow was shared and standardized. Scripts, briefs, and schedules moved through one system instead of three separate ones.',
    results: [
      {
        metric: '3 Brands',
        value: '3',
        description: 'Running on a single coordinated content production system',
      },
      {
        metric: '4 Months',
        value: '4',
        description: 'Of zero missed posts across all three brands combined',
      },
      {
        metric: '60% Less',
        value: '60%',
        description: 'Time spent by the internal team on content coordination',
      },
    ],
    servicesUsed: ['The Content OS', 'The Operational Engine'],
    featuredImage: '/images/case-studies/case-study-2.jpg',
    publishedAt: '2026-02-01',
    featured: true,
  },
  {
    slug: 'marketing-agency-volume',
    clientType: 'Marketing Agency',
    industry: 'Agency Services',
    challenge: 'High client volume, inconsistent output quality, and no repeatable content production workflow.',
    challengeDetail:
      'The agency was managing twelve clients but running on chaos. Every month felt like starting from scratch. Content quality varied between clients. Deadlines were close calls. The team was tired.',
    solution: 'We built a standardized content production system using The Operational Engine, creating SOPs, brief templates, review checkpoints, and delivery workflows that applied across all twelve client accounts.',
    solutionDetail:
      'Every client account followed the same production stages. Briefs were standardized. Review cycles were defined. The team knew exactly what to do and when. Quality became predictable instead of variable.',
    results: [
      {
        metric: '12 Clients',
        value: '12',
        description: 'Delivered consistently each month with the same team',
      },
      {
        metric: '100% On-Time',
        value: '100%',
        description: 'Delivery rate maintained across all client accounts after system implementation',
      },
      {
        metric: 'Zero Revisions',
        value: '0',
        description: 'Brand alignment errors in the first month after the system was live',
      },
    ],
    servicesUsed: ['The Operational Engine'],
    featuredImage: '/images/case-studies/case-study-3.jpg',
    publishedAt: '2026-02-15',
    featured: false,
  },
]

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug)
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter(study => study.featured)
}
```

---
---

# INDIVIDUAL CASE STUDY PAGE (/work/[slug])

## Overview

**Page:** Case Study Detail
**Route:** /work/[slug]
**File:** src/app/work/[slug]/page.tsx
**Priority:** Critical
**Goal:** Prove Coréal's capabilities through a detailed, honest breakdown of a real client engagement

---

## Layout Structure

This page uses a consistent template for all case studies. The data is sourced from src/data/caseStudies.ts using the slug parameter.

---

## Sections

### 1. Case Study Hero
- Full width, semi-full viewport height
- Featured image as background with overlay (rgba(0,0,0,0.6))
- Section label: "CASE STUDY" (DM Mono, accent color)
- Client type as main headline (Cormorant, display-xl)
- Industry badge and services used badges
- Challenge summary in one sentence (DM Sans, body-lg, text-secondary)

### 2. Context Section
- Background: #111111
- Heading: "The Situation" (Cormorant, display-md)
- Body: challengeDetail text from data

### 3. Problem Section
- Background: #0A0A0A
- Heading: "The Problem" (Cormorant, display-md)
- Body: extended challenge description

### 4. Solution Section
- Background: #111111
- Heading: "How We Approached It" (Cormorant, display-md)
- Body: solutionDetail text from data
- Service(s) used displayed as accent-colored tags

### 5. Results Section
- Background: #0A0A0A
- Heading: "The Outcome" (Cormorant, display-md)
- Results displayed as large metric cards in a row
- Each metric card: large number or value (Cormorant, display-xl, accent color), metric label (DM Mono, label), description (DM Sans, body-sm, text-secondary)
- Cards on a grid: 3 per row on desktop, 1 per row on mobile

### 6. Testimonial (if available)
- Background: #161616 full-width block
- Large Lucide Quote icon, accent color, 48px
- Quote text: Cormorant Garamond, italic, display-md, text-primary
- Author: DM Sans, body-sm, text-muted, with thin divider above

### 7. Navigation Footer
- Background: #111111
- "Back to All Work" link with ArrowLeft icon, links to /work
- Next case study card preview (if available)

### 8. CTA Banner
- Reuse CTABanner component
- Headline: "Ready to Build Your Content Engine?"
- CTA: "Start the Conversation" → /contact

---

## Page File (src/app/work/[slug]/page.tsx)

```typescript
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug, caseStudies } from '@/data/caseStudies'
import CaseStudyContent from '@/components/sections/work/CaseStudyContent'
import CTABanner from '@/components/shared/CTABanner'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return caseStudies.map(study => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) return { title: 'Case Study Not Found' }
  return {
    title: `${study.clientType} | Case Study`,
    description: study.challenge,
    openGraph: {
      title: `${study.clientType} | Coréal Media Case Study`,
      description: study.challenge,
      url: `https://corealmedia.com/work/${study.slug}`,
      images: [{ url: study.featuredImage, width: 1200, height: 630, alt: study.clientType }],
    },
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug)
  if (!study) notFound()

  return (
    <>
      <CaseStudyContent study={study} />
      <CTABanner
        headline="Ready to Build Your Content Engine?"
        body="Let's talk about your brand, your goals, and exactly how Coréal can help you show up consistently — at scale, without the chaos."
        ctaLabel="Start the Conversation"
        ctaHref="/contact"
      />
    </>
  )
}
```

---
---

# ABOUT PAGE (/about)

## Overview

**Page:** About
**Route:** /about
**File:** src/app/about/page.tsx
**Priority:** High
**Goal:** Tell the Coréal story, present the philosophy, introduce the team, and show vision

---

## Sections (in order)

1. About Hero
2. Brand Story
3. Philosophy
4. Team Grid
5. Mission & Vision
6. About CTA

---

## Section 1: About Hero

### Layout
- Background: #0A0A0A
- ~55vh height
- Left-aligned content
- A very subtle decorative element in the right half of the hero: an abstract thin line pattern or a faded graphic — optional, only if it adds to the premium feel

### Content
- Section label: "OUR STORY"
- Headline: "We Didn't Start With a Name. We Started With a Question."
- Body: "What do we really do in this new era of content creation?"

### Component File
src/components/sections/about/AboutHero.tsx

---

## Section 2: Brand Story

### Layout
- Background: #111111
- Two-column on desktop: left column (headline + labels), right column (body text)
- Long-form copy section, so the right column can hold multiple paragraphs
- Add a large decorative quotation mark (Cormorant, very large, accent color, opacity 0.08) behind the headline as a background element

### Content
- Section label: "BRAND ORIGIN"
- Headline: "How Coréal Began"
- Full brand origin story from Content Doc (six paragraphs)
- Pull the "Co-Real" deconstruction into a styled callout:
  - "Co" — left side: label + meaning
  - "Real" — right side: label + meaning
  - These sit in a subtle #161616 box with border

### Animation
- ScrollReveal on all content, staggered paragraphs 100ms apart

### Component File
src/components/sections/about/BrandStory.tsx

---

## Section 3: Philosophy

### Layout
- Background: #0A0A0A
- Full-width centered section
- Large headline centered
- Body paragraphs left-aligned below, max-width 680px centered
- Three philosophy pillars displayed in a row below the body text, each with a large Lucide icon, title, and description

### Content
- Section label: "OUR PHILOSOPHY"
- Headline: "Content Should Be Engineered by Intelligence. Felt by Humans."
- Three body paragraphs
- Three pillars: Machine Precision, Human Soul, Integrated Intelligence (from Content Doc)

### Pillar Card Specs
- Background: #161616
- Border: 1px solid #242424
- Padding: 32px
- Icon: Lucide, 32px, accent color
- Title: Cormorant Garamond, display-md
- Description: DM Sans, body-md, text-secondary
- Hover: border accent color

### Component File
src/components/sections/about/Philosophy.tsx

---

## Section 4: Team Grid

### Layout
- Background: #111111
- Section label + headline + intro at top, left-aligned
- Team cards in a grid: 4 columns on desktop (for leadership + individual contributors), 2 columns on tablet, 1 on mobile
- Leadership team displayed first (Winny, Chidi, Lanre, Segun) then contributors below

### Team Card Design
- Background: #161616
- Border: 1px solid #1A1A1A
- Padding: 24px
- Image: circular avatar or square with rounded corners (use a placeholder silhouette/stock image), 80px x 80px
- Name: Cormorant Garamond, 1.25rem, text-primary
- Role: DM Mono, label, accent color, uppercase
- "What They Own" label: DM Sans, body-sm, text-muted
- Short description: DM Sans, body-sm, text-secondary, limited to "What they own" from Content Doc

### Content
All team members from Content Doc. See Content Doc Section 6, Team Section for full list.

### Animation
- Headline: ScrollReveal fade up
- Cards: staggered ScrollReveal, 60ms between each

### Component File
src/components/sections/about/TeamGrid.tsx

---

## Section 5: Mission & Vision

### Layout
- Background: #0A0A0A
- Two-column layout on desktop: Mission (left), Vision (right)
- Each column has its own section label, headline, and body
- A thin vertical divider between the two columns on desktop

### Content
- Mission section label: "OUR MISSION"
- Mission headline: "Our Mission"
- Mission body from Content Doc
- Vision section label: "OUR VISION"
- Vision headline: "Our Vision"
- Vision body from Content Doc

### Animation
- ScrollReveal on both columns simultaneously (no stagger between them, they appear together)

### Component File
src/components/sections/about/MissionVision.tsx

---

## Section 6: About CTA

### Content
- Headline: "Want to Work With a Team That Treats Your Brand Like Their Own?"
- CTA: "Let's Talk" → /contact

### Component File
Reuse src/components/shared/CTABanner.tsx

---

## Page File (src/app/about/page.tsx)

```typescript
import AboutHero from '@/components/sections/about/AboutHero'
import BrandStory from '@/components/sections/about/BrandStory'
import Philosophy from '@/components/sections/about/Philosophy'
import TeamGrid from '@/components/sections/about/TeamGrid'
import MissionVision from '@/components/sections/about/MissionVision'
import CTABanner from '@/components/shared/CTABanner'
import { teamMembers } from '@/data/team'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Coréal Media was built on a simple belief: the future of content is co-created. Learn about our origin story, our philosophy, and the team behind the system.',
  openGraph: {
    title: 'About Coréal Media',
    description:
      'Human intuition meets machine intelligence. Learn how Coréal Media was built and why it exists.',
    url: 'https://corealmedia.com/about',
    images: [{ url: '/images/og/og-about.jpg', width: 1200, height: 630, alt: 'About Coréal Media' }],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <Philosophy />
      <TeamGrid members={teamMembers} />
      <MissionVision />
      <CTABanner
        headline="Want to Work With a Team That Treats Your Brand Like Their Own?"
        body="Let's talk about your brand, your goals, and how Coréal can help you build the content engine your business deserves."
        ctaLabel="Let's Talk"
        ctaHref="/contact"
      />
    </>
  )
}
```

---
---

# CONTACT PAGE (/contact)

## Overview

**Page:** Contact
**Route:** /contact
**File:** src/app/contact/page.tsx
**Priority:** High
**Goal:** Convert page visitors into enquiries through a clean, frictionless form

---

## Sections

1. Contact Hero
2. Contact Form + Sidebar

---

## Section 1: Contact Hero

### Layout
- Background: #0A0A0A
- ~40vh height
- Left-aligned

### Content
- Section label: "GET IN TOUCH"
- Headline: "Let's Build Something Real Together"
- Body paragraph from Content Doc

---

## Section 2: Contact Form + Sidebar

### Layout
- Background: #111111
- Two-column layout on desktop: form (left, ~60% width), sidebar (right, ~35% width)
- Single column on mobile: form first, then sidebar info below
- Section padding around the entire block

### Form Design
All form specs from Design System Doc Section 7.6 apply here.

**Form Heading:** "Tell Us About Your Brand" (Cormorant, display-md)

**Fields:**
1. Full Name (text, required)
2. Email Address (email, required)
3. Company / Brand Name (text, required)
4. Service Interest (select dropdown, required) — five options as in Content Doc
5. Message textarea (required, 5 rows)
6. Submit button: full width, primary style, "Send Message"

**Implementation:**
- Use React Hook Form for all validation
- Validate: name required, email format valid, company required, service selected (not default), message minimum 20 characters
- On validation error: display red error text below the field using DM Sans, body-sm, color #CF4444
- On submit: show loading state on button (spinner icon replaces text briefly)
- On success: redirect to /thank-you
- On server error: show error message above the submit button

**Form Action:**
For V1, use a service like Formspree or Resend to handle form submissions. Add the endpoint to .env.local. The form should POST to the API endpoint without a full page reload.

### Sidebar Design
- No background card, just padding
- Heading: "Other Ways to Reach Us" (Cormorant, 1.375rem)
- Contact items: icon + label + value, vertical list
- Reassurance note: small italic text at the bottom, text-muted

### Component Files
- src/components/sections/contact/ContactHero.tsx
- src/components/sections/contact/ContactForm.tsx

---

## Page File (src/app/contact/page.tsx)

```typescript
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactForm from '@/components/sections/contact/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Ready to build your content engine? Get in touch with Coréal Media and let's talk about your brand, your goals, and how we can help you scale.",
  openGraph: {
    title: 'Contact Coréal Media',
    description: "Ready to build your content engine? Let's talk.",
    url: 'https://corealmedia.com/contact',
    images: [{ url: '/images/og/og-contact.jpg', width: 1200, height: 630, alt: 'Contact Coréal Media' }],
  },
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  )
}
```

---
---

# THANK YOU PAGE (/thank-you)

## Overview

**Page:** Thank You
**Route:** /thank-you
**File:** src/app/thank-you/page.tsx
**Priority:** Medium
**Goal:** Confirm the submission was received, set expectations for next steps, keep the visitor warm

---

## Layout
- Background: #0A0A0A
- Full viewport height or close to it
- Centered content vertically and horizontally
- Clean, minimal, premium feel

## Content (from Content Doc)
- Section label: "MESSAGE RECEIVED"
- Headline: "We Got Your Message."
- Body paragraph
- Three steps listed vertically, each with a Lucide icon, number, and description
- CTA Button: "Explore Our Services" → /services
- Secondary text link: "Or go back to the homepage" → /

## Page File (src/app/thank-you/page.tsx)

```typescript
import Link from 'next/link'
import { Mail, MessageSquare, Layers } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Message Received',
  description: 'Thank you for reaching out to Coréal Media. We will be in touch shortly.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  const steps = [
    {
      icon: Mail,
      title: 'We review your message',
      description:
        'We learn about your brand before we respond. We do not send generic replies.',
    },
    {
      icon: MessageSquare,
      title: 'We schedule a discovery call',
      description:
        'If we are a good fit, we will reach out to set up a real conversation. No hard sell.',
    },
    {
      icon: Layers,
      title: 'We build your content system',
      description: 'Strategy first. Execution after. Built around your brand, not a template.',
    },
  ]

  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center section-padding">
      <div className="container-site max-w-2xl mx-auto text-center">
        <p className="font-mono text-accent text-label uppercase tracking-widest mb-6">
          MESSAGE RECEIVED
        </p>
        <h1 className="font-display text-display-xl text-text-primary mb-6">
          We Got Your Message.
        </h1>
        <p className="font-body text-body-lg text-text-secondary mb-12">
          Thank you for reaching out to Coréal Media. We have received your enquiry and will be
          in touch within 48 business hours.
        </p>

        <p className="font-body text-body-md text-text-secondary mb-8">In the meantime, here is what happens next:</p>

        <div className="flex flex-col gap-6 text-left mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-sm bg-accent-light flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-body font-medium text-text-primary mb-1">{step.title}</p>
                  <p className="font-body text-body-sm text-text-secondary">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <Link
          href="/services"
          className="inline-block bg-accent text-text-primary font-body text-body-sm font-medium px-7 py-3 rounded-sm hover:bg-accent-hover transition-colors duration-200 mb-4"
        >
          Explore Our Services
        </Link>
        <div>
          <Link href="/" className="font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors">
            Or go back to the homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
```

---
---

# 404 PAGE

## Overview

**Page:** 404 Not Found
**Route:** Automatic — Next.js uses src/app/not-found.tsx
**File:** src/app/not-found.tsx
**Priority:** Medium
**Goal:** Keep the brand experience intact even on error pages, guide the visitor back

---

## Layout
- Background: #0A0A0A
- Centered, full viewport height
- Minimal and clean

## Content (from Content Doc)
- Section label: "404"
- Headline: "This Page Doesn't Exist. But Your Content System Should."
- Body copy
- CTA Button: "Back to Homepage" → /
- Secondary link: "Or contact us if you think something is broken" → /contact

## File (src/app/not-found.tsx)

```typescript
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center section-padding">
      <div className="container-site max-w-xl mx-auto text-center">
        <p className="font-mono text-accent text-label uppercase tracking-widest mb-6">404</p>
        <h1 className="font-display text-display-xl text-text-primary mb-6">
          This Page Doesn&apos;t Exist.
          <br />
          But Your Content System Should.
        </h1>
        <p className="font-body text-body-lg text-text-secondary mb-10">
          The page you are looking for has either moved or never existed. Let&apos;s get you back on
          track.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-text-primary font-body text-body-sm font-medium px-7 py-3 rounded-sm hover:bg-accent-hover transition-colors duration-200 mb-4"
        >
          Back to Homepage
        </Link>
        <div>
          <Link
            href="/contact"
            className="font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors"
          >
            Or contact us if you think something is broken
          </Link>
        </div>
      </div>
    </main>
  )
}
```

---
---

# PRIVACY POLICY PAGE (/privacy-policy)

## Overview

**Page:** Privacy Policy
**Route:** /privacy-policy
**File:** src/app/privacy-policy/page.tsx
**Priority:** Required
**Goal:** Legal compliance for contact form data collection

---

## Layout
- Background: #0A0A0A
- Long-form document layout
- Container max-width: 760px, centered
- Generous section padding top (to account for navbar) and bottom
- Headings: Cormorant Garamond, display-md
- Body: DM Sans, body-md, text-secondary, line-height 1.7
- Section headings are H2
- Top of page: page title + "Last Updated: March 2026" in text-muted

## Content
Use all content from Content Doc Section 10 verbatim. Seven sections total.

## Page File (src/app/privacy-policy/page.tsx)

```typescript
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Coréal Media privacy policy to understand how we collect, use, and protect your information.',
  robots: { index: true, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg-primary section-padding">
      <div className="container-site max-w-3xl mx-auto">
        <p className="font-mono text-text-muted text-label uppercase tracking-widest mb-4">
          Legal
        </p>
        <h1 className="font-display text-display-lg text-text-primary mb-3">Privacy Policy</h1>
        <p className="font-body text-body-sm text-text-muted mb-12">Last Updated: March 2026</p>

        <div className="space-y-10">
          {/* Section 1 */}
          <section>
            <h2 className="font-display text-display-md text-text-primary mb-4">Introduction</h2>
            <p className="font-body text-body-md text-text-secondary">
              Coréal Media (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This privacy
              policy explains how we collect, use, and store your personal information when you
              visit our website at corealmedia.com and when you contact us through our contact
              form.
            </p>
          </section>

          {/* Remaining sections follow the same pattern from Content Doc */}
          {/* Each section uses an H2 heading and body paragraphs or lists */}
          {/* Follow the Content Doc exactly for all seven sections */}
        </div>
      </div>
    </main>
  )
}
```

Note to Claude Code: Implement all seven sections from the Content Doc inside the space-y-10 div, following the same pattern as Section 1 shown above. Do not truncate or skip any section.

---
---

# SHARED COMPONENT: CTABanner

## File: src/components/shared/CTABanner.tsx

```typescript
'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

interface CTABannerProps {
  headline: string
  body: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  headline,
  body,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-bg-secondary section-padding border-t border-border-subtle">
      <div className="container-site text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-lg text-text-primary mb-5">{headline}</h2>
          <p className="font-body text-body-lg text-text-secondary mb-8">{body}</p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-accent text-text-primary font-body text-body-sm font-medium px-7 py-3 rounded-sm hover:bg-accent-hover transition-colors duration-200"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
          {secondaryLabel && secondaryHref && (
            <div className="mt-4">
              <Link
                href={secondaryHref}
                className="font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                {secondaryLabel}
              </Link>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
```

---

## Global Checklist Before Site Launch

- [ ] All 9 pages are live and accessible
- [ ] No broken links anywhere on the site
- [ ] All forms submit and redirect correctly
- [ ] 404 page displays for invalid URLs
- [ ] Sitemap accessible at /sitemap.xml
- [ ] robots.txt accessible at /robots.txt
- [ ] All metadata and OG tags correct on every page
- [ ] Lighthouse 90+ on all pages
- [ ] No console errors on any page
- [ ] All animations disabled with prefers-reduced-motion
- [ ] Site fully responsive: 320px, 768px, 1024px, 1440px
- [ ] Navbar sticky and visible on all pages
- [ ] Footer present on all pages
- [ ] No emojis anywhere — Lucide icons only
- [ ] Domain connected from Hostinger to Vercel via DNS
- [ ] SSL active on production URL
- [ ] Environment variables set in Vercel dashboard
