"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { useLanguage } from "@/providers/language-provider";

const pageCopy = {
  es: {
    hero: {
      eyebrow: "Integraciones",
      title: "Conectado con todo lo que ya usas.",
      body: "Une tus bancos, correo, documentos, pagos y modelos de IA en un solo espacio. Tus datos se sincronizan para que 8ity pueda entender, organizar y ejecutar contigo.",
      primary: "Explorar conexiones",
      secondary: "Ver agentes IA",
    },
    map: {
      title: "Un contexto compartido",
      status: "Todo sincronizado",
      center: "8ity",
      nodes: ["Bancos", "Workspace", "Pagos", "WhatsApp", "Gmail", "Drive", "IA", "MCP"],
    },
    banksLabel: "1,000+ bancos de LatAm vía Syncfy",
    integrationsEyebrow: "Conexiones principales",
    integrationsTitle: "Activa cada parte de tu operación.",
    integrationsBody:
      "Conecta las herramientas que ya usa tu equipo. 8ity reúne la información, mantiene el contexto y reduce el trabajo manual entre plataformas.",
    integrations: [
      {
        icon: "▰",
        label: "Banca",
        title: "1,000+ bancos de LatAm",
        body: "Conecta cuentas de BBVA, Santander, Banorte, Banamex, Itaú y más vía Syncfy. Movimientos y saldos actualizados para conciliar, categorizar y analizar.",
        tags: ["BBVA", "Santander", "Banorte", "Banamex", "Itaú", "HSBC"],
      },
      {
        icon: "✦",
        label: "Modelos de IA",
        title: "Claude + Gemini",
        body: "Elige el modelo adecuado para cada tarea y dale acceso seguro al contexto que necesita mediante herramientas MCP.",
        tags: ["Claude Sonnet 4.5", "Claude Opus", "Gemini 2.5", "MCP Tools"],
      },
      {
        icon: "⌁",
        label: "Google Workspace",
        title: "Drive · Sheets · Mail · Calendar",
        body: "Consulta, edita y sincroniza archivos, hojas, correos y eventos sin salir de 8ity ni duplicar información.",
        tags: ["Drive", "Sheets", "Gmail", "Calendar"],
      },
      {
        icon: "◇",
        label: "Pagos",
        title: "Stripe Billing",
        body: "Suscripciones, checkout y webhooks conectados con reportes y conciliación para mantener tus ingresos siempre visibles.",
        tags: ["Subscriptions", "Checkout", "Webhooks", "Invoicing"],
      },
    ],
    connectedEyebrow: "ERP conectado",
    connectedTitle: "Un dato entra una vez. Todo tu equipo lo aprovecha.",
    connectedBody:
      "La información fluye entre finanzas, CRM, documentos y proyectos sin copiar, pegar ni reconstruir el contexto.",
    connected: [
      ["01", "Finanzas", "Saldos, movimientos, flujo y runway en tiempo real."],
      ["02", "CRM", "Contactos, pipeline y oportunidades siempre actualizados."],
      ["03", "Datos y documentos", "Archivos, correos y registros sincronizados en un solo contexto."],
      ["04", "Tareas y proyectos", "Kanban, calendario, responsables y automatizaciones."],
    ],
    toolsEyebrow: "Toolkit completo",
    toolsTitle: "Y otras 12 herramientas listas.",
    toolsBody:
      "Una sola cuenta, permisos consistentes y datos compartidos entre todas tus herramientas.",
    tools: [
      ["▤", "Docs", "Documentos colaborativos con BlockNote."],
      ["□", "Notes", "Notas rápidas asistidas por IA."],
      ["⌁", "Drive", "Archivos conectados a Google Drive."],
      ["✉", "Mail", "Bandeja con clasificación inteligente."],
      ["▦", "Calendar", "Sincronización bidireccional con Google."],
      ["◱", "Chat", "Mensajería en tiempo real."],
      ["♢", "Reminders", "Recordatorios con contexto."],
      ["⌘", "Code", "Sandbox y snippets con E2B."],
      ["▥", "Directory", "Empresas, contactos y equipos."],
      ["⌁", "Automations", "Workflows y tareas programadas."],
      ["◎", "MCP Servers", "Extensiones y herramientas propias."],
      ["⊞", "Workspaces", "Proyectos y equipos aislados."],
    ],
    dashboard: {
      eyebrow: "Dashboard unificado",
      title: "Tu empresa en una sola vista.",
      body: "KPIs financieros, pipeline comercial, tareas, recordatorios y datos sincronizados en un mismo lugar.",
      points: [
        "Runway, burn y MRR en vivo",
        "Pipeline del CRM y oportunidades por cerrar",
        "Alertas sobre cambios importantes",
        "Widgets personalizables por workspace",
      ],
      panelTitle: "Resumen operativo",
      panelStatus: "Sincronizado ahora",
    },
    security: {
      eyebrow: "Seguridad · Privacidad",
      title: "Tus datos siguen siendo tuyos.",
      body: "Protección de extremo a extremo, credenciales bancarias resguardadas y controles claros para decidir qué puede consultar o ejecutar cada integración.",
      items: [
        ["End-to-end", "Cifrado de datos en reposo y en tránsito."],
        ["Bank vault", "Las credenciales se mantienen fuera de los servidores de 8ity."],
        ["Zero retention", "Los modelos compatibles no entrenan con tus datos."],
        ["Hosting LatAm", "Infraestructura preparada para operación regional."],
      ],
    },
    cta: {
      eyebrow: "Un ERP, todo conectado",
      title: "Menos herramientas sueltas. Más claridad para operar.",
      body: "Empieza con las conexiones que necesitas hoy y activa nuevas capacidades conforme crece tu empresa.",
      primary: "Empezar gratis",
      secondary: "Ver precios",
    },
  },
  en: {
    hero: {
      eyebrow: "Integrations",
      title: "Connected with everything you already use.",
      body: "Bring your banks, email, documents, payments, and AI models into one workspace. Your data stays in sync so 8ity can understand, organize, and execute with you.",
      primary: "Explore connections",
      secondary: "View AI agents",
    },
    map: {
      title: "One shared context",
      status: "Everything in sync",
      center: "8ity",
      nodes: ["Banks", "Workspace", "Payments", "WhatsApp", "Gmail", "Drive", "AI", "MCP"],
    },
    banksLabel: "1,000+ LatAm banks via Syncfy",
    integrationsEyebrow: "Core connections",
    integrationsTitle: "Connect every part of your operation.",
    integrationsBody:
      "Keep the tools your team already uses. 8ity brings the information together, preserves context, and reduces manual work across platforms.",
    integrations: [
      {
        icon: "▰",
        label: "Banking",
        title: "1,000+ LatAm banks",
        body: "Connect BBVA, Santander, Banorte, Banamex, Itaú, and more through Syncfy. Keep balances and transactions ready for reconciliation, categorization, and analysis.",
        tags: ["BBVA", "Santander", "Banorte", "Banamex", "Itaú", "HSBC"],
      },
      {
        icon: "✦",
        label: "AI models",
        title: "Claude + Gemini",
        body: "Choose the right model for each task and give it secure access to the context it needs through MCP tools.",
        tags: ["Claude Sonnet 4.5", "Claude Opus", "Gemini 2.5", "MCP Tools"],
      },
      {
        icon: "⌁",
        label: "Google Workspace",
        title: "Drive · Sheets · Mail · Calendar",
        body: "Read, edit, and sync files, spreadsheets, emails, and events without leaving 8ity or duplicating information.",
        tags: ["Drive", "Sheets", "Gmail", "Calendar"],
      },
      {
        icon: "◇",
        label: "Payments",
        title: "Stripe Billing",
        body: "Subscriptions, checkout, and webhooks connected to reporting and reconciliation so revenue always stays visible.",
        tags: ["Subscriptions", "Checkout", "Webhooks", "Invoicing"],
      },
    ],
    connectedEyebrow: "Connected ERP",
    connectedTitle: "Data enters once. Your whole team benefits.",
    connectedBody:
      "Information flows across finance, CRM, documents, and projects without copying, pasting, or rebuilding context.",
    connected: [
      ["01", "Finance", "Balances, transactions, cash flow, and runway in real time."],
      ["02", "CRM", "Contacts, pipeline, and opportunities that always stay current."],
      ["03", "Data & documents", "Files, emails, and records synced into one shared context."],
      ["04", "Tasks & projects", "Kanban, calendar, ownership, and automations."],
    ],
    toolsEyebrow: "Complete toolkit",
    toolsTitle: "And 12 more tools, ready.",
    toolsBody:
      "One account, consistent permissions, and shared data across all your tools.",
    tools: [
      ["▤", "Docs", "Collaborative documents with BlockNote."],
      ["□", "Notes", "Quick notes assisted by AI."],
      ["⌁", "Drive", "Files connected to Google Drive."],
      ["✉", "Mail", "Inbox with intelligent classification."],
      ["▦", "Calendar", "Two-way sync with Google."],
      ["◱", "Chat", "Real-time messaging."],
      ["♢", "Reminders", "Context-aware reminders."],
      ["⌘", "Code", "Sandbox and snippets with E2B."],
      ["▥", "Directory", "Companies, contacts, and teams."],
      ["⌁", "Automations", "Workflows and scheduled jobs."],
      ["◎", "MCP Servers", "Extensions and proprietary tools."],
      ["⊞", "Workspaces", "Isolated projects and teams."],
    ],
    dashboard: {
      eyebrow: "Unified dashboard",
      title: "Your company in one view.",
      body: "Financial KPIs, sales pipeline, tasks, reminders, and synced data stay updated in one place.",
      points: [
        "Live runway, burn, and MRR",
        "CRM pipeline and deals to close",
        "Alerts for important changes",
        "Custom widgets for every workspace",
      ],
      panelTitle: "Operations overview",
      panelStatus: "Synced now",
    },
    security: {
      eyebrow: "Security · Privacy",
      title: "Your data stays yours.",
      body: "End-to-end protection, secured bank credentials, and clear controls over what every integration can read or execute.",
      items: [
        ["End-to-end", "Encryption at rest and in transit."],
        ["Bank vault", "Credentials stay outside 8ity servers."],
        ["Zero retention", "Compatible models do not train on your data."],
        ["Hosting LatAm", "Infrastructure prepared for regional operations."],
      ],
    },
    cta: {
      eyebrow: "One ERP, fully connected",
      title: "Fewer disconnected tools. More clarity to operate.",
      body: "Start with the connections you need today and activate new capabilities as your company grows.",
      primary: "Start for free",
      secondary: "View pricing",
    },
  },
} as const;

