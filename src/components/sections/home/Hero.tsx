'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Layers, Settings2, TrendingUp } from 'lucide-react'

// 6 portrait images — face-focused, diverse
const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', alt: 'Creative professional' },
  { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', alt: 'Brand strategist' },
  { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80', alt: 'Content creator' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', alt: 'Creative director' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80', alt: 'Social media lead' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', alt: 'Growth strategist' },
]

const CARD_COUNT = IMAGES.length
const ANGLE_STEP = 360 / CARD_COUNT // 60° apart for 6 cards

const FEATURES = [
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Cylinder parameters
  const perspective = isMobile ? 500 : 1000
  const translateZ = isMobile ? 260 : 420
  const cardW = isMobile ? 130 : 180
  const cardH = isMobile ? 190 : 260

  return (
    <section className="relative bg-bg-primary flex flex-col items-center pt-28 pb-0">
      {/* Radial accent glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,26,26,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Text content */}
      <div className="container-site w-full flex flex-col items-center text-center relative z-10 mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-label uppercase tracking-widest mb-5"
        >
          Content Systems Agency
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-display-2xl text-text-primary max-w-4xl mx-auto text-balance"
        >
          Your Brand Deserves to Be Everywhere.{' '}
          <span className="italic text-text-secondary">Consistently.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-body text-body-lg text-text-secondary max-w-[520px] mx-auto mt-5"
        >
          Most brands post when they remember. We build the engine that ensures you never stop
          showing up — with strategy, quality, and a system that scales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
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
      </div>

      {/* ── 3D Cylinder Carousel ── */}
      {/*
        Outer wrapper: perspective context + horizontal mask fade
        Middle div: perspective origin
        Inner motion.div: transform-style preserve-3d, spins Y axis continuously
        Each card: position absolute, centered at origin, pushed out via rotateY + translateZ
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.65 }}
        style={{
          // Break out of container — full viewport width
          width: '100vw',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          overflow: 'hidden',
          // Mask fades only the very edges
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          maskImage:
            'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          height: cardH + 60,
        }}
      >
        {/* Perspective wrapper — centered, cylinder radiates outward from here */}
        <div
          style={{
            perspective: `${perspective}px`,
            perspectiveOrigin: '50% 50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Spinning cylinder — rotates Y from 0 to 360 continuously */}
          <motion.div
            animate={{ rotateY: 360 }}
            transition={{
              duration: 18,
              ease: 'linear',
              repeat: Infinity,
            }}
            style={{
              transformStyle: 'preserve-3d',
              width: cardW,
              height: cardH,
              position: 'relative',
            }}
          >
            {IMAGES.map((image, i) => {
              const angle = i * ANGLE_STEP
              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: cardW,
                    height: cardH,
                    borderRadius: 14,
                    overflow: 'hidden',
                    transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                    backfaceVisibility: 'hidden',
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 16px 48px rgba(0,0,0,0.6)',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    sizes={`${cardW}px`}
                  />
                  {/* Subtle darkening overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'rgba(0,0,0,0.15)' }}
                  />
                </div>
              )
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Feature Strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full bg-bg-secondary border-t border-border-subtle mt-10"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-subtle">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon
              return (
                <div key={i} className="flex flex-col gap-3 px-6 py-8 md:px-10">
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
    </section>
  )
}
