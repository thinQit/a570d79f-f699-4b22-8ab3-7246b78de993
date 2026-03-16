export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import MenuCategoryTabs from "@/components/MenuCategoryTabs";
import MenuItemCard from "@/components/MenuItemCard";
import ReservationCTA from "@/components/ReservationCTA";
import ChefStorySplit from "@/components/ChefStorySplit";
import PhotoGalleryMasonry from "@/components/PhotoGalleryMasonry";
import TestimonialsAnimated from "@/components/TestimonialsAnimated";
import LocationMapCard from "@/components/LocationMapCard";

export default function HomePage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="A modern Italian osteria with old-world soul."
          subheadline="Seasonal antipasti, handmade pasta, and wood-fired mains—served in a warm, candlelit dining room in the heart of the city."
          primaryCta={{ label: "Reserve a Table", href: "/contact#reservation" }}
          secondaryCta={{ label: "Explore the Menu", href: "/menu" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577101/site-images/restaurant/11123392.jpg"
          className="min-h-[80vh]"
        />
      </div>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <MenuCategoryTabs />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10">
            <MenuItemCard name="Tagliatelle al Ragù" description="Slow-braised beef ragù, Parmigiano-Reggiano." price={28} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/10375821.jpg" />
            <MenuItemCard name="Cacio e Pepe" description="Pecorino Romano, cracked black pepper, silky emulsion." price={24} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577099/site-images/restaurant/10445929.jpg" />
            <MenuItemCard name="Wood-Fired Branzino" description="Lemon, capers, herbs; served with blistered broccolini." price={36} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577051/site-images/restaurant/12802124.jpg" />
          </div>
        </div>
      </section>
      <div className="animate-fade-in-up">
        <ReservationCTA
          headline="Reserve your table in under a minute."
          subheadline="Celebration, date night, or a simple Tuesday—tell us what you’re planning and we’ll take care of the rest."
          primaryCta={{ label: "Reserve a Table", href: "/contact#reservation" }}
          secondaryCta={{ label: "Call (212) 555-0198", href: "tel:+12125550198" }}
        />
      </div>
      <div className="animate-fade-in-up bg-muted">
        <ChefStorySplit
          headline="From Emilia-Romagna to your table."
          subheadline="Chef Lucia Bianchi brings a modern touch to regional Italian cooking—rooted in tradition, guided by seasonality."
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577071/site-images/restaurant/10918163.jpg"
        />
      </div>
      <div className="animate-fade-in-up">
        <PhotoGalleryMasonry
          headline="A dining room made for lingering."
          subheadline="Warm light, soft textures, and the sound of the kitchen—captured in moments."
          images={[
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577084/site-images/restaurant/10918168.jpg", alt: "Handmade tagliatelle being twirled in a copper pan", caption: "Kitchen" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577096/site-images/restaurant/12324704.jpg", alt: "Candlelit dining room with cream walls and burgundy accents", caption: "Dining Room" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577067/site-images/restaurant/11689798.jpg", alt: "Wood-fired branzino plated with lemon and herbs", caption: "Secondi" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577080/site-images/restaurant/12331540.jpg", alt: "Tiramisu dusted with cocoa served with espresso", caption: "Dolci" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577086/site-images/restaurant/10148453.jpg", alt: "Bar seating with olive-green leather stools and warm gold lighting", caption: "Bar" },
            { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577070/site-images/restaurant/10636732.jpg", alt: "Antipasti spread with burrata, prosciutto, and roasted peppers", caption: "Antipasti" },
          ]}
        />
      </div>
      <div className="animate-fade-in-up bg-muted">
        <TestimonialsAnimated
          title="Loved by locals. Remembered by visitors."
          subtitle="A few notes from guests who came hungry and left happy."
          testimonials={[
            { quote: "The cacio e pepe is the best I’ve had outside of Rome—perfectly glossy, peppery, and balanced.", name: "Marina K.", designation: "Google", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/10375912.jpg" },
            { quote: "We booked for an anniversary and they nailed every detail. The branzino was immaculate and the tiramisu disappeared in minutes.", name: "David R.", designation: "Yelp", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577325/site-images/team-people/10347164.jpg" },
            { quote: "Beautiful room, thoughtful wine list, and pasta that tastes like it was made by someone’s nonna.", name: "Ayesha S.", designation: "OpenTable", src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577363/site-images/team-people/12903169.jpg" },
          ]}
          autoplay
        />
      </div>
      <div className="animate-fade-in-up">
        <LocationMapCard
          headline="Find us in San Aurelio."
          subheadline="Easy walk from the Central Station—perfect for weeknights and weekend dinners."
          address="214 Via Roma, San Aurelio District"
          phone="(212) 555-0198"
          email="ciao@osteriaborgo.com"
          mapQuery="214 Via Roma, San Aurelio District"
        />
      </div>
    </main>
  );
}
