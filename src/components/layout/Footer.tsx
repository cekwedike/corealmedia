import Link from 'next/link'
import { Instagram, Linkedin, Facebook, Mail, ArrowRight } from '@/components/ui/Icons3D'
import SocialIconButton from '@/components/ui/SocialIconButton'
import { footerQuickLinks } from '@/data/navigation'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border-subtle">
      <div className="container-site py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-8 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="font-display text-[1.25rem] font-medium text-text-primary w-fit"
            >
              Coréal
            </Link>
            <p className="font-body text-body-sm lg:text-body-md text-text-muted max-w-[220px] sm:max-w-none">
              Content engineered by intelligence. Felt by humans.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <SocialIconButton
                href="https://instagram.com/corealmedia"
                platform="instagram"
                aria-label="Coréal Media on Instagram"
              >
                <Instagram size={18} />
              </SocialIconButton>
              <SocialIconButton
                href="https://linkedin.com/company/corealmedia"
                platform="linkedin"
                aria-label="Coréal Media on LinkedIn"
              >
                <Linkedin size={18} />
              </SocialIconButton>
              <SocialIconButton
                href="https://www.facebook.com/share/1DnHTtPTL4/?mibextid=wwXIfr"
                platform="facebook"
                aria-label="Coréal Media on Facebook"
              >
                <Facebook size={18} />
              </SocialIconButton>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <p className="font-body text-label-lg font-medium text-text-secondary uppercase tracking-[0.08em] mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {footerQuickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-body-sm lg:text-body-md text-text-muted hover:text-text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <p className="font-body text-label-lg font-medium text-text-secondary uppercase tracking-[0.08em] mb-5">
              Get In Touch
            </p>
            <a
              href="mailto:hello@corealmedia.com"
              className="flex items-center gap-2 font-body text-body-sm lg:text-body-md text-text-muted hover:text-text-secondary transition-colors duration-200 mb-6 break-all sm:break-normal"
            >
              <Mail size={16} />
              hello@corealmedia.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white font-body text-body-sm lg:text-body-md font-medium px-5 py-2.5 rounded-md hover:bg-accent-hover transition-colors duration-200"
            >
              Work With Us
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-border-subtle">
          <p className="font-body text-body-sm lg:text-body-md text-text-muted">
            &copy; 2026 Coréal Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
