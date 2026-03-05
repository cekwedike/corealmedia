'use client'

import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'
import { Service } from '@/types/service'

interface ServiceBlockProps {
  service: Service
  serviceNumber: string
  reversed?: boolean
  bg?: 'primary' | 'secondary'
}

export default function ServiceBlock({
  service,
  serviceNumber,
  reversed = false,
  bg = 'primary',
}: ServiceBlockProps) {
  const bgClass = bg === 'secondary' ? 'bg-bg-secondary' : 'bg-bg-primary'
  const descParagraphs = service.description.split('\n\n').filter(Boolean)

  return (
    <section className={`${bgClass} section-padding border-t border-border-subtle relative overflow-hidden`}>
      {/* Decorative watermark number */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none hidden md:flex"
      >
        <span
          className="font-display text-text-primary"
          style={{ fontSize: 'clamp(10rem, 22vw, 18rem)', opacity: 0.04, lineHeight: 1 }}
        >
          {serviceNumber}
        </span>
      </div>

      <div className="container-site relative z-10">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 ${
            reversed ? 'md:[direction:rtl]' : ''
          }`}
        >
          {/* Left / Description column */}
          <div className={reversed ? '[direction:ltr]' : ''}>
            <ScrollReveal>
              <p className="font-mono text-accent text-label uppercase tracking-widest mb-3">
                Service {serviceNumber}
              </p>
              <h2 className="font-display text-display-lg text-text-primary mb-2">
                {service.name}
              </h2>
              <p className="font-mono text-text-muted text-label uppercase tracking-widest mb-8">
                {service.tagline}
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {descParagraphs.map((para, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <p className="font-body text-body-md text-text-secondary leading-relaxed">
                    {para}
                  </p>
                </ScrollReveal>
              ))}
            </div>

            {/* Best For */}
            <ScrollReveal delay={0.3}>
              <p className="font-body text-body-md text-text-secondary mt-8">
                <span className="italic text-text-muted">Best for: </span>
                {service.whoItsFor[0]}
              </p>
            </ScrollReveal>

            {/* Enquire link */}
            <ScrollReveal delay={0.4}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-body text-body-sm text-accent hover:text-accent-hover transition-colors mt-8 group"
              >
                Enquire About {service.name}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right / Deliverables column */}
          <div className={reversed ? '[direction:ltr]' : ''}>
            {/* What You Get */}
            <ScrollReveal>
              <p className="font-mono text-text-muted text-label uppercase tracking-widest mb-6">
                What You Get
              </p>
            </ScrollReveal>
            <ul className="space-y-3 mb-10">
              {service.deliverables.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <li className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="font-body text-body-md text-text-primary">{item}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            {/* Outcome callout */}
            <ScrollReveal delay={0.35}>
              <div
                className="rounded-sm px-6 py-5"
                style={{
                  background: 'rgba(139,26,26,0.08)',
                  borderLeft: '3px solid #8B1A1A',
                }}
              >
                <p className="font-mono text-accent text-label uppercase tracking-widest mb-2">
                  The Outcome
                </p>
                <p className="font-body text-body-md text-text-primary leading-relaxed">
                  {service.outcome}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
