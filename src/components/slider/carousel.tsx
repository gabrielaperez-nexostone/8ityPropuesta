"use client";
import { Children, useCallback, useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { CarouselControls } from "./carousel-controls";
import { CarouselPagination } from "./carousel-pagination";

type CarouselProps = { children: React.ReactNode; loop?: boolean; autoplay?: boolean; interval?: number; label?: string };
export function Carousel({ children, loop = true, autoplay = true, interval = 3800, label = "Carrusel" }: CarouselProps) {
  const slides = Children.toArray(children);
  const reducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop,
    mode: "snap",
    slides: { perView: 1.08, spacing: 16 },
    breakpoints: {
      "(min-width: 640px)": { slides: { perView: 2.05, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
    slideChanged(slider) { setCurrent(slider.track.details.rel); },
  });
  const next = useCallback(() => instanceRef.current?.next(), [instanceRef]);
  useEffect(() => { if (!autoplay || reducedMotion || paused) return; const timer = window.setInterval(next, interval); return () => window.clearInterval(timer); }, [autoplay, interval, next, paused, reducedMotion]);
  return <div aria-roledescription="carrusel" aria-label={label} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)} onKeyDown={(event) => { if (event.key === "ArrowLeft") instanceRef.current?.prev(); if (event.key === "ArrowRight") instanceRef.current?.next(); }}><div ref={sliderRef} className="keen-slider">{slides.map((slide, index) => <div className="keen-slider__slide" key={index}>{slide}</div>)}</div><div className="mt-6 flex items-center justify-between"><CarouselPagination count={slides.length} current={current} goTo={(index) => instanceRef.current?.moveToIdx(index)} /><CarouselControls previous={() => instanceRef.current?.prev()} next={next} disabledPrevious={!loop && current === 0} disabledNext={!loop && current === slides.length - 1} /></div></div>;
}
