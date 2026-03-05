# Component Development Doc — Navbar & Footer
# Coréal Media Agency Website

---

## Overview

The Navbar and Footer appear on every page of the site. They are global layout components rendered in src/app/layout.tsx. They must be built once and work correctly across all pages, all screen sizes, and all scroll positions.

---

# NAVBAR

## File: src/components/layout/Navbar.tsx

## Behavior

- Fixed position at the top of the viewport
- Full width
- Sits above all page content (z-index: 50)
- On scroll: background transitions from transparent to rgba(10,10,10,0.9) with backdrop-filter: blur(12px)
- At page top: background is fully transparent so hero images show through
- Scroll threshold for the blur/dark background: 80px from top
- Mobile menu: full-screen overlay triggered by hamburger icon

## Desktop Layout (1024px and above)

- Height: 72px
- Logo on the far left
- Navigation links in the center or left of center
- CTA button ("Work With Us") on the far right
- Horizontal padding follows container-site convention

### Logo
- Text logo: "Coréal" in Cormorant Garamond, 500 weight, ~1.375rem, text-primary
- "Media" in DM Sans, 400 weight, slightly smaller, text-muted — optional, can be just "Coréal" if that looks better
- Logo links to homepage (/)
- On hover: no underline, slight opacity shift

### Navigation Links
- Links: Home, About, Services, Work, Contact
- Font: DM Sans, 0.875rem, 400 weight
- Color: text-secondary (#A0A0A0)
- Hover: color shifts to text-primary (#F5F5F5), transition 200ms
- Active page: text-primary color, with a very subtle underline or accent dot below the link
- Spacing between links: 32px to 40px

### CTA Button
- Text: "Work With Us"
- Style: primary button (see Design System)
- Links to /contact
- Hover: background shifts to accent-hover

## Mobile Layout (below 1024px)

- Height: 64px
- Logo on the left
- Hamburger icon (Lucide Menu, 24px) on the right
- No navigation links visible until menu opens

### Mobile Menu
- Triggered by hamburger icon
- Overlay covers full screen: background #0A0A0A
- Close button (Lucide X, 24px) in top right, same position as hamburger
- Navigation links stacked vertically, centered
- Link font: Cormorant Garamond, display-md (large), text-primary
- Links animate in with staggered fade from top, using Framer Motion
- CTA button below the links: full-width, primary style
- Social icons below CTA (Instagram, LinkedIn from Lucide)
- Overlay opens with a slide-down or fade animation, 400ms

## Scroll Behavior Implementation

Use a useState and useEffect with a scroll event listener:

```typescript
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80)
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

Apply the background conditionally:

```typescript
className={cn(
  'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
  scrolled
    ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-md border-b border-border-subtle'
    : 'bg-transparent'
)}
```

## Active Link Detection

Use the Next.js usePathname hook to detect the current route and apply active styles:

```typescript
'use client'
import { usePathname } from 'next/navigation'

const pathname = usePathname()
const isActive = (href: string) => pathname === href
```

## Full Component Structure

```typescript
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Instagram, Linkedin } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-md border-b border-[#1A1A1A]'
            : 'bg-transparent'
        )}
      >
        <div className="container-site flex items-center justify-between h-[72px] lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="font-display text-[1.375rem] font-medium text-text-primary hover:opacity-80 transition-opacity">
            Coréal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-body text-[0.875rem] transition-colors duration-200',
                  pathname === link.href
                    ? 'text-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-accent text-text-primary font-body text-[0.875rem] font-medium px-6 py-2.5 rounded-sm hover:bg-accent-hover transition-colors duration-200"
            >
              Work With Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-text-primary p-2"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-bg-primary flex flex-col"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 h-16">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="font-display text-[1.375rem] font-medium text-text-primary"
              >
                Coréal
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-text-primary p-2"
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'font-display text-[2rem] transition-colors duration-200',
                      pathname === link.href
                        ? 'text-text-primary'
                        : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.1, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="bg-accent text-text-primary font-body text-[0.875rem] font-medium px-8 py-3 rounded-sm hover:bg-accent-hover transition-colors duration-200"
                >
                  Work With Us
                </Link>
              </motion.div>
            </nav>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 pb-10">
              <a
                href="https://instagram.com/corealmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="Coréal Media on Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/corealmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-text-primary transition-colors"
                aria-label="Coréal Media on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
