import { MessageCircle } from "lucide-react";
import Image from "next/image";

import { navigationLinks, siteInfo } from "@/data/site-content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <a className="inline-block rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red" href="#inicio" aria-label="ACTeam - início">
            <Image src="/images/brand/acteam-dark.webp" alt="Aleff Cesar Team" width={112} height={112} className="brand-logo h-28 w-28 object-contain" />
          </a>
          <p className="mt-3 max-w-sm text-sm leading-6 text-muted">Treinamento de força e nutrição para uma evolução com estratégia e consistência.</p>
        </div>
        <nav aria-label="Navegação do rodapé" className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">{navigationLinks.map((link) => <a className="transition-colors hover:text-white" href={link.href} key={link.href}>{link.label}</a>)}</nav>
        <a className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-red-200" href={`https://wa.me/${siteInfo.contact.whatsappNumber}`} rel="noreferrer" target="_blank"><MessageCircle aria-hidden="true" size={18} /> WhatsApp</a>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-border px-5 py-5 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <span>© {new Date().getFullYear()} ACTeam. Todos os direitos reservados.</span>
        <span>Redes sociais em breve</span>
      </div>
      {/* TODO: inserir redes sociais oficiais da ACTeam após confirmação. */}
    </footer>
  );
}
