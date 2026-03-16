export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import ContactReservationForm from "@/components/ContactReservationForm";
import LocationMapCard from "@/components/LocationMapCard";
import CTAVortex from "@/components/CTAVortex";
import { RESTAURANT_ADDRESS } from "@/lib/types";

export default function ContactPage() {
  return (
    <main>
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          headline="Reservations & inquiries"
          subheadline="Tell us your preferred date and time, and we’ll confirm as soon as possible. For same-day availability, please call."
          primaryCta={{ label: "Call (212) 555-0198", href: "tel:+12125550198" }}
          secondaryCta={{ label: "View Menu", href: "/menu" }}
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577064/site-images/restaurant/11236818.jpg"
          className="min-h-[80vh]"
        />
      </div>
      <div id="reservation" className="animate-fade-in-up bg-background">
        <ContactReservationForm
          headline="Reserve a table"
          subheadline="We respond within 24 hours. For parties of 9+, please call."
          submitEndpoint="/api/reservations"
        />
      </div>
      <div id="map" className="animate-fade-in-up bg-muted">
        <LocationMapCard
          headline="Visit us"
          subheadline={RESTAURANT_ADDRESS}
          address={RESTAURANT_ADDRESS}
          phone="(212) 555-0198"
          email="ciao@osteriaborgo.com"
          mapQuery={RESTAURANT_ADDRESS}
        />
      </div>
      <div className="animate-fade-in-up">
        <CTAVortex
          title="Planning something special?"
          subtitle="For birthdays, anniversaries, and private dining inquiries, send us a note and we’ll follow up with options."
          ctaLabel="Send an Inquiry"
          ctaHref="/contact#reservation"
          secondaryCtaLabel="Email ciao@osteriaborgo.com"
          secondaryCtaHref="mailto:ciao@osteriaborgo.com"
        />
      </div>
    </main>
  );
}
