"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ExternalLink } from 'lucide-react'

interface MapEmbedProps {
  heading?: string
  mapSrc?: string
  directionsUrl?: string
  className?: string
}

export default function MapEmbed({
  heading = 'Find Margarita',
  mapSrc = 'https://www.google.com/maps?q=Little+Italy+New+York&output=embed',
  directionsUrl = 'https://www.google.com/maps',
  className = '',
}: Partial<MapEmbedProps>) {
  return (
    <section className={cn('space-y-4', className)}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-serif text-3xl font-semibold text-[#722F37]">{heading}</h3>
        <Button variant="outline" className="rounded-lg border-[#722F37] text-[#722F37] hover:bg-[#722F37] hover:text-[#FEFAE0]">
          <Link href={directionsUrl} target="_blank" className="inline-flex items-center gap-2">
            Get Directions <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </div>
      <div className="aspect-[16/9] overflow-hidden rounded-xl border">
        <iframe title="Margarita Map" src={mapSrc} className="h-full w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </section>
  )
}
