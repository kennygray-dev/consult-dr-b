import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { PageHero, SectionHeader, Card, Badge } from "@/components/ui";

export const metadata: Metadata = {
  title: "Peptide Therapy",
  description: "Cutting-edge peptide protocols for longevity, performance, and recovery.",
};

const PEPTIDES = [
  {
    name: "BPC-157",
    category: "Recovery",
    desc: "A body-protective compound with remarkable regenerative properties — accelerating tissue repair, reducing inflammation, and supporting gut health.",
    benefits: ["Accelerated healing", "Gut barrier repair", "Anti-inflammatory", "Tendon & ligament support"],
  },
  {
    name: "Sermorelin",
    category: "Longevity",
    desc: "A growth hormone-releasing hormone analogue that stimulates natural GH production — improving body composition, sleep quality, and cellular repair.",
    benefits: ["Increased GH secretion", "Improved sleep architecture", "Enhanced fat metabolism", "Muscle preservation"],
  },
  {
    name: "TB-500",
    category: "Performance",
    desc: "Thymosin Beta-4 promotes cell migration, blood vessel growth, and muscle fibre formation — used by elite athletes for recovery and performance.",
    benefits: ["Muscle repair", "Reduced recovery time", "Improved flexibility", "Anti-fibrotic effects"],
  },
  {
    name: "GHK-Cu",
    category: "Anti-Aging",
    desc: "Copper peptide with potent regenerative effects on skin, hair, and connective tissue — one of the most studied anti-aging compounds available.",
    benefits: ["Collagen synthesis", "Hair follicle stimulation", "Wound healing", "Cognitive support"],
  },
  {
    name: "CJC-1295",
    category: "Longevity",
    desc: "A long-acting GHRH analogue that produces sustained growth hormone pulses — supporting lean muscle, fat loss, and deep sleep.",
    benefits: ["Sustained GH release", "Lean muscle gain", "Fat reduction", "Improved recovery"],
  },
  {
    name: "PT-141",
    category: "Vitality",
    desc: "A melanocortin receptor agonist addressing sexual health and vitality — the first peptide approved for sexual dysfunction.",
    benefits: ["Sexual health support", "Energy enhancement", "Mood elevation", "Hormonal balance"],
  },
];

const CATEGORY_COLORS: Record<string, "primary" | "secondary" | "outline"> = {
  Recovery:    "primary",
  Longevity:   "secondary",
  Performance: "outline",
  "Anti-Aging":"secondary",
  Vitality:    "primary",
};

export default function PeptidePage() {
  return (
    <>
      <PageHero
        eyebrow="Peptide Therapy"
        title="The Frontier of Regenerative Medicine"
        subtitle="Clinically supervised peptide protocols unlocking your body's innate capacity to heal, perform, and age optimally."
        image={IMAGES.peptideHero.src}
        imageAlt={IMAGES.peptideHero.alt}
        blurDataURL={IMAGES.peptideHero.blurDataURL}
      />

      {/* Disclaimer */}
      <div className="bg-secondary/10 border-l-4 border-secondary">
        <div className="section-container py-4 flex gap-3 items-start">
          <AlertTriangle size={18} className="text-secondary shrink-0 mt-0.5" />
          <p className="text-sm text-gray-700">
            <strong className="text-secondary">Medical Disclaimer:</strong> All peptide therapies are prescribed and supervised by a licensed physician. Individual results vary. Peptides are not approved for all conditions — a thorough consultation is required before any protocol begins.
          </p>
        </div>
      </div>

      <section className="py-24 bg-white">
        <div className="section-container space-y-14">
          <SectionHeader
            eyebrow="Our Protocols"
            title="Peptides We Work With"
            subtitle="Each peptide protocol is individually designed, physician-supervised, and continuously monitored for safety and efficacy."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PEPTIDES.map((p) => (
              <Card key={p.name} className="p-7 space-y-4 hover:border-secondary/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-2xl text-primary">{p.name}</h3>
                  <Badge variant={CATEGORY_COLORS[p.category] ?? "primary"}>{p.category}</Badge>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                  {p.benefits.map((b) => (
                    <li key={b} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-secondary rounded-full shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-center">
        <div className="section-container space-y-5">
          <h2 className="section-title-light">Is Peptide Therapy Right for You?</h2>
          <p className="text-white/70 max-w-xl mx-auto">Book a consultation with Dr B to discuss your goals and determine which peptide protocol is appropriate for your biology.</p>
          <Link href="/contact" className="btn-gold inline-flex">
            Book a Peptide Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
