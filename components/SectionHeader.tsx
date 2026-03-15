"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTA {
  label: string
  href: string
}

interface SectionHeaderProps {
  headline?: string
  subheadline?: string
  primaryCta?: CTA
  secondaryCta?: CTA
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  headline = 'Our Story in Every Plate',
  subheadline = 'Crafted with traditional techniques, imported Italian staples, and local seasonal produce.',
  primaryCta,
  secondaryCta,
  centered = true,
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('space-y-4', centered ? 'text-center' : 'text-left', className)}>
      <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#722F37] md:text-4xl">{headline}</h2>
      <p className={cn('text-base text-muted-foreground md:text-lg', centered ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>{subheadline}</p>
      {(primaryCta || secondaryCta) && (
        <div className={cn('flex flex-wrap gap-3', centered ? 'justify-center' : 'justify-start')}>
          {primaryCta && (
            <Button asChild className="rounded-lg bg-[#722F37] text-[#FEFAE0] hover:bg-[#5f272e]">
              <Link href={primaryCta.href}>{primaryCta.label}</Link>
            </Button>
          )}
          {secondaryCta && (
            <Button asChild variant="outline" className="rounded-lg border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-[#FEFAE0]">
              <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
