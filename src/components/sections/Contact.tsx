"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { plans, siteInfo } from "@/data/site-content";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Digite seu nome."),
  whatsapp: z.string().trim().min(10, "Digite um WhatsApp válido."),
  objective: z.string().min(1, "Selecione seu objetivo."),
  plan: z.string().min(1, "Selecione um plano."),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({ resolver: zodResolver(contactSchema) });
  const onSubmit = (data: ContactFormData) => {
    const message = `Olá, Aleff! Meu nome é ${data.name}. Tenho interesse em acompanhamento para ${data.objective}. Gostaria de saber mais sobre o plano ${data.plan}. Meu WhatsApp é ${data.whatsapp}.`;
    window.open(`https://wa.me/${siteInfo.contact.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-background py-24 sm:py-32" id="contato">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-400">Seu próximo passo</p>
          <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl">Vamos começar sua <span className="text-brand-red">evolução?</span></h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-muted">Preencha seus dados e a conversa será aberta diretamente no WhatsApp da ACTeam.</p>
          <a className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white underline decoration-brand-red decoration-2 underline-offset-8 hover:text-red-200" href={`https://wa.me/${siteInfo.contact.whatsappNumber}`} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" size={18} /> {siteInfo.contact.whatsappFormatted} <ArrowUpRight aria-hidden="true" size={16} /></a>
        </div>
        <form className="rounded-2xl border border-border bg-surface p-6 sm:p-9" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-semibold text-zinc-200">Nome<input {...register("name")} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 font-normal text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-brand-red" placeholder="Seu nome" /></label>
            <label className="text-sm font-semibold text-zinc-200">WhatsApp<input {...register("whatsapp")} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 font-normal text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-brand-red" placeholder="(00) 00000-0000" /></label>
            <label className="text-sm font-semibold text-zinc-200">Objetivo<select {...register("objective")} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 font-normal text-white outline-none focus:border-brand-red"><option value="">Selecione</option><option>Emagrecimento</option><option>Hipertrofia</option><option>Performance</option></select></label>
            <label className="text-sm font-semibold text-zinc-200">Plano de interesse<select {...register("plan")} className="mt-2 h-12 w-full rounded-xl border border-border bg-background px-4 font-normal text-white outline-none focus:border-brand-red"><option value="">Selecione</option>{plans.map((plan) => <option key={plan.id}>{plan.name}</option>)}</select></label>
          </div>
          {(errors.name || errors.whatsapp || errors.objective || errors.plan) && <p className="mt-5 text-sm text-red-400">{errors.name?.message || errors.whatsapp?.message || errors.objective?.message || errors.plan?.message}</p>}
          <button className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-brand-red px-5 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-[0_0_28px_rgba(220,38,38,0.2)] transition-colors hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300" type="submit"><MessageCircle aria-hidden="true" size={18} /> Enviar no WhatsApp</button>
        </form>
      </div>
    </section>
  );
}
