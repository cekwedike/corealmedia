'use client'

import { Search, MessageSquare, FolderOpen, Eye, Trophy } from '@/components/ui/Icons3D'
import ScrollReveal from '@/components/shared/ScrollReveal'

const STAGES = [
  {
    number: '01',
    icon: Search,
    title: 'Lead Generation & Acquisition',
    description: 'Discovery calls, scoping, and contract sign-off. We align on deliverables before anything starts.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Client Onboarding & Strategy',
    description: 'Brand voice, audience, goals, and messaging pillars. Full content direction locked before production begins.',
  },
  {
    number: '03',
    icon: FolderOpen,
    title: 'Content Creation',
    description: 'Scripts, visuals, captions, and briefs, produced on schedule by the creative team.',
  },
  {
    number: '04',
    icon: Eye,
    title: 'Content Review & Modifications',
    description: 'Internal QA, client review, and edits handled until content is approved and ready to go live.',
  },
  {
    number: '05',
    icon: Trophy,
    title: 'Execution & Optimization',
    description: 'Content publishes on schedule. We track performance and improve every cycle.',
  },
]

export default function WorkflowDetail() {
  return (
    <section className="bg-bg-primary section-padding border-t border-border-subtle">
      <div className="container-site">
        {/* Header */}
        <div className="mb-10 sm:mb-14 lg:mb-16 max-w-2xl">
          <ScrollReveal>
            <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-4">
              The Process
            </p>
            <h2 className="font-display text-display-lg text-text-primary mb-5">
              Every Client. One Workflow.
            </h2>
            <p className="font-body text-body-lg text-text-secondary leading-relaxed">
              Every service Coréal delivers runs through the same five-stage method. This is how we
              prevent chaos, protect quality, and ensure nothing falls through the gaps.
            </p>
          </ScrollReveal>
        </div>

        {/* Stages */}
        <div>
          {STAGES.map((stage, i) => {
            const Icon = stage.icon
            const isLast = i === STAGES.length - 1
            return (
              <ScrollReveal key={stage.number} delay={i * 0.12}>
                <div
                  className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-10 py-8 sm:py-10 ${
                    !isLast ? 'border-b border-border-subtle' : ''
                  }`}
                >
                  {/* Number + icon column */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                    <span className="font-mono text-accent font-medium text-lg lg:text-xl">
                      {stage.number}
                    </span>
                    <Icon size={22} className="text-text-muted w-5 h-5 lg:w-6 lg:h-6" />
                  </div>

                  {/* Content column */}
                  <div className="max-w-[620px]">
                    <h3 className="font-display text-display-md text-text-primary mb-3">
                      {stage.title}
                    </h3>
                    <p className="font-body text-body-md text-text-secondary leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
