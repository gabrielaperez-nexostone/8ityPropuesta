"use client";
import { MotionProvider } from "./motion-provider";
import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { LanguageProvider } from "./language-provider";
export function AppProviders({ children }: { children: React.ReactNode }) { return <LanguageProvider><MotionProvider><SmoothScrollProvider>{children}</SmoothScrollProvider></MotionProvider></LanguageProvider>; }
