import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Propagates the request pathname as a header so the root layout (a Server
// Component) can read it and conditionally suppress Navbar / Footer on
// landing pages (/lp/*) without needing a client component.
export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
