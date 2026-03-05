'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

interface CTABannerProps {
  headline: string
  body: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTABanner({
  headline,
  body,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="bg-bg-secondary section-padding border-t border-border-subtle">
      <div className="container-site text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-lg text-text-primary mb-5">{headline}</h2>
          <p className="font-body text-body-lg text-text-secondary mb-8">{body}</p>
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-accent text-white font-body text-body-sm font-medium px-7 py-3 rounded-sm hover:bg-accent-hover transition-colors duration-200"
          >
            {ctaLabel}
            <ArrowRight size={16} />
          </Link>
          {secondaryLabel && secondaryHref && (
            <div className="mt-4">
              <Link
                href={secondaryHref}
                className="font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors"
              >
                {secondaryLabel}
              </Link>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  )
}
