"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "@/providers/language-provider";

const EASE = [0.16, 1, 0.3, 1] as const;

const copy = {
  es: {
    eyebrow: "8ity AI · Agente ERP",
    heading: "Un agente que entiende toda tu operación.",
    sub: "Finanzas, proyectos, personas y datos conectados. 8ity AI analiza el contexto completo y ejecuta acciones reales con permisos.",
    agentName: "8ity",
    agentRole: "Agente IA · ERP",
    identityLabel: "Verificación de cliente",
    person: {
      name: "Mariana López",
      bornLabel: "Alta",
      born: "14/04/2023",
      fromLabel: "Origen",
      from: "Monterrey, MX",
      phone: "+52 81 3920 4384",
      email: "mariana.lopez@empresa.mx",
    },
    recordLabel: "Registro de actividad",
    recordId: "OP-3920-203",
    recordTime: "hace 1 min",
    userTag: "Usuario:",
    userMsg: "Concilia los movimientos del banco de esta semana, por favor.",
    agentTag: "8ity:",
    agentMsg: "Listo. Concilié 128 movimientos y detecté 3 diferencias para revisar. ¿Genero el reporte?",
    invoice: { title: "Facturación", rows: [["Factura A-118", "Pagada"], ["Factura A-119", "Pendiente"]], cta: "+ Emitir factura" },
    tasks: { title: "Tareas y seguimientos", body: "Sin pendientes vencidos", cta: "+ Nueva tarea" },
    project: { title: "Detalle de proyecto", rows: [["Cliente", "Grupo Andes"], ["Proyecto", "Migración ERP"], ["Módulo", "Finanzas"], ["Estado", "En curso"], ["Responsable", "M. López"], ["Avance", "72%"]] },
    reconcile: { title: "Conciliación bancaria", rows: [["Movimientos", "128"], ["Diferencias", "3"]] },
    permissions: { title: "Permisos y accesos", body: "Rol: Finanzas · Workspace: 204" },
    automation: { title: "Automatizaciones", body: "No configurada", cta: "+ Añadir flujo" },
    plannerLabel: "Planeación",
  },
  en: {
    eyebrow: "8ity AI · ERP Agent",
    heading: "An agent that understands your whole operation.",
    sub: "Finance, projects, people and data connected. 8ity AI reads the full context and executes real actions with permissions.",
    agentName: "8ity",
    agentRole: "AI Agent · ERP",
    identityLabel: "Customer verification",
    person: {
      name: "Mariana López",
      bornLabel: "Since",
      born: "04/14/2023",
      fromLabel: "From",
      from: "Monterrey, MX",
      phone: "+52 81 3920 4384",
      email: "mariana.lopez@empresa.mx",
    },
    recordLabel: "Activity record",
    recordId: "OP-3920-203",
    recordTime: "1 min ago",
    userTag: "User:",
    userMsg: "Reconcile this week's bank transactions, please.",
    agentTag: "8ity:",
    agentMsg: "Done. I reconciled 128 transactions and flagged 3 differences to review. Shall I generate the report?",
    invoice: { title: "Billing", rows: [["Invoice A-118", "Paid"], ["Invoice A-119", "Pending"]], cta: "+ Issue invoice" },
    tasks: { title: "Tasks & follow-ups", body: "No overdue items", cta: "+ New task" },
    project: { title: "Project details", rows: [["Client", "Grupo Andes"], ["Project", "ERP migration"], ["Module", "Finance"], ["Status", "In progress"], ["Owner", "M. López"], ["Progress", "72%"]] },
    reconcile: { title: "Bank reconciliation", rows: [["Transactions", "128"], ["Differences", "3"]] },
    permissions: { title: "Permissions & access", body: "Role: Finance · Workspace: 204" },
    automation: { title: "Automations", body: "Not configured", cta: "+ Add workflow" },
    plannerLabel: "Planning",
  },
} as const;

