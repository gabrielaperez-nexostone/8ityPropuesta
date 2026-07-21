"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ScrollExperience() {
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: .25 });
  const orbY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -180]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 220]);

  return <>
    <motion.div className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-primary shadow-[0_0_16px_var(--primary)]" style={{ scaleX: progress }} aria-hidden />
    <motion.div className="pointer-events-none fixed -right-16 bottom-10 z-0 hidden size-40 rounded-full border border-primary/10 lg:block" style={{ y: orbY, rotate: orbRotate }} aria-hidden>
      <div className="absolute inset-5 rounded-full border border-primary/10" />
      <div className="absolute inset-10 rounded-full border border-primary/15" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-primary/10" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-primary/10" />
    </motion.div>
  </>;
}
