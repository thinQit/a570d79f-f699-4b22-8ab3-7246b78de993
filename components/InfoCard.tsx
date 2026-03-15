"use client";

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Clock3, LucideIcon, MapPin, Phone, Utensils } from 'lucide-react'

interface InfoCardProps {
  iconName?: string
  title?: string
  content?: string
  className?: string
}

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  Phone,
  Clock3,
  Utensils,
}

export default function InfoCard({
  iconName = 'Clock3',
  title = 'Opening Hours',
  content = 'Mon–Thu: 12:00 PM – 10:00 PM\nFri–Sat: 12:00 PM – 11:00 PM\nSun: 1:00 PM – 9:00 PM',
  className = '',
}: Partial<InfoCardProps>) {
  const Icon = iconMap[iconName] || Utensils

  return (
    <Card className={cn('rounded-xl border bg-card p-5 shadow-sm', className)}>
      <div className="mb-3 inline-flex rounded-lg bg-[#FEFAE0] p-2 text-[#722F37]">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <p className="mt-2 whitespace-pre-line text-sm text-muted-foreground">{content}</p>
    </Card>
  )
}
