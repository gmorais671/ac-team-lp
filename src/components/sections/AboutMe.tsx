import { Check, MapPin, Monitor } from "lucide-react";

import { differentials, siteInfo } from "@/data/site-content";

export default function AboutMe() {
  return (
    <section className="relative overflow-hidden bg-surface py-24 sm:py-32" id="sobre">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div aria-hidden="true" className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-brand-red/10 blur-[100px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-400">A metodologia ACTeam</p>
            <h2 className="max-w-md text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl">
              Por que escolher a <span className="text-brand-red">ACTeam?</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-7 text-muted sm:text-lg">
              <p>{siteInfo.officialBio}</p>
              <p>
                Seu planejamento é construído para a sua realidade, com orientação próxima e ajustes ao longo do processo.
              </p>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4">
                <MapPin aria-hidden="true" className="shrink-0 text-brand-red" size={19} />
                <span>Presencial em {siteInfo.location.formatted}</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background/60 p-4">
                <Monitor aria-hidden="true" className="shrink-0 text-brand-red" size={19} />
                <span>Online no Brasil e exterior</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-border bg-background/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-9">
            <div className="mb-7 flex items-center justify-between border-b border-border pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">O que você encontra</p>
                <p className="mt-2 text-xl font-bold text-white">Estratégia que acompanha sua evolução.</p>
              </div>
              <span aria-hidden="true" className="text-4xl font-black text-brand-red/30">AC</span>
            </div>
            <ul className="grid gap-5 sm:grid-cols-2">
              {differentials.map((differential) => (
                <li className="flex gap-3 text-sm leading-6 text-zinc-300" key={differential.id}>
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-red/15 text-brand-red">
                    <Check aria-hidden="true" size={14} strokeWidth={3} />
                  </span>
                  {differential.text}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-5 text-sm text-zinc-500">
              Atendimento individualizado, do primeiro contato aos ajustes do seu protocolo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
