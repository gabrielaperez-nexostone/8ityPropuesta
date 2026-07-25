"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Dialog } from "@/components/ui/dialog";
import { AgentShowcase } from "@/components/sections/agent-showcase";
import { IntelligenceTimeline } from "@/components/sections/intelligence-timeline";
import { useLanguage } from "@/providers/language-provider";

const EASE = [0.16, 1, 0.3, 1] as const;

const PRODUCT_SHOTS = {
  dashboard: "/product/dashboard.webp",
  aiAgents: "/product/ai-agents.webp",
  mail: "/product/mail.webp",
  crm: "/product/crm.webp",
  automations: "/product/automations.webp",
} as const;

const STACK_SHOTS = [
  PRODUCT_SHOTS.crm,
  PRODUCT_SHOTS.mail,
  PRODUCT_SHOTS.aiAgents,
  PRODUCT_SHOTS.automations,
] as const;

const screenshotAlts = {
  es: {
    dashboard: "Dashboard unificado de 8ity",
    stack: "Vista de la plataforma 8ity",
  },
  en: {
    dashboard: "8ity unified dashboard",
    stack: "8ity platform view",
  },
} as const;

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: .3 },
  transition: { duration: .9, ease: EASE },
} as const;

const copy = {
  es: {
    eyebrow: "Sistema operativo empresarial · IA",
    heroTitle: "El sistema operativo de tu empresa.",
    getStarted: "Empezar",
    contact: "Contáctanos",
    heroQuotes: [
      "Revolucionamos la gestión empresarial con tecnología de punta, potenciando tu operación.",
      "Finanzas, proyectos, personas y datos en un solo lugar, conectados por IA.",
      "Menos herramientas, menos trabajo manual, mejores decisiones.",
    ],
    learnMore: "Saber más",
    scaleLine1: "Un ERP inteligente",
    scaleBefore: "para ",
    scaleAfter: ".",
    scaleCta: "Empezar",
    scaleTiles: [
      { label: "Finanzas", word: "Finanzas" },
      { label: "CRM", word: "Ventas" },
      { label: "Proyectos", word: "Proyectos" },
      { label: "Documentos", word: "Documentos" },
      { label: "Tareas", word: "Tareas" },
      { label: "Automatizaciones", word: "Flujos" },
      { label: "Personas", word: "Personas" },
      { label: "8ity AI", word: "Decisiones" },
    ],
    redefTitle: "Redefiniendo lo posible con IA.",
    redefBody: "Descubre una nueva era de gestión con 8ity, donde la inteligencia artificial convierte limitaciones en oportunidades. Redefine lo que tu operación puede lograr.",
    watchVideo: "Ver demo",
    redefStats: [["80%", "Esfuerzo ahorrado"], ["50+", "Conexiones con apps"]],
    redefChips: ["Finanzas", "Proyectos", "CRM"],
    redefAnnotation: ["10x", "Datos analizados"],
    glassCard: { title: "Seguridad con IA", index: "01", body: "Permisos y trazabilidad en cada acción" },
    teamEyebrow: "Para tu equipo",
    teamTitle: "Cada área trabaja mejor. Toda la empresa avanza junta.",
    teamBody: "8ity adapta la experiencia a cada equipo, mientras mantiene datos, permisos y procesos conectados en una sola operación.",
    teamRoles: [
      { number: "01", title: "Dirección", body: "Una vista clara de resultados, prioridades y riesgos para decidir con contexto." },
      { number: "02", title: "Finanzas", body: "Bancos, flujo, facturación y reportes organizados con menos trabajo manual." },
      { number: "03", title: "Ventas", body: "CRM, clientes y seguimientos conectados con el resto de la operación." },
      { number: "04", title: "Operaciones", body: "Proyectos, tareas y responsables alineados para ejecutar sin perder información." },
    ],
    stackLabel: "Sobre 8ity",
    stackCta: "Más detalles",
    stackCards: [
      { num: "01", lead: "Operación unificada", sub: " para toda la organización", title: "Todo en un solo lugar", body: "8ity centraliza procesos, documentos, finanzas, proyectos y herramientas en un ecosistema donde la información fluye entre todas las áreas." },
      { num: "02", lead: "IA con contexto real", sub: " que entiende tu negocio", title: "Inteligencia que conoce tu empresa", body: "Los agentes comprenden datos, usuarios, documentos y procesos para analizar, crear, automatizar y ejecutar acciones con contexto completo." },
      { num: "03", lead: "Personalización total", sub: " sin procesos rígidos", title: "Se adapta a tu forma de trabajar", body: "Configura módulos, dashboards, formularios, roles, permisos, workspaces y agentes sin depender de desarrollos complejos." },
      { num: "04", lead: "Arquitectura abierta", sub: " para conectar tu ecosistema", title: "Conecta más y administra menos", body: "Integra tus servicios, APIs y servidores MCP en un mismo entorno para reducir duplicidad, proveedores y costos operativos." },
    ],
    faqTitle: "FAQs",
    faqBody: "Encuentra respuestas a las dudas más comunes sobre 8ity. Descubre cómo un ERP con IA puede transformar tu empresa.",
    faq: [
      ["¿8ity es un ERP o un CRM?", "8ity es un ERP inteligente y modular. El CRM es una herramienta adicional incluida para gestionar pipeline, cuentas y seguimientos dentro del mismo contexto operativo."],
      ["¿Cómo beneficia la IA a mi empresa?", "La IA automatiza tareas repetitivas, mejora la toma de decisiones con datos y personaliza la experiencia de cada equipo, reduciendo horas de trabajo manual."],
      ["¿Qué tan seguros están mis datos?", "El acceso se organiza por organización, workspace, rol, módulo y acción. Automatizaciones y agentes quedan sujetos a permisos y trazabilidad."],
      ["¿Puedo personalizar los módulos?", "Sí. Activa los módulos que necesita tu empresa y conecta procesos, datos o sistemas propios sin forzar una operación rígida."],
    ],
    visionTitle: "Transformando visión en realidad.",
    visionBody: "Convertimos ideas en operaciones reales. Con el poder de la IA transformamos conceptos visionarios en resultados tangibles para tu empresa.",
    checklist: [
      "Procesos con IA", "Agentes inteligentes",
      "Módulos a tu medida", "Predicción con datos",
      "Lenguaje natural avanzado", "Integraciones inteligentes",
      "Visión de punta", "Automatización eficiente",
    ],
    form: { title: "Contáctanos", firstName: "Nombre", lastName: "Apellido", email: "Correo", company: "Empresa", submit: "Enviar", success: "¡Gracias! Te contactamos pronto." },
    newsletter: { title: "Únete al newsletter", placeholder: "Tu correo", button: "Suscribirme", success: "¡Listo! Te avisaremos de las novedades." },
    footerCols: [
      { title: "Empresa", links: [["Sobre 8ity", "#sobre-8ity"], ["Precios", "/precios"]] },
      { title: "Soporte", links: [["Contáctanos", "#footer"], ["Preguntas", "#faq"]] },
    ],
    footerTagTitle: "ERP & IA",
    footerTagline: "8ity es tu destino para gestionar toda tu empresa con inteligencia artificial.",
    footerSignature: "8ity — ERP inteligente",
    rights: "Todos los derechos reservados.",
  },
  en: {
    eyebrow: "Enterprise operating system · AI",
    heroTitle: "The operating system for your company.",
    getStarted: "Get Started",
    contact: "Contact Us",
    heroQuotes: [
      "We revolutionize company management with cutting-edge technology, empowering your operation.",
      "Finance, projects, people and data in one place, connected by AI.",
      "Fewer tools, less manual work, better decisions.",
    ],
    learnMore: "Learn More",
    scaleLine1: "One intelligent ERP",
    scaleBefore: "for ",
    scaleAfter: ".",
    scaleCta: "Get Started",
    scaleTiles: [
      { label: "Finance", word: "Finance" },
      { label: "CRM", word: "Sales" },
      { label: "Projects", word: "Projects" },
      { label: "Documents", word: "Documents" },
      { label: "Tasks", word: "Tasks" },
      { label: "Automations", word: "Workflows" },
      { label: "People", word: "People" },
      { label: "8ity AI", word: "Decisions" },
    ],
    redefTitle: "Redefining possibilities through AI.",
    redefBody: "Unlock a new era of management with 8ity, where artificial intelligence transforms limitations into opportunities. Redefine what your operation can achieve.",
    watchVideo: "Watch a demo",
    redefStats: [["80%", "Effort saved"], ["50+", "App connections"]],
    redefChips: ["Finance", "Projects", "CRM"],
    redefAnnotation: ["10x", "Data analyzed"],
    glassCard: { title: "Cybersecurity with AI", index: "01", body: "Permissions and auditability on every action" },
    teamEyebrow: "For your team",
    teamTitle: "Every area works better. The whole company moves together.",
    teamBody: "8ity adapts the experience to every team while keeping data, permissions and processes connected in one operation.",
    teamRoles: [
      { number: "01", title: "Leadership", body: "A clear view of results, priorities and risks to make informed decisions." },
      { number: "02", title: "Finance", body: "Banking, cash flow, billing and reporting organized with less manual work." },
      { number: "03", title: "Sales", body: "CRM, customers and follow-ups connected to the rest of the operation." },
      { number: "04", title: "Operations", body: "Projects, tasks and owners aligned to execute without losing information." },
    ],
    stackLabel: "About 8ity",
    stackCta: "More Details",
    stackCards: [
      { num: "01", lead: "Unified operations", sub: " for the entire organization", title: "Everything in one place", body: "8ity centralizes processes, documents, finance, projects and tools in an ecosystem where information flows across every area." },
      { num: "02", lead: "AI with real context", sub: " that understands your business", title: "Intelligence that knows your company", body: "Agents understand data, users, documents and processes to analyze, create, automate and execute actions with full context." },
      { num: "03", lead: "Complete customization", sub: " without rigid processes", title: "Built around how you work", body: "Configure modules, dashboards, forms, roles, permissions, workspaces and agents without relying on complex development." },
      { num: "04", lead: "Open architecture", sub: " to connect your ecosystem", title: "Connect more and manage less", body: "Bring services, APIs and MCP servers into one environment to reduce duplication, vendor dependency and operating costs." },
    ],
    faqTitle: "Frequently Asked Questions",
    faqBody: "Find answers to the most common inquiries about 8ity. Explore how an AI-first ERP can transform your business.",
    faq: [
      ["Is 8ity an ERP or a CRM?", "8ity is an intelligent, modular ERP. CRM is an additional included tool for managing pipeline, accounts and follow-ups within the same operating context."],
      ["How can AI benefit my business?", "AI automates repetitive tasks, improves decision-making with data and personalizes each team's experience, cutting hours of manual work."],
      ["How secure is my data?", "Access is organized by organization, workspace, role, module and action. Automations and agents are subject to permissions and auditability."],
      ["Can modules be customized?", "Yes. Enable the modules your company needs and connect custom processes, data or systems without forcing a rigid operation."],
    ],
    visionTitle: "Transforming vision into reality.",
    visionBody: "We turn bold ideas into groundbreaking operations. Harnessing the power of AI, we transform visionary concepts into tangible results for your company.",
    checklist: [
      "AI-powered process", "Intelligent agents",
      "Custom modules", "Data-driven prediction",
      "Advanced natural language", "Smart integrations",
      "Cutting-edge vision", "Efficient automation",
    ],
    form: { title: "Contact Us", firstName: "First Name", lastName: "Last Name", email: "Email", company: "Company", submit: "Submit", success: "Thanks! We will reach out soon." },
    newsletter: { title: "Join a Newsletter", placeholder: "Enter Your Email", button: "Subscribe", success: "Done! We will keep you posted." },
    footerCols: [
      { title: "Company", links: [["About Us", "#sobre-8ity"], ["Pricing", "/precios"]] },
      { title: "Support", links: [["Contact Us", "#footer"], ["FAQs", "#faq"]] },
    ],
    footerTagTitle: "ERP & AI",
    footerTagline: "8ity is your destination for managing your whole company with artificial intelligence.",
    footerSignature: "8ity — Intelligent ERP",
    rights: "All Rights Reserved.",
  },
} as const;

