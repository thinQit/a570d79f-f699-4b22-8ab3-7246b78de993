'use client'

import Image from 'next/image'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'
import { cn } from '@/lib/utils'
import PrimaryButton from '@/components/PrimaryButton'

interface AceternityHeroAuroraProps {
  title?: string
  subtitle?: string
  imageSrc?: string
  reserveHref?: string
  menuHref?: string
  className?: string
}

export default function AceternityHeroAurora({
  title = 'Italian Traditions, Elevated for Today',
  subtitle = 'Handmade pasta, wood-fired classics, and cellar-selected wines in a warm, sophisticated setting.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577101/site-images/restaurant/11123392.jpg',
  reserveHref = '#reserve',
  menuHref = '#menu',
  className = '',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <section id="home" className={cn('relative overflow-hidden', className)}>
      <AuroraBackground className="min-h-[88vh]">
        <div className="absolute inset-0">
          <Image src={imageSrc} alt="Italian fine dining spread" fill className="object-cover opacity-30" unoptimized />
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-4 py-24 md:px-6 md:py-32">
          <p className="mb-4 rounded-full border border-[#DDA15E]/50 bg-[#722F37]/40 px-4 py-1 text-xs uppercase tracking-widest text-[#FEFAE0]">
            Trattoria Aurora
          </p>
          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-white md:text-6xl">
            <TextGenerateEffect words={title} />
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 md:text-lg">{subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <PrimaryButton label="Reserve" href={reserveHref} />
            <PrimaryButton label="Explore Menu" href={menuHref} />
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}
