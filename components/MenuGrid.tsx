"use client";

import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface MenuGridProps {
  categories?: { name: string; description: string; imageSrc: string; href: string }[]
}

export default function MenuGrid({
  categories = [
    { name: 'Pasta', description: 'Fresh handmade classics', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg', href: '/menu#pasta' },
    { name: 'Pizza', description: 'Wood-fired and rustic', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577099/site-images/restaurant/10445929.jpg', href: '/menu#pizza' },
    { name: 'Secondi', description: 'Hearty main courses', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/1080383.jpg', href: '/menu#secondi' },
  ],
}: Partial<MenuGridProps>) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <Card key={cat.name} className="overflow-hidden rounded-xl border-[#DDA15E]/30">
              <Image src={cat.imageSrc} alt={cat.name} width={1200} height={800} unoptimized className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-serif text-2xl text-[#722F37]">{cat.name}</h3>
                <p className="mt-2 text-[#606C38]">{cat.description}</p>
                <Button asChild variant="link" className="mt-2 px-0 text-[#722F37]">
                  <Link href={cat.href}>View dishes →</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
