import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Signature Peptide Bioregulation System",
  description:
    "A physician-led ultra-premium peptide bioregulation program integrating Eastern European medical science with precision diagnostics and concierge care.",
};

const ARCHITECTURE = [
  {
    title: "Advanced Diagnostic Intelligence",
    items: [
      "Comprehensive medical evaluation conducted under physician supervision",
      "Deep biomarker and metabolic analysis tailored to each client",
      "Full profiling of hormonal, inflammatory, and neuroinflammation health",
    ],
  },
  {
    title: "IV & Injectable Optimization",
    items: [
      "400+ Evidence-informed formulations",
      "Antioxidant and mitochondrial support",
      "Recovery-focused infusion formats",
    ],
  },
  {
    title: "Targeted Peptide Therapy",
    items: [
      "Individually curated protocols",
      "Organ system and goal-specific selection",
    ],
  },
  {
    title: "Concierge Medical Oversight",
    items: [
      "Direct physician supervision",
      "Real-time protocol adjustments",
      "Priority access and continuous care",
    ],
  },
  {
    title: "Luxury Delivery",
    items: [
      "Home service or private suite",
      "Discreet, high-end client experience",
    ],
  },
  {
    title: "Tracking & Continuity",
    items: [
      "Mid-cycle optimization monitoring",
      "MIV-cycle optimization",
      "Long-term longevity planning",
    ],
  },
];

const PROTOCOLS = [
  {
    number: "PROTOCOL 1",
    title: "Neuro-Executive Optimization",
    price: "$4,000 – $10,000 / cycle",
    image: IMAGES.serviceAssessment.src,
    imageAlt: "Neuro-Executive Optimization",
    corePeptides: ["Semax", "Selank", "BPC-157"],
    valueBenefits: [
      "Enhances cognitive processing speed and executive function",
      "Reduces stress response and enhancing regulation",
      "Optimizes sleep architecture, blood pressure and hormones",
    ],
    clientReceives: [
      "Personalized peptide therapy outline",
      "Neuro support full-cycle therapy",
      "Physician-led cognitive optimization monitoring",
    ],
  },
  {
    number: "PROTOCOL 2",
    title: "Precision Longevity & Cellular Reset",
    price: "$12,000 – $20,000 / cycle",
    image: IMAGES.peptideHero?.src ?? IMAGES.serviceAssessment.src,
    imageAlt: "Precision Longevity & Cellular Reset",
    corePeptides: ["Epithalon", "Thymalin", "GHK-Cu"],
    valueBenefits: [
      "Supports circadian rhythm and deep restorative sleep",
      "Promotes cellular repair and anti-aging",
      "Addresses systemic inflammatory burden associated with aging",
    ],
    clientReceives: [
      "Infrared IV therapy (glutathione-based support)",
      "Structured sleep optimization protocol",
      "Ongoing physician-led longevity assessment",
    ],
  },
  {
    number: "PROTOCOL 3",
    title: "Immune Restoration & Recovery",
    price: "$8,000 – $18,000 / cycle",
    image: IMAGES.servicesHero.src,
    imageAlt: "Immune Restoration & Recovery",
    corePeptides: ["LL-37", "Thymalin"],
    valueBenefits: [
      "Supports immune function and immune system balance",
      "Enhances recovery following illness or physiological stress",
      "Reduces recurrence of infections and inflammatory triggers",
    ],
    clientReceives: [
      "Targeted hands-on peptide therapy injections",
      "Physician-supervised immunity monitoring",
      "Physician-supervised recovery monitoring",
      "Advanced immune optimization assessment",
    ],
  },
  {
    number: "PROTOCOL 4",
    title: "Full-System Elite Optimization",
    price: "$18,000 – $30,000+ / cycle",
    image: IMAGES.serviceLongevity?.src ?? IMAGES.servicesHero.src,
    imageAlt: "Full-System Elite Optimization",
    corePeptides: ["Semax", "Epithalon", "BPC-157", "Thymalin", "GHK-Cu"],
    valueBenefits: [
      "Supports cognitive longevity, recovery, and whole-body optimization",
      "Enhances physical performance and neurological efficiency",
      "Addresses all co-existing conditions comprehensively",
    ],
    clientReceives: [
      "Multi-system peptide therapy initiation",
      "Full optimization basis (anti-oxidants, recovery)",
      "Advanced biomarker tracking, urine infusion control",
      "Additional biomarker assessment and protocol refinement",
    ],
  },
];

const LEGAL_CLINICAL = [
  {
    title: "Legal Positioning Statement",
    body: "All peptide therapies offered under Consult Dr B & Concierge Medical Services are physician-led, evidence-informed, optimization and supportive care. These therapies are not approved as curative treatments by global regulatory authorities and are not intended to diagnose, treat, cure, or prevent any disease. No claims of organ regeneration, reversal of aging, or guaranteed outcomes are made. All treatments are administered strictly following individualized medical evaluation and with full informed consent.",
  },
  {
    title: "Clinical Requirement",
    body: "All indicated laboratory investigations are strictly determined and tailored to each protocol by the supervising physician. Self-administered or unsupervised testing is not permitted within this system.",
  },
];

