export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import FeaturesCards3D from "@/components/FeaturesCards3D";
import ChefStory from "@/components/ChefStory";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main>
      <AceternityHeroAurora
        headline="Our story"
        subheadline="A family restaurant inspired by Italy’s trattorie—where the food is honest, the wine is generous, and the table is always welcoming."
        primaryCta={{ label: "Reserve a Table", href: "/contact#reservation" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg"
      />

      <ScrollReveal>
        <section className="animate-fade-in-up bg-background py-20 md:py-28">
          <ChefStory />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="animate-fade-in-up bg-muted py-20 md:py-28">
          <FeaturesCards3D
            badge="Since 1998"
            title="What we believe in"
            subtitle="Simple principles, practiced daily."
            features={[
              { icon: "Utensils", title: "Tradition", description: "Classic recipes, slow sauces, and techniques that respect the ingredients." },
              { icon: "Leaf", title: "Seasonality", description: "Menus that shift with the market—fresh produce, better flavor." },
              { icon: "HeartHandshake", title: "Hospitality", description: "Warm service that feels like being welcomed into someone’s home." },
              { icon: "Sparkles", title: "Craft", description: "From pasta dough to tiramisu—details matter." },
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
