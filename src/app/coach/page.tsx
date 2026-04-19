import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, TrendingUp, MessageCircle, Calendar } from "lucide-react";
import { PageHero, SectionHeader, Card } from "@/components/ui";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = { title: "Health Coaching", description: "Elite health coaching to sustain your transformation." };

const COACHING_FEATURES = [
  { icon: Target,        title: "Goal Architecture",    desc: "We break your health vision into clear, measurable milestones with defined timelines and accountability checkpoints." },
  { icon: TrendingUp,    title: "Progress Tracking",    desc: "Weekly data reviews, biometric tracking, and objective benchmarks keep your progress visible and momentum strong." },
  { icon: MessageCircle, title: "Direct Access",        desc: "Your coach is available between sessions — no waiting for your next appointment when you need guidance." },
  { icon: Calendar,      title: "Structured Check-ins", desc: "Regular 1-on-1 sessions to review progress, adapt your plan, and keep you motivated through every phase." },
];

const COACHING_AREAS = ["Habit Formation & Behaviour Change","Stress Management & Resilience","Sleep Optimisation","Movement & Exercise Programming","Mindset & Motivation","Work-Life Integration"];

export default function CoachPage() {
  return (
    <>
      <PageHero eyebrow="Health Coaching" title="The Accountability Partner Your Health Deserves"
        subtitle="Knowledge alone doesn't create change. Our elite coaches bridge the gap between knowing and doing."
        image={IMAGES.coachHero.src} imageAlt={IMAGES.coachHero.alt} blurDataURL={IMAGES.coachHero.blurDataURL} />
      <section className="py-24 bg-white">
        <div className="section-container space-y-14">
          <SectionHeader eyebrow="Why Coaching" title="Results Require More Than a Plan"
            subtitle="Our coaching program exists because even the best medical protocol fails without the right support structure." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COACHING_FEATURES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-7 flex gap-5">
                <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0"><Icon size={20} className="text-white" /></div>
                <div className="space-y-1.5">
                  <h3 className="font-heading text-lg text-primary">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src={IMAGES.coachSession.src} alt={IMAGES.coachSession.alt} fill
              sizes="(max-width: 1024px) 100vw, 50vw" quality={80} className="object-cover"
              placeholder="blur" blurDataURL={IMAGES.coachSession.blurDataURL} />
          </div>
          <div className="space-y-6">
            <SectionHeader eyebrow="Coaching Areas" title="Whole-Person Transformation" align="left" />
            <p className="text-gray-500 leading-relaxed">Our coaches are trained in behaviour change psychology, functional health, and performance science — working across every dimension of your wellbeing.</p>
            <ul className="space-y-3">
              {COACHING_AREAS.map((area) => (
                <li key={area} className="flex items-center gap-3 text-sm text-gray-700 border-b border-gray-100 pb-3">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full shrink-0" />{area}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary inline-flex mt-2">Get Matched with a Coach <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
