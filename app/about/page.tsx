export const dynamic = 'force-dynamic';

import { Card } from "@/components/ui/card";
import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import ChefStorySplit from "@/components/ChefStorySplit";
import GalleryMasonry from "@/components/GalleryMasonry";
import CTAVortex from "@/components/CTAVortex";

export default function AboutPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="A neighborhood osteria built around craft."
          subheadline="We keep it simple: excellent ingredients, careful technique, and hospitality that feels personal."
          primaryCta={{ label: "Reserve a Table", href: "/contact#reservation" }}
          secondaryCta={{ label: "View Menu", href: "/menu" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/12603336.jpg"
          className="min-h-[80vh]"
        />
      </div>
      <div className="animate-fade-in-up bg-muted">
        <ChefStorySplit
          headline="Our story"
          subheadline="Traditional roots, modern execution."
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577093/site-images/restaurant/1224789.jpg"
        />
      </div>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="p-6 rounded-xl card-hover"><h3 className="font-semibold mb-2">Seasonal sourcing</h3><p className="text-muted-foreground">Market-driven specials and rotating produce.</p></Card>
          <Card className="p-6 rounded-xl card-hover"><h3 className="font-semibold mb-2">Handmade pasta</h3><p className="text-muted-foreground">Fresh dough daily, shaped to order.</p></Card>
          <Card className="p-6 rounded-xl card-hover"><h3 className="font-semibold mb-2">Warm hospitality</h3><p className="text-muted-foreground">Attentive service that never feels rushed.</p></Card>
        </div>
      </section>
      <div className="animate-fade-in-up">
        <GalleryMasonry
          headline="Inside Osteria Borgo"
          subheadline="A few glimpses of the room, the bar, and the kitchen."
          images={[
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577098/site-images/restaurant/11490352.jpg", alt: "Dining room with cream walls, warm gold sconces, and burgundy banquettes", caption: "Dining Room" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577102/site-images/restaurant/12387873.jpg", alt: "Chef plating pasta at the pass under warm lighting", caption: "Kitchen" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577053/site-images/restaurant/1253122.jpg", alt: "Bar with olive-green seating and curated Italian bottles", caption: "Bar" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577101/site-images/restaurant/1029601.jpg", alt: "Fresh pasta station", caption: "Pasta Lab" },
          ]}
        />
      </div>
      <div className="animate-fade-in-up">
        <CTAVortex
          title="Come hungry. Leave happy."
          subtitle="We’d love to host you—reserve ahead for weekends."
          ctaLabel="Reserve"
          ctaHref="/contact#reservation"
          secondaryCtaLabel="View Menu"
          secondaryCtaHref="/menu"
        />
      </div>
    </main>
  );
}
