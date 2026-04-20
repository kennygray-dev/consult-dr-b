/**
 * Central image registry for Consult Dr B.
 *
 * HOW TO MIGRATE TO CLOUDINARY:
 * 1. Upload each image to your Cloudinary account
 * 2. Replace the `src` string with your Cloudinary URL:
 *    e.g. "https://res.cloudinary.com/YOUR_CLOUD/image/upload/f_auto,q_auto/v1/consult-dr-b/hero"
 * 3. The rest of the code stays identical — zero other changes needed.
 *
 * WHY BLUR PLACEHOLDERS:
 * The `blurDataURL` is a tiny 10px base64 JPEG shown instantly while the
 * full image loads. It eliminates layout shift (CLS) and gives the user
 * immediate visual feedback — this is the technique used by Vercel, Linear,
 * and most production Next.js apps.
 *
 * Generate your own blur placeholders at: https://blurred.dev
 * Or use the Cloudinary blur transformation: f_auto,q_1,w_10
 */

export interface SiteImage {
  src: string;
  alt: string;
  blurDataURL: string; // tiny base64 placeholder
  width?: number;
  height?: number;
}

// ─── Shared neutral blur placeholder ────────────────────────────────────────
// Used as a fallback — a 10×10 blue-grey pixel matching the primary brand colour
const PRIMARY_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACMQAAIBBAIDAQEAAAAAAAAAAAECAwQREiExBRNBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCw19TDZrZNWTqJEiGdq+DjOMlfbJySfJJJ3+hJJJ3+hJJJ3+hJJAB/2Q==";

const GOLD_BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAKAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQGA//EACMQAAIBBAIDAQEAAAAAAAAAAAECAwQREiExBRNBUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCq1dvFabXLVzKskSIZGr4OM4yV9snJJ8kknfoSSd+hJJJ36EknfYSSQAf/2Q==";

// ─── Hero Images ─────────────────────────────────────────────────────────────
export const IMAGES = {
  // Home
  homeHero: {
  src: "/hero.png",
  alt: "Your description here",
  blurDataURL: PRIMARY_BLUR,
  width: 1920,
  height: 1080,
},

  // About
  aboutHero: {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&q=80",
    alt: "Physician reviewing patient data on digital display",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },
  aboutDoctor: {
    src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80",
    alt: "Dr B — Founder and Chief Medical Officer",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 1125,
  },

  // Services
  servicesHero: {
    src: "/cta.jpg",
    alt: "Advanced clinical services laboratory",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },
  serviceAssessment: {
    src: "/wellness-specialized.png",
    alt: "Wellness and specialized medical care consultation",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },
  serviceHormone: {
    src: "/regenerative.png",
    alt: "Regenerative and cellular therapy treatment",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },
  serviceMetabolic: {
    src: "/metabolic.png",
    alt: "Metabolic medicine testing and analysis",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },
  serviceLongevity: {
    src: "/advanced-longevity.png",
    alt: "Advanced longevity and performance medicine program",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },
  serviceAestheticSkin: {
    src: "/aesthetic-skin.png",
    alt: "Aesthetic skin and regenerative dermatology treatments",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },
  servicePostSurgical: {
    src: "/post-surgical.png",
    alt: "Post-surgical recovery and wound healing support",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },

  // ─── Service Hero Images (Standardized) ────────────────────────────────

  serviceMetabolicHero: {
    src: "/metabolic-hero.png",
    alt: "Metabolic & Weight Optimization Hero Image",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  serviceLongevityHero: {
    src: "/advanced-longevity-hero.png",
    alt: "Advanced Longevity & Performance Medicine Hero Image",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  serviceAssessmentHero: {
    src: "/wellness-specialized-hero1.png",
    alt: "Wellness & Specialized Care Hero Image",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  serviceHormoneHero: {
    src: "/regenerative-hero.png",
    alt: "Regenerative & Cellular Medicine Hero Image",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  serviceAestheticSkinHero: {
    src: "/aesthetic-skin-hero.png",
    alt: "Aesthetic & Skin Medicine Hero Image",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  servicePostSurgicalHero: {
    src: "/post-surgical-hero1.png",
    alt: "Post-Surgical Recovery & Wound Healing Hero Image",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  // Programs
  programsHero: {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80",
    alt: "Personalised health program planning session",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  // Nutrition
  nutritionHero: {
    src: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80",
    alt: "Fresh whole foods for evidence-based nutrition therapy",
    blurDataURL: GOLD_BLUR,
    width: 1920,
    height: 1080,
  },
  nutritionFood: {
    src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&q=80",
    alt: "Nutritionally dense whole food meal preparation",
    blurDataURL: GOLD_BLUR,
    width: 900,
    height: 900,
  },

  // Coach
  coachHero: {
    src: "/owen.png",
    alt: "Elite health coaching session in modern gym",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },
  coachOverlay: {
    src: "/owenfit.png",
    alt: "Performance overlay image",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },
  coachSession: {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
    alt: "One-on-one health coaching and performance tracking",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },

  // Peptide
  peptideHero: {
    src: "https://images.unsplash.com/photo-1576671081837-49000212a370?w=1920&q=80",
    alt: "Advanced peptide therapy laboratory research",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  // Partnership
  partnershipHero: {
    src: "/partnership.png",
    alt: "Corporate wellness partnership team meeting",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },

  // Contact
  contactHero: {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1920&q=80",
    alt: "Welcoming medical consultation reception",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },
} as const;
