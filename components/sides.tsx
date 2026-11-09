import Image from 'next/image'
import { SIDES } from '@/lib/mordax-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

const OFFSETS = ['lg:mt-0', 'lg:mt-24', 'lg:mt-12']

export function Sides() {
  return (
    <section
      aria-labelledby="acompanhamentos-title"
      className="relative overflow-hidden bg-graphite py-24 md:py-32"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 top-10 select-none font-display text-[22vw] leading-none text-cream/[0.03] italic"
      >
        COMBO
      </span>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <SectionHeading
          id="acompanhamentos-title"
          eyebrow="Acompanhamentos"
          title={
            <>
              Ninguém chega <span className="text-flame">sozinho</span>
            </>
          }
          className="mb-16"
        />

        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {SIDES.map((side, i) => (
            <li key={side.id} className={cn('group', OFFSETS[i])}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={side.image}
                  alt={side.name}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent"
                />
                <p className="absolute bottom-5 right-5 font-display text-3xl text-gold">
                  {side.price}
                </p>
              </div>
              <div className="mt-5 flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2 h-px w-8 shrink-0 bg-flame transition-all group-hover:w-12"
                />
                <div>
                  <h3 className="font-display text-3xl leading-none text-cream italic">
                    {side.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ash">{side.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
