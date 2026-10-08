import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Ishika Jaiswal. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link
            href="/privacy"
            className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm transition-colors"
          >
            Terms and Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
