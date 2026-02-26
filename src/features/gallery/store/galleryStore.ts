import { create } from 'zustand';
import type { EffectMode, LayoutMode } from '../types/gallery.types';

type GalleryState = {
  layout: LayoutMode;
  effect: EffectMode;
  loadedIds: Record<string, true>;
  setLayout: (layout: LayoutMode) => void;
  setEffect: (effect: EffectMode) => void;
  markLoaded: (id: string) => void;
};

export const useGalleryStore = create<GalleryState>((set) => ({
  layout: 'masonry',
  effect: 'classic',
  loadedIds: {},
  setLayout: (layout) => set({ layout }),
  setEffect: (effect) => set({ effect }),
  markLoaded: (id) => set((state) => ({ loadedIds: { ...state.loadedIds, [id]: true } }))
}));
