"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-background text-foreground px-4">
      <h2 className="text-2xl font-semibold">Something went wrong.</h2>
      <button
        onClick={() => reset()}
        className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
      >
        Try again
      </button>
    </div>
  );
}
