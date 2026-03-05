'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Layers, Settings2, TrendingUp } from 'lucide-react'

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80', alt: 'Creative professional' },
  { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80', alt: 'Brand strategist' },
  { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80', alt: 'Content creator' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', alt: 'Creative director' },
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80', alt: 'Social media lead' },
  { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80', alt: 'Growth strategist' },
  { src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80', alt: 'Marketing director' },
  { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80', alt: 'Operations lead' },
]

// 7 card slots. Each has a fixed rotateY and size.
// Outer cards are larger — they overflow/clip at viewport edges exactly like the reference.
// imageOffset: which image (relative to activeIndex) shows in this slot.
const SLOTS = [
  { rotateY: -44, w: 214, h: 440, imageOffset: -3 },
  { rotateY: -22, w: 188, h: 400, imageOffset: -2 },
  { rotateY: -10, w: 170, h: 368, imageOffset: -1 },
  { rotateY:   0, w: 162, h: 350, imageOffset:  0 },
  { rotateY:  10, w: 170, h: 368, imageOffset:  1 },
  { rotateY:  22, w: 188, h: 400, imageOffset:  2 },
  { rotateY:  44, w: 214, h: 440, imageOffset:  3 },
]

// Mobile: 5 cards, ~65% scale
const MOBILE_SLOTS = [
  { rotateY: -32, w: 118, h: 260, imageOffset: -2 },
  { rotateY: -14, w: 106, h: 234, imageOffset: -1 },
  { rotateY:   0, w: 100, h: 216, imageOffset:  0 },
  { rotateY:  14, w: 106, h: 234, imageOffset:  1 },
  { rotateY:  32, w: 118, h: 260, imageOffset:  2 },
]

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
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const total = IMAGES.length

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Auto-advance every 3.5s — only the images crossfade, card positions never move
  useEffect(() => {
    const timer = setInterval(() => setActiveIndex(p => (p + 1) % total), 3500)
    return () => clearInterval(timer)
  }, [total])

  const slots = isMobile ? MOBILE_SLOTS : SLOTS

  return (
    <section className="relative bg-bg-primary flex flex-col items-center overflow-hidden pt-28 pb-0">
      {/* Subtle radial accent glow at top */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,26,26,0.08) 0%, transparent 65%)',
        }}
      />

      {/* Text content */}
      <div className="container-site w-full flex flex-col items-center text-center relative z-10 mb-10">
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

      {/* ── 3D Perspective Arc Carousel ── */}
      {/* perspective is set on the PARENT of the cards so each card's rotateY creates a 3D curve */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.65, ease: 'easeOut' }}
        className="w-full flex items-end justify-center"
        style={{
          perspective: '1400px',
          perspectiveOrigin: '50% 100%',
        }}
      >
        <div
          className="flex items-end justify-center"
          style={{ gap: isMobile ? '6px' : '8px' }}
        >
          {slots.map((slot, i) => {
            const imgIdx = ((activeIndex + slot.imageOffset) % total + total) % total
            const image = IMAGES[imgIdx]
            // Darker overlay on outer cards to fade them into the background
            const overlayOpacity = 0.08 + Math.abs(slot.imageOffset) * 0.07

            return (
              <div
                key={i}
                style={{
                  width: slot.w,
                  height: slot.h,
                  flexShrink: 0,
                  borderRadius: 14,
                  overflow: 'hidden',
                  transform: `rotateY(${slot.rotateY}deg)`,
                  boxShadow:
                    slot.imageOffset === 0
                      ? '0 20px 60px rgba(0,0,0,0.65)'
                      : '0 10px 40px rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  position: 'relative',
                }}
              >
                {/* Crossfade: image src is key — AnimatePresence swaps on change */}
                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover object-top"
                      sizes={`${slot.w}px`}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Overlay — outer cards are progressively darker */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `rgba(0,0,0,${overlayOpacity})`,
                    zIndex: 2,
                  }}
                />
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Feature Strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="w-full bg-bg-secondary border-t border-border-subtle mt-0"
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
