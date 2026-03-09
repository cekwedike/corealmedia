import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center section-padding py-12 sm:py-16">
      <div className="container-site max-w-xl mx-auto text-center">
        <p className="font-mono text-accent text-label-lg uppercase tracking-widest mb-6">404</p>
        <h1 className="font-display text-display-xl text-text-primary mb-6">
          This Page Doesn&apos;t Exist.
          <br />
          But Your Content System Should.
        </h1>
        <p className="font-body text-body-lg text-text-secondary mb-10">
          The page you are looking for has either moved or never existed. Let&apos;s get you back
          on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-accent text-white font-body text-body-sm font-medium px-7 py-3 rounded-md hover:bg-accent-hover transition-colors duration-200 mb-5"
        >
          Back to Homepage
        </Link>
        <div>
          <Link
            href="/contact"
            className="font-body text-body-sm text-text-muted hover:text-text-secondary transition-colors"
          >
            Or contact us if you think something is broken
          </Link>
        </div>
      </div>
    </main>
  )
}
