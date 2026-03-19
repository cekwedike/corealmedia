'use client'

import { XCircle } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'

const problems = [
  'No clear content direction',
  'Inconsistent posting that kills momentum',
  'Quality that drops the moment life gets busy',
  'No system means the founder does everything',
]

export default function ProblemSection() {
  return (
    <section className="bg-bg-secondary section-padding">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-start">
          {/* Left Column */}
          <div>
            <ScrollReveal>
              <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
                The Real Problem
              </p>
              <h2 className="font-display text-display-lg text-text-primary mb-6">
                Most Agencies Create Content.
                <br />
                We Build What Runs It.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-body-md lg:text-body-lg text-text-secondary">
                Posting isn&apos;t a strategy. Posting consistently with a clear message, to the
                right audience, in the right format, across the right platforms. That&apos;s a
                system. That&apos;s exactly what Coréal builds.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column - Problem Points */}
          <div className="flex flex-col gap-5 mt-2">
            {problems.map((problem, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 border border-border rounded-sm bg-bg-card">
                  <XCircle size={20} className="text-accent shrink-0 mt-0.5" />
                  <p className="font-body text-body-md lg:text-body-lg text-text-secondary">{problem}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
