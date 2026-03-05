'use client'

import { Search, MessageSquare, FolderOpen, Eye, Trophy } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

const STAGES = [
  {
    number: '01',
    icon: Search,
    title: 'Lead Generation & Acquisition',
    description:
      'This is where we attract and close clients. It includes outreach, discovery calls, proposal creation, scope definition, pricing, and contract sign-off. The outcome is a client with clear deliverables and clear payment terms.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Client Onboarding & Strategy',
    description:
      'This is where we clarify content direction completely. We capture brand voice and positioning, audience pain points, goals and offers, deliverables, timelines, and posting platforms. We also build a Custom GPT for the client to maintain consistent tone and messaging. The outcome is a detailed content strategy and full operational clarity.',
  },
  {
    number: '03',
    icon: FolderOpen,
    title: 'Content Creation',
    description:
      'Scripts and visuals get produced here. Hooks, content topics, scripts (talking head and faceless), captions with CTAs, design briefs, video briefs, and initial visual direction set by the Creative Lead. The outcome is a batch of ready-to-review content assets.',
  },
  {
    number: '04',
    icon: Eye,
    title: 'Content Review & Modifications',
    description:
      'This is where we protect quality. We run internal QA (checking for typos, brand alignment, formatting, and accuracy), send to the client for review, and handle edits through to final approval. The outcome is approved content ready for scheduling.',
  },
  {
    number: '05',
    icon: Trophy,
    title: 'Execution & Optimization',
    description:
      'Content goes live here and we improve continuously. This includes the scheduling calendar, posting and platform execution, engagement support where included, monthly analytics, and optimization decisions for the next cycle.',
  },
]

export default function WorkflowDetail() {
  return (
    <section className="bg-bg-primary section-padding border-t border-border-subtle">
      <div className="container-site">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <ScrollReveal>
            <p className="font-mono text-accent text-label uppercase tracking-widest mb-4">
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
                  className={`grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-10 ${
                    !isLast ? 'border-b border-border-subtle' : ''
                  }`}
                >
                  {/* Number + icon column */}
                  <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3">
                    <span className="font-mono text-accent font-medium" style={{ fontSize: '1.375rem' }}>
                      {stage.number}
                    </span>
                    <Icon size={22} className="text-text-muted" />
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
