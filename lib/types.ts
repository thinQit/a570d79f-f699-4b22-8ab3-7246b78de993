export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface Testimonial {
  name: string;
  source: string;
  rating: number;
  quote: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface ReservationPayload {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  occasion?: string;
  message?: string;
}

export interface ApiResponse {
  ok: boolean;
  message: string;
}
