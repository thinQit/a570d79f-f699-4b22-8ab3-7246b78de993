"use client";

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface FeaturedDishCardProps {
  name?: string
  description?: string
  price?: string
  imageSrc?: string
  tags?: string[]
  className?: string
}

export default function FeaturedDishCard({
  name = 'Truffle Tagliatelle',
  description = 'Fresh house-made tagliatelle with black truffle cream, Parmigiano Reggiano, and cracked pepper.',
  price = '$24',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  tags = ['Vegetarian', 'Signature'],
  className = '',
}: Partial<FeaturedDishCardProps>) {
  return (
    <Card className={cn('overflow-hidden rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md', className)}>
      <div className="relative h-52 w-full">
        <Image src={imageSrc} alt={name} fill className="object-cover" unoptimized />
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-xl font-semibold text-[#722F37]">{name}</h3>
          <span className="text-base font-semibold text-[#606C38]">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-[#FEFAE0] text-[#722F37] hover:bg-[#f8f2d4]">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  )
}
