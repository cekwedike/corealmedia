'use client'

import { motion } from 'framer-motion'

export default function ServicesHero() {
  return (
    <section className="bg-bg-primary section-padding pt-36 pb-20 border-b border-border-subtle">
      <div className="container-site max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-label uppercase tracking-widest mb-5"
        >
          Our Services
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-display-xl text-text-primary max-w-[700px] text-balance"
        >
          Three Ways We Help You Stop Guessing and Start Scaling
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-8 h-px bg-border-subtle w-24"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="font-body text-body-lg text-text-secondary max-w-[640px] mt-8"
        >
          We don&apos;t offer a menu of random services. Everything we do connects into one system.
          Strategy feeds execution. Execution feeds scale. And scale compounds over time.
        </motion.p>
      </div>
    </section>
  )
}
