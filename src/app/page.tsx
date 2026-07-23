import { Hero } from "@/components/sections/hero";
import { PlatformOverview } from "@/components/sections/platform-overview";
import { MainContainer } from "@/components/layout/main-container";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { UserGuide } from "@/components/sections/user-guide";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainContainer>
          <div id="top" />
          <Hero />
          <div id="plataforma" />
          <PlatformOverview />
          <UserGuide />
        </MainContainer>
      </main>
      <Footer />
    </>
  );
}
