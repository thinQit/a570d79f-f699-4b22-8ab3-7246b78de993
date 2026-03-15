import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-semibold text-[#722F37]">404</h1>
      <p className="mt-3 text-base md:text-lg text-[#5B5B5B]">
        The page you’re looking for doesn’t exist.
      </p>
      <Button asChild className="mt-6 bg-[#722F37] text-[#FEFAE0] hover:bg-[#5c262d]">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  )
}
