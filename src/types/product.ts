export interface Product {
  id: string
  name: string
  tagline: string
  description: string      // Short description — shown on the grid card
  longDescription: string  // Full detail — shown on the product detail page
  features: string[]       // What's included list
  price: number
  badge: string | null
  icon: string
  purchaseUrl: string      // External purchase/download link
  image: string            // Featured image from WordPress
}
