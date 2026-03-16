"use client";

import { ShieldCheck, Clock10 } from 'lucide-react'
import { cn } from '@/lib/utils'
import PrimaryButton from '@/components/PrimaryButton'

interface ReservationCTAProps {
  title?: string
  details?: string
  policy?: string
  buttonHref?: string
  className?: string
}

export default function ReservationCTA({
  title = 'Reserve Your Table Tonight',
  details = 'Secure your preferred time for dinner service and special occasions.',
  policy = 'Reservations held for 15 minutes. Cancellations accepted up to 4 hours prior.',
  buttonHref = '#reserve',
  className = '',
}: Partial<ReservationCTAProps>) {
  return (
    <section className={cn('bg-[#722F37] py-20 md:py-24', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl border border-[#DDA15E]/50 bg-[#722F37] p-8 text-[#FEFAE0] md:p-10">
          <h2 className="font-serif text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-[#FEFAE0]/90">{details}</p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-[#FEFAE0]/85">
            <p className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> {policy}</p>
            <p className="flex items-center gap-2"><Clock10 className="h-4 w-4" /> Last seating at 9:45 PM on weekdays.</p>
          </div>
          <div className="mt-8">
            <PrimaryButton label="Reserve" href={buttonHref} />
          </div>
        </div>
      </div>
    </section>
  )
}
