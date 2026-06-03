"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Photo from "./Photo";

type Item = {
  id: string;
  title: string;
  description: string;
  type: "image" | "video";
  src: string;
};

const items: Item[] = [
  {
    id: "groep",
    title: "Samen voor de lens",
    description: "Gasten die volop genieten tijdens een bedrijfsborrel.",
    type: "image",
    src: "/images/sfeer-1.jpg",
  },
  {
    id: "props",
    title: "Props en plezier",
    description:
      "Maskers, hoeden en accessoires zorgen voor spontane reacties.",
    type: "video",
    src: "/videos/sfeer-1.mp4",
  },
  {
    id: "print",
    title: "Direct geprint",
    description:
      "Een fotostrip als tastbare herinnering, binnen seconden klaar.",
    type: "image",
    src: "/images/sfeer-2.jpg",
  },
  {
    id: "vloer",
    title: "Sfeer op de vloer",
    description: "De booth als middelpunt van het feest.",
    type: "video",
    src: "/videos/sfeer-2.mp4",
  },
  {
    id: "herinnering",
    title: "Mee naar huis",
    description: "Iedere gast gaat met een eigen afdruk de deur uit.",
    type: "image",
    src: "/images/sfeer-3.jpg",
  },
  {
    id: "gezelschap",
    title: "Voor elk gezelschap",
    description: "Van collega's tot vrienden, iedereen doet mee.",
    type: "image",
    src: "/images/sfeer-4.jpg",
  },
];

export default function ExampleCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    breakpoints: { "(max-width: 768px)": { dragFree: true } },
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setCanPrev(emblaApi.canScrollPrev());
      setCanNext(emblaApi.canScrollNext());
      setSelected(emblaApi.selectedScrollSnap());
    };
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="mb-10 md:mb-14 flex items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-primary">
              Sfeerimpressie
            </h2>
            <p className="max-w-xl text-base text-on-surface-variant">
              Een indruk van eerdere evenementen: van geprinte fotostrips tot
              gasten die volop genieten voor de lens.
            </p>
          </div>
          <div className="hidden md:flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Vorige"
              className="w-11 h-11 rounded-full border border-border-subtle flex items-center justify-center text-primary transition-colors hover:bg-surface-faint disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Volgende"
              className="w-11 h-11 rounded-full border border-border-subtle flex items-center justify-center text-primary transition-colors hover:bg-surface-faint disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="min-w-0 shrink-0 grow-0 basis-[85%] sm:basis-1/2 lg:basis-1/3 pl-5"
              >
                <div className="image-card group relative aspect-[4/5] bg-surface-container overflow-hidden rounded-xl">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      aria-label={item.title}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <Photo
                      src={item.src}
                      alt={item.title}
                      label={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ga naar slide ${i + 1}`}
              className={`h-2 w-2 rounded-full transition-colors ${
                selected === i ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
