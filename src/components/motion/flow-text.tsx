"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function FlowText({
  text,
  className,
  delay = 0,
  inView = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  inView?: boolean;
}) {
  const words = text.split(" ");
  const visible = { y: "0%", rotate: 0, opacity: 1 };

  return (
    <span className={cn("inline", className)} aria-label={text}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-clip align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block will-change-transform"
            initial={{ y: "115%", rotate: 2, opacity: 0 }}
            {...(inView
              ? { whileInView: visible, viewport: { once: true, amount: .5, margin: "0px 0px -6% 0px" } }
              : { animate: visible })}
            transition={{
              duration: .95,
              delay: delay + Math.min(index * .035, .35),
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "left bottom" }}
          >
            {word}
          </motion.span>
          {index < words.length - 1 ? "\u00a0" : null}
        </span>
      ))}
    </span>
  );
}
