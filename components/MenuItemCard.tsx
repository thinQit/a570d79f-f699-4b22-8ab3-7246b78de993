"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
  imageSrc?: string
  dietary?: string[]
}

export default function MenuItemCard({
  name = 'Pappardelle al Ragù',
  description = 'Housemade ribbon pasta with slow-braised beef ragù, pecorino, and herbs.',
  price = '$24',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577054/site-images/restaurant/10207592.jpg',
  dietary = ['Chef Favorite'],
}: Partial<MenuItemCardProps>) {
  return (
    <Card className="group overflow-hidden rounded-xl border-[#DDA15E]/30 bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        <Image src={imageSrc} alt={name} width={1200} height={800} unoptimized className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-semibold text-[#722F37]">{name}</h3>
          <span className="font-semibold text-[#606C38]">{price}</span>
        </div>
        <p className="mt-2 text-sm text-[#606C38]">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {dietary.map((chip, idx) => (
            <span key={chip + idx} className="rounded-full bg-[#DDA15E]/20 px-3 py-1 text-xs text-[#722F37]">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </Card>
  )
}
