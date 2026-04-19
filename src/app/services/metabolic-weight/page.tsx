import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import ServicePageTemplate from "@/components/layout/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Metabolic & Weight Optimization",
  description: "Advanced metabolic medicine and weight optimisation protocols.",
};

export default function MetabolicWeightPage() {
  return (
    <ServicePageTemplate
      // ── Hero ──────────────────────────────────────────────────────────
      hero={{
        eyebrow: "Metabolic & Weight Optimization",
        title: "Reclaim Your Metabolism",
        subtitle:
          "Physician-led programs designed to restore metabolic balance, support sustainable weight management, and improve overall body composition through clinically guided care.",
        image: IMAGES.serviceMetabolic.src,
        imageAlt: IMAGES.serviceMetabolic.alt,
        blurDataURL: IMAGES.serviceMetabolic.blurDataURL,
      }}

      // ── Approach ──────────────────────────────────────────────────────
      approach={{
        title: "A Clinical Approach to Weight & Metabolic Health",
        paragraphs: [
          "At Consult Dr B, metabolic health is approached as a core driver of overall wellbeing, not just weight management. Our programs are designed to address the underlying factors that influence weight gain, energy regulation, and metabolic efficiency — including hormonal balance, insulin sensitivity, and cellular function.",
          "By combining advanced diagnostics, medical therapies, and personalised lifestyle strategies, we create structured programs that deliver safe, sustainable, and measurable results.",
        ],
        ctaText: "Book a Metabolic Assessment",
        // 🔁 Replace with your own image when ready
        image: IMAGES.serviceMetabolic.src,
        imageAlt: IMAGES.serviceMetabolic.alt,
        blurDataURL: IMAGES.serviceMetabolic.blurDataURL,
      }}

      // ── Conditions ────────────────────────────────────────────────────
      conditions={{
        sectionLabel: "What We Help You Address",
        sectionSubtitle: "Our metabolic programs are designed for individuals experiencing:",
        items: [
          "Difficulty losing or maintaining weight",
          "Slow or inefficient metabolism",
          "Weight regain after previous programs",
          "Fatigue linked to metabolic dysfunction",
          "Body composition challenges (fat vs muscle balance)",
        ],
        // 🔁 Replace with your own image when ready
        backgroundImage: IMAGES.serviceMetabolic.src,
        backgroundImageAlt: IMAGES.serviceMetabolic.alt,
      }}

      // ── Programs Grid ─────────────────────────────────────────────────
      programs={{
        sectionTitle: "Designed for Measurable Transformation",
        cards: [
          {
            image: IMAGES.serviceMetabolic.src,
            imageAlt: "GLP Weight Management",
            title: "GLP Weight Management",
            desc: "Clinically guided weight management using advanced therapies to regulate appetite and support sustainable fat loss.",
          },
          {
            image: IMAGES.serviceMetabolic.src,
            imageAlt: "Metabolic Health Optimisation",
            title: "Metabolic Health Optimisation",
            desc: "Targeted strategies designed to improve metabolic efficiency, energy balance, and overall physiological function.",
          },
          {
            image: IMAGES.serviceMetabolic.src,
            imageAlt: "Body Composition Management",
            title: "Body Composition Management",
            desc: "Programs focused on reducing body fat while preserving or improving lean muscle mass.",
          },
          {
            image: IMAGES.serviceMetabolic.src,
            imageAlt: "Medical Weight Loss Protocols",
            title: "Medical Weight Loss Protocols",
            desc: "Structured, physician-supervised programs tailored to your metabolic profile and health goals.",
          },
        ],
      }}

      // ── Plan ──────────────────────────────────────────────────────────
      plan={{
        title: "Your Personalized Program",
        steps: [
          { title: "Comprehensive Consultation", desc: "In-depth review of your health history, lifestyle, and goals." },
          { title: "Advanced Diagnostics",       desc: "Laboratory testing to assess metabolic and hormonal function." },
          { title: "Tailored Treatment Plan",    desc: "Personalised program combining medical therapies and lifestyle strategies." },
          { title: "Ongoing Medical Support",    desc: "Continuous monitoring and adjustments to ensure optimal results." },
        ],
        // 🔁 Replace with your own image when ready
        backgroundImage: IMAGES.programsHero.src,
        backgroundImageAlt: IMAGES.programsHero.alt,
      }}

      // ── FAQ ───────────────────────────────────────────────────────────
      faq={{
        items: [
          {
            question: "Is this different from regular weight loss programs?",
            answer: "Yes. Our programs are medically supervised and focus on metabolic and hormonal factors, not just calorie restriction.",
          },
          {
            question: "Do I need medical tests before starting?",
            answer: "Yes. Diagnostics are essential to create a safe and effective personalised plan.",
          },
          {
            question: "Are the results sustainable?",
            answer: "Our programs are designed for long-term metabolic balance, not short-term weight loss.",
          },
        ],
      }}

      // ── CTA Banner ────────────────────────────────────────────────────
      cta={{
        title: "Start Your Metabolic Transformation",
        subtitle: "Book a consultation to begin a personalised, medically guided program designed for sustainable results.",
        buttonText: "Contact Our Team",
        // 🔁 Replace with your own image when ready
        backgroundImage: IMAGES.servicesHero.src,
        backgroundImageAlt: IMAGES.servicesHero.alt,
      }}

      // ── Related Services ──────────────────────────────────────────────
      relatedServices={[
        {
          href: "/services/regenerative-cellular",
          image: IMAGES.peptideHero.src,
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
          href: "/services/aesthetics-skin",
          image: IMAGES.serviceAssessment.src,
          imageAlt: "Aesthetic & Skin Medicine",
          label: "Aesthetic & Skin Medicine",
        },
        {
          href: "/services/post-surgical-recovery",
          image: IMAGES.servicesHero.src,
          imageAlt: "Post-Surgical Recovery & Wound Healing",
          label: "Post-Surgical Recovery & Wound Healing",
        },
        {
          href: "/services/specialized-wellness",
          image: IMAGES.coachHero.src,
          imageAlt: "Specialized Wellness Programs",
          label: "Specialized Wellness Programs",
        },
      ]}
    />
  );
}