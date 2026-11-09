import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero/hero'
import { BrandTicker } from '@/components/brand-ticker'
import { BestSellers } from '@/components/best-sellers'
import { Sides } from '@/components/sides'
import { BrandStory } from '@/components/brand-story'
import { Manifesto } from '@/components/manifesto'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <BrandTicker />
        <BestSellers />
        <Sides />
        <BrandStory />
        <Manifesto />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
