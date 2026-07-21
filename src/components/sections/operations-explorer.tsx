"use client";

import { Tabs } from "radix-ui";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Popover } from "@/components/ui/popover";
import { Accordion } from "@/components/ui/accordion";
import { useLanguage } from "@/providers/language-provider";

const content = {
  es: {
    eyebrow: "Control por perfil", title: "Cada equipo ve lo que necesita. El contexto sigue conectado.",
    tabs: [
      { id: "founder", label: "Founder", metric: "18.4 meses", metricLabel: "Runway", headline: "Tu startup en una vista", body: "Finanzas, pipeline, proyectos y alertas ejecutivas priorizadas por impacto.", signals: ["Burn estable", "3 deals críticos", "2 bloqueos"] },
      { id: "finance", label: "Finanzas", metric: "96.8%", metricLabel: "Conciliado", headline: "El cierre avanza solo", body: "Movimientos clasificados, anomalías detectadas y comprobantes vinculados al contexto correcto.", signals: ["12 por revisar", "4 anomalías", "Cierre viernes"] },
      { id: "sales", label: "Ventas", metric: "$384K", metricLabel: "Pipeline", headline: "Ningún seguimiento se pierde", body: "Correo, reuniones, contactos y oportunidades forman una sola línea de tiempo accionable.", signals: ["31 deals", "8 seguimientos", "72% cobertura"] },
    ], details: "Ver señal", detailBody: "Cada indicador conserva su fuente, permisos y trazabilidad.", faq: [{ value: "permissions", title: "Permisos heredados", content: "Los agentes solo pueden consultar o ejecutar acciones permitidas para su usuario y workspace." }, { value: "context", title: "Contexto compartido", content: "Las relaciones entre clientes, dinero, proyectos y documentos permanecen disponibles entre módulos." }],
  },
  en: {
    eyebrow: "Role-based control", title: "Every team sees what it needs. Context stays connected.",
    tabs: [
      { id: "founder", label: "Founder", metric: "18.4 months", metricLabel: "Runway", headline: "Your startup in one view", body: "Finance, pipeline, projects and executive alerts prioritized by impact.", signals: ["Stable burn", "3 critical deals", "2 blockers"] },
      { id: "finance", label: "Finance", metric: "96.8%", metricLabel: "Reconciled", headline: "Close moves forward on its own", body: "Transactions classified, anomalies detected and receipts linked to the right context.", signals: ["12 to review", "4 anomalies", "Close Friday"] },
      { id: "sales", label: "Sales", metric: "$384K", metricLabel: "Pipeline", headline: "No follow-up gets lost", body: "Email, meetings, contacts and opportunities form one actionable timeline.", signals: ["31 deals", "8 follow-ups", "72% coverage"] },
    ], details: "View signal", detailBody: "Every indicator retains its source, permissions and audit trail.", faq: [{ value: "permissions", title: "Inherited permissions", content: "Agents can only read or perform actions allowed for their user and workspace." }, { value: "context", title: "Shared context", content: "Relationships between customers, money, projects and documents remain available across modules." }],
  },
} as const;

export function OperationsExplorer() {
  const { language } = useLanguage(); const t = content[language];
  const [active, setActive] = useState<string>(t.tabs[0].id);
  const selected = t.tabs.find((tab) => tab.id === active) ?? t.tabs[0];
  return <section className="py-24"><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">{t.eyebrow}</p><h2 className="text-balance mt-5 max-w-5xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">{t.title}</h2><Tabs.Root value={active} onValueChange={setActive} className="mt-12 border border-border bg-surface"><Tabs.List className="flex overflow-x-auto border-b border-border">{t.tabs.map((tab, index) => <Tabs.Trigger key={tab.id} value={tab.id} className="group relative min-w-36 flex-1 px-5 py-5 text-left text-sm text-muted-foreground outline-none transition-colors data-[state=active]:text-foreground"><span className="mr-3 font-mono text-[9px] text-primary">0{index + 1}</span>{tab.label}<span className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-primary transition-transform group-data-[state=active]:scale-x-100" /></Tabs.Trigger>)}</Tabs.List><div className="grid lg:grid-cols-[1.35fr_.65fr]"><div className="min-h-[31rem] overflow-hidden border-b border-border p-6 lg:border-b-0 lg:border-r sm:p-10"><AnimatePresence mode="wait"><motion.div key={selected.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .35 }}><div className="flex flex-col justify-between gap-10 sm:flex-row"><div><p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground">{selected.metricLabel}</p><p className="mt-3 text-5xl font-medium tracking-[-.05em] text-primary">{selected.metric}</p></div><Popover trigger={<button className="self-start rounded-full border border-border px-4 py-2 text-xs hover:border-primary">{t.details} +</button>}><p className="leading-6 text-muted-foreground">{t.detailBody}</p></Popover></div><div className="mt-24"><h3 className="text-4xl font-medium tracking-[-.04em]">{selected.headline}</h3><p className="mt-5 max-w-xl leading-7 text-muted-foreground">{selected.body}</p><div className="mt-8 grid gap-px bg-border sm:grid-cols-3">{selected.signals.map((signal) => <div key={signal} className="bg-background p-4 text-xs"><span className="mr-2 text-primary">●</span>{signal}</div>)}</div></div></motion.div></AnimatePresence></div><div className="p-6 sm:p-8"><p className="mb-5 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">SYSTEM NOTES</p><Accordion items={[...t.faq]} /></div></div></Tabs.Root></section>;
}
