// components/sections/PrecisionMedicineSection.tsx
"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PrecisionMedicineSection() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container text-center max-w-3xl mx-auto space-y-6">
        <Reveal>
          <h2 className="font-heading text-3xl text-secondary leading-tight">
            Precision Medicine for Long-Term Vitality
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-gray-500 leading-relaxed">
            Consult Dr B is a physician-led precision health practice dedicated to preventive, metabolic, cellular, and regenerative medicine. Our internationally trained medical team combines modern clinical science with targeted wellness strategies to optimize metabolic health, enhance cellular function, and support long-term vitality.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-secondary text-secondary px-6 py-2.5 text-sm hover:bg-secondary hover:text-white transition-all duration-200"
          >
            About Us <ArrowRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}