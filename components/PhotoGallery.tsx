'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

interface PhotoGalleryProps {
  images?: string[]
}

export default function PhotoGallery({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577089/site-images/restaurant/10187182.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577070/site-images/restaurant/10636732.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577102/site-images/restaurant/12387873.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577067/site-images/restaurant/11689798.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577053/site-images/restaurant/1253122.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577097/site-images/restaurant/12008097.jpg',
  ],
}: Partial<PhotoGalleryProps>) {
  const [active, setActive] = useState<string>('')

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((src, idx) => (
            <button key={src + idx} onClick={() => setActive(src)} className="overflow-hidden rounded-lg border border-[#DDA15E]/30">
              <Image src={src} alt={'Gallery image ' + (idx + 1)} width={1200} height={800} unoptimized className="h-48 w-full object-cover transition hover:scale-105 md:h-64" />
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button onClick={() => setActive('')} className="absolute right-4 top-4 text-white"><X /></button>
          <Image src={active} alt="Expanded gallery image" width={1400} height={900} unoptimized className="max-h-[85vh] w-auto rounded-lg object-contain" />
        </div>
      ) : null}
    </section>
  )
}
