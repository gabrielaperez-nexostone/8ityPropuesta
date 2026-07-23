"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
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
    panelTag: "Operación en vivo",
    panelChips: ["datos sincronizados", "tareas completadas"],
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
    panelTag: "Live operations",
    panelChips: ["data synchronized", "tasks completed"],
    benefits: [
      ["Built-in AI", "Analyzes information, finds opportunities and helps execute the work."],
      ["Everything connected", "Manage important areas without losing context between tools."],
      ["Lower cost", "Reduce fragmented software, manual tasks and operational complexity."],
    ],
  },
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const { language } = useLanguage();
  const t = copy[language];
  const [benefit, setBenefit] = useState(0);
  const total = t.benefits.length;
  const [title, body] = t.benefits[benefit];

  return (
    <section className="relative overflow-hidden border-x border-border bg-background px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-stretch">

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
          className="relative order-2 min-h-[22rem] overflow-hidden rounded-[1.75rem] border border-primary/15 bg-[radial-gradient(120%_100%_at_20%_0%,rgba(52,211,153,.22),transparent_55%),linear-gradient(160deg,#0d1a16,#0a0f16)] lg:order-1 lg:min-h-[34rem]"
        >
          <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden />
          <span className="absolute left-5 top-5 rounded-full border border-primary/30 bg-black/30 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[.16em] text-primary">
            {t.panelTag}
          </span>
          <div className="absolute inset-0 grid place-items-center">
            <Image src="/8ity-orb.webp" alt="" width={110} height={110} className="orb-glow rounded-full" priority />
          </div>
          <div
            className="tile-float absolute left-6 top-1/4 hidden rounded-xl border border-primary/25 bg-[#08201b]/90 px-3.5 py-2.5 font-mono text-[9px] uppercase tracking-[.12em] text-white/70 sm:block"
            style={{ animationDuration: "7s" }}
          >
            <span className="mr-2 text-primary" aria-hidden>✓</span>{t.panelChips[0]}
          </div>
          <div
            className="tile-float absolute bottom-1/4 right-6 hidden rounded-xl border border-primary/25 bg-[#08201b]/90 px-3.5 py-2.5 font-mono text-[9px] uppercase tracking-[.12em] text-white/70 sm:block"
            style={{ animationDuration: "8.5s", animationDelay: ".8s" }}
          >
            <span className="mr-2 text-primary" aria-hidden>✓</span>{t.panelChips[1]}
          </div>
        </motion.div>

        <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7, ease: EASE }}
            className="font-mono text-[11px] uppercase tracking-[.24em] text-primary"
          >
            {t.eyebrow}
          </motion.p>

          <h1 className="text-balance mt-6 max-w-2xl text-[clamp(2.6rem,4.6vw,4.5rem)] font-medium leading-[1.02] tracking-[-.045em] text-foreground">
            <FlowText text={t.title} delay={.1} />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9, ease: EASE, delay: .35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Dialog trigger={<Button variant="white">{t.primary} <span aria-hidden>→</span></Button>} />
            <Button asChild variant="outline"><Link href="#plataforma">{t.secondary} ↓</Link></Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: .5 }}
            className="mt-8 max-w-xl text-base leading-7 text-muted-foreground"
          >
            {t.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .9, ease: EASE, delay: .65 }}
            className="mt-10 flex max-w-xl items-center gap-4"
          >
            <div className="glass-card min-h-28 flex-1 overflow-hidden p-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: .35, ease: EASE }}
                >
                  <p className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <span className="font-mono text-[9px] text-primary">0{benefit + 1}</span>
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setBenefit((benefit - 1 + total) % total)}
                aria-label={language === "es" ? "Anterior" : "Previous"}
                className="grid size-9 place-items-center rounded-full border border-border text-sm text-white/70 transition-colors hover:border-primary/40 hover:text-white"
              >
                ‹
              </button>
              <button
                onClick={() => setBenefit((benefit + 1) % total)}
                aria-label={language === "es" ? "Siguiente" : "Next"}
                className="grid size-9 place-items-center rounded-full border border-border text-sm text-white/70 transition-colors hover:border-primary/40 hover:text-white"
              >
                ›
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
