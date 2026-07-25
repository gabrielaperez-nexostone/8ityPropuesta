"use client";

import { Reveal } from "@/components/motion/reveal";
import { useLanguage } from "@/providers/language-provider";

const copy = {
  es: {
    badge: "Preguntas frecuentes",
    title: "Todo lo que preguntan.",
    body: "Respuestas sobre qué es 8ity, cómo funciona, la seguridad de tus datos y cómo operan los AI credits y los planes.",
    groups: [
      {
        title: "General",
        items: [
          ["¿8ity es un ERP o un CRM?", "8ity es un ERP inteligente y modular. El CRM es una herramienta adicional incluida para gestionar pipeline, cuentas y seguimientos dentro del mismo contexto operativo."],
          ["¿Cómo beneficia la IA a mi empresa?", "La IA automatiza tareas repetitivas, mejora la toma de decisiones con datos y personaliza la experiencia de cada equipo, reduciendo horas de trabajo manual."],
          ["¿Qué tan seguros están mis datos?", "El acceso se organiza por organización, workspace, rol, módulo y acción. Automatizaciones y agentes quedan sujetos a permisos y trazabilidad."],
          ["¿Puedo personalizar los módulos?", "Sí. Activa los módulos que necesita tu empresa y conecta procesos, datos o sistemas propios sin forzar una operación rígida."],
        ],
      },
      {
        title: "AI credits y planes",
        items: [
          ["¿Qué son los AI credits?", "Son la unidad que utilizas para pagar tareas de IA dentro de 8ity: conversaciones, agentes, transcripciones, imágenes, OCR y búsquedas. Cada acción consume créditos de acuerdo con el costo del modelo o proveedor utilizado."],
          ["¿Cuántos créditos consume cada acción?", "Una conversación con Haiku o Gemini Flash utiliza aproximadamente 1 crédito; Sonnet, 4; Opus, 18. Un agente puede consumir entre 5 y 18, una imagen estándar cerca de 13 y un minuto de transcripción alrededor de 2. El desglose aparece en Configuración → Uso de IA."],
          ["¿Qué pasa si se me acaban los créditos?", "Las funciones de IA se pausan hasta que compres un top-up, cambies de plan o comience el siguiente periodo. Finanzas, CRM, proyectos, integraciones y el resto del ERP continúan funcionando."],
          ["¿Los top-ups expiran?", "No. Se acumulan en tu cuenta y se consumen después de los créditos mensuales incluidos en el plan."],
          ["¿Cómo funciona el cobro por usuario?", "Cada miembro del workspace tiene su propia suscripción y su propio grupo de créditos. Por ejemplo, tres usuarios en Growth equivalen a $39 × 3 = $117 al mes."],
          ["¿Puedo cambiar de plan?", "Sí. Puedes subir o bajar de plan cuando quieras. Los créditos del nuevo plan se aplican al comenzar el siguiente periodo y tus top-ups permanecen."],
          ["¿Cómo funciona la prueba de 3 días?", "Todos los planes de pago incluyen tres días y 300 créditos para probar 8ity. Cancela antes de que termine el periodo y no se realizará ningún cargo."],
          ["¿Ofrecen reembolsos?", "Sí. Los planes de pago tienen garantía de devolución durante los primeros 30 días."],
        ],
      },
    ],
  },
  en: {
    badge: "Frequently asked questions",
    title: "Everything people ask.",
    body: "Answers about what 8ity is, how it works, how your data is protected, and how AI credits and plans work.",
    groups: [
      {
        title: "General",
        items: [
          ["Is 8ity an ERP or a CRM?", "8ity is an intelligent, modular ERP. The CRM is an included tool to manage pipeline, accounts, and follow-ups within the same operating context."],
          ["How does AI benefit my company?", "AI automates repetitive tasks, improves data-driven decisions, and personalizes each team's experience, cutting hours of manual work."],
          ["How secure is my data?", "Access is organized by organization, workspace, role, module, and action. Automations and agents are subject to permissions and auditability."],
          ["Can I customize the modules?", "Yes. Enable the modules your company needs and connect your own processes, data, or systems without forcing a rigid operation."],
        ],
      },
      {
        title: "AI credits & plans",
        items: [
          ["What are AI credits?", "They are the unit you use to pay for AI tasks inside 8ity: conversations, agents, transcription, images, OCR, and search. Every action consumes credits according to the model or provider cost."],
          ["How many credits does each action use?", "A conversation with Haiku or Gemini Flash uses about 1 credit; Sonnet, 4; Opus, 18. An agent can use 5–18, a standard image around 13, and a minute of transcription about 2. See the breakdown in Settings → AI usage."],
          ["What happens if I run out of credits?", "AI features pause until you buy a top-up, change plans, or the next period starts. Finance, CRM, projects, integrations, and the rest of the ERP keep working."],
          ["Do top-ups expire?", "No. They accumulate in your account and are consumed after your plan's monthly credits."],
          ["How does per-user billing work?", "Each workspace member has their own subscription and their own credit pool. For example, three users on Growth = $39 × 3 = $117 per month."],
          ["Can I change plans?", "Yes. You can upgrade or downgrade anytime. New plan credits apply at the start of the next period and your top-ups remain."],
          ["How does the 3-day trial work?", "All paid plans include three days and 300 credits to try 8ity. Cancel before the period ends and you won't be charged."],
          ["Do you offer refunds?", "Yes. Paid plans have a 30-day money-back guarantee."],
        ],
      },
    ],
  },
} as const;

export function FaqsPage() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <section className="relative border-b border-border">
        <div aria-hidden className="hero-rings pointer-events-none absolute inset-0 opacity-80" />
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_50%_0%,rgba(89,187,149,.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-20 text-center sm:px-8 lg:pt-24">
          <Reveal>
            <p className="mx-auto inline-flex items-center rounded-full border border-white/12 bg-white/[.035] px-4 py-2 text-[11px] text-white/60">
              <span aria-hidden className="mr-2 text-accent">✦</span>
              {t.badge}
            </p>
            <h1 className="text-balance mx-auto mt-8 max-w-2xl text-[clamp(2.6rem,6vw,4.75rem)] font-medium leading-[.98] tracking-[-.045em]">
              {t.title}
            </h1>
            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              {t.body}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-8">
        {t.groups.map((group) => (
          <section key={group.title} className="mb-16 last:mb-0">
            <h2 className="mb-6 font-mono text-[11px] uppercase tracking-[.24em] text-accent">{group.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {group.items.map(([question, answer]) => (
                <div key={question} className="rounded-2xl border border-accent/10 bg-[#07130f] p-6">
                  <h3 className="flex items-start gap-3 text-sm font-medium">
                    <span aria-hidden className="text-accent">›</span>
                    {question}
                  </h3>
                  <p className="mt-3 pl-6 text-xs leading-6 text-muted-foreground">{answer}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
