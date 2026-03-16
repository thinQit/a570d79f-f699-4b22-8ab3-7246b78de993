"use client";

import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChefStorySplitProps {
  chefName?: string
  bio?: string
  imageSrc?: string
  highlights?: string[]
  className?: string
}

export default function ChefStorySplit({
  chefName = 'Chef Marco Bellini',
  bio = 'Raised in Bologna and trained across Florence and Milan, Chef Marco blends regional Italian techniques with seasonal local produce.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg',
  highlights = ['House-made pasta prepared daily', 'Olive oil and cheeses sourced from artisan partners', 'Seasonal menu refreshes every six weeks'],
  className = '',
}: Partial<ChefStorySplitProps>) {
  return (
    <section id="about" className={cn('bg-[#FEFAE0] py-20 md:py-28', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="relative overflow-hidden rounded-2xl">
          <Image src={imageSrc} alt={chefName} width={1200} height={800} className="h-full w-full object-cover" unoptimized />
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider text-[#0ea5e9]">Our Chef</p>
          <h2 className="mt-2 font-serif text-4xl text-[#722F37]">{chefName}</h2>
          <p className="mt-5 text-[#606C38]">{bio}</p>
          <ul className="mt-6 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2 text-[#606C38]">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#DDA15E]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
