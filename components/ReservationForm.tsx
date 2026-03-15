'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ReservationFormProps {
  heading?: string
  className?: string
}

interface FormState {
  name: string
  email: string
  date: string
  time: string
  message: string
}

export default function ReservationForm({
  heading = 'Reserve a Table',
  className = '',
}: Partial<ReservationFormProps>) {
  const [form, setForm] = useState<FormState>({ name: '', email: '', date: '', time: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.email.includes('@')) next.email = 'Valid email is required.'
    if (!form.date) next.date = 'Date is required.'
    if (!form.time) next.time = 'Time is required.'
    if (!form.message.trim()) next.message = 'Please add your request details.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      alert('Reservation form is ready. Submission integration will be added later.')
    }
  }

  return (
    <Card className={cn('rounded-xl border bg-card p-6 shadow-sm', className)}>
      <h3 className="font-serif text-2xl font-semibold text-[#722F37]">{heading}</h3>
      <form onSubmit={onSubmit} className="mt-6 space-y-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
          {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            {errors.date && <p className="text-xs text-red-600">{errors.date}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="time">Time</Label>
            <Input id="time" type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
            {errors.time && <p className="text-xs text-red-600">{errors.time}</p>}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Tell us about party size, occasion, or seating preferences."
          />
          {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
        </div>

        <Button type="submit" className="w-full rounded-lg bg-[#722F37] text-[#FEFAE0] hover:bg-[#5f272e]">
          Request Reservation
        </Button>
      </form>
    </Card>
  )
}
