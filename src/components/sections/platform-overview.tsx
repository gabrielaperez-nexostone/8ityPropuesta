"use client";
import Image from "next/image";
import { Carousel } from "@/components/slider/carousel";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/providers/language-provider";
import { OperationsExplorer } from "@/components/sections/operations-explorer";
import { ScrollLift } from "@/components/motion/reveal";
import { IntelligenceTimeline } from "@/components/sections/intelligence-timeline";
import { motion } from "motion/react";

const copy = {
  es: {
    nav: [
      "Operación conectada",
      "Agentes con contexto",
      "Flujos autónomos",
      "Seguridad y control",
    ],
    platformLabel: "01 · ERP unificado",
    platformTitle: "Una vista para gestionar toda la empresa.",
    platformBody:
      "Finanzas, operaciones, proyectos, personas y datos forman el núcleo del ERP. Herramientas adicionales como CRM y agentes de IA enriquecen la operación sin fragmentarla.",
    agentsLabel: "02 · Agentes con contexto",
    agentsTitle: "No solo responden. Analizan, recuerdan y ejecutan.",
    agentsBody:
      "Cada agente trabaja con memoria por proyecto, datos relacionados, herramientas autorizadas y permisos reales.",
    flowLabel: "03 · Flujos autónomos",
    flowTitle: "Eventos reales se convierten en acciones coordinadas.",
    flowBody:
      "Un pago, correo o reunión puede activar clasificación, contexto, tareas, alertas y seguimiento sin trabajo manual.",
    securityLabel: "04 · Seguridad y control",
    securityTitle: "IA operativa, bajo tus reglas.",
    securityBody:
      "Permisos por organización, workspace, módulo y acción. Trazabilidad para usuarios, integraciones, automatizaciones y agentes.",
    modules: [
      {
        title: "Finance",
        body: "Cash-flow, runway y conciliación",
        code: "FIN",
      },
      {
        title: "Operations",
        body: "Procesos, responsables y ejecución",
        code: "OPS",
      },
      { title: "Projects", body: "Objetivos, tareas y bloqueos", code: "PRJ" },
      {
        title: "People & Admin",
        body: "Usuarios, roles, equipos y gobierno",
        code: "ADM",
      },
      {
        title: "AI Assistant",
        body: "Memoria, herramientas y acciones",
        code: "AIA",
      },
      {
        title: "CRM",
        body: "Herramienta adicional para pipeline y clientes",
        code: "CRM+",
      },
    ],
    account: "Cuenta",
    payment: "Pago recibido",
    classify: "Clasificar",
    update: "Actualizar finanzas",
    alert: "Alertar al founder",
    encrypted: "Cifrado",
    roles: "Roles",
    trace: "Trazabilidad",
    private: "Datos privados",
  },
  en: {
    nav: [
      "Connected operations",
      "Context-aware agents",
      "Autonomous flows",
      "Security and control",
    ],
    platformLabel: "01 · Unified ERP",
    platformTitle: "One view to manage the whole company.",
    platformBody:
      "Finance, operations, projects, people and data form the ERP core. Additional tools such as CRM and AI agents enrich the operation without fragmenting it.",
    agentsLabel: "02 · Context-aware agents",
    agentsTitle: "They do more than answer. They analyze, remember and act.",
    agentsBody:
      "Every agent works with project memory, connected data, authorized tools and real permissions.",
    flowLabel: "03 · Autonomous flows",
    flowTitle: "Real events become coordinated actions.",
    flowBody:
      "A payment, email or meeting can trigger classification, context, tasks, alerts and follow-up without manual work.",
    securityLabel: "04 · Security and control",
    securityTitle: "Operational AI, governed by your rules.",
    securityBody:
      "Permissions by organization, workspace, module and action. Auditability across users, integrations, automations and agents.",
    modules: [
      {
        title: "Finance",
        body: "Cash flow, runway and reconciliation",
        code: "FIN",
      },
      {
        title: "Operations",
        body: "Processes, ownership and execution",
        code: "OPS",
      },
      { title: "Projects", body: "Goals, tasks and blockers", code: "PRJ" },
      {
        title: "People & Admin",
        body: "Users, roles, teams and governance",
        code: "ADM",
      },
      { title: "AI Assistant", body: "Memory, tools and actions", code: "AIA" },
      {
        title: "CRM",
        body: "Additional tool for pipeline and customers",
        code: "CRM+",
      },
    ],
    account: "Account",
    payment: "Payment received",
    classify: "Classify",
    update: "Update finance",
    alert: "Alert founder",
    encrypted: "Encrypted",
    roles: "Roles",
    trace: "Audit trail",
    private: "Private data",
  },
} as const;

