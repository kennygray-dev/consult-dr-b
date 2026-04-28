'use client';

import { IMAGES } from "@/lib/images";
// metadata removed because this is now a client component
import { Phone, Mail } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { CONTACT_INFO } from "@/lib/constants";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const phone = "2347072261185";
const waMessage = encodeURIComponent("Hello, I'd like to book a consultation with Consult Dr B.");
const waHref = `https://wa.me/${phone}?text=${waMessage}`;


export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our team and take the first step toward optimal health."
        image="/team.png"
        imageAlt="Consult Dr B team"
        blurDataURL={IMAGES.contactHero.blurDataURL}
      />

      {/* ── Hero CTA — WhatsApp first ── */}
      <Reveal>
        <section className="py-24 bg-white">
          <div className="section-container grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div className="space-y-6">
              <p className="text-secondary text-xs uppercase tracking-widest">Fastest Response</p>
              <h2 className="font-heading text-4xl lg:text-5xl text-primary leading-tight">
                Discreet. Responsive. Personalized.
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                For the fastest response, connect with us directly via WhatsApp.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                Speak with our team, ask questions, and receive guidance on the most suitable program — all in a simple, secure, and convenient way.
              </p>
            </div>

            {/* Right: WhatsApp card */}
            <div className="bg-primary rounded-2xl overflow-hidden">
              {/* Doctor image */}
              <div className="relative h-72 w-full">
                <Image
                  src="/team.png"
                  alt="Consult Dr B"
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* CTA */}
              <div className="p-6 space-y-3">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-white text-primary font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                >
                  <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={28} height={28} />
                  <span>Chat on WhatsApp</span>
                </a>
                <p className="text-white/60 text-xs text-center tracking-wide">
                  WhatsApp Consultation (Recommended)
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ── Contact form + info ── */}
      <Reveal>
        <section className="py-24 bg-[#FFFFFF]">
          <div className="section-container grid gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <SectionHeader eyebrow="Find Us" title="Get In Touch" align="left" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="border border-black/10 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center">
                      <Phone size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary font-semibold tracking-widest uppercase">Phone</p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Available for direct communication during work hours.
                  </p>

                  <a
                    href="tel:+2347072261185"
                    className="w-full inline-flex items-center justify-center bg-secondary text-white font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition"
                  >
                    Call Now
                  </a>
                </div>

                <div className="border border-black/10 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary flex items-center justify-center">
                      <Mail size={18} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-secondary font-semibold tracking-widest uppercase">Email</p>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Send us your inquiries and our team will respond promptly.
                  </p>

                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="w-full inline-flex items-center justify-center bg-secondary text-white font-semibold py-4 px-6 rounded-xl hover:opacity-90 transition"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}