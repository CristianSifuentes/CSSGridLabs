import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { FeatureGuard } from '../guards/FeatureGuard';
import { ShellLayout } from '../views/ShellLayout';

const HomePage = lazy(() => import('@features/home/views/HomePage'));
const GalleryPage = lazy(() => import('@features/gallery/views/GalleryPage'));

export const AppRouter = () => (
  <Suspense fallback={<div className="boot-loader">Preparing experience…</div>}>
    <Routes>
      <Route element={<ShellLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/gallery"
          element={
            <FeatureGuard flag="gallery">
              <GalleryPage />
            </FeatureGuard>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </Suspense>
);
