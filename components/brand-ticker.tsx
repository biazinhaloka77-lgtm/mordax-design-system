import { FlameEmblem } from '@/components/brand/logo'
import { TICKER_STATEMENTS } from '@/lib/mordax-data'

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {TICKER_STATEMENTS.map((text) => (
        <li key={text} className="flex items-center gap-10 pr-10">
          <span className="whitespace-nowrap font-display text-3xl italic tracking-wide text-cream md:text-4xl">
            {text}
          </span>
          <FlameEmblem className="h-6 w-auto shrink-0" />
        </li>
      ))}
    </ul>
  )
}

export function BrandTicker() {
  return (
    <section
      aria-label="Manifesto MORDAX"
      className="relative overflow-hidden border-y border-flame/70 bg-charcoal py-5"
    >
      <div className="flex w-max animate-marquee">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </section>
  )
}
