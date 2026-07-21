# 8ity frontend

Arquitectura frontend y página de demostración para 8ity, construida con Next.js App Router, React, TypeScript estricto, Tailwind CSS, Radix Primitives, Motion, Lenis y Keen Slider.

## Requisitos y comandos

- Node.js 20.19 o 22.13+
- npm

```bash
npm install
npm run dev
npm run lint
npm run build
```

La aplicación estará disponible en `http://localhost:3000` durante el desarrollo.

## Estructura

- `src/app`: rutas, layout, metadatos y estados de la aplicación.
- `src/components/layout`: header, footer y contenedores.
- `src/components/ui`: wrappers accesibles de Radix y botones.
- `src/components/motion`: primitivas de aparición, revelado y stagger.
- `src/components/slider`: carrusel, controles y paginación.
- `src/components/sections`: secciones de la página inicial.
- `src/providers`: configuración global de Motion y Lenis.
- `src/hooks`: media queries y preferencias de movimiento.
- `src/styles/tokens.css`: tokens semánticos del sistema visual.

## Componentes

Los wrappers de Radix (`Dialog`, `AlertDialog`, `DropdownMenu`, `Tooltip`, `Tabs`, `Accordion`, `Select` y `Popover`) aceptan contenido tipado y mantienen foco, teclado y estados accesibles. Se importan desde `@/components/ui/<componente>`.

Las primitivas `FadeIn`, `Reveal`, `StaggerContainer` y `StaggerItem` se importan desde `@/components/motion`. La configuración global respeta `prefers-reduced-motion`.

`SmoothScrollProvider` crea una única instancia de Lenis, se desactiva si el usuario prefiere movimiento reducido y no sincroniza contenido con el scroll.

`Carousel` recibe cualquier `children`, así como `loop`, `autoplay`, `interval` y `label`. Incluye drag, gestos táctiles, flechas, paginación, teclado y breakpoints responsive. El autoplay se detiene con hover, foco o preferencia de movimiento reducido.

## Tokens visuales

Los colores, radios, sombras, espacios y duraciones viven en `src/styles/tokens.css`. Los componentes consumen nombres semánticos como `--background`, `--surface`, `--foreground`, `--primary`, `--border` y `--radius-md`, evitando repetir valores hexadecimales.
