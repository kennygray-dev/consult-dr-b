"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useCallback } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const mousePos = useRef({ x: -999, y: -999 });
  const currentPos = useRef({ x: -999, y: -999 });

  // ── Seamless video loop ──────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };
    video.addEventListener("ended", handleEnded);
    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  // ── Spotlight cursor effect ──────────────────────────────────────────────
  // Uses requestAnimationFrame + lerp for a smooth, lag-free follow.
  // The base overlay stays at rgba(0,0,0,0.65); the spotlight punches a
  // radial gradient hole through it wherever the cursor rests.
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  const animate = useCallback(() => {
    // Smoothly interpolate toward the real cursor position
    currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.08);
    currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.08);

    if (overlayRef.current) {
      const { x, y } = currentPos.current;
      overlayRef.current.style.background = `
        radial-gradient(
          circle 280px at ${x}px ${y}px,
          rgba(0,0,0,0.15) 0%,
          rgba(0,0,0,0.50) 40%,
          rgba(0,0,0,0.65) 70%
        )
      `;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const section = overlayRef.current?.parentElement;
    if (!section) return;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    // On mouse leave, drift spotlight off-screen gracefully
    const handleLeave = () => {
      mousePos.current = { x: -999, y: -999 };
    };

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden md:mx-4 md:rounded-b-2xl">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/Human-body-hero.mp4"
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            style={{ willChange: "transform" }}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/*
          Spotlight overlay — base darkness is 65% black.
          The radial gradient is updated every rAF tick via the ref,
          so there are zero React re-renders during cursor movement.
        */}
        <div
          ref={overlayRef}
          className="absolute inset-0 transition-none"
          style={{ background: "rgba(0,0,0,0.65)" }}
        />

        <div className="section-container relative z-10 py-16 sm:py-24">
          <motion.div
            className="max-w-3xl space-y-6 sm:space-y-8 text-center mx-auto flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl text-white leading-tight sm:leading-snug">
              Consult Dr B International
              <br />
              Concierge Medical Services
            </h1>

            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md sm:max-w-xl mx-auto text-center font-light">
              Luxury medical care, research evidence-based
              <br />
              precision medicine, visible results
            </p>

            <motion.div
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.97 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="mx-auto"
>
  <Link
    href="/contact"
    className="inline-flex items-center gap-2 justify-center border border-white text-white bg-transparent hover:bg-white/10 transition-colors px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base rounded-md"
  >
    Get In Touch <ArrowRight size={16} />
  </Link>
</motion.div>
          </motion.div>
        </div>
      </section>
<PersonalizedProgramsSection />
      <PrecisionMedicineSection />
      
      <MissionBannerSection />
      <WhyChooseSection />
      <IntegratedNutritionalCareSection />
      <PeptideBioregulationSection />
      <EliteAestheticMedicalPartnerSection />
      <ExecutivePerformanceSection />

      {/* ── FAQ ── */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <Reveal>
            <FAQSection items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
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
