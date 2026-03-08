'use client'

import Link from 'next/link'
import { ArrowRight } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'

export default function HomeCTA() {
  return (
    <section className="bg-bg-secondary section-padding border-t border-border-subtle">
      <div className="container-site text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <h2 className="font-display text-display-lg text-text-primary mb-5">
            Ready to Build Your Content Engine?
          </h2>
          <p className="font-body text-body-lg text-text-secondary mb-10">
            Let&apos;s talk about your brand, your goals, and exactly how Coréal can help you show
            up consistently — at scale, without the chaos.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white font-body text-body-sm font-medium px-8 py-3.5 rounded-md hover:bg-accent-hover transition-colors duration-200"
          >
            Start the Conversation
            <ArrowRight size={16} />
          </Link>
          <div className="mt-5">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors"
            >
              Or explore our services first
              <ArrowRight size={13} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
