'use client';

export default function NoiseOverlay() {
  return (
    <svg
      className="fixed inset-0 pointer-events-none z-50 opacity-[0.15] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.8"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
