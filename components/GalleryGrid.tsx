'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import { X } from 'lucide-react'
import { useState } from 'react'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

interface GalleryGridProps {
  images?: GalleryImage[]
  className?: string
}

export default function GalleryGrid({
  images = [
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', alt: 'Pasta plated with herbs', width: 800, height: 1000 },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', alt: 'Italian table setting', width: 1200, height: 800 },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', alt: 'Chef preparing fresh ingredients', width: 800, height: 900 },
    { src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', alt: 'Cozy dining interior', width: 900, height: 700 },
  ],
  className = '',
}: Partial<GalleryGridProps>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section className={cn('space-y-4', className)}>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, idx) => (
          <button key={img.src + idx} className="mb-4 block w-full overflow-hidden rounded-xl" onClick={() => setActiveIndex(idx)}>
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-auto w-full rounded-xl object-cover transition-transform duration-300 hover:scale-[1.02]"
              unoptimized
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <button aria-label="Close image preview" className="absolute right-4 top-4 rounded-full bg-white p-2" onClick={() => setActiveIndex(null)}>
            <X className="h-5 w-5" />
          </button>
          <Image
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            width={1400}
            height={1000}
            className="max-h-[90vh] w-auto rounded-lg object-contain"
            unoptimized
          />
        </div>
      )}
    </section>
  )
}