function PillButton({ children, variant = "white" }: { children: React.ReactNode; variant?: "white" | "outline" }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${variant === "white" ? "bg-white text-[#0a0a0a] hover:-translate-y-0.5" : "border border-white/25 text-white hover:border-white/60"}`}>
      {children}
    </span>
  );
}

function ProductScreenshot({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`group isolate overflow-hidden rounded-2xl border border-white/10 bg-[#071019] shadow-[0_24px_70px_rgba(0,0,0,.35)] ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1280px) 1100px, (min-width: 768px) 82vw, 94vw"
        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[.06]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/25 to-transparent"
      />
    </div>
  );
}

export function EvoLanding() {
  const { language } = useLanguage();
  const t = copy[language];
  const imageAlt = screenshotAlts[language];

  return (
    <div className="relative overflow-x-clip bg-background text-foreground">
      <div aria-hidden className="texture-grain pointer-events-none absolute inset-0 z-0" />
      <div aria-hidden className="texture-drift pointer-events-none absolute inset-0 z-0" />
      <EvoHero />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 sm:px-8">

        {/* AGENT SHOWCASE (PC collage) */}
        <AgentShowcase />

        {/* CÓMO FUNCIONA — título */}
        <IntelligenceTimeline variant="header" />

        {/* statement (tiles) */}
        <ScaleStatement t={t} h={heroCopy[language]} />

        {/* CÓMO FUNCIONA — timeline */}
        <IntelligenceTimeline variant="body" />

        {/* REDEFINING */}
        <section className="grid gap-12 pb-24 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="max-w-md text-3xl font-medium leading-[1.15] tracking-[-.02em] sm:text-4xl"><ScrollWords text={t.redefTitle} /></h2>
            <motion.p {...fadeUp} className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">{t.redefBody}</motion.p>
            <motion.div {...fadeUp} className="mt-7 flex flex-wrap items-center gap-4">
              <Dialog trigger={<button><PillButton>{t.learnMore}</PillButton></button>} />
              <a href="https://8ity.org/" className="inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-white">
                <span aria-hidden className="grid size-9 place-items-center rounded-full border border-white/25 text-[10px]">▶</span>
                {t.watchVideo}
              </a>
            </motion.div>
            <motion.div {...fadeUp} className="mt-10 flex gap-14">
              {t.redefStats.map(([value, label]) => (
                <div key={label}>
                  <p className="text-3xl font-medium tracking-[-.02em]">{value}</p>
                  <p className="mt-1.5 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </motion.div>
            <motion.div {...fadeUp} className="mt-10 flex items-center gap-4">
              <div className="flex flex-wrap gap-2">
                {t.redefChips.map((chip) => (
                  <span key={chip} className="rounded-full border border-white/15 px-3.5 py-1.5 text-[11px] text-white/70">{chip}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeUp} className="relative min-h-[26rem]">
            <ProductScreenshot
              src={PRODUCT_SHOTS.dashboard}
              alt={imageAlt.dashboard}
              className="absolute right-0 top-0 h-[85%] w-[82%]"
            />
            <div className="absolute left-0 top-[12%]">
              <p className="text-2xl font-medium">{t.redefAnnotation[0]}</p>
              <p className="mt-1 text-[11px] text-muted-foreground">{t.redefAnnotation[1]}</p>
              <svg width="150" height="40" viewBox="0 0 150 40" aria-hidden className="mt-2">
                <path d="M0 8 H96 L118 30" fill="none" stroke="rgba(255,255,255,.8)" strokeWidth="1.5" />
                <circle cx="120" cy="32" r="4.5" fill="#fff" />
              </svg>
            </div>
            <div className="absolute bottom-[4%] left-[6%] w-60 rounded-2xl border border-accent/25 bg-[rgba(89,187,149,.06)] p-5 shadow-[0_30px_80px_rgba(0,0,0,.5)] backdrop-blur-md">
              <p className="text-base font-medium leading-snug">{t.glassCard.title}</p>
              <div className="mt-5 flex items-start gap-3 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] text-accent">{t.glassCard.index}</span>
                <p className="text-[11px] leading-5 text-white/65">{t.glassCard.body}</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FOR YOUR TEAM */}
        <TeamSection t={t} />

        {/* STACKED CARDS */}
        <StackDeck t={t} imageAlt={imageAlt.stack} />


      </div>
    </div>
  );
}

const scaleTileRadius = [1, .88, 1.08, .94, 1.04, .86, 1.06, .96];

function ScaleStatement({
  t,
  h,
}: {
  t: (typeof copy)["es"] | (typeof copy)["en"];
  h: (typeof heroCopy)["es"] | (typeof heroCopy)["en"];
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const fieldRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoveredRef = useRef<number | null>(null);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let angle = -Math.PI / 2;
    let last = performance.now();
    let frame = 0;
    const n = t.scaleTiles.length;

    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (hoveredRef.current === null && !reduced) angle += (dt / 1000) * .12;
      const field = fieldRef.current;
      if (field) {
        const rect = field.getBoundingClientRect();
        const rx = rect.width * .36;
        const ry = rect.height * .40;
        tileRefs.current.forEach((el, i) => {
          if (!el) return;
          const theta = angle + (i * Math.PI * 2) / n;
          const bob = reduced ? 0 : Math.sin(now / 900 + i * 1.7) * 7;
          const x = Math.cos(theta) * rx * scaleTileRadius[i];
          const y = Math.sin(theta) * ry * scaleTileRadius[i] + bob;
          el.style.transform = `translate(-50%,-50%) translate(${x}px,${y}px)`;
        });
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [t.scaleTiles.length]);

  return (
    <section className="relative -mx-5 mb-24 min-h-[44rem] overflow-hidden sm:-mx-8">
      <div ref={fieldRef} aria-hidden className="absolute inset-[3%]" />
      {t.scaleTiles.map((tile, i) => (
        <div
          key={tile.label}
          ref={(el) => { tileRefs.current[i] = el; }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className={`absolute left-1/2 top-1/2 z-10 hidden w-max cursor-pointer rounded-xl border p-5 transition-colors duration-300 md:block ${hovered === i ? "border-accent/60 bg-[rgba(89,187,149,.12)]" : "border-accent/12 bg-[rgba(89,187,149,.035)]"}`}
        >
          {i === t.scaleTiles.length - 1 ? (
            <div className="flex items-center gap-2.5">
              <Image src="/8ity-orb.webp" alt="" width={22} height={22} />
              <p className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[.14em] text-accent">{tile.label}</p>
            </div>
          ) : (
            <p className="whitespace-nowrap font-mono text-[8px] uppercase tracking-[.14em] text-accent">{tile.label}</p>
          )}
          <div className="mt-3.5 space-y-2" aria-hidden>
            <div className="h-1 w-28 rounded-full bg-white/12" />
            <div className="h-1 w-20 rounded-full bg-white/8" />
            <div className="h-1 w-12 rounded-full bg-accent/40" />
          </div>
        </div>
      ))}

      <div className="relative z-20 mx-auto flex min-h-[44rem] max-w-3xl flex-col items-center justify-center px-5 text-center">
        <motion.h2 {...fadeUp} className="text-balance text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-.03em]">
          <span className="block">{h.top}</span>
          <span className="block">{h.bottom}</span>
        </motion.h2>
      </div>
    </section>
  );
}

type StackCardData = { readonly num: string; readonly lead: string; readonly sub: string; readonly title: string; readonly body: string };

function StackDeck({
  t,
  imageAlt,
}: {
  t: (typeof copy)["es"] | (typeof copy)["en"];
  imageAlt: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="sobre-8ity" ref={ref} className="scroll-mt-28 pb-24">
      {t.stackCards.map((card, index) => (
        <StackCard
          key={card.num}
          card={card}
          index={index}
          total={t.stackCards.length}
          progress={scrollYProgress}
          cta={t.stackCta}
          image={STACK_SHOTS[index]}
          imageAlt={`${imageAlt}: ${card.title}`}
        />
      ))}
    </section>
  );
}

function TeamSection({ t }: { t: (typeof copy)["es"] | (typeof copy)["en"] }) {
  return (
    <section id="para-tu-equipo" className="scroll-mt-28 pb-24 pt-8">
      <div className="grid gap-7 lg:grid-cols-[.95fr_1.05fr] lg:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[.2em] text-accent">
            {t.teamEyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-medium leading-[1.08] tracking-[-.03em] sm:text-4xl">
            <ScrollWords text={t.teamTitle} />
          </h2>
        </div>
        <motion.p
          {...fadeUp}
          className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end"
        >
          {t.teamBody}
        </motion.p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {t.teamRoles.map((role) => (
          <ScrollRise
            key={role.title}
            className="group min-h-56 rounded-2xl border border-white/10 bg-white/[.025] p-6 transition-colors hover:border-accent/35 hover:bg-accent/[.035]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] text-accent">{role.number}</span>
              <span
                aria-hidden
                className="size-1.5 rounded-full border border-accent/70 transition-all group-hover:bg-accent group-hover:shadow-[0_0_16px_rgba(89,187,149,.75)]"
              />
            </div>
            <h3 className="mt-14 text-lg font-medium">{role.title}</h3>
            <p className="mt-3 text-xs leading-6 text-muted-foreground">{role.body}</p>
          </ScrollRise>
        ))}
      </div>
    </section>
  );
}

function StackCard({
  card,
  index,
  total,
  progress,
  cta,
  image,
  imageAlt,
}: {
  card: StackCardData;
  index: number;
  total: number;
  progress: MotionValue<number>;
  cta: string;
  image: string;
  imageAlt: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const topPx = 96 + index * 60;
  const { scrollYProgress: enter } = useScroll({ target: wrapRef, offset: ["start 98%", "start 42%"] });

  const covered = useTransform(progress, (p) => Math.min(1, Math.max(0, p * total - index - .55)));
  const radius = useTransform(enter, [0, 1], [26, 18]);
  const scale = useTransform(covered, [0, 1], [1, .95]);

  return (
    <div ref={wrapRef} className="sticky" style={{ top: `${topPx}px` }}>
      <div className="w-full">
        <motion.article
          style={{ borderRadius: radius, scale }}
          className="isolate mx-auto mb-5 min-h-[32rem] w-full max-w-[1136px] origin-top border border-white/10 bg-[linear-gradient(180deg,#0d131d,#070b12)] p-5 shadow-[0_-24px_70px_rgba(0,0,0,.65)] will-change-transform sm:min-h-[38rem] sm:p-8 lg:min-h-[min(46rem,78svh)] lg:p-10"
        >
          <div className="mx-auto max-w-[1104px]">
            <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
              <p className="hidden text-sm md:block">
                <span className="font-semibold">{card.lead}</span>
                <span className="text-white/50">{card.sub}</span>
              </p>
              <span className="flex items-center gap-4 text-white/90">
                <span aria-hidden className="h-px w-8 bg-white/60" />
                <span className="text-2xl font-medium">{card.num}</span>
              </span>
            </header>
            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-start">
              <h3 className="text-[clamp(2.2rem,4.4vw,3.4rem)] font-medium leading-[1.05] tracking-[-.02em]">{card.title}</h3>
              <div className="lg:justify-self-end lg:text-left">
                <p className="max-w-md text-sm leading-7 text-muted-foreground">{card.body}</p>
                <a href="https://8ity.org/" className="mt-6 inline-block rounded-md border border-white/25 px-5 py-2.5 text-sm text-white/85 transition-colors hover:border-white/60 hover:text-white">
                  {cta}
                </a>
              </div>
            </div>
            <ScrollParallax className="mt-10 h-[clamp(15rem,32vw,24rem)] overflow-hidden rounded-xl">
              <ProductScreenshot
                src={image}
                alt={imageAlt}
                className="relative h-full w-full rounded-xl"
              />
            </ScrollParallax>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 92%", "start 55%"] });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, index) => (
        <ScrollWord
          key={index}
          word={word}
          last={index === words.length - 1}
          progress={scrollYProgress}
          range={[index / words.length, Math.min(1, (index + 1) / words.length + .15)]}
        />
      ))}
    </span>
  );
}

function ScrollWord({ word, last, progress, range }: { word: string; last: boolean; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [26, 0]);
  return <motion.span aria-hidden style={{ opacity, y }} className="inline-block will-change-transform">{word}{last ? "" : " "}</motion.span>;
}

function ScrollRise({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 96%", "start 62%"] });
  const y = useTransform(scrollYProgress, [0, 1], [64, 0]);
  return <motion.div ref={ref} style={{ y, opacity: scrollYProgress }} className={className}>{children}</motion.div>;
}

function ScrollParallax({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

const heroCopy = {
  es: {
    top: "Menos herramientas,",
    bottom: "más resultados.",
    tagline: "La gestión del mañana.",
    paragraph: "Finanzas, CRM, tareas, documentos, agentes IA y más. Integrado con tu banco, Google Workspace y Stripe.",
    primary: "Empezar",
    secondary: "Cómo funciona",
  },
  en: {
    top: "Fewer tools,",
    bottom: "better results.",
    tagline: "Management of tomorrow.",
    paragraph: "Finance, CRM, tasks, documents, AI agents and more. Integrated with your bank, Google Workspace and Stripe.",
    primary: "Get Started",
    secondary: "How it works",
  },
} as const;

function FlowCurves() {
  const reduce = useReducedMotion();
  const lines = [
    { d: "M-120 560 C 240 460, 560 660, 860 520 S 1420 380, 1620 470", dur: 8, delay: 0, dash: "10 16", y: 26 },
    { d: "M-120 660 C 280 600, 600 780, 920 600 S 1460 470, 1660 560", dur: 10, delay: 1.1, dash: "3 18", y: -20 },
    { d: "M-120 470 C 300 370, 640 560, 980 410 S 1500 290, 1680 370", dur: 9, delay: .6, dash: "2 20", y: 32 },
    { d: "M-120 760 C 320 720, 660 860, 1000 700 S 1540 590, 1720 660", dur: 12, delay: 1.7, dash: "8 22", y: -28 },
  ];
  return (
    <svg aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="flowStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(89,187,149,0)" />
          <stop offset=".5" stopColor="rgba(126,220,180,.5)" />
          <stop offset="1" stopColor="rgba(89,187,149,0)" />
        </linearGradient>
      </defs>
      {lines.map((l, i) => (
        <motion.g key={i} animate={reduce ? undefined : { y: [0, l.y, 0] }} transition={{ duration: l.dur, repeat: Infinity, ease: "easeInOut", delay: l.delay }}>
          <path d={l.d} stroke="url(#flowStroke)" strokeWidth="6" strokeLinecap="round" />
          {!reduce && (
            <motion.path
              d={l.d}
              stroke="rgba(160,245,205,.85)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={l.dash}
              animate={{ strokeDashoffset: [0, -480] }}
              transition={{ duration: l.dur * .85, repeat: Infinity, ease: "linear" }}
            />
          )}
        </motion.g>
      ))}
    </svg>
  );
}

export function EvoHero() {
  const { language } = useLanguage();
  const t = copy[language];
  const h = heroCopy[language];
  const imageAlt = screenshotAlts[language].dashboard;
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((i) => (i + 1) % t.scaleTiles.length), 2600);
    return () => window.clearInterval(timer);
  }, [t.scaleTiles.length]);

  const word = t.scaleTiles[index].word;

  return (
    <section className="relative isolate flex min-h-[92vh] w-full flex-col overflow-hidden bg-background">
      {/* ambient glow */}
      <div aria-hidden className="absolute -right-[6%] top-[4%] h-[80vw] max-h-[1040px] w-[80vw] max-w-[1040px] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(89,187,149,.16),transparent_62%)] blur-2xl" />
      {/* left pleats */}
      <div aria-hidden className="absolute inset-y-0 left-0 w-[58%] opacity-50 [background:repeating-linear-gradient(100deg,rgba(120,220,180,.06)_0px,rgba(120,220,180,.06)_2px,transparent_2px,transparent_30px)] [mask-image:linear-gradient(90deg,#000_10%,transparent_75%)]" />
      {/* flowing curves */}
      <FlowCurves />
      {/* grain */}
      <div aria-hidden className="texture-grain pointer-events-none absolute inset-0" />
      {/* blur overlay over the whole hero background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1] bg-background/20 backdrop-blur-[6px]" />
      {/* smooth fade into next section */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 z-[1] h-48 bg-gradient-to-b from-transparent via-background/70 to-background" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] flex-1 items-center gap-14 px-6 py-28 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,.88fr)] lg:gap-14 lg:py-24">
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE }} className="w-full text-[clamp(2.1rem,4.6vw,4rem)] font-medium leading-[1] tracking-[-.035em] text-white">
            <span className="block">{t.scaleLine1}</span>
            <span className="block whitespace-nowrap">
              {t.scaleBefore}
              <span className="relative inline-block h-[1.25em] w-[10.25ch] overflow-hidden align-bottom text-left text-accent">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={word}
                    initial={{ x: "-70%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "70%", opacity: 0 }}
                    transition={{ duration: .5, ease: EASE }}
                    className="absolute inset-x-0 bottom-0 inline-block whitespace-nowrap"
                  >
                    {word}
                  </motion.span>
                </AnimatePresence>
              </span>
              {t.scaleAfter}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: .12 }}
            className="mt-7 max-w-xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8"
          >
            {h.paragraph}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: .2 }} className="mt-9 flex flex-wrap justify-center gap-3 lg:justify-start">
            <Dialog trigger={<button><PillButton>{h.primary} ›</PillButton></button>} />
            <a href="#como-funciona"><PillButton variant="outline">{h.secondary}</PillButton></a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 48, scale: .96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: .12 }}
          className="relative mx-auto min-w-0 w-full max-w-[560px]"
        >
          <div aria-hidden className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(circle_at_50%_50%,rgba(89,187,149,.2),transparent_68%)] blur-2xl" />
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#0d141d]/90 p-2 shadow-[0_36px_100px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-3"
          >
            <div className="flex h-9 items-center gap-1.5 px-2 sm:h-10 sm:px-3">
              <span className="size-2 rounded-full bg-white/22" />
              <span className="size-2 rounded-full bg-white/14" />
              <span className="size-2 rounded-full bg-accent/65" />
              <span className="ml-auto font-mono text-[8px] uppercase tracking-[.18em] text-white/35">
                8ity · workspace
              </span>
            </div>
            <div className="relative aspect-[30/17] overflow-hidden rounded-[.85rem] border border-white/10 bg-[#101720]">
              <Image
                src={PRODUCT_SHOTS.dashboard}
                alt={imageAlt}
                fill
                loading="eager"
                sizes="(max-width: 1023px) 90vw, 56vw"
                className="object-cover object-top"
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/18 via-transparent to-accent/5" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function EvoFooter() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <footer id="footer" className="relative overflow-hidden border-t border-border bg-[#02060c]">
      <div aria-hidden className="texture-grain pointer-events-none absolute inset-0 z-0" />
      <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.7fr_.7fr_1fr]">
          <div>
            <Link href="#top" className="flex items-center gap-2.5 text-xl font-semibold" aria-label="8ity, home">
              <Image src="/8ity-orb.webp" width={30} height={30} alt="" />
              8ity
            </Link>
            <div className="mt-7 flex gap-3">
              {["𝕏", "in", "ⓕ", "◎"].map((icon) => (
                <span key={icon} className="grid size-8 cursor-pointer place-items-center rounded-full border border-white/15 text-[11px] text-white/60 transition-colors hover:bg-white hover:text-[#0a0a0a]">{icon}</span>
              ))}
            </div>
          </div>

          {t.footerCols.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-medium">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-sm font-medium">{t.footerTagTitle}</p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">{t.footerTagline}</p>
            <p className="mt-6 text-xs text-white/45">{t.footerSignature}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} 8ity. {t.rights}</p>
          <Link href="https://8ity.org/" className="inline-flex items-center gap-2.5 transition-colors hover:text-foreground">
            <Image src="/8ity-orb.webp" width={18} height={18} alt="" />
            8ity.org
          </Link>
        </div>
      </div>
    </footer>
  );
}
