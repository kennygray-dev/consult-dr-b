import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import ServicePageTemplate from "@/components/layout/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Longevity & Performance Medicine",
  description: "Precision health programs designed to optimize cellular function, enhance performance, and extend long-term vitality through advanced, physician-led care.",
};

export default function LongevityPerformancePage() {
  return (
    <ServicePageTemplate
      // ── Hero ──────────────────────────────────────────────────────────
      hero={{
        eyebrow: "Longevity & Performance Medicine",
        title: "Optimizing Health for Long-Term Performance",
        subtitle:
          "Precision health programs designed to optimize cellular function, enhance performance, and extend long-term vitality through advanced, physician-led care.",
        image: IMAGES.serviceLongevity.src,
        imageAlt: IMAGES.serviceLongevity.alt,
        blurDataURL: IMAGES.serviceLongevity.blurDataURL,
      }}

      // ── Approach ──────────────────────────────────────────────────────
      approach={{
        title: "Longevity and Performance Medicine Focused on the Future",
        paragraphs: [
          "Longevity and performance medicine focuses on enhancing how your body functions today, while preserving health for the future. At Consult Dr B, we combine clinical science, advanced diagnostics, and precision therapies to optimise energy production, hormonal balance, and cellular health.",
          "Our programs are designed not only for individuals managing health concerns, but also for those seeking to perform at a higher level, maintain vitality, and extend their healthspan.",
        ],
        ctaText: "Start Your Longevity Assessment",
        // 🔁 Replace with your own image when ready
        image: IMAGES.serviceLongevity.src,
        imageAlt: IMAGES.serviceLongevity.alt,
        blurDataURL: IMAGES.serviceLongevity.blurDataURL,
      }}

      // ── Conditions ────────────────────────────────────────────────────
      conditions={{
        sectionLabel: "Areas of Focus",
        sectionSubtitle: "Our programs are designed to improve:",
        items: [
          "Energy levels and fatigue resistance",
          "Hormonal balance and regulation",
          "Cellular function and mitochondrial health",
          "Cognitive performance and mental clarity",
          "Physical performance and recovery",
          "Long-term health and aging processes",
        ],
        // 🔁 Replace with your own image when ready
        backgroundImage: IMAGES.serviceLongevity.src,
        backgroundImageAlt: IMAGES.serviceLongevity.alt,
      }}

      // ── Programs Grid ─────────────────────────────────────────────────
      programs={{
        sectionTitle: "Programs Within Longevity & Performance Medicine",
        cards: [
          {
            image: IMAGES.serviceLongevity.src,
            imageAlt: "NAD+ Cellular Restoration Therapy",
            title: "NAD+ Cellular Restoration Therapy",
            desc: "Advanced therapy designed to support cellular repair, increase energy production, and enhance overall vitality.",
          },
          {
            image: IMAGES.serviceLongevity.src,
            imageAlt: "Mitochondrial & Cellular Energy Optimisation",
            title: "Mitochondrial & Cellular Energy Optimisation",
            desc: "Targeted protocols focused on improving how your cells produce and use energy.",
          },
          {
            image: IMAGES.serviceLongevity.src,
            imageAlt: "Precision Hormone Optimisation",
            title: "Precision Hormone Optimisation",
            desc: "Clinically guided programs designed to restore hormonal balance and support physical performance and wellbeing.",
          },
          {
            image: IMAGES.serviceLongevity.src,
            imageAlt: "Advanced Longevity Protocols",
            title: "Advanced Longevity Protocols",
            desc: "Personalised strategies aimed at improving long-term health outcomes and slowing aging processes.",
          },
          {
            image: IMAGES.serviceLongevity.src,
            imageAlt: "Metabolic Reset & Anti-Aging Programs",
            title: "Metabolic Reset & Anti-Aging Programs",
            desc: "Structured programs to improve metabolic efficiency and support healthy metabolic aging.",
          },
          {
            image: IMAGES.serviceLongevity.src,
            imageAlt: "Executive Health Optimisation Programs",
            title: "Executive Health Optimisation Programs",
            desc: "Comprehensive, high-value programs designed for individuals seeking peak performance and long-term vitality.",
          },
        ],
      }}

      // ── Plan ──────────────────────────────────────────────────────────
      plan={{
        title: "Your Personalized Recovery Plan",
        steps: [
          {
            title: "Comprehensive Assessment",
            desc: "In-depth evaluation of your health, performance goals, and lifestyle.",
          },
          {
            title: "Advanced Diagnostics",
            desc: "Detailed testing to assess metabolic, nutritional, and cellular function.",
          },
          {
            title: "Personalized Protocols",
            desc: "Tailored strategies designed to optimise performance and long-term health.",
          },
          {
            title: "Continuous Monitoring",
            desc: "Ongoing medical support to refine and maintain optimal results.",
          },
        ],
        // 🔁 Replace with your own image when ready
        backgroundImage: IMAGES.programsHero.src,
        backgroundImageAlt: IMAGES.programsHero.alt,
      }}

      // ── FAQ ───────────────────────────────────────────────────────────
      faq={{
        items: [
          {
            question: "Who is the program designed for?",
            answer:
              "It is ideal for individuals seeking to optimise performance, improve energy, and maximise long-term health.",
          },
          {
            question: "Do I need to have a medical condition?",
            answer:
              "No. These programs are designed for healthy individuals looking to enhance performance and longevity.",
          },
          {
            question: "How is this different from general wellness programs?",
            answer:
              "Our integrative medicine is clinically guided, data-driven, and based on advanced diagnostics.",
          },
        ],
      }}

      // ── CTA Banner ────────────────────────────────────────────────────
      cta={{
        title: "Optimize Your Health & Performance",
        subtitle:
          "Start a personalised program designed to enhance your energy, performance, and long-term vitality.",
        buttonText: "Contact Our Team",
        // 🔁 Replace with your own image when ready
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
          image: IMAGES.peptideHero.src,
          imageAlt: "Regenerative & Cellular Medicine",
          label: "Regenerative & Cellular Medicine",
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