const bankNames = [
  "BBVA",
  "Santander",
  "Banorte",
  "Banamex",
  "Itaú",
  "HSBC",
  "Scotiabank",
  "Bradesco",
  "Nu",
  "Mercado Pago",
];

export function IntegrationsPage() {
  const { language } = useLanguage();
  const t = pageCopy[language];

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <section className="relative border-b border-border">
        <div aria-hidden className="hero-rings pointer-events-none absolute inset-0 opacity-80" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_0%,rgba(89,187,149,.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-[1200px] px-5 pb-16 pt-20 sm:px-8 lg:pt-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mx-auto inline-flex items-center rounded-full border border-white/12 bg-white/[.035] px-4 py-2 text-[11px] text-white/60">
                <span aria-hidden className="mr-2 text-accent">✦</span>
                {t.hero.eyebrow}
              </p>
              <h1 className="text-balance mx-auto mt-8 max-w-3xl text-[clamp(2.8rem,6.5vw,5.25rem)] font-medium leading-[.98] tracking-[-.045em]">
                {t.hero.title}
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {t.hero.body}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href="#conexiones"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07100c] transition-transform hover:-translate-y-0.5"
                >
                  {t.hero.primary}
                </Link>
                <Link
                  href="/agentes-ia"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-white/50"
                >
                  {t.hero.secondary}
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-16">
            <EcosystemMap copy={t.map} />
          </Reveal>
        </div>
      </section>

      <section id="conexiones" className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
        <SectionIntro
          eyebrow={t.integrationsEyebrow}
          title={t.integrationsTitle}
          body={t.integrationsBody}
        />

        <Reveal className="mt-12">
          <div className="rounded-[1.5rem] border border-border bg-white/[.025] px-5 py-8 sm:px-8">
            <p className="text-center font-mono text-[10px] uppercase tracking-[.24em] text-accent">
              {t.banksLabel}
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-4">
              {bankNames.map((bank) => (
                <span
                  key={bank}
                  className="text-sm font-medium text-white/45 sm:text-base"
                >
                  {bank}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <StaggerContainer className="mt-5 grid gap-5 md:grid-cols-2">
          {t.integrations.map((integration) => (
            <StaggerItem key={integration.title}>
              <IntegrationCard integration={integration} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
        <SectionIntro
          eyebrow={t.toolsEyebrow}
          title={t.toolsTitle}
          body={t.toolsBody}
          centered
        />
        <StaggerContainer className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {t.tools.map(([icon, title, body]) => (
            <StaggerItem key={title}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-white/[.025] p-5 transition-colors hover:border-accent/30 hover:bg-accent/[.035]">
                <IconBadge icon={icon} />
                <div>
                  <h3 className="text-sm font-medium">{title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    {body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="relative mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
        <div
          aria-hidden
          className="security-grid pointer-events-none absolute inset-0 opacity-35"
        />
        <div className="relative">
          <SectionIntro
            eyebrow={t.security.eyebrow}
            title={t.security.title}
            body={t.security.body}
            centered
          />
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.security.items.map(([title, body]) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-border bg-background/80 p-5">
                  <IconBadge icon="✓" />
                  <h3 className="mt-8 text-sm font-medium">{title}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    {body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-accent/20 bg-[linear-gradient(135deg,rgba(89,187,149,.14),rgba(3,8,16,.7)_58%)] px-6 py-16 text-center sm:px-10 sm:py-20">
            <div
              aria-hidden
              className="hero-grid pointer-events-none absolute inset-0 opacity-50"
            />
            <div className="relative">
              <Eyebrow>{t.cta.eyebrow}</Eyebrow>
              <h2 className="text-balance mx-auto mt-5 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.03] tracking-[-.04em]">
                {t.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
                {t.cta.body}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Link
                  href="https://8ity.org/register"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#07100c] transition-transform hover:-translate-y-0.5"
                >
                  {t.cta.primary}
                </Link>
                <Link
                  href="/precios"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition-colors hover:border-white/50"
                >
                  {t.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[.26em] text-accent">
      <span aria-hidden className="mr-2">
        ◎
      </span>
      {children}
    </p>
  );
}

function SectionIntro({
  eyebrow,
  title,
  body,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  centered?: boolean;
}) {
  return (
    <Reveal>
      <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="text-balance mt-5 text-[clamp(2.1rem,5vw,3.75rem)] font-medium leading-[1.04] tracking-[-.04em]">
          {title}
        </h2>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">{body}</p>
      </div>
    </Reveal>
  );
}

function IconBadge({ icon }: { icon: string }) {
  return (
    <span
      aria-hidden
      className="grid size-10 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/[.07] text-sm text-accent"
    >
      {icon}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/[.025] px-3 py-1.5 text-[10px] text-white/55">
      {children}
    </span>
  );
}

function IntegrationCard({
  integration,
}: {
  integration: {
    icon: string;
    label: string;
    title: string;
    body: string;
    tags: readonly string[];
  };
}) {
  return (
    <article className="group h-full rounded-[1.5rem] border border-border bg-[linear-gradient(145deg,rgba(89,187,149,.09),rgba(255,255,255,.02)_58%)] p-6 transition-colors hover:border-accent/30 sm:p-7">
      <div className="flex items-start gap-4">
        <IconBadge icon={integration.icon} />
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[.2em] text-white/40">
            {integration.label}
          </p>
          <h3 className="mt-2 text-xl font-medium tracking-[-.02em]">
            {integration.title}
          </h3>
        </div>
      </div>
      <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground">
        {integration.body}
      </p>
      <div className="mt-6 flex flex-wrap gap-2">
        {integration.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}

function EcosystemMap({
  copy,
}: {
  copy: {
    title: string;
    status: string;
    center: string;
    nodes: readonly string[];
  };
}) {
  const n = copy.nodes.length;
  const pts = copy.nodes.map((node, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return { node, x: 50 + Math.cos(a) * 41, y: 50 + Math.sin(a) * 35 };
  });

  return (
    <div className="relative mx-auto aspect-[1.5/1] w-full max-w-[920px] overflow-hidden rounded-[2rem] border border-border bg-[#071019]/80 p-5 shadow-[0_35px_120px_rgba(0,0,0,.35)] sm:p-7">
      <div aria-hidden className="hero-grid absolute inset-0 opacity-80" />
      <div aria-hidden className="absolute inset-[13%] rounded-full border border-accent/10" />
      <div aria-hidden className="absolute inset-[25%] rounded-full border border-accent/15" />
      <div aria-hidden className="absolute inset-[37%] rounded-full border border-accent/20" />

      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.2em] text-white/40">
        <span>{copy.title}</span>
        <span className="inline-flex items-center gap-2 text-accent">
          <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(89,187,149,.8)]" />
          {copy.status}
        </span>
      </div>

      <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full text-accent/25" fill="none">
        {pts.map((p) => (
          <line key={p.node} x1="50" y1="50" x2={p.x} y2={p.y} stroke="currentColor" strokeWidth=".3" />
        ))}
      </svg>

      <div className="absolute left-1/2 top-1/2 z-10 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-accent/30 bg-[#0b1718] shadow-[0_0_70px_rgba(89,187,149,.22)]">
        <Image src="/8ity-orb.webp" width={34} height={34} alt="" />
        <span className="mt-1.5 text-sm font-semibold">{copy.center}</span>
      </div>

      {pts.map((p) => (
        <div
          key={p.node}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/12 bg-[#0a1119]/90 px-3.5 py-1.5 text-xs text-white/70"
        >
          <span className="mr-2 inline-block size-1.5 rounded-full bg-accent" />
          {p.node}
        </div>
      ))}
    </div>
  );
}

