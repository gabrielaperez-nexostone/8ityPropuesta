import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { EvoFooter } from "@/components/sections/evo-landing";
import { IntegrationsPage } from "@/components/sections/integrations-page";

export const metadata: Metadata = {
  title: "Integraciones — 8ity",
  description:
    "Conecta bancos de LatAm, Google Workspace, Stripe, Claude, Gemini y herramientas MCP con el ERP inteligente de 8ity.",
};

export default function IntegracionesRoute() {
  return (
    <>
      <Header />
      <IntegrationsPage />
      <EvoFooter />
    </>
  );
}
