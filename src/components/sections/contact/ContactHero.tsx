'use client'

import { motion } from 'framer-motion'

export default function ContactHero() {
  return (
    <section className="bg-bg-primary section-padding pt-36 pb-20 border-b border-border-subtle">
      <div className="container-site max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-accent text-label-lg uppercase tracking-widest mb-5"
        >
          Get In Touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-display text-display-xl text-text-primary max-w-[620px] text-balance mb-6"
        >
          Let&apos;s Build Something Real Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="font-body text-body-lg text-text-secondary max-w-[560px]"
        >
          Whether you&apos;re a founder who&apos;s done with the chaos, a brand ready to scale, or
          an agency that needs execution support — this is where it starts. Fill in the form and
          we&apos;ll be in touch within 48 hours.
        </motion.p>
      </div>
    </section>
  )
}
