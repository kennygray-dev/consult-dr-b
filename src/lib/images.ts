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
    src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80",
    alt: "Advanced clinical services laboratory",
    blurDataURL: PRIMARY_BLUR,
    width: 1920,
    height: 1080,
  },
  serviceAssessment: {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80",
    alt: "Comprehensive health assessment in progress",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },
  serviceHormone: {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=900&q=80",
    alt: "Hormone optimisation consultation",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },
  serviceMetabolic: {
    src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=900&q=80",
    alt: "Metabolic medicine testing and analysis",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
  },
  serviceLongevity: {
    src: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=900&q=80",
    alt: "Longevity and anti-aging medical protocols",
    blurDataURL: PRIMARY_BLUR,
    width: 900,
    height: 675,
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

  // Team members
  team: {
    drB: {
      src: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
      alt: "Dr B — Founder & Chief Medical Officer",
      blurDataURL: PRIMARY_BLUR,
      width: 600,
      height: 750,
    },
    drChen: {
      src: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
      alt: "Dr Sarah Chen — Nutritional Medicine Physician",
      blurDataURL: PRIMARY_BLUR,
      width: 600,
      height: 750,
    },
    jamesOkafor: {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
      alt: "James Okafor — Head of Performance Coaching",
      blurDataURL: PRIMARY_BLUR,
      width: 600,
      height: 750,
    },
    drNwosu: {
      src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
      alt: "Dr Amara Nwosu — Peptide Therapy Specialist",
      blurDataURL: PRIMARY_BLUR,
      width: 600,
      height: 750,
    },
    lisaHartman: {
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80",
      alt: "Lisa Hartman — Registered Dietitian & Health Coach",
      blurDataURL: PRIMARY_BLUR,
      width: 600,
      height: 750,
    },
    drWebb: {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
      alt: "Dr Marcus Webb — Hormone & Longevity Physician",
      blurDataURL: PRIMARY_BLUR,
      width: 600,
      height: 750,
    },
  },
} as const;
