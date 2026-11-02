"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import { navigationLinks, siteInfo } from "@/data/site-content";

export default function SmartHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let previousScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 16);
      setIsVisible(currentScrollY <= 16 || currentScrollY < previousScrollY);
      previousScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const whatsappUrl = `https://wa.me/${siteInfo.contact.whatsappNumber}?text=${encodeURIComponent(siteInfo.contact.defaultMessage)}`;

  return (
    <motion.header
      animate={{ y: isVisible ? 0 : "-100%" }}
      className={`fixed inset-x-0 top-0 z-50 border-b border-border transition-colors duration-300 ${isAtTop ? "bg-transparent" : "bg-black/70 backdrop-blur-md"}`}
      initial={{ y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          aria-label="ACTeam - início"
          className="text-2xl font-black tracking-[-0.08em] text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
          href="/"
          onClick={closeMenu}
        >
          <Image src="/images/brand/acteam-dark.webp" alt="Aleff Cesar Team" width={68} height={68} className="brand-logo h-[68px] w-[68px] object-contain" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              className="text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-brand-red hover:text-red-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red"
            href={whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden="true" size={17} />
            Começar agora
          </a>
        </div>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="rounded-lg p-2 text-white transition-colors hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? <X aria-hidden="true" size={25} /> : <Menu aria-hidden="true" size={25} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1, height: "auto" }}
            className="border-t border-border bg-surface/95 px-5 pb-6 pt-3 backdrop-blur-md lg:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <nav aria-label="Navegação mobile" className="flex flex-col">
              {navigationLinks.map((link) => (
                <Link
                  className="border-b border-border py-4 text-base font-medium text-zinc-200 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-brand-red"
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
              <a
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red px-5 py-3 text-sm font-bold text-white shadow-[0_0_28px_rgba(220,38,38,0.22)] transition-colors hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300"
                href={whatsappUrl}
                onClick={closeMenu}
                rel="noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden="true" size={17} />
                Começar agora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
