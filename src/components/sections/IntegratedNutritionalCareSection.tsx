"use client";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

const NUTRITION_CARDS = [
  {
    image: "/nutritional_detox_smoothie.png",
    tag: "Nutrition",
    title: "Cucumber & Celery Green Smoothie",
    desc: "Clinically designed detox smoothie supporting cellular cleansing and daily metabolic routine care.",
  },
  {
    image: "/immune_antioxidant_juice.png",
    tag: "Nutrition",
    title: "Pineapple, Lemon & Kale Juice",
    desc: "Targeted antioxidant blend that supports immune function and anti-inflammatory pathways.",
  },
  {
    image: "/anti_inflammatory_detox_smoothie.png",
    tag: "Nutrition",
    title: "Lemon, Ginger, Turmeric Detox Smoothie",
    desc: "Anti-inflammatory protocol smoothie used in metabolic reset and detox programs.",
  },
  {
    image: "/digestive_enzyme_support_smoothie.png",
    tag: "Nutrition",
    title: "Pineapple-Paw Digestive Enzyme Smoothie",
    desc: "Enzyme-rich blend designed to support digestive health and nutrient absorption.",
  },
];

export default function IntegratedNutritionalCareSection() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container space-y-10">
        {/* Header */}
        <Reveal>
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <h2 className="font-heading text-3xl text-black">
              Integrated Nutritional Care
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your program includes continuous medical support to optimise treatment, healing, and long-term wellbeing.
            </p>
          </div>
        </Reveal>

        {/* 2x2 grid of rounded cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {NUTRITION_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <Link href="/nutrition" className="group flex rounded-2xl overflow-hidden">
                {/* Left — image, 50% */}
                <div className="relative w-1/2 shrink-0 aspect-square">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Right — primary blue bg, 50% */}
<div className="w-1/2 bg-primary flex flex-col justify-center gap-2 p-5">
  <h3 className="text-white text-sm font-thin leading-snug" style={{ fontFamily: "Poppins, sans-serif" }}>
    {card.title}
  </h3>

  <p className="text-white/70 text-xs font-medium">
    Purpose:
  </p>

  <p className="text-white/60 text-xs leading-relaxed">
    {card.desc}
  </p>
</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}