"use client";
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage, type Language } from "@/providers/language-provider";

const nav = {
  es: [
    { label: "ERP", href: "#plataforma" },
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Para tu equipo", href: "#perfiles" },
    { label: "Preguntas", href: "#preguntas" },
  ],
  en: [
    { label: "ERP", href: "#plataforma" },
    { label: "How it works", href: "#como-funciona" },
    { label: "For your team", href: "#perfiles" },
    { label: "Questions", href: "#preguntas" },
  ],
} as const;

export function Header() {
  const { language, setLanguage } = useLanguage();
  const items = nav[language];
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-semibold"
          aria-label="8ity, home"
        >
          <Image src="/8ity-orb.webp" width={34} height={34} alt="" priority />
          <span>8ity</span>
        </Link>
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label={
            language === "es" ? "Navegación principal" : "Main navigation"
          }
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitch language={language} setLanguage={setLanguage} />
          <div className="hidden lg:block">
            <Button asChild size="sm">
              <Link href="#plataforma">
                {language === "es" ? "Explorar" : "Explore"}{" "}
                <span aria-hidden>↗</span>
              </Link>
            </Button>
          </div>
          <div className="md:hidden">
            <DropdownMenu
              items={items.map(({ label, href }) => ({ label, href }))}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitch({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (language: Language) => void;
}) {
  return (
    <div
      className="flex rounded-full border border-border bg-surface p-1"
      aria-label="Language selector"
    >
      {(["es", "en"] as const).map((option) => (
        <button
          key={option}
          onClick={() => setLanguage(option)}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition-colors ${language === option ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
          aria-pressed={language === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
