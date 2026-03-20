import Link from 'next/link'

export default function LandingFooter() {
  return (
    <footer className="bg-bg-primary border-t border-border-subtle py-8">
      <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-[1.125rem] font-medium text-text-primary hover:opacity-80 transition-opacity"
        >
          Coréal Media
        </Link>
        <p className="font-body text-[0.75rem] text-text-muted">
          © {new Date().getFullYear()} Coréal Media. All rights reserved.
          {' · '}
          <Link href="/privacy-policy" className="hover:text-text-secondary transition-colors">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  )
}