const LAB_SECTIONS = [
  {
    title: "Core Assessment Includes:",
    items: [
      "Haematology and complete blood assessment",
      "Hepatic and renal function assessment",
      "Hormone and growth regulation markers",
      "Cardiovascular risk profiling",
    ],
  },
  {
    title: "Advanced Assessment (Where Indicated):",
    items: [
      "Autoimmunity and immune markers",
      "Mitochondrial function assessment",
      "Micronutrient status",
      "Additional specialized tests ordered as clinically required",
    ],
  },
  {
    title: "Clinical Control:",
    body: "All investigations are strictly selected, tailored, and interpreted by the supervising physician in alignment with each individualized protocol. Independent or unsupervised testing is not permitted within this system.",
  },
];

export default function SignaturePeptidePage() {
  return (
    <>
      {/* ── Hero: split layout ── */}
      <section className="bg-white py-16">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <h1 className="font-heading text-4xl lg:text-5xl text-secondary leading-tight">
                Signature Peptide Bioregulation System
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-md">
                A physician-led ultra-premium peptide bioregulation program integrating Eastern European medical science with precision diagnostics and concierge care.
              </p>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={IMAGES.peptideHero?.src ?? IMAGES.serviceAssessment.src}
              alt="Signature Peptide Bioregulation System"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Program Architecture ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="section-container space-y-12">
          <Reveal>
            <h2 className="font-heading text-3xl text-black text-center">
              Program Architecture
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {ARCHITECTURE.map((block, i) => (
              <Reveal key={block.title} delay={i * 0.07}>
                <div className="bg-white p-8 space-y-4 h-full">
                  <h3 className="font-heading text-black font-semibold text-base">
                    {block.title}
                  </h3>
                  <ul className="space-y-2">
                    {block.items.map((item) => (
                      <li key={item} className="text-gray-500 text-sm leading-relaxed flex gap-2">
                        <span className="text-secondary shrink-0 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Protocols ── */}
      <section className="py-12 bg-[#F3F3F3] space-y-0">
        {PROTOCOLS.map((protocol, i) => (
          <Reveal key={protocol.title}>
            <div className="border-t border-gray-200">
              {/* Protocol header bar */}
              <div className="bg-gray-800 px-6 py-3 flex items-center justify-between">
                <span className="text-white/70 text-xs uppercase tracking-widest font-medium">
                  {protocol.number}: {protocol.title}
                </span>
                <span className="text-secondary text-xs font-semibold border border-secondary px-3 py-1">
                  {protocol.price}
                </span>
              </div>

              {/* Protocol content */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left: image */}
                <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
                  <Image
                    src={protocol.image}
                    alt={protocol.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right: details */}
                <div className="bg-white p-8 space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-800 uppercase tracking-widest">Core Peptides:</p>
                    <div className="flex flex-wrap gap-2">
                      {protocol.corePeptides.map((p) => (
                        <span key={p} className="text-xs bg-secondary/10 text-secondary border border-secondary/20 px-3 py-1 rounded-full">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-800 uppercase tracking-widest">Value & Benefits:</p>
                    <ul className="space-y-1.5">
                      {protocol.valueBenefits.map((b) => (
                        <li key={b} className="text-gray-500 text-sm leading-relaxed flex gap-2">
                          <span className="text-secondary shrink-0">•</span>{b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-800 uppercase tracking-widest">What the Client Receives:</p>
                    <ul className="space-y-1.5">
                      {protocol.clientReceives.map((r) => (
                        <li key={r} className="text-gray-500 text-sm leading-relaxed flex gap-2">
                          <span className="text-secondary shrink-0">•</span>{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* ── Legal & Clinical ── */}
      <section className="py-24 bg-white">
        <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-12">
          {LEGAL_CLINICAL.map((block, i) => (
            <Reveal key={block.title} delay={i * 0.1}>
              <div className="space-y-4">
                <h2 className="font-heading text-2xl text-black">{block.title}</h2>
                <div className="w-8 h-0.5 bg-secondary" />
                <p className="text-gray-500 text-sm leading-relaxed">{block.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Clinical Lab Requirements ── */}
      <section className="py-24 bg-[#F3F3F3]">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="space-y-4">
              <h2 className="font-heading text-3xl text-black">Clinical Lab Requirements</h2>
              <div className="w-8 h-0.5 bg-secondary" />
              <p className="text-gray-500 text-sm leading-relaxed">
                All clients enrolled in the Consult Dr B Signature Peptide Bioregulation System are required to complete a physician-directed laboratory evaluation prior to and during therapy.
              </p>
            </div>
          </Reveal>

          <div className="space-y-6">
            {LAB_SECTIONS.map((section, i) => (
              <Reveal key={section.title} delay={i * 0.08}>
                <div className="bg-white border border-gray-200 p-6 space-y-3">
                  <h3 className="font-heading text-black font-semibold text-base">{section.title}</h3>
                  {section.items && (
                    <ul className="space-y-1.5">
                      {section.items.map((item) => (
                        <li key={item} className="text-gray-500 text-sm flex gap-2">
                          <span className="text-secondary shrink-0">•</span>{item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.body && (
                    <p className="text-gray-500 text-sm leading-relaxed">{section.body}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Begin Your Peptide Bioregulation Journey"
        subtitle="A physician-supervised, ultra-premium program tailored to your biology and long-term goals."
        buttonText="Contact Our Team"
        buttonHref="/contact"
        backgroundImage={IMAGES.servicesHero.src}
        backgroundImageAlt="Peptide therapy background"
      />
    </>
  );
}