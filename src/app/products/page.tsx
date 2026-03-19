import type { Metadata } from 'next'
import ProductsHero from '@/components/sections/products/ProductsHero'
import ProductGrid from '@/components/sections/products/ProductGrid'
import CTABanner from '@/components/shared/CTABanner'
import { getProducts } from '@/lib/wordpress'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Products | Coréal Media',
  description:
    'DIY content tools built from the same systems we use for clients. Templates, playbooks, and kits to help you start building your content engine today.',
  openGraph: {
    title: 'Products | Coréal Media',
    description: 'Professional content tools from $10. Templates, playbooks, and kits used by Coréal Media.',
    url: 'https://corealmedia.com/products',
  },
}

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <>
      <ProductsHero />
      <ProductGrid products={products} />
      <CTABanner
        headline="Want the Full Engine, Not Just the Tools?"
        body="Our products are a great start. But if you're ready to hand it off completely, let's talk."
        ctaLabel="Work With Us"
        ctaHref="/contact"
        secondaryLabel="Browse our services first"
        secondaryHref="/services"
      />
    </>
  )
}
