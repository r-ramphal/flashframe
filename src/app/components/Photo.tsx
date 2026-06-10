"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "./Icon";

type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  // Geef per gebruik door hoe breed de afbeelding op het scherm staat,
  // zodat next/image het juiste (kleine) bestand naar mobiel stuurt.
  sizes?: string;
  // Alleen true voor de afbeelding die bovenaan de pagina direct zichtbaar is (LCP).
  priority?: boolean;
};

// Toont een afbeelding uit /public/images via next/image (automatisch
// geschaald en gecomprimeerd per apparaat). Zolang het bestand ontbreekt,
// verschijnt automatisch een nette placeholder i.p.v. een kapotte afbeelding.
export default function Photo({
  src,
  alt,
  label,
  className,
  sizes = "100vw",
  priority = false,
}: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-container text-center px-4">
        <Icon name="add-photo" className="w-10 h-10 text-text-muted" />
        <span className="text-sm text-on-surface-variant">
          {label ?? alt}
        </span>
        <span className="text-xs text-text-muted">plaats hier je eigen foto</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
      className={className}
    />
  );
}
