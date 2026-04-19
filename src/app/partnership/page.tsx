import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, HeartHandshake, BarChart3, Shield } from "lucide-react";
import { PageHero, SectionHeader, Card } from "@/components/ui";

export const metadata: Metadata = {
  title: "Partnership",
  description: "Corporate wellness partnerships with Consult Dr B for organisations that prioritise employee health.",
};

const BENEFITS = [
  { icon: BarChart3,      title: "Measurable ROI",       desc: "Reduced absenteeism, lower healthcare costs, and improved productivity — all tracked and reported quarterly." },
  { icon: Building2,      title: "Scalable Programs",    desc: "From teams of 10 to enterprises of 10,000 — our programs scale to your organisation's size and budget." },
  { icon: HeartHandshake, title: "White-Glove Service",  desc: "A dedicated account manager and clinical liaison ensure seamless integration into your existing benefits." },
  { icon: Shield,         title: "Clinically Backed",    desc: "Every program is physician-designed and evidence-based — not wellness theatre, but real clinical outcomes." },
];

const PACKAGES = [
  {
    name: "Essential",
    size: "Up to 50 employees",
    price: "From $8,000/yr",
    features: ["Annual health assessments", "Nutrition workshops (x4/yr)", "Mental wellness resources", "Monthly health newsletter", "HR reporting dashboard"],
  },
  {
    name: "Professional",
    size: "50–250 employees",
    price: "From $22,000/yr",
    featured: true,
    features: ["Everything in Essential", "On-site health screenings", "Personalised coaching (select staff)", "Peptide therapy access", "Quarterly strategy reviews", "Executive health program"],
  },
  {
    name: "Enterprise",
    size: "250+ employees",
    price: "Custom pricing",
    features: ["Everything in Professional", "Fully bespoke program design", "On-site clinical presence", "Unlimited coaching access", "C-suite concierge health", "Annual longevity retreats"],
  },
];

export default function PartnershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate Partnership"
        title="Invest in Your Greatest Asset — Your People"
        subtitle="Strategic health partnerships that transform workforce wellbeing, reduce healthcare costs, and drive measurable business outcomes."
        image={IMAGES.partnershipHero.src}
        imageAlt={IMAGES.partnershipHero.alt}
        blurDataURL={IMAGES.partnershipHero.blurDataURL}
      />

      <section className="py-24 bg-white">
        <div className="section-container space-y-14">
          <SectionHeader
            eyebrow="Why Partner With Us"
            title="Healthcare That Works as Hard as Your Team"
            subtitle="We don't offer wellness perks. We deliver clinical-grade health programs that create lasting change."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-8 flex gap-5">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-heading text-xl text-primary">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="section-container space-y-14">
          <SectionHeader eyebrow="Partnership Packages" title="Find the Right Fit for Your Organisation" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white border ${pkg.featured ? "border-secondary shadow-xl scale-105" : "border-gray-100 shadow-sm"} p-8 space-y-5 transition-shadow hover:shadow-lg`}
              >
                {pkg.featured && (
                  <span className="bg-secondary text-white text-xs font-bold px-3 py-1 uppercase tracking-wide">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="font-heading text-2xl text-primary">{pkg.name}</h3>
                  <p className="text-gray-400 text-sm mt-1">{pkg.size}</p>
                  <p className="font-heading text-xl text-secondary font-bold mt-3">{pkg.price}</p>
                </div>
                <ul className="space-y-2.5 border-t border-gray-100 pt-5">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={pkg.featured ? "btn-primary w-full justify-center" : "btn-secondary w-full justify-center"}>
                  Enquire Now <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400">
            Need something bespoke?{" "}
            <Link href="/contact" className="text-secondary hover:underline">Contact us for a custom quote →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
