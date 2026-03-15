export interface ImageAsset {
  src: string;
  alt: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: ImageAsset;
  dietary?: string[];
}

export interface MenuCategory {
  name: string;
  image?: ImageAsset;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  title?: string;
  quote: string;
  rating: number;
}

export interface InfoCard {
  title: string;
  lines: string[];
  note?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: ImageAsset;
}

export interface ContactDetails {
  address: {
    name: string;
    street: string;
    cityStateZip: string;
  };
  phone: string;
  email: string;
  hours: Array<{
    days: string;
    hours: string;
  }>;
  notes?: string[];
}

export interface ReservationFormValues {
  name: string;
  email: string;
  datetime: string;
  message?: string;
}
