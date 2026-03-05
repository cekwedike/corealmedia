'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Layers, Settings2, TrendingUp } from 'lucide-react'

const heroPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    alt: 'Content creator at work',
    rotate: '-8deg',
    translateY: '32px',
    zIndex: 1,
  },
  {
    src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    alt: 'Brand strategist',
    rotate: '-3deg',
    translateY: '12px',
    zIndex: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    alt: 'Creative director',
    rotate: '0deg',
    translateY: '0px',
    zIndex: 3,
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    alt: 'Content strategist',
    rotate: '3deg',
    translateY: '12px',
    zIndex: 2,
  },
  {
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80',
    alt: 'Social media manager',
    rotate: '8deg',
    translateY: '32px',
    zIndex: 1,
  },
]

const features = [
  {
    icon: Layers,
    title: 'The Content OS',
    description: 'Done-for-you systems that turn content from chaos into a predictable, repeatable engine.',
  },
  {
    icon: Settings2,
    title: 'The Operational Engine',
    description: 'Your brand stays omnipresent. We handle execution so you never miss a beat.',
  },
  {
    icon: TrendingUp,
    title: 'The Visibility Matrix',
    description: 'Demand compounding. Your message reaches people who are not even looking for you yet.',
  },
]


export default function Hero() {
  return (
    <section className="relative min-h-screen bg-bg-primary flex flex-col items-center justify-center overflow-hidden pt-24 pb-0">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139,26,26,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="container-site w-full flex flex-col items-center text-center relative z-10">
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="font-mono text-accent text-label uppercase tracking-widest mb-6"
        >
          Content Systems Agency
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-display-2xl text-text-primary max-w-4xl mx-auto text-balance"
        >
          Your Brand Deserves to Be Everywhere.{' '}
          <span className="italic text-text-secondary">Consistently.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-body text-body-lg text-text-secondary max-w-xl mx-auto mt-6"
        >
          Most brands post when they remember. We build the engine that ensures you never stop
          showing up — with strategy, quality, and a system that scales.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-10"
        >
          <Link
            href="/contact"
            className="bg-accent text-text-primary font-body text-[0.875rem] font-medium px-8 py-3.5 rounded-sm hover:bg-accent-hover transition-colors duration-200"
          >
            Work With Us
          </Link>
          <Link
            href="/work"
            className="border border-border text-text-primary font-body text-[0.875rem] font-medium px-8 py-3.5 rounded-sm hover:border-accent transition-colors duration-200"
          >
            See Our Work
          </Link>
        </motion.div>

        {/* Photo Gallery Arc */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="relative flex items-end justify-center mt-16 mb-0 w-full"
          style={{ height: '320px' }}
        >
          {heroPhotos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 + index * 0.1, ease: 'easeOut' }}
              className="absolute overflow-hidden rounded-lg border border-border"
              style={{
                width: '160px',
                height: '220px',
                transform: `rotate(${photo.rotate}) translateY(${photo.translateY})`,
                zIndex: photo.zIndex,
                left: `calc(50% + ${(index - 2) * 130}px - 80px)`,
                bottom: 0,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="160px"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Feature Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
        className="w-full bg-bg-secondary border-t border-border-subtle mt-0"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="flex flex-col gap-3 px-6 py-8 md:px-10">
                  <Icon size={22} className="text-accent" />
                  <p className="font-display text-[1.125rem] font-medium text-text-primary">
                    {feature.title}
                  </p>
                  <p className="font-body text-body-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="hidden absolute bottom-[340px] left-1/2 -translate-x-1/2 flex-col items-center gap-1"
      >
        <span className="font-mono text-text-muted text-[0.7rem] uppercase tracking-widest">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
