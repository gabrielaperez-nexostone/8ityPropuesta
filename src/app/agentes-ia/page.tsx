import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { EvoFooter } from "@/components/sections/evo-landing";

export const metadata: Metadata = {
  title: "AI Agents — 8ity",
  description:
    "Sistema multi-agente con Claude y Gemini, conectado a tus datos vía MCP. Analiza, genera y ejecuta acciones con contexto completo del negocio.",
};

const agents = [
  { icon: "✦", name: "Claude", body: "El agente principal. Razona sobre todo tu contexto y coordina al resto del equipo." },
  { icon: "◉", name: "Finy", body: "Analiza cuentas, concilia movimientos y prepara reportes financieros." },
  { icon: "❋", name: "Wapy", body: "Atiende y responde por WhatsApp conectado al CRM y a tus datos." },
  { icon: "⟡", name: "Cody", body: "Escribe y ejecuta código en un sandbox con snippets y herramientas." },
  { icon: "◳", name: "Designy", body: "Genera y edita piezas visuales dentro del canvas de diseño." },
  { icon: "◐", name: "Researchy", body: "Investiga, resume y sintetiza información de la web y de tus documentos." },
];

const models = ["Claude Sonnet 4.5", "Claude Opus", "Gemini 2.5", "MCP Tools", "Memoria por proyecto", "Streaming"];

const capabilities = [
  { title: "Contexto real", body: "Los agentes entienden la estructura de tu empresa, sus datos, documentos, usuarios, proyectos y procesos." },
  { title: "Analizan", body: "Leen finanzas, CRM y documentos para responder con información unificada de todo el negocio." },
  { title: "Generan", body: "Redactan reportes, board decks, contenido y código a partir de tus datos reales." },
  { title: "Ejecutan", body: "Concilian cuentas, crean tareas, disparan alertas y toman acciones con permisos reales." },
];

const extend = [
  { title: "Triggers", body: "Dispara acciones cuando llega un pago, un email o un evento bancario." },
  { title: "MCP Servers", body: "Conecta APIs internas, bases de datos o sistemas propios a tus agentes." },
  { title: "Schedules", body: "Tareas programadas con contexto de IA: reportes semanales, recordatorios inteligentes." },
];

export default function AgentesIaPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-background text-foreground">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(60%_100%_at_50%_0%,rgba(89,187,149,.14),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-5 py-20 sm:px-8">
          {/* hero */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[.26em] text-accent">AI Layer</p>
            <h1 className="text-balance mt-4 text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[1.08] tracking-[-.03em]">
              Agentes IA que trabajan contigo.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground">
              Sistema multi-agente con Claude y Gemini, conectado a tus datos vía MCP. Concilia cuentas, prepara board decks, escribe código — y lo hace de forma autónoma con conocimiento completo del negocio.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-2">
              {models.map((m) => (
                <span key={m} className="rounded-full border border-accent/20 px-3.5 py-1.5 text-[11px] text-accent/80">{m}</span>
              ))}
            </div>
          </div>

          {/* agents grid */}
          <section className="mt-20">
            <h2 className="text-center text-3xl font-medium tracking-[-.02em]">Un equipo de agentes, no un chatbot.</h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {agents.map((a) => (
                <div key={a.name} className="rounded-2xl border border-accent/12 bg-[linear-gradient(180deg,rgba(89,187,149,.06),rgba(3,8,16,.5))] p-6 transition-colors hover:border-accent/40">
                  <span aria-hidden className="grid size-10 place-items-center rounded-full border border-accent/30 text-sm text-accent">{a.icon}</span>
                  <h3 className="mt-8 text-base font-medium">{a.name}</h3>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{a.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-white/45">Más agentes custom que tú creas, con spawn de equipos en paralelo para más alcance.</p>
          </section>

          {/* capabilities */}
          <section className="mt-24">
            <div className="mx-auto max-w-xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[.26em] text-accent">IA con contexto real</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-.02em]">No solo responden. Entienden y ejecutan.</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((c, i) => (
                <div key={c.title} className="rounded-2xl border border-accent/12 bg-[linear-gradient(180deg,rgba(89,187,149,.05),rgba(3,8,16,.5))] p-6">
                  <p className="font-mono text-[10px] text-accent/60">0{i + 1}</p>
                  <h3 className="mt-3 text-base font-medium">{c.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* extend / MCP */}
          <section className="mt-24">
            <div className="mx-auto max-w-xl text-center">
              <p className="font-mono text-[11px] uppercase tracking-[.26em] text-accent">Automations · MCP</p>
              <h2 className="mt-4 text-3xl font-medium tracking-[-.02em]">Flujos que corren solos.</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">Triggers, schedules y servidores MCP propios — extiende 8ity con tus propias herramientas.</p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {extend.map((e) => (
                <div key={e.title} className="rounded-2xl border border-accent/12 bg-[linear-gradient(180deg,rgba(89,187,149,.05),rgba(3,8,16,.5))] p-6">
                  <h3 className="text-base font-medium">{e.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{e.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* cta */}
          <section className="mt-24 rounded-[2rem] border border-accent/15 bg-[linear-gradient(180deg,rgba(89,187,149,.10),rgba(3,8,16,.6))] px-6 py-16 text-center">
            <h2 className="text-3xl font-medium tracking-[-.02em] sm:text-4xl">Pon a los agentes a trabajar.</h2>
            <p className="mt-4 text-sm text-muted-foreground">Conecta tus datos y deja que la IA opere con contexto completo.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="https://8ity.org/register" className="rounded-full bg-gradient-to-r from-accent to-[#7ee0b0] px-6 py-3 text-sm font-semibold text-[#04140d] transition-transform hover:-translate-y-0.5">Empezar gratis</Link>
              <Link href="/precios" className="rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/60">Ver precios</Link>
            </div>
          </section>
        </div>
      </main>
      <EvoFooter />
    </>
  );
}
