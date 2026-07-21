"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) { return <motion.div initial={{ opacity: 0, y: 34, filter: "blur(7px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: .16 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }} className={cn(className)}>{children}</motion.div>; }

export function ScrollLift({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, .5, 1], [48, 0, -48]);
  const scale = useTransform(scrollYProgress, [0, .5, 1], [.975, 1, .985]);
  return <motion.div ref={ref} style={{ y, scale }} className={cn(className)}>{children}</motion.div>;
}
