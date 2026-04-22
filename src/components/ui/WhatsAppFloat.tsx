"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

export default function WhatsAppFloat(): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [selectedOrder, setSelectedOrder] = useState<string>("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setHovered(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const phone = "2347072261185";

  const baseMessage = selectedOrder
    ? `Hi, I came from the website. I would like to place an order / request assistance regarding: ${selectedOrder}.`
    : selectedService
    ? `Hi, I came from the website. I would like to make an enquiry about the service: ${selectedService}.`
    : selectedProgram
    ? `Hi, I came from the website. I would like to make an enquiry about the program: ${selectedProgram}.`
    : "Hi, I came from the website. I would like to book a consultation with Consult Dr B.";

  const message = encodeURIComponent(baseMessage);
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[9999] pointer-events-none"
    >
      {/* ── Tooltip Panel ── */}
      <div
        className={`transition-all duration-300 ${
          hovered
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <div className="relative bg-white rounded-xl shadow-lg border border-black/10 px-4 pr-10 py-3 text-left min-w-[180px]">

          {/* Close */}
          <button
            onClick={() => setHovered(false)}
            className="absolute top-3 right-8 text-black/60 hover:text-black transition"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <p className="text-xs text-black/60 mb-1">
            Chat with us on WhatsApp
          </p>

          <p className="text-xs text-green-600 font-medium mt-1">
            Usually replies instantly
          </p>

          {/* Services */}
          <p className="text-[10px] uppercase tracking-widest text-black/50 mb-2 mt-3">
            Services
          </p>

          <div className="grid grid-cols-1 gap-1">
            {[
              "Metabolic and Weight",
              "Regenerative and Cellular",
              "Advanced Longevity and Performance",
              "Aesthetical and Skin",
              "Wellness and Specialized",
              "Post-Surgical Recovery and Wound Healing",
            ].map((service) => (
              <button
                key={service}
                onClick={() => {
                  setSelectedService(service);
                  setSelectedProgram("");
                  setSelectedOrder("");
                }}
                className={`group flex items-center justify-between w-full text-xs text-left px-3 py-2 rounded-md transition border border-transparent hover:bg-black/5 hover:border-black/10 ${
                  selectedService === service
                    ? "bg-black text-white border-black"
                    : "text-black"
                }`}
              >
                <span>
                  {selectedService === service ? "✓ " : ""}
                  {service}
                </span>
                <ArrowRight
                  size={14}
                  className="opacity-60 group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            ))}
          </div>

          {/* Programs */}
          <div className="mt-4 border-t border-black/10 pt-3">
            <p className="text-[10px] uppercase tracking-widest text-black/50 mb-2">
              Programs
            </p>

            {[
              "Executive Performance & Precision Fitness",
              "Elite Aesthetic Medical Partner Program",
              "Signature Peptide Bioregulation System",
            ].map((program) => (
              <button
                key={program}
                onClick={() => {
                  setSelectedProgram(program);
                  setSelectedService("");
                  setSelectedOrder("");
                }}
                className={`group flex items-center justify-between w-full text-xs text-left px-3 py-2 rounded-md transition border border-transparent hover:bg-black/5 hover:border-black/10 ${
                  selectedProgram === program
                    ? "bg-black text-white border-black"
                    : "text-black"
                }`}
              >
                <span>
                  {selectedProgram === program ? "✓ " : ""}
                  {program}
                </span>
                <ArrowRight
                  size={14}
                  className="opacity-60 group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            ))}
          </div>

          {/* Other */}
          <div className="mt-4 border-t border-black/10 pt-3">
            <p className="text-[10px] uppercase tracking-widest text-black/50 mb-2">
              Other Assistance
            </p>

            {["General Assistance"].map((order) => (
              <button
                key={order}
                onClick={() => {
                  setSelectedOrder(order);
                  setSelectedService("");
                  setSelectedProgram("");
                }}
                className={`group flex items-center justify-between w-full text-xs text-left px-3 py-2 rounded-md transition border border-transparent hover:bg-black/5 hover:border-black/10 ${
                  selectedOrder === order
                    ? "bg-black text-white border-black"
                    : "text-black"
                }`}
              >
                <span>
                  {selectedOrder === order ? "✓ " : ""}
                  {order}
                </span>
                <ArrowRight
                  size={14}
                  className="opacity-60 group-hover:translate-x-1 transition-transform duration-200"
                />
              </button>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full text-center text-xs bg-black text-white py-2 rounded-md hover:bg-black/80 transition"
          >
            Continue on WhatsApp
          </a>
        </div>
      </div>

      {/* ── Floating Button (ALWAYS ABOVE EVERYTHING) ── */}
      <button
        onClick={() => setHovered((prev) => !prev)}
        className="pointer-events-auto fixed bottom-6 right-6 z-[9999] hover:scale-110 transition-transform duration-200 drop-shadow-lg"
        aria-label="Open WhatsApp options"
      >
        <Image
          src="/icons/whatsapp.svg"
          alt="WhatsApp"
          width={64}
          height={64}
          priority
        />
      </button>
    </div>
  );
}