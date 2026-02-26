import type { EffectMode, LayoutMode, PhotoItem } from '../types/gallery.types';

export const layoutOptions: { value: LayoutMode; label: string }[] = [
  { value: 'masonry', label: 'masonry' },
  { value: 'cinematic', label: 'cinematic' },
  { value: 'editorial', label: 'editorial' }
];

export const effectOptions: { value: EffectMode; label: string }[] = [
  { value: 'classic', label: 'classic' },
  { value: 'noir', label: 'noir' },
  { value: 'sepia', label: 'sepia' },
  { value: 'glow', label: 'glow' },
  { value: 'etched', label: 'etched' },
  { value: 'dream', label: 'dream' }
];

export const seedPhotos: PhotoItem[] = [
  { id: '10', src: 'https://picsum.photos/id/10/1400/900', alt: 'Mountain valley', hint: 'lg' },
  { id: '64', src: 'https://picsum.photos/id/64/900/1400', alt: 'Forest portrait orientation', hint: 'tall' },
  { id: '1011', src: 'https://picsum.photos/id/1011/1200/800', alt: 'Lake and mountains', hint: 'md' },
  { id: '1025', src: 'https://picsum.photos/id/1025/800/1100', alt: 'Wildlife portrait', hint: 'sm' },
  { id: '1039', src: 'https://picsum.photos/id/1039/1200/900', alt: 'River stream in woods', hint: 'md' },
  { id: '1040', src: 'https://picsum.photos/id/1040/900/1400', alt: 'Canyon cliffs', hint: 'tall' },
  { id: '106', src: 'https://picsum.photos/id/106/900/700', alt: 'Foggy forest path', hint: 'sm' },
  { id: '119', src: 'https://picsum.photos/id/119/1200/850', alt: 'Mountain road', hint: 'md' },
  { id: '152', src: 'https://picsum.photos/id/152/1000/720', alt: 'Ocean and horizon', hint: 'sm' },
  { id: '188', src: 'https://picsum.photos/id/188/900/1400', alt: 'Sunlit pines', hint: 'tall' },
  { id: '201', src: 'https://picsum.photos/id/201/1200/820', alt: 'Desert ridge', hint: 'md' },
  { id: '214', src: 'https://picsum.photos/id/214/920/700', alt: 'Rocky cliff face', hint: 'sm' }
];
