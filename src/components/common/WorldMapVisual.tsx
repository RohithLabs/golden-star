import React, { useState } from 'react';
import { Ship, Anchor, Clock } from 'lucide-react';

interface TradeHub {
  id: string;
  name: string;
  city: string;
  country: string;
  code: string;
  x: number;
  y: number;
  role: 'Export Hub' | 'Import Gateway' | 'Bilateral Hub';
  commodities: string[];
  avgTransitDays: string;
  vesselFrequency: string;
}

export const WorldMapVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'agro' | 'petro'>('all');
  const [selectedHub, setSelectedHub] = useState<TradeHub>({
    id: 'dubai',
    name: 'Jebel Ali Port Terminal',
    city: 'Dubai / Jebel Ali',
    country: 'United Arab Emirates',
    code: 'AEJEA',
    x: 610,
    y: 208,
    role: 'Bilateral Hub',
    commodities: ['Petrochemicals & Base Oils', 'Agricultural Transshipment', 'Fertilizers & Polymers'],
    avgTransitDays: '12 – 16 Days to Europe / Asia',
    vesselFrequency: 'Weekly Direct Liners'
  });

  const hubs: TradeHub[] = [
    {
      id: 'rotterdam',
      name: 'Port of Rotterdam Gateway',
      city: 'Rotterdam',
      country: 'Netherlands / EU',
      code: 'NLRTM',
      x: 485,
      y: 138,
      role: 'Import Gateway',
      commodities: ['Fresh Produce (Cold Chain)', 'Polymer Resins', 'Base Oils SN150'],
      avgTransitDays: '14 – 18 Days from Middle East',
      vesselFrequency: 'Daily Feeder & Deepsea'
    },
    {
      id: 'dubai',
      name: 'Jebel Ali Port Terminal',
      city: 'Dubai / Jebel Ali',
      country: 'United Arab Emirates',
      code: 'AEJEA',
      x: 610,
      y: 208,
      role: 'Bilateral Hub',
      commodities: ['Petrochemicals & Base Oils', 'Agricultural Transshipment', 'Fertilizers & Polymers'],
      avgTransitDays: '12 – 16 Days to Europe / Asia',
      vesselFrequency: 'Weekly Direct Liners'
    },
    {
      id: 'shanghai',
      name: 'Port of Shanghai & Ningbo',
      city: 'Shanghai',
      country: 'China',
      code: 'CNSHA',
      x: 785,
      y: 198,
      role: 'Export Hub',
      commodities: ['Chemical Feedstocks', 'Apples & Agro Commodities', 'Industrial Fasteners'],
      avgTransitDays: '18 – 24 Days to GCC / EU',
      vesselFrequency: 'Bi-Weekly Scheduled Sailings'
    },
    {
      id: 'singapore',
      name: 'Port of Singapore Transshipment Hub',
      city: 'Singapore',
      country: 'Singapore',
      code: 'SGSIN',
      x: 745,
      y: 268,
      role: 'Bilateral Hub',
      commodities: ['Bunkering Fuel', 'Bitumen 60/70', 'Reefer Container Freight'],
      avgTransitDays: '10 – 14 Days Regional Express',
      vesselFrequency: 'Continuous Vessel Berthing'
    },
    {
      id: 'houston',
      name: 'Port of Houston Intermodal Basin',
      city: 'Houston, Texas',
      country: 'United States',
      code: 'USHOU',
      x: 215,
      y: 192,
      role: 'Export Hub',
      commodities: ['Virgin Polymer Resins', 'Base Lubricants', 'Agricultural Grains'],
      avgTransitDays: '22 – 28 Days to Middle East / Asia',
      vesselFrequency: 'Weekly Container Service'
    },
    {
      id: 'santos',
      name: 'Port of Santos Terminal',
      city: 'Santos / São Paulo',
      country: 'Brazil',
      code: 'BRSSZ',
      x: 325,
      y: 355,
      role: 'Export Hub',
      commodities: ['Agricultural Commodities', 'Soybeans & Grains', 'Refined Sugar'],
      avgTransitDays: '20 – 26 Days to Europe',
      vesselFrequency: 'Bi-Weekly Bulk Vessels'
    },
    {
      id: 'durban',
      name: 'Port of Durban Terminal',
      city: 'Durban',
      country: 'South Africa',
      code: 'ZADUR',
      x: 555,
      y: 368,
      role: 'Bilateral Hub',
      commodities: ['Citrus Fruits & Produce', 'Specialty Minerals', 'Petroleum Byproducts'],
      avgTransitDays: '16 – 20 Days to GCC / Asia',
      vesselFrequency: 'Weekly Scheduled Loops'
    }
  ];

  return (
    <div className={`w-full rounded-2xl bg-[#0F172A] border border-[#24262A] text-white overflow-hidden shadow-2xl ${className}`}>
      {/* Header Bar */}
      <div className="p-6 sm:p-8 border-b border-[#24262A] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#D4A017] uppercase font-inter mb-1">
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse"></span>
            <span>REAL-TIME GLOBAL SHIPPING & MARITIME CORRIDORS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-inter text-white tracking-tight">
            International Freight Network & Seaport Terminals
          </h3>
          <p className="text-xs sm:text-sm text-[#A5A7AD] font-inter mt-1 max-w-2xl">
            Live multimodal trade routes connecting certified origins to key commercial destination ports across 25+ nations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 bg-[#111214] p-1.5 rounded-lg border border-[#24262A] shrink-0">
          <button
            type="button"
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#D4A017] text-[#111111]'
                : 'text-[#A5A7AD] hover:text-white'
            }`}
          >
            All Corridors
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('agro')}
            className={`px-3.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'agro'
                ? 'bg-[#10B981] text-white'
                : 'text-[#A5A7AD] hover:text-white'
            }`}
          >
            Agri Reefers
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter('petro')}
            className={`px-3.5 py-1 rounded text-xs font-semibold transition-all cursor-pointer ${
              activeFilter === 'petro'
                ? 'bg-[#8B5CF6] text-white'
                : 'text-[#A5A7AD] hover:text-white'
            }`}
          >
            Petro & Tankers
          </button>
        </div>
      </div>

      {/* Real Geographic SVG World Map Container */}
      <div className="relative w-full aspect-[21/10] min-h-[360px] sm:min-h-[440px] bg-[#0A0E1A] overflow-hidden flex items-center justify-center">
        {/* Subtle Latitude/Longitude Grid */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />

        <svg
          viewBox="0 0 1000 480"
          className="w-full h-full object-contain relative z-10 select-none"
          aria-label="Real Global Trade Shipping Map"
        >
          <defs>
            {/* Port Pulse Radial Gradient */}
            <radialGradient id="portPulse" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#D4A017" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#D4A017" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
            </radialGradient>

            {/* Shipping Route Gradients */}
            <linearGradient id="routeGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4A017" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#F5D77F" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#D4A017" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="routeAgro" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#34D399" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="routePetro" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#C084FC" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* =========================================================================
              REAL GEOGRAPHIC CONTINENTAL OUTLINES (Authentic High-Fidelity Shapes)
              ========================================================================= */}
          <g fill="#1E293B" stroke="#334155" strokeWidth="0.75" opacity="0.85">
            {/* North America (Alaska, Canada, USA, Mexico, Central America) */}
            <path d="M 65 65 L 110 50 L 160 55 L 180 35 L 230 40 L 270 70 L 290 95 L 265 115 L 295 140 L 260 170 L 235 180 L 220 200 L 195 210 L 185 240 L 175 260 L 160 250 L 140 215 L 130 190 L 120 160 L 95 130 L 70 100 Z M 190 260 L 210 275 L 225 295 L 215 300 L 195 285 Z" />
            
            {/* Greenland */}
            <path d="M 330 30 L 375 25 L 395 50 L 365 95 L 335 85 Z" />

            {/* South America (Colombia, Brazil, Argentina, Chile, Peru) */}
            <path d="M 235 300 L 265 300 L 310 320 L 350 340 L 360 370 L 335 410 L 310 445 L 290 470 L 275 465 L 285 415 L 265 370 L 245 335 Z" />

            {/* Europe (Scandinavia, UK, Iberian Peninsula, Central Europe, Mediterranean) */}
            <path d="M 445 120 L 465 90 L 490 85 L 515 95 L 525 125 L 550 135 L 530 160 L 495 170 L 470 175 L 450 160 L 435 155 Z M 440 105 L 455 100 L 450 120 L 435 125 Z M 480 50 L 505 45 L 515 75 L 490 80 Z" />

            {/* Africa (North Africa, West Africa, Horn, Central, Southern Africa, Madagascar) */}
            <path d="M 445 185 L 520 180 L 570 210 L 595 245 L 565 315 L 555 385 L 525 415 L 495 385 L 470 320 L 435 250 L 440 205 Z M 580 345 L 595 350 L 590 395 L 575 390 Z" />

            {/* Asia (Russia, Central Asia, Middle East, India, China, SE Asia, Siberia) */}
            <path d="M 535 120 L 590 100 L 680 80 L 780 75 L 870 95 L 890 135 L 840 165 L 800 170 L 760 185 L 740 220 L 700 240 L 660 275 L 635 235 L 595 240 L 585 205 L 545 170 Z" />

            {/* Indian Subcontinent */}
            <path d="M 645 225 L 685 220 L 695 260 L 670 300 L 645 255 Z" />

            {/* Japan & Korean Peninsula */}
            <path d="M 830 155 L 850 150 L 860 180 L 840 200 L 825 175 Z" />

            {/* Southeast Asian Archipelago (Indonesia, Philippines, Malaysia) */}
            <path d="M 740 275 L 785 285 L 775 305 L 735 295 Z M 790 250 L 815 255 L 805 290 L 785 280 Z M 820 305 L 855 315 L 845 335 L 810 325 Z" />

            {/* Australia & New Zealand */}
            <path d="M 780 350 L 860 340 L 890 380 L 865 435 L 810 440 L 770 405 L 765 370 Z M 905 420 L 925 415 L 915 450 L 895 445 Z" />
          </g>

          {/* =========================================================================
              ANIMATED MARITIME SHIPPING ROUTES (Real Shipping Corridors)
              ========================================================================= */}
          {/* 1. Trans-Atlantic Route (Houston <-> Rotterdam) */}
          {(activeFilter === 'all' || activeFilter === 'petro') && (
            <g>
              <path
                d="M 215 192 C 300 150, 400 130, 485 138"
                fill="none"
                stroke="url(#routePetro)"
                strokeWidth="2.5"
                className="animate-shipping-route"
              />
              <circle cx="340" cy="148" r="2.5" fill="#C084FC" className="animate-ping" />
            </g>
          )}

          {/* 2. Europe-Middle East Suez Corridor (Rotterdam <-> Dubai) */}
          {(activeFilter === 'all' || activeFilter === 'agro' || activeFilter === 'petro') && (
            <g>
              <path
                d="M 485 138 C 505 165, 545 190, 610 208"
                fill="none"
                stroke="url(#routeGold)"
                strokeWidth="2.5"
                className="animate-shipping-route"
              />
              <circle cx="550" cy="180" r="2.5" fill="#D4A017" className="animate-ping" />
            </g>
          )}

          {/* 3. Middle East to East Asia Corridor (Dubai <-> Singapore <-> Shanghai) */}
          {(activeFilter === 'all' || activeFilter === 'petro') && (
            <g>
              <path
                d="M 610 208 C 665 245, 705 255, 745 268"
                fill="none"
                stroke="url(#routeGold)"
                strokeWidth="2.5"
                className="animate-shipping-route"
              />
              <path
                d="M 745 268 C 765 240, 775 220, 785 198"
                fill="none"
                stroke="url(#routePetro)"
                strokeWidth="2.5"
                className="animate-shipping-route"
              />
            </g>
          )}

          {/* 4. Agro Harvest Corridor (Santos <-> Rotterdam) */}
          {(activeFilter === 'all' || activeFilter === 'agro') && (
            <g>
              <path
                d="M 325 355 C 380 280, 430 200, 485 138"
                fill="none"
                stroke="url(#routeAgro)"
                strokeWidth="2.5"
                className="animate-shipping-route"
              />
              <circle cx="410" cy="240" r="2.5" fill="#34D399" className="animate-ping" />
            </g>
          )}

          {/* 5. Indian Ocean Citrus / Minerals Route (Durban <-> Dubai) */}
          {(activeFilter === 'all' || activeFilter === 'agro') && (
            <g>
              <path
                d="M 555 368 C 595 320, 610 260, 610 208"
                fill="none"
                stroke="url(#routeAgro)"
                strokeWidth="2"
                className="animate-shipping-route"
              />
            </g>
          )}

          {/* 6. Trans-Pacific East Asia to Americas (Shanghai <-> Houston via Panama) */}
          {(activeFilter === 'all' || activeFilter === 'petro') && (
            <path
              d="M 785 198 C 840 210, 880 230, 920 250"
              fill="none"
              stroke="url(#routeGold)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              opacity="0.5"
            />
          )}

          {/* =========================================================================
              SEAPORT TERMINAL HUBS & INTERACTIVE HOTSPOTS
              ========================================================================= */}
          {hubs.map((hub) => {
            const isSelected = selectedHub.id === hub.id;
            return (
              <g
                key={hub.id}
                className="cursor-pointer group"
                onClick={() => setSelectedHub(hub)}
              >
                {/* Outer Glow on Selection */}
                {isSelected && (
                  <circle
                    cx={hub.x}
                    cy={hub.y}
                    r="18"
                    fill="url(#portPulse)"
                    className="animate-pulse"
                  />
                )}

                {/* Radar Ring */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r="9"
                  fill="none"
                  stroke={isSelected ? '#D4A017' : '#94A3B8'}
                  strokeWidth="1"
                  opacity={isSelected ? 0.9 : 0.4}
                  className={isSelected ? 'animate-ping' : ''}
                />

                {/* Core Port Node */}
                <circle
                  cx={hub.x}
                  cy={hub.y}
                  r="4.5"
                  fill={isSelected ? '#D4A017' : '#F1F5F9'}
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  className="transition-transform group-hover:scale-125"
                />

                {/* Port Label */}
                <text
                  x={hub.x}
                  y={hub.y - 10}
                  textAnchor="middle"
                  fill={isSelected ? '#D4A017' : '#E2E8F0'}
                  fontSize="9.5"
                  fontWeight={isSelected ? '800' : '600'}
                  letterSpacing="0.5"
                  className="font-inter pointer-events-none drop-shadow-md"
                >
                  {hub.city.split('/')[0]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend Tag in Bottom Corner */}
        <div className="absolute bottom-4 left-4 bg-[#0F172A]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-[#24262A] flex items-center gap-4 text-[10px] text-[#A5A7AD] font-inter">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A017]"></span>
            <span>Active Bilateral Hub</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-[#D4A017]"></span>
            <span>Ocean Liner Route</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-4 h-0.5 bg-[#10B981]"></span>
            <span>Cold-Chain Reefer</span>
          </div>
        </div>
      </div>

      {/* Selected Hub Interactive Telemetry Panel */}
      <div className="p-6 sm:p-8 bg-[#090D1A] border-t border-[#24262A]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Port Info */}
          <div className="lg:col-span-4 space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-[#D4A017]/20 text-[#D4A017] text-[10px] font-bold font-inter uppercase">
                {selectedHub.role}
              </span>
              <span className="text-xs text-[#73767D] font-mono">UN/LOCODE: {selectedHub.code}</span>
            </div>
            <h4 className="text-lg font-bold text-white font-inter">
              {selectedHub.name}
            </h4>
            <div className="text-xs text-[#A5A7AD] font-inter flex items-center gap-1.5">
              <Anchor className="w-3.5 h-3.5 text-[#D4A017]" />
              <span>{selectedHub.country}</span>
            </div>
          </div>

          {/* Commodities Handled */}
          <div className="lg:col-span-5 space-y-1.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#73767D] font-inter">
              Primary Trade Flows:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {selectedHub.commodities.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-[#1E293B] border border-[#334155] text-xs text-[#E2E8F0] font-inter font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Transit & Schedule */}
          <div className="lg:col-span-3 bg-[#0F172A] p-4 rounded-xl border border-[#24262A] space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#A5A7AD] flex items-center gap-1 font-inter">
                <Clock className="w-3.5 h-3.5 text-[#D4A017]" />
                <span>Transit Window:</span>
              </span>
              <span className="font-bold text-white text-right font-inter">{selectedHub.avgTransitDays.split('to')[0]}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#A5A7AD] flex items-center gap-1 font-inter">
                <Ship className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Frequency:</span>
              </span>
              <span className="font-bold text-[#10B981] font-inter">{selectedHub.vesselFrequency}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
