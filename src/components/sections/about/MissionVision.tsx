'use client'

import ScrollReveal from '@/components/shared/ScrollReveal'

export default function MissionVision() {
  return (
    <section className="bg-bg-primary section-padding border-t border-border-subtle">
      <div className="container-site">
        <ScrollReveal>
          <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-10">
            Where We&apos;re Going
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-border-subtle">
          {/* Mission */}
          <ScrollReveal>
            <div className="md:pr-12 pb-10 sm:pb-12 md:pb-0">
              <p className="font-mono text-text-muted text-label-lg uppercase tracking-widest mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-display-lg text-text-primary mb-6">Our Mission</h2>
              <p className="font-body text-body-md text-text-secondary leading-relaxed">
                To help brands scale visibility and trust through content systems that are
                strategic, consistent, and built to run without founder dependency.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal>
            <div className="md:pl-12 pt-10 sm:pt-12 md:pt-0 border-t md:border-t-0 border-border-subtle">
              <p className="font-mono text-text-muted text-label-lg uppercase tracking-widest mb-4">
                Our Vision
              </p>
              <h2 className="font-display text-display-lg text-text-primary mb-6">Our Vision</h2>
              <p className="font-body text-body-md text-text-secondary leading-relaxed">
                To build an agency that scales without chaos, where every client gets the same
                standard of quality, every time, without exception.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
