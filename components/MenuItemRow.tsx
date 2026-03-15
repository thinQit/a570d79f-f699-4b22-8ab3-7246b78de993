"use client";

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface MenuItemRowProps {
  name?: string
  description?: string
  price?: string
  badges?: string[]
  className?: string
}

export default function MenuItemRow({
  name = 'Margherita Pizza',
  description = 'San Marzano tomato sauce, fresh mozzarella, basil, extra virgin olive oil.',
  price = '$18',
  badges = [],
  className = '',
}: Partial<MenuItemRowProps>) {
  return (
    <div className={cn('flex items-start justify-between gap-4 border-b border-border py-4', className)}>
      <div className="space-y-2">
        <h4 className="font-medium text-foreground">{name}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="bg-[#FEFAE0] text-[#722F37]">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <span className="whitespace-nowrap font-semibold text-[#606C38]">{price}</span>
    </div>
  )
}
