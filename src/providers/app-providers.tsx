"use client";
import { MotionProvider } from "./motion-provider";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { LanguageProvider } from "./language-provider";
import { CustomCursor } from "@/components/motion/custom-cursor";
export function AppProviders({ children }: { children: React.ReactNode }) { return <LanguageProvider><MotionProvider><SmoothScrollProvider>{children}<CustomCursor /></SmoothScrollProvider></MotionProvider></LanguageProvider>; }
