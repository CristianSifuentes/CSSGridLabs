import { wait } from '@shared/services/httpClient';
import { seedPhotos } from '../utils/gallery.constants';

export class GalleryRepository {
  async listPhotos() {
    await wait(120);
    return seedPhotos;
  }
}
