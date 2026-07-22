"use client";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/providers/language-provider";

const copy = {
  es: {
    problemLabel: "El ERP en 30 segundos",
    problemTitle:
      "8ity reúne la gestión completa de la empresa en un ERP modular conectado por IA.",
    before: "Sin un ERP conectado",
    after: "Con el ERP de 8ity",
    beforeItems: [
      "Finanzas, operaciones y proyectos separados",
      "Datos duplicados entre herramientas",
      "Reportes construidos manualmente",
      "CRM aislado del resto de la empresa",
    ],
    afterItems: [
      "Una fuente central para toda la operación",
      "Módulos ERP que comparten información",
      "CRM adicional conectado a finanzas y proyectos",
      "Agentes con datos, permisos y herramientas",
    ],
    differenceLabel: "Por qué es diferente",
    differenceTitle:
      "Más inteligencia y libertad, con menos complejidad y costo.",
    differences: [
      {
        number: "01",
        title: "IA en el centro",
        body: "La IA no vive en un chat aislado. Trabaja con datos reales del ERP, memoria, permisos y herramientas para analizar y ejecutar acciones.",
      },
      {
        number: "02",
        title: "Gestiona lo que quieras",
        body: "Activa los módulos que necesita tu empresa y conecta procesos, datos o sistemas propios sin forzar una operación rígida.",
      },
      {
        number: "03",
        title: "Fácil de entender",
        body: "Una experiencia unificada reduce cambios de aplicación, información duplicada y curvas de aprendizaje entre equipos.",
      },
      {
        number: "04",
        title: "Menor costo operativo",
        body: "8ity busca reemplazar la suma de múltiples suscripciones con un ERP modular, herramientas conectadas y créditos de IA en un solo ecosistema.",
      },
    ],
    howLabel: "Cómo funciona",
    howTitle: "Empieza conectando lo que ya usas.",
    howBody:
      "No necesitas mover toda tu operación el primer día. 8ity se adapta por módulos, equipos y permisos.",
    steps: [
      {
        number: "01",
        title: "Conecta",
        body: "Vincula bancos, Google Workspace, Stripe, APIs o bases de datos mediante permisos explícitos.",
      },
      {
        number: "02",
        title: "Organiza",
        body: "Relaciona clientes, movimientos, proyectos, documentos, tareas y responsables dentro de un workspace.",
      },
      {
        number: "03",
        title: "Automatiza",
        body: "Configura eventos y horarios para crear seguimientos, alertas, reportes y tareas automáticamente.",
      },
      {
        number: "04",
        title: "Delega con control",
        body: "Autoriza agentes para analizar o ejecutar acciones concretas, siempre dentro de sus permisos.",
      },
    ],
    exampleLabel: "Ejemplo real",
    exampleTitle: "De un pago recibido a una decisión informada.",
    exampleIntro:
      "Un evento financiero puede recorrer todo el sistema sin perder contexto.",
    exampleSteps: [
      "El banco registra el movimiento",
      "8ity identifica y clasifica el pago",
      "Finance y el cash-flow se actualizan",
      "Se vincula la cuenta o el cliente",
      "Un agente detecta una variación",
      "El founder recibe una alerta clara",
    ],
    rolesLabel: "Valor por perfil",
    rolesTitle: "Un ERP. Diferentes resultados para cada equipo.",
    roles: [
      {
        role: "Founder / CEO",
        result:
          "Runway, burn, MRR, pipeline y riesgos visibles sin esperar el reporte semanal.",
        modules: "Dashboard · Finance · CRM",
      },
      {
        role: "Finanzas",
        result:
          "Menos conciliación manual, movimientos organizados y anomalías explicadas.",
        modules: "Finance · Banks · Documents",
      },
      {
        role: "Ventas",
        result:
          "Contexto completo de cada cuenta y seguimientos que no se pierden.",
        modules: "CRM · Mail · Calendar",
      },
      {
        role: "Operaciones",
        result:
          "Responsables, bloqueos y procesos repetitivos visibles y coordinados.",
        modules: "Projects · Tasks · Automations",
      },
      {
        role: "People Ops",
        result:
          "Onboarding, permisos y documentación interna en un flujo consistente.",
        modules: "HR · Users · Directory",
      },
      {
        role: "Tecnología",
        result:
          "APIs, datos, servidores y herramientas MCP conectados a los agentes.",
        modules: "Code · Database · MCP",
      },
    ],
    faqLabel: "Preguntas frecuentes",
    faqTitle: "Lo esencial antes de empezar.",
    faq: [
      {
        value: "crm",
        title: "¿8ity es un ERP o un CRM?",
        content:
          "8ity es un ERP inteligente y modular. El CRM es una herramienta adicional incluida para gestionar pipeline, cuentas, contactos y seguimientos dentro del mismo contexto operativo.",
      },
      {
        value: "agents",
        title: "¿Qué pueden hacer los agentes?",
        content:
          "Pueden analizar, resumir, redactar y ejecutar acciones autorizadas. Cada agente respeta los permisos del usuario y las herramientas disponibles.",
      },
      {
        value: "replace",
        title: "¿Tengo que reemplazar todas mis herramientas?",
        content:
          "No. Puedes comenzar por un módulo o flujo y conectar servicios existentes como Google Workspace, Stripe, bancos y sistemas internos.",
      },
      {
        value: "cost",
        title: "¿Por qué puede costar menos?",
        content:
          "Porque concentra funciones que normalmente requieren varias suscripciones: ERP, proyectos, documentos, automatizaciones, CRM e IA. El ahorro real depende de las herramientas y el uso de cada empresa.",
      },
      {
        value: "data",
        title: "¿Cómo se controla el acceso a los datos?",
        content:
          "El acceso se organiza por organización, workspace, rol, módulo y acción. Las automatizaciones y agentes también quedan sujetos a permisos y trazabilidad.",
      },
      {
        value: "teams",
        title: "¿Para qué tipo de empresa está pensado?",
        content:
          "Para founders, startups, agencias, empresas de servicios digitales, e-commerce y pymes que necesitan coordinar varias áreas sin multiplicar herramientas.",
      },
    ],
    ctaLabel: "Una operación, un contexto",
    ctaTitle:
      "Tu equipo decide mejor cuando toda la empresa comparte la misma información.",
    ctaButton: "Volver al sistema",
  },
  en: {
    problemLabel: "The ERP in 30 seconds",
    problemTitle:
      "8ity brings complete company management into one modular ERP connected by AI.",
    before: "Without a connected ERP",
    after: "With the 8ity ERP",
    beforeItems: [
      "Finance, operations and projects kept apart",
      "Data duplicated across tools",
      "Reports assembled manually",
      "CRM isolated from the rest of the company",
    ],
    afterItems: [
      "One central source for the entire operation",
      "ERP modules that share information",
      "Additional CRM connected to finance and projects",
      "Agents with data, permissions and tools",
    ],
    differenceLabel: "Why it is different",
    differenceTitle:
      "More intelligence and freedom, with less complexity and cost.",
    differences: [
      {
        number: "01",
        title: "AI at the core",
        body: "AI does not live in an isolated chat. It works with real ERP data, memory, permissions and tools to analyze and perform actions.",
      },
      {
        number: "02",
        title: "Manage what you need",
        body: "Enable the modules your company needs and connect custom processes, data or systems without forcing a rigid operation.",
      },
      {
        number: "03",
        title: "Easy to understand",
        body: "One unified experience reduces app switching, duplicate information and learning curves across teams.",
      },
      {
        number: "04",
        title: "Lower operating cost",
        body: "8ity is designed to replace multiple subscriptions with a modular ERP, connected tools and AI credits in one ecosystem.",
      },
    ],
    howLabel: "How it works",
    howTitle: "Start by connecting what you already use.",
    howBody:
      "You do not need to move your entire operation on day one. 8ity adapts by module, team and permission.",
    steps: [
      {
        number: "01",
        title: "Connect",
        body: "Link banks, Google Workspace, Stripe, APIs or databases through explicit permissions.",
      },
      {
        number: "02",
        title: "Organize",
        body: "Relate customers, transactions, projects, documents, tasks and owners inside a workspace.",
      },
      {
        number: "03",
        title: "Automate",
        body: "Use events and schedules to create follow-ups, alerts, reports and tasks automatically.",
      },
      {
        number: "04",
        title: "Delegate with control",
        body: "Authorize agents to analyze or perform specific actions, always within their permissions.",
      },
    ],
    exampleLabel: "Real example",
    exampleTitle: "From a received payment to an informed decision.",
    exampleIntro:
      "A financial event can move through the whole system without losing context.",
    exampleSteps: [
      "The bank records the transaction",
      "8ity identifies and classifies the payment",
      "Finance and cash flow are updated",
      "The account or customer is linked",
      "An agent detects a variance",
      "The founder receives a clear alert",
    ],
    rolesLabel: "Value by role",
    rolesTitle: "One ERP. Different outcomes for every team.",
    roles: [
      {
        role: "Founder / CEO",
        result:
          "Runway, burn, MRR, pipeline and risks visible without waiting for the weekly report.",
        modules: "Dashboard · Finance · CRM",
      },
      {
        role: "Finance",
        result:
          "Less manual reconciliation, organized transactions and explained anomalies.",
        modules: "Finance · Banks · Documents",
      },
      {
        role: "Sales",
        result: "Complete account context and follow-ups that never get lost.",
        modules: "CRM · Mail · Calendar",
      },
      {
        role: "Operations",
        result:
          "Owners, blockers and repetitive processes visible and coordinated.",
        modules: "Projects · Tasks · Automations",
      },
      {
        role: "People Ops",
        result:
          "Onboarding, permissions and internal documentation in one consistent flow.",
        modules: "HR · Users · Directory",
      },
      {
        role: "Technology",
        result: "APIs, data, servers and MCP tools connected to agents.",
        modules: "Code · Database · MCP",
      },
    ],
    faqLabel: "Frequently asked questions",
    faqTitle: "What matters before getting started.",
    faq: [
      {
        value: "crm",
        title: "Is 8ity an ERP or a CRM?",
        content:
          "8ity is an intelligent, modular ERP. CRM is an additional included tool for managing pipeline, accounts, contacts and follow-ups within the same operating context.",
      },
      {
        value: "agents",
        title: "What can agents do?",
        content:
          "They can analyze, summarize, write and perform authorized actions. Every agent respects user permissions and available tools.",
      },
      {
        value: "replace",
        title: "Do I need to replace all my tools?",
        content:
          "No. You can begin with one module or workflow and connect existing services such as Google Workspace, Stripe, banks and internal systems.",
      },
      {
        value: "cost",
        title: "Why can it cost less?",
        content:
          "Because it combines functions that usually require several subscriptions: ERP, projects, documents, automations, CRM and AI. Actual savings depend on each company’s tools and usage.",
      },
      {
        value: "data",
        title: "How is data access controlled?",
        content:
          "Access is organized by organization, workspace, role, module and action. Automations and agents are also subject to permissions and auditability.",
      },
      {
        value: "teams",
        title: "What kind of company is it built for?",
        content:
          "For founders, startups, agencies, digital services companies, e-commerce and SMBs that need to coordinate multiple areas without multiplying tools.",
      },
    ],
    ctaLabel: "One operation, one context",
    ctaTitle:
      "Your team makes better decisions when the whole company shares the same information.",
    ctaButton: "Back to the system",
  },
} as const;

