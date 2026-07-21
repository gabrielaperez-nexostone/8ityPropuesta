"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
export function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) { return <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: .15 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: .08 } } }} className={cn(className)}>{children}</motion.div>; }
export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) { return <motion.div variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }} className={cn(className)}>{children}</motion.div>; }
