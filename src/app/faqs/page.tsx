import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { EvoFooter } from "@/components/sections/evo-landing";
import { FaqsPage } from "@/components/sections/faqs-page";

export const metadata: Metadata = {
  title: "FAQs — 8ity",
  description:
    "Preguntas frecuentes sobre 8ity: qué es, cómo funciona, seguridad, AI credits y planes.",
};

export default function FaqsRoute() {
  return (
    <>
      <Header />
      <FaqsPage />
      <EvoFooter />
    </>
  );
}
