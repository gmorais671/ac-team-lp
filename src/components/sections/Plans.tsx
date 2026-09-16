import { Check, Minus, MessageCircle } from "lucide-react";

import { comparisonMatrixRows, comparisonOptionalNote, plans, siteInfo } from "@/data/site-content";
import type { FeatureAvailability, PlanItem } from "@/types";

function featureLabel(value: FeatureAvailability) {
  if (value === "optional") return "Opcional";
  return value ? "Sim" : "Não";
}

function FeatureIcon({ value }: { value: FeatureAvailability }) {
  if (value === "optional") return <span className="text-xs font-bold text-amber-300">Opcional</span>;
  return value ? <Check aria-hidden="true" className="text-brand-red" size={18} strokeWidth={3} /> : <Minus aria-hidden="true" className="text-zinc-600" size={18} />;
}

function PlanCard({ plan }: { plan: PlanItem }) {
  const whatsappUrl = `https://wa.me/${siteInfo.contact.whatsappNumber}?text=${encodeURIComponent(`${siteInfo.contact.defaultMessage} Tenho interesse no plano ${plan.name}.` )}`;
  return (
    <article className={`relative flex h-full flex-col rounded-2xl border p-6 ${plan.featured ? "border-brand-red bg-surface-elevated shadow-[0_0_36px_rgba(220,38,38,0.12)]" : "border-border bg-surface"}`}>
      {plan.featured && <span className="absolute right-5 top-5 rounded-full bg-brand-red px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">{plan.badge}</span>}
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">{plan.modality}</p>
      <h3 className="mt-4 max-w-[13rem] text-2xl font-bold leading-tight text-white">{plan.name}</h3>
      <p className="mt-3 min-h-12 text-sm leading-6 text-muted">{plan.description}</p>
      <div className="mt-6 border-y border-border py-5">
        <span className="text-4xl font-black tracking-[-0.06em] text-white">{plan.formattedPrice}</span>
        <span className="ml-2 text-sm text-zinc-500">{plan.billingPeriod}</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-zinc-300">
        {plan.features.map((feature) => <li className="flex gap-3" key={feature}><Check aria-hidden="true" className="mt-0.5 shrink-0 text-brand-red" size={16} strokeWidth={3} />{feature}</li>)}
      </ul>
      {plan.selectionNote && <p className="mt-5 text-xs leading-5 text-zinc-500">{plan.selectionNote}</p>}
      <a className={`mt-auto inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-4 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${plan.featured ? "bg-brand-red text-white hover:bg-red-500" : "border border-border text-white hover:border-brand-red"}`} href={whatsappUrl} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" size={17} />Tenho interesse</a>
    </article>
  );
}

export default function Plans() {
  return (
    <section className="bg-background py-24 sm:py-32" id="planos">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-400">Escolha seu acompanhamento</p>
          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl">Planos para <span className="text-brand-red">evoluir.</span></h2>
          <p className="mt-6 text-lg leading-8 text-muted">Opções online e presenciais para você começar com a estratégia que faz sentido para seu momento.</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{plans.map((plan) => <PlanCard key={plan.id} plan={plan} />)}</div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-surface">
          <div className="border-b border-border p-6 sm:p-8"><h3 className="text-2xl font-bold text-white">Compare os recursos</h3><p className="mt-2 text-sm text-muted">Veja o que está incluído em cada opção de acompanhamento.</p></div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[50rem] text-left text-sm">
              <thead className="bg-surface-elevated text-xs uppercase tracking-[0.12em] text-zinc-400"><tr><th className="min-w-52 px-6 py-5 font-semibold">Recurso</th>{plans.map((plan) => <th className="min-w-40 px-4 py-5 text-center font-semibold" key={plan.id}>{plan.name}</th>)}</tr></thead>
              <tbody className="divide-y divide-border">{comparisonMatrixRows.map((row) => <tr key={row.key}><th className="px-6 py-5 font-medium text-zinc-300">{row.label}</th>{plans.map((plan) => <td className="px-4 py-5 text-center" key={plan.id} aria-label={`${plan.name}: ${featureLabel(plan.matrix[row.key])}`}><span className="inline-flex min-h-5 items-center justify-center"><FeatureIcon value={plan.matrix[row.key]} /></span></td>)}</tr>)}</tbody>
            </table>
          </div>
          <p className="border-t border-border px-6 py-5 text-xs leading-5 text-zinc-500">* {comparisonOptionalNote}</p>
        </div>
      </div>
    </section>
  );
}
