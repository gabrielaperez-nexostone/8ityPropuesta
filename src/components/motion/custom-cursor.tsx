"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("cursor-8ity-active");
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let ringX = targetX;
    let ringY = targetY;
    let ringSize = 44;
    let targetSize = 44;
    let visible = false;
    let hovering = false;
    let frame = 0;

    const render = () => {
      ringX += (targetX - ringX) * .16;
      ringY += (targetY - ringY) * .16;
      ringSize += (targetSize - ringSize) * .18;
      const opacity = visible ? 1 : 0;
      dot.style.opacity = String(opacity);
      ring.style.opacity = String(opacity);
      dot.style.transform = `translate3d(${targetX - 3.5}px, ${targetY - 3.5}px, 0)`;
      ring.style.width = `${ringSize}px`;
      ring.style.height = `${ringSize}px`;
      ring.style.transform = `translate3d(${ringX - ringSize / 2}px, ${ringY - ringSize / 2}px, 0)`;
      ring.style.borderColor = hovering ? "rgba(52,211,153,.82)" : "rgba(110,231,183,.42)";
      ring.style.background = hovering ? "rgba(52,211,153,.12)" : "rgba(52,211,153,.025)";
      frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      visible = true;
    };
    const over = (event: PointerEvent) => {
      const target = event.target as Element | null;
      hovering = Boolean(target?.closest("a, button, [role='button'], input, textarea, select, summary"));
      targetSize = hovering ? 72 : 44;
    };
    const leave = () => { visible = false; };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("cursor-8ity-active");
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[90] size-11 rounded-full border opacity-0 will-change-transform" aria-hidden="true" />
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[91] size-[7px] rounded-full bg-primary opacity-0 shadow-[0_0_14px_rgba(52,211,153,.9)] will-change-transform" aria-hidden="true" />
    </>
  );
}
