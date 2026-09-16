"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { faqItems } from "@/data/site-content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-surface py-24 sm:py-32" id="faq">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20 lg:px-10">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-400">Tire suas dúvidas</p>
          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl">Perguntas <span className="text-brand-red">frequentes.</span></h2>
          <p className="mt-6 text-lg leading-8 text-muted">Tudo o que você precisa saber para começar seu acompanhamento.</p>
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-background px-6 sm:px-8">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button aria-expanded={isOpen} className="flex w-full items-center justify-between gap-5 py-6 text-left text-base font-semibold text-white focus-visible:outline-2 focus-visible:outline-brand-red" onClick={() => setOpenIndex(isOpen ? null : index)} type="button">
                  {item.question}
                  <ChevronDown aria-hidden="true" className={`shrink-0 text-brand-red transition-transform ${isOpen ? "rotate-180" : ""}`} size={20} />
                </button>
                {isOpen && <p className="-mt-2 pb-6 pr-8 text-sm leading-6 text-muted">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
