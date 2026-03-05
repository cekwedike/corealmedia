# Product Requirements Document (PRD)
# Coréal Media Agency Website

---

## 1. Project Overview

**Project Name:** Coréal Media Agency Website
**Project Type:** Marketing & Brand Website
**Client/Owner:** Coréal Media Agency (CEO: Winny)
**Document Version:** 1.0
**Last Updated:** March 2026

---

## 2. Project Summary

Coréal Media Agency is a content systems agency that sits at the intersection of human creativity and artificial intelligence. The agency builds content engines, not just posts. It serves founders, personal brands, multi-brand companies, and agencies who want strategic, consistent, high-quality content at scale.

The purpose of this website is to attract and convert the right clients. It must communicate Coréal's philosophy, services, process, and proof of work in a way that feels premium, intelligent, and credible. The website is not an informational brochure. It is a sales and brand asset.

---

## 3. Business Goals

- Attract qualified leads: founders, multi-brand businesses, and agencies who want content systems
- Communicate the value of Coréal's three core services clearly
- Build trust through process transparency, team visibility, and case studies
- Reduce founder dependency by letting the website do the first layer of selling
- Establish Coréal as a premium, intelligent, forward-thinking creative agency
- Support revenue growth toward $100k and a client base of 20 to 50+ clients by end of 2026

---

## 4. Target Audience

### Primary Audience
- Founders and personal brands who are inconsistent with content and want a system
- Multi-brand companies managing multiple content channels
- Agencies that need volume content execution support

### Secondary Audience
- Potential team members and partners
- Industry peers and collaborators

### Audience Characteristics
- Busy professionals who value clarity and structure
- Decision-makers who are skeptical of agencies that just "post content"
- People who have tried content creation on their own and hit a wall
- Brands that care about quality, consistency, and long-term visibility growth

---

## 5. Website Goals

| Goal | Metric |
|---|---|
| Generate client inquiries | Contact form submissions |
| Communicate service value | Time on Services page |
| Build trust | Case Study page visits |
| Establish brand authority | Bounce rate below 50% |
| Drive discovery calls | CTA button clicks |

---

## 6. Pages Required

| Page | Priority | Purpose |
|---|---|---|
| Homepage | Critical | First impression, service teaser, lead capture |
| Services | Critical | Full service breakdown, process, CTA |
| Case Studies Index | Critical | Portfolio grid, trust building |
| Case Study Detail | Critical | Individual project breakdown, proof |
| About | High | Brand story, team, philosophy, mission |
| Contact | High | Lead form, booking, inquiry |
| Thank You | Medium | Post-form confirmation, next steps |
| 404 | Medium | Error handling, brand consistency |
| Privacy Policy | Required | Legal compliance for contact form |

---

## 7. Functional Requirements

### 7.1 Navigation
- Sticky top navigation bar on all pages
- Logo on the left
- Navigation links: Home, About, Services, Work, Contact
- Primary CTA button on the right: "Work With Us"
- Mobile hamburger menu with full-screen overlay on mobile
- Active page state visible in navigation

### 7.2 Contact Form
- Fields: Full Name, Email Address, Company Name, Service Interest (dropdown: Content OS, Operational Engine, Visibility Matrix, Not Sure Yet), Message
- Form validation on all required fields
- On successful submission, redirect to Thank You page
- Form should not refresh the page on error
- Spam protection via honeypot field or similar non-intrusive method

### 7.3 Case Studies
- Index page shows all case studies in a grid
- Each card shows: client type, challenge summary, result headline, and a "Read More" link
- Individual case study pages follow a consistent template
- Case studies should be easy to add without touching code (use markdown files or a simple data file)

### 7.4 Animations
- Page load animations: staggered fade-in reveals
- Scroll-triggered animations on section entry
- Hover states on all interactive elements (buttons, cards, links)
- Smooth page transitions
- No animation should feel gratuitous or slow the perceived performance
- All animations must respect the prefers-reduced-motion accessibility setting

### 7.5 SEO
- Meta title and description on every page
- Open Graph tags for social sharing
- Canonical URLs
- Structured data (Organization schema on homepage)
- Sitemap.xml generated automatically
- robots.txt configured correctly

### 7.6 Performance
- Lighthouse score target: 90+ on Performance, Accessibility, Best Practices, SEO
- Images served in WebP format
- Lazy loading on all below-the-fold images
- No render-blocking resources
- Core Web Vitals targets: LCP under 2.5s, FID under 100ms, CLS under 0.1

### 7.7 Accessibility
- WCAG 2.1 AA compliance
- All images have descriptive alt text
- Keyboard navigation supported throughout
- Focus states visible on all interactive elements
- Color contrast ratio minimum 4.5:1 for normal text
- Screen reader compatible markup

### 7.8 Responsiveness
- Fully responsive across all screen sizes
- Breakpoints: Mobile (320px to 767px), Tablet (768px to 1023px), Desktop (1024px and above)
- No horizontal scroll on any screen size
- Touch-friendly tap targets on mobile (minimum 44x44px)

---

## 8. Non-Functional Requirements

- The website must feel premium, editorial, and confident
- No stock photography aesthetic that looks generic
- Icons from Lucide React only (no emojis anywhere on the site)
- Typography must feel intentional and elevated, not default
- Every page must have a clear call to action
- Copy must be direct, confident, and human, not corporate or generic
- The website must load correctly on Chrome, Firefox, Safari, and Edge

---

## 9. Deployment

- **Framework:** Next.js 14 (App Router)
- **Hosting:** Vercel (free tier to start)
- **Domain:** Purchased via Hostinger, pointed to Vercel via DNS
- **SSL:** Automatic via Vercel
- **CI/CD:** GitHub repository connected to Vercel for automatic deploys on push to main branch

### DNS Setup Instructions for Hostinger to Vercel
1. Deploy site on Vercel and get the Vercel deployment URL
2. In Vercel project settings, add custom domain
3. Log into Hostinger DNS manager
4. Add CNAME record: Name = www, Value = cname.vercel-dns.com
5. Add A record: Name = @, Value = 76.76.21.21
6. Wait 24 to 48 hours for DNS propagation

---

## 10. Out of Scope (Version 1)

- Blog or content publishing system
- Client portal or login
- E-commerce or payment processing
- Multi-language support
- Live chat integration
- CRM integration (can be added post-launch)

---

## 11. Success Criteria

The website is considered successful when:
- All 9 pages are live with no broken links or console errors
- Contact form submits and redirects correctly
- Lighthouse scores are 90+ across all categories
- The site is fully responsive on all tested devices
- DNS is correctly pointed from Hostinger domain to Vercel
- The site accurately represents Coréal's brand, services, and team

---

## 12. Timeline Recommendation

| Phase | Tasks | Estimated Duration |
|---|---|---|
| Phase 1 | Project setup, global config, design system | 1 to 2 days |
| Phase 2 | Homepage + Services page | 2 to 3 days |
| Phase 3 | Case Studies + About page | 2 to 3 days |
| Phase 4 | Contact, Thank You, 404, Privacy Policy | 1 to 2 days |
| Phase 5 | QA, performance audit, DNS setup, launch | 1 to 2 days |

**Total estimated timeline:** 7 to 12 days

---

## 13. Stakeholders

| Name | Role | Responsibility |
|---|---|---|
| Winny | CEO / Founder | Final approval on all content and design decisions |
| Claude Code | Developer | Code generation and implementation |
| Vercel | Hosting Platform | Deployment and CDN |
| Hostinger | Domain Registrar | Domain and DNS management |
