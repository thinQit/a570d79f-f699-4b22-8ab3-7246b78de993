export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import MenuItemCard from "@/components/MenuItemCard";
import CTAVortex from "@/components/CTAVortex";

export default function MenuPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="The menu: classic at heart, seasonal by design."
          subheadline="Our offerings shift with the market—below is a representative selection of what we’re cooking now."
          primaryCta={{ label: "Reserve a Table", href: "/contact#reservation" }}
          secondaryCta={{ label: "Call for Tonight", href: "tel:+12125550198" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg"
          className="min-h-[80vh]"
        />
      </div>
      <section className="py-20 md:py-28 bg-background animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <MenuItemCard name="Burrata & Roasted Peppers" description="Basil oil, aged balsamic, sea salt." price={16} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577097/site-images/restaurant/11775401.jpg" />
          <MenuItemCard name="Tagliatelle al Ragù" description="Slow-braised beef ragù, Parmigiano-Reggiano." price={28} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577097/site-images/restaurant/12008097.jpg" />
          <MenuItemCard name="Spaghetti alle Vongole" description="Clams, garlic, white wine, parsley, chili." price={30} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577073/site-images/restaurant/11236566.jpg" />
          <MenuItemCard name="Wood-Fired Branzino" description="Lemon, capers, herbs; broccolini." price={36} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/1080383.jpg" />
          <MenuItemCard name="Eggplant Parmigiana" description="Tomato sugo, mozzarella, basil (vegetarian)." price={27} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577047/site-images/restaurant/10456027.jpg" />
          <MenuItemCard name="Tiramisu Classico" description="Mascarpone, espresso, cocoa." price={12} imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577044/site-images/restaurant/1121480.jpg" />
        </div>
      </section>
      <div className="animate-fade-in-up">
        <CTAVortex
          title="Ready when you are."
          subtitle="Reserve ahead for prime times—walk-ins are always welcome at the bar."
          ctaLabel="Reserve a Table"
          ctaHref="/contact#reservation"
          secondaryCtaLabel="Contact Us"
          secondaryCtaHref="/contact"
        />
      </div>
    </main>
  );
}
