import Image from 'next/image'
import { SectionHeading } from '@/components/section-heading'

const PILLARS = [
  { n: '01', title: 'Fogo', text: 'Chapa no limite. A crosta é onde o sabor nasce.' },
  { n: '02', title: 'Tempo', text: 'Nada de pressa: cada blend descansa antes de ir à brasa.' },
  { n: '03', title: 'Caráter', text: 'Receitas curtas, ingredientes fortes, zero excesso.' },
]

export function BrandStory() {
  return (
    <section
      id="historia"
      aria-labelledby="historia-title"
      className="scroll-mt-20 bg-charcoal py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 md:px-10 lg:grid-cols-2 lg:gap-20">
        <div className="relative isolate">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/story-grill.png"
              alt="Mãos pressionando um blend de carne na chapa com chamas subindo"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 hidden h-2/3 w-2/3 border border-flame/60 lg:block"
            style={{ zIndex: -1 }}
          />
        </div>

        <div>
          <SectionHeading
            id="historia-title"
            eyebrow="Nossa história"
            title={
              <>
                Nascido
                <br />
                na <span className="text-flame">brasa</span>
              </>
            }
          />
          <div className="mt-8 max-w-lg space-y-5 text-base leading-relaxed text-cream/80">
            <p>
              MORDAX começou com uma ideia simples: um hambúrguer deveria ser lembrado depois
              da última mordida.
            </p>
            <p>
              Por isso trabalhamos com fogo alto, pão brioche de fermentação lenta e um blend
              que respeita a carne. O resto é atitude.
            </p>
          </div>

          <dl className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <div key={p.n}>
                <dt className="flex items-baseline gap-2">
                  <span className="text-xs font-bold text-flame">{p.n}</span>
                  <span className="font-display text-3xl text-cream italic">{p.title}</span>
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ash">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
