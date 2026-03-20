import { redirect } from 'next/navigation'

// Products page is temporarily hidden until products are ready.
// Redirects anyone who lands here directly back to the homepage.
export default function ProductsPage() {
  redirect('/')
}
