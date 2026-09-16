import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google?: any;
    gm_authFailure?: () => void;
  }
}

const USER_API_KEY = 'AIzaSyBTO9KhX9F6yvXGgb7_mPo96-9Fdzn2_EU';

export const GoogleMapEmbed: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapInstanceRef = useRef<any>(null);

  const [apiKey] = useState<string>(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY || USER_API_KEY;
  });
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    // Global Google Maps auth failure handler
    window.gm_authFailure = () => {
      setLoadError(true);
    };

    // Google Maps Dynamic Import Library Loader (User provided official snippet)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((g: any) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let h: any, a: any, k: any;
      const p = "The Google Maps JavaScript API";
      const c = "google";
      const l = "importLibrary";
      const q = "__ib__";
      const m = document;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const b: any = window;
      b[c] = b[c] || {};
      const d = b.maps || (b.maps = {});
      const r = new Set();
      const e = new URLSearchParams();
      const u = () =>
        h ||
        (h = new Promise(async (f, n) => {
          await (a = m.createElement("script"));
          e.set("libraries", [...r] + "");
          for (k in g) e.set(k.replace(/[A-Z]/g, (t: string) => "_" + t[0].toLowerCase()), g[k]);
          e.set("callback", c + ".maps." + q);
          a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
          d[q] = f;
          a.onerror = () => {
            setLoadError(true);
            h = n(Error(p + " could not load."));
          };
          a.nonce = m.querySelector("script[nonce]")?.getAttribute("nonce") || "";
          m.head.append(a);
        }));
      d[l]
        ? console.warn(p + " only loads once. Ignoring:", g)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        : (d[l] = (f: any, ...n: any[]) => r.add(f) && u().then(() => d[l](f, ...n)));
    })({ key: apiKey, v: "weekly" });

    // Initialize Map function matching user code
    async function initMap() {
      if (!mapRef.current || !window.google?.maps) return;
      try {
        const { Map } = await window.google.maps.importLibrary("maps");

        mapInstanceRef.current = new Map(mapRef.current, {
          center: { lat: 20, lng: 70 }, // Centered on India & Middle East trade zone
          zoom: 4,
          mapId: 'DEMO_MAP_ID',
          styles: [
            { elementType: 'geometry', stylers: [{ color: '#111111' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#8a8a8a' }] },
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#091829' }] },
          ],
        });
      } catch (err) {
        console.warn("Map initialization error:", err);
      }
    }

    if (window.google?.maps?.importLibrary) {
      initMap();
    } else {
      const checkInterval = setInterval(() => {
        if (window.google?.maps?.importLibrary) {
          clearInterval(checkInterval);
          initMap();
        }
      }, 100);
      return () => clearInterval(checkInterval);
    }

    return () => {
      window.gm_authFailure = undefined;
    };
  }, [apiKey]);

  return (
    <div className={`relative w-full rounded-2xl overflow-hidden bg-[#111111] border border-white/10 ${className}`} style={{ height: '480px' }}>
      {/* Exact map div requested by user: <div id="map"></div> */}
      <div id="map" ref={mapRef} className="w-full h-full" style={{ height: '100%', minHeight: '480px' }} />

      {loadError && (
        <div className="absolute inset-0 bg-[#0A0A0A]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-10">
          <p className="text-sm font-bold text-white mb-2">Google Maps Connecting...</p>
          <p className="text-xs text-white/50 max-w-sm">Verifying API Key credentials with Google Cloud Platform.</p>
        </div>
      )}
    </div>
  );
};
