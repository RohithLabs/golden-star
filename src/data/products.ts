import { Product, ProductCategory } from '../types';

export const productCategories: ProductCategory[] = [
  {
    id: "cat-agri",
    slug: "food-agricultural-products",
    title: "Fresh Fruits, Vegetables & Agriculture",
    description: "Export-grade fruits, vegetables, grains, edible oils, and agro-commodities sourced directly from certified farms and harvest basins worldwide.",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1000&q=80",
    itemCountLabel: "Certified Farm Harvest"
  },
  {
    id: "cat-petro",
    slug: "petroleum-petrochemical-products",
    title: "Petroleum, Petrochemical & Polymers",
    description: "Comprehensive range of petrochemical products including crude oil, base oils, bitumen, virgin polymer resins, and chemical feedstocks.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80",
    itemCountLabel: "Refinery Grade Spec"
  },
  {
    id: "cat-industrial",
    slug: "industrial-products",
    title: "Industrial Hardware & Metallurgy",
    description: "Engineered fasteners, pipe fittings, structural steel, and precision commercial hardware manufactured to ISO/DIN industrial standards.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    itemCountLabel: "Industrial Grade"
  },
  {
    id: "cat-raw",
    slug: "raw-materials",
    title: "Raw Materials & Minerals",
    description: "Mineral ores, functional additives, industrial fillers, and intermediate processing materials supplying factories globally.",
    image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1000&q=80",
    itemCountLabel: "Primary Commodities"
  },
  {
    id: "cat-consumer",
    slug: "consumer-products",
    title: "Commercial Packaging & Paper",
    description: "Heavy-duty kraft paper rolls, fluting medium, containerboard, and export packaging consumables.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    itemCountLabel: "Wholesale & Volume"
  },
  {
    id: "cat-textiles",
    slug: "textiles-fabrics",
    title: "Indian Textiles & Premium Fabrics",
    description: "Export-grade printed cotton fabrics, fine silk handlooms, heavy industrial canvas, and luxury linen upholstery for global fashion & home decor.",
    image: "/products/printed-textiles-fabrics.jpg",
    itemCountLabel: "Handloom & Mill Direct"
  },
  {
    id: "cat-leather",
    slug: "leather-craft",
    title: "Handcrafted Leather Goods & Accessories",
    description: "Artisanal full-grain vegetable-tanned leather belts, wallets, cardholders, and bespoke lifestyle leathercraft made in South India's leather hubs.",
    image: "/products/leather-goods-wallets.jpg",
    itemCountLabel: "Artisanal Craftsmanship"
  },
  {
    id: "cat-sourcing",
    slug: "custom-sourcing",
    title: "Custom Contract Sourcing",
    description: "Bespoke international procurement matching proprietary technical parameters, private label packaging, and destination compliance.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=80",
    itemCountLabel: "On-Demand Trade Desk"
  }
];

