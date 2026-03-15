"use client";

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'

interface FooterProps {
  restaurantName?: string
  address?: string
  hours?: string[]
  quickLinks?: { label: string; href: string }[]
  className?: string
}

export default function Footer({
  restaurantName = 'Margarita',
  address = 'Via Roma 24, Little Italy, NY 10013',
  hours = ['Mon–Thu: 12:00 PM – 10:00 PM', 'Fri–Sat: 12:00 PM – 11:00 PM', 'Sun: 1:00 PM – 9:00 PM'],
  quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('bg-[#722F37] text-[#FEFAE0]', className)}>
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-serif text-2xl font-semibold">{restaurantName}</h3>
            <p className="mt-3 text-sm text-[#f8edd0]">Traditional Italian dining with family recipes, seasonal ingredients, and warm hospitality.</p>
          </div>

          <div>
            <h4 className="font-semibold">Address</h4>
            <p className="mt-3 flex items-start gap-2 text-sm text-[#f8edd0]">
              <MapPin className="mt-0.5 h-4 w-4" />
              {address}
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[#f8edd0]">
              <Phone className="h-4 w-4" /> (555) 123-4567
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Hours</h4>
            <ul className="mt-3 space-y-2 text-sm text-[#f8edd0]">
              {hours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#f8edd0] transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-3">
              <Link href="#" className="rounded-full bg-[#8c3f48] p-2 hover:bg-[#a74f5a]">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="rounded-full bg-[#8c3f48] p-2 hover:bg-[#a74f5a]">
                <Facebook className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-[#a45f67]" />
        <p className="text-center text-xs text-[#f3e6c6]">© {new Date().getFullYear()} {restaurantName}. All rights reserved.</p>
      </div>
    </footer>
  )
}
