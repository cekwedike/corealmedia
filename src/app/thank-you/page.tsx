import Link from 'next/link'
import { Mail, MessageSquare, Layers } from '@/components/ui/Icons3D'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Message Received | Coréal Media',
  description: 'Thank you for reaching out to Coréal Media. We will be in touch shortly.',
  robots: { index: false, follow: false },
}

const STEPS = [
  {
    icon: Mail,
    title: 'We review your message',
    description:
      "We learn about your brand before we respond. We don't do generic replies.",
  },
  {
    icon: MessageSquare,
    title: 'We schedule a discovery call',
    description:
      "If we're a good fit, we'll reach out to set up a real conversation. No hard sell.",
  },
  {
    icon: Layers,
    title: 'We build your content system',
    description: 'Strategy first. Execution after. Built around your brand, not a template.',
  },
]

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center section-padding py-12 sm:py-16">
      <div className="container-site max-w-2xl mx-auto text-center">
        <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-6">
          MESSAGE RECEIVED
        </p>
        <h1 className="font-display text-display-xl text-text-primary mb-6">
          We Got Your Message.
        </h1>
        <p className="font-body text-body-lg text-text-secondary mb-10">
          Thank you for reaching out to Coréal Media. We have received your enquiry and will be in
          touch within 12 business hours.
        </p>

        <p className="font-body text-body-md text-text-secondary mb-8">
          In the meantime, here is what happens next:
        </p>

        <div className="flex flex-col gap-6 text-left mb-12">
          {STEPS.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(139,26,26,0.1)' }}
                >
                  <Icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-body font-medium text-text-primary mb-1">{step.title}</p>
                  <p className="font-body text-body-sm text-text-secondary">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
          <Link
            href="/services"
            className="inline-block bg-accent text-white font-body text-body-sm font-medium px-7 py-3 rounded-md hover:bg-accent-hover transition-colors duration-200"
          >
            Explore Our Services
          </Link>
          <Link
            href="/products"
            className="inline-block border border-border text-text-primary font-body text-body-sm font-medium px-7 py-3 rounded-md hover:border-accent hover:text-accent transition-colors duration-200"
          >
            Browse Products
          </Link>
        </div>
        <div>
          <Link
            href="/"
            className="font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors"
          >
            Or go back to the homepage
          </Link>
        </div>
      </div>
    </main>
  )
}
