'use client';

import { IMAGES } from "@/lib/images";
// metadata removed because this is now a client component
import { Phone, Mail, Instagram } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { CONTACT_INFO } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

const phone = "2347072261185";
const waMessage = encodeURIComponent("Hello, I'd like to book a consultation with Consult Dr B.");
const waHref = `https://wa.me/${phone}?text=${waMessage}`;


export default function ContactPage() {
  const services = [
    "Metabolic and Weight Optimization",
    "Regenerative and Cellular Medicine",
    "Advanced Longevity and Performance Medicine",
    "Aesthetics and Skin Medicine",
    "Specialized Wellness Programs",
    "Post-Surgical Recovery and Wound Healing",
  ];

  const programs = [
    "Executive Performance & Precision Fitness",
    "Elite Aesthetic Medical Partner Program",
    "Signature Peptide Bioregulation System",
  ];

  const otherOptions = [
    "General Assistance",
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  });

  const updateService = (value: string) => {
    setForm((prev) => ({
      ...prev,
      service: value,
      message: `Hi, I came from the website. I would like to enquire about ${value}.`,
    }));
  };

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
          <div className="section-container grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-10">
              <SectionHeader eyebrow="Find Us" title="Get In Touch" align="left" />
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-semibold tracking-widest uppercase">Phone</p>
                    <a href="tel:+2347072261185" className="text-gray-700 mt-0.5 underline">
                      +234 707 226 1185
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-semibold tracking-widest uppercase">Email</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-700 mt-0.5 underline">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                    <Instagram size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-semibold tracking-widest uppercase">Instagram</p>
                    <a
                      href="https://instagram.com/elitemededu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 mt-0.5 underline"
                    >
                      @elitemededu
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 space-y-5 rounded-2xl shadow-sm border border-black/10">
              <h3 className="font-heading text-2xl text-primary">Book a Consultation</h3>
              <div className="gold-rule" />
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name</label>
                    <input
                      value={form.firstName}
                      onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      type="text"
                      placeholder="John"
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Name</label>
                    <input
                      value={form.lastName}
                      onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      type="text"
                      placeholder="Doe"
                      className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</label>
                  <input
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    type="tel"
                    placeholder="+234..."
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Service / Program of Interest
                  </label>

                  <select
                    value={form.service}
                    onChange={(e) => updateService(e.target.value)}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                  >
                    <option value="">Select an option…</option>

                    <optgroup label="Services">
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </optgroup>

                    <optgroup label="Programs">
                      {programs.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </optgroup>

                    <optgroup label="Other Assistance">
                      {otherOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent("Consultation Request from Website")}&body=${encodeURIComponent(
                    `Name: ${form.firstName} ${form.lastName}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
                  )}`}
                  className="btn-primary w-full justify-center inline-flex items-center"
                >
                  Send Message
                </a>
                <p className="text-xs text-gray-400 text-center">We typically respond within 24 hours.</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  );
}