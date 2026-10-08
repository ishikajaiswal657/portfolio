import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms and Conditions | Ishika Jaiswal',
  description: 'Terms and conditions for Ishika Jaiswal personal portfolio website.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto min-h-screen">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
          Terms and Conditions
        </h1>
        <p className="text-xs text-muted-foreground mt-2">
          Last updated: September 30, 2026
        </p>

        <div className="mt-8 space-y-6 text-sm text-foreground/90 leading-relaxed">
          <div className="rounded-md border border-border bg-card p-4 text-xs text-muted-foreground">
            <strong>Legal Notice:</strong> This website owner is not a lawyer. These terms are written in plain language for a personal portfolio site focusing on cybersecurity and data analytics and should be reviewed by legal counsel before launch.
          </div>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using this portfolio website, you agree to comply with these terms. If you do not agree, please discontinue use of the site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">2. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All project summaries, text content, and site design elements represent personal work in cybersecurity and data analytics by Ishika Jaiswal. Code samples referenced on GitHub remain governed by their respective open-source licenses.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">3. Disclaimer of Warranty</h2>
            <p className="text-muted-foreground">
              This portfolio is provided for informational and showcase purposes on an as-is basis without warranties of any kind.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">4. Contact Method</h2>
            <p className="text-muted-foreground">
              For questions regarding these terms, reach out via LinkedIn at{' '}
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
