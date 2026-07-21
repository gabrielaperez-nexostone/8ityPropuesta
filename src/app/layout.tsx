import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/providers/app-providers";
import "keen-slider/keen-slider.min.css";
import "lenis/dist/lenis.css";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const title = "8ity — The operating system for startups";
const description = "Finance, CRM, projects, documents, automations and AI agents in one connected workspace. Disponible en español e inglés.";

export const metadata: Metadata = {
    metadataBase: new URL("https://8ity.org"),
    title,
    description,
    icons: { icon: "/8ity-orb.webp" },
    openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "8ity — Todo tu negocio. Un solo contexto." }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
