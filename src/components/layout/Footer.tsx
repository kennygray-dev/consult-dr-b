"use client";
import Link from "next/link";
import Image from "next/image";
import { Instagram, MapPin } from "lucide-react";
import { SITE_NAME } from "@/lib/constants";

const SERVICES_LINKS = [
  { label: "Metabolic & Weight",                        href: "/services/metabolic-weight" },
  { label: "Regenerative & Cellular",                   href: "/services/regenerative-cellular" },
  { label: "Advanced Longevity & Performance Medicine", href: "/services/longevity-performance" },
  { label: "Aesthetics & Skin",                         href: "/services/aesthetics-skin" },
  { label: "Wellness & Specialized",                    href: "/services/wellness-specialized" },
  { label: "Post-Surgical Recovery & Wound Healing",    href: "/services/post-surgical-recovery" },
];

const PROGRAMS_LINKS = [
  { label: "Executive Performance & Precision Fitness", href: "/programs/executive-performance" },
  { label: "Elite Aesthetic Medical Partner Program", href: "/programs/elite-aesthetic-medical-partner-program" },
  { label: "Signature Peptide Bioregulation System", href: "/programs/signature-peptide-bioregulation-system" },
];

const COMPANY_LINKS = [
  { label: "About Us",   href: "/about" },
  { label: "Team",       href: "/team" },
  { label: "Contact Us", href: "/contact" },
];

const LOCATIONS = ["Abuja", "Lagos", "Benin", "Accra", "Worldwide"];

export default function Footer() {
  return (
    <footer className="bg-[#F8F4EA]">
      <div className="section-container py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr_180px_180px] gap-x-16 gap-y-12">

          {/* ── Col 1: Brand + locations + lab partners ── */}
          <div className="flex flex-col justify-between gap-12">
            <div className="space-y-5">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center">
                <Image
                  src="/logo2.png"
                  alt={SITE_NAME}
                  width={150}
                  height={45}
                  className="object-contain cursor-pointer"
                  priority
                />
              </Link>

              {/* Locations */}
              <div className="flex flex-wrap items-center gap-y-1 text-sm text-black/55">
                <MapPin size={14} className="text-black/40 mr-2 shrink-0" />
                {LOCATIONS.map((loc, i) => (
                  <span key={loc} className="flex items-center">
                    <span>{loc}</span>
                    {i < LOCATIONS.length - 1 && (
                      <span className="mx-2 text-black/25">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>

            {/* Lab partners — pinned to bottom of col */}
            <div className="space-y-4">
              <p
                className="text-secondary text-sm"
                style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
              >
                Trusted laboratory partners
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <div className="relative h-14 w-32">
                  <Image src="/partners/synlab.png" alt="Synlab" fill className="object-contain object-left" />
                </div>
                <div className="relative h-16 w-40">
                  <Image
                    src="/partners/aurum1.png"
                    alt="Aurum Concierge Medical"
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="relative h-16 w-32 border border-black/10 rounded p-1">
                  <Image src="/partners/katchey.png" alt="Katchey" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>

          {/* ── Col 2: Services ── */}
          <div className="space-y-5">
            <h4 className="text-secondary font-normal text-base tracking-wide">
              Services
            </h4>
            <ul className="space-y-3.5">
              {SERVICES_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/55 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 space-y-4">
              <h4 className="text-secondary font-normal text-base tracking-wide">
                Programs
              </h4>

              <ul className="space-y-3.5">
                {PROGRAMS_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/55 hover:text-secondary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Col 3: Company ── */}
          <div className="space-y-5">
            <h4 className="text-secondary font-normal text-base tracking-wide">
              Company
            </h4>
            <ul className="space-y-3.5">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-black/55 hover:text-secondary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Socials ── */}
          <div className="space-y-5">
            <h4 className="text-secondary font-normal text-base tracking-wide">
              Socials
            </h4>

            <ul className="space-y-3.5">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-black/55 hover:text-secondary transition-colors duration-200"
                >
                  <Instagram size={15} className="shrink-0" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-black/10">
        <div className="section-container py-5 flex justify-center items-center text-center text-xs text-black/35">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}