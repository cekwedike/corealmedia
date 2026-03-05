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
            ? 'bg-[rgba(10,10,10,0.9)] backdrop-blur-md border-b border-border-subtle'
            : 'bg-transparent'
        )}
      >
        <div className="container-site flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-[1.375rem] font-medium text-text-primary hover:opacity-80 transition-opacity"
          >
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
