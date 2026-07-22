"use client";
import Image from "next/image";
import { MainContainer } from "./main-container";
import { useLanguage } from "@/providers/language-provider";
export function Footer() {
  const { language } = useLanguage();
  return (
    <footer className="border-t border-border py-10">
      <MainContainer className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 font-semibold">
          <Image src="/8ity-orb.webp" width={28} height={28} alt="" />
          8ity
        </div>
        <p className="max-w-lg text-sm text-muted-foreground">
          {language === "es"
            ? "Un ERP flexible y fácil de usar, con IA integrada y menor costo que operar con múltiples herramientas separadas."
            : "A flexible, easy-to-use ERP with built-in AI and a lower cost than operating across multiple disconnected tools."}
        </p>
      </MainContainer>
    </footer>
  );
}
