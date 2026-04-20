import type { NavLink, ContactInfo } from "@/types";

export const NAV_LINKS: NavLink[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Metabolic & Weight", href: "/services/metabolic-weight" },
      { label: "Regenerative & Cellular", href: "/services/regenerative-cellular" },
      { label: "Advanced Longevity & Performance", href: "/services/longevity-performance" },
      { label: "Aesthetics & Skin", href: "/services/aesthetics-skin" },
      { label: "Wellness & Specialized", href: "/services/wellness-specialized" },
      { label: "Post-Surgical Recovery & Wound Healing", href: "/services/post-surgical-recovery" },
    ],
  },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Executive Performance & Precision Fitness", href: "/programs/executive-performance" },
      { label: "Elite Aesthetic Medical Partner Program", href: "/programs/elite-aesthetic-medical-partner-program" },
      { label: "Signature Peptide Bioregulation System", href: "/programs/signature-peptide-bioregulation-system" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/team" },
];

export const CONTACT_INFO: ContactInfo = {
  address: "123 Medical Drive, Suite 400, Beverly Hills, CA 90210",
  phone:   "+1 (800) 555-0199",
  email:   "info@consultdrb.com",
  hours:   "Mon – Fri: 8 AM – 6 PM",
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: "Instagram" },
  { label: "Facebook",  href: "https://facebook.com",  icon: "Facebook" },
  { label: "LinkedIn",  href: "https://linkedin.com",  icon: "Linkedin" },
  { label: "YouTube",   href: "https://youtube.com",   icon: "Youtube" },
];

export const SITE_NAME    = "Consult Dr B";
export const SITE_TAGLINE = "Precision Medicine. Personalised Care.";