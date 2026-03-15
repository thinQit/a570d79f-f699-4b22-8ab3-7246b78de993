"use client";

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  quote?: string
  name?: string
  title?: string
  rating?: number
  className?: string
}

export default function TestimonialCard({
  quote = 'Every dish tasted like it came straight from a family kitchen in Tuscany. Warm service and unforgettable flavors.',
  name = 'Elena Rossi',
  title = 'Local Food Critic',
  rating = 5,
  className = '',
}: Partial<TestimonialCardProps>) {
  return (
    <Card className={cn('rounded-xl border bg-card p-6 shadow-sm', className)}>
      <div className="mb-4 flex items-center gap-1 text-[#DDA15E]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={cn('h-4 w-4', i < rating ? 'fill-current' : 'text-muted')} />
        ))}
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">“{quote}”</p>
      <div className="mt-5 flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-[#722F37] text-[#FEFAE0]">{name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{title}</p>
        </div>
      </div>
    </Card>
  )
}