```

---

# FOOTER

## File: src/components/layout/Footer.tsx

## Layout

- Background: #111111
- Border top: 1px solid #1A1A1A
- Three-column grid on desktop, stacked on mobile
- Section padding above, standard padding below
- Bottom bar below the columns: thin divider + copyright text

## Column 1 — Brand

- Logo: "Coréal" in Cormorant Garamond, 500 weight, 1.25rem, links to /
- Tagline: "Content engineered by intelligence. Felt by humans." in DM Sans, body-sm, text-muted
- Social icons row below tagline: Instagram and LinkedIn (Lucide icons, 18px)
- Icon color: text-muted, hover: text-accent, transition 200ms

## Column 2 — Quick Links

- Heading: "Quick Links" in DM Sans, 500 weight, 0.875rem, text-secondary, uppercase, letter-spacing 0.08em
- Links: Home, About, Services, Work, Contact, Privacy Policy
- Font: DM Sans, body-sm, text-muted
- Hover: text-text-secondary
- Each link is a Next.js Link component

## Column 3 — Contact

- Heading: "Get In Touch" in DM Sans, 500 weight, 0.875rem, text-secondary, uppercase, letter-spacing 0.08em
- Email with Lucide Mail icon: hello@corealmedia.com (styled as a link: mailto:hello@corealmedia.com)
- CTA button below: "Work With Us" — primary button style, links to /contact
- Small: font-body, text-body-sm, padding smaller than full buttons

## Bottom Bar

- Thin divider: 1px solid #1A1A1A, full width
- Copyright text: "© 2026 Coréal Media. All rights reserved."
- Font: DM Sans, body-sm, text-muted
- Centered or left-aligned

## Full Component Structure

```typescript
import Link from 'next/link'
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
]

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-display text-[1.25rem] font-medium text-text-primary w-fit">
              Coréal
            </Link>
            <p className="font-body text-body-sm text-text-muted max-w-[220px]">
              Content engineered by intelligence. Felt by humans.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com/corealmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-200"
                aria-label="Coréal Media on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/corealmedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors duration-200"
                aria-label="Coréal Media on LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="font-body text-[0.75rem] font-medium text-text-secondary uppercase tracking-[0.08em] mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="font-body text-[0.75rem] font-medium text-text-secondary uppercase tracking-[0.08em] mb-5">
              Get In Touch
            </p>
            <a
              href="mailto:hello@corealmedia.com"
              className="flex items-center gap-2 font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors duration-200 mb-6"
            >
              <Mail size={16} />
              hello@corealmedia.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-text-primary font-body text-[0.8125rem] font-medium px-5 py-2.5 rounded-sm hover:bg-accent-hover transition-colors duration-200"
            >
              Work With Us
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border-subtle">
          <p className="font-body text-body-sm text-text-muted">
            &copy; 2026 Coréal Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

---

## Navbar & Footer Checklist

- [ ] Navbar is fixed and stays visible on all pages during scroll
- [ ] Background blur effect activates after 80px of scroll
- [ ] Active page link is visually distinct in the navbar
- [ ] Mobile hamburger opens full-screen overlay with animated links
- [ ] Mobile menu closes when a link is clicked
- [ ] Body scroll is locked when mobile menu is open
- [ ] Mobile menu close button works correctly
- [ ] CTA button links to /contact on both desktop and mobile
- [ ] Footer renders three columns on desktop, stacked on mobile
- [ ] All footer links work and go to the correct pages
- [ ] Social links open in a new tab with rel="noopener noreferrer"
- [ ] Email link uses mailto: protocol
- [ ] Copyright year is correct
- [ ] No console errors from Navbar or Footer components
- [ ] Both components render on all 9 pages
