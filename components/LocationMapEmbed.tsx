"use client";

import { MapPin, Car, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LocationMapEmbedProps {
  address?: string
  hours?: string
  parkingNote?: string
  mapSrc?: string
}

export default function LocationMapEmbed({
  address = 'Palam, New Delhi, India',
  hours = 'Mon–Thu 4:00 PM–10:00 PM · Fri–Sun 12:00 PM–11:00 PM',
  parkingNote = 'Street parking nearby and valet available Friday to Sunday.',
  mapSrc = 'https://www.google.com/maps?q=Palam%2C%20New%20Delhi%2C%20India&output=embed',
}: Partial<LocationMapEmbedProps>) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <iframe title="Margarita location map" src={mapSrc} className="h-[380px] w-full rounded-xl border border-[#DDA15E]/30" loading="lazy" />
        <div>
          <h3 className="font-serif text-4xl text-[#722F37]">Find Margarita</h3>
          <p className="mt-4 flex items-start gap-2 text-[#606C38]"><MapPin className="mt-1 h-4 w-4" />{address}</p>
          <p className="mt-3 flex items-start gap-2 text-[#606C38]"><Clock className="mt-1 h-4 w-4" />{hours}</p>
          <p className="mt-3 flex items-start gap-2 text-[#606C38]"><Car className="mt-1 h-4 w-4" />{parkingNote}</p>
          <Button asChild className="mt-6 bg-[#722F37] text-white hover:bg-[#5e252d]">
            <a href="https://maps.google.com/?q=Palam%2C%20New%20Delhi%2C%20India" target="_blank" rel="noreferrer">Get Directions</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
