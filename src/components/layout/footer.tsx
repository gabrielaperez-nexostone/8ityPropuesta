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
            ? "Un ERP modular para gestionar toda tu empresa, con CRM, automatizaciones y agentes de IA como herramientas conectadas."
            : "A modular ERP for managing your whole company, with CRM, automations and AI agents as connected tools."}
        </p>
      </MainContainer>
    </footer>
  );
}
