import Reveal from "@/components/ui/Reveal";
import { Plus } from "lucide-react";

export default function FAQSection({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <section className="py-24" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="section-container grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
        <h2 className="font-heading text-2xl text-black leading-snug lg:sticky lg:top-24">
          Frequently Asked<br />Questions
        </h2>

        <div className="divide-y divide-gray-300">
          {items.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.05}>
              <details className="group py-5 cursor-pointer">
                
                <summary className="flex items-center justify-between gap-4 font-body text-black list-none cursor-pointer w-full">
                  {item.question}
                  
                  <Plus
                    size={18}
                    className="shrink-0 text-black transition-transform duration-300 ease-in-out group-open:rotate-45 pointer-events-none"
                  />
                </summary>

                <div className="grid transition-all duration-300 ease-in-out grid-rows-[0fr] group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 text-gray-500 text-sm leading-relaxed opacity-0 group-open:opacity-100 transition-opacity duration-300">
                      {item.answer}
                    </p>
                  </div>
                </div>

              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}