import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-6xl sm:text-8xl font-semibold tracking-tight text-foreground">
        404
      </h1>
      <p className="text-xl sm:text-2xl font-medium text-foreground mt-4">
        Page not found
      </p>
      <p className="text-sm text-muted-foreground mt-2 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Return Home
      </Link>
    </div>
  );
}
