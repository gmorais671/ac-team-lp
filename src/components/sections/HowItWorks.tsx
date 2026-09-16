"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ClipboardCheck, MessageCircle, Route } from "lucide-react";

import { howItWorksSteps } from "@/data/site-content";

const stepIcons = [ClipboardCheck, Route, MessageCircle];

export default function HowItWorks() {
  return (
    <section className="bg-background py-24 sm:py-32" id="como-funciona">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-400">Do primeiro contato à evolução</p>
          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl">
            Como <span className="text-brand-red">funciona</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Um processo claro para entender seu momento, construir sua estratégia e acompanhar cada ajuste.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {howItWorksSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.article
                className="group relative min-h-[27rem] overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-brand-red/60"
                initial={{ opacity: 0, y: 24 }}
                key={step.step}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(220,38,38,0.16),transparent_38%)] opacity-70 transition-opacity group-hover:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    <span className="text-7xl font-black leading-none tracking-[-0.09em] text-white/10">0{step.step}</span>
                    <div className="rounded-xl border border-border bg-background p-3 text-brand-red transition-colors group-hover:border-brand-red/50">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                  </div>
                  <div className="mt-auto">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">Etapa {step.step}</p>
                    <h3 className="mt-3 text-2xl font-bold text-white">{step.title}</h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-muted">{step.summary}</p>
                    <div className="mt-7 flex items-center justify-between border-t border-border pt-4 text-xs text-zinc-500">
                      <span>{step.mediaPlaceholder.label}</span>
                      <ArrowUpRight aria-hidden="true" className="text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={17} />
                    </div>
                  </div>
                </div>
                {/* TODO: inserir vídeo ou GIF da etapa correspondente após confirmação e autorização. */}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
