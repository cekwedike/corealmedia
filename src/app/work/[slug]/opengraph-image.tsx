import { ImageResponse } from 'next/og'
import { getCaseStudyBySlug, getCaseStudies } from '@/lib/wordpress'

export const runtime = 'edge'
export const alt = 'Coréal Media Case Study'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export async function generateStaticParams() {
  const studies = await getCaseStudies()
  return studies.map(s => ({ slug: s.slug }))
}

export default async function Image({ params }: { params: { slug: string } }) {
  const study = await getCaseStudyBySlug(params.slug)

  const clientType = study?.clientType ?? 'Case Study'
  const industry = study?.industry ?? ''
  const challenge = study?.challenge ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          position: 'relative',
          fontFamily: 'serif',
        }}
      >
        {/* Top-left accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: '#8B1A1A',
          }}
        />

        {/* Subtle grid texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(139,26,26,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,26,26,0.04) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Brand mark top-right */}
        <div
          style={{
            position: 'absolute',
            top: '48px',
            right: '64px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
          }}
        >
          <span
            style={{
              color: '#FFFFFF',
              fontSize: '22px',
              fontFamily: 'serif',
              letterSpacing: '0.02em',
            }}
          >
            Coréal Media
          </span>
          <span
            style={{
              color: '#8B1A1A',
              fontSize: '11px',
              letterSpacing: '0.2em',
              fontFamily: 'sans-serif',
              textTransform: 'uppercase',
              marginTop: '4px',
            }}
          >
            Content Systems Agency
          </span>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Label */}
          <span
            style={{
              color: '#8B1A1A',
              fontSize: '13px',
              letterSpacing: '0.25em',
              fontFamily: 'sans-serif',
              textTransform: 'uppercase',
            }}
          >
            Case Study — {industry}
          </span>

          {/* Headline */}
          <h1
            style={{
              color: '#FFFFFF',
              fontSize: '56px',
              lineHeight: 1.05,
              margin: 0,
              fontFamily: 'serif',
              fontWeight: 400,
              maxWidth: '800px',
            }}
          >
            {clientType}
          </h1>

          {/* Excerpt */}
          {challenge && (
            <p
              style={{
                color: '#999999',
                fontSize: '20px',
                margin: 0,
                fontFamily: 'sans-serif',
                fontWeight: 400,
                maxWidth: '700px',
                lineHeight: 1.4,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                overflow: 'hidden',
              }}
            >
              {challenge}
            </p>
          )}
        </div>

        {/* Bottom rule */}
        <div
          style={{
            position: 'absolute',
            bottom: '48px',
            left: '64px',
            right: '64px',
            height: '1px',
            background: 'rgba(255,255,255,0.08)',
          }}
        />

        {/* corealmedia.com bottom right */}
        <span
          style={{
            position: 'absolute',
            bottom: '22px',
            right: '64px',
            color: '#555555',
            fontSize: '13px',
            fontFamily: 'sans-serif',
            letterSpacing: '0.05em',
          }}
        >
          corealmedia.com
        </span>
      </div>
    ),
    { ...size }
  )
}
