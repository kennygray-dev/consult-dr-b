"use client";
import { motion } from "framer-motion";import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { IMAGES } from "@/lib/images";

import Reveal from "@/components/ui/Reveal";
import PrecisionMedicineSection from "@/components/sections/PrecisionMedicineSection";
import MissionBannerSection from "@/components/sections/MissionBannerSection";
import PersonalizedProgramsSection from "@/components/sections/PersonalizedProgramsSection";
import PeptideBioregulationSection from "@/components/sections/PeptideBioregulationSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import IntegratedNutritionalCareSection from "@/components/sections/IntegratedNutritionalCareSection";
import EliteAestheticMedicalPartnerSection from "@/components/sections/EliteAestheticMedicalPartnerSection";
import ExecutivePerformanceSection from "@/components/sections/ExecutivePerformanceSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";


// ─── Data ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    question: "What makes Consult Dr B different from traditional clinics?",
    answer:
      "Consult Dr B focuses on preventive and regenerative medicine designed to address the root causes of disease rather than only managing symptoms.",
  },
  {
    question: "Are consultations personalized?",
    answer:
      "Yes. Each patient undergoes a detailed clinical assessment and laboratory analysis before a personalized treatment plan is developed.",
  },
  {
    question: "Do you offer international consultations?",
    answer:
      "Yes. Telemedical consultations and concierge coordination are available for international patients.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src={IMAGES.homeHero.src}
          alt={IMAGES.homeHero.alt}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={IMAGES.homeHero.blurDataURL}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="section-container relative z-10 py-24">
          <motion.div
            className="max-w-3xl space-y-8 text-center mx-auto flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading text-5xl md:text-6xl text-white leading-snug">
              Consult Dr B International<br />concierge Medical Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto text-center font-light">
              Luxury medical care, research evidence-based<br />
              precision medicine, visible results
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white text-white bg-transparent hover:bg-white/10 px-6 py-3 rounded-md mx-auto"
            >
              Book Consultation <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
      <PrecisionMedicineSection />
<MissionBannerSection />
<PersonalizedProgramsSection />
     <WhyChooseSection />
<IntegratedNutritionalCareSection />

   <PeptideBioregulationSection />


    <EliteAestheticMedicalPartnerSection />

    <ExecutivePerformanceSection />

      {/* ── About + FAQ ── */}
      <section className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="section-container">
          <Reveal>
            <FAQSection items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Start Your Personalized Health Journey"
        subtitle="Our medical team is here to guide you through a personalised care plan designed to support your health and everyday wellbeing."
        buttonText="Contact Our Team"
        buttonHref="/contact"
        backgroundImage={IMAGES.servicesHero.src}
        backgroundImageAlt={IMAGES.servicesHero.alt}
      />
    </>
  );
}