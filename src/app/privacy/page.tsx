import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | Ishika Jaiswal',
  description: 'Privacy policy for Ishika Jaiswal personal portfolio website.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-muted-foreground mt-2">
          Last updated: September 30, 2026
        </p>

        <div className="mt-8 space-y-6 text-sm text-foreground/90 leading-relaxed">
          <div className="rounded-md border border-border bg-card p-4 text-xs text-muted-foreground">
            <strong>Legal Notice:</strong> This website owner is not a lawyer. This privacy policy is written in plain language for a personal portfolio site focusing on cybersecurity and data analytics and should be reviewed by legal counsel before launch.
          </div>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">1. Overview</h2>
            <p className="text-muted-foreground">
              This website is the personal portfolio of Ishika Jaiswal, showcasing projects and credentials in cybersecurity and data analytics.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">2. Information Collection</h2>
            <p className="text-muted-foreground">
              This site is hosted as a static application. It does not use contact forms, cookies, tracking scripts, or third-party analytics services. No personal information is collected, stored, or processed when visiting this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">3. External Links</h2>
            <p className="text-muted-foreground">
              This site includes links to external platforms such as GitHub and LinkedIn. Visiting those external websites is subject to the privacy terms of those individual services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">4. Privacy Contact Method</h2>
            <p className="text-muted-foreground">
              For questions regarding this privacy statement, connect via LinkedIn at{' '}
              <a
                href="https://linkedin.com/in/jaiswalishika"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-foreground"
              >
                linkedin.com/in/jaiswalishika
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
