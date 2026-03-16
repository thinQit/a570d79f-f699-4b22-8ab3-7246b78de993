'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface MenuCategoryTabsProps {
  categories?: string[]
  activeCategory?: string
  onCategoryChange?: (category: string) => void
  className?: string
}

export default function MenuCategoryTabs({
  categories = ['Antipasti', 'Pasta', 'Secondi', 'Dolci'],
  activeCategory = 'Antipasti',
  onCategoryChange,
  className = '',
}: Partial<MenuCategoryTabsProps>) {
  const [active, setActive] = React.useState(activeCategory)

  const handleTab = (category: string) => {
    setActive(category)
    onCategoryChange?.(category)
  }

  return (
    <div className={cn('flex flex-wrap gap-6 border-b border-[#DDA15E]/40', className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleTab(category)}
          className="relative pb-3 text-sm font-semibold uppercase tracking-wide text-[#606C38]"
        >
          <span className={cn(active === category && 'text-[#722F37]')}>{category}</span>
          <span
            className={cn(
              'absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-[#0ea5e9] transition-transform duration-300',
              active === category && 'scale-x-100'
            )}
          />
        </button>
      ))}
    </div>
  )
}
