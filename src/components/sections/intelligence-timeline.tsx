"use client";

import { useCallback, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useLanguage } from "@/providers/language-provider";
import { FlowText } from "@/components/motion/flow-text";

const copy = {
  es: {
    eyebrow: "Cómo funciona 8ity",
    title: "Todo tu negocio en un solo lugar.",
    body: "Conecta tus datos, centraliza la gestión, automatiza tareas y toma mejores decisiones con inteligencia artificial.",
    core: "Inicio",
    result: "Resultados",
    steps: [
      ["Conexión", "Conecta tus herramientas e integraciones."],
      ["Gestión", "Administra clientes, ventas, finanzas, documentos y más."],
      ["Automatización", "La IA y las automatizaciones trabajan por ti."],
      ["Resultados", "Toma mejores decisiones y haz crecer tu negocio."],
    ],
    branches: [
      { pill: "Conexión e integraciones", first: "herramientas conectadas", second: "datos sincronizados" },
      { pill: "Gestión centralizada", first: "información organizada", second: "equipos alineados" },
      { pill: "IA y automatizaciones", first: "tareas completadas", second: "procesos optimizados" },
    ],
  },
  en: {
    eyebrow: "How 8ity works",
    title: "Your whole business in one place.",
    body: "Connect your data, centralize management, automate tasks and make better decisions with artificial intelligence.",
    core: "Start",
    result: "Results",
    steps: [
      ["Connection", "Connect your tools and integrations."],
      ["Management", "Manage customers, sales, finance, documents and more."],
      ["Automation", "AI and automations work for you."],
      ["Results", "Make better decisions and grow your business."],
    ],
    branches: [
      { pill: "Connections & integrations", first: "tools connected", second: "data synchronized" },
      { pill: "Centralized management", first: "information organized", second: "teams aligned" },
      { pill: "AI & automations", first: "tasks completed", second: "processes optimized" },
    ],
  },
} as const;

type Branch = { readonly pill: string; readonly first: string; readonly second: string };

const EASE = [0.16, 1, 0.3, 1] as const;
const CYCLE_MS = 16000;

