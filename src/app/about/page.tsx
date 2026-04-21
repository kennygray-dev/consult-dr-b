import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/images";
import CTABanner from "@/components/sections/CTABanner";
import ReadMoreClient from "@/components/ui/ReadMoreClient";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Dr B, our philosophy, and the team behind Consult Dr B.",
};

const FULL_BIO = `Her interest in molecular science became evident early in her academic career. As a second-year medical student, Dr. Bashirat (Nigeria) alongside two of her excellent colleagues who are also currently part of the company's medical & management team in persons of Dr. Rachid (Lebanon) and Dr. Botchwey (Ghana) — the top of their classes — presented a research thesis summary in Crimea related to a prototype project involving DNA barcoding (ZYGMO) within the field of molecular biochemistry.

The prototype research was developed by Professor Konstantin Efetov, a Nobel Prize–winning scientist in immunology, head of department, and one of her academic mentors. Presenting the scientific summary of this work under his supervision exposed her to the precision and depth of molecular research, further strengthening her admiration for scientific inquiry and inspiring her to continually seek solutions beyond conventional medical thinking.

Alongside her academic interests, Dr. Bashirat developed a strong affinity for surgery, a discipline she admired for its decisive and radical approach to correcting disease at its root. The philosophy of identifying the underlying problem and fixing it directly resonated deeply with her broader view of medicine.

Yet one of the most defining influences on her medical perspective came not from textbooks or laboratories, but from personal experience. During her third year in medical school, while navigating the demanding environment of medical training, Dr. Bashirat encountered significant metabolic health challenges of her own. Like many patients, she found herself moving through a system where medical solutions often focused primarily on managing symptoms rather than investigating the deeper biological drivers of dysfunction.

Rather than accepting this limitation, the experience ignited a deeper intellectual pursuit. Determined to understand the root mechanisms of metabolic imbalance, she began exploring areas often under-emphasized in traditional medical education — including nutritional science, metabolic physiology, cellular health, and regenerative medicine. What began as a personal search for answers gradually evolved into a broader realization: that many chronic conditions originate from disturbances at the metabolic and cellular level long before they manifest as clinical disease.

After completing her medical degree and obtaining additional licensure to practice medicine in her home country, Dr. Bashirat returned to Nigeria where she spent four years working within the healthcare system, gaining extensive hands-on clinical experience. During this period, she worked alongside a diverse network of physicians, surgeons, and medical specialists, caring for patients across a wide spectrum of medical conditions.

This phase of her career proved profoundly formative. Working on the front lines of healthcare allowed her to witness both the strengths and limitations of conventional medicine. While modern healthcare systems excel at acute care, emergency interventions, and life-saving treatments, she observed that many patients — particularly those dealing with metabolic disorders, chronic illness, recovery after major treatments, and long-term health optimization — often required a more comprehensive, personalized, and proactive approach to care.

She also recognized that a growing number of individuals were actively seeking healthcare models that moved beyond reactive treatment toward preventive medicine, metabolic optimization, and long-term vitality. From this realization, the vision for Consult Dr B was born.

Today, Dr. Bashirat leads a physician-driven practice that integrates international medical exposure, scientific curiosity, and clinical experience to create a modern approach to healthcare centered on precision medicine, metabolic health, regenerative therapeutics, and longevity science.

Her philosophy is grounded in a simple but powerful belief: that when the human body is understood at its biochemical and cellular foundations, and supported with the right medical strategies, it possesses an extraordinary capacity for healing, restoration, and resilience.

Through Consult Dr B, her mission is to help patients move beyond the limitations of symptom-focused care and toward a future defined by root-cause medicine, optimized physiology, and sustainable long-term health. Because for Dr. Bashirat, medicine is not merely about treating disease — it is about unlocking the full potential of human health.

Dr. Bashirat believes that the future of medicine lies not only in treating disease, but in understanding the human body deeply enough to restore balance, optimize health, and unlock its natural capacity for healing.`;

