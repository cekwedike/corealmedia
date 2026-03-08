'use client'

/**
 * 3D-style icons via Iconsax (Bulk variant) for consistent look across the site.
 * Replaces Lucide with a single variant for all icon usage.
 */
import {
  Menu as MenuSax,
  CloseCircle,
  ArrowRight as ArrowRightSax,
  ArrowLeft as ArrowLeftSax,
  Instagram as InstagramSax,
  LinkCircle,
  Direct,
  Refresh2,
  Layer,
  Setting2,
  TrendUp,
  QuoteDownCircle,
  User as UserSax,
  Briefcase as BriefcaseSax,
  People,
  Award,
  SearchNormal,
  MessageSquare as MessageSquareSax,
  FolderOpen as FolderOpenSax,
  Eye as EyeSax,
  Medal,
  TickCircle,
  Cpu as CpuSax,
  Heart as HeartSax,
  Flash,
  DocumentText,
  Calendar1,
  Microphone2,
  Hashtag,
  Book1,
  Sun1,
  Moon as MoonSax,
} from 'iconsax-react'

const BULK = 'Bulk' as const
const defaultSize = 24

interface IconProps {
  size?: number
  className?: string
  style?: React.CSSProperties
  color?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function withBulk(Icon: React.ComponentType<any>) {
  return function Icon3D({ size = defaultSize, className, style, color }: IconProps) {
    return <Icon size={size} className={className} style={style} color={color} variant={BULK} />
  }
}

export const Menu = withBulk(MenuSax)
export const X = withBulk(CloseCircle)
export const ArrowRight = withBulk(ArrowRightSax)
export const ArrowLeft = withBulk(ArrowLeftSax)
export const Instagram = withBulk(InstagramSax)
export const Linkedin = withBulk(LinkCircle)
export const Mail = withBulk(Direct)
export const Loader2 = withBulk(Refresh2)
export const Layers = withBulk(Layer)
export const Settings2 = withBulk(Setting2)
export const TrendingUp = withBulk(TrendUp)
export const Quote = withBulk(QuoteDownCircle)
export const User = withBulk(UserSax)
export const Briefcase = withBulk(BriefcaseSax)
export const Users = withBulk(People)
export const Target = withBulk(Award)
export const XCircle = withBulk(CloseCircle)
export const Search = withBulk(SearchNormal)
export const MessageSquare = withBulk(MessageSquareSax)
export const FolderOpen = withBulk(FolderOpenSax)
export const Eye = withBulk(EyeSax)
export const Trophy = withBulk(Medal)
export const Check = withBulk(TickCircle)
export const Cpu = withBulk(CpuSax)
export const Heart = withBulk(HeartSax)
export const Zap = withBulk(Flash)
export const FileText = withBulk(DocumentText)
export const Calendar = withBulk(Calendar1)
export const Mic2 = withBulk(Microphone2)
export const Repeat2 = withBulk(Refresh2)
export const Hash = withBulk(Hashtag)
export const BookOpen = withBulk(Book1)
export const Sun = withBulk(Sun1)
export const Moon = withBulk(MoonSax)
