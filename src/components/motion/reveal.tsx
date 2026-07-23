"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
export function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-clip", className)}>
      <motion.div
        initial={{ opacity: 0, y: "18%", rotate: .35 }}
        whileInView={{ opacity: 1, y: "0%", rotate: 0 }}
        viewport={{ once: true, amount: .16, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left bottom" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function ScrollScale({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [.86, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [.55, 1]);
  return <motion.div ref={ref} style={{ scale, opacity }} className={cn("origin-center will-change-transform", className)}>{children}</motion.div>;
}

export function ScrollLift({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, .5, 1], [48, 0, -48]);
  const scale = useTransform(scrollYProgress, [0, .5, 1], [.975, 1, .985]);
  return <motion.div ref={ref} style={{ y, scale }} className={cn(className)}>{children}</motion.div>;
}
