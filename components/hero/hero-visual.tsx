import Image from 'next/image'
import type { Ingredient } from '@/lib/mordax-data'

/**
 * Static cinematic implementation of the hero visual.
 * Swap this component for the interactive 3D burger in the next phase;
 * it receives the same `ingredients` contract.
 */
export function HeroVisual({ ingredients }: { ingredients: Ingredient[] }) {
  return (
    <div className="absolute inset-0">
      <Image
        src="/images/hero-burger.png"
        alt="Hambúrguer MORDAX com as camadas separadas no ar — pão brioche, alface, tomate, cebola roxa, cheddar derretido, blend de carne e pão — sobre uma rocha em brasa, com chamas ao fundo"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[72%_center] lg:object-center"
      />
      <ul
        aria-label="Ingredientes"
        className="pointer-events-none absolute inset-0 hidden xl:block"
      >
        {ingredients.map((item) => (
          <li
            key={item.id}
            className="absolute left-[85.5%] flex -translate-y-1/2 items-center"
            style={{ top: `${item.y}%` }}
          >
            <span aria-hidden="true" className="h-px w-8 bg-flame" />
            <span aria-hidden="true" className="size-1.5 rounded-full bg-flame" />
            <span className="ml-2 rounded-full border border-cream/25 bg-charcoal/70 px-3 py-1 text-[11px] font-semibold uppercase italic tracking-[0.16em] text-cream backdrop-blur-sm">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
