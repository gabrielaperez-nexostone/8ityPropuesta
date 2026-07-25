import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { AppProviders } from "@/providers/app-providers";
import "keen-slider/keen-slider.min.css";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "8ity — Intelligent ERP for modern companies";
const description =
  "An AI-first modular ERP that makes company management easier and helps replace multiple disconnected subscriptions with one adaptable ecosystem.";

export const metadata: Metadata = {
  metadataBase: new URL("https://8ity.org"),
  title,
  description,
  icons: { icon: "/8ity-orb.webp" },
  openGraph: {
    title,
    description,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "8ity — ERP inteligente para gestionar toda tu empresa.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <body>
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '[style*="opacity:0"],[style*="opacity: 0"]{opacity:1!important;transform:none!important}',
            }}
          />
        </noscript>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
