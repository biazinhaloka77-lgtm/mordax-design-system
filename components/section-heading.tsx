import { cn } from '@/lib/utils'

export function SectionHeading({
  id,
  eyebrow,
  title,
  className,
}: {
  id: string
  eyebrow: string
  title: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn('max-w-3xl', className)}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.36em] text-flame">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.88] text-cream italic"
      >
        {title}
      </h2>
    </div>
  )
}
