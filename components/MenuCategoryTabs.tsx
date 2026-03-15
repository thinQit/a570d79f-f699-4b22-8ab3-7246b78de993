'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface MenuCategoryTabsProps {
  categories?: { id: string; label: string }[]
}

export default function MenuCategoryTabs({
  categories = [
    { id: 'antipasti', label: 'Antipasti' },
    { id: 'pasta', label: 'Pasta' },
    { id: 'pizza', label: 'Pizza' },
    { id: 'secondi', label: 'Secondi' },
    { id: 'dolci', label: 'Dolci' },
  ],
}: Partial<MenuCategoryTabsProps>) {
  const [active, setActive] = useState(categories[0]?.id || 'antipasti')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      setActive(window.location.hash.replace('#', ''))
    }
  }, [])

  const goTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', '#' + id)
      setActive(id)
    }
  }

  return (
    <div className="sticky top-16 z-30 border-y border-[#DDA15E]/25 bg-[#FEFAE0]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 md:px-6">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => goTo(cat.id)}
            className={cn(
              'rounded-full px-4 py-2 text-sm transition',
              active === cat.id ? 'bg-[#722F37] text-white' : 'bg-[#DDA15E]/15 text-[#606C38] hover:bg-[#DDA15E]/25'
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}
