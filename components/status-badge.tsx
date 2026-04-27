import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant: 'pending' | 'approved' | 'rejected' | 'published' | 'UMKM' | 'Petani' | 'Fakta' | 'Mitos' | 'default'
  className?: string
}

export default function StatusBadge({ children, variant, className }: BadgeProps) {
  const variants = {
    pending: 'bg-gold/10 text-gold border-gold/20',
    approved: 'bg-green-light/10 text-green-light border-green-light/20',
    rejected: 'bg-red/10 text-red border-red/20',
    published: 'bg-blue/10 text-blue border-blue/20',
    UMKM: 'bg-green/10 text-green border-green/20',
    Petani: 'bg-teal/10 text-teal border-teal/20',
    Fakta: 'bg-gold/10 text-gold border-gold/20',
    Mitos: 'bg-purple/10 text-purple border-purple/20',
    default: 'bg-white/5 text-text-muted border-border',
  }

  return (
    <span className={cn(
      "px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border",
      variants[variant as keyof typeof variants] || variants.default,
      className
    )}>
      {children}
    </span>
  )
}
