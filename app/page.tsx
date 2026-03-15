export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import SectionHeader from "@/components/SectionHeader"
import FeaturedDishCard from "@/components/FeaturedDishCard"
import GalleryMasonry from "@/components/GalleryMasonry"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import InfoCard from "@/components/InfoCard"
import CTASection from "@/components/CTASection"

export default function HomePage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="A warm Italian table in the heart of the city"
        subheadline="Margarita is a traditional ristorante serving hand-rolled pasta, wood-fired pizza, and slow-simmered sauces—made daily from family recipes and authentic Italian ingredients."
        primaryCta={{ label: "View Menu", href: "/menu" }}
        secondaryCta={{ label: "Contact & Reservations", href: "/contact" }}
        overlayOpacity="bg-black/45"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            headline="Signature dishes guests come back for"
            subheadline="From silky ragù to blistered crusts—these are the plates that define Margarita."
            primaryCta={{ label: "Explore Full Menu", href: "/menu" }}
            secondaryCta={{ label: "Reserve a Table", href: "/contact#reservation-form" }}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <FeaturedDishCard />
            <FeaturedDishCard />
            <FeaturedDishCard />
            <FeaturedDishCard />
          </div>
        </div>
      </section>

      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            headline="Cozy, rustic, and unmistakably Italian"
            subheadline="Warm lighting, terracotta tones, and the aroma of wood-fired dough—Margarita is designed for long dinners and good conversation."
            primaryCta={{ label: "See Our Story", href: "/about" }}
            secondaryCta={{ label: "Get Directions", href: "/contact#map" }}
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <GalleryMasonry
            headline="A glimpse of the table"
            subheadline="Food, wine, and the moments in between."
            images={[
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Wood-fired pizza coming out of oven",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Pasta being hand-rolled on a wooden board",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Italian antipasti board with cured meats and olives",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Wine glasses on a rustic table setting",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Tiramisu and espresso",
              },
              {
                url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
                alt: "Candlelit dining room corner",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <TestimonialsGrid
            headline="Loved by locals, remembered by travelers"
            subheadline="What guests say after dinner at Margarita."
            testimonials={[
              {
                quote:
                  "The tagliatelle al ragù tastes like something my nonna would make—rich, slow-cooked, and perfectly balanced.",
                name: "Elena R.",
                title: "Neighborhood regular",
                rating: 5,
              },
              {
                quote:
                  "Best crust in town. The Margherita D.O.P. is simple and flawless, and the staff guided us to a great Chianti pairing.",
                name: "Marcus T.",
                title: "First-time guest",
                rating: 5,
              },
              {
                quote:
                  "We celebrated an anniversary here—cozy ambiance, attentive service, and the tiramisu was the perfect finish.",
                name: "Priya S.",
                title: "Celebration dinner",
                rating: 5,
              },
            ]}
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            headline="Opening hours & quick details"
            subheadline="Plan your visit—reservations recommended on weekends."
            primaryCta={{ label: "Contact & Reserve", href: "/contact" }}
            secondaryCta={{ label: "View Menu", href: "/menu" }}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
