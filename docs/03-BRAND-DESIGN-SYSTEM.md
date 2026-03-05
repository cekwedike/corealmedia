# Brand & Design System Document
# Coréal Media Agency Website

---

## 1. Brand Identity Overview

Coréal Media is a premium content systems agency. The brand sits at the intersection of human creativity and artificial intelligence. The aesthetic must communicate three things at once: intelligent, editorial, and confident. Think luxury meets precision. Think a high-end editorial magazine that also runs on systems and data.

The name Coréal comes from "Co" (collaboration, co-creation) and "Real" (authenticity, human truth). The accent on the é is deliberate. It elevates the name and gives it a timeless, global quality. This must be reflected in every design decision on the website.

---

## 2. Brand Personality

| Trait | What It Means in Design |
|---|---|
| Intelligent | Clean layouts, purposeful whitespace, no clutter |
| Editorial | Typography-led design, strong hierarchy, magazine-quality composition |
| Premium | Dark backgrounds, refined color palette, high contrast |
| Confident | Bold headlines, direct copy, decisive visual choices |
| Human | Warmth in copy, real photography, no sterile corporate feel |
| Forward-thinking | Subtle animations, modern interactions, structured systems |

---

## 3. Color Palette

### 3.1 Primary Colors

| Name | Hex | Usage |
|---|---|---|
| Background Primary | #0A0A0A | Main page background |
| Background Secondary | #111111 | Alternate section backgrounds |
| Background Card | #161616 | Cards, panels, elevated surfaces |
| Background Elevated | #1C1C1C | Dropdowns, overlays, modal backgrounds |

### 3.2 Text Colors

| Name | Hex | Usage |
|---|---|---|
| Text Primary | #F5F5F5 | Main body text, headings |
| Text Secondary | #A0A0A0 | Supporting text, captions, meta info |
| Text Muted | #5A5A5A | Placeholder text, disabled states |

### 3.3 Accent Colors

| Name | Hex | Usage |
|---|---|---|
| Accent | #8B1A1A | Primary buttons, active states, highlights, icons |
| Accent Hover | #A52020 | Button hover state |
| Accent Light | rgba(139, 26, 26, 0.15) | Card hover backgrounds, tag backgrounds |

### 3.4 Border Colors

| Name | Hex | Usage |
|---|---|---|
| Border | #242424 | Card borders, dividers, input borders |
| Border Subtle | #1A1A1A | Very subtle separators |

### 3.5 State Colors

| Name | Hex | Usage |
|---|---|---|
| Error | #CF4444 | Form errors, destructive actions |
| Success | #3D8B5E | Form success, confirmations |
| Focus | #8B1A1A | Focus ring on interactive elements |

