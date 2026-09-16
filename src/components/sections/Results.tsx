export default function Results() {
  return (
    <section className="border-y border-border bg-surface py-24 sm:py-32" id="resultados">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-red-400">Evolução real, sem promessas vazias</p>
            <h2 className="text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] text-white sm:text-6xl">
              Seus resultados, <span className="text-brand-red">sua história.</span>
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted">
            Cada processo é individual. Em breve, esta seção reunirá transformações e depoimentos autorizados de alunos ACTeam.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-brand-red/40 bg-background p-7">
            <div aria-hidden="true" className="absolute right-[-4rem] top-[-4rem] h-48 w-48 rounded-full bg-brand-red/10 blur-3xl" />
            <div className="relative flex items-center justify-between">
              <span className="text-5xl font-black tracking-[-0.08em] text-white/10">01</span>
              <span className="rounded-full border border-brand-red/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-red-400">Em breve</span>
            </div>
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">Transformações</p>
              <p className="mt-3 text-xl font-semibold text-white">[RESULTADO REAL A INSERIR APÓS AUTORIZAÇÃO]</p>
            </div>
          </div>
          <div className="relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-border bg-background p-7">
            <div aria-hidden="true" className="absolute bottom-[-4rem] left-[-4rem] h-48 w-48 rounded-full bg-white/5 blur-3xl" />
            <div className="relative flex items-center justify-between">
              <span className="text-5xl font-black tracking-[-0.08em] text-white/10">02</span>
              <span className="rounded-full border border-border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-500">Aguardando aprovação</span>
            </div>
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-zinc-400">Depoimentos</p>
              <p className="mt-3 text-xl font-semibold text-white">[DEPOIMENTO REAL A INSERIR APÓS AUTORIZAÇÃO]</p>
            </div>
          </div>
        </div>
        {/* TODO: inserir depoimentos reais após autorização. */}
        {/* TODO: confirmar autorização para uso de nome e imagem dos alunos. */}
        {/* TODO: confirmar resultados e informações de cada transformação. */}
      </div>
    </section>
  );
}
