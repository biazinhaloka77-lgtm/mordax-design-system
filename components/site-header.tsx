'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { NAV_ITEMS, NAV_LEFT, NAV_RIGHT } from '@/lib/mordax-data'
import { cn } from '@/lib/utils'

const linkClass =
  'relative py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cream/80 transition-colors hover:text-cream after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-flame after:transition-transform hover:after:scale-x-100 focus-visible:text-cream'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-charcoal/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-charcoal/80 to-transparent',
      )}
    >
      <div className="mx-auto grid h-20 max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:px-10">
        <div className="flex items-center gap-8">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-overlay"
            className="-ml-2 inline-flex size-10 items-center justify-center text-cream transition-colors hover:text-flame"
          >
            <Menu className="size-6" strokeWidth={1.5} />
          </button>
          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LEFT.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <a href="#inicio" aria-label="MORDAX — voltar ao início">
          <Logo />
        </a>

        <div className="flex items-center justify-end gap-8">
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_RIGHT.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cardapio"
            className="hidden items-center gap-2 rounded-full border border-flame px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-flame md:inline-flex"
          >
            Explorar Cardápio
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      <div
        id="menu-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col bg-charcoal"
      >
        <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 md:px-10">
          <Logo stacked={false} />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="inline-flex size-10 items-center justify-center text-cream hover:text-flame"
          >
            <X className="size-6" strokeWidth={1.5} />
          </button>
        </div>
        <nav
          aria-label="Menu completo"
          className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-center px-5 md:px-10"
        >
          <ol className="flex flex-col gap-2">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-5 font-display text-6xl leading-none text-cream transition-colors hover:text-flame md:text-8xl"
                >
                  <span className="font-sans text-xs font-semibold tracking-[0.2em] text-ash">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
          <p className="mt-12 font-display text-2xl tracking-wide text-flame">
            O sabor que deixa marca.
          </p>
        </nav>
      </div>
    </header>
  )
}
