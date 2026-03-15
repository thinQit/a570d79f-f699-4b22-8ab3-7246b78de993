export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import MenuGrid from "@/components/MenuGrid";
import ReservationCTA from "@/components/ReservationCTA";
import ChefStory from "@/components/ChefStory";
import PhotoGallery from "@/components/PhotoGallery";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import LocationMapEmbed from "@/components/LocationMapEmbed";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <main>
      <AceternityHeroAurora
        headline="Traditional Italian dining in the heart of Brookside"
        subheadline="Handmade pasta, wood-fired classics, and a cellar curated for long, candlelit dinners—served nightly at Margarita Ristorante."
        primaryCta={{ label: "Reserve a Table", href: "/contact#reservation" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
        badge="Since 1998 • Family-owned"
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/11236793.jpg"
      />

      <ScrollReveal>
        <div className="animate-fade-in-up bg-background py-20 md:py-28">
          <MenuGrid />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up bg-muted py-20 md:py-28">
          <ReservationCTA />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up bg-background py-20 md:py-28">
          <ChefStory />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up bg-muted py-20 md:py-28">
          <PhotoGallery />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up bg-background py-20 md:py-28">
          <TestimonialsAnimated
            title="Loved by locals, remembered by travelers"
            subtitle="The kind of place you come back to—whether it’s for anniversaries, weeknight pasta, or a glass of Barbera at the bar."
            autoplay
            testimonials={[
              {
                quote:
                  "The tagliatelle bolognese tastes like the one I grew up with—rich, slow, and perfectly balanced. Service is warm without being rushed.",
                name: "Elena R.",
                designation: "Neighborhood regular",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577321/site-images/team-people/1181622.jpg",
              },
              {
                quote:
                  "The dining room is cozy and elegant. We shared burrata, a Margherita pizza, and tiramisu—every bite was spot on.",
                name: "Marcus T.",
                designation: "Date night diner",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577351/site-images/team-people/12903244.jpg",
              },
              {
                quote:
                  "Great wine list and the cacio e pepe is legit. The staff helped us pick a bottle that matched the meal perfectly.",
                name: "Priya S.",
                designation: "Visiting from NYC",
                src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
              },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up bg-muted py-20 md:py-28">
          <LocationMapEmbed />
        </div>
      </ScrollReveal>
    </main>
  );
}
