import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function PeptideBioregulationSection() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/peptides.png"
          alt="Peptide Bioregulation System"
          fill
          className="object-cover scale-110 -translate-y-10"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <Reveal>
        <div className="relative z-10 section-container flex flex-col items-center justify-center text-center max-w-3xl space-y-6 mx-auto">

          <h2 className="font-heading text-4xl text-white leading-tight">
            Signature Peptide Bioregulation System
          </h2>

          <p className="text-white/80 leading-loose text-lg">
            A physician-led, ultra-premium peptide bioregulation program integrating Eastern European medical science with precision diagnostics and concierge care.
          </p>

          <Link
            href="/peptide"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors text-sm"
          >
            Learn About Our Peptide Program <ArrowRight size={15} />
          </Link>

        </div>
      </Reveal>

    </section>
  );
}