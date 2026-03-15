import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold">Page not found</h1>
        <p className="text-muted-foreground">
          This page seems to have left the table. Let’s get you back to dinner.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg px-6 py-3 font-medium bg-primary text-primary-foreground transition-all duration-200 hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
