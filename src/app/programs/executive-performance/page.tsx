import type { Metadata } from "next";
import { IMAGES } from "@/lib/images";
import ProgramPageTemplate from "@/components/layout/ProgramPageTemplate";

export const metadata: Metadata = {
  title: "Executive Performance & Precision Fitness",
  description:
    "Physician-led training programs designed to optimize strength, body composition, and long-term physical performance through medically guided precision.",
};

export default function ExecutivePerformancePage() {
  return (
    <ProgramPageTemplate
      // ── Hero ──────────────────────────────────────────────────────────
      hero={{
        title: "Executive Performance & Precision Fitness",
        subtitle:
          "Physician-led training programs designed to optimize strength, body composition, and long-term physical performance through medically guided precision.",
        image: IMAGES.servicesHero.src,
        imageAlt: "Executive Performance & Precision Fitness",
      }}

      // ── Specialist ────────────────────────────────────────────────────
      specialist={{
        sectionTitle: "Led by a Clinical Fitness Specialist",
        doctor: {
          name: "Dr. Owen Michael Irowa, MD",
          role: "Clinical Fitness & Performance Specialist",
          credentials: [
            "B.Sc. Anatomy — University of Benin",
            "Doctor of Medicine — Texila American University",
            "MDCN Licensed Medical Doctor",
          ],
          bio: "With over a decade of experience in strength training and performance conditioning, Dr. Owen combines clinical knowledge with practical expertise to deliver structured, results-driven programs. His approach focuses on safe, medically guided performance optimization tailored to each individual.",
          image: "/owen.png",
          imageAlt: "Dr. Owen Michael Irowa",
        },
      }}

      // ── What We Optimize ──────────────────────────────────────────────
      optimization={{
        sectionTitle: "What We Optimize",
        backgroundImage: IMAGES.servicesHero.src,
        backgroundImageAlt: "Training background",
        pillars: [
          {
            title: "Body Composition Optimization",
            desc: "Improve fat-to-muscle ratio with structured, targeted training.",
          },
          {
            title: "Strength & Conditioning",
            desc: "Build strength, endurance, and overall physical capacity.",
          },
          {
            title: "Injury Prevention",
            desc: "Enhance movement patterns and reduce risk of injury.",
          },
          {
            title: "Metabolic Efficiency",
            desc: "Improve how your body uses and produces energy.",
          },
          {
            title: "Longevity-Focused Training",
            desc: "Train for long-term performance, not short-term results.",
          },
        ],
      }}

      // ── What You Can Expect ───────────────────────────────────────────
      outcomes={{
        sectionTitle: "What You Can Expect",
        image: IMAGES.servicesHero.src,
        imageAlt: "Fitness training",
        items: [
          { label: "Improved strength and physical performance" },
          { label: "Better body composition" },
          { label: "Reduced risk of injury" },
          { label: "Increased energy and endurance" },
          { label: "Sustainable, long-term results" },
        ],
      }}

      // ── CTA Banner ────────────────────────────────────────────────────
      cta={{
        title: "Train at a Higher Standard",
        subtitle:
          "Experience a clinically guided approach to fitness designed for performance, precision, and long-term health.",
        buttonText: "Contact Our Team",
        buttonHref: "/contact",
        backgroundImage: IMAGES.servicesHero.src,
        backgroundImageAlt: "Gym background",
      }}
    />
  );
}