export function PlatformOverview() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <div className="relative pb-24">
      <div>
        <section id="story-1" className="py-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
              {t.platformLabel}
            </p>
            <h2 className="text-balance mt-4 max-w-4xl text-4xl font-medium leading-[1] tracking-[-.04em] sm:text-5xl">
              {t.platformTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t.platformBody}
            </p>
          </Reveal>
          <Reveal className="glass-card mt-14 overflow-hidden">
            <div className="grid divide-y divide-border sm:grid-cols-[1.2fr_.8fr] sm:divide-x sm:divide-y-0">
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-border pb-5">
                  <span className="font-mono text-[10px] uppercase tracking-[.16em] text-muted-foreground">
                    EXECUTIVE OVERVIEW
                  </span>
                  <span className="rounded-full bg-primary-soft px-3 py-1 font-mono text-[9px] text-primary">
                    LIVE DATA
                  </span>
                </div>
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground">Runway</p>
                  <div className="mt-2 flex items-end justify-between">
                    <p className="text-4xl font-medium tracking-[-.045em]">
                      18.4
                      <span className="ml-2 text-xl text-muted-foreground">
                        mo
                      </span>
                    </p>
                    <span className="text-xs text-primary">+2.1 mo</span>
                  </div>
                  <div className="mt-10 flex h-44 items-end gap-1">
                    {[
                      42, 47, 44, 52, 58, 61, 57, 65, 70, 68, 73, 76, 72, 80,
                      84, 82, 88, 92, 90, 96,
                    ].map((height, i) => (
                      <span
                        key={i}
                        className="flex-1 border-t border-primary bg-primary/15"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2">
                {[
                  ["MRR", "$124K"],
                  ["Pipeline", "$384K"],
                  ["Projects", "12"],
                  ["Open tasks", "124"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-r border-border p-5"
                  >
                    <p className="font-mono text-[9px] uppercase text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-4 text-2xl font-medium">{value}</p>
                    <div className="mt-5 h-px bg-gradient-to-r from-primary to-transparent" />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="mt-8">
            <Carousel label="8ity modules">
              {t.modules.map((module, index) => (
                <article
                  key={module.title}
                  className="glass-card group min-h-64 p-6 transition-colors hover:bg-surface/80"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-primary">
                      {module.code}
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-14">
                    <h3 className="text-2xl font-medium">{module.title}</h3>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
                      {module.body}
                    </p>
                  </div>
                </article>
              ))}
            </Carousel>
          </div>
        </section>
        <section id="story-2" className="py-16">
          <Reveal>
            <div>
              <div className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                  {t.agentsLabel}
                </p>
                <h2 className="text-balance mt-4 text-4xl font-medium leading-[1] tracking-[-.04em] sm:text-5xl">
                  {t.agentsTitle}
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                  {t.agentsBody}
                </p>
              </div>
              <ScrollLift className="mt-12">
                <AgentSystem language={language} />
              </ScrollLift>
            </div>
          </Reveal>
        </section>
        <IntelligenceTimeline />
        <OperationsExplorer />
        <section
          id="story-3"
          className="my-16 bg-[#e8f5f2] px-5 py-16 text-[#101828] sm:px-10"
        >
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-[#0b5d40]">
              {t.flowLabel}
            </p>
            <h2 className="text-balance mt-4 max-w-4xl text-4xl font-medium leading-[1] tracking-[-.04em] sm:text-5xl">
              {t.flowTitle}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4f6380]">
              {t.flowBody}
            </p>
            <FlowSystem
              labels={[t.account, t.payment, t.classify, t.update, t.alert]}
            />
          </Reveal>
        </section>
        <section id="story-4" className="py-16">
          <Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                  {t.securityLabel}
                </p>
                <h2 className="text-balance mt-4 text-4xl font-medium leading-[1] tracking-[-.04em] sm:text-5xl">
                  {t.securityTitle}
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                  {t.securityBody}
                </p>
              </div>
              <SecuritySystem
                labels={[t.encrypted, t.roles, t.trace, t.private]}
              />
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}

function AgentSystem({ language }: { language: "es" | "en" }) {
  const modules = language === "es"
    ? ["Finanzas", "Proyectos", "Documentos", "Tareas", "Calendario", "CRM"]
    : ["Finance", "Projects", "Documents", "Tasks", "Calendar", "CRM"];
  return (
    <div className="relative min-h-[35rem] overflow-hidden rounded-[2.5rem] bg-[#071714] sm:min-h-[44rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_54%,rgba(52,211,153,.18),transparent_25%),radial-gradient(circle_at_center,rgba(5,150,105,.1),transparent_68%)]" />
      <div className="absolute inset-0 opacity-[.14] [background-image:linear-gradient(rgba(110,231,183,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,.24)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <div className="absolute inset-5 hidden opacity-35 sm:block">
        {modules.map((module, index) => {
          const positions = ["left-[3%] top-[9%]", "left-[7%] top-[44%]", "left-[16%] bottom-[5%]", "right-[5%] top-[10%]", "right-[8%] top-[48%]", "right-[16%] bottom-[5%]"];
          return (
            <div key={module} className={`absolute h-36 w-56 border border-primary/35 bg-[#091d19]/70 p-4 ${positions[index]}`}>
              <div className="flex items-center justify-between border-b border-primary/20 pb-3 font-mono text-[9px] uppercase tracking-[.12em] text-primary">
                <span>{module}</span><span>0{index + 1}</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-px w-full bg-primary/25" /><div className="h-px w-3/4 bg-primary/20" /><div className="h-px w-1/2 bg-primary/15" />
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute left-1/2 top-[13%] z-20 w-[min(86%,25rem)] -translate-x-1/2 border border-primary/55 bg-[#071714]/90 p-4 text-sm sm:top-[8%]">
        <p className="font-mono text-[9px] uppercase tracking-[.14em] text-primary">{language === "es" ? "Solicitud" : "Request"}</p>
        <p className="mt-2 text-white/75">{language === "es" ? "Resume el cierre del mes y dime qué necesita atención." : "Summarize month-end and tell me what needs attention."}</p>
      </div>

      <div className="absolute left-1/2 top-1/2 z-20 h-[25rem] w-[15.5rem] -translate-x-1/2 -translate-y-[43%] rounded-[3.2rem] border border-primary/70 bg-[#061410]/95 shadow-[0_0_100px_rgba(52,211,153,.22)] sm:h-[29rem] sm:w-[18rem]">
        <div className="mx-auto mt-5 h-5 w-16 rounded-full border border-white/15" />
        <div className="flex h-[calc(100%-3rem)] flex-col items-center justify-center px-6 text-center">
          <Image src="/8ity-orb.webp" alt="" width={76} height={76} className="drop-shadow-[0_0_24px_rgba(52,211,153,.42)]" />
          <p className="mt-4 text-xl font-medium">8ity AI</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[.14em] text-primary">{language === "es" ? "Agente operativo" : "Operations agent"}</p>
          <div className="mt-12 flex h-10 items-center justify-center gap-1" aria-hidden="true">
            {[.45,.8,.58,1,.64,.9,.5,.76,.42,.86,.56,.72,.48,.94,.62,.78].map((height, index) => (
              <motion.span key={index} className="w-1 rounded-full bg-primary" animate={{ scaleY: [height, 1.15, .35, height] }} transition={{ duration: 2.4 + index * .05, repeat: Infinity, ease: "easeInOut", delay: index * .07 }} style={{ height: 28, transformOrigin: "center" }} />
            ))}
          </div>
          <div className="mt-12 flex gap-4">
            {["●", "•••", "↗"].map((item) => <span key={item} className="grid size-10 place-items-center rounded-full bg-white/[.06] text-xs text-white/45">{item}</span>)}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[7%] left-[5%] z-20 hidden w-64 border border-primary/45 bg-[#071714]/90 p-4 text-xs sm:block">
        <p className="text-primary">{language === "es" ? "Finanzas" : "Finance"}</p>
        <p className="mt-2 text-white/60">{language === "es" ? "3 movimientos requieren revisión" : "3 transactions need review"}</p>
      </div>
      <div className="absolute bottom-[8%] right-[5%] z-20 hidden w-64 border border-primary/45 bg-[#071714]/90 p-4 text-xs sm:block">
        <p className="text-primary">{language === "es" ? "Acción completada" : "Action completed"}</p>
        <p className="mt-2 text-white/60">{language === "es" ? "Reporte compartido con dirección" : "Report shared with leadership"}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(7,23,20,.18)_55%,#071714_96%)]" />
    </div>
  );
}

function FlowSystem({ labels }: { labels: readonly string[] }) {
  return (
    <div className="mt-16 overflow-x-auto pb-4">
      <div className="grid min-w-[800px] grid-cols-5 items-center">
        {labels.map((label, index) => (
          <div key={label} className="relative">
            <div
              className={`min-h-40 border border-[#b8cbc5] p-5 ${index === 0 ? "bg-[#101828] text-white" : "bg-white/50"}`}
            >
              <span className="font-mono text-[10px] text-[#15927f]">
                0{index + 1}
              </span>
              <p className="mt-16 text-sm font-medium">{label}</p>
            </div>
            {index < labels.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 grid size-6 -translate-y-1/2 place-items-center rounded-full bg-[#15927f] text-xs text-white">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SecuritySystem({ labels }: { labels: readonly string[] }) {
  return (
    <div className="glass-card relative grid min-h-[34rem] place-items-center overflow-hidden">
      <div className="security-grid absolute inset-0 opacity-50" />
      <div className="relative grid size-44 place-items-center rounded-full border border-primary/50 bg-background shadow-[0_0_100px_rgba(56,214,178,.18)]">
        <div className="text-center">
          <Image
            src="/8ity-orb.webp"
            alt=""
            width={58}
            height={58}
            className="mx-auto"
          />
          <p className="mt-3 font-mono text-[9px] text-primary">8ITY VAULT</p>
        </div>
      </div>
      {labels.map((label, index) => (
        <div
          key={label}
          className="absolute border border-border bg-background/90 px-4 py-3 text-xs"
          style={{
            left: index % 2 ? "auto" : "8%",
            right: index % 2 ? "8%" : "auto",
            top: `${15 + index * 21}%`,
          }}
        >
          <span className="mr-2 text-primary">●</span>
          {label}
        </div>
      ))}
    </div>
  );
}
