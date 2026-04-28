import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import ServicePageTemplate from "@/components/layout/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Post-Surgical Recovery & Wound Healing",
  description:
    "Physician-led care designed to accelerate healing, reduce complications, and optimise both functional and aesthetic recovery.",
};

export default function PostSurgicalRecoveryPage() {
  return (
    <ServicePageTemplate
      // ── Hero ──────────────────────────────────────────────────────────
   hero={{
  title:
    "Post-Surgical Recovery & Wound Healing: Accelerate Your Recovery",

  subtitle:
    "Physician-led care designed to accelerate healing, reduce complications, and optimise both functional and aesthetic recovery.",

  image: IMAGES.servicePostSurgicalHero.src,
  imageAlt: IMAGES.servicePostSurgicalHero.alt,
  blurDataURL: IMAGES.servicePostSurgicalHero.blurDataURL,
}}

      // ── Approach ──────────────────────────────────────────────────────
      approach={{
        title: "A Clinical Approach to Post-Surgical Recovery",
        paragraphs: [
          "This program is designed to support faster, safer, and more complete recovery after surgery. At Consult Dr B, we combine regenerative therapies, advanced wound care, and personalised medical oversight to enhance healing, minimise complications, and improve overall outcomes.",
        ],
        ctaText: "Book a Recovery Consultation",
        image: IMAGES.servicePostSurgical.src,
        imageAlt: IMAGES.servicePostSurgical.alt,
        blurDataURL: IMAGES.servicePostSurgical.blurDataURL,
      }}

      // ── Conditions ────────────────────────────────────────────────────
      conditions={{
        sectionLabel: "Who Is This For?",
        sectionSubtitle: "This program is suitable for individuals who:",
        items: [
          "Are recovering from cosmetic or medical surgery",
          "Want faster healing and reduced downtime",
          "Are concerned about scarring or complications",
          "Have delayed healing or metabolic challenges",
          "Require structured post-surgical support",
        ],
        backgroundImage: IMAGES.servicePostSurgicalHero.src,
        backgroundImageAlt: IMAGES.servicePostSurgical.alt,
      }}

      // ── Programs Grid ─────────────────────────────────────────────────
      programs={{
        sectionTitle: "Comprehensive Recovery Programs",
        cards: [
          {
            image: "/post-surgical1.png",
            imageAlt: "Regenerative Therapies",
            title: "Regenerative Therapies",
            desc: "PRP, peptide protocols, and cellular repair support.",
          },
          {
            image: "/post-surgical2.png",
            imageAlt: "Advanced Wound Care",
            title: "Advanced Wound Care",
            desc: "Medical dressings, infection prevention, and healing support.",
          },
          {
            image: "/post-surgical33.png",
            imageAlt: "IV Recovery Therapy",
            title: "IV Recovery Therapy",
            desc: "Targeted infusions to support immunity, and recovery.",
          },
          {
            image: "/post-surgical44.png",
            imageAlt: "Nutritional & Nutritional Support",
            title: "Nutritional & Nutritional Support",
            desc: "Optimise nutrition and micronutrients for healing.",
          },
          {
            image: "/post-surgical55.png",
            imageAlt: "Scar Minimisation",
            title: "Scar Minimisation",
            desc: "Treatments to improve recovery skin texture and minimise scarring.",
          },
          {
            image: "/post-surgical66.png",
            imageAlt: "Rehabilitation Support",
            title: "Rehabilitation Support",
            desc: "Mobility, lymphatic drainage, and recovery therapies.",
          },
          {
            image: "/post-surgical77.png",
            imageAlt: "Concierge Monitoring",
            title: "Concierge Monitoring",
            desc: "Dedicated physician oversight with regular reviews.",
          },
        ],
      }}

      // ── Plan ──────────────────────────────────────────────────────────
      plan={{
        title: "Your Recovery Plan",
        steps: [
          {
            title: "Medical Assessment",
            desc: "Evaluation of healing status, risk factors, and recovery needs.",
          },
          {
            title: "Targeted Treatment Plan",
            desc: "Personalised protocols for wound care, regeneration, and recovery.",
          },
          {
            title: "Advanced Therapies",
            desc: "Use of regenerative treatments and clinical interventions.",
          },
          {
            title: "Ongoing Monitoring",
            desc: "Continuous physician oversight and progress tracking.",
          },
        ],
        backgroundImage: "/personalized-post-surgical.png",
        backgroundImageAlt: IMAGES.programsHero.alt,
      }}

      // ── FAQ ───────────────────────────────────────────────────────────
      faq={{
        items: [
          {
            question: "Are treatments safe?",
            answer:
              "Yes. All procedures are performed using medically approved techniques and supervised by qualified professionals.",
          },
          {
            question: "Will results look natural?",
            answer:
              "Our approach focuses on subtle, natural enhancements rather than dramatic changes.",
          },
          {
            question: "Do I need a consultation first?",
            answer:
              "Yes. Every treatment begins with a personalised consultation to determine the best approach.",
          },
        ],
      }}

      // ── CTA Banner ────────────────────────────────────────────────────
      cta={{
        title: "Enhance Your Natural Appearance",
        subtitle:
          "Book a consultation to begin a personalised aesthetic treatment plan.",
        buttonText: "Contact Our Team",
        backgroundImage: IMAGES.servicesHero.src,
        backgroundImageAlt: IMAGES.servicesHero.alt,
      }}

      // ── Related Services ──────────────────────────────────────────────
      relatedServices={[
        {
          href: "/services/metabolic-weight",
          image: IMAGES.serviceMetabolic.src,
          imageAlt: "Metabolic & Weight Optimization",
          label: "Metabolic & Weight Optimization",
        },
        {
          href: "/services/regenerative-cellular",
          image: IMAGES.serviceHormone.src,
          imageAlt: "Regenerative & Cellular Medicine",
          label: "Regenerative & Cellular Medicine",
        },
        {
          href: "/services/longevity-performance",
          image: IMAGES.serviceLongevity.src,
          imageAlt: "Longevity & Performance Medicine",
          label: "Longevity & Performance Medicine",
        },
        {
          href: "/services/aesthetics-skin-medicine",
          image: IMAGES.serviceAestheticSkin.src,
          imageAlt: "Aesthetic & Skin Medicine",
          label: "Aesthetic & Skin Medicine",
        },
         {
          href: "/services/specialized-wellness-programs",
          image: IMAGES.serviceAssessment.src,
          imageAlt: "Specialized Wellness Programs",
          label: "Specialized Wellness Programs",
        },
      ]}
    />
  );
}