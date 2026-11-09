import { cn } from '@/lib/utils'

export function FlameEmblem({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 40"
      aria-hidden="true"
      className={cn('text-flame', className)}
      fill="currentColor"
    >
      <path d="M16 0c1.2 6.2-3.6 9.4-6.8 13.6C5.6 18.4 3 22 3 27c0 7.2 5.8 13 13 13s13-5.8 13-13c0-5.4-2.6-9.6-5.6-13 .2 3.2-.8 5.8-3 7.4.6-6.8-1.8-15.6-4.4-21.4Z" />
      <path
        d="M16 22c.6 3-1.8 4.6-3.2 6.6-.9 1.3-1.4 2.4-1.4 3.8a4.6 4.6 0 0 0 9.2 0c0-2.4-1.4-4.2-2.6-5.6-.1 1.4-.6 2.4-1.4 3 .3-2.8-.4-5.6-.6-7.8Z"
        className="fill-charcoal"
      />
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-display leading-none tracking-wide text-cream italic',
        className,
      )}
    >
      MORDA<span className="text-flame">X</span>
    </span>
  )
}

export function Logo({
  className,
  stacked = true,
}: {
  className?: string
  stacked?: boolean
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center',
        stacked ? 'flex-col gap-0.5' : 'gap-2',
        className,
      )}
    >
      <FlameEmblem className={stacked ? 'h-7 w-auto' : 'h-6 w-auto'} />
      <Wordmark className="text-3xl" />
    </span>
  )
}
