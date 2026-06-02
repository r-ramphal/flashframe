"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
};

// Toont een afbeelding uit /public/images. Zolang het bestand ontbreekt,
// verschijnt automatisch een nette placeholder i.p.v. een kapotte afbeelding.
export default function Photo({ src, alt, label, className }: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-container text-center px-4">
        <span className="material-symbols-outlined text-text-muted text-4xl">
          add_photo_alternate
        </span>
        <span className="text-sm text-on-surface-variant">
          {label ?? alt}
        </span>
        <span className="text-xs text-text-muted">plaats hier je eigen foto</span>
      </div>
    );
  }

  // eslint-disable-next-line @next/next/no-img-element
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  );
}
