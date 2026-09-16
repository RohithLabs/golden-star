import { CompanyInfo } from '../types';

export const companyData: CompanyInfo = {
  name: "Golden Star Company",
  descriptor: "PREMIER TRADE & SOURCING COMPANY • GLOBAL EXPORT SOLUTIONS",
  tagline: "Seamless sourcing, trade & market expansion — connecting producers to the world.",
  eyebrow: "Trusted by 1000+ Partners Worldwide",
  heroHeadline: "Premier Trade & Sourcing Company",
  heroSupportingText: "Seamless sourcing, trade & market expansion — connecting global markets through agriculture, commodities, and petrochemical trade.",
  aboutHeadline: "About Golden Star Company",
  aboutText: "Golden Star Company is a premier international trade and sourcing company specializing in high-grade agricultural commodities, petroleum products, petrochemicals, minerals, and industrial raw materials. With over two decades of industry excellence, we bridge reliable producers and global enterprises with certified quality standards and dedicated multi-modal shipping logistics.\n\nOperating across more than 50 countries, Golden Star Company provides end-to-end sourcing, procurement, logistics, and distribution services tailored to the unique requirements of each client. Our dedicated team works closely with verified partners worldwide to ensure timely deliveries, competitive pricing, and long-term business success.\n\nThrough innovation, integrity, and a customer-focused approach, Golden Star Company continues to strengthen international trade connections and create sustainable commercial value for partners across the globe.",
  email: "info@goldenstarcompany.com",
  tradeInquiryEmail: "trade@goldenstarcompany.com",
  phone: "+1 (555) 123-4567",
  whatsapp: "+1 (555) 987-6543",
  headquarters: "Global Trade Center, International Business District",
  businessHours: "Mon–Sat 9:00 AM – 6:00 PM (UTC / Trade Desk)",
};

// Live Commodity & Freight Market Ticker
export const commodityTicker = [
  { symbol: "BRENT CRUDE", price: "$82.40 / bbl", change: "+1.2%", isUp: true },
  { symbol: "GALA APPLES (FCL)", price: "$1,280 / MT", change: "+0.8%", isUp: true },
  { symbol: "BASE OIL SN150", price: "$985 / MT", change: "+0.5%", isUp: true },
  { symbol: "BITUMEN 60/70", price: "$465 / MT", change: "-0.4%", isUp: false },
  { symbol: "POLYMER HDPE", price: "$1,190 / MT", change: "+1.4%", isUp: true },
  { symbol: "RUSSET POTATOES", price: "$510 / MT", change: "+0.6%", isUp: true },
  { symbol: "BALTIC DRY FREIGHT", price: "1,845 pts", change: "+2.1%", isUp: true },
  { symbol: "SINDHRI MANGOES", price: "$2,450 / MT", change: "-0.7%", isUp: false },
  { symbol: "STEEL FASTENERS", price: "$1,620 / MT", change: "+0.3%", isUp: true },
];

// Stats Bar (from refernce.png)
export const statsOverview = [
  { value: "500+", label: "Shipments Annuals", icon: "Ship" },
  { value: "50+", label: "Strategic Partners", icon: "Handshake" },
  { value: "25+", label: "Countries Reached", icon: "Globe2" },
  { value: "98%", label: "Satisfaction Rate", icon: "ShieldCheck" }
];

// Two Core Business Divisions (from refernce.png)
export const businessDivisions = [
  {
    id: "div-agri",
    title: "Agriculture Division",
    description: "Premium quality fresh fruits, vegetables, and agricultural commodities sourced from certified farms worldwide. We ensure freshness, consistency, superior quality, and reliability from farm to destination.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    bullets: ["Fresh Fruits", "Fresh Vegetables", "Exotic Produce", "Agricultural Commodities"],
    categorySlug: "food-agricultural-products",
    badge: "FRESH & ORGANIC HARVEST",
    accentColor: "emerald"
  },
  {
    id: "div-petro",
    title: "Petroleum and Petrochemical Division",
    description: "Comprehensive range of petrochemical products including crude oil, base oils, lubricants, and specialty industrial chemicals. Meeting diverse industrial demands with reliable, efficient, and sustainable supply chain solutions.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    bullets: ["Crude Oil & Feedstocks", "Base Oils SN150 / SN500", "Bitumen 60/70 & 80/100", "Virgin Polymer Resins"],
    categorySlug: "petroleum-petrochemical-products",
    badge: "REFINERY PRIME GRADE",
    accentColor: "purple"
  }
];

