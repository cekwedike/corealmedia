import type { ReactNode } from 'react'

type Platform = 'instagram' | 'linkedin' | 'facebook'

interface SocialIconButtonProps {
  href: string
  platform: Platform
  'aria-label': string
  children: ReactNode
}

export default function SocialIconButton({
  href,
  platform,
  'aria-label': ariaLabel,
  children,
}: SocialIconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-icon-btn ${platform}`}
      aria-label={ariaLabel}
    >
      <span className="svgContainer">{children}</span>
      <span className="BG" aria-hidden />
    </a>
  )
}
