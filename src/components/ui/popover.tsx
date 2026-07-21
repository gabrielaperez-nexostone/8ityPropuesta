"use client";
import { Popover as Primitive } from "radix-ui";
export function Popover({ trigger, children }: { trigger: React.ReactNode; children: React.ReactNode }) { return <Primitive.Root><Primitive.Trigger asChild>{trigger}</Primitive.Trigger><Primitive.Portal><Primitive.Content sideOffset={8} className="z-50 max-w-xs rounded-2xl border border-border bg-surface p-4 text-sm shadow-xl">{children}<Primitive.Arrow className="fill-[var(--surface)]" /></Primitive.Content></Primitive.Portal></Primitive.Root>; }
