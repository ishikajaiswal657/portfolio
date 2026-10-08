import AnimatedSection from './AnimatedSection';

export default function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-border">
      <div className="max-w-2xl space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Get in touch
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Open to entry-level roles in cybersecurity and data analytics. Reach out on LinkedIn or see the code on GitHub.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://linkedin.com/in/jaiswalishika"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/ishikajaiswal657"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
