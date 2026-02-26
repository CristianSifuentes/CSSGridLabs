export type LayoutMode = 'masonry' | 'cinematic' | 'editorial';
export type EffectMode = 'classic' | 'noir' | 'sepia' | 'glow' | 'etched' | 'dream';

export type PhotoItem = {
  id: string;
  src: string;
  alt: string;
  hint: 'lg' | 'md' | 'sm' | 'tall';
};
