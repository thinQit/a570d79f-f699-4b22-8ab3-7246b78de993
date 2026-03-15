"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroProps {
  imageSrc?: string
  headline?: string
  subheadline?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  className?: string
}

export default function Hero({
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  headline = 'Traditional Italian Dining at Margarita',
  subheadline = 'Step into a warm, rustic atmosphere and enjoy timeless family recipes made with authentic Italian ingredients.',
  primaryCtaLabel = 'View Menu',
  primaryCtaHref = '#menu',
  secondaryCtaLabel = 'Contact Us',
  secondaryCtaHref = '#contact',
  className = '',
}: Partial<HeroProps>) {
  return (
    <section id="home" className={cn('relative min-h-[75vh] overflow-hidden', className)}>
      <Image src={imageSrc} alt="Rustic Italian dining table at Margarita" fill priority className="object-cover" unoptimized />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(34,20,22,0.75)] via-[rgba(34,20,22,0.45)] to-[rgba(34,20,22,0.35)]" />

      <div className="relative mx-auto flex max-w-7xl items-center px-4 py-24 md:px-6 md:py-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-[#FEFAE0] md:text-6xl">{headline}</h1>
          <p className="text-base text-[#f8edd0] md:text-lg">{subheadline}</p>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-lg bg-[#DDA15E] text-[#2f1d1f] hover:bg-[#c88a46]">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button variant="outline" className="rounded-lg border-[#FEFAE0] text-[#FEFAE0] hover:bg-[#FEFAE0] hover:text-[#722F37]">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
