'use client'

/**
 * Icons via Phosphor — clean, minimal line icons (regular weight).
 */
import {
  List as ListPhosphor,
  XCircle as XCirclePhosphor,
  ArrowRight as ArrowRightPhosphor,
  ArrowLeft as ArrowLeftPhosphor,
  InstagramLogo,
  LinkedinLogo,
  FacebookLogo,
  Sun as SunPhosphor,
  Moon as MoonPhosphor,
  User as UserPhosphor,
  Briefcase as BriefcasePhosphor,
  Users as UsersPhosphor,
  Target as TargetPhosphor,
  MagnifyingGlass,
  ChatCircle,
  FolderOpen as FolderOpenPhosphor,
  Eye as EyePhosphor,
  Trophy as TrophyPhosphor,
  CheckCircle,
  Cpu as CpuPhosphor,
  Heart as HeartPhosphor,
  Lightning,
  Stack,
  Gear,
  TrendUp,
  Quotes,
  FileText as FileTextPhosphor,
  Calendar as CalendarPhosphor,
  Microphone,
  ArrowsClockwise,
  Hash as HashPhosphor,
  BookOpen as BookOpenPhosphor,
  Envelope,
  CircleNotch,
} from '@phosphor-icons/react'

const defaultSize = 24
const weight = 'regular' as const

interface IconProps {
  size?: number
  className?: string
  style?: React.CSSProperties
  color?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrap(Icon: any) {
  return function WrappedIcon({ size = defaultSize, className, style, color }: IconProps) {
    return (
      <Icon
        size={size}
        className={className}
        style={style}
        color={color}
        weight={weight}
      />
    )
  }
}

export const Menu = wrap(ListPhosphor)
export const X = wrap(XCirclePhosphor)
export const ArrowRight = wrap(ArrowRightPhosphor)
export const ArrowLeft = wrap(ArrowLeftPhosphor)
export const Instagram = wrap(InstagramLogo)
export const Linkedin = wrap(LinkedinLogo)
export const Facebook = wrap(FacebookLogo)
export const Mail = wrap(Envelope)
export const Loader2 = wrap(CircleNotch)
export const Layers = wrap(Stack)
export const Settings2 = wrap(Gear)
export const TrendingUp = wrap(TrendUp)
export const Quote = wrap(Quotes)
export const User = wrap(UserPhosphor)
export const Briefcase = wrap(BriefcasePhosphor)
export const Users = wrap(UsersPhosphor)
export const Target = wrap(TargetPhosphor)
export const XCircle = wrap(XCirclePhosphor)
export const Search = wrap(MagnifyingGlass)
export const MessageSquare = wrap(ChatCircle)
export const FolderOpen = wrap(FolderOpenPhosphor)
export const Eye = wrap(EyePhosphor)
export const Trophy = wrap(TrophyPhosphor)
export const Check = wrap(CheckCircle)
export const Cpu = wrap(CpuPhosphor)
export const Heart = wrap(HeartPhosphor)
export const Zap = wrap(Lightning)
export const FileText = wrap(FileTextPhosphor)
export const Calendar = wrap(CalendarPhosphor)
export const Mic2 = wrap(Microphone)
export const Repeat2 = wrap(ArrowsClockwise)
export const Hash = wrap(HashPhosphor)
export const BookOpen = wrap(BookOpenPhosphor)
export const Sun = wrap(SunPhosphor)
export const Moon = wrap(MoonPhosphor)
