'use client'

import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { cn } from '@/lib/utils'

interface TestimonialsMarqueeProps {
  className?: string
}

export default function TestimonialsMarquee({ className = '' }: Partial<TestimonialsMarqueeProps>) {
  const testimonials = [
    { quote: 'Best handmade pasta in the city. The service felt personal and polished.', name: 'Elena R.' },
    { quote: 'Warm atmosphere, excellent wine pairings, and flawless secondi.', name: 'Jordan M.' },
    { quote: 'Perfect for date night—refined but still welcoming and comfortable.', name: 'Priya S.' },
  ]

  return (
    <section className={cn('bg-[#FEFAE0] py-20 md:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 font-serif text-4xl text-[#722F37]">Guest Testimonials</h2>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </section>
  )
}
