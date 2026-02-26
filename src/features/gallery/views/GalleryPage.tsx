import { useEffect, useRef } from 'react';
import { PanelToggleGroup } from '@shared/components/PanelToggleGroup';
import { effectOptions, layoutOptions } from '../utils/gallery.constants';
import { useGalleryStore } from '../store/galleryStore';
import { useGalleryFeed } from '../hooks/useGalleryFeed';
import { useMasonryEngine } from '../hooks/useMasonryEngine';
import { GalleryCard } from './GalleryCard';

const GalleryPage = () => {
  const { photos, isLoading } = useGalleryFeed();
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const { layout, effect, loadedIds, setLayout, setEffect, markLoaded } = useGalleryStore();
  const runMasonry = useMasonryEngine(galleryRef.current);

  useEffect(() => {
    runMasonry();
  }, [layout, photos, runMasonry]);

  useEffect(() => {
    const onResize = () => runMasonry();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [runMasonry]);

  return (
    <section className="gallery-page">
      <PanelToggleGroup title="switch layout" value={layout} options={layoutOptions} onChange={setLayout} />

      <div className="gallery-wrap">
        {isLoading ? <div className="boot-loader">Loading gallery feed…</div> : null}
        <div ref={galleryRef} className={`gallery layout-${layout} fx-${effect}`}>
          {photos.map((photo) => (
            <GalleryCard key={photo.id} photo={photo} loaded={Boolean(loadedIds[photo.id])} onLoad={markLoaded} />
          ))}
        </div>
      </div>

      <PanelToggleGroup title="run effect" value={effect} options={effectOptions} onChange={setEffect} />
    </section>
  );
};

export default GalleryPage;
