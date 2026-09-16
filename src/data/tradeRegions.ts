import { TradeRegion } from '../types';

export const tradeRegions: TradeRegion[] = [
  {
    id: "reg-asia-pacific",
    name: "Asia-Pacific Trade Corridor",
    code: "APAC",
    type: "both",
    coordinates: { x: 740, y: 220 },
    description: "Key regional supply and consumption market. Sourcing industrial goods, agricultural commodities, and consumer products, with direct shipping lines connecting major regional ports.",
    keyCommodities: ["Industrial Fasteners", "Specialty Minerals", "Agricultural Commodities", "Fabricated Components"],
    portsOrHubs: ["Major Regional Seaports", "Deepwater Transshipment Terminals", "Export Logistics Zones"]
  },
  {
    id: "reg-middle-east",
    name: "Middle East & Gulf Gateway",
    code: "ME-GULF",
    type: "both",
    coordinates: { x: 590, y: 210 },
    description: "Strategic commercial crossroads connecting Eastern production centers with Western and African consumer markets. Focus on raw materials, polymer resin distribution, and re-export transit.",
    keyCommodities: ["Polymer Resins", "Commercial Packaging", "Agri-food Re-export", "Construction Materials"],
    portsOrHubs: ["Regional Trade Hubs", "Free Trade Zone Ports", "Intermodal Cargo Terminals"]
  },
  {
    id: "reg-europe",
    name: "European Trade Network",
    code: "EUR",
    type: "export",
    coordinates: { x: 490, y: 150 },
    description: "High-standard destination market for verified industrial inputs, specialty grade additives, and high-purity agricultural ingredients compliant with international directives.",
    keyCommodities: ["Specialty Additives", "Precision Components", "Export-grade Agro Crops", "Raw Materials"],
    portsOrHubs: ["Major Container Gateways", "Inland Rail Terminals", "Bonded Distribution Centers"]
  },
  {
    id: "reg-americas",
    name: "North & South American Corridors",
    code: "AMER",
    type: "both",
    coordinates: { x: 250, y: 200 },
    description: "Dynamic trade corridor encompassing bulk agricultural commodity origination, industrial material sourcing, and containerized consumer packaging distribution.",
    keyCommodities: ["Bulk Grains & Oilseeds", "Industrial Hardware", "Paper & Packaging Board", "Polymers"],
    portsOrHubs: ["Deepwater Atlantic & Pacific Ports", "Interstate Rail Intermodal Links"]
  },
  {
    id: "reg-africa",
    name: "African Emerging Trade Hubs",
    code: "AFR",
    type: "import",
    coordinates: { x: 510, y: 280 },
    description: "Growing commercial destination for bulk food commodities, construction hardware, and manufacturing raw materials driving regional infrastructure expansion.",
    keyCommodities: ["Grains & Flours", "Industrial Fasteners & Fittings", "Packaging Consumables", "Finished Goods"],
    portsOrHubs: ["Coastal Gateway Ports", "Regional Commercial Hubs"]
  }
];

export const shippingCorridors = [
  { from: "APAC Hub", to: "Middle East Gateway", mode: "Maritime Ocean Line", transitDays: "12 – 16 Days" },
  { from: "Middle East Gateway", to: "European Ports", mode: "Direct Container Carrier", transitDays: "14 – 18 Days" },
  { from: "Americas Origin", to: "Global Destination Ports", mode: "Bulk Carrier & FCL Liner", transitDays: "20 – 28 Days" },
  { from: "APAC Hub", to: "African Coast Ports", mode: "Direct Ocean Freight", transitDays: "16 – 22 Days" }
];
