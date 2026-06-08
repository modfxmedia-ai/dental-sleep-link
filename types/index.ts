import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  location?: string;
  quote: string;
  rating?: number;
  avatarUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  readingTime?: string;
  coverImage?: string;
  tags?: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  features?: string[];
}

export interface Stat {
  id: string;
  label: string;
  value: string | number;
  suffix?: string;
  icon?: LucideIcon;
}
