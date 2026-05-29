"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  label: string;
};

export default function BoothImage({ src, alt, label }: Props) {
  const [error, setError] = useState(false);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/10">
      {!error ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-56 h-56 bg-accent/15 rounded-full blur-3xl" />
          <span className="relative text-5xl">📷</span>
          <span className="relative text-sm text-muted">
            Foto: <span className="text-white/70">{label}</span>
          </span>
          <span className="relative text-xs text-muted/60">
            plaats hier je eigen afbeelding
          </span>
        </div>
      )}
    </div>
  );
}
