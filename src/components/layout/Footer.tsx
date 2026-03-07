import Link from 'next/link'
import { Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { footerQuickLinks } from '@/data/navigation'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="container-site section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-display text-[1.25rem] font-medium text-text-primary w-fit"
            >
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
              {footerQuickLinks.map(link => (
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
              className="inline-flex items-center gap-2 bg-accent text-white font-body text-body-sm font-medium px-5 py-2.5 rounded-md hover:bg-accent-hover transition-colors duration-200"
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
