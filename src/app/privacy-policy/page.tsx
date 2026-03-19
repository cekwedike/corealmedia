import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read the Coréal Media privacy policy to understand how we collect, use, and protect your information.',
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg-primary section-padding pt-28 sm:pt-32 lg:pt-36">
      <div className="container-site max-w-3xl mx-auto">
        <p className="font-mono text-text-muted text-label-lg uppercase tracking-widest mb-4">
          Legal
        </p>
        <h1 className="font-display text-display-lg text-text-primary mb-3">Privacy Policy</h1>
        <p className="font-body text-body-sm text-text-muted mb-14">Last Updated: March 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="font-display text-display-md text-text-primary mb-4">Introduction</h2>
            <p className="font-body text-body-md text-text-secondary leading-[1.7]">
              Coréal Media (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to
              protecting your privacy. This privacy policy explains how we collect, use, and store
              your personal information when you visit our website at corealmedia.com and when you
              contact us through our contact form.
            </p>
          </section>

          <section>
            <h2 className="font-display text-display-md text-text-primary mb-4">
              Information We Collect
            </h2>
            <p className="font-body text-body-md text-text-secondary leading-[1.7] mb-4">
              We collect the following information when you submit our contact form:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                'Your full name',
                'Your email address',
                'Your company or brand name',
                'The service you are interested in',
                'The message you write to us',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-body text-body-md text-text-secondary">
                  <span className="text-accent mt-1.5 shrink-0" style={{ fontSize: '0.375rem' }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-body text-body-md text-text-secondary leading-[1.7] mt-4">
              We do not collect any payment information through this website. We do not use cookies
              for advertising tracking purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-display-md text-text-primary mb-4">
              How We Use Your Information
            </h2>
            <p className="font-body text-body-md text-text-secondary leading-[1.7] mb-4">
              We use the information you provide solely to:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                'Respond to your enquiry',
                'Assess whether we are a good fit to work together',
                'Communicate with you about our services if you choose to engage us',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-body text-body-md text-text-secondary">
                  <span className="text-accent mt-1.5 shrink-0" style={{ fontSize: '0.375rem' }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-body text-body-md text-text-secondary leading-[1.7] mt-4">
              We do not sell, rent, or share your personal information with third parties for
              marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="font-display text-display-md text-text-primary mb-4">Data Storage</h2>
            <p className="font-body text-body-md text-text-secondary leading-[1.7]">
              Your submitted information is stored securely and only accessible to the Coréal Media
              team. We retain your contact information for as long as necessary to fulfill the
              purpose for which it was collected or as required by law.
            </p>
          </section>

          <section>
            <h2 className="font-display text-display-md text-text-primary mb-4">Your Rights</h2>
            <p className="font-body text-body-md text-text-secondary leading-[1.7] mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                'Request access to the personal information we hold about you',
                'Request that we correct any inaccurate information',
                'Request that we delete your information',
                'Withdraw consent for us to contact you at any time',
              ].map(item => (
                <li key={item} className="flex items-start gap-3 font-body text-body-md text-text-secondary">
                  <span className="text-accent mt-1.5 shrink-0" style={{ fontSize: '0.375rem' }}>●</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-body text-body-md text-text-secondary leading-[1.7] mt-4">
              To exercise any of these rights, email us at{' '}
              <a
                href="mailto:hello@corealmedia.com"
                className="text-accent hover:underline"
              >
                hello@corealmedia.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-display-md text-text-primary mb-4">Contact</h2>
            <p className="font-body text-body-md text-text-secondary leading-[1.7]">
              If you have any questions about this privacy policy, please contact us at{' '}
              <a
                href="mailto:hello@corealmedia.com"
                className="text-accent hover:underline"
              >
                hello@corealmedia.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display text-display-md text-text-primary mb-4">
              Changes to This Policy
            </h2>
            <p className="font-body text-body-md text-text-secondary leading-[1.7]">
              We may update this privacy policy from time to time. Any changes will be posted on
              this page with an updated date. Continued use of the website after changes are posted
              constitutes your acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
