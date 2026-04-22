"use client";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

export default function MissionBannerSection() {
  return (
    <>
      {/* Full-width image */}
      <div       className="relative w-full section-container px-2 md:px-4 aspect-[16/7] md:aspect-[16/4] overflow-hidden rounded-none">
        <Image
          src="/precision.png"
          alt="Medical excellence"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Text block below image */}
      <section className="py-16 bg-white">
        <Reveal>
          <div className="section-container max-w-3xl space-y-4 mx-auto text-center">
            <p className="text-gray-600 leading-relaxed italic">
             All peptides including GLP and adjunct compounds within our protocols undergo rigorous third-party testing to ensure the highest standards of purity, potency, and clinical safety each precisely tailored to the individual patient.
            </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}