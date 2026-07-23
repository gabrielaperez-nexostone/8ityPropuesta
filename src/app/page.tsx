import { Header } from "@/components/layout/header";
import { EvoLanding, EvoFooter } from "@/components/sections/evo-landing";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="top" />
        <EvoLanding />
      </main>
      <EvoFooter />
    </>
  );
}
