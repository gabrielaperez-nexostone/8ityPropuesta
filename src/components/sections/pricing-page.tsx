"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/stagger-container";
import { useLanguage } from "@/providers/language-provider";

const pricingCopy = {
  es: {
    creditPeriod: "AI credits / mes",
    hero: {
      badge: "Las mismas funciones en todos los planes · solo cambian los AI credits",
      title: "Un solo 8ity. Tantos créditos como necesites.",
      body: "Acceso completo a todas las integraciones, agentes y herramientas en cada plan. Solo escala el volumen de AI credits que utilizas para chats, agentes, transcripciones, OCR, imágenes y búsquedas.",
      note: "Por usuario, al mes. Cancela cuando quieras.",
    },
    plans: [
      {
        name: "Starter",
        eyebrow: "Para founders",
        icon: "↗",
        description: "Para founders en solitario y empresas en etapas tempranas.",
        price: "$12",
        period: "/mes · por usuario",
        credits: "2,000",
        features: [
          "2,000 AI credits al mes",
          "Acceso completo a todas las funcionalidades",
          "Todas las integraciones disponibles",
          "Top-ups disponibles cuando los necesites",
        ],
        cta: "Iniciar prueba de 3 días",
        footnote: "3 días gratis · cancela cuando quieras",
      },
      {
        name: "Growth",
        eyebrow: "Más popular",
        icon: "▥",
        description: "Para startups que están escalando sus operaciones.",
        price: "$39",
        period: "/mes · por usuario",
        credits: "7,000",
        features: [
          "7,000 AI credits al mes",
          "Acceso completo a todas las funcionalidades",
          "Todas las integraciones disponibles",
          "Soporte prioritario",
          "Top-ups disponibles cuando los necesites",
        ],
        cta: "Iniciar prueba de 3 días",
        footnote: "3 días gratis · cancela cuando quieras",
        featured: true,
      },
      {
        name: "Scale",
        eyebrow: "Mejor valor",
        icon: "✦",
        description: "Para startups en crecimiento y rondas de inversión.",
        price: "$99",
        period: "/mes · por usuario",
        credits: "18,000",
        features: [
          "18,000 AI credits al mes",
          "Acceso completo a todas las funcionalidades",
          "Todas las integraciones disponibles",
          "Success manager dedicado",
          "Reportes investor-ready",
          "Top-ups disponibles cuando los necesites",
        ],
        cta: "Iniciar prueba de 3 días",
        footnote: "3 días gratis · cancela cuando quieras",
      },
      {
        name: "Enterprise",
        eyebrow: "Enterprise",
        icon: "♕",
        description: "Soluciones a la medida para organizaciones grandes.",
        price: "Custom",
        period: "",
        credits: "",
        features: [
          "Créditos ilimitados negociables",
          "Deploy on-premise",
          "IA y agentes a la medida",
          "Seguridad y compliance avanzado",
          "Soporte dedicado 24/7",
          "SLA garantizados",
        ],
        cta: "Contactar ventas",
        footnote: "",
      },
    ],
    topups: {
      eyebrow: "Top-ups",
      title: "¿Se acabaron tus créditos del mes?",
      body: "Compra un boost cuando lo necesites. No expiran: se acumulan y se utilizan después de los créditos incluidos en tu plan.",
      buy: "Comprar",
      items: [
        {
          name: "Boost S",
          credits: "500",
          price: "$5",
          unit: "$0.0100 / crédito",
          badge: "",
        },
        {
          name: "Boost M",
          credits: "2,500",
          price: "$22",
          unit: "$0.0088 / crédito",
          badge: "Popular",
        },
        {
          name: "Boost L",
          credits: "10,000",
          price: "$79",
          unit: "$0.0079 / crédito",
          badge: "Mejor valor",
        },
      ],
    },
    included: {
      eyebrow: "Incluido en todos los planes",
      title: "Sin funciones bloqueadas. Solo créditos.",
      body: "Todos los planes desbloquean el mismo producto. Lo único que escala es cuánta inteligencia artificial puedes utilizar cada mes.",
      items: [
        {
          icon: "✦",
          title: "Agentes ilimitados",
          body: "Claude, Finy, Wapy, Cody, Designy, Researchy y los agentes personalizados que crees, incluyendo equipos en paralelo.",
        },
        {
          icon: "⌁",
          title: "Todas las integraciones",
          body: "Google Workspace, banca vía Syncfy, WhatsApp, Gmail, Drive, Calendar, CRM, Apollo, Perplexity y más.",
        },
        {
          icon: "⚡",
          title: "Todas las herramientas",
          body: "Notes, Projects, Calendar, Tasks, Finance, CRM, Reminders, Drive, Code, Design y Documents.",
        },
        {
          icon: "◇",
          title: "Flujos y automatizaciones",
          body: "Triggers, tareas programadas y workflows personalizados sin diferencias entre planes.",
        },
        {
          icon: "↗",
          title: "Multi-workspace",
          body: "Crea espacios separados para trabajo personal, empresa o proyectos e invita a los miembros que necesites.",
        },
        {
          icon: "♕",
          title: "Soporte cuando lo necesitas",
          body: "Comunidad en Starter, prioridad en Growth, success manager en Scale y soporte 24/7 con SLA en Enterprise.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Preguntas frecuentes.",
      items: [
        {
          q: "¿Qué son los AI credits?",
          a: "Son la unidad que utilizas para pagar tareas de IA dentro de 8ity: conversaciones, agentes, transcripciones, imágenes, OCR y búsquedas. Cada acción consume créditos de acuerdo con el costo del modelo o proveedor utilizado.",
        },
        {
          q: "¿Cuántos créditos consume cada acción?",
          a: "Una conversación con Haiku o Gemini Flash utiliza aproximadamente 1 crédito; Sonnet, 4; Opus, 18. Un agente puede consumir entre 5 y 18, una imagen estándar cerca de 13 y un minuto de transcripción alrededor de 2. El desglose aparece en Configuración → Uso de IA.",
        },
        {
          q: "¿Qué pasa si se me acaban los créditos?",
          a: "Las funciones de IA se pausan hasta que compres un top-up, cambies de plan o comience el siguiente periodo. Finanzas, CRM, proyectos, integraciones y el resto del ERP continúan funcionando.",
        },
        {
          q: "¿Los top-ups expiran?",
          a: "No. Se acumulan en tu cuenta y se consumen después de los créditos mensuales incluidos en el plan.",
        },
        {
          q: "¿Cómo funciona el cobro por usuario?",
          a: "Cada miembro del workspace tiene su propia suscripción y su propio grupo de créditos. Por ejemplo, tres usuarios en Growth equivalen a $39 × 3 = $117 al mes.",
        },
        {
          q: "¿Puedo cambiar de plan?",
          a: "Sí. Puedes subir o bajar de plan cuando quieras. Los créditos del nuevo plan se aplican al comenzar el siguiente periodo y tus top-ups permanecen.",
        },
        {
          q: "¿Cómo funciona la prueba de 3 días?",
          a: "Todos los planes de pago incluyen tres días y 300 créditos para probar 8ity. Cancela antes de que termine el periodo y no se realizará ningún cargo.",
        },
        {
          q: "¿Ofrecen reembolsos?",
          a: "Sí. Los planes de pago tienen garantía de devolución durante los primeros 30 días.",
        },
      ],
    },
    cta: {
      title: "Empieza hoy.",
      body: "Tres días gratis. Cancela cuando quieras antes de que termine la prueba.",
      primary: "Iniciar prueba",
      secondary: "Agendar demo",
    },
  },
  en: {
    creditPeriod: "AI credits / month",
    hero: {
      badge: "Same features across every plan · only AI credits change",
      title: "One 8ity. As many credits as you need.",
      body: "Get full access to every integration, agent, and tool on every plan. Only the volume of AI credits used for chats, agents, transcription, OCR, images, and search changes.",
      note: "Per user, per month. Cancel anytime.",
    },
    plans: [
      {
        name: "Starter",
        eyebrow: "For founders",
        icon: "↗",
        description: "For solo founders and companies in their earliest stages.",
        price: "$12",
        period: "/month · per user",
        credits: "2,000",
        features: [
          "2,000 AI credits per month",
          "Full access to every feature",
          "Every integration available",
          "Top-ups whenever you need them",
        ],
        cta: "Start 3-day trial",
        footnote: "3 days free · cancel anytime",
      },
      {
        name: "Growth",
        eyebrow: "Most popular",
        icon: "▥",
        description: "For startups scaling their operations.",
        price: "$39",
        period: "/month · per user",
        credits: "7,000",
        features: [
          "7,000 AI credits per month",
          "Full access to every feature",
          "Every integration available",
          "Priority support",
          "Top-ups whenever you need them",
        ],
        cta: "Start 3-day trial",
        footnote: "3 days free · cancel anytime",
        featured: true,
      },
      {
        name: "Scale",
        eyebrow: "Best value",
        icon: "✦",
        description: "For growing startups and fundraising rounds.",
        price: "$99",
        period: "/month · per user",
        credits: "18,000",
        features: [
          "18,000 AI credits per month",
          "Full access to every feature",
          "Every integration available",
          "Dedicated success manager",
          "Investor-ready reports",
          "Top-ups whenever you need them",
        ],
        cta: "Start 3-day trial",
        footnote: "3 days free · cancel anytime",
      },
      {
        name: "Enterprise",
        eyebrow: "Enterprise",
        icon: "♕",
        description: "Tailored solutions for large organizations.",
        price: "Custom",
        period: "",
        credits: "",
        features: [
          "Negotiable unlimited credits",
          "On-premise deployment",
          "Custom AI and agents",
          "Advanced security and compliance",
          "Dedicated 24/7 support",
          "Guaranteed SLAs",
        ],
        cta: "Contact sales",
        footnote: "",
      },
    ],
    topups: {
      eyebrow: "Top-ups",
      title: "Running out of monthly credits?",
      body: "Buy a boost whenever you need one. They never expire: boosts accumulate and are used after your included plan credits.",
      buy: "Buy",
      items: [
        {
          name: "Boost S",
          credits: "500",
          price: "$5",
          unit: "$0.0100 / credit",
          badge: "",
        },
        {
          name: "Boost M",
          credits: "2,500",
          price: "$22",
          unit: "$0.0088 / credit",
          badge: "Popular",
        },
        {
          name: "Boost L",
          credits: "10,000",
          price: "$79",
          unit: "$0.0079 / credit",
          badge: "Best value",
        },
      ],
    },
    included: {
      eyebrow: "Included in every plan",
      title: "No locked features. Only credits.",
      body: "Every plan unlocks the same product. The only thing that scales is how much artificial intelligence you can run each month.",
      items: [
        {
          icon: "✦",
          title: "Unlimited agents",
          body: "Claude, Finy, Wapy, Cody, Designy, Researchy, and every custom agent you create, including parallel teams.",
        },
        {
          icon: "⌁",
          title: "Every integration",
          body: "Google Workspace, banking through Syncfy, WhatsApp, Gmail, Drive, Calendar, CRM, Apollo, Perplexity, and more.",
        },
        {
          icon: "⚡",
          title: "Every tool",
          body: "Notes, Projects, Calendar, Tasks, Finance, CRM, Reminders, Drive, Code, Design, and Documents.",
        },
        {
          icon: "◇",
          title: "Workflows and automations",
          body: "Triggers, scheduled jobs, and custom workflows with no plan-based restrictions.",
        },
        {
          icon: "↗",
          title: "Multi-workspace",
          body: "Create separate spaces for personal work, your company, or side projects and invite the members you need.",
        },
        {
          icon: "♕",
          title: "Support when you need it",
          body: "Community on Starter, priority on Growth, a success manager on Scale, and 24/7 SLA support on Enterprise.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions.",
      items: [
        {
          q: "What are AI credits?",
          a: "AI credits pay for intelligent tasks inside 8ity: conversations, agents, transcription, images, OCR, and search. Every action consumes credits according to the model or provider cost.",
        },
        {
          q: "How many credits does each action use?",
          a: "A Haiku or Gemini Flash conversation uses roughly 1 credit; Sonnet, 4; Opus, 18. An agent can use 5–18, a standard image about 13, and a minute of transcription around 2. The exact breakdown appears in Settings → AI usage.",
        },
        {
          q: "What happens if I run out of credits?",
          a: "AI features pause until you buy a top-up, change plans, or start a new billing period. Finance, CRM, projects, integrations, and the rest of the ERP keep working.",
        },
        {
          q: "Do top-ups expire?",
          a: "No. They accumulate in your account and are used after the monthly credits included in your plan.",
        },
        {
          q: "How does per-user billing work?",
          a: "Every workspace member has an individual subscription and credit pool. For example, three Growth users equal $39 × 3 = $117 per month.",
        },
        {
          q: "Can I change plans?",
          a: "Yes. Upgrade or downgrade whenever you need to. New plan credits apply at the start of the next billing period, and your top-ups remain.",
        },
        {
          q: "How does the 3-day trial work?",
          a: "Every paid plan includes three days and 300 credits to explore 8ity. Cancel before the trial ends and you will not be charged.",
        },
        {
          q: "Do you offer refunds?",
          a: "Yes. Paid plans include a 30-day money-back guarantee.",
        },
      ],
    },
    cta: {
      title: "Get started today.",
      body: "Three days free. Cancel anytime before your trial ends.",
      primary: "Start trial",
      secondary: "Book a demo",
    },
  },
} as const;

export function PricingPage() {
  const { language } = useLanguage();
  const t = pricingCopy[language];

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <section className="relative border-b border-border">
        <div
          aria-hidden
          className="hero-rings pointer-events-none absolute inset-0 opacity-80"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_0%,rgba(89,187,149,.12),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-[1240px] px-5 pb-24 pt-20 sm:px-8 lg:pt-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mx-auto inline-flex items-center rounded-full border border-white/12 bg-white/[.035] px-4 py-2 text-[11px] text-white/60">
                <span aria-hidden className="mr-2 text-accent">
                  ✦
                </span>
                {t.hero.badge}
              </p>
              <h1 className="text-balance mt-8 text-[clamp(2.8rem,6.5vw,5.25rem)] font-medium leading-[.98] tracking-[-.045em]">
                {t.hero.title}
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {t.hero.body}
              </p>
              <p className="mt-4 text-xs text-white/35">{t.hero.note}</p>
            </div>
          </Reveal>

          <StaggerContainer className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.plans.map((plan) => (
              <StaggerItem key={plan.name}>
                <PlanCard plan={plan} creditPeriod={t.creditPeriod} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-24 sm:px-8">
        <SectionHeading
          eyebrow={t.topups.eyebrow}
          title={t.topups.title}
          body={t.topups.body}
        />
        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-3">
          {t.topups.items.map((topup) => (
            <StaggerItem key={topup.name}>
              <article
                className={`relative h-full rounded-[1.5rem] border p-7 ${
                  topup.badge
                    ? "border-accent/45 bg-[linear-gradient(145deg,rgba(89,187,149,.08),rgba(255,255,255,.02))]"
                    : "border-border bg-white/[.025]"
                }`}
              >
                {topup.badge && (
                  <span className="absolute -top-3 left-7 rounded-full bg-accent px-3 py-1 font-mono text-[9px] font-semibold uppercase tracking-[.16em] text-[#04140d]">
                    {topup.badge}
                  </span>
                )}
                <h3 className="text-sm font-medium">{topup.name}</h3>
                <p className="mt-7 text-4xl font-light tracking-[-.035em]">
                  {topup.credits}
                </p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[.2em] text-white/35">
                  AI credits
                </p>
                <div className="mt-7 flex items-end justify-between border-t border-border pt-6">
                  <div>
                    <p className="text-2xl font-light">{topup.price}</p>
                    <p className="mt-1 text-[10px] text-white/35">
                      {topup.unit}
                    </p>
                  </div>
                  <Link
                    href="https://8ity.org/register"
                    className="text-sm font-medium text-accent transition-colors hover:text-white"
                  >
                    {t.topups.buy} →
                  </Link>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="border-y border-border bg-white/[.018]">
        <div className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
          <SectionHeading
            eyebrow={t.included.eyebrow}
            title={t.included.title}
            body={t.included.body}
          />
          <StaggerContainer className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.included.items.map((item) => (
              <StaggerItem key={item.title}>
                <article className="h-full rounded-[1.4rem] border border-border bg-background/70 p-6 transition-colors hover:border-accent/30">
                  <IconBadge>{item.icon}</IconBadge>
                  <h3 className="mt-8 text-base font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative border-t border-border">
        <div aria-hidden className="texture-drift pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_70%_at_50%_50%,rgba(89,187,149,.12),transparent_70%)]"
        />
        <div className="relative mx-auto max-w-[1200px] px-5 py-28 text-center sm:px-8 sm:py-36">
          <Reveal>
            <h2 className="text-balance text-[clamp(2.6rem,6vw,5rem)] font-medium leading-[1] tracking-[-.045em]">
              {t.cta.title}
            </h2>
            <p className="mt-6 text-sm text-muted-foreground">{t.cta.body}</p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="https://8ity.org/register"
                className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#07100c] transition-transform hover:-translate-y-0.5"
              >
                {t.cta.primary} <span aria-hidden className="ml-2">↗</span>
              </Link>
              <Link
                href="/#footer"
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium transition-colors hover:border-white/50"
              >
                {t.cta.secondary}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

function PlanCard({
  plan,
  creditPeriod,
}: {
  plan: {
    name: string;
    eyebrow: string;
    icon: string;
    description: string;
    price: string;
    period: string;
    credits: string;
    features: readonly string[];
    cta: string;
    footnote: string;
    featured?: boolean;
  };
  creditPeriod: string;
}) {
  return (
    <article
      className={`relative flex h-full min-h-[610px] flex-col rounded-[1.6rem] border p-6 ${
        plan.featured
          ? "border-accent/55 bg-[linear-gradient(180deg,rgba(89,187,149,.10),rgba(3,8,16,.72))] shadow-[0_24px_70px_rgba(89,187,149,.1)]"
          : "border-border bg-[#080f17]/90"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-mono text-[9px] font-semibold uppercase tracking-[.18em] text-[#04140d]">
          {plan.eyebrow}
        </span>
      )}
      <p className="font-mono text-[9px] uppercase tracking-[.22em] text-white/35">
        {plan.featured ? "8ity" : plan.eyebrow}
      </p>
      <div className="mt-6 flex items-center gap-3">
        <IconBadge>{plan.icon}</IconBadge>
        <h2 className="text-xl font-medium">{plan.name}</h2>
      </div>
      <p className="mt-5 min-h-12 text-sm leading-6 text-muted-foreground">
        {plan.description}
      </p>
      <div className="mt-5 flex min-h-12 items-end gap-1.5">
        <span className="text-[2.65rem] font-light leading-none tracking-[-.04em]">
          {plan.price}
        </span>
        {plan.period && (
          <span className="pb-1 text-[11px] text-white/35">{plan.period}</span>
        )}
      </div>
      {plan.credits && (
        <div className="mt-6 rounded-xl border border-accent/20 bg-accent/[.045] px-4 py-4">
          <p className="text-2xl font-light">{plan.credits}</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[.2em] text-accent">
            {creditPeriod}
          </p>
        </div>
      )}
      <ul className="mt-7 space-y-3 border-t border-border pt-7">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-xs leading-5 text-white/65"
          >
            <span aria-hidden className="text-accent">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-8">
        <Link
          href="https://8ity.org/register"
          className={`block rounded-full py-3 text-center text-sm font-medium transition-transform hover:-translate-y-0.5 ${
            plan.featured
              ? "bg-accent text-[#04140d]"
              : "border border-white/20 hover:border-white/45"
          }`}
        >
          {plan.cta} <span aria-hidden className="ml-2">→</span>
        </Link>
        {plan.footnote && (
          <p className="mt-4 text-center text-[10px] text-white/30">
            {plan.footnote}
          </p>
        )}
      </div>
    </article>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  centered = true,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  centered?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}
      >
        <p className="font-mono text-[10px] uppercase tracking-[.26em] text-accent">
          {eyebrow}
        </p>
        <h2 className="text-balance mt-5 text-[clamp(2.2rem,5vw,4rem)] font-medium leading-[1.03] tracking-[-.04em]">
          {title}
        </h2>
        {body && (
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground">
            {body}
          </p>
        )}
      </div>
    </Reveal>
  );
}

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden
      className="grid size-11 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/[.07] text-base text-accent"
    >
      {children}
    </span>
  );
}
