import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function CTABanner({
  title,
  subtitle,
  buttonText,
  buttonHref = "/contact",
  backgroundImage,
  backgroundImageAlt,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  backgroundImage: string;
  backgroundImageAlt: string;
}) {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundImageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 section-container flex justify-center">
        <Reveal>
          <div className="bg-primary px-12 py-14 text-center space-y-6 max-w-2xl w-full">
            <h2 className="font-heading text-3xl text-white">{title}</h2>
            <p className="text-white/70">{subtitle}</p>

            <Link
              href={buttonHref}
              className="inline-flex items-center gap-2 border border-white text-white text-sm px-6 py-3 hover:bg-white hover:text-primary transition-colors"
            >
              {buttonText} <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}