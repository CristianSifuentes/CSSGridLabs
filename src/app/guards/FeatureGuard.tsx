import type { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { featureFlags } from '@shared/constants/featureFlags';

type FeatureGuardProps = PropsWithChildren<{ flag: keyof typeof featureFlags }>;

export const FeatureGuard = ({ flag, children }: FeatureGuardProps) => {
  if (!featureFlags[flag]) {
    return <Navigate to="/" replace />;
  }

  return children;
};
