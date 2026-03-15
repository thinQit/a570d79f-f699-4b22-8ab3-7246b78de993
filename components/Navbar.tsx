'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText?: string
  links?: { label: string; href: string }[]
  reserveLabel?: string
  reserveHref?: string
}

export default function Navbar({
  logoText = 'Margarita',
  links = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  reserveLabel = 'Reserve',
  reserveHref = '/contact#reservation',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[#DDA15E]/30 bg-[#FEFAE0]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-serif text-2xl font-bold text-[#722F37]">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[#606C38] hover:text-[#722F37]">
              {link.label}
            </Link>
          ))}
          <Button asChild className="bg-[#722F37] text-white hover:bg-[#5e252d]">
            <Link href={reserveHref}>{reserveLabel}</Link>
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[#722F37]"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div className={cn('border-t border-[#DDA15E]/30 bg-[#FEFAE0] md:hidden', open ? 'block' : 'hidden')}>
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 p-4">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-[#606C38] hover:bg-[#DDA15E]/15" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-2 bg-[#722F37] text-white hover:bg-[#5e252d]">
            <Link href={reserveHref} onClick={() => setOpen(false)}>
              {reserveLabel}
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
