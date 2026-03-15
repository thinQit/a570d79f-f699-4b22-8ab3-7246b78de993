"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Something went wrong</h2>
        <p className="text-muted-foreground">
          We’re sorry—an unexpected issue occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-lg px-6 py-3 font-medium bg-primary text-primary-foreground transition-all duration-200 hover:scale-105"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
