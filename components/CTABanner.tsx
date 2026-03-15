"use client";

import { Button } from '@/components/ui/button';

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  headline = 'Reserve Your Table for an Evening to Remember',
  description = 'Join us for seasonal tasting menus, curated wines, and heartfelt service in a warm, elegant setting.',
  ctaLabel = 'Book Reservation',
  ctaHref = '#reservation',
  secondaryCtaLabel = 'Call Us',
  secondaryCtaHref = '#contact',
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-[#722F37] py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-[#FEFAE0] md:text-4xl" style={{ fontFamily: 'Playfair Display, serif' }}>{headline}</h2>
        {description && <p className="mt-4 text-lg text-[#FEFAE0]/85">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="bg-[#DDA15E] px-8 text-black hover:bg-[#DDA15E]/90" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button size="lg" variant="outline" className="border-[#FEFAE0] px-8 text-[#FEFAE0] hover:bg-[#FEFAE0]/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
