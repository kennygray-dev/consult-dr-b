import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the full range of medical services offered by Consult Dr B.",
};

const SERVICES = [
  { title: "Comprehensive Health Assessment", description: "A full-spectrum evaluation using advanced biomarker analysis, functional testing, and in-depth consultation.", features: ["Advanced bloodwork & genetics", "Body composition analysis", "Hormonal profiling", "Gut microbiome assessment"], image: IMAGES.serviceAssessment },
  { title: "Hormone Optimisation",            description: "Precise, evidence-based hormone balancing protocols for men and women seeking vitality, clarity, and longevity.", features: ["TRT & HRT programs", "Thyroid optimisation", "Adrenal support", "Regular monitoring"],               image: IMAGES.serviceHormone },
  { title: "Metabolic Medicine",              description: "Targeting the root causes of metabolic dysfunction — weight, insulin sensitivity, inflammation, and energy.",       features: ["Metabolic reset protocols", "Continuous glucose monitoring", "Anti-inflammatory strategies", "Lifestyle integration"], image: IMAGES.serviceMetabolic },
  { title: "Longevity & Anti-Aging",          description: "Science-driven strategies to slow biological aging, preserve cognitive function, and extend your healthspan.",      features: ["Epigenetic age testing", "Senolytic protocols", "NAD+ therapy", "Sleep optimisation"],           image: IMAGES.serviceLongevity },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive Care, Precisely Delivered"
        subtitle="Every service is built on deep clinical expertise and a commitment to root-cause medicine."
        image={IMAGES.servicesHero.src}
        imageAlt={IMAGES.servicesHero.alt}
        blurDataURL={IMAGES.servicesHero.blurDataURL}
      />
      <section className="py-24 bg-white">
        <div className="section-container space-y-14">
          <SectionHeader eyebrow="What We Offer" title="Services Built Around Your Biology"
            subtitle="No two patients are the same. Every service is adapted to your unique physiology, goals, and lifestyle." />
          <div className="space-y-16">
            {SERVICES.map((s, i) => (
              <div key={s.title} className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}>
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}>
                  <Image
                    src={s.image.src}
                    alt={s.image.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={80}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={s.image.blurDataURL}
                  />
                </div>
                <div className="space-y-5">
                  <h2 className="font-heading text-2xl md:text-3xl text-primary">{s.title}</h2>
                  <div className="gold-rule" />
                  <p className="text-gray-500 leading-relaxed">{s.description}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                        <CheckCircle2 size={15} className="text-secondary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-primary inline-flex mt-2">Enquire Now <ArrowRight size={15} /></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
