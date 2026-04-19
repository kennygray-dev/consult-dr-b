import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PageHero, SectionHeader, Card } from "@/components/ui";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = { title: "Nutrition", description: "Evidence-based nutritional therapy tailored to your metabolic profile." };

const PILLARS = [
  { title: "Metabolic Testing",      desc: "We begin with a full metabolic panel — resting metabolic rate, glucose regulation, and lipid profiling — to understand your unique biochemistry." },
  { title: "Personalised Protocols", desc: "No generic meal plans. Every nutritional protocol is designed around your labs, genetics, lifestyle, and goals." },
  { title: "Therapeutic Nutrition",  desc: "Food as medicine. We use targeted dietary strategies to reduce inflammation, restore gut health, and optimise energy." },
  { title: "Ongoing Optimisation",   desc: "Your nutrition plan evolves with you. Regular reassessments ensure your protocol stays aligned with your progress." },
];

const CONDITIONS = ["Metabolic Syndrome","Type 2 Diabetes","Gut Dysbiosis","Chronic Inflammation","Hormonal Imbalance","Thyroid Dysfunction","Autoimmune Conditions","Weight Management","Athletic Performance","Cognitive Decline","Cardiovascular Risk","Anti-Aging"];

export default function NutritionPage() {
  return (
    <>
      <PageHero eyebrow="Nutrition Therapy" title="Food Is Your Most Powerful Medicine"
        subtitle="Evidence-based nutritional protocols engineered for your metabolism, not borrowed from a textbook."
        image={IMAGES.nutritionHero.src} imageAlt={IMAGES.nutritionHero.alt} blurDataURL={IMAGES.nutritionHero.blurDataURL} />
      <section className="py-24 bg-white">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <SectionHeader eyebrow="Our Approach" title="Nutrition Rooted in Science" align="left" />
            <p className="text-gray-500 leading-relaxed">Most nutrition advice is generic. At Consult Dr B, we go deeper. Using advanced metabolic testing and functional diagnostics, we identify exactly what your body needs to thrive.</p>
            <p className="text-gray-500 leading-relaxed">Our nutritional medicine team works alongside your physician to create a protocol that addresses the root cause of your symptoms — whether that's insulin resistance, gut inflammation, or nutrient deficiency.</p>
            <Link href="/contact" className="btn-primary inline-flex">Start Your Nutrition Assessment <ArrowRight size={15} /></Link>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src={IMAGES.nutritionFood.src} alt={IMAGES.nutritionFood.alt} fill
              sizes="(max-width: 1024px) 100vw, 50vw" quality={80} className="object-cover"
              placeholder="blur" blurDataURL={IMAGES.nutritionFood.blurDataURL} />
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="section-container space-y-14">
          <SectionHeader eyebrow="The Method" title="Four Pillars of Nutritional Medicine" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PILLARS.map((p, i) => (
              <Card key={p.title} className="p-8 flex gap-5">
                <span className="font-heading text-5xl text-secondary/20 font-bold leading-none shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div className="space-y-2">
                  <h3 className="font-heading text-xl text-primary">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary">
        <div className="section-container space-y-10">
          <SectionHeader eyebrow="We Address" title="Conditions We Work With" light />
          <div className="flex flex-wrap gap-3 justify-center">
            {CONDITIONS.map((c) => (<span key={c} className="border border-white/20 text-white/80 text-sm px-4 py-2 hover:border-secondary hover:text-secondary transition-colors cursor-default">{c}</span>))}
          </div>
          <div className="text-center pt-4">
            <Link href="/contact" className="btn-gold inline-flex">Book a Nutrition Consultation <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
