'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { Mail, Instagram, Linkedin, Loader2 } from 'lucide-react'

interface FormValues {
  fullName: string
  email: string
  company: string
  service: string
  message: string
}

const SERVICE_OPTIONS = [
  { value: '', label: 'Select a service' },
  { value: 'content-os', label: 'The Content OS (Done-For-You Systems)' },
  { value: 'operational-engine', label: 'The Operational Engine (Marketing & Management)' },
  { value: 'visibility-matrix', label: 'The Visibility Matrix (Growth & Demand)' },
  { value: 'not-sure', label: "I'm not sure yet — let's talk" },
]

const inputClass =
  'w-full bg-bg-primary border border-border-subtle rounded-md px-4 py-3 font-body text-body-md text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors duration-200'
const labelClass = 'block font-body text-body-sm text-text-secondary mb-2'
const errorClass = 'font-body text-body-sm mt-1.5' + ' ' + 'text-[#CF4444]'

export default function ContactForm() {
  const [serverError, setServerError] = useState('')
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    setServerError('')
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT
      if (!endpoint) throw new Error('Form endpoint not configured.')

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Submission failed. Please try again.')
      router.push('/thank-you')
    } catch (err) {
      setServerError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <section className="bg-bg-secondary section-padding border-t border-border-subtle">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20">
          {/* Form */}
          <div>
            <h2 className="font-display text-display-md text-text-primary mb-8">
              Tell Us About Your Brand
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your full name"
                  className={inputClass}
                  {...register('fullName', { required: 'Full name is required' })}
                />
                {errors.fullName && (
                  <p className={errorClass}>{errors.fullName.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className={inputClass}
                  {...register('email', {
                    required: 'Email address is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className={errorClass}>{errors.email.message}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className={labelClass}>
                  Company / Brand Name <span className="text-accent">*</span>
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="What's your brand called?"
                  className={inputClass}
                  {...register('company', { required: 'Company or brand name is required' })}
                />
                {errors.company && (
                  <p className={errorClass}>{errors.company.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className={labelClass}>
                  Which Service Are You Interested In? <span className="text-accent">*</span>
                </label>
                <select
                  id="service"
                  className={inputClass}
                  {...register('service', {
                    required: 'Please select a service',
                    validate: v => v !== '' || 'Please select a service',
                  })}
                >
                  {SERVICE_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className={errorClass}>{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Tell Us About Your Brand and What You Need <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Give us a quick overview. What's going on with your content right now, and what do you want to achieve?"
                  className={inputClass + ' resize-none'}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 20,
                      message: 'Please write at least 20 characters',
                    },
                  })}
                />
                {errors.message && (
                  <p className={errorClass}>{errors.message.message}</p>
                )}
              </div>

              {/* Server error */}
              {serverError && (
                <p className="font-body text-body-sm text-[#CF4444] bg-[#CF4444]/10 border border-[#CF4444]/20 rounded-sm px-4 py-3">
                  {serverError}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-accent text-white font-body text-body-sm font-medium px-8 py-3.5 rounded-md hover:bg-accent-hover transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>

              <p className="font-body text-body-sm text-text-muted text-center">
                We typically respond within 48 hours on business days.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:pt-[72px]">
            <h3 className="font-display text-[1.375rem] text-text-primary mb-6">
              Other Ways to Reach Us
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-body-sm text-text-muted mb-0.5">Email</p>
                  <a
                    href="mailto:hello@corealmedia.com"
                    className="font-body text-body-md text-text-primary hover:text-accent transition-colors"
                  >
                    hello@corealmedia.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Instagram size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-body-sm text-text-muted mb-0.5">Instagram</p>
                  <a
                    href="https://instagram.com/corealmedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body-md text-text-primary hover:text-accent transition-colors"
                  >
                    @corealmedia
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Linkedin size={18} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body text-body-sm text-text-muted mb-0.5">LinkedIn</p>
                  <a
                    href="https://linkedin.com/company/corealmedia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-body-md text-text-primary hover:text-accent transition-colors"
                  >
                    Coréal Media
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-border-subtle pt-6">
              <p className="font-body text-body-sm text-text-muted italic leading-relaxed">
                We don&apos;t do cold pitches. If you reach out, we respond. Every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
