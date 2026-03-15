import "./globals.css"
import { Playfair_Display, Lato } from "next/font/google"
import Navbar from "@/components/Navbar"
import FooterMultiColumn from "@/components/FooterMultiColumn"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
})

export const metadata = {
  title: "Margarita Ristorante | Traditional Italian Restaurant",
  description:
    "Margarita is a traditional Italian restaurant serving handmade pasta, wood-fired pizza, and classic desserts in a warm, rustic atmosphere. View the menu and request a reservation.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="bg-[#FEFAE0] text-[#1B1B1B] antialiased">
        <Navbar />
        {children}
        <FooterMultiColumn
          brand="Margarita Ristorante"
          description="Traditional Italian comfort, served with family warmth."
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
                { label: "123 Olive Street, San Francisco, CA 94103", href: "/contact#map" },
                { label: "(000) 000-0000", href: "tel:+10000000000" },
                {
                  label: "reservations@margarita-ristorante.com",
                  href: "mailto:reservations@margarita-ristorante.com",
                },
              ],
            },
          ]}
          copyright="© 2026 Margarita Ristorante. All rights reserved."
        />
      </body>
    </html>
  )
}
