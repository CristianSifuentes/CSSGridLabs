import type { PhotoItem } from '../types/gallery.types';
import { GalleryRepository } from './GalleryRepository';

export class GalleryManager {
  constructor(private readonly repository: GalleryRepository) {}

  async getGalleryFeed(): Promise<PhotoItem[]> {
    const photos = await this.repository.listPhotos();
    return [...photos, ...photos].map((photo, idx) => ({ ...photo, id: `${photo.id}-${idx}` }));
  }
}
