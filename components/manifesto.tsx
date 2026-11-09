import Image from 'next/image'

export function Manifesto() {
  return (
    <section
      aria-labelledby="manifesto-title"
      className="relative isolate flex min-h-[80svh] items-center overflow-hidden"
    >
      <Image
        src="/images/manifesto-melt.png"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-[70%_center]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/75 to-charcoal/10"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 py-24 md:px-10">
        <p className="mb-6 text-xs font-bold uppercase tracking-[0.36em] text-flame">
          Manifesto
        </p>
        <h2
          id="manifesto-title"
          className="max-w-4xl font-display text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] text-cream italic"
        >
          Não fazemos
          <br />
          hambúrguer
          <br />
          <span className="text-flame">para esquecer.</span>
        </h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-cream/80">
          Queijo que escorre. Crosta que estala. Fumaça que fica na memória. Cada detalhe
          existe para deixar marca.
        </p>
      </div>
    </section>
  )
}
