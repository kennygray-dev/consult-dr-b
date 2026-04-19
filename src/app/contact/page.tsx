import { IMAGES } from "@/lib/images";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero, SectionHeader } from "@/components/ui";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Consult Dr B to book your consultation.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start Your Journey"
        subtitle="Reach out to our team and take the first step toward optimal health."
        image={IMAGES.contactHero.src}
        imageAlt={IMAGES.contactHero.alt}
        blurDataURL={IMAGES.contactHero.blurDataURL}
      />

      <section className="py-24 bg-white">
        <div className="section-container grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <SectionHeader eyebrow="Find Us" title="Get In Touch" align="left" />
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Address",       value: CONTACT_INFO.address },
                { icon: Phone,  label: "Phone",         value: CONTACT_INFO.phone },
                { icon: Mail,   label: "Email",         value: CONTACT_INFO.email },
                { icon: Clock,  label: "Office Hours",  value: CONTACT_INFO.hours },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary font-semibold tracking-widest uppercase">{label}</p>
                    <p className="text-gray-700 mt-0.5">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 space-y-5">
            <h3 className="font-heading text-2xl text-primary">Book a Consultation</h3>
            <div className="gold-rule" />
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">First Name</label>
                  <input type="text" placeholder="John" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</label>
                <input type="email" placeholder="john@example.com" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</label>
                <input type="tel" placeholder="+1 (800) 000-0000" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Service of Interest</label>
                <select className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors bg-white">
                  <option value="">Select a service…</option>
                  <option>Clinical Consulting</option>
                  <option>Nutrition Therapy</option>
                  <option>Peptide Therapy</option>
                  <option>Health Coaching</option>
                  <option>Personalised Programs</option>
                  <option>Corporate Partnership</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</label>
                <textarea rows={4} placeholder="Tell us about your health goals…" className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
              </div>
              <button className="btn-primary w-full justify-center">
                Send Message
              </button>
              <p className="text-xs text-gray-400 text-center">We typically respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
