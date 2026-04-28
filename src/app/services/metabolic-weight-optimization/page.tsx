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
      hero={{
        title: "Metabolic & Weight Optimization",
        subtitle:
          "Physician-led metabolic programs designed to restore balance, improve body composition, and deliver sustainable health outcomes through precision medicine.",
        image: IMAGES.serviceMetabolicHero.src,
        imageAlt: IMAGES.serviceMetabolicHero.alt,
        blurDataURL: IMAGES.serviceMetabolicHero.blurDataURL,
      }}

      approach={{
        title: "A Clinical Approach to Weight & Metabolic Health",
        paragraphs: [
          "At Consult Dr B, metabolic health is approached as a core driver of overall wellbeing, not just weight management.",
          "We combine diagnostics, medical therapies, and personalised lifestyle strategies for measurable results.",
        ],
        ctaText: "Book a Metabolic Assessment",
        image: IMAGES.serviceMetabolic.src,
        imageAlt: IMAGES.serviceMetabolic.alt,
        blurDataURL: IMAGES.serviceMetabolic.blurDataURL,
      }}

      conditions={{
        sectionLabel: "What We Help You Address",
        sectionSubtitle:
          "Our metabolic programs are designed for individuals experiencing:",
        items: [
          "Difficulty losing or maintaining weight",
          "Slow or inefficient metabolism",
          "Weight regain after previous programs",
          "Fatigue linked to metabolic dysfunction",
          "Body composition challenges",
        ],
        backgroundImage: "/personalized-metabolic.png",
        backgroundImageAlt: IMAGES.serviceMetabolic.alt,
      }}

      programs={{
        sectionTitle: "Designed for Measurable Transformation",
        cards: [
          {
            image: "/metabolic1.png",
            imageAlt: "GLP Weight Management",
            title: "GLP Weight Management",
            desc: "Clinically guided weight management using advanced therapies.",
          },
          {
            image: "/metabolic2.png",
            imageAlt: "Metabolic Health Optimisation",
            title: "Metabolic Health Optimisation",
            desc: "Improve metabolic efficiency and energy balance.",
          },
          {
            image: "/metabolic3.png",
            imageAlt: "Body Composition Management",
            title: "Body Composition Management",
            desc: "Reduce fat while preserving lean muscle mass.",
          },
          {
            image: "/metabolic44.png",
            imageAlt: "Medical Weight Loss Protocols",
            title: "Medical Weight Loss Protocols",
            desc: "Structured physician-supervised programs.",
          },
        ],
      }}

      plan={{
        title: "Your Personalized Program",
        steps: [
          { title: "Comprehensive Consultation", desc: "In-depth review of your health history, lifestyle, and goals." },
          { title: "Advanced Diagnostics", desc: "Laboratory testing to assess metabolic and hormonal function." },
          { title: "Tailored Treatment Plan", desc: "Personalized program combining medical therapies and lifestyle strategies." },
          { title: "Ongoing Medical Support", desc: "Continuous monitoring and adjustments to ensure optimal results." },
        ],
        backgroundImage: "/personalized-metabolic.png",
        backgroundImageAlt: IMAGES.programsHero.alt,
      }}

      faq={{
        items: [
          {
            question: "Is this different from regular weight loss programs?",
            answer: "Yes. Our programs are medically supervised and focus on metabolic and hormonal factors, not just calorie restriction.",
          },
          {
            question: "Do I need medical tests before starting??",
            answer: "Yes. Diagnostics are essential to create a safe and effective personalized plan.",
          },
          {
            question: "Are results sustainable?",
            answer: "Our programs are designed for long-term metabolic balance, not short-term weight loss.",
          },
        ],
      }}

      cta={{
        title: "Start Your Metabolic Transformation",
        subtitle: "Book a consultation to begin a personalized, medically guided program designed for sustainable results.",
        buttonText: "Contact Our Team",
        backgroundImage: IMAGES.servicesHero.src,
        backgroundImageAlt: IMAGES.servicesHero.alt,
      }}

      relatedServices={[
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