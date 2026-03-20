import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProductBySlug, getProducts } from '@/lib/wordpress'
import ProductDetail from '@/components/sections/products/ProductDetail'
import CTABanner from '@/components/shared/CTABanner'
import { JsonLd, breadcrumbSchema, productSchema, SITE_URL } from '@/components/shared/JsonLd'

export const revalidate = 60

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map(p => ({ slug: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug)
  if (!product) return { title: 'Product Not Found' }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Coréal Media`,
      description: product.description,
      url: `${SITE_URL}/products/${product.id}`,
      images: product.image
        ? [{ url: product.image, width: 1200, height: 630, alt: product.name }]
        : [{ url: '/images/og/og-default.jpg', width: 1200, height: 630, alt: product.name }],
    },
  }
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug)
  if (!product) notFound()

  return (
    <>
      <JsonLd
        data={productSchema({
          name: product.name,
          description: product.description,
          price: String(product.price),
          url: `${SITE_URL}/products/${product.id}`,
          image: product.image || undefined,
        })}
      />
      <JsonLd data={breadcrumbSchema(product.name, `${SITE_URL}/products/${product.id}`)} />
      <ProductDetail product={product} />
      <CTABanner
        headline="Want the Full Engine, Not Just the Tools?"
        body="Our products are a great start. But if you're ready to hand it off completely, let's talk."
        ctaLabel="Work With Us"
        ctaHref="/contact"
        secondaryLabel="Browse all products"
        secondaryHref="/products"
      />
    </>
  )
}
