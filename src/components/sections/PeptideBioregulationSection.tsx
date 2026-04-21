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
        <div className="relative z-10 section-container flex flex-col items-center justify-center text-center max-w-3xl mx-auto space-y-5 sm:space-y-6">

          {/* Heading */}
          <h2 className="font-heading text-2xl sm:text-4xl text-white leading-snug sm:leading-tight px-2 sm:px-0">
            Signature Peptide Bioregulation System
          </h2>

          {/* Paragraph */}
          <p className="text-white/80 text-sm sm:text-lg leading-relaxed sm:leading-loose px-4 sm:px-0 max-w-md sm:max-w-none">
            A physician-led, ultra-premium peptide bioregulation program integrating Eastern European medical science with precision diagnostics and concierge care.
          </p>

          {/* Button */}
          <Link
            href="/programs/signature-peptide-bioregulation-system"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors text-sm"
          >
            Learn About Our Peptide Program <ArrowRight size={15} />
          </Link>

        </div>
      </Reveal>

    </section>
  );
}