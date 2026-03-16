'use client'

import * as React from 'react'
import { Menu, UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/utils'
import PrimaryButton from '@/components/PrimaryButton'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  links?: NavLink[]
  reserveHref?: string
  className?: string
}

export default function Navbar({
  logoText = 'Trattoria Aurora',
  links = [
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ],
  reserveHref = '#reserve',
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = React.useState(false)

  return (
    <header className={cn('sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur', className)}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center gap-2 text-primary">
          <UtensilsCrossed className="h-5 w-5" />
          <span className="font-serif text-xl font-bold">{logoText}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton label="Reserve" href={reserveHref} />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="h-10 w-10 p-0 flex items-center justify-center rounded-md text-primary md:hidden"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
                {link.label}
              </a>
            ))}
            <PrimaryButton label="Reserve" href={reserveHref} className="mt-2 w-fit" />
          </div>
        </div>
      )}
    </header>
  )
}
