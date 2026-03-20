'use client'

import Link from 'next/link'
import { ArrowRight, Sun, Moon } from '@/components/ui/Icons3D'
import { useTheme } from '@/lib/theme'

export default function LandingNav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle"
      style={{
        backgroundColor: 'rgba(var(--bg-primary-rgb), 0.92)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="container-site flex items-center justify-between h-14 sm:h-16">
        <Link
          href="/"
          className="font-display text-[1.375rem] font-medium text-text-primary hover:opacity-80 transition-opacity"
        >
          Coréal
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="text-text-secondary hover:text-text-primary transition-colors duration-200 p-2 focus:outline-none"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href="#form"
            className="inline-flex items-center gap-2 bg-accent text-white font-body text-body-sm font-medium px-5 py-2 rounded-md hover:bg-accent-hover transition-colors duration-200"
          >
            Book a Call
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </header>
  )
}
