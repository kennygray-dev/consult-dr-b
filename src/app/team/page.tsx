import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui";
import { IMAGES } from "@/lib/images";
import Reveal from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the expert team at Consult Dr B.",
};

const TEAM = [
  { name: "Dr. Adeayo T.Y", role: "MD", credentials: "Russia 🇷🇺 / Nigeria 🇳🇬", bio: "", image: { src: "/adeayo.png", alt: "Dr. Adeayo T.Y portrait" } },
  { name: "Dr. Ruqayyah Ibrahim", role: "MD", credentials: "UAE 🇦🇪 / Great Britain 🇬🇧 / Nigeria 🇳🇬", bio: "", image: { src: "/ruqayyah.png", alt: "Dr. Ruqayyah Ibrahim portrait" } },
  { name: "Dr. Imaiker Theresa J", role: "MD (Consultant Endocrinologist - International)", credentials: "Russia 🇷🇺", bio: "", image: { src: "/imaiker.png", alt: "Dr. Imaiker Theresa J portrait" } },
  { name: "Dr. Gideon Botchey", role: "MD", credentials: "Russia 🇷🇺 / Ghana 🇬🇭", bio: "", image: { src: "/gideon.png", alt: "Dr. Gideon Botchey portrait" } },
  { name: "Dr. Abieyuwa Oshodin", role: "MBBS / MD", credentials: "Nigeria 🇳🇬", bio: "", image: { src: "/abieyuwa.jpg", alt: "Dr. Abieyuwa Oshodin portrait" } },
  { name: "Dr. Lobeswaran", role: "MD", credentials: "Russia 🇷🇺 / India 🇮🇳", bio: "", image: { src: "/lobeswaran.jpg", alt: "Dr. Lobeswaran portrait" } },
  { name: "Dr. Iyanuolu Stella D. E", role: "MBChB / MD", credentials: "Ghana 🇬🇭 / Nigeria 🇳🇬", bio: "", image: { src: "/stella.png", alt: "Dr. Iyanuolu Stella D. E portrait" } },
  { name: "Dr. Akshaya Sharma", role: "MD", credentials: "Russia 🇷🇺 / India 🇮🇳", bio: "", image: { src: "/akshaya.png", alt: "Dr. Akshaya Sharma portrait" } },
  { name: "Dr. Karam Rashid", role: "MBBS / MD - Mental Health and Counseling Specialist", credentials: "Saudi Arabia 🇸🇦 / Russia 🇷🇺", bio: "", image: { src: "/karam.png", alt: "Dr. Karam Rashid portrait" } },
  { name: "Dr. Pearl Manu", role: "Medical Officer - GP", credentials: "Russia 🇷🇺 / Ghana 🇬🇭", bio: "", image: { src: "/pearl.png", alt: "Dr. Pearl Manu portrait" } },
  { name: "Dr. Goodman Idigiri", role: "MD", credentials: "Ukraine 🇺🇦 / Great Britain 🇬🇧 / Nigeria 🇳🇬", bio: "", image: { src: "/goodman.png", alt: "Dr. Goodman Idigiri portrait" } },
  { name: "Dr. Owen Michael Irowa", role: "MD - Medical Performance and Body Optimization Physician", credentials: "Nigeria 🇳🇬 / USA 🇺🇸", bio: "", image: { src: "/owen.png", alt: "Dr. Owen Michael Irowa portrait" } },
  { name: "Dr. Bashirat Hassan Olamide", role: "MD (Founder, Consult Dr B)", credentials: "Russia 🇷🇺 / Nigeria 🇳🇬", bio: "", image: { src: "/bashirat.png", alt: "Dr. Bashirat Hassan Olamide portrait" } },
];

const ADMIN = {
  name: "Oshodin Precious Osamede",
  role: "Head of Admin",
  credentials: "",
  bio: "",
  image: { src: "/osamede.jpg", alt: "OSHODIN PRECIOUS OSAMEDE portrait" },
};

export default function TeamPage() {
  return (
    <>
     <PageHero
  title="Our Team"
  image="/aboutpageteam.png"
  imageAlt="Consult Dr B team"
/>
      <section className="py-24 bg-white">
        <div className="section-container space-y-14">
          <Reveal>
            <h2 className="font-heading text-3xl text-center text-secondary">
              Our Medical Specialists
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member, i) => {
              const isFounder = member.name.includes("Bashirat Hassan Olamide");

              return (
                <Reveal key={member.name} delay={i * 0.05}>
                  <div className={isFounder ? "lg:col-span-3 flex justify-center" : ""}>
                    <div className="group overflow-hidden max-w-sm w-full rounded-2xl h-[32rem] flex flex-col bg-white border border-black/10 shadow-sm">
                      <div className="relative flex-1 overflow-hidden">
                        <Image
                          src={member.image.src}
                          alt={member.image.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          quality={80}
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6 space-y-3 text-center border-t border-black/10">
                        <div>
                          <h3 className="font-heading text-xl text-primary">{member.name}</h3>
                          <p className="text-secondary text-sm font-semibold">{member.role}</p>
                          <p className="text-gray-400 text-xs mt-0.5 tracking-wide">{member.credentials}</p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="section-container space-y-10 flex flex-col items-center">
          <Reveal>
            <h2 className="font-heading text-2xl text-secondary">Administration</h2>
          </Reveal>

          <Reveal>
            <div className="group overflow-hidden max-w-sm w-full rounded-2xl h-[32rem] flex flex-col bg-white border border-black/10 shadow-sm">
              <div className="relative flex-1 overflow-hidden">
                <Image
                  src={ADMIN.image.src}
                  alt={ADMIN.image.alt}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 space-y-2 border-t border-black/10">
                <h3 className="font-heading text-xl text-primary">{ADMIN.name}</h3>
                <p className="text-secondary text-sm font-semibold">{ADMIN.role}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}