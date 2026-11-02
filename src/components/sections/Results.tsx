"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useRef, useState } from "react";
import { testimonials } from "@/data/testimonials";

const imagePath = (file: string) => `/images/testimonials/${file}.webp`;

export default function Results() {
  const gallery = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const current = testimonials[selected];

  function open(index: number) {
    setSelected(index);
    setImageIndex(0);
    dialog.current?.showModal();
  }

  function scroll(direction: number) {
    const container = gallery.current;
    if (!container) return;
    const card = container.firstElementChild as HTMLElement | null;
    container.scrollBy({ left: direction * ((card?.offsetWidth ?? 350) + 24), behavior: "smooth" });
  }

  return (
    <section className="border-y border-border bg-surface py-24 sm:py-32" id="resultados">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-400">Histórias de quem faz parte da ACTeam</p>
            <h2 className="text-4xl font-black uppercase leading-[1.05] tracking-[-0.05em] text-white sm:text-6xl">
              Cada evolução tem <span className="text-brand-red">uma história.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted">
            Fotos, conquistas e depoimentos de alunos. Do dia a dia às grandes vitórias, cada registro conta uma parte do acompanhamento.
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4">
          <h3 className="text-lg font-semibold text-white">Depoimentos e evoluções</h3>
          <div className="flex gap-2">
            <button type="button" aria-label="Ver depoimentos anteriores" className="gallery-control" onClick={() => scroll(-1)}><ChevronLeft size={20} /></button>
            <button type="button" aria-label="Ver próximos depoimentos" className="gallery-control" onClick={() => scroll(1)}><ChevronRight size={20} /></button>
          </div>
        </div>
        <div ref={gallery} className="testimonial-gallery mt-5 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-5" role="region" aria-label="Galeria de depoimentos e evoluções" tabIndex={0}>
          {testimonials.map((item, index) => (
            <button key={item.title} type="button" onClick={() => open(index)} className="testimonial-card group flex shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-background text-left transition-colors hover:border-brand-red/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400" aria-label={`Ampliar: ${item.title}`}>
              <div className={`relative grid h-80 w-full bg-black ${item.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                {item.images.map((photo, photoIndex) => (
                  <div key={photo.file} className="relative min-w-0 overflow-hidden">
                    <Image src={imagePath(photo.file)} alt={photo.alt} fill sizes={item.images.length > 1 ? "(min-width: 1024px) 16vw, 42vw" : "(min-width: 1024px) 32vw, 85vw"} className="object-contain" />
                    {photo.label && <span className="absolute bottom-3 left-3 rounded-full bg-black/85 px-3 py-1 text-xs font-medium text-white">{photo.label}</span>}
                    {photoIndex === item.images.length - 1 && <span className="absolute right-3 top-3 rounded-full bg-black/80 p-2 text-white"><Expand size={16} aria-hidden="true" /></span>}
                  </div>
                ))}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-xl font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                <span className="mt-5 text-xs font-semibold text-red-400">{item.images.length > 1 ? "Ver as imagens" : "Ler depoimento"}</span>
              </div>
            </button>
          ))}
        </div>
        <p className="mt-3 text-xs leading-6 text-muted">Cada pessoa tem seu próprio processo. Os resultados variam conforme o contexto e a constância de cada aluno.</p>
      </div>

      <dialog ref={dialog} className="testimonial-dialog" aria-labelledby="testimonial-title" onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="flex items-start justify-between gap-5 border-b border-border p-4 sm:px-6">
          <h3 id="testimonial-title" className="text-lg font-bold text-white">{current.title}</h3>
          <button type="button" className="gallery-control shrink-0" aria-label="Fechar imagem ampliada" onClick={() => dialog.current?.close()}><X size={20} /></button>
        </div>
        <div className="relative h-[65svh] w-full bg-black">
          <Image src={imagePath(current.images[imageIndex].file)} alt={current.images[imageIndex].alt} fill sizes="(min-width: 1024px) 850px, 95vw" className="object-contain" />
        </div>
        <div className="flex items-center justify-between gap-4 p-4 sm:px-6">
          <p className="text-sm text-muted" aria-live="polite">Imagem {imageIndex + 1} de {current.images.length}{current.images[imageIndex].label ? ` · ${current.images[imageIndex].label}` : ""}</p>
          {current.images.length > 1 && <div className="flex gap-2">
            <button type="button" className="gallery-control" aria-label="Imagem anterior" onClick={() => setImageIndex((imageIndex + current.images.length - 1) % current.images.length)}><ChevronLeft size={20} /></button>
            <button type="button" className="gallery-control" aria-label="Próxima imagem" onClick={() => setImageIndex((imageIndex + 1) % current.images.length)}><ChevronRight size={20} /></button>
          </div>}
        </div>
      </dialog>
    </section>
  );
}
