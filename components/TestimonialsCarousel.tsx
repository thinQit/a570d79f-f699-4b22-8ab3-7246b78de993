'use client'

import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface Testimonial {
  name: string
  quote: string
  rating: number
}
interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
  autoPlayMs?: number
}

export default function TestimonialsCarousel({
  testimonials = [
    { name: 'Isabella R.', quote: 'The best carbonara I have had outside Rome. Warm atmosphere and impeccable service.', rating: 5 },
    { name: 'Marco D.', quote: 'Perfect spot for date night. Authentic flavors and a truly elegant dining room.', rating: 5 },
    { name: 'Elena P.', quote: 'Fresh pasta, generous portions, and a beautiful wine selection. We will be back.', rating: 5 },
  ],
  autoPlayMs = 5000,
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((v) => (v + 1) % testimonials.length), autoPlayMs)
    return () => clearInterval(id)
  }, [autoPlayMs, testimonials.length])

  const item = testimonials[index] || testimonials[0]

  return (
    <section className="bg-[#FEFAE0] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Card className="rounded-xl border-[#DDA15E]/30 p-8 text-center">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#DDA15E] text-[#DDA15E]" />
            ))}
          </div>
          <p className="font-serif text-2xl text-[#722F37]">“{item.quote}”</p>
          <p className="mt-4 text-[#606C38]">— {item.name}</p>
        </Card>
      </div>
    </section>
  )
}
