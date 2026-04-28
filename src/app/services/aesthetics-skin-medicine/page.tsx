import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import ServicePageTemplate from "@/components/layout/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Aesthetic & Skin Medicine",
  description:
    "Clinically guided aesthetic treatments designed to support skin health, restore confidence, and enhance natural appearance through advanced medical care.",
};

export default function AestheticsSkinPage() {
  return (
    <ServicePageTemplate
      // ── Hero ──────────────────────────────────────────────────────────
    hero={{
  title:
    "Aesthetic & Skin Medicine — Enhance Your Natural Appearance",

  subtitle:
    "Clinically guided aesthetic treatments designed to support skin health, restore confidence, and enhance natural appearance through advanced medical care.",

  image: IMAGES.serviceAestheticSkinHero.src,
  imageAlt: IMAGES.serviceAestheticSkinHero.alt,
  blurDataURL: IMAGES.serviceAestheticSkinHero.blurDataURL,
}}

      // ── Approach ──────────────────────────────────────────────────────
      approach={{
        title: "A Clinical Approach to Skin Health & Aesthetics",
        paragraphs: [
          "At Consult Dr B, aesthetic medicine is approached as an extension of overall health and wellbeing. Our treatments focus on improving skin quality, structure, and function, using medically guided techniques and advanced technologies. Rather than temporary fixes, we aim to support long-term skin health and natural-looking results.",
          "Each treatment plan is personalised, ensuring outcomes that align with your individual features and goals.",
        ],
        ctaText: "Book an Aesthetic Consultation",
        image: IMAGES.serviceAestheticSkin.src,
        imageAlt: IMAGES.serviceAestheticSkin.alt,
        blurDataURL: IMAGES.serviceAestheticSkin.blurDataURL,
      }}

      // ── Conditions ────────────────────────────────────────────────────
      conditions={{
        sectionLabel: "Areas We Treat",
        sectionSubtitle: "Our aesthetic programs are designed to support:",
        items: [
          "Skin quality and texture",
          "Signs of aging and skin fatigue",
          "Body contouring and sculpting",
          "Skin health and maintenance",
          "Confidence in physical appearance",
        ],
        backgroundImage: IMAGES.serviceAestheticSkinHero.src,
        backgroundImageAlt: IMAGES.serviceAestheticSkin.alt,
      }}

      // ── Programs Grid ─────────────────────────────────────────────────
      programs={{
        sectionTitle: "Designed for Natural, Lasting Results",
        cards: [
          {
            image: "/Aesthetic1.png",
            imageAlt: "Beauty & Skin Health Programs",
            title: "Beauty & Skin Health Programs",
            desc: "Personalised treatments designed to maintain and improve overall skin health.",
          },
          {
            image: "/Aesthetic2.png",
            imageAlt: "Body Sculpting",
            title: "Body Sculpting",
            desc: "Clinically guided procedures focused on enhancing body contour and shape.",
          },
          {
            image: "/Aesthetic3.png",
            imageAlt: "Advanced Skin Therapies",
            title: "Advanced Skin Therapies",
            desc: "Targeted treatments designed to improve skin texture, tone, and appearance.",
          },
          {
            image: "/Aesthetic4.png",
            imageAlt: "Medical Aesthetic Devices",
            title: "Medical Aesthetic Devices",
            desc: "Use of advanced technologies to support skin rejuvenation and non-invasive enhancements.",
          },
        ],
      }}

      // ── Plan ──────────────────────────────────────────────────────────
      plan={{
        title: "Your Personalized Recovery Plan",
        steps: [
          {
            title: "Consultation",
            desc: "Assessment of your skin, goals, and treatment preferences.",
          },
          {
            title: "Clinical Evaluation",
            desc: "Identification of underlying factors affecting skin health.",
          },
          {
            title: "Tailored Treatment Plan",
            desc: "Customized approach based on your needs and desired outcomes.",
          },
          {
            title: "Ongoing Care & Maintenance",
            desc: "Continued support to maintain and enhance results over time.",
          },
        ],
        backgroundImage: '/personalized-aesthetic.png',
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
          href: "/services/metabolic-weight-optimization",
          image: IMAGES.serviceMetabolic.src,
          imageAlt: "Metabolic & Weight Optimization",
          label: "Metabolic & Weight Optimization",
        },
        {
          href: "/services/regenerative-cellular-medicine",
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
          href: "/services/post-surgical-recovery",
          image: IMAGES.servicePostSurgical.src,
          imageAlt: "Post-Surgical Recovery & Wound Healing",
          label: "Post-Surgical Recovery & Wound Healing",
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