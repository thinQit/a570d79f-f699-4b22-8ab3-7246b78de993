"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface SectionHeaderProps {
  eyebrow?: string
  headline?: string
  subheadline?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function SectionHeader({
  eyebrow = 'Discover',
  headline = 'Our Signature Selections',
  subheadline = 'From handmade pasta to wood-fired specialties, each dish is crafted with Italian tradition and seasonal ingredients.',
  ctaLabel = '',
  ctaHref = '/menu',
}: Partial<SectionHeaderProps>) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#DDA15E]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-bold text-[#722F37] md:text-5xl">{headline}</h2>
      <p className="mt-4 text-[#606C38]">{subheadline}</p>
      {ctaLabel ? (
        <div className="mt-6">
          <Button asChild className="bg-[#722F37] text-white hover:bg-[#5e252d]">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      ) : null}
    </div>
  )
}
