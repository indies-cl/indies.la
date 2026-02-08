import { memo } from "react";
import { Marquee } from "./Marquee";

type Props = {
  readonly photos: readonly string[];
  readonly alt: string;
};

export const PhotoCarousel = memo(function PhotoCarousel({
  photos,
  alt,
}: Props) {
  if (photos.length === 0) return null;

  return (
    <Marquee pauseOnHover className="[--duration:30s] [--gap:0.5rem]">
      {photos.map((photo, i) => (
        <img
          key={photo}
          src={photo}
          alt={`${alt} ${i + 1}`}
          className="h-[50dvh] w-auto object-cover shrink-0"
          loading="lazy"
        />
      ))}
    </Marquee>
  );
});
