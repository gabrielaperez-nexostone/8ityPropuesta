"use client";
import { Tooltip as Primitive } from "radix-ui";
export function Tooltip({ children, content }: { children: React.ReactElement; content: string }) { return <Primitive.Provider delayDuration={250}><Primitive.Root><Primitive.Trigger asChild>{children}</Primitive.Trigger><Primitive.Portal><Primitive.Content sideOffset={8} className="z-50 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-foreground shadow-lg">{content}<Primitive.Arrow className="fill-[var(--surface)]" /></Primitive.Content></Primitive.Portal></Primitive.Root></Primitive.Provider>; }
