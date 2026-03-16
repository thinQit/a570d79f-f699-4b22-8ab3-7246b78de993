"use client";

import { Facebook, Instagram, MapPin, Clock3 } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FooterProps {
  restaurantName?: string
  address?: string
  hours?: string[]
  quickLinks?: { label: string; href: string }[]
  className?: string
}

export default function Footer({
  restaurantName = 'Trattoria Aurora',
  address = '245 Via Roma, Downtown District, NY 10012',
  hours = ['Mon–Thu: 5:00 PM – 10:00 PM', 'Fri–Sat: 4:30 PM – 11:00 PM', 'Sun: 4:30 PM – 9:30 PM'],
  quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('bg-primary text-primary-foreground', className)}>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-3 md:px-6">
        <div>
          <h3 className="font-serif text-2xl font-bold">{restaurantName}</h3>
          <p className="mt-4 text-sm text-primary-foreground/90">Seasonal Italian cooking in a warm, modern osteria.</p>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Visit</h4>
          <p className="flex items-start gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4" /> {address}</p>
          <div className="mt-4">
            <p className="mb-2 flex items-center gap-2 text-sm"><Clock3 className="h-4 w-4" /> Hours</p>
            <ul className="space-y-1 text-sm text-primary-foreground/90">
              {hours.map((line) => <li key={line}>{line}</li>)}
            </ul>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-primary-foreground/90 hover:text-white">{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            <a href="https://instagram.com/osteriaborgo" className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
