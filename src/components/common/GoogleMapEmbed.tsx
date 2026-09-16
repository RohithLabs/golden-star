import React from 'react';
import { Map, MapControls } from '@/components/ui/map';

interface GoogleMapEmbedProps {
  className?: string;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({ className = '' }) => {
  return (
    <div className={`h-[480px] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm relative ${className}`}>
      <Map center={[78.9629, 20.5937]} zoom={3}>
        <MapControls />
      </Map>
    </div>
  );
};
