export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import SectionHeader from "@/components/SectionHeader"
import GalleryGrid from "@/components/GalleryGrid"
import StatsCounter from "@/components/StatsCounter"
import CTASection from "@/components/CTASection"

export default function AboutPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg"
        headline="A family recipe book, opened to the public"
        subheadline="Margarita began as Sunday dinners—handmade pasta, simmering sauces, and a table that always had room for one more."
        primaryCta={{ label: "Meet the Kitchen", href: "#chef" }}
        secondaryCta={{ label: "Reserve", href: "/contact#reservation-form" }}
        overlayOpacity="bg-black/45"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            headline="Our story"
            subheadline="Tradition, patience, and ingredients that speak for themselves."
            primaryCta={{ label: "View Menu", href: "/menu" }}
            secondaryCta={{ label: "Contact", href: "/contact" }}
          />
          <div className="mt-8 space-y-4 text-base md:text-lg">
            <p>
              Founded in 2008, Margarita is inspired by the cooking of the Rossi family—simple
              dishes made extraordinary through technique and time. Our sauces simmer for hours,
              our dough ferments slowly, and our pasta is rolled fresh each day.
            </p>
            <p>
              We source San Marzano tomatoes, Parmigiano-Reggiano, and Italian olive oil, then pair
              them with seasonal California produce. The result is a menu that feels classic,
              comforting, and unmistakably Italian.
            </p>
          </div>
        </div>
      </section>

      <section id="chef" className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            headline="From our kitchen to your table"
            subheadline="A small team with a big love for Italian cooking."
            primaryCta={{ label: "Reserve a Table", href: "/contact#reservation-form" }}
            secondaryCta={{ label: "View Menu", href: "/menu" }}
          />
          <div className="mt-10">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <StatsCounter
            stats={[
              { value: "2008", label: "Founded" },
              { value: "30+", label: "House Recipes" },
              { value: "7 Days", label: "Fresh Prep Weekly" },
              { value: "1000s", label: "Guests Served" },
            ]}
            bgColor="bg-[#722F37] text-[#FEFAE0]"
          />
        </div>
      </section>

      <CTASection />
    </main>
  )
}
