"use client";
import Image from "next/image";
import { useRef } from "react";
import { Carousel } from "@/components/slider/carousel";
import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/providers/language-provider";
import { OperationsExplorer } from "@/components/sections/operations-explorer";
import { ScrollScale } from "@/components/motion/reveal";
import { IntelligenceTimeline } from "@/components/sections/intelligence-timeline";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

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
                  className="glass-card group min-h-64 p-6 transition-colors hover:border-primary/30 hover:bg-white/[.06]"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-8 items-center rounded-lg bg-primary/10 px-2.5 font-mono text-[10px] tracking-[.08em] text-primary-hero">
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
              <ScrollScale className="mt-12">
                <AgentSystem language={language} />
              </ScrollScale>
            </div>
          </Reveal>
        </section>
        <IntelligenceTimeline />
        <OperationsExplorer />
        <section
          id="story-3"
          className="my-16 overflow-hidden rounded-[2rem] border border-border bg-white/[.02] px-5 py-16 sm:px-10"
        >
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
              {t.flowLabel}
            </p>
            <h2 className="text-balance mt-4 max-w-4xl text-4xl font-medium leading-[1] tracking-[-.04em] sm:text-5xl">
              {t.flowTitle}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
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
    <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-[#071714] px-4 py-14 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(52,211,153,.16),transparent_32%),radial-gradient(circle_at_center,rgba(5,150,105,.1),transparent_68%)]" />
      <div className="absolute inset-0 opacity-[.14] [background-image:linear-gradient(rgba(110,231,183,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(110,231,183,.24)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

      <div className="absolute inset-5 hidden lg:block">
        {modules.map((module, index) => {
          const positions = ["left-[2%] top-[7%]", "left-[1%] top-[42%]", "left-[6%] bottom-[6%]", "right-[2%] top-[9%]", "right-[1%] top-[46%]", "right-[6%] bottom-[7%]"];
          return (
            <motion.div
              key={module}
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 7 + index * 1.1, repeat: Infinity, ease: "easeInOut", delay: index * .7 }}
              className={`absolute w-60 rounded-xl border border-primary/30 bg-[#08201b]/85 p-4 shadow-[0_18px_60px_rgba(0,0,0,.35)] ${positions[index]}`}
            >
              <div className="flex items-center justify-between border-b border-primary/20 pb-3">
                <span className="flex items-center gap-1.5" aria-hidden>
                  <span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-white/15" /><span className="size-2 rounded-full bg-primary/50" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[.12em] text-primary">{module}</span>
                <span className="font-mono text-[9px] text-white/35">0{index + 1}</span>
              </div>
              <div className="mt-4 space-y-2.5">
                <div className="h-1 w-full rounded-full bg-primary/20" /><div className="h-1 w-3/4 rounded-full bg-primary/15" /><div className="h-1 w-1/2 rounded-full bg-primary/10" />
              </div>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-primary-hero">
                <span className="size-1 rounded-full bg-primary" aria-hidden />sync
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-20 mx-auto w-[min(100%,46rem)] rounded-2xl border border-primary/50 bg-[#061410]/95 shadow-[0_0_120px_rgba(52,211,153,.22)]">
        <div className="flex items-center justify-between border-b border-primary/20 px-5 py-3">
          <span className="flex items-center gap-2" aria-hidden>
            <span className="size-2.5 rounded-full bg-white/15" /><span className="size-2.5 rounded-full bg-white/15" /><span className="size-2.5 rounded-full bg-primary/50" />
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[.14em] text-primary">8ity AI · {language === "es" ? "Agente operativo" : "Operations agent"}</span>
          <span className="rounded-full bg-primary/10 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[.12em] text-primary-hero">live</span>
        </div>

        <div className="border-b border-primary/15 px-6 py-5">
          <p className="font-mono text-[9px] uppercase tracking-[.14em] text-primary">{language === "es" ? "Solicitud" : "Request"}</p>
          <p className="mt-2 text-sm text-white/75">{language === "es" ? "Resume el cierre del mes y dime qué necesita atención." : "Summarize month-end and tell me what needs attention."}</p>
        </div>

        <div className="flex flex-col items-center px-6 py-10 text-center">
          <Image src="/8ity-orb.webp" alt="" width={72} height={72} className="drop-shadow-[0_0_24px_rgba(52,211,153,.42)]" />
          <p className="mt-4 text-xl font-medium">8ity AI</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[.14em] text-primary">{language === "es" ? "Agente operativo" : "Operations agent"}</p>
          <div className="mt-8 flex h-10 items-center justify-center gap-1" aria-hidden="true">
            {[.45,.8,.58,1,.64,.9,.5,.76,.42,.86,.56,.72,.48,.94,.62,.78].map((height, index) => (
              <motion.span key={index} className="w-1 rounded-full bg-primary" animate={{ scaleY: [height, 1.15, .35, height] }} transition={{ duration: 2.4 + index * .05, repeat: Infinity, ease: "easeInOut", delay: index * .07 }} style={{ height: 28, transformOrigin: "center" }} />
            ))}
          </div>
        </div>

        <div className="grid border-t border-primary/15 text-left sm:grid-cols-2">
          <div className="border-b border-primary/15 p-5 text-xs sm:border-b-0 sm:border-r">
            <p className="text-primary">{language === "es" ? "Finanzas" : "Finance"}</p>
            <p className="mt-2 text-white/60">{language === "es" ? "3 movimientos requieren revisión" : "3 transactions need review"}</p>
          </div>
          <div className="p-5 text-xs">
            <p className="text-primary">{language === "es" ? "Acción completada" : "Action completed"}</p>
            <p className="mt-2 text-white/60">{language === "es" ? "Reporte compartido con dirección" : "Report shared with leadership"}</p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(7,23,20,.14)_60%,#071714_98%)]" />
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
              className={`min-h-40 rounded-2xl border p-5 transition-colors ${index === 0 ? "border-white bg-white text-[#0b0f14]" : "border-border bg-white/[.04] hover:border-primary/30"}`}
            >
              <span className={`font-mono text-[10px] ${index === 0 ? "text-primary-deep" : "text-primary"}`}>
                0{index + 1}
              </span>
              <p className="mt-16 text-sm font-medium">{label}</p>
            </div>
            {index < labels.length - 1 && (
              <div className="absolute -right-3 top-1/2 z-10 grid size-6 -translate-y-1/2 place-items-center rounded-full bg-primary text-xs text-primary-foreground">
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
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-1, 1], [-30, -14]), { stiffness: 60, damping: 16 });
  const rotateX = useSpring(useTransform(py, [-1, 1], [20, 6]), { stiffness: 60, damping: 16 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set(((event.clientX - rect.left) / rect.width) * 2 - 1);
    py.set(((event.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => { px.set(0); py.set(0); }}
      className="relative min-h-[34rem] overflow-hidden rounded-[1.5rem] border border-border bg-[#0a0f16]"
    >
      <div className="security-grid absolute inset-0 opacity-40" />

      <div className="absolute inset-0 grid place-items-center [perspective:1400px]">
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-[17rem] w-[19rem] sm:h-[19rem] sm:w-[24rem]"
        >
          {labels.map((label, i) => (
            <motion.div
              key={label}
              style={{ z: -i * 80, x: i * 20, transformStyle: "preserve-3d" }}
              animate={{ y: [-i * 12, -i * 12 - 8, -i * 12] }}
              transition={{ duration: 6 + i * 1.2, repeat: Infinity, ease: "easeInOut", delay: i * .55 }}
              className={`absolute inset-0 rounded-2xl border ${i === 0 ? "border-primary/60 bg-[#0a1a15]/95 shadow-[0_30px_90px_rgba(0,0,0,.5)]" : "border-white/20 bg-white/[.015]"}`}
            >
              <span className={`absolute -top-3 left-5 rounded-full border px-3 py-1 font-mono text-[8px] uppercase tracking-[.14em] ${i === 0 ? "border-primary/50 bg-[#0a1a15] text-primary" : "border-white/20 bg-[#0a0f16] text-white/50"}`}>
                {label}
              </span>
              {i === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Image src="/8ity-orb.webp" alt="" width={54} height={54} />
                  <p className="mt-3 font-mono text-[9px] tracking-[.16em] text-primary">8ITY VAULT</p>
                  <div className="mt-5 w-40 space-y-2" aria-hidden>
                    <div className="h-1 rounded-full bg-primary/30" />
                    <div className="h-1 w-3/4 rounded-full bg-white/15" />
                    <div className="h-1 w-1/2 rounded-full bg-white/10" />
                  </div>
                </div>
              ) : (
                <div className="absolute inset-x-6 top-1/3 space-y-4 opacity-60" aria-hidden>
                  <div className="border-t border-dashed border-white/25" />
                  <div className="w-2/3 border-t border-dashed border-white/15" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <p className="absolute bottom-5 left-6 font-mono text-[9px] uppercase tracking-[.16em] text-white/35">
        {labels.length} layers · zero-trust
      </p>
    </div>
  );
}