// Per-variant intro / conversation overrides. Panels stay identical between variants.
const intro = {
  pc: {
    es: {
      eyebrow: "8ity AI · Agente ERP",
      heading: "Un agente que entiende toda tu operación.",
      sub: "Finanzas, proyectos, personas y datos conectados. 8ity AI analiza el contexto completo y ejecuta acciones reales con permisos.",
      agentRole: "Agente IA · ERP",
      userMsg: "Concilia los movimientos del banco de esta semana, por favor.",
      agentMsg: "Listo. Concilié 128 movimientos y detecté 3 diferencias para revisar. ¿Genero el reporte?",
    },
    en: {
      eyebrow: "8ity AI · ERP Agent",
      heading: "An agent that understands your whole operation.",
      sub: "Finance, projects, people and data connected. 8ity AI reads the full context and executes real actions with permissions.",
      agentRole: "AI Agent · ERP",
      userMsg: "Reconcile this week's bank transactions, please.",
      agentMsg: "Done. I reconciled 128 transactions and flagged 3 differences to review. Shall I generate the report?",
    },
  },
  phone: {
    es: {
      eyebrow: "8ity AI · Agente de voz",
      heading: "Un agente que atiende y resuelve por ti.",
      sub: "Por voz o WhatsApp, 8ity AI conversa con tus clientes, consulta el ERP en vivo y ejecuta acciones reales con permisos.",
      agentRole: "Agente de voz · WhatsApp",
      userMsg: "Hola, pásame el estado de mi proyecto y la última factura, por favor.",
      agentMsg: "El proyecto va al 72% y la factura A-119 está pendiente. ¿Te la reenvío por WhatsApp?",
    },
    en: {
      eyebrow: "8ity AI · Voice Agent",
      heading: "An agent that answers and resolves for you.",
      sub: "By voice or WhatsApp, 8ity AI talks with your customers, checks the ERP live and executes real actions with permissions.",
      agentRole: "Voice Agent · WhatsApp",
      userMsg: "Hi, send me my project status and the latest invoice, please.",
      agentMsg: "The project is at 72% and invoice A-119 is pending. Shall I resend it on WhatsApp?",
    },
  },
} as const;

type Rows = readonly (readonly [string, string])[];
type T = {
  eyebrow: string;
  heading: string;
  sub: string;
  agentName: string;
  agentRole: string;
  identityLabel: string;
  person: { name: string; bornLabel: string; born: string; fromLabel: string; from: string; phone: string; email: string };
  recordLabel: string;
  recordId: string;
  recordTime: string;
  userTag: string;
  userMsg: string;
  agentTag: string;
  agentMsg: string;
  invoice: { title: string; rows: Rows; cta: string };
  tasks: { title: string; body: string; cta: string };
  project: { title: string; rows: Rows };
  reconcile: { title: string; rows: Rows };
  permissions: { title: string; body: string };
  automation: { title: string; body: string; cta: string };
  plannerLabel: string;
};

/* ---------- shared bits ---------- */

function DimPanel({ title, className, children }: { title: string; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`rounded-xl border border-white/[.06] bg-white/[.015] p-4 text-white/25 ${className ?? ""}`}>
      <p className="font-mono text-[9px] uppercase tracking-[.2em]">{title}</p>
      <div className="mt-3 space-y-2 text-[11px] leading-5">{children}</div>
    </div>
  );
}

function DimRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{label}</span>
      <span className="text-white/35">{value}</span>
    </div>
  );
}

