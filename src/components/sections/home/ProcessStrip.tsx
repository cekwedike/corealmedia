'use client'

import { Search, MessageSquare, FolderOpen, Eye, Trophy } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

const stages = [
  {
    number: '01',
    icon: Search,
    title: 'Lead Generation & Sales',
    description: 'We attract and close the right clients with clear deliverables and structured contracts.',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Onboarding & Strategy',
    description: 'We capture brand voice, audience insights, goals, and build a full content direction.',
  },
  {
    number: '03',
    icon: FolderOpen,
    title: 'Content Creation',
    description: 'Scripts, visuals, hooks, captions, briefs — everything produced to brief and on time.',
  },
  {
    number: '04',
    icon: Eye,
    title: 'Review & Modifications',
    description: 'Internal quality checks, client review, edits, and final approval before anything goes live.',
  },
  {
    number: '05',
    icon: Trophy,
    title: 'Execution & Optimization',
    description: "Content goes live. We track what works, cut what doesn't, and improve every cycle.",
  },
]

export default function ProcessStrip() {
  return (
    <section className="bg-bg-secondary section-padding">
      <div className="container-site">
        {/* Header */}
        <div className="mb-12">
          <ScrollReveal>
            <p className="font-mono text-accent text-label uppercase tracking-widest mb-4">
              How We Work
            </p>
            <h2 className="font-display text-display-lg text-text-primary mb-3">
              The Coréal Method
            </h2>
            <p className="font-body text-body-md text-text-secondary">
              One workflow. Five stages. Everything fits inside it.
            </p>
          </ScrollReveal>
        </div>

        {/* Stages — horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {stages.map((stage, index) => {
            const Icon = stage.icon
            return (
              <ScrollReveal key={index} delay={index * 0.08} direction="up">
                <div className="relative flex flex-col gap-4 py-8 md:px-6 md:py-0 border-b md:border-b-0 md:border-r border-border-subtle last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[0.7rem] text-accent tracking-widest">
                      {stage.number}
                    </span>
                    <Icon size={18} className="text-text-muted" />
                  </div>
                  <h3 className="font-display text-[1.125rem] font-medium text-text-primary">
                    {stage.title}
                  </h3>
                  <p className="font-body text-body-sm text-text-secondary">
                    {stage.description}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
