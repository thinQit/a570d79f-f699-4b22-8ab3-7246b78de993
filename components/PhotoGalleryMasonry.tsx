'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface PhotoGalleryMasonryProps {
  images?: string[]
  captions?: string[]
  className?: string
}

export default function PhotoGalleryMasonry({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/10375821.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577099/site-images/restaurant/10445929.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577051/site-images/restaurant/12802124.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577071/site-images/restaurant/10918163.jpg',
  ],
  captions = ['Fresh pasta station', 'Signature antipasti', 'Intimate dining room', 'Seasonal dessert menu'],
  className = '',
}: Partial<PhotoGalleryMasonryProps>) {
  return (
    <section id="gallery" className={cn('bg-white py-20 md:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 font-serif text-4xl text-[#722F37]">Gallery</h2>
        <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <div key={src + i} className="group relative overflow-hidden rounded-xl">
              <Image
                src={src}
                alt={captions[i] || 'Restaurant gallery image'}
                width={1200}
                height={800}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm text-white">{captions[i] || 'Trattoria Aurora moment'}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
