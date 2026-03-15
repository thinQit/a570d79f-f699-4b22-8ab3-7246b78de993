import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Margarita Ristorante | Traditional Italian Restaurant in Brookside",
  description:
    "Margarita Ristorante is a family-owned Italian restaurant in Brookside, San Mateo. Handmade pasta, wood-fired pizza, Italian wines, and warm hospitality. Reserve a table online.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logo="Margarita Ristorante"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Reserve"
          ctaHref="/contact#reservation"
        />
        {children}
        <Footer
          brand="Margarita Ristorante"
          description="Traditional Italian dining • Brookside, San Mateo"
          columns={[
            {
              title: "Navigate",
              links: [
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Visit",
              links: [
                { label: "2147 Brookside Ave, San Mateo, CA 94401", href: "https://maps.google.com/?q=2147%20Brookside%20Ave%2C%20San%20Mateo%2C%20CA%2094401" },
                { label: "(650) 555-0198", href: "tel:+16505550198" },
                { label: "ciao@margaritaristorante.com", href: "mailto:ciao@margaritaristorante.com" },
              ],
            },
            {
              title: "Social",
              links: [
                { label: "Instagram", href: "https://instagram.com/" },
                { label: "Facebook", href: "https://facebook.com/" },
              ],
            },
          ]}
          copyright="© 2026 Margarita Ristorante. All rights reserved."
        />
      </body>
    </html>
  );
}