export function IntelligenceTimeline() {
  const { language } = useLanguage();
  const t = copy[language];
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cycleRef = useRef(0);
  const reducedRef = useRef(false);
  const activeStepRef = useRef(-2);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(320, rect.width);
    const height = Math.max(260, rect.height);
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, width, height);
    renderFlow(ctx, width, height, cycleRef.current, reducedRef.current, t.core, t.result, t.branches);
  }, [t]);

  const syncActiveStep = useCallback(() => {
    const { p, alpha } = phaseOf(cycleRef.current);
    const idx = alpha < .5 || p < .12 ? -1 : p < .39 ? 0 : p < .64 ? 1 : p < .84 ? 2 : 3;
    if (idx === activeStepRef.current) return;
    activeStepRef.current = idx;
    stepRefs.current.forEach((el, i) => el?.setAttribute("data-active", String(i === idx)));
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(draw);
    if (canvasRef.current) observer.observe(canvasRef.current);
    draw();
    return () => observer.disconnect();
  }, [draw]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let frame = 0;
    let startedAt = performance.now();

    const tick = (now: number) => {
      if (visible) {
        reducedRef.current = reducedMotion.matches;
        cycleRef.current = reducedMotion.matches ? .8 : ((now - startedAt) % CYCLE_MS) / CYCLE_MS;
        draw();
        syncActiveStep();
      }
      frame = requestAnimationFrame(tick);
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) startedAt = performance.now() - cycleRef.current * CYCLE_MS;
    }, { threshold: .15 });

    visibilityObserver.observe(section);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      visibilityObserver.disconnect();
    };
  }, [draw, syncActiveStep]);

  return (
    <section ref={sectionRef} className="relative my-16 overflow-hidden border border-border bg-[#030810] px-5 py-16 text-white sm:px-8 lg:px-10">
      <div aria-hidden className="pointer-events-none absolute -top-32 right-[-8%] h-80 w-80 rounded-full bg-primary/[.06] blur-3xl" />

      <div className="grid gap-5 lg:grid-cols-[1fr_.58fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .8 }}
            transition={{ duration: .7, ease: EASE }}
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.18em] text-primary"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: .8 }}
              transition={{ duration: .9, ease: EASE, delay: .15 }}
              className="h-px w-8 origin-left bg-primary/60"
              aria-hidden
            />
            {t.eyebrow}
          </motion.p>
          <h2 className="text-balance mt-4 max-w-3xl text-3xl font-medium leading-[1.05] tracking-[-.035em] sm:text-4xl">
            <FlowText inView text={t.title} delay={.1} />
          </h2>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: .6 }}
          transition={{ duration: .9, ease: EASE, delay: .3 }}
          className="max-w-lg text-sm leading-6 text-white/55 lg:justify-self-end"
        >
          {t.body}
        </motion.p>
      </div>

      <div className="mt-10 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: EASE }}
          className="h-px origin-left bg-white/10"
          aria-hidden
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: .25 }}
          transition={{ duration: 1, delay: .2 }}
        >
          <canvas ref={canvasRef} className="block aspect-[1184/500] min-h-[300px] w-full" aria-hidden="true" />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: .3 }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: .09, delayChildren: .1 } } }}
        className="grid border border-white/10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {t.steps.map(([title, body], index) => (
          <motion.div
            key={title}
            ref={(el) => { stepRefs.current[index] = el; }}
            data-active="false"
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: .8, ease: EASE } } }}
            className="group relative border-b border-white/10 p-5 transition-colors duration-500 last:border-b-0 hover:bg-white/[.03] data-[active=true]:bg-primary/[.05] sm:border-r lg:border-b-0 lg:last:border-r-0"
          >
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-primary/80 transition-transform duration-700 ease-out group-data-[active=true]:scale-x-100"
            />
            <p className="font-mono text-[9px] text-primary/60 transition-colors duration-500 group-data-[active=true]:text-primary">0{index + 1}</p>
            <h3 className="mt-3 text-sm font-medium text-white/80 transition-colors duration-500 group-hover:text-white group-data-[active=true]:text-white">{title}</h3>
            <p className="mt-2 text-xs leading-5 text-white/50 transition-colors duration-500 group-data-[active=true]:text-white/65">{body}</p>
          </motion.div>
        ))}
      </motion.div>

      <ol className="sr-only">
        {t.branches.map((branch) => <li key={branch.pill}>{branch.pill}: {branch.first}, {branch.second}.</li>)}
      </ol>
    </section>
  );
}