function GhostButton({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 rounded-md border border-white/[.07] py-1.5 text-center text-[10px] text-white/25">{children}</div>;
}

// Mini dashboard preview — stands in for a real product screenshot.
const TILE_BARS = [42, 66, 38, 80, 54, 72, 48, 90, 60, 76, 50, 84, 44, 68];

function ImageTile({ className, label }: { className?: string; label?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-accent/15 bg-[linear-gradient(160deg,rgba(89,187,149,.10),rgba(3,8,16,.85))] p-4 ${className ?? ""}`}>
      {/* window header */}
      <div className="flex items-center gap-1.5">
        <span className="size-1.5 rounded-full bg-accent/60" />
        <span className="size-1.5 rounded-full bg-white/15" />
        <span className="size-1.5 rounded-full bg-white/15" />
        {label && <span className="ml-2 font-mono text-[8px] uppercase tracking-[.2em] text-white/40">{label}</span>}
      </div>
      {/* mini stats */}
      <div className="mt-3 flex gap-5">
        <div><p className="text-sm font-medium text-white/80">+18%</p><p className="text-[8px] text-white/30">MRR</p></div>
        <div><p className="text-sm font-medium text-accent">128</p><p className="text-[8px] text-white/30">Ops</p></div>
      </div>
      {/* bar chart */}
      <div className="mt-2 flex h-[42%] min-h-[40px] items-end gap-[3px]">
        {TILE_BARS.map((h, i) => (
          <span key={i} className={`flex-1 rounded-t-sm ${i % 4 === 3 ? "bg-accent/80" : "bg-accent/25"}`} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

/* ---------- central monitor (PC) ---------- */

function Monitor({ t }: { t: T }) {
  return (
    <div className="flex w-full max-w-[480px] flex-col items-center">
      {/* wide screen */}
      <div className="relative w-full rounded-2xl border border-accent/45 bg-[linear-gradient(180deg,rgba(89,187,149,.06),rgba(3,8,16,.55))] p-4 shadow-[0_0_60px_rgba(89,187,149,.12)] sm:p-6">
        {/* window bar */}
        <div className="mb-5 flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-accent/60" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="size-2 rounded-full bg-white/20" />
          <span className="ml-3 font-mono text-[9px] uppercase tracking-[.2em] text-white/35">8ity · live</span>
        </div>

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
          {/* identity */}
          <div className="flex shrink-0 flex-col items-center text-center sm:w-[140px]">
            <Image src="/8ity-orb.webp" alt="" width={44} height={44} className="opacity-90" />
            <p className="mt-3 text-2xl font-medium tracking-[-.02em] text-white">{t.agentName}</p>
            <p className="mt-1 text-[11px] text-accent/80">{t.agentRole}</p>
          </div>

          {/* activity + controls */}
          <div className="w-full min-w-0 flex-1">
            <div className="flex h-14 items-center gap-[3px]">
              {WAVE.map((h, i) => (
                <motion.span
                  key={i}
                  className="min-w-0 flex-1 rounded-full bg-accent"
                  style={{ height: `${h}%` }}
                  animate={{ scaleY: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.09 }}
                />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              {["◍", "⋯", "◈"].map((icon) => (
                <span key={icon} className="grid size-9 place-items-center rounded-full border border-white/12 text-sm text-white/60">{icon}</span>
              ))}
              <span className="ml-auto grid size-9 place-items-center rounded-full bg-accent text-base text-[#04140d]">↵</span>
            </div>
          </div>
        </div>
      </div>
      {/* stand */}
      <div className="h-5 w-16 bg-[linear-gradient(180deg,rgba(89,187,149,.28),rgba(89,187,149,.05))]" />
      <div className="h-1.5 w-44 rounded-full bg-accent/25" />
    </div>
  );
}

const WAVE = [30, 55, 40, 80, 60, 95, 70, 45, 85, 55, 100, 65, 40, 75, 50, 90, 60, 35, 70, 45, 80, 55, 40, 65, 50, 85, 60, 45, 75, 35];

/* ---------- central phone (mobile / voice) ---------- */

function Phone({ t }: { t: T }) {
  return (
    <div className="relative w-full max-w-[264px] rounded-[2.4rem] border border-accent/45 bg-[linear-gradient(180deg,rgba(89,187,149,.05),rgba(3,8,16,.5))] p-5 shadow-[0_0_60px_rgba(89,187,149,.12)]">
      {/* notch */}
      <div className="mx-auto mb-5 h-6 w-24 rounded-full border border-accent/30 bg-[#04140d]/40" />
      <div className="flex flex-col items-center pb-2 pt-2">
        <Image src="/8ity-orb.webp" alt="" width={46} height={46} className="opacity-90" />
        <p className="mt-4 text-2xl font-medium tracking-[-.02em] text-white">{t.agentName}</p>
        <p className="mt-1 text-xs text-accent/80">{t.agentRole}</p>
      </div>

      {/* waveform */}
      <div className="mt-7 flex h-12 items-center justify-center gap-[3px]">
        {WAVE.map((h, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-accent"
            style={{ height: `${h}%` }}
            animate={{ scaleY: [0.5, 1, 0.5] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: (i % 7) * 0.09 }}
          />
        ))}
      </div>

      {/* call controls */}
      <div className="mt-8 flex items-center justify-center gap-5">
        {["◍", "⋯", "◈"].map((icon) => (
          <span key={icon} className="grid size-11 place-items-center rounded-full border border-white/12 text-sm text-white/60">{icon}</span>
        ))}
      </div>
      <div className="mt-6 flex justify-center pb-2">
        <span className="grid size-12 place-items-center rounded-full bg-danger/90 text-base text-white">✕</span>
      </div>
    </div>
  );
}

/* ---------- bright focus cards ---------- */

function IdentityCard({ t }: { t: T }) {
  return (
    <div className="w-full max-w-[300px] rounded-2xl border border-accent/25 bg-[rgba(89,187,149,.04)] p-5 backdrop-blur-sm">
      <p className="font-mono text-[9px] uppercase tracking-[.2em] text-accent/70">{t.identityLabel}</p>
      <div className="mt-4 flex items-center gap-4">
        <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,#59bb95,#1c3c30)] text-lg font-semibold text-[#04140d]">
          {t.person.name.split(" ").map((w) => w[0]).join("")}
        </div>
        <div>
          <p className="text-base font-medium text-white">{t.person.name}</p>
          <p className="mt-1 text-[11px] text-white/45">{t.person.bornLabel} {t.person.born}</p>
          <p className="text-[11px] text-white/45">{t.person.fromLabel}: {t.person.from}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/20 px-2.5 py-1 text-[10px] text-accent/80">☎ {t.person.phone}</span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-accent/20 px-2.5 py-1 text-[10px] text-accent/80">✉ {t.person.email}</span>
      </div>
    </div>
  );
}

function RecordCard({ t }: { t: T }) {
  return (
    <div className="w-full max-w-[220px] rounded-2xl border border-accent/25 bg-[rgba(89,187,149,.04)] p-4">
      <p className="font-mono text-[9px] uppercase tracking-[.2em] text-accent/70">{t.recordLabel}</p>
      <p className="mt-3 text-lg font-medium text-white">{t.recordId}</p>
      <p className="mt-1 text-[11px] text-white/45">{t.recordTime}</p>
    </div>
  );
}

function Bubble({ tag, children, accent }: { tag: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div className={`w-full max-w-[300px] rounded-2xl border p-5 ${accent ? "border-accent/25 bg-[rgba(89,187,149,.05)]" : "border-white/12 bg-white/[.03]"}`}>
      <p className={`text-sm font-medium ${accent ? "text-accent" : "text-accent"}`}>{tag}</p>
      <p className="mt-2 text-sm leading-6 text-white/85">{children}</p>
    </div>
  );
}

/* ---------- main ---------- */

export function AgentShowcase({ variant = "pc" }: { variant?: "pc" | "phone" }) {
  const { language } = useLanguage();
  const t = { ...copy[language], ...intro[variant][language] };
  const Device = variant === "phone" ? Phone : Monitor;

  return (
    <section id={variant === "phone" ? "agent-voice" : "agent"} className="relative -mx-5 overflow-hidden bg-background py-20 sm:-mx-8">
      {/* fade in from hero */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-background to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(89,187,149,.10),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[.5] [background-image:linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        {/* intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-mono text-[11px] uppercase tracking-[.26em] text-accent">{t.eyebrow}</p>
          <h2 className="text-balance mt-4 text-[clamp(1.9rem,3.6vw,3rem)] font-medium leading-[1.14] tracking-[-.02em]">{t.heading}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">{t.sub}</p>
        </motion.div>

        {/* ===== desktop collage ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="relative mx-auto mt-6 hidden h-[860px] w-full max-w-[1120px] lg:block"
        >
          {/* connector lines */}
          <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 1120 860" fill="none" preserveAspectRatio="none">
            <g stroke="rgba(89,187,149,.30)" strokeWidth="1">
              <path d="M560 250 V196" />
              <path d="M320 366 H312" />
              <path d="M800 366 H808" />
            </g>
            <g fill="#59bb95">
              <circle cx="560" cy="250" r="3" />
              <circle cx="320" cy="366" r="2.5" />
              <circle cx="800" cy="366" r="2.5" />
            </g>
          </svg>

          {/* ---- top band ---- */}
          <div className="absolute left-[172px] top-[40px] w-[200px]">
            <DimPanel title={t.automation.title}>
              <p>{t.automation.body}</p>
              <GhostButton>{t.automation.cta}</GhostButton>
            </DimPanel>
          </div>
          <div className="absolute left-[400px] top-[96px]"><RecordCard t={t} /></div>
          <div className="absolute left-[632px] top-[92px]"><Bubble tag={t.userTag}>{t.userMsg}</Bubble></div>
          <div className="absolute right-0 top-[36px] w-[180px]">
            <DimPanel title={t.invoice.title}>
              {t.invoice.rows.map(([a, b]) => <DimRow key={a} label={a} value={b} />)}
              <GhostButton>{t.invoice.cta}</GhostButton>
            </DimPanel>
          </div>

          {/* ---- left column (hugging monitor) ---- */}
          <div className="absolute left-[8px] top-[205px]"><IdentityCard t={t} /></div>
          <div className="absolute left-[8px] top-[462px]"><Bubble tag={t.agentTag} accent>{t.agentMsg}</Bubble></div>

          {/* ---- right column (hugging monitor) ---- */}
          <div className="absolute left-[812px] top-[268px] w-[300px]">
            <DimPanel title={t.project.title}>
              {t.project.rows.map(([a, b]) => <DimRow key={a} label={a} value={b} />)}
            </DimPanel>
          </div>
          <div className="absolute left-[836px] top-[624px] w-[276px]">
            <DimPanel title={t.tasks.title}>
              <p>{t.tasks.body}</p>
              <GhostButton>{t.tasks.cta}</GhostButton>
            </DimPanel>
          </div>

          {/* ---- center-bottom (under monitor) ---- */}
          <div className="absolute left-[330px] top-[512px] w-[210px]">
            <DimPanel title={t.reconcile.title}>
              {t.reconcile.rows.map(([a, b]) => <DimRow key={a} label={a} value={b} />)}
            </DimPanel>
          </div>
          <div className="absolute left-[560px] top-[512px] w-[220px]">
            <DimPanel title={t.permissions.title}>
              <p>{t.permissions.body}</p>
            </DimPanel>
          </div>

          {/* ---- bottom-left planner ---- */}
          <div className="absolute left-[8px] top-[664px] w-[280px]">
            <DimPanel title={t.plannerLabel}>
              <div className="grid grid-cols-7 gap-1.5 pt-1">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={i} className={`grid aspect-square place-items-center rounded-[3px] text-[8px] ${i === 6 ? "bg-accent/25 text-accent/80" : "bg-white/[.02]"}`}>{i + 1}</span>
                ))}
              </div>
            </DimPanel>
          </div>

          {/* ---- image fills ---- */}
          <ImageTile className="absolute left-[330px] top-[646px] h-[150px] w-[450px]" label="8ity · panel" />

          {/* center monitor */}
          <div className="absolute left-1/2 top-[250px] -translate-x-1/2"><Device t={t} /></div>
        </motion.div>

        {/* ===== mobile / tablet stack ===== */}
        <div className="mt-12 flex flex-col items-center gap-6 lg:hidden">
          <Bubble tag={t.userTag}>{t.userMsg}</Bubble>
          <Device t={t} />
          <Bubble tag={t.agentTag} accent>{t.agentMsg}</Bubble>
          <IdentityCard t={t} />
          <div className="grid w-full max-w-[340px] gap-4 sm:grid-cols-2">
            <DimPanel title={t.reconcile.title}>
              {t.reconcile.rows.map(([a, b]) => <DimRow key={a} label={a} value={b} />)}
            </DimPanel>
            <DimPanel title={t.tasks.title}>
              <p>{t.tasks.body}</p>
              <GhostButton>{t.tasks.cta}</GhostButton>
            </DimPanel>
          </div>
        </div>
      </div>
    </section>
  );
}
