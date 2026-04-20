import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import CTABanner from "@/components/sections/CTABanner";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ProgramSpecialist {
  name: string;
  role: string;
  credentials: string[];
  bio: string;
  image: string;
  imageAlt: string;
}

export interface OptimizationPillar {
  title: string;
  desc: string;
}

export interface ProgramOutcome {
  label: string;
}

export interface ProgramPageProps {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    imageAlt: string;
  };

  specialist: {
    sectionTitle: string;
    doctor: ProgramSpecialist;
  };

  optimization: {
    sectionTitle: string;
    backgroundImage: string;
    backgroundImageAlt: string;
    pillars: OptimizationPillar[];
  };

  outcomes: {
    sectionTitle: string;
    image: string;
    imageAlt: string;
    items: ProgramOutcome[];
  };

  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonHref?: string;
    backgroundImage: string;
    backgroundImageAlt: string;
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ProgramPageTemplate({
  hero,
  specialist,
  optimization,
  outcomes,
  cta,
}: ProgramPageProps) {
  return (
    <>
      {/* ── Hero: split layout, no PageHero ── */}
      <section className="bg-white py-16">
        <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <h1 className="font-heading text-4xl lg:text-5xl text-secondary leading-tight">
                {hero.title}
              </h1>
              <p className="text-gray-500 text-base leading-relaxed max-w-md">
                {hero.subtitle}
              </p>
            </div>
          </Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-none">
            <Image
              src={hero.image}
              alt={hero.imageAlt}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Specialist ── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl text-black leading-tight">
                {specialist.sectionTitle}
              </h2>
              <div className="space-y-1">
                <p className="font-semibold text-gray-800 text-sm">{specialist.doctor.name}</p>
                <p className="text-gray-500 text-sm">{specialist.doctor.role}</p>
                <ul className="mt-2 space-y-0.5">
                  {specialist.doctor.credentials.map((c) => (
                    <li key={c} className="text-gray-500 text-sm before:content-['•'] before:mr-2 before:text-secondary">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                {specialist.doctor.bio}
              </p>
            </div>
          </Reveal>

          <div className="relative aspect-[3/4] overflow-hidden rounded-full max-w-sm ml-auto">
            <Image
              src={specialist.doctor.image}
              alt={specialist.doctor.imageAlt}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* ── What We Optimize (dark image bg) ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={optimization.backgroundImage}
            alt={optimization.backgroundImageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 section-container space-y-12">
          <Reveal>
            <h2 className="font-heading text-3xl text-white text-center">
              {optimization.sectionTitle}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {optimization.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="border border-white/20 bg-black/40 p-6 space-y-2 hover:border-secondary transition-colors duration-200">
                  <h3 className="font-heading text-white font-semibold text-base">
                    {pillar.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You Can Expect ── */}
      <section className="py-24 bg-[#F3F3F3]">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl text-black">{outcomes.sectionTitle}</h2>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={outcomes.image}
                  alt={outcomes.imageAlt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-3 pt-16">
            {outcomes.items.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <div className="flex items-center gap-4 bg-white border border-gray-100 px-6 py-4 rounded-xl shadow-sm">
                  <div className="w-8 h-8 rounded-full border border-secondary/40 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-secondary" />
                  </div>
                  <p className="text-gray-700 text-sm">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <CTABanner
        title={cta.title}
        subtitle={cta.subtitle}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
        backgroundImage={cta.backgroundImage}
        backgroundImageAlt={cta.backgroundImageAlt}
      />
    </>
  );
}