"use client";
import { Dialog as Primitive } from "radix-ui";
import { Button } from "./button";
import { useLanguage } from "@/providers/language-provider";

export function Dialog({ trigger }: { trigger: React.ReactNode }) {
  const { language } = useLanguage();
  const text =
    language === "es"
      ? {
          title: "Un ERP para toda la operación",
          description:
            "8ity centraliza finanzas, proyectos, personas, documentos y automatizaciones. Herramientas adicionales como CRM y agentes de IA trabajan sobre la misma información y permisos.",
          close: "Cerrar",
        }
      : {
          title: "One ERP for your entire operation",
          description:
            "8ity centralizes finance, projects, people, documents and automations. Additional tools such as CRM and AI agents work from the same information and permissions.",
          close: "Close",
        };
  return (
    <Primitive.Root>
      <Primitive.Trigger asChild>{trigger}</Primitive.Trigger>
      <Primitive.Portal>
        <Primitive.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        <Primitive.Content className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-[1.75rem] border border-border bg-surface p-6 shadow-2xl sm:p-8">
          <Primitive.Title className="text-2xl font-semibold tracking-tight">
            {text.title}
          </Primitive.Title>
          <Primitive.Description className="mt-3 leading-7 text-muted-foreground">
            {text.description}
          </Primitive.Description>
          <div className="mt-7 flex justify-end">
            <Primitive.Close asChild>
              <Button>{text.close}</Button>
            </Primitive.Close>
          </div>
          <Primitive.Close
            className="absolute right-5 top-5 grid size-9 place-items-center rounded-full hover:bg-primary-soft"
            aria-label={text.close}
          >
            ×
          </Primitive.Close>
        </Primitive.Content>
      </Primitive.Portal>
    </Primitive.Root>
  );
}
