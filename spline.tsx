 "use client";

import { Suspense, lazy } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense fallback={<div className="flex h-full w-full items-center justify-center text-sm text-stone-400">Loading 3D showroom…</div>}>
      <Spline scene={scene} className={className} />
    </Suspense>
  );
}