export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import SectionHeader from "@/components/SectionHeader"
import MenuCategory from "@/components/MenuCategory"
import CTASection from "@/components/CTASection"

export default function MenuPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="The Menu"
        subheadline="Classic Italian dishes made with seasonal produce, imported staples, and a lot of patience."
        primaryCta={{ label: "Reserve a Table", href: "/contact#reservation-form" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
        overlayOpacity="bg-black/50"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            headline="Our classics, organized by course"
            subheadline="From antipasti to dolci—crafted to share or savor."
            primaryCta={{ label: "Reserve", href: "/contact#reservation-form" }}
            secondaryCta={{ label: "Call", href: "tel:+10000000000" }}
          />
          <div className="mt-10 space-y-10">
            <MenuCategory />
            <MenuCategory />
            <MenuCategory />
            <MenuCategory />
            <MenuCategory />
            <MenuCategory />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  )
}
