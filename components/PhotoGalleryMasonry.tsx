'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'

interface GalleryImage {
  url: string
  alt: string
  caption?: string
}

interface PhotoGalleryMasonryProps {
  headline?: string
  subheadline?: string
  images?: Array<string | GalleryImage>
  captions?: string[]
  className?: string
}

const defaultImages: GalleryImage[] = [
  {
    url: 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771577084/site-images/restaurant/10918168.jpg',
    alt: 'Fresh pasta station',
    caption: 'Fresh pasta station',
  },
  {
    url: 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771577061/site-images/restaurant/10375821.jpg',
    alt: 'Signature antipasti',
    caption: 'Signature antipasti',
  },
  {
    url: 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771577071/site-images/restaurant/10135116.jpg',
    alt: 'Intimate dining room',
    caption: 'Intimate dining room',
  },
  {
    url: 'https://res.cloudinary.com/dwc294mzm/image/upload/v1771577086/site-images/restaurant/10520478.jpg',
    alt: 'Seasonal dessert menu',
    caption: 'Seasonal dessert menu',
  },
]

export default function PhotoGalleryMasonry({
  headline = 'Gallery',
  subheadline,
  images = defaultImages,
  captions = [],
  className = '',
}: Partial<PhotoGalleryMasonryProps>) {
  const normalizedImages: GalleryImage[] = (images.length ? images : defaultImages).map((item, index) => {
    if (typeof item === 'string') {
      const caption = captions[index]
      return {
        url: item,
        alt: caption || 'Restaurant gallery image',
        caption,
      }
    }
    return item
  })

  return (
    <section id="gallery" className={cn('bg-white py-20 md:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="font-serif text-4xl text-[#722F37]">{headline}</h2>
          {subheadline ? <p className="mt-3 text-base text-[#606C38]">{subheadline}</p> : null}
        </div>
        <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
          {normalizedImages.map((image, i) => (
            <div key={`${image.url}-${i}`} className="group relative overflow-hidden rounded-xl">
              <Image
                src={image.url}
                alt={image.alt}
                width={1200}
                height={800}
                className="w-full transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              {image.caption ? (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-sm text-white">{image.caption}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
