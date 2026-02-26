import { useEffect, useMemo, useState } from 'react';
import type { PhotoItem } from '../types/gallery.types';
import { GalleryManager } from '../services/GalleryManager';
import { GalleryRepository } from '../services/GalleryRepository';

export const useGalleryFeed = () => {
  const [photos, setPhotos] = useState<PhotoItem[]>([]);
  const [isLoading, setLoading] = useState(true);

  const manager = useMemo(() => new GalleryManager(new GalleryRepository()), []);

  useEffect(() => {
    let mounted = true;
    manager.getGalleryFeed().then((items) => {
      if (mounted) {
        setPhotos(items);
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, [manager]);

  return { photos, isLoading };
};