function renderFlow(ctx: CanvasRenderingContext2D, width: number, height: number, cycle: number, reduced: boolean, core: string, result: string, branches: readonly Branch[]) {
  const sx = width / 1184;
  const sy = height / 500;
  const x = (value: number) => value * sx;
  const y = (value: number) => value * sy;
  const { p, alpha: cycleAlpha } = phaseOf(cycle);
  const time = reduced ? 0 : performance.now() / 1000;
  const baselineY = y(270);

  ctx.fillStyle = "#030810";
  ctx.fillRect(0, 0, width, height);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const headX = x(95 + 1020 * easeOut(clamp(p / .92, 0, 1)));

  // Baseline + ruler ticks (ticks energize as the head passes near them)
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,.14)";
  ctx.beginPath(); ctx.moveTo(0, baselineY); ctx.lineTo(width, baselineY); ctx.stroke();
  for (let gx = 40; gx < 1184; gx += 20) {
    const major = gx % 120 === 0;
    const dist = Math.abs(x(gx) - headX);
    const boost = Math.max(0, 1 - dist / x(70));
    const base = major ? .4 : .14;
    ctx.strokeStyle = major
      ? `rgba(52,211,153,${base + boost * .55})`
      : `rgba(255,255,255,${base + boost * .3})`;
    const stretch = 1 + boost * .5;
    ctx.beginPath();
    ctx.moveTo(x(gx), baselineY - y(major ? 16 : 8) * stretch);
    ctx.lineTo(x(gx), baselineY + y(major ? 16 : 8) * stretch);
    ctx.stroke();
  }

  // Progress line with comet gradient
  const grad = ctx.createLinearGradient(Math.max(0, headX - x(190)), 0, headX, 0);
  grad.addColorStop(0, "rgba(52,211,153,0)"); grad.addColorStop(.72, "rgba(52,211,153,.8)"); grad.addColorStop(1, "rgba(110,231,183,1)");
  ctx.strokeStyle = grad; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0, baselineY); ctx.lineTo(headX, baselineY); ctx.stroke();

  // Data particles travelling toward the head
  if (!reduced && headX > x(120)) {
    for (let i = 0; i < 4; i++) {
      const tt = (time * .1 + i / 4) % 1;
      const px = tt * headX;
      const a = Math.sin(Math.PI * tt) * .55;
      ctx.fillStyle = `rgba(110,231,183,${a})`;
      ctx.beginPath(); ctx.arc(px, baselineY, 1.6 * sx + Math.sin(Math.PI * tt) * sx, 0, Math.PI * 2); ctx.fill();
    }
  }

  // Breathing head glow
  const breath = reduced ? 1 : 1 + .16 * Math.sin(time * 2.4);
  const glow = ctx.createRadialGradient(headX, baselineY, 0, headX, baselineY, x(22) * breath);
  glow.addColorStop(0, "rgba(110,231,183,.8)"); glow.addColorStop(1, "rgba(52,211,153,0)");
  ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(headX, baselineY, x(22) * breath, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "rgba(240,255,250,.95)";
  ctx.beginPath(); ctx.arc(headX, baselineY, 2.4 * sx, 0, Math.PI * 2); ctx.fill();

  pill(ctx, x(12), baselineY - y(18), core, true, 1, sx);

  const specs = [
    { start: .12, cx: 270, top: 125, direction: -1 },
    { start: .39, cx: 555, top: 390, direction: 1 },
    { start: .64, cx: 820, top: 125, direction: -1 },
  ] as const;

  specs.forEach((spec, index) => {
    const local = clamp((p - spec.start) / .23, 0, 1);
    if (local <= 0) return;
    const branch = branches[index];
    const bx = x(spec.cx);
    const targetY = y(spec.top);
    const dir = spec.direction;
    const curveEndX = x(spec.cx + 42);
    const curveEndY = targetY + y(18);
    const radius = x(22);
    const approachY = curveEndY - dir * radius;

    // Dashed connector with marching-ants drift
    ctx.setLineDash([6 * sx, 7 * sx]);
    if (!reduced) ctx.lineDashOffset = -((time * 14 * sx) % (13 * sx));
    ctx.strokeStyle = `rgba(154,168,189,${.3 + local * .6})`; ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(bx, baselineY);
    ctx.lineTo(bx, baselineY + (approachY - baselineY) * Math.min(local * 1.6, 1));
    if (local > .55) {
      ctx.quadraticCurveTo(bx, curveEndY, bx + radius, curveEndY);
      ctx.lineTo(curveEndX, curveEndY);
    }
    ctx.stroke(); ctx.setLineDash([]); ctx.lineDashOffset = 0;

    node(ctx, bx, baselineY, local, sx, reduced ? 0 : time + index * .8);
    if (local > .42) pill(ctx, curveEndX, targetY, branch.pill, index === 2, fade(local, .42, .68), sx);
    if (local > .58) {
      const lineStart = curveEndX + x(index === 1 ? 145 : 155);
      const lineY = targetY + y(18);
      const reach = fade(local, .58, 1);
      const lineEnd = Math.min(width - x(18), lineStart + x(260) * easeOut(reach));
      ctx.strokeStyle = `rgba(248,250,252,${.25 + reach * .55})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(lineStart, lineY); ctx.lineTo(lineEnd, lineY); ctx.stroke();
      check(ctx, lineStart + x(65), lineY, fade(local, .64, .8), sx);
      check(ctx, lineStart + x(185), lineY, fade(local, .78, .96), sx);
      label(ctx, lineStart + x(65), lineY - y(54) * dir, branch.first, fade(local, .64, .82), sx);
      label(ctx, lineStart + x(185), lineY + y(54) * dir, branch.second, fade(local, .78, 1), sx);
    }
  });

  const resultAlpha = fade(p, .78, .94);
  if (resultAlpha > 0) {
    const resultX = Math.max(x(930), width - x(150));
    pill(ctx, resultX, baselineY - y(18), result, true, resultAlpha, sx);
    label(ctx, resultX + x(48), baselineY - y(48), languageFreeResultLabel(result), resultAlpha, sx);
  }

  // Loop transition: fade to background instead of rewinding
  if (cycleAlpha < 1) {
    ctx.fillStyle = `rgba(3,8,16,${1 - cycleAlpha})`;
    ctx.fillRect(0, 0, width, height);
  }
}

function pill(ctx: CanvasRenderingContext2D, px: number, py: number, text: string, active: boolean, alpha: number, scale: number) {
  if (alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = Math.min(1, alpha * 1.35);
  ctx.font = `${12 * scale}px ui-monospace, SFMono-Regular, Menlo, monospace`;
  const w = ctx.measureText(text).width + 42 * scale; const h = 36 * scale; const r = 18 * scale;
  const s = .86 + .14 * easeOutBack(alpha);
  const lift = (1 - easeOut(alpha)) * 8 * scale;
  ctx.translate(px + w / 2, py + lift + h / 2);
  ctx.scale(s, s);
  ctx.translate(-(px + w / 2), -(py + lift + h / 2));
  roundRect(ctx, px, py + lift, w, h, r);
  ctx.fillStyle = active ? "#ffffff" : "#8d95a3"; ctx.fill();
  ctx.fillStyle = "#030810"; ctx.beginPath(); ctx.arc(px + 15 * scale, py + lift + h / 2, 4 * scale, 0, Math.PI * 2); ctx.fill();
  ctx.fillText(text, px + 27 * scale, py + lift + 23 * scale);
  ctx.restore();
}

function node(ctx: CanvasRenderingContext2D, px: number, py: number, alpha: number, scale: number, time: number) {
  ctx.save(); ctx.globalAlpha = alpha;
  if (time > 0) {
    const ring = (time * .9) % 1;
    ctx.strokeStyle = `rgba(52,211,153,${(1 - ring) * .4 * alpha})`;
    ctx.lineWidth = 1 * scale;
    ctx.beginPath(); ctx.arc(px, py, (5 + ring * 14) * scale, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.fillStyle = "#030810"; ctx.strokeStyle = "#34d399"; ctx.lineWidth = 1.5 * scale;
  ctx.beginPath(); ctx.arc(px, py, 5 * scale, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.restore();
}

function check(ctx: CanvasRenderingContext2D, px: number, py: number, alpha: number, scale: number) {
  if (alpha <= 0) return;
  ctx.save();
  ctx.globalAlpha = Math.min(1, alpha * 1.5);
  const r = 8 * scale * (.7 + .3 * easeOutBack(alpha));
  ctx.fillStyle = "#34d399";
  ctx.beginPath(); ctx.arc(px, py, r, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = "#030810"; ctx.lineWidth = 1.4 * scale;
  const k = r / (8 * scale);
  ctx.beginPath();
  ctx.moveTo(px - 3 * scale * k, py);
  ctx.lineTo(px - .5 * scale * k, py + 2.5 * scale * k);
  ctx.lineTo(px + 4 * scale * k, py - 3 * scale * k);
  ctx.stroke(); ctx.restore();
}

function label(ctx: CanvasRenderingContext2D, px: number, py: number, text: string, alpha: number, scale: number) {
  if (alpha <= 0) return;
  ctx.save(); ctx.globalAlpha = alpha;
  ctx.fillStyle = "#9aa8bd";
  ctx.font = `${10 * scale}px ui-monospace, SFMono-Regular, Menlo, monospace`;
  ctx.textAlign = "center";
  ctx.fillText(text, px, py + (1 - alpha) * 5 * scale);
  ctx.restore();
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  ctx.beginPath(); ctx.roundRect(x, y, width, height, radius);
}

function phaseOf(cycle: number) {
  const p = cycle < .7 ? smoothStep(cycle / .7) : 1;
  let alpha = 1;
  if (cycle > .93) alpha = 1 - smoothStep((cycle - .93) / .07);
  else if (cycle < .04) alpha = smoothStep(cycle / .04);
  return { p, alpha };
}

function fade(value: number, start: number, end: number) { return clamp((value - start) / (end - start), 0, 1); }
function clamp(value: number, min: number, max: number) { return Math.min(max, Math.max(min, value)); }
function easeOut(value: number) { return 1 - Math.pow(1 - value, 3); }
function easeOutBack(value: number) {
  const t = clamp(value, 0, 1);
  const c1 = 1.70158; const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}
function languageFreeResultLabel(result: string) { return result === "Resultados" ? "decisiones y crecimiento" : "decisions and growth"; }
function smoothStep(value: number) {
  const t = clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}
