"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { useLanguage, type Language } from "@/providers/language-provider";

const nav = {
  es: [
    { label: "Cómo funciona", href: "/#como-funciona" },
    { label: "Para tu equipo", href: "/#para-tu-equipo" },
    { label: "Integraciones", href: "/integraciones" },
    { label: "AI Agents", href: "/agentes-ia" },
    { label: "Precios", href: "/precios" },
    { label: "FAQs", href: "/faqs" },
  ],
  en: [
    { label: "How it works", href: "/#como-funciona" },
    { label: "For your team", href: "/#para-tu-equipo" },
    { label: "Integrations", href: "/integraciones" },
    { label: "AI Agents", href: "/agentes-ia" },
    { label: "Pricing", href: "/precios" },
    { label: "FAQs", href: "/faqs" },
  ],
} as const;

export function Header() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const items = nav[language].map((item) => ({
    ...item,
    active: !item.href.includes("#") && pathname === item.href,
    href:
      pathname === "/" && item.href.startsWith("/#")
        ? item.href.slice(1)
        : item.href,
  }));

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) return;

    const id = decodeURIComponent(window.location.hash.slice(1));
    const scrollToTarget = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "auto",
        block: "start",
      });
    };

    const frame = window.requestAnimationFrame(scrollToTarget);
    const timer = window.setTimeout(scrollToTarget, 900);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-semibold"
          aria-label="8ity, home"
        >
          <Image src="/8ity-orb.webp" width={34} height={34} alt="" priority />
          <span>8ity</span>
        </Link>
        <nav
          className="hidden items-center gap-5 xl:flex"
          aria-label={
            language === "es" ? "Navegación principal" : "Main navigation"
          }
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={item.active ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${item.active ? "bg-accent/15 text-accent" : "text-muted-foreground hover:bg-white/[.05] hover:text-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          {/* demo */}
          <Link
            href="#footer"
            className="hidden rounded-full bg-gradient-to-r from-accent to-[#7ee0b0] px-5 py-2.5 text-sm font-semibold text-[#04140d] transition-transform hover:-translate-y-0.5 xl:block"
          >
            Demo
          </Link>

          {/* segmented auth */}
          <div className="hidden items-center rounded-full border border-border bg-white/[.04] p-1 xl:flex">
            <Link
              href="https://8ity.org/"
              className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-[#0a0a0a] transition-colors"
            >
              {language === "es" ? "Inicio de sesión" : "Log in"}
            </Link>
            <Link
              href="https://8ity.org/"
              className="rounded-full px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {language === "es" ? "Registro" : "Sign up"}
            </Link>
          </div>

          <span aria-hidden className="hidden h-6 w-px bg-border xl:block" />

          <LanguageSwitch language={language} setLanguage={setLanguage} />

          <div className="xl:hidden">
            <DropdownMenu
              items={items.map(({ label, href }) => ({ label, href }))}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitch({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  const [open, setOpen] = useState(false);
  const options = { es: "Español", en: "English" } as const;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language selector"
        className="flex items-center gap-2 rounded-full border border-border bg-white/[.04] py-2 pl-3 pr-2.5 text-sm font-semibold uppercase text-foreground transition-colors hover:bg-white/[.07]"
      >
        <svg aria-hidden viewBox="0 0 24 24" fill="none" className="size-4 text-muted-foreground">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.7-3.8-9S9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        {language}
        <svg aria-hidden viewBox="0 0 24 24" fill="none" className={`size-3.5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <>
          <button aria-hidden tabIndex={-1} onClick={() => setOpen(false)} className="fixed inset-0 z-40 cursor-default" />
          <div role="listbox" className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border bg-[#070d13] p-1 shadow-[0_20px_60px_rgba(0,0,0,.5)]">
            {(["es", "en"] as const).map((option) => (
              <button
                key={option}
                role="option"
                aria-selected={language === option}
                onClick={() => { setLanguage(option); setOpen(false); }}
                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors ${language === option ? "bg-accent/10 text-accent" : "text-muted-foreground hover:bg-white/[.05] hover:text-foreground"}`}
              >
                {options[option]}
                <span className="text-xs font-semibold uppercase">{option}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
