export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import MenuCategoryTabs from "@/components/MenuCategoryTabs";
import CTASection from "@/components/CTASection";
import PricingTable from "@/components/PricingTable";
import ScrollReveal from "@/components/ScrollReveal";

export default function MenuPage() {
  return (
    <main>
      <AceternityHeroAurora
        headline="Menu"
        subheadline="Seasonal ingredients, classic technique, and a few house signatures you’ll crave."
        primaryCta={{ label: "Reserve a Table", href: "/contact#reservation" }}
        secondaryCta={{ label: "Call (650) 555-0198", href: "tel:+16505550198" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577054/site-images/restaurant/10207592.jpg"
      />

      <ScrollReveal>
        <section className="animate-fade-in-up bg-background py-20 md:py-28">
          <MenuCategoryTabs />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted py-20 md:py-28">
          <PricingTable
            headline="Private Dining & Celebration Packages"
            subheadline="Prix fixe options for parties of 10–24."
            tiers={[
              {
                name: "3 Courses",
                price: "$58",
                period: "per person",
                description: "Antipasto, primo, and dolce with group menu planning.",
                features: ["Custom menu consultation", "Dietary accommodations", "Dedicated service flow"],
                ctaLabel: "Inquire",
                ctaHref: "/contact#reservation",
              },
              {
                name: "4 Courses",
                price: "$72",
                period: "per person",
                description: "Expanded seasonal menu ideal for birthdays and anniversaries.",
                features: ["All 3-course inclusions", "Additional secondi course", "Priority seating"],
                ctaLabel: "Plan Event",
                ctaHref: "/contact#reservation",
                highlighted: true,
              },
              {
                name: "Wine Pairing",
                price: "$28",
                period: "per person",
                description: "Italian-focused pairing to complement each course.",
                features: ["Curated by sommelier", "Regional wine notes", "Available with either package"],
                ctaLabel: "Add Pairing",
                ctaHref: "/contact#reservation",
              },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-background py-20 md:py-28">
          <CTASection />
        </section>
      </ScrollReveal>
    </main>
  );
}
