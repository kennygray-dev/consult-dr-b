// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  credentials?: string[];
}

// ─── Services / Programs ──────────────────────────────────────────────────────
export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon?: string;
  image?: string;
  href: string;
}

export interface ProgramCard extends ServiceCard {
  duration?: string;
  price?: string;
  features?: string[];
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role?: string;
  avatar?: string;
}

// ─── Partnership ──────────────────────────────────────────────────────────────
export interface Partner {
  id: string;
  name: string;
  logo: string;
  website?: string;
}

// ─── Nutrition / Peptide ──────────────────────────────────────────────────────
export interface NutritionItem {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  image?: string;
}

export interface PeptideItem extends NutritionItem {
  protocol?: string;
  disclaimer?: string;
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  hours: string;
}
