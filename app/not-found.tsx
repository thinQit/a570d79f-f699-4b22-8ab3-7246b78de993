import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-background text-foreground px-4">
      <h2 className="text-3xl font-semibold">Page not found</h2>
      <p className="text-muted-foreground">Let’s get you back to something delicious.</p>
      <Link
        href="/"
        className="bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium transition-all duration-200 hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
