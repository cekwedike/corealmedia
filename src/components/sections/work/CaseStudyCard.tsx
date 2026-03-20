'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from '@/components/ui/Icons3D'
import { CaseStudy } from '@/types/caseStudy'

interface CaseStudyCardProps {
  study: CaseStudy
}

export default function CaseStudyCard({ study }: CaseStudyCardProps) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group block bg-bg-card border border-border rounded-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(139,26,26,0.4)]"
    >
      {/* Featured image */}
      <div className="relative w-full aspect-video overflow-hidden bg-bg-secondary">
        {study.featuredImage ? (
          <>
            <Image
              src={study.featuredImage}
              alt={study.clientType}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'rgba(0,0,0,0.2)' }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(139,26,26,0.15) 0%, rgba(17,17,17,0) 60%)',
            }}
          />
        )}
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-6">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {study.servicesUsed.map(tag => (
            <span
              key={tag}
              className="font-mono text-accent uppercase tracking-widest"
              style={{ fontSize: '0.625rem' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Client type */}
        <h3 className="font-display text-[1.375rem] text-text-primary mb-3 leading-snug">
          {study.clientType}
        </h3>

        {/* Challenge - 2 line clamp */}
        <p
          className="font-body text-body-sm text-text-secondary mb-4 leading-relaxed"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {study.challenge}
        </p>

        {/* Result headline with left bar */}
        <div
          className="pl-3 mb-5"
          style={{ borderLeft: '2px solid rgba(139,26,26,0.5)' }}
        >
          <p className="font-body text-body-md text-text-primary font-medium leading-snug">
            {study.results[0].metric}: {study.results[0].description}
          </p>
        </div>

        {/* Read link */}
        <div className="flex items-center gap-1.5 font-body text-body-sm text-text-secondary group-hover:text-accent transition-colors duration-200">
          Read Case Study
          <ArrowRight
            size={13}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  )
}
