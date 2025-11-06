'use client';

import dynamic from 'next/dynamic';

const Silk = dynamic(() => import('./Silk'), { ssr: false });

export default function SilkBackground() {
  return <Silk speed={5} scale={1.5} color="#1D4E6B" noiseIntensity={1.2} rotation={0} />;
}