const FOUNDER_HIGHLIGHTS = [
  {
    stat: "Top 5%",
    title: "Academic Excellence",
    body: "Graduated among the top 5% of her class at Ryazan State Medical University, Russia — completing rigorous training across the full spectrum of preclinical and clinical disciplines.",
  },
  {
    stat: "3",
    title: "International Medical Licences",
    body: "Holds recognized qualifications across three jurisdictions — U.S. equivalency as a First Professional Degree, recognition within the German medical system, and full licensure in Nigeria.",
  },
  {
    stat: "ZYGMO",
    title: "Molecular Research, Crimea",
    body: "As a second-year student, presented a DNA barcoding thesis under Nobel Prize–winning immunologist Prof. Konstantin Efetov — an early foundation in molecular science and precision medicine.",
  },
  {
    stat: "4 Yrs",
    title: "Front-Line Clinical Practice",
    body: "Spent four years working alongside physicians and surgeons in Nigeria — witnessing both the strengths and the limitations of conventional medicine firsthand.",
  },
  {
    stat: "Root",
    title: "Cause Medicine Philosophy",
    body: "Driven by personal metabolic health challenges, she pursued nutritional science, cellular health, and regenerative medicine — recognizing that chronic disease begins long before it surfaces clinically.",
  },
  {
    stat: "Today",
    title: "Consult Dr B",
    body: "Leads a physician-driven practice integrating precision medicine, metabolic health, regenerative therapeutics, and longevity science — helping patients move beyond symptom management toward optimized, sustainable health.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Logo hero — desktop only ── */}
      <Reveal>
        <section className="hidden lg:flex bg-[#F8F4EA] items-center justify-center py-20 md:py-40">
          <Image
            src="/logo2.png"
            alt="Consult Doctor B"
            width={340}
            height={110}
            className="object-contain"
            priority
          />
        </section>
      </Reveal>

      <Reveal>
        {/* ── Founder section ── */}
        <section className="relative overflow-visible">
          <div className="absolute inset-0">
            <Image
              src="/aboutpageteam.png"
              alt=""
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/90" />
          </div>

          <div className="relative z-10 section-container py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image — full width on mobile, sticky on desktop */}
            <div className="relative lg:sticky top-28 self-start flex justify-start">
              <div className="absolute top-5 left-5 w-[80%] h-[92%] border border-secondary/40 rounded-xl z-0" />
              <div className="relative w-[80%] lg:w-[80%] aspect-[3/4] overflow-hidden rounded-xl z-10">
                <Image
                  src="/bashirat.png"
                  alt="Dr. Bashirat Hassan Olamide"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Text — below image on mobile, beside on desktop */}
            <div className="space-y-5 pt-24 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-black/5 shadow-sm">
              <h2 className="font-heading text-2xl text-black">Our Founder</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dr. Bashirat Hassan Olamide, M.D., is a physician whose philosophy of medicine was shaped by a rare combination of academic distinction, scientific curiosity, personal experience, and international clinical exposure.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                She graduated among the top 5% of her class from Ryazan State Medical University in Russia, completing rigorous medical training across the full spectrum of preclinical and clinical disciplines. Her qualifications hold international recognition, including U.S. equivalency as a First Professional Degree in Medicine, recognition of her medical degree within the German medical system, and full medical licensure in Nigeria.
              </p>
              <ReadMoreClient fullBio={FULL_BIO} />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* ── Our Approach + Our Standard ── */}
        <section className="py-20 bg-[#F8F4EA]">
          <div className="section-container grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Our Approach */}
            <div className="border border-gray-100 rounded-xl p-8 space-y-4 bg-white">
              <Image
                src="/icons/protection.png"
                alt="Protection"
                width={40}
                height={40}
              />
              <h3 className="font-heading text-xl text-black">Our Approach</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Every patient undergoes a detailed clinical evaluation, allowing us to design personalized, physician-guided programs tailored to their biology and goals.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                By integrating medicine, nutrition, and lifestyle optimization, we deliver care that is both clinically grounded and results-driven.
              </p>
            </div>

            {/* Our Standard */}
            <div className="border border-gray-100 rounded-xl p-8 space-y-4 bg-white">
              <Image
                src="/icons/heartcare.png"
                alt="Heart Care"
                width={40}
                height={40}
              />
              <h3 className="font-heading text-xl text-black">Our Standard</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Our team is internationally trained and operates within globally recognized medical frameworks. Every program is delivered with a focus on precision, discretion, and clinical excellence.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        {/* ── Team section ── */}
        <section className="bg-white py-20">
          <div className="section-container grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <div className="space-y-6">
              <h2 className="font-heading text-3xl text-black">
                Redefining Modern Medicine Through Precision Care
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                Consult Dr B is a physician-led medical practice focused on preventive, metabolic, cellular, and regenerative medicine. Our approach is centered on identifying and addressing the underlying drivers of disease, rather than simply managing symptoms.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                We combine clinical expertise, advanced diagnostics, and personalized treatment strategies to support long-term health, recovery, and performance.
              </p>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 border border-secondary text-secondary px-6 py-2.5 text-sm hover:bg-secondary hover:text-white transition-all duration-200"
              >
                View Team Members <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right: team image */}
            <div className="relative aspect-[4/4] overflow-hidden rounded-xl">
              <Image
                src="/aboutpageteam.png"
                alt="Consult Dr B Team"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <CTABanner
          title="Start Your Personalized Health Journey"
          subtitle="Our medical team is here to guide you through a personalized care plan designed to support long-term vitality and wellbeing."
          buttonText="Contact Our Team"
          buttonHref="/contact"
          backgroundImage={IMAGES.servicesHero.src}
          backgroundImageAlt={IMAGES.servicesHero.alt}
        />
      </Reveal>
    </>
  );
}