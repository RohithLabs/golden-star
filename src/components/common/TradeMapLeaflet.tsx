import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface TradeHub {
  name: string;
  country: string;
  role: string;
  lat: number;
  lng: number;
}

const HUBS: TradeHub[] = [
  { name: 'Chennai Port', country: 'India', role: 'Headquarters & Export Gateway', lat: 13.0827, lng: 80.2707 },
  { name: 'Jebel Ali Port, Dubai', country: 'UAE', role: 'Middle East Distribution Hub', lat: 25.0112, lng: 55.0617 },
  { name: 'King Abdulaziz Port, Dammam', country: 'Saudi Arabia', role: 'Petrochemical & Energy Gateway', lat: 26.4344, lng: 50.1033 },
  { name: 'Port of London', country: 'UK', role: 'European Maritime Terminal', lat: 51.5074, lng: 0.1278 },
  { name: 'Port of Shanghai', country: 'China', role: 'East Asia Bulk & Container Hub', lat: 31.2304, lng: 121.4737 },
  { name: 'Port of Singapore', country: 'Singapore', role: 'Global Transshipment Hub', lat: 1.3521, lng: 103.8198 },
  { name: 'Port of Santos', country: 'Brazil', role: 'Agro Commodities & Sugar Gateway', lat: -23.9619, lng: -46.3322 },
  { name: 'Port of Houston', country: 'USA', role: 'Polymer & Base Oils Terminal', lat: 29.7604, lng: -95.3698 },
];

export const TradeMapLeaflet: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Create Leaflet dark map
    const map = L.map(mapContainerRef.current, {
      center: [22, 55],
      zoom: 3,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: false,
      attributionControl: false,
    });
    mapInstanceRef.current = map;

    // Zoom control at bottom right
    L.control.zoom({ position: 'bottomright' }).addTo(map);

    // High-resolution Esri World Imagery (Satellite) tiles — 100% free, no watermark, global coverage
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      attribution: 'Esri',
    }).addTo(map);

    // Subtle dark overlay to match Golden Star luxury black theme
    L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      opacity: 0.7,
    }).addTo(map);

    // Custom Gold Pulse Marker Icon
    const createHubIcon = (isHq: boolean) =>
      L.divIcon({
        className: 'custom-hub-marker',
        html: `
          <div style="position:relative; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center;">
            <div style="position: absolute; width: 22px; height: 22px; border-radius: 50%; background: ${isHq ? '#DF9A28' : '#38BDF8'}; opacity: 0.45; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
            <div style="width: 10px; height: 10px; border-radius: 50%; background: ${isHq ? '#DF9A28' : '#38BDF8'}; border: 2px solid #FFFFFF; box-shadow: 0 0 12px ${isHq ? '#DF9A28' : '#38BDF8'};"></div>
          </div>
        `,
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

    // Add Markers
    HUBS.forEach((hub) => {
      const isHq = hub.country === 'India';
      const marker = L.marker([hub.lat, hub.lng], { icon: createHubIcon(isHq) }).addTo(map);

      marker.bindPopup(
        `
        <div style="font-family: 'Montserrat', sans-serif; background: #111111; color: #FFFFFF; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); min-width: 180px;">
          <div style="font-size: 9px; font-weight: 800; text-transform: uppercase; color: ${isHq ? '#DF9A28' : '#38BDF8'}; letter-spacing: 0.05em; margin-bottom: 2px;">
            ${hub.role}
          </div>
          <div style="font-size: 13px; font-weight: 700; color: #FFFFFF; margin-bottom: 4px;">
            ${hub.name}
          </div>
          <div style="font-size: 11px; color: #CCCCCC;">
            ${hub.country} • Active Corridor
          </div>
        </div>
        `,
        { className: 'golden-star-dark-popup' }
      );
    });

    // Draw connecting trade corridor polylines (Gold dashed routes)
    const routes = [
      [[13.0827, 80.2707], [25.0112, 55.0617]], // Chennai -> Dubai
      [[25.0112, 55.0617], [26.4344, 50.1033]], // Dubai -> Dammam
      [[25.0112, 55.0617], [51.5074, 0.1278]],  // Dubai -> London
      [[13.0827, 80.2707], [1.3521, 103.8198]], // Chennai -> Singapore
      [[1.3521, 103.8198], [31.2304, 121.4737]],// Singapore -> Shanghai
      [[25.0112, 55.0617], [-23.9619, -46.3322]], // Dubai -> Santos
      [[25.0112, 55.0617], [29.7604, -95.3698]], // Dubai -> Houston
    ];

    routes.forEach((coords) => {
      L.polyline(coords as L.LatLngExpression[], {
        color: '#DF9A28',
        weight: 2,
        opacity: 0.7,
        dashArray: '5, 8',
      }).addTo(map);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className={`w-full h-full rounded-2xl overflow-hidden bg-[#0A0A0A] ${className}`}
      style={{ minHeight: '520px' }}
    />
  );
};
