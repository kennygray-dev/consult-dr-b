import type { Metadata } from "next";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Elite Aesthetic Medical Partner Program",
  description:
    "A global partnership framework connecting leading aesthetic clinics and spas with internationally trained physicians to ensure safe, ethical, and clinically responsible treatments.",
};

const FRAMEWORK_PILLARS = [
  {
    icon: "/icons/evidence.svg",
    title: "Verified Medical Credentials",
    desc: "Physicians trained at globally recognized institutions and independently verified.",
  },
  {
    icon: "/icons/personalised.svg",
    title: "Global Regulatory Compliance",
    desc: "Alignment with medical licensing bodies across multiple countries.",
  },
  {
    icon: "/icons/cellular.svg",
    title: "Physician-Guided Oversight",
    desc: "Clinical supervision integrated into aesthetic practice where required.",
  },
  {
    icon: "/icons/nutrition.svg",
    title: "Structured Referral Pathways",
    desc: "Seamless transition to hospitals and specialists for advanced care.",
  },
];

const SAFETY_ITEMS = [
  {
    title: "Non-Invasive Treatment Policy",
    desc: "No surgical or invasive procedures within partner facilities.",
  },
  {
    title: "Client Safety & Evaluation",
    desc: "Medical assessment where necessary to ensure treatment suitability.",
  },
  {
    title: "Professional Clinical Environments",
    desc: "Facilities designed to support safe and confidential care.",
  },
];

export default function EliteAestheticPartnerPage() {
  return (
    <>
      {/* ── Hero: split layout ── */}
      <section className="bg-white py-16">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <h1 className="font-heading text-4xl lg:text-5xl text-secondary leading-tight">
                Elite Aesthetic Medical Partner Program
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-md">
                A global partnership framework connecting leading aesthetic clinics and spas with internationally trained physicians to ensure safe, ethical, and clinically responsible treatments.
              </p>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-none bg-[#E8F0F8] flex items-center justify-center">
            <Image
              src="/elite-aesthetic-hero.png"
              alt="Elite Aesthetic Medical Partner Program"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Physician-Guided section ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl lg:text-4xl text-black leading-tight">
                Physician-Guided. Globally Aligned. Clinically Responsible.
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our program brings together reputable aesthetic clinics and beauty spas under a structured, physician-led framework designed to elevate standards across the industry.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Through this model, treatments are delivered with medical oversight, ethical responsibility, and alignment with international best practices, ensuring that beauty never comes at the expense of health.
              </p>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/physician-guided.png"
              alt="Physician-guided aesthetic care"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── Clinical & Global Framework (dark bg) ── */}
      <section className="relative py-32 min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/our-clinical.jpg"
            alt="Clinical framework background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/85" />
        </div>

        <div className="relative z-10 section-container space-y-14">
          <Reveal>
            <div className="text-center space-y-3">
              <h2 className="font-heading text-3xl text-white">
                Our Clinical & Global Framework
              </h2>
              <p className="text-white/60 text-sm max-w-xl mx-auto leading-relaxed">
                Our platform is supported by a global network of foreign-trained, licensed physicians, with credentials verified through internationally recognized systems.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {FRAMEWORK_PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div
  className={cn(
    "space-y-4 px-6 py-8 lg:py-6",
    "border-t border-white/15 lg:border-t-0",
    i === 0 && "border-t-0",
    i !== 0 && "lg:border-l lg:border-white/20"
  )}
>
                  <div className="w-8 h-8 relative">
                    <Image
                      src={pillar.icon}
                      alt={pillar.title}
                      fill
                      className="object-contain invert"
                    />
                  </div>
                  <h3 className="font-body text-white font-semibold text-base">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety, Certification & Partnership ── */}
      <section className="py-24 bg-white">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="space-y-4">
              <h2 className="font-heading text-3xl text-black leading-tight">
                Safety, Certification & Partnership
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                All partner clinics operate under strict guidelines to ensure safety, professionalism, and ethical practice.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {SAFETY_ITEMS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="border border-gray-200 p-6 space-y-2 hover:border-secondary transition-colors duration-200">
                  <h3 className="font-heading text-black font-semibold text-base">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        title="Join a Global Standard of Aesthetic Excellence"
        subtitle="Partner with a physician-led network committed to raising the standard of aesthetic medicine."
        buttonText="Contact Our Team"
        buttonHref="/contact"
        backgroundImage="/cta-aesthetic.jpg"
        backgroundImageAlt="Aesthetic medicine background"
      />
    </>
  );
}