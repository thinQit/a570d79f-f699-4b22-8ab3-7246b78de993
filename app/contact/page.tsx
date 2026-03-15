export const dynamic = 'force-dynamic';

import HeroImage from "@/components/HeroImage"
import SectionHeader from "@/components/SectionHeader"
import MapEmbed from "@/components/MapEmbed"
import ReservationForm from "@/components/ReservationForm"
import ContactForm from "@/components/ContactForm"
import CTASection from "@/components/CTASection"

export default function ContactPage() {
  return (
    <main>
      <HeroImage
        imageUrl="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg"
        headline="Reservations & inquiries"
        subheadline="Book a table, ask about dietary needs, or plan a small celebration—our team will get back to you soon."
        primaryCta={{ label: "Reservation Form", href: "#reservation-form" }}
        secondaryCta={{ label: "Call (000) 000-0000", href: "tel:+10000000000" }}
        overlayOpacity="bg-black/50"
      />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ContactForm
            headline="Find us"
            subheadline="We’re easy to reach—come hungry."
            contactInfo={[
              { icon: "MapPin", label: "Address", value: "123 Olive Street, San Francisco, CA 94103" },
              { icon: "Phone", label: "Phone", value: "(000) 000-0000" },
              {
                icon: "Mail",
                label: "Email",
                value: "reservations@margarita-ristorante.com",
              },
              { icon: "Clock", label: "Hours", value: "Mon–Thu 5:00 PM – 10:00 PM, Fri 5:00 PM – 11:00 PM, Sat 4:00 PM – 11:00 PM, Sun 4:00 PM – 9:30 PM" },
            ]}
          />
        </div>
      </section>

      <section id="map" className="bg-[#F3EAD0] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            headline="Location"
            subheadline="Steps from Market Street—street parking available."
            primaryCta={{
              label: "Open in Google Maps",
              href: "https://maps.google.com/?q=123+Olive+Street+San+Francisco+CA+94103",
            }}
            secondaryCta={{ label: "Call", href: "tel:+10000000000" }}
          />
          <div className="mt-8">
            <MapEmbed />
          </div>
        </div>
      </section>

      <section id="reservation-form" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ReservationForm />
        </div>
      </section>

      <CTASection />
    </main>
  )
}
