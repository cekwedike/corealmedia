'use client'

import ScrollReveal from '@/components/shared/ScrollReveal'

export default function MissionVision() {
  return (
    <section className="bg-bg-primary section-padding border-t border-border-subtle">
      <div className="container-site">
        <ScrollReveal>
          <p className="font-mono text-accent text-label uppercase tracking-widest mb-10">
            Where We&apos;re Going
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:divide-x divide-border-subtle">
          {/* Mission */}
          <ScrollReveal>
            <div className="md:pr-12 pb-12 md:pb-0">
              <p className="font-mono text-text-muted text-label uppercase tracking-widest mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-display-lg text-text-primary mb-6">Our Mission</h2>
              <p className="font-body text-body-md text-text-secondary leading-relaxed mb-5">
                To help brands scale visibility and trust through content systems that are
                strategic, not random. Consistent, not occasional. High-quality, not rushed.
                Scalable, not founder dependent.
              </p>
              <p className="font-body text-body-md text-text-secondary leading-relaxed">
                We build a system that works even when the founder is tired, the team is busy, the
                client is traveling, and life is happening. It begins internally and becomes a
                replica for every client we serve.
              </p>
            </div>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal>
            <div className="md:pl-12 pt-12 md:pt-0 border-t md:border-t-0 border-border-subtle">
              <p className="font-mono text-text-muted text-label uppercase tracking-widest mb-4">
                Our Vision
              </p>
              <h2 className="font-display text-display-lg text-text-primary mb-6">Our Vision</h2>
              <p className="font-body text-body-md text-text-secondary leading-relaxed mb-5">
                To build an agency that scales without chaos.
              </p>
              <p className="font-body text-body-md text-text-secondary leading-relaxed">
                By 2026 to 2027, Coréal Media will run fully on standard operating procedures, not
                guesswork. It will deliver consistently without last-minute panic, manage 20 to 50
                or more clients without quality drop, maintain strong operational ownership, and
                grow a team with clear roles and defined growth paths.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
