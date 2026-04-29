import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import ServicePageTemplate from "@/components/layout/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Specialized Wellness Programs",
  description:
    "Comprehensive, physician-guided programs designed to support specific health needs, lifestyle optimisation, and long-term wellbeing through personalised care.",
};

export default function SpecializedWellnessPage() {
  return (
    <ServicePageTemplate
      // ── Hero ──────────────────────────────────────────────────────────
   hero={{
  title: "Specialized Wellness Programs — Comprehensive Wellness, Personalised for You",

  subtitle:
    "Comprehensive, physician-guided programs designed to support specific health needs, lifestyle optimisation, and long-term wellbeing through personalised care.",

  image: IMAGES.serviceAssessmentHero.src,
  imageAlt: IMAGES.serviceAssessmentHero.alt,
  blurDataURL: IMAGES.serviceAssessmentHero.blurDataURL,
}}

      // ── Approach ──────────────────────────────────────────────────────
      approach={{
        title: "A Holistic, Physician-Led Approach to Wellness",
        paragraphs: [
          "At Consult Dr B, we recognise that health is not one-dimensional. Our specialised wellness programs are designed to address unique health concerns, lifestyle goals, and recovery needs through a tailored, patient-centred approach.",
          "By combining clinical expertise, advanced diagnostics, and personalised care strategies, we provide structured programs that support both everyday wellness and more specific medical requirements.",
        ],
        ctaText: "Book a Wellness Consultation",
        image: IMAGES.serviceAssessment.src,
        imageAlt: IMAGES.serviceAssessment.alt,
        blurDataURL: IMAGES.serviceAssessment.blurDataURL,
      }}

      // ── Conditions ────────────────────────────────────────────────────
      conditions={{
        sectionLabel: "Areas of Focus",
        sectionSubtitle: "Our programs are designed to support:",
        items: [
          "Gender-specific health needs",
          "Lifestyle and fitness optimisation",
          "Preventive health and routine care",
          "Recovery and rehabilitation",
          "Advanced diagnostics and health monitoring",
          "Personalised wellness planning",
        ],
        backgroundImage: IMAGES.serviceAssessmentHero.src,
        backgroundImageAlt: IMAGES.serviceAssessmentHero.alt,
      }}

      // ── Programs Grid ─────────────────────────────────────────────────
      programs={{
        sectionTitle: "Programs Designed for Every Stage of Life",
        cards: [
          {
            image: "/wellness1.png",
            imageAlt: "Feminine Health",
            title: "Feminine Health",
            desc: "Personalised care addressing women's health needs through clinically guided assessment and treatment.",
          },
          {
            image: "/wellness2.png",
            imageAlt: "Foot Care & Podiatric Wellness",
            title: "Foot Care & Podiatric Wellness",
            desc: "Targeted care focused on foot health, mobility, and overall physical comfort.",
          },
          {
            image: "/wellness3.png",
            imageAlt: "Concierge & Tele-Medical Services",
            title: "Concierge & Tele-Medical Services",
            desc: "Patient-centred care delivered through direct access, remote consultations and personalised coordination.",
          },
          {
            image: "/wellness4.png",
            imageAlt: "Fitness & Athletic Body Optimisation",
            title: "Fitness & Athletic Body Optimisation",
            desc: "Programs designed to improve physical performance, strength, and overall fitness through medically guided strategies.",
          },
          {
            image: "/wellness5.png",
            imageAlt: "Medical Rehabilitation & Recovery Programs",
            title: "Medical Rehabilitation & Recovery Programs",
            desc: "Patient-centred support focused on restoring function, mobility, and overall physical wellbeing.",
          },
          {
            image: "/wellness6.png",
            imageAlt: "Santatorium & Restorative Health Retreat Therapy",
            title: "Santatorium & Restorative Health Retreat Therapy",
            desc: "Immersive programs designed to support recovery, relaxation, and full-body restoration.",
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
            desc: "Customised approach based on your needs and desired outcomes.",
          },
          {
            title: "Ongoing Care & Maintenance",
            desc: "Continued support to maintain and enhance results over time.",
          },
        ],
        backgroundImage: "/personalized-wellness.png",
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
          "Contact our team to begin a personalised aesthetic treatment plan.",
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
    href: "/services/longevity-performance-medicine",
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
    href: "/services/post-surgical-recovery",
    image: IMAGES.servicePostSurgical.src,
    imageAlt: "Post-Surgical Recovery & Wound Healing",
    label: "Post-Surgical Recovery & Wound Healing",
  },
]}
    />
  );
}