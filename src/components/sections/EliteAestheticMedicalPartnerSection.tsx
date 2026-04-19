import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { IMAGES } from "@/lib/images";

export default function EliteAestheticMedicalPartnerSection() {
  return (
    <section className="py-28" style={{ backgroundColor: "#E3E8F8" }}>
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <Reveal>
          <div className="space-y-6">
            <h2 className="font-heading text-4xl text-black leading-tight">
              Elite Aesthetic Medical Partner Program
            </h2>

            <p className="text-gray-600 leading-relaxed">
              A global partnership framework connecting leading aesthetic clinics and spas with internationally trained physicians to ensure safe, ethical, and clinically responsible treatments.
            </p>

            <Link
              href="/partnership"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black bg-transparent hover:bg-black hover:text-white transition-colors text-sm"
            >
              Partner with us <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.1}>
          <div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/30"
            style={{ backgroundColor: "#E3E8F8" }}
          >
            <Image
              src={IMAGES.partnershipHero.src}
              alt="Elite Aesthetic Medical Partnership"
              fill
              className="object-cover"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}