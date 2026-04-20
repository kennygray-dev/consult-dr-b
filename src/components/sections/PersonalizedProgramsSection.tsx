"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

const SERVICES = [
  {
    href: "/services/metabolic-weight",
    image: IMAGES.serviceMetabolic.src,
    imageAlt: "Metabolic & Weight Optimization",
    title: "Metabolic & Weight Optimization",
    tags: ["GLP therapies", "Body composition", "Metabolic reset"],
  },
  {
    href: "/services/longevity-performance",
    image: IMAGES.serviceLongevity.src,
    imageAlt: "Advanced Longevity & Performance Medicine",
    title: "Advanced Longevity & Performance Medicine",
    tags: ["Anti-aging protocols", "Hormone optimisation", "Long-term health planning"],
  },
  {
    href: "/services/wellness-specialized",
    image: IMAGES.serviceAssessment.src,
    imageAlt: "Wellness & Specialized Care",
    title: "Wellness & Specialized Care",
    tags: ["Preventive care", "Holistic optimisation", "Lifestyle medicine"],
  },
  {
    href: "/services/regenerative-cellular",
    image: IMAGES.serviceHormone.src,
    imageAlt: "Regenerative & Cellular Medicine",
    title: "Regenerative & Cellular Medicine",
    tags: ["Peptide protocols", "Cellular repair", "Bioregeneration"],
  },
  {
    href: "/services/aesthetics-skin",
    image: IMAGES.serviceAestheticSkin.src,
    imageAlt: "Aesthetic & Skin Medicine",
    title: "Aesthetic & Skin Medicine",
    tags: ["Skin rejuvenation", "Advanced aesthetics", "Medical-grade treatments"],
  },
  {
    href: "/services/post-surgical-recovery",
    image: IMAGES.servicePostSurgical.src,
    imageAlt: "Post-Surgical Recovery & Wound Healing",
    title: "Post-Surgical Recovery & Wound Healing",
    tags: ["Healing support", "Recovery optimisation", "Clinical rehabilitation"],
  },
];

export default function PersonalizedProgramsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = 420; // width of one card
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24" style={{ backgroundColor: "#F8F4EA" }}>
      <div className="section-container space-y-4">
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <Reveal>
            <h2 className="font-heading text-3xl text-black leading-tight">
              Personalized Programs for<br />Health Optimization
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-gray-500 leading-relaxed">
              Our programs provide advanced medical services, precise diagnostics, and clinical programs designed to optimise long-term health and performance.
            </p>
          </Reveal>
        </div>

        {/* Horizontal scroll cards */}
        <div className="relative">

          {/* Left button */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-black/10 rounded-full p-2 shadow-sm hover:bg-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Right button */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-black/10 rounded-full p-2 shadow-sm hover:bg-white transition"
          >
            <ChevronRight size={18} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
          >
            {SERVICES.map((svc, i) => (
              <Reveal key={svc.href} delay={i * 0.08}>
                <Link
                  href={svc.href}
                  className="group relative shrink-0 w-[420px] h-[440px] overflow-hidden snap-start block rounded-xl"
                >
                  <Image
                    src={svc.image}
                    alt={svc.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-40% to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 space-y-3">
                    <h3 className="font-heading text-white text-lg leading-snug">{svc.title}</h3>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((tag) => (
                        <span key={tag} className="text-white/70 text-xs border border-white/20 px-2 py-0.5">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-white text-xs mt-1">
                      Learn More <ArrowRight size={11} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}