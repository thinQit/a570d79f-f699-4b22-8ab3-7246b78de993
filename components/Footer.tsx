"use client";

import Link from 'next/link'
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FooterProps {
  restaurantName?: string
  address?: string
  phone?: string
  hours?: string
}

export default function Footer({
  restaurantName = 'Margarita',
  address = '128 Via Roma, Little Italy, NY 10013',
  phone = '(212) 555-0147',
  hours = 'Mon–Thu 4:00 PM–10:00 PM · Fri–Sun 12:00 PM–11:00 PM',
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-[#DDA15E]/30 bg-[#722F37] text-[#FEFAE0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-2xl font-bold">{restaurantName}</h3>
          <p className="mt-3 text-sm text-[#FEFAE0]/85">Traditional Italian dining with handmade pasta, wood-fired classics, and old-world hospitality.</p>
        </div>
        <div>
          <h4 className="font-semibold">Visit</h4>
          <p className="mt-3 flex items-start gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4" />{address}</p>
          <p className="mt-2 flex items-center gap-2 text-sm"><Phone className="h-4 w-4" />{phone}</p>
          <p className="mt-2 flex items-start gap-2 text-sm"><Clock className="mt-0.5 h-4 w-4" />{hours}</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Reserve Your Table</h4>
          <p className="mt-3 text-sm text-[#FEFAE0]/85">Book ahead for family dinners and special nights.</p>
          <Button asChild className="mt-4 w-full rounded-full bg-[#DDA15E] text-[#722F37] hover:bg-[#c79054]">
            <Link href="/contact#reservation">Reserve Now</Link>
          </Button>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