### 3.6 Color Rules
- Never use pure white (#FFFFFF) as a background
- Never use pure black (#000000) as the main background. Use #0A0A0A
- The accent color must never be overused. It draws the eye. Use it on CTAs, active states, and a few key highlights only
- All text must pass WCAG AA contrast requirements against its background

---

## 4. Typography

### 4.1 Font Families

**Cormorant Garamond (Display Font)**
Used for all headings, hero text, and large display copy. It carries the editorial, luxury quality of the brand. Always use it for anything the visitor reads first.

**DM Sans (Body Font)**
Used for all body copy, navigation, buttons, labels, and form text. It is clean, modern, and highly legible at small sizes.

**DM Mono (Accent/Mono Font)**
Used for tags, labels, stage numbers, small caps text, and anything that needs a technical or structured feel.

### 4.2 Type Scale

| Token | Size | Line Height | Letter Spacing | Font | Usage |
|---|---|---|---|---|---|
| display-2xl | clamp(3rem, 8vw, 7rem) | 1.05 | -0.02em | Cormorant | Hero headline |
| display-xl | clamp(2.5rem, 6vw, 5.5rem) | 1.08 | -0.02em | Cormorant | Page titles |
| display-lg | clamp(2rem, 4vw, 4rem) | 1.1 | -0.015em | Cormorant | Section headlines |
| display-md | clamp(1.5rem, 3vw, 2.75rem) | 1.15 | -0.01em | Cormorant | Subsection titles |
| body-lg | 1.125rem | 1.75 | 0 | DM Sans | Lead paragraph text |
| body-md | 1rem | 1.7 | 0 | DM Sans | Standard body copy |
| body-sm | 0.875rem | 1.65 | 0 | DM Sans | Captions, meta text |
| label | 0.75rem | 1.5 | 0.1em | DM Mono | Tags, labels, badges |

### 4.3 Typography Rules
- Headings are always Cormorant Garamond. Never DM Sans for headings
- Body text is always DM Sans. Never Cormorant for body paragraphs
- Labels and tags use DM Mono in uppercase
- Never stretch or condense any font
- Headline max-width should be limited (around 18 to 22 characters per line) for readability
- Long-form body copy max-width: 680px

---

## 5. Spacing System

Based on a 4px base unit. All spacing values are multiples of 4.

| Token | Value | Usage |
|---|---|---|
| xs | 4px | Tight internal spacing |
| sm | 8px | Small gaps, icon margins |
| md | 16px | Standard spacing |
| lg | 24px | Card padding, section element spacing |
| xl | 32px | Between related groups |
| 2xl | 48px | Between sections on mobile |
| 3xl | 64px | Between sections on tablet |
| 4xl | 96px | Between sections on desktop |
| 5xl | 128px | Large section padding |

---

## 6. Grid & Layout

### 6.1 Container
- Max width: 1280px
- Horizontal padding: 24px (mobile), 48px (tablet), 64px (desktop)
- Centered on all screen sizes

### 6.2 Grid
- 12-column grid on desktop
- 6-column grid on tablet
- 4-column grid on mobile
- Default column gap: 24px (desktop), 16px (mobile)

### 6.3 Layout Rules
- Every page section must breathe. Never stack sections without adequate vertical space
- Alternate background colors between sections to create visual rhythm (bg-primary, bg-secondary)
- Full-bleed sections (hero, CTA banners) go edge to edge. Container only on content sections
- Never center-align large blocks of body text. Left-align for readability

---

## 7. Component Design Specifications

### 7.1 Buttons

**Primary Button**
- Background: #8B1A1A
- Text: #F5F5F5
- Font: DM Sans, 500 weight, 0.875rem
- Padding: 14px 28px
- Border radius: 2px (sharp, not rounded pill)
- Border: none
- Hover: background #A52020, subtle lift shadow
- Active: slight scale down (0.98)
- Transition: all 200ms ease

**Secondary Button (Ghost)**
- Background: transparent
- Text: #F5F5F5
- Border: 1px solid #242424
- Font: DM Sans, 500 weight, 0.875rem
- Padding: 14px 28px
- Border radius: 2px
- Hover: border color #A52020, text color #F5F5F5
- Transition: all 200ms ease

**Text Link Button**
- Background: none
- Text: #A0A0A0
- Font: DM Sans, 400 weight
- Underline on hover
- Arrow icon (Lucide ArrowRight) on the right that slides right on hover

### 7.2 Cards

**Standard Card**
- Background: #161616
- Border: 1px solid #242424
- Border radius: 4px
- Padding: 32px
- Hover: border color shifts to rgba(139, 26, 26, 0.4), subtle background lift to #1C1C1C
- Transition: all 300ms ease

**Featured Card**
- Same as standard but with a thin left border in accent color (#8B1A1A, 2px)
- Slightly elevated background: #1C1C1C

### 7.3 Navigation

**Desktop Navbar**
- Position: fixed top, full width
- Background: rgba(10, 10, 10, 0.85) with backdrop-filter: blur(12px)
- Border bottom: 1px solid #1A1A1A
- Height: 72px
- Logo: left aligned, font Cormorant Garamond, 500 weight
- Nav links: DM Sans, 400 weight, 0.875rem, color #A0A0A0
- Nav link hover: color #F5F5F5
- Active nav link: color #F5F5F5
- CTA button: primary button style, right aligned

**Mobile Navbar**
- Same background treatment
- Height: 64px
- Hamburger icon (Lucide Menu / X) on the right
- Full screen overlay menu on open
- Overlay background: #0A0A0A
- Links stacked vertically, large size (display-md)
- Close button top right

### 7.4 Section Labels

Small uppercase labels that appear above section headings to orient the reader.

- Font: DM Mono, 0.75rem, uppercase, letter-spacing 0.1em
- Color: #8B1A1A
- Optional: thin horizontal line on left or a small square icon before text
- Example: "OUR SERVICES", "THE PROCESS", "WHO WE SERVE"

### 7.5 Dividers

- Color: #242424
- Weight: 1px
- Width: full container or partial (60% for decorative use)

### 7.6 Form Inputs

- Background: #111111
- Border: 1px solid #242424
- Border radius: 2px
- Text: #F5F5F5, DM Sans, 1rem
- Placeholder: #5A5A5A
- Focus: border color #8B1A1A, no default browser outline
- Error: border color #CF4444, error message in red below field
- Padding: 14px 16px
- Label: DM Sans, 0.875rem, #A0A0A0, above field

### 7.7 Badges / Tags

- Background: rgba(139, 26, 26, 0.15)
- Text: #8B1A1A or #A0A0A0 depending on context
- Font: DM Mono, 0.7rem, uppercase, letter-spacing 0.08em
- Padding: 4px 10px
- Border radius: 2px
- Border: 1px solid rgba(139, 26, 26, 0.3)

---

## 8. Iconography

**Icon Library:** Lucide React exclusively. No other icon library. No emojis anywhere on the site.

**Icon Sizing:**
- Navigation icons: 18px
- Inline body icons: 16px
- Feature icons in cards: 24px
- Large decorative icons: 32px to 48px

**Icon Color:**
- Default: #A0A0A0
- Active / highlighted: #8B1A1A
- In buttons: #F5F5F5
- Stroke weight: default (1.5)

**Common Icons Used Across the Site:**

| Context | Icon Name (Lucide) |
|---|---|
| Navigation hamburger | Menu |
| Close menu | X |
| Arrow right | ArrowRight |
| Arrow up right (external) | ArrowUpRight |
| Check / success | Check |
| Service: Content OS | Layers |
| Service: Operational Engine | Settings2 |
| Service: Visibility Matrix | TrendingUp |
| Stage 1: Lead Gen | Search |
| Stage 2: Onboarding | MessageSquare |
| Stage 3: Content Creation | FolderOpen |
| Stage 4: Review | Eye |
| Stage 5: Execution | Trophy |
| Team / People | Users |
| Mission | Target |
| Vision | Telescope |
| Email | Mail |
| Phone | Phone |
| Location | MapPin |
| LinkedIn | Linkedin |
| Instagram | Instagram |
| Quote | Quote |

---

## 9. Photography & Visual Style

### 9.1 Image Direction (Stock Images for Version 1)

Since stock images are being used for launch, they must be selected to match the brand's aesthetic. Images that fit Coréal:
- Dark, moody, editorial photography
- Fashion-adjacent visuals (the deck uses editorial fashion imagery)
- Human subjects with strong, confident presence
- Minimalist product or studio photography
- Abstract textures and surfaces in dark tones

Images that do not fit Coréal:
- Bright, cheerful stock photo clichés (people shaking hands, groups laughing)
- Generic office settings
- Flat lay product shots with white backgrounds
- Any image that looks like it came from a free stock site without art direction

### 9.2 Image Treatment
- All images should be slightly darkened with a CSS overlay (rgba(0,0,0,0.3) minimum) to maintain text legibility when text overlays are used
- Images in cards or thumbnails should use object-fit: cover with a fixed aspect ratio
- Hero images: 16:9 on desktop, can crop to 4:3 or 1:1 on mobile
- Case study images: 3:2 ratio for thumbnails, full width for detail pages

### 9.3 Recommended Free Stock Sources
- Unsplash (search: editorial, dark, fashion, studio)
- Pexels (search: dark aesthetic, creative agency)

---

## 10. Animation & Motion Design

### 10.1 Animation Principles
- Animations serve a purpose. They reveal hierarchy, guide attention, and add polish. They never distract
- Every animation must feel intentional and premium, not playful or bouncy
- Use Framer Motion for all JavaScript-driven animations
- Use CSS transitions for simple hover states

### 10.2 Standard Animation Values

| Animation Type | Duration | Easing | Delay Pattern |
|---|---|---|---|
| Page load hero | 900ms | ease-out | Staggered, 100ms between elements |
| Scroll reveal (default) | 700ms | cubic-bezier(0.25, 0.1, 0.25, 1) | 0ms base, 100ms per stagger |
| Hover transitions | 200ms | ease | None |
| Card hover | 300ms | ease | None |
| Mobile menu open | 400ms | ease-in-out | None |
| Page transition | 500ms | ease | None |

### 10.3 Scroll Reveal Rules
- All sections animate in on scroll using the ScrollReveal component
- Default direction: up (translateY 30px to 0)
- Stagger child elements by 100ms delay
- Trigger point: element enters viewport at 80px from bottom
- Run once only (no re-triggering)

### 10.4 Hover Animations
- Buttons: background color shift + very subtle lift (box-shadow)
- Cards: border color shift + very subtle background change
- Nav links: color shift from #A0A0A0 to #F5F5F5
- CTA arrow icons: translateX(4px) on parent hover

### 10.5 Respect Prefers Reduced Motion
All animations must be wrapped in a check for prefers-reduced-motion. When the user has this set, all animations are disabled and elements appear immediately without transition.

---

## 11. Responsive Design Rules

| Breakpoint | Width | Key Changes |
|---|---|---|
| Mobile | 320px to 767px | Single column layout, larger tap targets, simplified navigation |
| Tablet | 768px to 1023px | 2-column grids, tablet nav (still mobile menu), increased spacing |
| Desktop | 1024px to 1279px | Full desktop layout, horizontal nav, multi-column grids |
| Wide | 1280px and above | Container capped at 1280px, more generous spacing |

### Mobile-First Rules
- Build mobile first, then add desktop overrides
- No horizontal scrolling at any breakpoint
- Minimum touch target: 44x44px for all interactive elements
- Font sizes scale up fluidly using clamp()
- Navigation collapses to hamburger below 1024px
- Card grids: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)

---

## 12. Footer Design

**Layout:**
- Background: #111111
- Border top: 1px solid #1A1A1A
- Three columns on desktop, stacked on mobile
- Column 1: Logo + tagline + social icons
- Column 2: Quick navigation links
- Column 3: Contact info + CTA

**Content:**
- Logo: Coréal Media in Cormorant Garamond
- Tagline: "Content engineered by intelligence. Felt by humans."
- Social links: Instagram and LinkedIn (Lucide icons)
- Nav links: Home, About, Services, Work, Contact, Privacy Policy
- Contact: Email address only for V1
- Copyright: © 2026 Coréal Media. All rights reserved.
- Bottom bar: thin divider above copyright line

**Colors:**
- Background: #111111
- Text: #5A5A5A for secondary items
- Link hover: #F5F5F5
- Social icons: #A0A0A0, hover #8B1A1A

---

## 13. Page Transition

Use Framer Motion's AnimatePresence for page-level transitions. Each page entry animates with opacity 0 to 1 over 400ms. Exit animation: opacity 1 to 0 over 200ms. This gives a smooth, premium feel when navigating between pages.