export const productsCatalog: Product[] = [
  // --- FRESH FRUITS & VEGETABLES (From refernce.png) ---
  {
    id: "prod-gala-apples",
    slug: "gala-apples",
    name: "Gala Apples",
    category: "Fresh Fruits, Vegetables & Agriculture",
    categorySlug: "food-agricultural-products",
    shortDescription: "Crisp, sweet, and aromatic apples selected for exceptional shelf life and uniform export grading.",
    fullOverview: "Harvested from certified partner orchards under strict cold-chain management. Cleanly sorted, washed, wax-coated (optional per country regulation), and size-calibrated for international supermarket retail and wholesale distribution.",
    images: [
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "Brix Sugar Level", value: "Min 12.5° – 14.5° Brix" },
      { label: "Caliber / Count", value: "Counts 88, 100, 113, 125, 138, 150" },
      { label: "Color Grading", value: "Min 65% – 80% natural red blush" },
      { label: "Pressure / Firmness", value: "14 – 18 lbs/cm²" },
      { label: "Storage Temperature", value: "+0.5°C to +2°C Reefer transit" }
    ],
    gradesOrVariants: ["Grade Extra Fancy", "Grade Fancy", "Commercial Class 1"],
    packaging: "18kg / 20kg telescopic corrugated export cartons with internal molded pulp trays",
    minimumOrderQuantity: "1 x 40ft High Cube Reefer (approx. 1,176 cartons / 21 MT)",
    origin: "China, USA, South Africa (Seasonal Origin Sourcing)",
    supplyCapacity: "500 Metric Tons monthly during harvest window",
    exportAvailability: "In Stock",
    incotermsSupported: ["CIF", "CFR", "FOB"],
    leadTime: "7 – 14 days from contract deposit",
    featured: true
  },
  {
    id: "prod-sindhri-mangoes",
    slug: "sindhri-mangoes",
    name: "Sindhri Mangoes",
    category: "Fresh Fruits, Vegetables & Agriculture",
    categorySlug: "food-agricultural-products",
    shortDescription: "The king of fruits, renowned for its fiberless golden flesh and intense honey-like sweetness.",
    fullOverview: "Celebrated internationally for rich aroma and smooth golden texture. Hot Water Treatment (HWT) or Vapor Heat Treatment (VHT) applied to guarantee international biosecurity compliance before air cargo or sea freight dispatch.",
    images: [
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "Brix Level", value: "18° – 22° Brix when ripe" },
      { label: "Weight per Fruit", value: "250g – 450g (Sizes Small, Medium, Large)" },
      { label: "Pulp Ratio", value: "Approx. 80% fiberless edible pulp" },
      { label: "Phytosanitary Protocol", value: "HWT / VHT certified treatment" }
    ],
    gradesOrVariants: ["Export Grade A+", "Export Grade A", "Catering / Pulp Grade"],
    packaging: "2kg / 4kg corrugated printed gift boxes with foam net cushioning",
    minimumOrderQuantity: "Air Cargo: 2,000 kg | Sea Reefer: 1 x 40ft FCL",
    origin: "Pakistan, India (Direct Harvest Hubs)",
    supplyCapacity: "300 Metric Tons monthly (Peak Season May – August)",
    exportAvailability: "Seasonal Harvest",
    incotermsSupported: ["CIF", "CFR", "FOB"],
    leadTime: "5 – 10 days",
    featured: true
  },
  {
    id: "prod-navel-oranges",
    slug: "navel-oranges",
    name: "Navel Oranges",
    category: "Fresh Fruits, Vegetables & Agriculture",
    categorySlug: "food-agricultural-products",
    shortDescription: "Juicy, seedless citrus fruits with a perfect balance of acidity and sweetness for global retail distribution.",
    fullOverview: "Selected from certified citrus groves, thoroughly washed, degreened (if required), coated with food-grade protective carnauba wax, and packaged in seaworthy heavy-duty cartons.",
    images: [
      "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "Caliber Sizes", value: "48, 56, 64, 72, 80, 88, 100, 113, 125" },
      { label: "Juice Content", value: "Min 43% by weight" },
      { label: "Brix / Acid Ratio", value: "Min 9:1 ratio" },
      { label: "Transit Temp", value: "+3°C to +5°C controlled atmosphere" }
    ],
    gradesOrVariants: ["Class 1 Premium Export", "Commercial Packing Grade"],
    packaging: "15kg open-top or telescopic export cartons",
    minimumOrderQuantity: "1 x 40ft Reefer Container (approx. 1,600 cartons)",
    origin: "Egypt, China, South Africa",
    supplyCapacity: "1,200 Metric Tons monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["CIF", "CFR", "FOB"],
    leadTime: "10 – 14 days",
    featured: true
  },
  {
    id: "prod-russet-potatoes",
    slug: "russet-potatoes",
    name: "Russet Potatoes",
    category: "Fresh Fruits, Vegetables & Agriculture",
    categorySlug: "food-agricultural-products",
    shortDescription: "High-starch variety ideal for french fry processing and long-distance maritime shipping.",
    fullOverview: "Graded for high specific gravity and low reducing sugars. Washed and brushed with sprout inhibitor treatments applied per buyer destination sanitary import regulations.",
    images: [
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "Size Calibration", value: "50mm+, 60mm+, 70mm+ diameter" },
      { label: "Dry Matter Content", value: "Min 20% – 22% (ideal for frying)" },
      { label: "Moisture / Defect", value: "Under 1.5% surface defect allowance" }
    ],
    gradesOrVariants: ["Processing Grade A", "Table / Fresh Market Grade"],
    packaging: "10kg / 25kg Leno mesh bags, or 1,250kg Jumbo Tote Bags",
    minimumOrderQuantity: "1 x 40ft Reefer FCL (approx. 28 Metric Tons)",
    origin: "Pakistan, Egypt, European Union",
    supplyCapacity: "2,000 Metric Tons monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["CIF", "CFR", "FOB"],
    leadTime: "12 – 18 days",
    featured: true
  },

  // --- PETROCHEMICAL & INDUSTRIAL COMMODITIES (From refernce.png) ---
  {
    id: "prod-crude-oil",
    slug: "crude-oil",
    name: "Commercial Crude Oil Feedstock",
    category: "Petroleum, Petrochemical & Polymers",
    categorySlug: "petroleum-petrochemical-products",
    shortDescription: "Primary raw material for petroleum refinery products, available in benchmark grades including Brent and light sweet counterparts.",
    fullOverview: "Golden Star Company facilitates bulk allocation contracts for licensed international refineries and industrial purchasers. Structured under FOB terminal lifting or CIF tanker chartering with verifiable SGS Q&Q inspection at loading.",
    images: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "API Gravity", value: "31.0° – 38.5° API (Light to Medium Sweet)" },
      { label: "Sulfur Content", value: "Under 0.5% (Low Sulfur) or contract grade" },
      { label: "Pour Point", value: "-15°C to -25°C" },
      { label: "BS&W (Water/Sediment)", value: "Max 0.5% volume" }
    ],
    gradesOrVariants: ["Light Sweet Crude", "Medium Heavy Crude", "Condensate"],
    packaging: "Bulk Maritime Tanker (Aframax, Suezmax, VLCC charter allocations)",
    minimumOrderQuantity: "50,000 – 100,000 Metric Tons (Tanker lot basis)",
    origin: "Middle East, Gulf, Americas Terminal Ports",
    supplyCapacity: "Subject to annual lifting allocations",
    exportAvailability: "Contract Supply",
    incotermsSupported: ["FOB", "CIF"],
    leadTime: "Per maritime laycan schedule (20 – 35 days)",
    featured: true
  },
  {
    id: "prod-base-oil-sn150",
    slug: "base-oil-sn150",
    name: "Base Oil SN150 / SN500",
    category: "Petroleum, Petrochemical & Polymers",
    categorySlug: "petroleum-petrochemical-products",
    shortDescription: "Light solvent-refined base oil used primarily as base for automotive lubricants, greases, and industrial oils.",
    fullOverview: "Group I & Group II virgin base oils characterized by excellent thermal stability, low volatility, and clear pale color. Shipped in flexitanks or ISO tank containers directly to lubricant blending facilities worldwide.",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "Viscosity @ 40°C", value: "28.0 – 32.0 cSt (SN150) | 95 – 105 cSt (SN500)" },
      { label: "Viscosity Index", value: "Min 95" },
      { label: "Flash Point (COC)", value: "Min 200°C" },
      { label: "Pour Point", value: "Max -9°C" },
      { label: "Color (ASTM D1500)", value: "Max 1.0 (water white to pale yellow)" }
    ],
    gradesOrVariants: ["Virgin Group I (SN150, SN500)", "Group II Hydrotreated (N150, N500)"],
    packaging: "21,000 – 24,000 Liter Flexitank in 20ft container, or 200L steel drums",
    minimumOrderQuantity: "1 x 20ft FCL Flexitank (approx. 20 – 21.5 MT)",
    origin: "Middle East & Regional Refineries",
    supplyCapacity: "1,500 Metric Tons monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["CIF", "CFR", "FOB"],
    leadTime: "12 – 18 business days",
    featured: true
  },
  {
    id: "prod-bitumen-penetration",
    slug: "bitumen-road-asphalt",
    name: "Bitumen (Asphalt 60/70 & 80/100)",
    category: "Petroleum, Petrochemical & Polymers",
    categorySlug: "petroleum-petrochemical-products",
    shortDescription: "Refined paving grade bitumen for highway asphalt construction, airfield runways, and waterproofing.",
    fullOverview: "High-performance penetration grade bitumen produced from vacuum distillation of selected crude oils. Meets ASTM D946 and EN 12591 international specifications with high ductility and adhesion properties.",
    images: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "Penetration @ 25°C", value: "60 – 70 dmm (Bitumen 60/70) | 80 – 100 dmm" },
      { label: "Softening Point", value: "49°C – 56°C" },
      { label: "Ductility @ 25°C", value: "Min 100 cm" },
      { label: "Flash Point", value: "Min 250°C" },
      { label: "Solubility in TCE", value: "Min 99.0%" }
    ],
    gradesOrVariants: ["Grade 60/70", "Grade 80/100", "Polymer-Modified Bitumen (PMB)"],
    packaging: "New cold-rolled steel drums (180kg / 200kg) or Bitutainer bulk tanks",
    minimumOrderQuantity: "1 x 20ft FCL (80 – 110 drums / approx. 18 – 20 MT)",
    origin: "Regional Export Refineries",
    supplyCapacity: "3,000 Metric Tons monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["CIF", "CFR", "FOB"],
    leadTime: "14 – 20 days",
    featured: true
  },
  {
    id: "prod-polymer-resins",
    slug: "polymer-resins-industrial-pellets",
    name: "Virgin Polymer Resins (HDPE, PP, PET)",
    category: "Petroleum, Petrochemical & Polymers",
    categorySlug: "petroleum-petrochemical-products",
    shortDescription: "Prime virgin pellets and clean recycled polymer granules for blow molding, extrusion, and injection manufacturing.",
    fullOverview: "Consistent polymer feedstock for plastic manufacturers, consumer packaging facilities, and automotive component molders globally.",
    images: [
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "Polymer Base", value: "HDPE (Blow/Film), PP (Homo/Copolymer), PET bottle grade" },
      { label: "MFI Range", value: "0.3 – 25 g/10min per grade" },
      { label: "Density", value: "0.915 – 0.965 g/cm³" },
      { label: "Moisture Content", value: "< 0.05%" }
    ],
    gradesOrVariants: ["Blow Molding Grade", "Film Blowing Grade", "Injection Grade"],
    packaging: "25kg valve bags on pallet, or 1000kg Big Bags",
    minimumOrderQuantity: "1 x 40ft High Cube FCL (approx. 26 – 28 MT)",
    origin: "Global Petrochemical Complexes",
    supplyCapacity: "2,000+ Metric Tons monthly",
    exportAvailability: "Contract Supply",
    incotermsSupported: ["CIF", "CFR", "FOB"],
    leadTime: "18 – 25 days",
    featured: true
  },

  // --- INDUSTRIAL PRODUCTS ---
  {
    id: "prod-ind-fasteners",
    slug: "industrial-steel-fasteners-fittings",
    name: "Industrial Fasteners & Pipe Fittings",
    category: "Industrial Hardware & Metallurgy",
    categorySlug: "industrial-products",
    shortDescription: "High-tensile bolts, structural studs, flanges, and malleable iron pipe fittings engineered for industrial piping.",
    fullOverview: "Supplying industrial contractors and distribution stockists with certified metallurgy fasteners, hot-dip galvanized nuts/bolts, and ANSI/DIN class pipe fittings.",
    images: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
    ],
    specifications: [
      { label: "Material Standard", value: "Carbon Steel (8.8, 10.9), Stainless Steel 304/316" },
      { label: "Surface Finish", value: "Hot-Dip Galvanized (HDG), Yellow Zinc, Black Oxide" },
      { label: "Thread Standard", value: "ISO Metric & Imperial UNC/UNF" }
    ],
    gradesOrVariants: ["Structural Heavy Hex", "Flanged Pipe Fittings Class 150/300"],
    packaging: "Cartons on ISPM-15 wooden pallets (shrink-wrapped & steel banded)",
    minimumOrderQuantity: "2,000 kg or mixed container load",
    origin: "Industrial Manufacturing Hubs",
    supplyCapacity: "300 Metric Tons monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["FOB", "CIF", "EXW"],
    leadTime: "10 – 18 business days",
    featured: false
  },

  // --- REAL COMMODITIES & PRODUCTS (From user folder 'golden star') ---
  {
    id: "prod-veda-basmati-rice",
    slug: "veda-premium-basmati-rice",
    name: "Veda Premium Basmati Rice",
    category: "Fresh Fruits, Vegetables & Agriculture",
    categorySlug: "food-agricultural-products",
    shortDescription: "Naturally aromatic extra-long grain basmati rice, aged to perfection with supreme elongation upon cooking.",
    fullOverview: "Cultivated in the fertile Himalayan foothills, Veda Premium Basmati Rice undergoes a minimum of 18 months traditional aging to enhance fragrance, non-sticky cooking characteristics, and elongation exceeding 2.5x original grain length. Sortex 100% optical grading ensures zero chalky grains.",
    images: [
      "/products/veda-basmati-rice.jpg"
    ],
    specifications: [
      { label: "Average Grain Length (AGL)", value: "8.35mm+ (Extra Long Grain)" },
      { label: "Elongation Ratio", value: "Min 2.5x grain length post cooking" },
      { label: "Moisture Content", value: "Max 12.0%" },
      { label: "Purity Level", value: "95% Pure Traditional Basmati" },
      { label: "Broken Grains", value: "Under 1.0% maximum allowance" }
    ],
    gradesOrVariants: ["1121 Steam Basmati", "Traditional Raw Basmati", "1509 Golden Sella"],
    packaging: "5kg premium branded bags with carry handle, 20kg / 50kg BOPP & non-woven export sacks",
    minimumOrderQuantity: "1 x 20ft FCL (approx. 24 – 26 MT)",
    origin: "Punjab & Haryana, India (Product of India)",
    supplyCapacity: "5,000 Metric Tons monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["FOB", "CIF", "CFR"],
    leadTime: "7 – 12 business days",
    featured: true
  },
  {
    id: "prod-pulses-lentils-beans",
    slug: "organic-pulses-lentils-beans",
    name: "Organic Pulses, Lentils & Export Grains",
    category: "Fresh Fruits, Vegetables & Agriculture",
    categorySlug: "food-agricultural-products",
    shortDescription: "Export-grade red split lentils, green split peas, black eyed beans, chickpeas, and kidney beans.",
    fullOverview: "Directly procured from agricultural harvest hubs. Our comprehensive pulses program includes red football and split lentils (masoor), split green peas, desi and kabuli chickpeas, black eyed peas, and dark red kidney beans. Triple-stage aspirator cleaned, gravity separated, and Sortex sorted.",
    images: [
      "/products/pulses-lentils-beans.png"
    ],
    specifications: [
      { label: "Purity Threshold", value: "99.0% to 99.5% machine cleaned / sortex" },
      { label: "Moisture Content", value: "Max 12.0% – 14.0%" },
      { label: "Foreign Matter", value: "Under 0.25%" },
      { label: "Weevil / Pest Damage", value: "0% Free of live insects" }
    ],
    gradesOrVariants: ["Red Split Lentils", "Green Split Peas", "Kabuli Chickpeas (8mm/9mm)", "Red Kidney Beans"],
    packaging: "25kg / 50kg new PP woven bags, or 1,000kg bulk tote bags",
    minimumOrderQuantity: "1 x 20ft FCL (approx. 24 Metric Tons)",
    origin: "India, Canada, Australia",
    supplyCapacity: "3,500 Metric Tons monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["CIF", "CFR", "FOB"],
    leadTime: "10 – 15 business days",
    featured: true
  },
  {
    id: "prod-dry-fruits-nuts",
    slug: "premium-dry-fruits-nuts-berries",
    name: "Gourmet Dry Fruits, Nuts & Exotic Berries",
    category: "Fresh Fruits, Vegetables & Agriculture",
    categorySlug: "food-agricultural-products",
    shortDescription: "Export selection of California almonds, W180/W240 cashews, pistachios, Medjool dates, dried apricots, and berries.",
    fullOverview: "Carefully sorted and packaged gourmet nuts and dehydrated fruits. Featuring king-sized cashews, California shelled almonds, Iranian pistachios, Turkish sun-dried apricots, walnuts, and dried cranberries in bulk nitrogen-flushed packaging for extended shelf life.",
    images: [
      "/products/dry-fruits-nuts.png"
    ],
    specifications: [
      { label: "Cashew Grades", value: "W180 (King Size), W240, W320, Splits" },
      { label: "Almond Varieties", value: "Nonpareil, Carmel, California (Counts 23/25, 27/30)" },
      { label: "Moisture Level", value: "Under 5.0% for nuts | 15% – 20% for dried fruits" },
      { label: "Aflatoxin Level", value: "< 4 ppb compliant with EU/US food standards" }
    ],
    gradesOrVariants: ["Raw Whole Kernels", "Roasted & Salted", "Organic Grade A"],
    packaging: "10kg / 25lb vacuum-sealed nitrogen foil cartons, food-grade tins",
    minimumOrderQuantity: "1,000 kg or 1 x 20ft container (approx. 16 MT)",
    origin: "India, USA, Iran, Turkey",
    supplyCapacity: "800 Metric Tons monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["CIF", "FOB", "CFR"],
    leadTime: "7 – 14 business days",
    featured: true
  },
  {
    id: "prod-printed-textiles",
    slug: "indian-printed-textiles-cotton-fabrics",
    name: "Indian Printed Cotton & Silk Fabrics",
    category: "Indian Textiles & Premium Fabrics",
    categorySlug: "textiles-fabrics",
    shortDescription: "Vibrant ethnic prints, pure cotton fabric rolls, floral cambrics, and silk blends crafted for international garment makers.",
    fullOverview: "Exporting certified OEKO-TEX compliant handloom and mill-finished fabrics from South India's premier textile clusters. High colorfastness, reactive digital prints, traditional block prints, and pure organic combed cotton suitable for apparel, fashion labels, and home furnishings.",
    images: [
      "/products/printed-textiles-fabrics.jpg"
    ],
    specifications: [
      { label: "Fabric Composition", value: "100% Combed Cotton, Cotton-Silk Blends" },
      { label: "Yarn Count", value: "40s x 40s, 60s x 60s Cambric, 80s Voile" },
      { label: "Fabric Width", value: "44 inches, 54 inches, 58 inches" },
      { label: "Color Fastness to Washing", value: "Grade 4.0 – 4.5 (ISO 105-C06 standard)" },
      { label: "Printing Technique", value: "Reactive Screen Print & High-Definition Digital" }
    ],
    gradesOrVariants: ["Cambric 60s", "Voile 80s", "Poplin Cotton", "Mulmul Handloom"],
    packaging: "Roll packaging on hard paper tubes, double plastic wrapped with export bale packing",
    minimumOrderQuantity: "1,000 meters per print design (Air or Sea container shipment)",
    origin: "Tamil Nadu, Gujarat, Rajasthan, India",
    supplyCapacity: "150,000 meters monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["FOB", "CIF", "EXW"],
    leadTime: "10 – 20 business days",
    featured: true
  },
  {
    id: "prod-linen-canvas-upholstery",
    slug: "heavy-linen-canvas-upholstery-fabrics",
    name: "Heavy Woven Canvas & Linen Upholstery",
    category: "Indian Textiles & Premium Fabrics",
    categorySlug: "textiles-fabrics",
    shortDescription: "Industrial-grade dyed duck canvas, pure linen rolls, and water-resistant upholstery fabrics in curated earthy tones.",
    fullOverview: "Engineered for high-abrasion applications, premium furniture manufacturing, marine covers, and durable utility bags. Our heavy canvas and pure flax linen fabrics exhibit supreme tensile strength, Martindale rub ratings over 40,000 rubs, and eco-certified vat dyeing.",
    images: [
      "/products/linen-canvas-upholstery.jpg"
    ],
    specifications: [
      { label: "Fabric Weight (GSM)", value: "280 GSM, 380 GSM, 450 GSM, 540 GSM (16oz)" },
      { label: "Composition", value: "100% Cotton Duck Canvas / 100% European Flax Linen" },
      { label: "Martindale Abrasion", value: "40,000+ Cycles (Heavy Commercial)" },
      { label: "Finishing Treatments", value: "Water Repellent, Fire Retardant (optional), Pre-shrunk" }
    ],
    gradesOrVariants: ["Dyed Canvas #10/#12", "Raw Greige Canvas", "Stonewashed Linen"],
    packaging: "50-meter rolls on heavy cardboard cores with moisture-barrier polythene and burlap outer wrap",
    minimumOrderQuantity: "500 meters per colorway",
    origin: "India, Turkey",
    supplyCapacity: "80,000 meters monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["FOB", "CIF", "CFR"],
    leadTime: "14 – 21 business days",
    featured: true
  },
  {
    id: "prod-leather-goods-wallets",
    slug: "handcrafted-leather-goods-accessories",
    name: "Handcrafted Full-Grain Leather Goods",
    category: "Handcrafted Leather Goods & Accessories",
    categorySlug: "leather-craft",
    shortDescription: "Artisanal vegetable-tanned leather belts, bi-fold wallets, and slim cardholders with precision contrast edge stitching.",
    fullOverview: "Crafted in the certified tanneries of Ambur and Ranipet, South India. Made from 100% genuine full-grain top cowhide and buffalo hide. Features hand-burnished edges, RFID-blocking inner lining, heavy-duty brass buckles, and custom private-label embossing for luxury brands worldwide.",
    images: [
      "/products/leather-goods-wallets.jpg"
    ],
    specifications: [
      { label: "Leather Type", value: "Full-Grain Vegetable Tanned Cowhide / Buffalo Leather" },
      { label: "Hardware Finish", value: "Solid Antique Brass, Gunmetal, Brushed Nickel" },
      { label: "Stitching", value: "Heavy-gauge bonded nylon thread with hand-finished edges" },
      { label: "Customization", value: "Heat debossing, laser engraving, bespoke gift box packaging" }
    ],
    gradesOrVariants: ["Vintage Cognac", "Espresso Brown", "Classic Onyx Black"],
    packaging: "Individual luxury matte-black gift box with protective fabric pouch, master export carton",
    minimumOrderQuantity: "250 pieces per design (Private label ready)",
    origin: "Ambur & Ranipet, Tamil Nadu, India",
    supplyCapacity: "25,000 units monthly",
    exportAvailability: "In Stock",
    incotermsSupported: ["FOB", "CIF", "Air Courier DDP"],
    leadTime: "14 – 25 business days",
    featured: true
  }
];
