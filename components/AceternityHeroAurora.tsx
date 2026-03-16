'use client'

import Link from 'next/link'
import Image from 'next/image'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'
import { Button } from '@/components/ui/button'

interface AceternityHeroAuroraProps {
  headline?: string
  subheadline?: string
  imageSrc?: string
}

export default function AceternityHeroAurora({
  headline = 'Classic Italian Flavors, Served with Heart',
  subheadline = 'At Margarita, every plate is rooted in tradition—fresh pasta, slow-simmered sauces, and warm hospitality in an elegant rustic setting.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/11236793.jpg',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <AuroraBackground className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#722F37]/35" />
      <section className="relative mx-auto grid min-h-[82vh] max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6">
        <div className="text-[#FEFAE0]">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#DDA15E]">Traditional Italian Restaurant</p>
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl">{headline}</h1>
          <div className="mt-5 max-w-xl">
            <TextGenerateEffect words={subheadline} />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-[#DDA15E] text-[#722F37] hover:bg-[#c79054]">
              <Link href="/contact#reservation">Reserve a Table</Link>
            </Button>
            <Button asChild className="border border-[#DDA15E] bg-[#606C38] text-[#FEFAE0] hover:bg-[#4e5830]">
              <Link href="/menu">Explore Menu</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-xl border border-[#DDA15E]/40 bg-[#FEFAE0]/10 p-3 backdrop-blur">
          <Image
            src={imageSrc}
            alt="Signature Italian dining"
            width={1200}
            height={800}
            unoptimized
            className="h-[420px] w-full rounded-lg object-cover"
          />
        </div>
      </section>
    </AuroraBackground>
  )
}
