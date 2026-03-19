import Link from 'next/link'
import { Instagram, Linkedin, Facebook, Mail, ArrowRight } from '@/components/ui/Icons3D'
import SocialIconButton from '@/components/ui/SocialIconButton'
import { footerQuickLinks } from '@/data/navigation'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="container-site py-8 sm:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="font-display text-[1rem] font-medium text-text-primary w-fit"
            >
              Coréal
            </Link>
            <p className="font-body text-[0.75rem] text-text-muted max-w-[200px]">
              Content engineered by intelligence. Felt by humans.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <SocialIconButton
                href="https://instagram.com/corealmedia"
                platform="instagram"
                aria-label="Coréal Media on Instagram"
              >
                <Instagram size={14} />
              </SocialIconButton>
              <SocialIconButton
                href="https://linkedin.com/company/corealmedia"
                platform="linkedin"
                aria-label="Coréal Media on LinkedIn"
              >
                <Linkedin size={14} />
              </SocialIconButton>
              <SocialIconButton
                href="https://www.facebook.com/share/1DnHTtPTL4/?mibextid=wwXIfr"
                platform="facebook"
                aria-label="Coréal Media on Facebook"
              >
                <Facebook size={14} />
              </SocialIconButton>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="font-mono text-[0.65rem] font-medium text-text-muted uppercase tracking-widest mb-3">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {footerQuickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-[0.75rem] text-text-muted hover:text-text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="font-mono text-[0.65rem] font-medium text-text-muted uppercase tracking-widest mb-3">
              Get In Touch
            </p>
            <a
              href="mailto:hello@corealmedia.com"
              className="flex items-center gap-2 font-body text-[0.75rem] text-text-muted hover:text-text-secondary transition-colors duration-200 mb-4"
            >
              <Mail size={13} />
              hello@corealmedia.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-accent text-white font-body text-[0.75rem] font-medium px-4 py-2 rounded-sm hover:bg-accent-hover transition-colors duration-200"
            >
              Work With Us
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 pt-4 border-t border-border-subtle">
          <p className="font-body text-[0.7rem] text-text-muted">
            &copy; 2026 Coréal Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
