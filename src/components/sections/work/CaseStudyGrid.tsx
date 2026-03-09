'use client'

import ScrollReveal from '@/components/shared/ScrollReveal'
import CaseStudyCard from './CaseStudyCard'
import { CaseStudy } from '@/types/caseStudy'

interface CaseStudyGridProps {
  caseStudies: CaseStudy[]
}

export default function CaseStudyGrid({ caseStudies }: CaseStudyGridProps) {
  return (
    <section className="bg-bg-secondary section-padding border-t border-border-subtle">
      <div className="container-site">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {caseStudies.map((study, i) => (
            <ScrollReveal key={study.slug} delay={i * 0.08}>
              <CaseStudyCard study={study} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
