'use client'

import { Card } from '@/components/ui/card'
import { Leaf, WheatOff, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MenuItemCardProps {
  name?: string
  description?: string
  price?: string
  tags?: string[]
  className?: string
}

const iconForTag = (tag: string) => {
  const value = tag.toLowerCase()
  if (value.includes('vegetarian')) return <Leaf className="h-3.5 w-3.5" />
  if (value.includes('gluten')) return <WheatOff className="h-3.5 w-3.5" />
  return <Flame className="h-3.5 w-3.5" />
}

export default function MenuItemCard({
  name = 'Pappardelle al Ragù',
  description = 'Fresh ribbon pasta with slow-braised beef ragù, Parmigiano Reggiano, and herbs.',
  price = '$24',
  tags = ['Chef Special', 'Contains Gluten'],
  className = '',
}: Partial<MenuItemCardProps>) {
  return (
    <Card className={cn('rounded-xl border-[#DDA15E]/30 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg', className)}>
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl text-[#722F37]">{name}</h3>
        <span className="text-lg font-semibold text-[#0ea5e9]">{price}</span>
      </div>
      <p className="mt-3 text-sm text-[#606C38]">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-full border border-[#DDA15E]/50 bg-[#FEFAE0] px-3 py-1 text-xs text-[#722F37]"
          >
            {iconForTag(tag)}
            {tag}
          </span>
        ))}
      </div>
    </Card>
  )
}
