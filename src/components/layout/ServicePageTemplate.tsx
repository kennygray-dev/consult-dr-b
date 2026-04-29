import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Plus } from "lucide-react";
import { PageHero } from "@/components/ui";
import Reveal from "@/components/ui/Reveal";
import FAQSection from "@/components/sections/FAQSection";
import CTABanner from "@/components/sections/CTABanner";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServicePillar {
  title: string;
  desc: string;
}

export interface ServiceCard {
  image: string;
  imageAlt: string;
  title: string;
  desc: string;
}

export interface RecoveryStep {
  title: string;
  desc: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface RelatedService {
  href: string;
  image: string;
  imageAlt: string;
  label: string;
}

export interface ServicePageProps {
 hero: {
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  blurDataURL?: string;
};

  approach: {
    title: string;
    paragraphs: string[];
    ctaText: string;
    ctaHref?: string;
    image: string;
    imageAlt: string;
    blurDataURL?: string;
  };

  conditions: {
    sectionLabel: string;
    sectionSubtitle?: string;
    items: string[];
    backgroundImage: string;
    backgroundImageAlt: string;
  };

  programs: {
    sectionTitle: string;
    cards: ServiceCard[];
  };

  plan: {
    title: string;
    steps: RecoveryStep[];
    backgroundImage: string;
    backgroundImageAlt: string;
  };

  faq?: {
    items: FAQItem[];
  };

  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonHref?: string;
    backgroundImage: string;
    backgroundImageAlt: string;
  };

  relatedServices?: RelatedService[];
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function ServicePageTemplate({
  hero,
  approach,
  conditions,
  programs,
  plan,
  faq,
  cta,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      {/* ── Hero ── */}
      <PageHero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        imageAlt={hero.imageAlt}
        blurDataURL={hero.blurDataURL}
      />

      {/* ── Approach (white bg) ── */}
      <section className="py-10 bg-white">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-heading text-3xl text-black leading-tight">
                {approach.title}
              </h2>
              {approach.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-500 leading-relaxed">{p}</p>
              ))}
              <Link
                href={approach.ctaHref ?? "/contact"}
                className="btn-primary inline-flex"
              >
                {approach.ctaText} <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>

          {/* Rounded image on right */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={approach.image}
              alt={approach.imageAlt}
              fill
              className="object-cover"
              placeholder={approach.blurDataURL ? "blur" : "empty"}
              blurDataURL={approach.blurDataURL}
            />
          </div>
        </div>
      </section>

      {/* ── Conditions (image bg, more vertical padding) ── */}
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={conditions.backgroundImage}
            alt={conditions.backgroundImageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
        </div>

        <Reveal>
          <div className="relative z-10 section-container space-y-8">
            <div className="space-y-2">
              <h2 className="font-heading text-3xl text-white">
                {conditions.sectionLabel}
              </h2>
              {conditions.sectionSubtitle && (
                <p className="text-white/60 text-sm">{conditions.sectionSubtitle}</p>
              )}
            </div>

            <div className="flex flex-wrap gap-3">
              {conditions.items.map((c) => (
                <span
                  key={c}
                  className="bg-black/50 border border-white/20 text-white/90 text-sm px-8 py-4 hover:border-secondary hover:text-secondary transition-colors cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>

            <Link href="/contact" className="btn-gold inline-flex">
              Book a Consultation <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ── Programs Grid (#F3F3F3 bg, rounded images) ── */}
      <section className="py-24" style={{ backgroundColor: "#F3F3F3" }}>
        <div className="section-container space-y-12">
          <h2 className="font-heading text-2xl text-black">{programs.sectionTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {programs.cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="space-y-3">
                  {/* Rounded program images */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image
                      src={card.image}
                      alt={card.imageAlt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-black font-semibold text-base">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personalised Plan (image bg) ── */}
      <section className="relative py-32 min-h-[700px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={plan.backgroundImage}
            alt={plan.backgroundImageAlt}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40" />
        </div>

        <div className="relative z-10 section-container space-y-10">
          <h2 className="font-heading text-3xl text-white">{plan.title}</h2>
          <ol className="space-y-8 max-w-xl">
            {plan.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <li className="flex gap-4">
                  <span className="text-white font-bold font-heading text-sm mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-heading text-white font-semibold">{step.title}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ ── */}
      {faq?.items?.length ? <FAQSection items={faq.items} /> : null}

      {/* ── Learn About Other Services ── */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 bg-[#F3F3F3]">
          <div className="section-container space-y-6">
            <h2 className="font-heading text-2xl text-black">
              Learn About Other Programs
            </h2>

            <div className="grid grid-cols-2 gap-3 md:flex md:gap-4 md:overflow-x-auto md:snap-x md:snap-mandatory md:scroll-smooth md:pb-2">
              {relatedServices.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group relative w-full h-[180px] md:shrink-0 md:w-[360px] md:h-[360px] overflow-hidden md:snap-start block rounded-xl"
                >
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
                    <p className="text-white text-sm font-heading leading-snug">
                      {svc.label}
                    </p>

                    <span className="inline-flex items-center gap-1 border border-white text-white text-xs px-3 py-1.5 group-hover:bg-white group-hover:text-primary transition-colors">
                      Learn More <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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