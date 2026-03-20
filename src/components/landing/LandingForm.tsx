'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { ArrowRight, Loader2 } from '@/components/ui/Icons3D'

interface FormValues {
  firstName: string
  email: string
  company: string
  message: string
  website: string // honeypot
}

interface Props {
  serviceId: string // e.g. 'content-os'
  serviceLabel: string // e.g. 'The Content OS'
}

export default function LandingForm({ serviceId, serviceLabel }: Props) {
  const router = useRouter()
  const [serverError, setServerError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const inputClass =
    'w-full bg-bg-card border border-border-subtle rounded-md px-4 py-3 font-body text-body-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors min-h-[44px]'

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true)
    setServerError('')

    // Read HubSpot cookie for attribution
    const hutk =
      typeof document !== 'undefined'
        ? document.cookie
            .split('; ')
            .find(row => row.startsWith('hubspotutk='))
            ?.split('=')[1] ?? ''
        : ''

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: '',
          email: data.email,
          company: data.company,
          service: serviceId,
          message: data.message || `Enquiry about ${serviceLabel}`,
          website: data.website,
          hutk,
        }),
      })

      const json = await res.json()
      if (!res.ok) {
        setServerError(json.error || 'Something went wrong. Please try again.')
        setSubmitting(false)
        return
      }

      router.push('/thank-you')
    } catch {
      setServerError('Something went wrong. Please try again.')
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        {...register('website')}
        tabIndex={-1}
        aria-hidden="true"
        className="hidden"
        autoComplete="off"
      />

      <div>
        <label className="block font-body text-body-sm text-text-secondary mb-1.5">
          First Name <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          placeholder="Your first name"
          className={inputClass}
          {...register('firstName', { required: 'First name is required' })}
        />
        {errors.firstName && (
          <p className="mt-1 font-body text-[0.8rem]" style={{ color: '#CF4444' }}>
            {errors.firstName.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-body text-body-sm text-text-secondary mb-1.5">
          Email Address <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          placeholder="you@company.com"
          className={inputClass}
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
          })}
        />
        {errors.email && (
          <p className="mt-1 font-body text-[0.8rem]" style={{ color: '#CF4444' }}>
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-body text-body-sm text-text-secondary mb-1.5">
          Brand / Company <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          placeholder="Your brand name"
          className={inputClass}
          {...register('company', { required: 'Brand name is required' })}
        />
        {errors.company && (
          <p className="mt-1 font-body text-[0.8rem]" style={{ color: '#CF4444' }}>
            {errors.company.message}
          </p>
        )}
      </div>

      <div>
        <label className="block font-body text-body-sm text-text-secondary mb-1.5">
          Tell Us About Your Goals
        </label>
        <textarea
          rows={4}
          placeholder="Where are you now? Where do you want to be?"
          className={`${inputClass} min-h-[120px] resize-y`}
          {...register('message')}
        />
      </div>

      {serverError && (
        <div
          className="p-3 rounded-md font-body text-body-sm"
          style={{ background: 'rgba(207,68,68,0.1)', border: '1px solid rgba(207,68,68,0.3)', color: '#CF4444' }}
        >
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 bg-accent text-white font-body text-body-sm font-medium px-6 py-3 rounded-md hover:bg-accent-hover transition-colors duration-200 min-h-[48px] disabled:opacity-60 disabled:cursor-not-allowed w-full"
      >
        {submitting ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Book My Strategy Call
            <ArrowRight size={15} />
          </>
        )}
      </button>

      <p className="font-body text-[0.75rem] text-text-muted text-center">
        No spam. We&apos;ll reply within 12 hours.
      </p>
    </form>
  )
}
