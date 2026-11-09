import { Logo } from '@/components/brand/logo'
import { NAV_ITEMS } from '@/lib/mordax-data'

export function SiteFooter() {
  return (
    <footer id="contato" className="scroll-mt-20 border-t border-border bg-graphite">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr] md:px-10">
        <div>
          <Logo stacked={false} />
          <p className="mt-4 font-display text-2xl tracking-wide text-flame">
            O sabor que deixa marca.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-ash">Navegação</h2>
          <ul className="mt-5 space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-cream/80 transition-colors hover:text-flame"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-ash">Contato</h2>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            MORDAX é uma marca fictícia criada para portfólio. Não há loja física, pedidos ou
            canais de atendimento.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-[1440px] px-5 py-6 text-xs text-ash md:px-10">
          Projeto conceitual de portfólio. Produtos, preços e marca são fictícios.
        </p>
      </div>
    </footer>
  )
}