// Trade Information Schedule Table (from refernce.png)
export const tradeInformationSchedule = [
  { category: "Fresh Fruits", minOrder: "10 Tons", maxOrder: "40 Tons", deliveryType: "Sea / Air" },
  { category: "Fresh Vegetables", minOrder: "10 Tons", maxOrder: "40 Tons", deliveryType: "Sea / Air" },
  { category: "Crude Oil", minOrder: "10,000 Tons", maxOrder: "100,000+ Tons", deliveryType: "Tanker Shipment" },
  { category: "Petrochemicals & Base Oils", minOrder: "20 Tons", maxOrder: "500+ Tons", deliveryType: "Flexitank / ISO Tank" },
  { category: "Polymer Resins", minOrder: "26 Tons (40ft HC)", maxOrder: "1,000+ Tons", deliveryType: "Bulk Container Liner" },
  { category: "Industrial Metallurgy", minOrder: "2 Tons", maxOrder: "100+ Tons", deliveryType: "Seaworthy Palletized" },
];

// Bilateral Import / Export Corridor Data (from refernce.png)
export const tradeCorridorFlows = {
  import: [
    { country: "Saudi Arabia", flag: "🇸🇦", commodity: "CRUDE OIL & CONDENSATES" },
    { country: "UAE", flag: "🇦🇪", commodity: "BASE OILS, LUBRICANTS & METALS" },
    { country: "China", flag: "🇨🇳", commodity: "CHEMICALS, ADDITIVES & HARDWARE" },
    { country: "Qatar", flag: "🇶🇦", commodity: "LPG, PETROCHEMICALS & POLYMERS" },
    { country: "Americas", flag: "🌎", commodity: "GRAINS, OILSEEDS & KRAFT BOARD" }
  ],
  export: [
    { country: "European Union", flag: "🇪🇺", commodity: "CERTIFIED AGRO COMMODITIES & RESINS" },
    { country: "Pakistan & South Asia", flag: "🇵🇰", commodity: "MINERAL PRODUCTS & INDUSTRIAL FITTINGS" },
    { country: "UAE & GCC Gateways", flag: "🇦🇪", commodity: "INDUSTRIAL PRODUCTS & FRESH PRODUCE" },
    { country: "Saudi Arabia", flag: "🇸🇦", commodity: "REFINED BITUMEN & AGRO COMMODITIES" },
    { country: "Oman & East Africa", flag: "🇴🇲", commodity: "AGRICULTURAL PRODUCTS & PACKAGING" }
  ]
};

// Testimonials (from refernce.png)
export const clientTestimonials = [
  {
    id: "test-1",
    name: "Ahmed Al Rashid",
    role: "Procurement Manager",
    country: "Saudi Arabia",
    stars: 5,
    quote: "Golden Star Company has been one of our most reliable trading partners. Their commitment to quality, punctual shipping schedules, and transparent communication make them our first choice for agricultural imports."
  },
  {
    id: "test-2",
    name: "Michael Thompson",
    role: "International Trade Director",
    country: "United Kingdom",
    stars: 5,
    quote: "We have worked with Golden Star Company for several years on multiple import-export projects. Their professionalism, market knowledge, and competitive pricing make them a valuable partner for international trade."
  },
  {
    id: "test-3",
    name: "Fatima Al Mansoori",
    role: "Business Development Manager",
    country: "United Arab Emirates",
    stars: 5,
    quote: "The team at Golden Star Company consistently delivers exceptional service. Their ability to source high-quality petrochemicals and manage logistics efficiently has exceeded our expectations."
  },
  {
    id: "test-4",
    name: "Chen Wei",
    role: "Industrial Supplies Distributor",
    country: "China",
    stars: 5,
    quote: "Golden Star Company demonstrates excellent expertise in global trade. From sourcing to shipping, every process is handled professionally, ensuring smooth and successful transactions."
  },
  {
    id: "test-5",
    name: "Muhammad Usman",
    role: "Export Partner",
    country: "Pakistan",
    stars: 5,
    quote: "Their dedication to customer satisfaction and long-term partnerships with Golden Star Company sets them apart. We look forward to continuing our fruitful collaboration across regional corridors."
  }
];

