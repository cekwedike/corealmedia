# Tech Stack & Project Architecture Document
# Coréal Media Agency Website

---

## 1. Overview

This document defines the complete technical stack, project structure, dependencies, configuration, and development conventions for the Coréal Media Agency website. Claude Code must follow this document exactly when setting up and building the project.

---

## 2. Core Stack

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Framework | Next.js | 14.x (App Router) | Full-stack React framework, SSG/SSR, routing |
| Language | TypeScript | 5.x | Type safety across the entire project |
| Styling | Tailwind CSS | 3.x | Utility-first CSS, responsive design |
| Animation | Framer Motion | 11.x | Page transitions, scroll animations, micro-interactions |
| Icons | Lucide React | Latest | All icons across the site. No emojis anywhere |
| Font Loading | next/font | Built-in | Optimized font loading, zero layout shift |
| Image Optimization | next/image | Built-in | WebP conversion, lazy loading, responsive images |
| Form Handling | React Hook Form | 7.x | Contact form validation and state |
| Linting | ESLint | Built-in with Next.js | Code quality enforcement |
| Formatting | Prettier | 3.x | Consistent code formatting |

---

## 3. Typography

All fonts loaded via next/font/google for performance and zero layout shift.

| Role | Font | Weights | Usage |
|---|---|---|---|
| Display / Headings | Cormorant Garamond | 300, 400, 500, 600, 700 | Hero headlines, section titles, large text |
| Body / UI | DM Sans | 300, 400, 500, 600 | Body copy, navigation, buttons, captions |
| Accent / Label | DM Mono | 400, 500 | Tags, labels, stage numbers, small caps |

These fonts are chosen deliberately. Cormorant Garamond gives Coréal the editorial, luxury feel. DM Sans keeps body copy clean and readable. DM Mono adds a technical, intelligent edge to labels and accents.

---

## 4. Color System

All colors defined as CSS custom properties in globals.css and referenced in tailwind.config.ts.

```css
:root {
  /* Backgrounds */
  --color-bg-primary: #0A0A0A;
  --color-bg-secondary: #111111;
  --color-bg-card: #161616;
  --color-bg-elevated: #1C1C1C;

  /* Text */
  --color-text-primary: #F5F5F5;
  --color-text-secondary: #A0A0A0;
  --color-text-muted: #5A5A5A;

  /* Accent */
  --color-accent: #8B1A1A;
  --color-accent-hover: #A52020;
  --color-accent-light: rgba(139, 26, 26, 0.15);

  /* Borders */
  --color-border: #242424;
  --color-border-subtle: #1A1A1A;

  /* States */
  --color-focus: #8B1A1A;
  --color-error: #CF4444;
  --color-success: #3D8B5E;
}
```

---

## 5. Project Folder Structure

```
coreal-media/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── team/
│   │   ├── case-studies/
│   │   └── og/
│   ├── fonts/                    (if any self-hosted fonts)
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml               (auto-generated)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            (root layout, metadata, fonts)
│   │   ├── page.tsx              (homepage)
│   │   ├── globals.css           (CSS variables, base styles)
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx          (case studies index)
│   │   │   └── [slug]/
│   │   │       └── page.tsx      (individual case study)
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── thank-you/
│   │   │   └── page.tsx
│   │   ├── privacy-policy/
│   │   │   └── page.tsx
│   │   └── not-found.tsx         (404 page)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── SectionLabel.tsx
│   │   │   ├── Divider.tsx
│   │   │   └── AnimatedText.tsx
│   │   ├── sections/
│   │   │   ├── home/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── ProblemSection.tsx
│   │   │   │   ├── ServicesTeaser.tsx
│   │   │   │   ├── ProcessStrip.tsx
│   │   │   │   ├── WhoWeServe.tsx
│   │   │   │   ├── SocialProof.tsx
│   │   │   │   └── HomeCTA.tsx
│   │   │   ├── services/
│   │   │   │   ├── ServicesHero.tsx
│   │   │   │   ├── ServiceBlock.tsx
│   │   │   │   └── WorkflowDetail.tsx
│   │   │   ├── work/
│   │   │   │   ├── WorkHero.tsx
│   │   │   │   ├── CaseStudyGrid.tsx
│   │   │   │   ├── CaseStudyCard.tsx
│   │   │   │   └── CaseStudyContent.tsx
│   │   │   ├── about/
│   │   │   │   ├── AboutHero.tsx
│   │   │   │   ├── BrandStory.tsx
│   │   │   │   ├── Philosophy.tsx
│   │   │   │   ├── TeamGrid.tsx
│   │   │   │   └── MissionVision.tsx
│   │   │   └── contact/
│   │   │       ├── ContactHero.tsx
│   │   │       └── ContactForm.tsx
│   │   └── shared/
│   │       ├── PageHero.tsx
│   │       ├── CTABanner.tsx
│   │       └── ScrollReveal.tsx
│   │
│   ├── data/
│   │   ├── caseStudies.ts        (all case study data)
│   │   ├── team.ts               (team member data)
│   │   ├── services.ts           (service details data)
│   │   └── navigation.ts         (nav links)
│   │
│   ├── lib/
│   │   ├── utils.ts              (utility functions)
│   │   └── metadata.ts           (shared metadata helpers)
│   │
│   └── types/
│       ├── caseStudy.ts
│       ├── team.ts
│       └── service.ts
│
├── .env.local                    (environment variables, gitignored)
├── .env.example                  (template for env vars)
├── .eslintrc.json
├── .prettierrc
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 6. Configuration Files

### 6.1 next.config.ts

```typescript
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
```

### 6.2 tailwind.config.ts

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#111111',
        'bg-card': '#161616',
        'bg-elevated': '#1C1C1C',
        'text-primary': '#F5F5F5',
        'text-secondary': '#A0A0A0',
        'text-muted': '#5A5A5A',
        accent: '#8B1A1A',
        'accent-hover': '#A52020',
        border: '#242424',
        'border-subtle': '#1A1A1A',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body-md': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.65' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
      },
      spacing: {
        'section': '8rem',
        'section-sm': '5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'noise': "url('/images/noise.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config
```

