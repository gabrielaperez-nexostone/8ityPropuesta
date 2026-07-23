"use client";

import { MotionValue, motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { useLanguage } from "@/providers/language-provider";

const copy = {
  es: {
    eyebrow: "IA dentro del ERP",
    title: "Una señal entra. 8ity entiende el contexto y mueve el trabajo.",
    body: "Observa cómo un evento real se convierte en una acción trazable, sin saltar entre herramientas ni perder el control.",
    source: "ERP central",
    live: "operación en vivo",
    stages: [
      { time: "09:41:02", code: "SIGNAL", title: "Llega una señal", detail: "Una factura, mensaje o cambio operativo entra a 8ity.", status: "evento detectado" },
      { time: "09:41:03", code: "CONTEXT", title: "La IA conecta el contexto", detail: "Relaciona cliente, proyecto, presupuesto, permisos e historial.", status: "contexto listo" },
      { time: "09:41:04", code: "DECIDE", title: "Propone el siguiente paso", detail: "Clasifica el impacto y prepara la acción más útil.", status: "decisión explicable" },
      { time: "09:41:05", code: "ACTION", title: "El trabajo avanza", detail: "Actualiza el ERP, asigna responsables y deja trazabilidad.", status: "acción completada" },
    ],
    footer: "Una sola operación · Menos costo · Más control",
  },
  en: {
    eyebrow: "AI inside the ERP",
    title: "A signal comes in. 8ity understands the context and moves work forward.",
    body: "See how a real event becomes a traceable action, without switching tools or losing control.",
    source: "Core ERP",
    live: "live operation",
    stages: [
      { time: "09:41:02", code: "SIGNAL", title: "A signal arrives", detail: "An invoice, message or operational change enters 8ity.", status: "event detected" },
      { time: "09:41:03", code: "CONTEXT", title: "AI connects the context", detail: "It links the customer, project, budget, permissions and history.", status: "context ready" },
      { time: "09:41:04", code: "DECIDE", title: "It proposes the next step", detail: "It classifies impact and prepares the most useful action.", status: "explainable decision" },
      { time: "09:41:05", code: "ACTION", title: "Work moves forward", detail: "It updates the ERP, assigns owners and preserves an audit trail.", status: "action completed" },
    ],
    footer: "One operation · Lower cost · More control",
  },
} as const;

export function IntelligenceTimeline() {
  const { language } = useLanguage();
  const t = copy[language];
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 78%", "end 32%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.35 });
  const lineScale = useTransform(progress, [0.04, 0.9], [0, 1]);
  const glowX = useTransform(progress, [0, 1], ["-130%", "30%"]);

  return (
    <section ref={sectionRef} className="relative my-24 overflow-hidden border border-border bg-[#030705] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="timeline-grid pointer-events-none absolute inset-0 opacity-70" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 rounded-full bg-primary/10 blur-[110px]"
        style={{ x: glowX, y: "-50%" }}
      />

      <div className="relative">
        <div className="grid gap-8 lg:grid-cols-[1fr_.7fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">{t.eyebrow}</p>
            <h2 className="text-balance mt-5 max-w-4xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">{t.title}</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground lg:justify-self-end">{t.body}</p>
        </div>

        <div className="mt-16 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white px-4 py-2 text-black">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-black text-[8px] text-white">8</span>
            {t.source}
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="flex items-center gap-2 text-primary"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />{t.live}</span>
        </div>

        <div className="relative mt-12 lg:mt-20">
          <div aria-hidden="true" className="absolute bottom-0 left-[1.15rem] top-0 w-px bg-border lg:left-0 lg:right-0 lg:top-[2.2rem] lg:h-px lg:w-auto" />
          <motion.div aria-hidden="true" className="absolute bottom-0 left-[1.15rem] top-0 w-px origin-top bg-primary shadow-[0_0_18px_rgba(56,214,178,.55)] lg:left-0 lg:right-0 lg:top-[2.2rem] lg:h-px lg:w-auto lg:origin-left" style={{ scaleY: lineScale, scaleX: lineScale }} />

          <div className="grid gap-12 pl-14 lg:grid-cols-4 lg:gap-5 lg:pl-0">
            {t.stages.map((stage, index) => <TimelineStage key={stage.code} stage={stage} index={index} progress={progress} />)}
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground sm:text-right">{t.footer}</div>
      </div>
    </section>
  );
}

function TimelineStage({ stage, index, progress }: { stage: { readonly time: string; readonly code: string; readonly title: string; readonly detail: string; readonly status: string }; index: number; progress: MotionValue<number> }) {
  const start = 0.08 + index * 0.2;
  const nodeScale = useTransform(progress, [start, start + 0.1], [0.65, 1]);
  const nodeOpacity = useTransform(progress, [start, start + 0.08], [0.25, 1]);
  const cardY = useTransform(progress, [start, start + 0.14], [28, 0]);

  return (
    <motion.article className="relative min-h-56" style={{ opacity: nodeOpacity, y: cardY }}>
      <motion.span aria-hidden="true" className="absolute -left-[3.45rem] top-2 grid h-9 w-9 place-items-center rounded-full border border-primary bg-[#06100d] font-mono text-[10px] text-primary shadow-[0_0_24px_rgba(56,214,178,.28)] lg:relative lg:left-0 lg:top-0" style={{ scale: nodeScale }}>
        0{index + 1}
      </motion.span>
      <div className="lg:mt-9 lg:border-l lg:border-border lg:pl-5">
        <p className="font-mono text-[9px] tracking-[.14em] text-muted-foreground">{stage.time} / {stage.code}</p>
        <h3 className="mt-4 text-xl font-medium tracking-[-.025em]">{stage.title}</h3>
        <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{stage.detail}</p>
        <div className="mt-6 inline-flex items-center gap-2 border border-border bg-surface/70 px-3 py-2 font-mono text-[9px] uppercase tracking-[.12em] text-foreground">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-primary text-[9px] text-primary-foreground">✓</span>
          {stage.status}
        </div>
      </div>
    </motion.article>
  );
}
