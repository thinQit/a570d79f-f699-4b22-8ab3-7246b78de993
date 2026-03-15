"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#722F37]">Something went wrong</h1>
      <p className="mt-3 max-w-xl text-base md:text-lg text-[#5B5B5B]">
        We’re sorry—an unexpected error occurred while loading this page.
      </p>
      <Button onClick={reset} className="mt-6 bg-[#722F37] text-[#FEFAE0] hover:bg-[#5c262d]">
        Try again
      </Button>
    </main>
  )
}