export function UserGuide() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <>
      <section id="beneficios" className="py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
            {t.problemLabel}
          </p>
          <h2 className="mt-5 max-w-5xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
            {t.problemTitle}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border lg:grid-cols-2">
          <Comparison title={t.before} items={t.beforeItems} negative />
          <Comparison title={t.after} items={t.afterItems} />
        </div>
      </section>
      <section
        id="diferenciadores"
        className="my-24 overflow-hidden border border-primary/20 bg-[radial-gradient(circle_at_90%_10%,rgba(56,214,178,.16),transparent_34%),var(--surface)] p-6 sm:p-10"
      >
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
            {t.differenceLabel}
          </p>
          <h2 className="mt-5 max-w-5xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
            {t.differenceTitle}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {t.differences.map((item) => (
            <Reveal
              key={item.number}
              className="group min-h-72 bg-background/90 p-6 transition-colors hover:bg-primary-soft/30 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary">
                  {item.number}
                </span>
                <span className="size-2 rounded-full border border-primary transition-all group-hover:bg-primary group-hover:shadow-[0_0_18px_var(--primary)]" />
              </div>
              <h3 className="mt-20 text-3xl font-medium tracking-[-.03em]">
                {item.title}
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <section id="como-funciona" className="py-24">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
                {t.howLabel}
              </p>
              <h2 className="mt-5 text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
                {t.howTitle}
              </h2>
            </div>
            <p className="self-end text-lg leading-8 text-muted-foreground">
              {t.howBody}
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step) => (
            <Reveal key={step.number} className="min-h-72 bg-background p-6">
              <span className="font-mono text-xs text-primary">
                {step.number}
              </span>
              <h3 className="mt-24 text-2xl font-medium">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="my-24 border border-border bg-surface p-6 sm:p-10">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
            {t.exampleLabel}
          </p>
          <h2 className="mt-5 max-w-5xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
            {t.exampleTitle}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{t.exampleIntro}</p>
        </Reveal>
        <div className="mt-14 grid gap-4 lg:grid-cols-6">
          {t.exampleSteps.map((step, index) => (
            <div
              key={step}
              className="relative border border-border bg-background p-5"
            >
              <span className="font-mono text-[10px] text-primary">
                0{index + 1}
              </span>
              <p className="mt-10 text-sm leading-6">{step}</p>
              {index < t.exampleSteps.length - 1 && (
                <span className="absolute -right-3 top-1/2 z-10 hidden size-6 place-items-center rounded-full bg-primary text-xs text-primary-foreground lg:grid">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>
      <section id="perfiles" className="py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
            {t.rolesLabel}
          </p>
          <h2 className="mt-5 max-w-5xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
            {t.rolesTitle}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {t.roles.map((role, index) => (
            <Reveal
              key={role.role}
              className="group min-h-72 bg-background p-6 transition-colors hover:bg-surface"
            >
              <div className="flex justify-between">
                <span className="font-mono text-[10px] text-primary">
                  0{index + 1}
                </span>
                <span className="size-2 rounded-full border border-primary group-hover:bg-primary" />
              </div>
              <h3 className="mt-16 text-2xl font-medium">{role.role}</h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {role.result}
              </p>
              <p className="mt-7 font-mono text-[9px] uppercase tracking-[.12em] text-primary">
                {role.modules}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
      <section
        id="preguntas"
        className="grid gap-12 py-24 lg:grid-cols-[.8fr_1.2fr]"
      >
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
            {t.faqLabel}
          </p>
          <h2 className="mt-5 text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
            {t.faqTitle}
          </h2>
        </Reveal>
        <Reveal className="border-t border-border">
          <Accordion items={[...t.faq]} />
        </Reveal>
      </section>
      <section className="my-24 overflow-hidden border border-primary/20 bg-[radial-gradient(circle_at_80%_20%,rgba(56,214,178,.17),transparent_38%),var(--surface)] p-8 sm:p-14">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[.2em] text-primary">
            {t.ctaLabel}
          </p>
          <h2 className="mt-5 max-w-5xl text-5xl font-medium leading-[.95] tracking-[-.055em] sm:text-7xl">
            {t.ctaTitle}
          </h2>
          <Button asChild className="mt-10">
            <Link href="#top">{t.ctaButton} ↑</Link>
          </Button>
        </Reveal>
      </section>
    </>
  );
}

function Comparison({
  title,
  items,
  negative = false,
}: {
  title: string;
  items: readonly string[];
  negative?: boolean;
}) {
  return (
    <div
      className={`p-6 sm:p-10 ${negative ? "bg-[#0a0d10]" : "bg-primary-soft/40"}`}
    >
      <p className="font-mono text-xs uppercase tracking-[.16em] text-muted-foreground">
        {title}
      </p>
      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <div
            key={item}
            className="flex gap-4 border-b border-border pb-5 text-sm"
          >
            <span className={negative ? "text-danger" : "text-primary"}>
              {negative ? "×" : "✓"}
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
