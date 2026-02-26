import { useMemo } from 'react';
import type { PhotoItem } from '../types/gallery.types';

const FALLBACK_SVG = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'>
  <defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='#2f3646'/><stop offset='1' stop-color='#1c202b'/></linearGradient></defs>
  <rect width='1200' height='900' fill='url(#g)'/>
  <text x='50%' y='48%' text-anchor='middle' fill='#d6ddeb' font-size='56' font-family='Arial, sans-serif'>Da Vinci Gallery</text>
  <text x='50%' y='56%' text-anchor='middle' fill='#95a0b4' font-size='30' font-family='Arial, sans-serif'>Image unavailable · fallback rendered</text>
</svg>
`);

const FALLBACK_DATA_URI = `data:image/svg+xml;charset=UTF-8,${FALLBACK_SVG}`;

type GalleryCardProps = {
  photo: PhotoItem;
  loaded: boolean;
  onLoad: (id: string) => void;
};

export const GalleryCard = ({ photo, loaded, onLoad }: GalleryCardProps) => {
  const className = useMemo(() => `card card-${photo.hint} ${loaded ? 'is-loaded' : ''}`.trim(), [loaded, photo.hint]);

  return (
    <article className={className}>
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        onLoad={() => onLoad(photo.id)}
        onError={(event) => {
          event.currentTarget.src = FALLBACK_DATA_URI;
          onLoad(photo.id);
        }}
      />
    </article>
  );
};
