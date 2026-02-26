import { useCallback } from 'react';

export const useMasonryEngine = (container: HTMLDivElement | null) => {
  return useCallback(() => {
    if (!container) return;

    const style = getComputedStyle(container);
    const row = Number.parseFloat(style.gridAutoRows) || 8;
    const gap = Number.parseFloat(style.gap) || 0;

    container.querySelectorAll<HTMLElement>('.card').forEach((card) => {
      const img = card.querySelector('img');
      if (!img) return;

      const ratio = (img.naturalHeight || 900) / (img.naturalWidth || 1200);
      const width = card.clientWidth || 220;
      const targetHeight = Math.max(140, width * ratio);
      const span = Math.max(18, Math.ceil((targetHeight + gap) / (row + gap)));

      card.style.gridRowEnd = `span ${span}`;
    });
  }, [container]);
};
