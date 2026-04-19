import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock, Users } from "lucide-react";
import { PageHero, SectionHeader, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Programs",
  description: "Explore personalised health programs at Consult Dr B.",
};

const PROGRAMS = [
  {
    name: "Foundation Health",
    tagline: "The essential starting point",
    duration: "3 Months",
    ideal: "New patients",
    price: "From $2,500",
    color: "border-t-primary",
    features: [
      "Initial comprehensive assessment",
      "Personalised nutrition plan",
      "Monthly check-ins",
      "Supplement protocol",
      "Access to patient portal",
    ],
  },
  {
    name: "Precision Performance",
    tagline: "For those who demand excellence",
    duration: "6 Months",
    ideal: "Athletes & executives",
    price: "From $5,500",
    color: "border-t-secondary",
    featured: true,
    features: [
      "Everything in Foundation",
      "Peptide therapy protocol",
      "Hormone optimisation",
      "Bi-weekly coaching sessions",
      "Advanced biomarker tracking",
      "Priority concierge access",
    ],
  },
  {
    name: "Longevity Elite",
    tagline: "The complete transformation",
    duration: "12 Months",
    ideal: "Long-term optimisation",
    price: "From $9,800",
    color: "border-t-primary",
    features: [
      "Everything in Performance",
      "Epigenetic age testing",
      "Personalised longevity protocol",
      "Weekly check-ins",
      "Quarterly deep-dive reviews",
      "Family health consultation",
      "24/7 WhatsApp access",
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Your Health, Your Program"
        subtitle="Structured pathways to transformation — each one fully personalised to your biology and goals."
        image={IMAGES.programsHero.src}
        imageAlt={IMAGES.programsHero.alt}
        blurDataURL={IMAGES.programsHero.blurDataURL}
      />

      <section className="py-24 bg-gray-50">
        <div className="section-container space-y-16">
          <SectionHeader
            eyebrow="Choose Your Path"
            title="Programs Designed for Real Results"
            subtitle="All programs include direct access to Dr B and our multidisciplinary team."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                className={`relative bg-white border border-gray-100 border-t-4 ${p.color} shadow-sm hover:shadow-xl transition-shadow duration-300 ${p.featured ? "scale-105 shadow-lg" : ""}`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-secondary text-white text-xs font-bold px-4 py-1 uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl text-primary">{p.name}</h3>
                    <p className="text-secondary text-sm font-medium mt-1">{p.tagline}</p>
                  </div>

                  <div className="flex gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Clock size={12} /> {p.duration}</span>
                    <span className="flex items-center gap-1"><Users size={12} /> {p.ideal}</span>
                  </div>

                  <div className="border-t border-gray-100 pt-5">
                    <p className="font-heading text-2xl text-primary font-bold">{p.price}</p>
                    <p className="text-xs text-gray-400 mt-1">Per program — flexible payment available</p>
                  </div>

                  <ul className="space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <Check size={14} className="text-secondary shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={p.featured ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}
                  >
                    Get Started <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-400">
            Not sure which program is right for you?{" "}
            <Link href="/contact" className="text-secondary hover:underline">
              Book a free discovery call →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
