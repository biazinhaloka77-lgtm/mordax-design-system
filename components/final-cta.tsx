import { ArrowRight } from 'lucide-react'
import { FlameEmblem } from '@/components/brand/logo'

export function FinalCta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden border-t border-flame/40 bg-charcoal py-28 md:py-36"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_at_bottom,rgb(229_37_33/0.28),transparent_65%)]"
      />
      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-5 text-center md:px-10">
        <FlameEmblem className="h-14 w-auto" />
        <h2
          id="cta-title"
          className="mt-8 font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] text-cream italic"
        >
          Sua próxima mordida
          <br />
          <span className="text-flame">começa aqui.</span>
        </h2>
        <a
          href="#cardapio"
          className="group mt-12 inline-flex items-center gap-4 rounded-full bg-flame px-10 py-5 text-sm font-bold uppercase tracking-[0.24em] text-cream transition-colors hover:bg-cream hover:text-charcoal"
        >
          Explorar Cardápio
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
