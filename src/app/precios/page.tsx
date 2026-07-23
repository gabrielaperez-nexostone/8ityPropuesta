import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { EvoFooter } from "@/components/sections/evo-landing";
import { PricingPage } from "@/components/sections/pricing-page";

export const metadata: Metadata = {
  title: "Precios — 8ity",
  description:
    "Un solo 8ity. Acceso completo a todas las integraciones, agentes y módulos en cada plan. Lo único que escala son los AI credits.",
};

export default function PreciosPage() {
  return (
    <>
      <Header />
      <PricingPage />
      <EvoFooter />
    </>
  );
}