export const whyGoldenStar = [
  {
    id: "global-network",
    title: "Global Network",
    description: "Extensive worldwide presence with verified supply and distribution partners in 25+ countries.",
    icon: "Globe"
  },
  {
    id: "reliable-logistics",
    title: "Reliable Logistics",
    description: "Efficient supply chain management, real-time tracking, and timely multimodal ocean delivery.",
    icon: "Truck"
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance",
    description: "Strict quality control, batch testing, and international pre-shipment inspection verification.",
    icon: "ShieldCheck"
  },
  {
    id: "competitive-pricing",
    title: "Competitive Pricing",
    description: "Best market rates with transparent volume pricing and flexible ICC Incoterms structures.",
    icon: "BadgePercent"
  },
  {
    id: "fast-documentation",
    title: "Fast Documentation",
    description: "Quick and accurate trade documentation processing, customs alignment, and rapid bank LC clearance.",
    icon: "FileCheck2"
  },
  {
    id: "dedicated-support",
    title: "Dedicated Support",
    description: "24/7 customer service, dedicated trade desk officers, and proactive commercial consultation.",
    icon: "Headphones"
  }
];

export const industriesServed = [
  { name: "Food Processing", desc: "Supply of raw grains, pulses, and refined oils to the world's largest food conglomerates." },
  { name: "Retail Chains", desc: "White-label packaging and just-in-time delivery for multinational retail and grocery chains." },
  { name: "Oil Refineries", desc: "Critical feedstock supply and logistics for mid-stream and down-stream petrochemical refining." },
  { name: "Heavy Industry", desc: "High-volume lubricant base oil and engineered hardware for global manufacturing operations." }
];

export const tradeFaqs = [
  {
    q: "How does Golden Star Company verify product quality prior to shipment?",
    a: "Every transaction adheres to our strict 6-stage Quality Verification framework. We inspect batches against customer-approved specification sheets, verify moisture, purity, packaging integrity, and container stowage conditions. Independent third-party inspection agencies (such as SGS or Bureau Veritas) are coordinated on request."
  },
  {
    q: "Which Incoterms does Golden Star Company support?",
    a: "We accommodate standard Incoterms 2020 including CIF (Cost, Insurance & Freight), FOB (Free on Board), CFR (Cost and Freight), and EXW (Ex Works), depending on your company's freight management preferences."
  },
  {
    q: "What is the typical timeline for an initial quotation?",
    a: "Once we receive your detailed product specification, target volume, and destination port via our Request a Quote portal, our trade desk delivers a formal commercial quotation typically within 24 to 48 business hours."
  },
  {
    q: "Can Golden Star Company handle custom sourcing for products not listed on the website?",
    a: "Yes. Our Custom Sourcing service is designed specifically for buyers requiring specialized chemical grades, private label packaging, or specific regional harvest origins."
  },
  {
    q: "What documentation is provided with international shipments?",
    a: "Standard export packages include the Commercial Invoice, Packing List, Clean On-Board Ocean Bill of Lading (B/L), Certificate of Origin, and batch inspection reports."
  }
];

export interface ProcessStep {
  step: string;
  title: string;
  subheading: string;
  description: string;
}

export const fiveStepProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Inquiry & Technical Spec Alignment",
    subheading: "Commercial Intake",
    description: "Submit precise product grade, target volume, packaging specifications, and discharge destination port requirements."
  },
  {
    step: "02",
    title: "Formal Quotation & Incoterms",
    subheading: "Contract Structuring",
    description: "Issuance of binding Commercial Proforma Invoice (PI) detailing CIF/FOB terms, payment milestones, and harvest or production windows."
  },
  {
    step: "03",
    title: "Origin Sourcing & Quality Batching",
    subheading: "Verified Procurement",
    description: "Direct batch allocation from certified agricultural harvest basins or refinery tanks under verified production quality protocols."
  },
  {
    step: "04",
    title: "Pre-Shipment Inspection & Packing",
    subheading: "Compliance & Clearance",
    description: "Independent third-party laboratory verification (SGS/Bureau Veritas), phytosanitary certification, and export customs clearance."
  },
  {
    step: "05",
    title: "Ocean Freight & Port Discharge",
    subheading: "Multimodal Logistics",
    description: "Clean on-board ocean bill of lading, reefer temperature telemetry monitoring, and prompt release of documentation to your clearing bank."
  }
];

