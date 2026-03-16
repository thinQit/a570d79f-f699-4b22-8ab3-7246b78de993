import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RESTAURANT_ADDRESS } from "@/lib/types";

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
  title: "Osteria Borgo | Modern Italian Osteria in San Aurelio",
  description:
    "Osteria Borgo serves handmade pasta, wood-fired mains, and seasonal Italian classics in a warm, modern dining room. Reserve a table online or call for same-day availability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Reserve", href: "/contact#reservation" },
  ];

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const footerHours = [
    "Mon–Thu: 5:00 PM – 10:00 PM",
    "Fri: 5:00 PM – 11:00 PM",
    "Sat: 4:30 PM – 11:00 PM",
    "Sun: 4:30 PM – 9:30 PM",
  ];

  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-sans bg-background text-foreground`}>
        <Navbar
          logoText="Osteria Borgo"
          links={navLinks}
          reserveHref="/contact#reservation"
        />
        {children}
        <Footer
          restaurantName="Osteria Borgo"
          address={RESTAURANT_ADDRESS}
          hours={footerHours}
          quickLinks={footerLinks}
        />
      </body>
    </html>
  );
}
