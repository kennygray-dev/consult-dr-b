"use client";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

const WHY_US = [
  {
    icon: "/icons/evidence.svg",
    title: "Evidence-Based Results",
    desc: "Our programs combine the latest clinical science, metabolic medicine, and regenerative approaches to deliver measurable improvements backed by long-term data.",
  },
  {
    icon: "/icons/personalised.svg",
    title: "Personalised Medical Plans",
    desc: "Every program begins with a comprehensive medical assessment. Your treatment strategies are tailored specifically to you, not generic protocols.",
  },
  {
    icon: "/icons/cellular.svg",
    title: "Cellular Health Focus",
    desc: "We go beyond surface-level care, targeting the cellular and hormonal drivers of health to achieve lasting results and supporting cellular repair.",
  },
  {
    icon: "/icons/nutrition.svg",
    title: "Integrated Nutrition & Lifestyle",
    desc: "Advanced clinical nutrition and lifestyle strategies are embedded in every program, empowering you to sustain long-term wellness and performance.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/whyimage.png"
          alt="Why choose us background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 section-container space-y-14">
        <Reveal>
          <h2 className="font-heading text-3xl text-white text-center">
            Why Clients Choose Consult Dr B
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
  {WHY_US.map((item, i) => (
    <Reveal key={item.title} delay={i * 0.1}>
      <div className={`space-y-4 px-8 ${i !== 0 ? "border-l border-white/20" : ""}`}>
        <div className="w-8 h-8 relative">
          <Image
            src={item.icon}
            alt={item.title}
            fill
            className="object-contain invert"
          />
        </div>
        <h3 className="font-heading text-white font-semibold">{item.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </Reveal>
  ))}
</div>

      </div>
    </section>
  );
}