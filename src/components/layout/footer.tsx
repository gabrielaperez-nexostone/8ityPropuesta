"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MainContainer } from "./main-container";
import { FlowText } from "@/components/motion/flow-text";
import { useLanguage } from "@/providers/language-provider";

const copy = {
  es: {
    intro: "Un ERP flexible con IA integrada para gestionar tu empresa con menos herramientas, menos trabajo manual y menor costo.",
    explore: "Explorar 8ity",
    product: "Producto",
    productLinks: [["ERP", "#plataforma"], ["IA integrada", "#story-2"], ["Automatizaciones", "#como-funciona"], ["Beneficios", "#beneficios"]],
    discover: "Descubrir",
    discoverLinks: [["Cómo funciona", "#como-funciona"], ["Para tu equipo", "#perfiles"], ["Diferenciadores", "#diferenciadores"], ["Preguntas", "#preguntas"]],
    company: "8ity",
    companyLinks: [["Plataforma", "https://8ity.org/"], ["Inicio", "#top"]],
    top: "Volver arriba",
    rights: "Todos los derechos reservados.",
    signature: "Tu empresa, conectada e inteligente.",
    newsletterLabel: "Únete al newsletter",
    newsletterPlaceholder: "Tu correo",
    newsletterButton: "Suscribirme",
    newsletterSuccess: "¡Listo! Te avisaremos de las novedades.",
  },
  en: {
    intro: "A flexible ERP with built-in AI to run your company with fewer tools, less manual work and lower costs.",
    explore: "Explore 8ity",
    product: "Product",
    productLinks: [["ERP", "#plataforma"], ["Built-in AI", "#story-2"], ["Automations", "#como-funciona"], ["Benefits", "#beneficios"]],
    discover: "Discover",
    discoverLinks: [["How it works", "#como-funciona"], ["For your team", "#perfiles"], ["Why 8ity", "#diferenciadores"], ["Questions", "#preguntas"]],
    company: "8ity",
    companyLinks: [["Platform", "https://8ity.org/"], ["Home", "#top"]],
    top: "Back to top",
    rights: "All rights reserved.",
    signature: "Your company, connected and intelligent.",
    newsletterLabel: "Join the newsletter",
    newsletterPlaceholder: "Your email",
    newsletterButton: "Subscribe",
    newsletterSuccess: "Done! We will keep you posted.",
  },
} as const;

function Newsletter({ label, placeholder, button, success }: { label: string; placeholder: string; button: string; success: string }) {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-[.16em] text-primary">{label}</p>
      {sent ? (
        <p className="mt-4 text-sm text-white/70"><span className="mr-2 text-primary" aria-hidden>✓</span>{success}</p>
      ) : (
        <form className="mt-4 flex max-w-sm gap-2" onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
          <input
            required
            type="email"
            placeholder={placeholder}
            className="min-w-0 flex-1 rounded-full border border-white/15 bg-white/[.05] px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-primary/50 focus:outline-none"
          />
          <button type="submit" className="rounded-full bg-white px-4 py-2.5 text-xs font-semibold text-[#0b0f14] transition-transform hover:-translate-y-0.5">
            {button}
          </button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#05090e] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_35%,rgba(52,211,153,.16),transparent_30%),radial-gradient(circle_at_35%_80%,rgba(11,93,64,.18),transparent_34%)]" />
      <MainContainer className="relative py-12 sm:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.2fr_2fr] lg:gap-20">
          <div>
            <Link href="#top" className="inline-flex items-center gap-3 text-xl font-semibold" aria-label="8ity, home">
              <Image src="/8ity-orb.webp" width={36} height={36} alt="" />
              8ity
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">{t.intro}</p>
            <Link href="#plataforma" className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0b0f14] transition-transform hover:-translate-y-0.5">
              {t.explore} <span aria-hidden>→</span>
            </Link>
            <div className="mt-10">
              <Newsletter label={t.newsletterLabel} placeholder={t.newsletterPlaceholder} button={t.newsletterButton} success={t.newsletterSuccess} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-9 sm:grid-cols-3">
            <FooterColumn title={t.product} links={t.productLinks} />
            <FooterColumn title={t.discover} links={t.discoverLinks} />
            <FooterColumn title={t.company} links={t.companyLinks} />
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} 8ity. {t.rights}</p>
          <Link href="#top" className="inline-flex items-center gap-2 text-white/70 hover:text-white">{t.top} <span aria-hidden>↑</span></Link>
        </div>

        <p className="font-mono text-[9px] uppercase tracking-[.18em] text-primary">{t.signature}</p>
        <div className="-mb-[4vw] mt-2 overflow-hidden" aria-hidden="true">
          <p className="select-none whitespace-nowrap text-[clamp(8rem,27vw,26rem)] font-semibold leading-[.72] tracking-[-.09em] text-white/[.055]">
            <FlowText text="8ity" delay={.05} />
          </p>
        </div>
      </MainContainer>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <p className="font-mono text-[9px] uppercase tracking-[.16em] text-primary">{title}</p>
      <ul className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-sm text-white/55 hover:text-white">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