### 6.3 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### 6.4 .prettierrc

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

### 6.5 .eslintrc.json

```json
{
  "extends": ["next/core-web-vitals", "next/typescript"]
}
```

---

## 7. Package.json Dependencies

```json
{
  "name": "coreal-media",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  },
  "dependencies": {
    "next": "14.2.x",
    "react": "^18.3.x",
    "react-dom": "^18.3.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.400.x",
    "react-hook-form": "^7.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "postcss": "^8.x",
    "eslint": "^8",
    "eslint-config-next": "14.2.x",
    "prettier": "^3.x"
  }
}
```

---

## 8. Root Layout (src/app/layout.tsx)

```typescript
import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://corealmedia.com'),
  title: {
    default: 'Coréal Media | Content Systems for Brands That Scale',
    template: '%s | Coréal Media',
  },
  description:
    'Coréal Media builds content engines for founders, multi-brand companies, and agencies. Strategy, execution, and scale without losing what makes your brand human.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://corealmedia.com',
    siteName: 'Coréal Media',
    images: [
      {
        url: '/images/og/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Coréal Media Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="bg-bg-primary text-text-primary font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

## 9. Global CSS (src/app/globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-bg-primary: #0A0A0A;
  --color-bg-secondary: #111111;
  --color-bg-card: #161616;
  --color-bg-elevated: #1C1C1C;
  --color-text-primary: #F5F5F5;
  --color-text-secondary: #A0A0A0;
  --color-text-muted: #5A5A5A;
  --color-accent: #8B1A1A;
  --color-accent-hover: #A52020;
  --color-accent-light: rgba(139, 26, 26, 0.15);
  --color-border: #242424;
  --color-border-subtle: #1A1A1A;
}

@layer base {
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
    font-family: var(--font-dm-sans), system-ui, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-cormorant), Georgia, serif;
    font-weight: 500;
    line-height: 1.1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: var(--color-accent);
    color: #fff;
  }

  :focus-visible {
    outline: 2px solid var(--color-accent);
    outline-offset: 3px;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .container-site {
    width: 100%;
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 768px) {
    .container-site {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  @media (min-width: 1280px) {
    .container-site {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }

  .section-padding {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  @media (min-width: 1024px) {
    .section-padding {
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }

  .noise-overlay {
    position: relative;
  }

  .noise-overlay::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url('/images/noise.png');
    background-repeat: repeat;
    opacity: 0.03;
    pointer-events: none;
    z-index: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## 10. Utility Functions (src/lib/utils.ts)

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}
```

---

## 11. TypeScript Types

### src/types/caseStudy.ts

```typescript
export interface CaseStudy {
  slug: string
  clientType: string
  industry: string
  challenge: string
  challengeDetail: string
  solution: string
  solutionDetail: string
  results: Result[]
  servicesUsed: string[]
  testimonial?: Testimonial
  featuredImage: string
  gallery?: string[]
  publishedAt: string
  featured: boolean
}

export interface Result {
  metric: string
  value: string
  description: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}
```

### src/types/team.ts

```typescript
export interface TeamMember {
  name: string
  role: string
  department: string
  bio: string
  owns: string[]
  image: string
  linkedIn?: string
}
```

### src/types/service.ts

```typescript
export interface Service {
  id: string
  name: string
  tagline: string
  description: string
  deliverables: string[]
  outcome: string
  whoItsFor: string[]
  icon: string
}
```

---

## 12. Shared Reusable Components

### ScrollReveal Component (src/components/shared/ScrollReveal.tsx)

This component wraps any content and animates it in when it enters the viewport. Used on every section across all pages.

```typescript
'use client'

import { useRef, useEffect, ReactNode } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const controls = useAnimation()

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

---

## 13. Environment Variables

### .env.example

```
# Site URL (update to production URL before launch)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact form (if using a third-party service like Resend or Formspree)
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=hello@corealmedia.com
```

---

## 14. robots.txt

Place in /public/robots.txt

```
User-agent: *
Allow: /

Sitemap: https://corealmedia.com/sitemap.xml
```

---

## 15. Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start

# Run linter
npm run lint

# Format all files
npm run format
```

---

## 16. Git Conventions

- Main branch: `main` (connected to Vercel, auto-deploys on push)
- Feature branches: `feature/page-name` (example: `feature/homepage`)
- Commit messages: clear and descriptive (example: `Add hero section to homepage`)
- Never push directly to main. Merge via pull request or squash merge.

---

## 17. Vercel Deployment Configuration

In Vercel project settings:
- Framework Preset: Next.js
- Root Directory: ./
- Build Command: npm run build
- Output Directory: .next
- Install Command: npm install
- Node.js Version: 20.x
