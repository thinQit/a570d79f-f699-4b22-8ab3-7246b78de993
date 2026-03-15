"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  headline?: string
  subheadline?: string
  details?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  headline = 'Planning a Celebration?',
  subheadline = 'Host birthdays, anniversaries, and private dinners at Margarita.',
  details = 'Custom family-style menus available for groups of 10+.',
  primaryLabel = 'Book an Event',
  primaryHref = '/contact#reservation',
  secondaryLabel = 'View Menu',
  secondaryHref = '/menu',
}: Partial<CTASectionProps>) {
  return (
    <section className="bg-[#606C38] py-20 text-[#FEFAE0]">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h3 className="font-serif text-4xl">{headline}</h3>
        <p className="mt-4">{subheadline}</p>
        <p className="mt-2 text-[#FEFAE0]/85">{details}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-[#DDA15E] text-[#722F37] hover:bg-[#c79054]">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button asChild variant="outline" className="border-[#FEFAE0] text-[#FEFAE0] hover:bg-[#FEFAE0]/10">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
