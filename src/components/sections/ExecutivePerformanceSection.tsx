"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ExecutivePerformanceSection() {
  return (
    <section className="py-24 bg-white">
      <div className="section-container grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT: Image */}
        <Reveal>
          <div className="relative flex justify-center">
            {/* Rounded border outline — offset to the right */}
            <div className="absolute top-6 right-6 w-[75%] h-[90%] rounded-2xl border border-secondary/40 z-0" />

            {/* Main portrait image */}
            <div className="relative w-[75%] aspect-[3/4] overflow-hidden rounded-2xl z-10">
              <Image
                src="/executive.jpg"
                alt="Executive Performance"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Text */}
        <Reveal delay={0.1}>
          <div className="space-y-6">
            <h2 className="font-heading text-3xl text-black leading-tight">
              Executive Performance &<br />Precision Fitness Division
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Led by DR. OWEN MICHAEL IROWA, MD, a licensed medical doctor with over a decade of experience, our programs combine clinical insight and advanced training to optimize performance, body composition, and long-term health.
            </p>
            <Link
              href="/programs/executive-performance"
              className="inline-flex items-center gap-2 border border-secondary text-secondary bg-transparent px-6 py-3 text-sm hover:bg-secondary hover:text-white transition-colors"
            >
              Learn About Our Fitness Program <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>

      </div>
    </section>
  );
}