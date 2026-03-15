"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  headline?: string
  subheadline?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  className?: string
}

export default function CTASection({
  headline = 'Bring Italy to Your Next Evening',
  subheadline = 'Reserve your table today and enjoy handcrafted dishes, welcoming service, and a cozy atmosphere.',
  primaryLabel = 'Book a Table',
  primaryHref = '#reservation',
  secondaryLabel = 'Explore Menu',
  secondaryHref = '#menu',
  className = '',
}: Partial<CTASectionProps>) {
  return (
    <section className={cn('rounded-2xl bg-[#722F37] px-6 py-12 text-[#FEFAE0] md:px-10 md:py-14', className)}>
      <div className="mx-auto max-w-4xl text-center">
        <h3 className="font-serif text-3xl font-semibold md:text-4xl">{headline}</h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-[#f4e6c1] md:text-base">{subheadline}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button className="rounded-lg bg-[#DDA15E] text-[#2f1d1f] hover:bg-[#c88a46]">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button variant="outline" className="rounded-lg border-[#FEFAE0] text-[#FEFAE0] hover:bg-[#FEFAE0] hover:text-[#722F37]">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
