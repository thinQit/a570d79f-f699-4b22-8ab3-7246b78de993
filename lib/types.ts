export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
  dietary?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  rating: number;
}

export interface HourRow {
  day: string;
  hours: string;
}

export interface ReservationFormValues {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  occasion?: string;
  notes?: string;
}
