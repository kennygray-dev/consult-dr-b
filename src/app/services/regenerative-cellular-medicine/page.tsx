import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import ServicePageTemplate from "@/components/layout/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Regenerative & Cellular Medicine",
  description: "Advanced therapies designed to support cellular repair, accelerate recovery, and restore the body's natural healing processes through physician-led precision care.",
};

export default function RegenerativeCellularPage() {
  return (
    <ServicePageTemplate
      // ── Hero ──────────────────────────────────────────────────────────
   hero={{
  title:
    "Regenerative & Cellular Medicine",

  subtitle:
    "Advanced therapies designed to support cellular repair, accelerate recovery, and restore the body's natural healing processes through physician-led precision care.",

  image: IMAGES.serviceHormoneHero.src,
  imageAlt: IMAGES.serviceHormoneHero.alt,
  blurDataURL: IMAGES.serviceHormoneHero.blurDataURL,
}}
      // ── Approach ──────────────────────────────────────────────────────
      approach={{
        title: "Restoring Health at the Cellular Level",
        paragraphs: [
          "Regenerative and natural medicine focuses on supporting the body's natural ability to repair, restore, and regenerate. At Consult Dr B, our approach goes beyond symptom management to understand the underlying cellular and physiological processes that influence healing, recovery, and overall physiological balance.",
          "By combining clinical medicine, targeted therapies, and advanced recovery strategies, we design personalised programs that support tissue repair, immune function, and overall physiological balance.",
        ],
        ctaText: "Start Your Regenerative Journey",
        // 🔁 Replace with your own image when ready
        image: IMAGES.serviceHormone.src,
        imageAlt: IMAGES.serviceHormone.alt,
        blurDataURL: IMAGES.serviceHormone.blurDataURL,
      }}

      // ── Conditions ────────────────────────────────────────────────────
      conditions={{
        sectionLabel: "What We Help You Address",
        sectionSubtitle: "Our programs are designed for individuals who require:",
        items: [
          "Recovery after surgery or medical treatment",
          "Post-chemotherapy support and restoration",
          "Support for chronic fatigue or slow recovery",
          "Rehabilitation after injury or physical stress",
          "Cellular repair and detoxification support",
          "Long-term restoration after illness",
        ],
        // 🔁 Replace with your own image when ready
        backgroundImage: IMAGES.serviceHormoneHero.src,
        backgroundImageAlt: IMAGES.serviceHormoneHero.src,
      }}

      // ── Programs Grid ─────────────────────────────────────────────────
      programs={{
        sectionTitle: "Programs Within Regenerative & Cellular Medicine",
        cards: [
          {
            image: "/regenerative1.png",
            imageAlt: "Peptide Body Remodeling",
            title: "Peptide Body Remodeling",
            desc: "Targeted protocols designed to support cellular repair, tissue regeneration, and improved body composition.",
          },
          {
            image: "/regenerative2.png",
            imageAlt: "Detox & Cellular Reset Programs",
            title: "Detox & Cellular Reset Programs",
            desc: "Structured programs designed to support detoxification pathways and restore internal balance.",
          },
          {
            image: "/regenerative3.png",
            imageAlt: "Post-Chemotherapy Recovery & Cellular Restoration",
            title: "Post-Chemotherapy Recovery & Cellular Restoration",
            desc: "Integrative programs designed to improve recovery, restore energy, and rebuild physiological function after treatment.",
          },
          {
            image: "/regenerative4.png",
            imageAlt: "Post-Surgical Recovery & Regenerative Support",
            title: "Post-Surgical Recovery & Regenerative Support",
            desc: "Programs focused on accelerating healing, reduce recovery time, and restore tissue repair.",
          },
          {
            image: "/regenerative5.png",
            imageAlt: "Rehabilitation & Functional Recovery Programs",
            title: "Rehabilitation & Functional Recovery Programs",
            desc: "Comprehensive recovery plans focused on restoring movement, strength, and physical function.",
          },
          {
            image: "/regenerative6.png",
            imageAlt: "International Health Optimization",
            title: "International Health Optimization",
            desc: "Coordinated care programs for patients requiring international-standard recovery and regenerative support across distances.",
          },
        ],
      }}

      // ── Plan ──────────────────────────────────────────────────────────
      plan={{
        title: "Your Personalized Recovery Plan",
        steps: [
          {
            title: "Medical Assessment",
            desc: "Comprehensive evaluation of your condition history and recovery needs.",
          },
          {
            title: "Diagnostic Testing",
            desc: "Laboratory and clinical analysis to identify underlying factors affecting healing.",
          },
          {
            title: "Targeted Treatment Plan",
            desc: "Personalised protocols designed to support cellular repair and regeneration.",
          },
          {
            title: "Ongoing Medical Support",
            desc: "Continuous medical supervision to track progress and optimise outcomes.",
          },
        ],
        // 🔁 Replace with your own image when ready
        backgroundImage: "/personal-regen.png",
        backgroundImageAlt: IMAGES.programsHero.alt,
      }}

      // ── FAQ ───────────────────────────────────────────────────────────
      faq={{
        items: [
          {
            question: "What is regenerative medicine?",
            answer:
              "It focuses on supporting the body's natural ability to repair and restore itself at the cellular level.",
          },
          {
            question: "Who is this program suitable for?",
            answer:
              "It is ideal for individuals recovering from medical treatments, surgery, injury, or chronic conditions.",
          },
          {
            question: "Is this medically supervised?",
            answer:
              "Yes. All programs are designed and overseen by qualified medical professionals.",
          },
        ],
      }}

      // ── CTA Banner ────────────────────────────────────────────────────
      cta={{
        title: "Support Your Body's Natural Recovery",
        subtitle:
          "Begin a personalised program designed to restore, repair, and optimise your health.",
        buttonText: "Contact Our Team",
        // 🔁 Replace with your own image when ready
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
