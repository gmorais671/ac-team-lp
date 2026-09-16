import { ArrowDownRight, MessageCircle } from "lucide-react";
import Link from "next/link";

import { siteInfo } from "@/data/site-content";

export default function Hero() {
  const whatsappUrl = `https://wa.me/${siteInfo.contact.whatsappNumber}?text=${encodeURIComponent(siteInfo.contact.defaultMessage)}`;

  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-background" id="inicio">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-18rem] -z-10 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-brand-red/15 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-16rem] right-[-10rem] -z-10 h-[32rem] w-[32rem] rounded-full bg-red-950/30 blur-[100px]" />
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 border-l-2 border-brand-red pl-3 text-xs font-bold uppercase tracking-[0.24em] text-red-400">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Treino · Nutrição · Performance
          </div>
          <h1 className="max-w-3xl text-[clamp(3.5rem,10vw,7.6rem)] font-black uppercase leading-[0.84] tracking-[-0.07em] text-white">
            A SUA MELHOR VERSÃO <span className="text-brand-red">COMEÇA AGORA</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            {siteInfo.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-brand-red px-6 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_0_32px_rgba(220,38,38,0.24)] transition-all hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-[0_0_42px_rgba(220,38,38,0.36)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
              href="#planos"
            >
              Conhecer os planos
              <ArrowDownRight aria-hidden="true" size={19} />
            </Link>
            <a
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-border bg-surface/70 px-6 text-sm font-bold uppercase tracking-[0.08em] text-zinc-100 transition-colors hover:border-brand-red hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
              href={whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" size={19} />
              Falar com Aleff
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400">
            {siteInfo.modalities.map((modality) => (
              <span className="flex items-center gap-2" key={modality}>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                {modality}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:justify-self-end">
          <div aria-hidden="true" className="absolute -inset-5 rounded-[2rem] border border-brand-red/20 bg-brand-red/5 blur-sm" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-2xl shadow-black/40">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(220,38,38,0.4),transparent_34%),linear-gradient(145deg,#18181b_0%,#121215_52%,#09090b_100%)]" />
            <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-[74%] w-[72%] -translate-x-1/2 rounded-t-[48%] border border-white/10 bg-gradient-to-t from-black/50 via-zinc-700/20 to-white/10" />
            <div className="absolute inset-x-8 bottom-8 border-l-2 border-brand-red pl-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">ACTeam</p>
              <p className="mt-2 text-sm text-zinc-300">Força para evoluir. Estratégia para permanecer.</p>
            </div>
            <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-400">
              Visual em breve
            </span>
            {/* TODO: substituir placeholder pelas fotos autorizadas do Aleff. */}
          </div>
        </div>
      </div>
    </section>
  );
}
