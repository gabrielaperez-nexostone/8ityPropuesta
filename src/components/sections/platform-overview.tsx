"use client";
import Image from "next/image";
import { Carousel } from "@/components/slider/carousel";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/providers/language-provider";
import { OperationsExplorer } from "@/components/sections/operations-explorer";
import { ScrollLift } from "@/components/motion/reveal";

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
    <div className="relative grid gap-8 pb-24 lg:grid-cols-[14rem_1fr] lg:gap-14">
      <aside className="hidden lg:block">
        <div className="sticky top-28 space-y-1 border-l border-border">
          {t.nav.map((item, index) => (
            <a
              key={item}
              href={`#story-${index + 1}`}
              className="group flex items-center gap-3 border-l border-transparent px-5 py-3 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              <span className="font-mono text-[9px] text-primary">
                0{index + 1}
              </span>
              {item}
            </a>
          ))}
        </div>
      </aside>
      <div>
        <section id="story-1" className="py-24">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
              {t.platformLabel}
            </p>
            <h2 className="text-balance mt-5 max-w-5xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
              {t.platformTitle}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              {t.platformBody}
            </p>
          </Reveal>
          <Reveal className="mt-14 overflow-hidden border border-border bg-surface">
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
                    <p className="text-6xl font-medium tracking-[-.06em]">
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
                  className="group min-h-64 border border-border bg-background p-6 transition-colors hover:bg-surface"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-primary">
                      {module.code}
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-24">
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
        <section id="story-2" className="py-24">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                  {t.agentsLabel}
                </p>
                <h2 className="text-balance mt-5 text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
                  {t.agentsTitle}
                </h2>
                <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
                  {t.agentsBody}
                </p>
              </div>
              <ScrollLift>
                <AgentSystem language={language} />
              </ScrollLift>
            </div>
          </Reveal>
        </section>
        <OperationsExplorer />
        <section
          id="story-3"
          className="my-24 bg-[#e8f5f2] px-5 py-20 text-[#101828] sm:px-10"
        >
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-[#0b5d40]">
              {t.flowLabel}
            </p>
            <h2 className="text-balance mt-5 max-w-5xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
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
        <section id="story-4" className="py-24">
          <Reveal>
            <div className="grid items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                  {t.securityLabel}
                </p>
                <h2 className="text-balance mt-5 text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
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
  return (
    <div className="relative min-h-[34rem] overflow-hidden border border-border bg-[#07110f] p-5 sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,214,178,.13),transparent_60%)]" />
      <div className="relative mx-auto flex min-h-[29rem] max-w-xl items-center justify-center">
        <div className="absolute inset-x-8 top-8 flex justify-between text-[9px] font-mono text-muted-foreground">
          <span>MEMORY / PROJECT_08</span>
          <span>TOOLS / 12</span>
        </div>
        <div className="absolute left-4 top-28 w-40 border border-border bg-background/80 p-3 text-xs">
          <p className="text-primary">CRM context</p>
          <p className="mt-2 text-muted-foreground">31 active deals</p>
        </div>
        <div className="absolute bottom-16 right-2 w-44 border border-border bg-background/80 p-3 text-xs">
          <p className="text-primary">Finance signal</p>
          <p className="mt-2 text-muted-foreground">Runway +2.1 mo</p>
        </div>
        <div className="relative z-10 grid h-64 w-44 place-items-center rounded-[3rem] border border-primary/60 bg-primary-soft/60 shadow-[0_0_90px_rgba(56,214,178,.18)]">
          <div className="text-center">
            <Image
              src="/8ity-orb.webp"
              alt=""
              width={72}
              height={72}
              className="mx-auto"
            />
            <p className="mt-4 font-medium">Chief of Staff</p>
            <p className="mt-2 font-mono text-[9px] text-primary">
              {language === "es" ? "LISTO PARA ACTUAR" : "READY TO ACT"}
            </p>
          </div>
        </div>
        {[0, 1, 2].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-[3rem] border border-primary/20"
            style={{
              inset: `${56 - ring * 22}px ${92 - ring * 34}px`,
              transform: `translateX(${(ring - 1) * 8}px)`,
            }}
          />
        ))}
      </div>
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
    <div className="relative grid min-h-[34rem] place-items-center overflow-hidden border border-border bg-surface">
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
