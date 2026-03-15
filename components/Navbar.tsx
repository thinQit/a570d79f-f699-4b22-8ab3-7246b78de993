'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { useState } from 'react'

interface NavbarProps {
  logoText?: string
  links?: { label: string; href: string }[]
  reserveHref?: string
  className?: string
}

export default function Navbar({
  logoText = 'Margarita',
  links = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  reserveHref = '/contact#reservation-form',
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 border-b bg-[rgba(254,250,224,0.92)] backdrop-blur', className)}>
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="font-serif text-2xl font-semibold text-[#722F37]">
          {logoText}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-sm font-medium text-foreground transition-colors hover:text-[#722F37]">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild className="rounded-lg bg-[#722F37] text-[#FEFAE0] hover:bg-[#5f272e]">
            <Link href={reserveHref}>Reserve</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-[#722F37] md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Menu size={22} />
        </button>
      </nav>

      {open && (
        <div className="border-t bg-[rgba(254,250,224,0.98)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm font-medium text-foreground" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full rounded-lg bg-[#722F37] text-[#FEFAE0] hover:bg-[#5f272e]">
              <Link href={reserveHref} onClick={() => setOpen(false)}>
                Reserve
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
