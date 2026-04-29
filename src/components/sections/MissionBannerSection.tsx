"use client";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

export default function MissionBannerSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.045),_transparent_42%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.035),_transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0)_0%,_rgba(255,255,255,0)_55%,_rgba(255,255,255,0.7)_78%,_rgba(255,255,255,1)_100%)]" />
        <div className="absolute inset-0 opacity-[0.018] [background-image:linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      {/* Full-width image */}
      <div className="relative w-full section-container px-2 md:px-4 aspect-[16/7] md:aspect-[16/4] overflow-hidden rounded-2xl">
        <Image
          src="/precision2.png"
          alt="Medical excellence"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Text block below image */}
      <section className="relative py-16">
        <Reveal>
          <div className="relative section-container max-w-3xl space-y-4 mx-auto text-center">
            <p className="text-gray-600 leading-relaxed italic">
              All peptides including GLP and adjunct compounds within our protocols undergo rigorous third-party testing to ensure the highest standards of purity, potency, and clinical safety each precisely tailored to the individual patient.
            </p>
          </div>
        </Reveal>
      </section>
    </section>
  );
}