"use client";

import { motion } from "motion/react";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { useLanguage } from "@/providers/language-provider";

const copy = {
  es: {
    features: [
      { icon: "✦", title: "IA integrada", body: "Analiza información, encuentra oportunidades y ayuda a ejecutar el trabajo.", cta: "Saber más", href: "#story-2" },
      { icon: "◎", title: "Todo conectado", body: "Gestiona las áreas importantes sin perder contexto entre herramientas.", cta: "Saber más", href: "#plataforma" },
      { icon: "⚡", title: "Automatizaciones", body: "Eventos y horarios crean seguimientos, alertas y reportes sin trabajo manual.", cta: "Saber más", href: "#como-funciona" },
      { icon: "↓", title: "Menor costo", body: "Reduce software fragmentado, tareas manuales y complejidad operativa.", cta: "Saber más", href: "#beneficios" },
    ],
    logosLabel: "Integraciones que ya usas",
    stats: [
      ["1,000+", "Bancos LatAm vía Syncfy"],
      ["50+", "Conexiones con apps"],
      ["80%", "Esfuerzo ahorrado"],
    ],
  },
  en: {
    features: [
      { icon: "✦", title: "Built-in AI", body: "Analyzes information, finds opportunities and helps execute the work.", cta: "Learn more", href: "#story-2" },
      { icon: "◎", title: "Everything connected", body: "Manage important areas without losing context between tools.", cta: "Learn more", href: "#plataforma" },
      { icon: "⚡", title: "Automations", body: "Events and schedules create follow-ups, alerts and reports without manual work.", cta: "Learn more", href: "#como-funciona" },
      { icon: "↓", title: "Lower cost", body: "Reduce fragmented software, manual tasks and operational complexity.", cta: "Learn more", href: "#beneficios" },
    ],
    logosLabel: "Integrations you already use",
    stats: [
      ["1,000+", "LatAm banks via Syncfy"],
      ["50+", "App connections"],
      ["80%", "Effort saved"],
    ],
  },
} as const;

const logos = ["Google Workspace", "Stripe", "Syncfy", "WhatsApp", "Gmail", "Claude", "Gemini"];

export function Highlights() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="border-x border-border bg-background px-5 sm:px-8 lg:px-12">
      <StaggerContainer className="grid gap-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {t.features.map((feature) => (
          <StaggerItem
            key={feature.title}
            className="glass-card group flex min-h-64 flex-col p-6 transition-colors hover:border-primary/30 hover:bg-white/[.06]"
          >
            <span aria-hidden className="grid size-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-sm text-primary">
              {feature.icon}
            </span>
            <h3 className="mt-8 text-lg font-medium tracking-[-.02em]">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{feature.body}</p>
            <a href={feature.href} className="mt-auto inline-flex items-center gap-2 pt-5 text-xs font-medium text-white/60 transition-colors group-hover:text-primary">
              {feature.cta} <span aria-hidden>→</span>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: .2 }}
        transition={{ duration: 1 }}
        className="border-t border-border py-10"
      >
        <p className="text-center font-mono text-[10px] uppercase tracking-[.24em] text-white/40">{t.logosLabel}</p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((logo) => (
            <span key={logo} className="text-sm font-semibold tracking-[-.01em] text-white/35 transition-colors hover:text-white/70">
              {logo}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border sm:grid-cols-3">
        {t.stats.map(([value, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .8, delay: index * .12, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background p-8 text-center"
          >
            <p className="text-4xl font-medium tracking-[-.04em] text-primary-hero sm:text-5xl">{value}</p>
            <p className="mt-3 text-sm text-muted-foreground">{label}</p>
          </motion.div>
        ))}
      </div>
      <div className="pb-14" />
    </div>
  );
}
