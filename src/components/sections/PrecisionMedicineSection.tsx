"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PrecisionMedicineSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.045),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.035),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_55%,_rgba(255,255,255,0.7)_78%,_rgba(255,255,255,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>
      <div className="relative section-container text-center max-w-3xl mx-auto space-y-6">
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