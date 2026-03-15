"use client";

import Image from 'next/image'
import { cn } from '@/lib/utils'
import MenuItemRow from '@/components/MenuItemRow'

interface MenuItem {
  name: string
  description: string
  price: string
  badges?: string[]
}

interface MenuCategoryProps {
  title?: string
  imageSrc?: string
  items?: MenuItem[]
  className?: string
}

export default function MenuCategory({
  title = 'Pasta',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
  items = [
    { name: 'Pappardelle al Ragù', description: 'Slow-braised beef ragù, rosemary, aged pecorino.', price: '$22' },
    { name: 'Cacio e Pepe', description: 'Roman classic with pecorino romano and black pepper.', price: '$19', badges: ['Vegetarian'] },
    { name: 'Seafood Linguine', description: 'Mussels, clams, shrimp, garlic white wine sauce.', price: '$26' },
  ],
  className = '',
}: Partial<MenuCategoryProps>) {
  return (
    <section className={cn('overflow-hidden rounded-xl border bg-card shadow-sm', className)}>
      <div className="relative h-52 w-full">
        <Image src={imageSrc} alt={title} fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.58)] to-transparent" />
        <h3 className="absolute bottom-4 left-4 font-serif text-3xl font-semibold text-[#FEFAE0]">{title}</h3>
      </div>
      <div className="p-5">
        {items.map((item) => (
          <MenuItemRow
            key={item.name}
            name={item.name}
            description={item.description}
            price={item.price}
            badges={item.badges || []}
          />
        ))}
      </div>
    </section>
  )
}
