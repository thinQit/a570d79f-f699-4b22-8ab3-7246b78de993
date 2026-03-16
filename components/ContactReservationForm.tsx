'use client'

import * as React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ContactReservationFormProps {
  className?: string
}

export default function ContactReservationForm({ className = '' }: Partial<ContactReservationFormProps>) {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
    message: '',
  })
  const [status, setStatus] = React.useState('')

  const onChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.date || !form.guests) {
      setStatus('Please complete required fields.')
      return
    }
    try {
      const res = await fetch('/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'Request sent successfully.' : 'Unable to submit request.')
    } catch {
      setStatus('Network error. Please try again.')
    }
  }

  return (
    <section id="reserve" className={cn('bg-[#FEFAE0] py-20', className)}>
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="font-serif text-4xl text-[#722F37]">Reservations & Inquiries</h2>
        <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-xl border border-[#DDA15E]/40 bg-white p-6">
          <Input placeholder="Full name *" value={form.name} onChange={(e) => onChange('name', e.target.value)} />
          <Input placeholder="Email *" type="email" value={form.email} onChange={(e) => onChange('email', e.target.value)} />
          <Input placeholder="Phone" value={form.phone} onChange={(e) => onChange('phone', e.target.value)} />
          <div className="grid gap-4 md:grid-cols-2">
            <Input type="date" value={form.date} onChange={(e) => onChange('date', e.target.value)} />
            <Input placeholder="Guests *" type="number" min={1} value={form.guests} onChange={(e) => onChange('guests', e.target.value)} />
          </div>
          <textarea
            placeholder="Tell us about your occasion..."
            value={form.message}
            onChange={(e) => onChange('message', e.target.value)}
            className="min-h-[110px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          />
          <Button type="submit" className="rounded-full bg-[#0ea5e9] px-6 text-white hover:bg-[#0ea5e9]/90">
            Submit Request
          </Button>
          {status ? <p className="text-sm text-[#606C38]">{status}</p> : null}
        </form>
      </div>
    </section>
  )
}
