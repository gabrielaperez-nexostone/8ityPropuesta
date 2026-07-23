"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { FlowText } from "@/components/motion/flow-text";
import { useLanguage } from "@/providers/language-provider";

const copy = {
  es: {
    eyebrow: "ERP con inteligencia artificial integrada",
    title: "Gestiona toda tu empresa desde un solo lugar.",
    description: "8ity conecta finanzas, operaciones, proyectos, personas y datos dentro de un ERP flexible. La IA entiende el contexto, reduce trabajo manual y te ayuda a operar con menos herramientas y menor costo.",
    primary: "Conocer 8ity",
    secondary: "Explorar el ERP",
    benefits: [
      ["IA integrada", "Analiza información, encuentra oportunidades y ayuda a ejecutar el trabajo."],
      ["Todo conectado", "Gestiona las áreas importantes sin perder contexto entre herramientas."],
      ["Menor costo", "Reduce software fragmentado, tareas manuales y complejidad operativa."],
    ],
  },
  en: {
    eyebrow: "ERP with built-in artificial intelligence",
    title: "Manage your whole company from one place.",
    description: "8ity connects finance, operations, projects, people and data in one flexible ERP. AI understands context, reduces manual work and helps you operate with fewer tools at a lower cost.",
    primary: "Discover 8ity",
    secondary: "Explore the ERP",
    benefits: [
      ["Built-in AI", "Analyzes information, finds opportunities and helps execute the work."],
      ["Everything connected", "Manage important areas without losing context between tools."],
      ["Lower cost", "Reduce fragmented software, manual tasks and operational complexity."],
    ],
  },
} as const;

export function Hero() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <section className="border-x border-border bg-background px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
        <div>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[.18em] text-primary-deep"><span className="h-2 w-2 rounded-full bg-primary" />{t.eyebrow}</p>
          <h1 className="text-balance mt-5 max-w-4xl text-[clamp(2.75rem,5.8vw,5.75rem)] font-medium leading-[.96] tracking-[-.055em] text-foreground"><FlowText text={t.title} delay={.08} /></h1>
        </div>
        <div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">{t.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Dialog trigger={<Button>{t.primary} <span aria-hidden>↗</span></Button>} />
            <Button asChild variant="outline"><Link href="#plataforma">{t.secondary} ↓</Link></Button>
          </div>
        </div>
      </div>

      <div className="glass-card mt-12 overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-3"><Image src="/8ity-orb.webp" width={30} height={30} alt="" /><span className="font-semibold">8ity ERP</span></div>
          <span className="font-mono text-[10px] uppercase tracking-[.14em] text-muted-foreground">Overview</span>
        </div>
        <div className="grid md:grid-cols-3">
          {t.benefits.map(([title, body], index) => (
            <article key={title} className="border-b border-border p-6 last:border-b-0 md:min-h-52 md:border-b-0 md:border-r md:last:border-r-0 sm:p-7">
              <span className="font-mono text-[10px] text-primary-deep">0{index + 1}</span>
              <h2 className="mt-10 text-xl font-medium tracking-[-.025em]">{title}</h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
