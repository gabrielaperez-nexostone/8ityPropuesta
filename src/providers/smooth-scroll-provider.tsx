"use client";
import { ReactLenis } from "lenis/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return children;
  return <ReactLenis root options={{ lerp: .08, smoothWheel: true, syncTouch: false, anchors: { offset: -80 } }}>{children}</ReactLenis>;
}
