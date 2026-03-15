export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import ContactForm from "@/components/ContactForm";
import HoursList from "@/components/HoursList";
import LocationMapEmbed from "@/components/LocationMapEmbed";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  return (
    <main>
      <AceternityHeroAurora
        headline="Reservations & contact"
        subheadline="Book a table, ask about events, or send a note. We’ll get back to you as soon as possible during service hours."
        primaryCta={{ label: "Call (650) 555-0198", href: "tel:+16505550198" }}
        secondaryCta={{ label: "View Menu", href: "/menu" }}
        imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577099/site-images/restaurant/10445929.jpg"
      />

      <ScrollReveal>
        <section id="reservation" className="animate-fade-in-up bg-background py-20 md:py-28">
          <ContactForm
            headline="Request a reservation"
            subheadline="This form is UI-only for now—submission will be connected to email later. For same-day requests, please call."
            contactInfo={[
              { icon: "Phone", label: "Phone", value: "(650) 555-0198" },
              { icon: "Mail", label: "Email", value: "ciao@margaritaristorante.com" },
              { icon: "MapPin", label: "Address", value: "2147 Brookside Ave, San Mateo, CA 94401" },
            ]}
          />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="hours" className="animate-fade-in-up bg-muted py-20 md:py-28">
          <HoursList />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section id="map" className="animate-fade-in-up bg-background py-20 md:py-28">
          <LocationMapEmbed />
        </section>
      </ScrollReveal>
    </main>
  );
}
