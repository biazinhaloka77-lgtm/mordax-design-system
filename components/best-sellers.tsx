import Image from 'next/image'
import { BEST_SELLERS, type Product } from '@/lib/mordax-data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

function FeaturedProduct({ product, index }: { product: Product; index: number }) {
  const featured = index === 0
  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden',
        featured && 'lg:row-span-2',
      )}
    >
      <div
        className={cn(
          'relative overflow-hidden bg-graphite',
          featured ? 'aspect-square lg:aspect-auto lg:flex-1' : 'aspect-[4/3]',
        )}
      >
        <Image
          src={product.image}
          alt={`Hambúrguer ${product.name}`}
          fill
          sizes={featured ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 1024px) 40vw, 100vw'}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent"
        />
        <span
          aria-hidden="true"
          className="absolute left-5 top-5 font-display text-5xl leading-none text-cream/20"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        {product.tag && (
          <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-charcoal">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex items-end justify-between gap-6 border-b border-border py-5 transition-colors group-hover:border-flame">
        <div>
          <h3
            className={cn(
              'font-display leading-none text-cream italic',
              featured ? 'text-5xl md:text-6xl' : 'text-4xl',
            )}
          >
            {product.name}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-ash">{product.description}</p>
        </div>
        <p className="shrink-0 font-display text-3xl text-gold">{product.price}</p>
      </div>
    </article>
  )
}

export function BestSellers() {
  return (
    <section
      id="cardapio"
      aria-labelledby="destaques-title"
      className="scroll-mt-20 bg-charcoal py-24 md:py-32"
    >
      <div id="destaques" className="mx-auto max-w-[1440px] scroll-mt-20 px-5 md:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="destaques-title"
            eyebrow="Os mais pedidos"
            title={
              <>
                Clássicos
                <br />
                da <span className="text-flame">brasa</span>
              </>
            }
          />
          <p className="max-w-sm text-sm leading-relaxed text-ash md:text-right">
            Pão brioche tostado na manteiga, blend próprio e o tempo certo de chapa. Três
            receitas que definem a casa.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-[1.35fr_1fr] lg:grid-rows-2">
          {BEST_SELLERS.map((product, i) => (
            <FeaturedProduct key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
