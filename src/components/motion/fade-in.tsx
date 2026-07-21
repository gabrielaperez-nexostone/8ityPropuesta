"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
export function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) { return <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className={cn(className)}>{children}</motion.div>; }
