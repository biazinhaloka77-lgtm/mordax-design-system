import { ArrowRight, Mouse } from 'lucide-react'
import { HERO_INGREDIENTS } from '@/lib/mordax-data'
import { HeroVisual } from './hero-visual'
import { Embers } from './embers'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-charcoal lg:aspect-[1376/768] lg:min-h-[640px]"
    >
      <HeroVisual ingredients={HERO_INGREDIENTS} />
      <Embers />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent lg:bg-gradient-to-r lg:from-charcoal/90 lg:via-charcoal/30 lg:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-charcoal to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-5 pb-12 pt-28 md:px-10 lg:justify-center lg:pb-20">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-bold uppercase italic tracking-[0.4em] text-flame md:text-sm">
            O sabor que deixa marca.
          </p>
          <h1
            id="hero-title"
            className="font-display text-[clamp(5.5rem,22vw,11rem)] leading-[0.82] tracking-tight text-cream italic"
          >
            MORDA
            <span className="text-flame [text-shadow:0_0_40px_rgb(229_37_33/0.45)]">X</span>
          </h1>
          <p className="mt-6 text-sm font-semibold uppercase leading-relaxed tracking-[0.32em] text-cream md:text-base">
            Mais que um hambúrguer.
            <br />
            Uma <span className="text-flame">experiência.</span>
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#cardapio"
              className="group inline-flex items-center gap-4 rounded-full border-2 border-flame bg-charcoal/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.24em] text-cream shadow-[0_0_30px_rgb(229_37_33/0.25)] transition-colors hover:bg-flame"
            >
              Explorar Cardápio
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <a
            href="#destaques"
            className="mt-12 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70 transition-colors hover:text-cream md:inline-flex"
          >
            <Mouse className="size-5" strokeWidth={1.5} />
            Role para descobrir
          </a>
        </div>
      </div>
    </section>
  )
}
