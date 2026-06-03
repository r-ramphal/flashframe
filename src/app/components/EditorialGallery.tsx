"use client";

// Galerij voor het Editorial-ontwerp: Aceternity Apple-cards-carousel,
// gevoed met de gedeelde galleryItems (alleen de foto-items).
import { Carousel, Card } from "../../components/ui/apple-cards-carousel";
import { galleryItems } from "../content";

export default function EditorialGallery() {
  const photos = galleryItems.filter((g) => g.type === "image");

  const cards = photos.map((item, index) => (
    <Card
      key={item.id}
      index={index}
      card={{
        src: item.src,
        title: item.title,
        category: "Sfeerimpressie",
        content: (
          <p className="max-w-2xl text-base text-neutral-600 md:text-xl">
            {item.description}
          </p>
        ),
      }}
    />
  ));

  return <Carousel items={cards} />;
}
