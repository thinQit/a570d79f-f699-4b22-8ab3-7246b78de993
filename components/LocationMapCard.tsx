"use client";

import { MapPin, TrainFront, Car } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import PrimaryButton from '@/components/PrimaryButton'

interface LocationMapCardProps {
  mapEmbedUrl?: string
  address?: string
  hours?: string
  transitInfo?: string
  parkingInfo?: string
  className?: string
}

export default function LocationMapCard({
  mapEmbedUrl = 'https://www.google.com/maps?q=New+York+NY+10012&output=embed',
  address = '245 Via Roma, Downtown District, NY 10012',
  hours = 'Mon–Sun: Evening service from 4:30 PM',
  transitInfo = '2 min walk from Spring St Station.',
  parkingInfo = 'Valet available after 6 PM. Public garage on Mercer St.',
  className = '',
}: Partial<LocationMapCardProps>) {
  return (
    <section id="contact" className={cn('bg-white py-20 md:py-28', className)}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <Card className="overflow-hidden rounded-xl border-[#DDA15E]/40 p-0">
          <iframe title="Restaurant Map" src={mapEmbedUrl} className="h-[360px] w-full border-0" loading="lazy" />
        </Card>
        <Card className="rounded-xl border-[#DDA15E]/40 p-6">
          <h3 className="font-serif text-3xl text-[#722F37]">Find Us</h3>
          <p className="mt-4 flex items-start gap-2 text-[#606C38]"><MapPin className="mt-0.5 h-5 w-5" /> {address}</p>
          <p className="mt-3 text-[#606C38]">{hours}</p>
          <p className="mt-4 flex items-start gap-2 text-sm text-[#606C38]"><TrainFront className="mt-0.5 h-4 w-4" /> {transitInfo}</p>
          <p className="mt-2 flex items-start gap-2 text-sm text-[#606C38]"><Car className="mt-0.5 h-4 w-4" /> {parkingInfo}</p>
          <div className="mt-8">
            <PrimaryButton label="Get Directions" href="https://maps.google.com" />
          </div>
        </Card>
      </div>
    </section>
  )
}
