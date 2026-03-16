'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps {
  label?: string
  href?: string
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function PrimaryButton({
  label = 'Reserve',
  href = '',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: Partial<PrimaryButtonProps>) {
  const classes = cn(
    'rounded-full px-6 py-3 font-medium transition-all duration-300 hover:scale-105',
    'bg-primary hover:bg-primary/90 text-primary-foreground',
    className
  )

  if (href) {
    return (
      <Button asChild className={classes} disabled={disabled}>
        <a href={href}>{label}</a>
      </Button>
    )
  }

  return (
    <Button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {label}
    </Button>
  )
}
