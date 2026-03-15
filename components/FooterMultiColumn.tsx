"use client";

import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

export default function FooterMultiColumn({
  brand = 'Maison Ember',
  description = 'A warm, elegant restaurant blending classic technique with seasonal ingredients and heartfelt service.',
  columns = [
    {
      title: 'Explore',
      links: [
        { label: 'Menu', href: '#menu' },
        { label: 'About', href: '#about' },
        { label: 'Gallery', href: '#gallery' },
      ],
    },
    {
      title: 'Visit',
      links: [
        { label: 'Reservations', href: '#reservation' },
        { label: 'Private Dining', href: '#contact' },
        { label: 'Location & Hours', href: '#contact' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Instagram', href: '#' },
      ],
    },
  ],
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-[#722F37] text-[#FEFAE0]">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{brand}</h3>
            <p className="mt-3 text-sm text-[#FEFAE0]/80">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#DDA15E]">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href + link.label}>
                        <Link href={link.href} className="text-sm text-[#FEFAE0]/75 transition-colors hover:text-[#FEFAE0]">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-[#FEFAE0]/20" />
        <p className="text-center text-sm text-[#FEFAE0]/60">
          {copyright || '\u00a9 ' + new Date().getFullYear() + ' ' + brand + '. All rights reserved.'}
        </p>
      </div>
    </footer>
  );
}
