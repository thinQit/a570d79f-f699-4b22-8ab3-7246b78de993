"use client";

import Link from 'next/link'
import { PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ReservationCTAProps {
  headline?: string
  hoursSummary?: string
  phone?: string
}

export default function ReservationCTA({
  headline = 'Reserve Your Table for Tonight',
  hoursSummary = 'Open daily · Lunch & Dinner · Private dining available on request',
  phone = '(212) 555-0147',
}: Partial<ReservationCTAProps>) {
  const ctaButtonClass = "bg-[#DDA15E] text-[#722F37] hover:bg-[#c79054] focus-visible:ring-2 focus-visible:ring-[#FEFAE0] focus-visible:ring-offset-2 focus-visible:ring-offset-[#722F37]"

  return (
    <section className="bg-[#722F37] py-16 text-[#FEFAE0]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center md:px-6">
        <div>
          <h3 className="font-serif text-3xl">{headline}</h3>
          <p className="mt-2 text-[#FEFAE0]/85">{hoursSummary}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild className={ctaButtonClass}>
            <Link href="/contact#reservation">Reserve Now</Link>
          </Button>
          <Button asChild className={ctaButtonClass}>
            <a href={'tel:' + phone.replace(/\D/g, '')}><PhoneCall className="mr-2 h-4 w-4" />Call {phone}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
