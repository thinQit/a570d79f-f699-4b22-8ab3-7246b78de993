"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  headline = "What Our Guests Say",
  subheadline = "Celebrated by couples, families, and food lovers across the city.",
  testimonials = [
    {
      quote:
        "Every plate was beautifully balanced and full of flavor. The service felt thoughtful from the first welcome to the final dessert.",
      name: "Isabella Monroe",
      designation: "Anniversary Dinner Guest",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg",
    },
    {
      quote:
        "Amber Table is our go-to for special evenings. The tasting menu paired with their wine recommendations was exceptional.",
      name: "Daniel Brooks",
      designation: "Local Patron",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg",
    },
    {
      quote:
        "Warm atmosphere, attentive staff, and unforgettable dishes. You can taste the care in every ingredient.",
      name: "Priya Shah",
      designation: "Weekend Guest",
      src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg",
    },
  ],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 animate-fade-in-up">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="rounded-xl border border-border bg-card card-hover">
          <AnimatedTestimonials testimonials={testimonials || []} autoplay={autoplay} />
        </div>
      </div>
    </section>
  );
}
