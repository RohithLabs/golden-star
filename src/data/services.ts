import { ServiceItem } from '../types';

export const servicesList: ServiceItem[] = [
  {
    id: "serv-global-sourcing",
    slug: "global-sourcing",
    title: "Global Sourcing",
    summary: "Helping businesses identify and source suitable products from reliable supply networks worldwide.",
    description: "Golden Star Company bridges international buyers with thoroughly vetted regional producers. We evaluate production capacity, material consistency, and commercial viability to establish robust procurement channels that reduce supply chain vulnerability.",
    iconName: "Globe",
    scopePoints: [
      "Supplier identification and operational capability assessment",
      "Sample acquisition, specification validation, and lab verification coordination",
      "Direct commercial negotiation to achieve competitive wholesale pricing",
      "Ongoing supplier relationship management and production oversight"
    ],
    keyBenefits: [
      "Mitigate supplier default and quality mismatch risks",
      "Gain direct access to regional manufacturing advantages",
      "Consistent supply continuity for recurring business operations"
    ],
    bestFor: "Importers and procurement teams seeking dependable offshore manufacturers."
  },
  {
    id: "serv-import-export",
    slug: "import-export-handling",
    title: "Import & Export",
    summary: "Professional handling of international trade requirements and cross-border commercial execution.",
    description: "Navigating the complexities of global trade requires rigorous compliance, contract clarity, and cross-border coordination. Golden Star Company structures international purchase agreements, export clearances, and trade execution under internationally recognized Incoterms.",
    iconName: "Ship",
    scopePoints: [
      "Execution of contracts under Incoterms 2020 (FOB, CIF, CFR, EXW)",
      "Cross-border compliance alignment with origin and destination regulations",
      "Secure commercial payment instrument coordination (Letters of Credit, T/T terms)",
      "Clearance facilitation with certified freight forwarders and customs brokers"
    ],
    keyBenefits: [
      "Structured commercial contracts with complete legal and trade clarity",
      "Minimization of customs delays and non-compliance penalties",
      "Smooth financial and physical transfer of commercial consignments"
    ],
    bestFor: "Trading houses, distributors, and enterprises expanding international cross-border trade."
  },
  {
    id: "serv-bulk-supply",
    slug: "bulk-supply-programs",
    title: "Bulk Supply",
    summary: "Reliable supply solutions for wholesalers, distributors, and large commercial buyers.",
    description: "For high-volume operations where consistent replenishment is vital, we structure multi-container, breakbulk, and contracted supply programs. We match shipment pacing to buyer consumption cycles, preventing stockouts and warehouse congestion.",
    iconName: "Boxes",
    scopePoints: [
      "Full Container Load (FCL) and breakbulk shipment management",
      "Scheduled monthly or quarterly replenishment allocations",
      "Batch quality consistency across consecutive shipments",
      "Buffer stock coordination at strategic international freight hubs"
    ],
    keyBenefits: [
      "Economies of scale with volume-based freight and production rates",
      "Predictable replenishment schedules aligned with buyer demand",
      "Uniform product specifications from first to final container"
    ],
    bestFor: "Wholesale distributors, manufacturing plants, and retail inventory managers."
  },
  {
    id: "serv-connections",
    slug: "supplier-buyer-connections",
    title: "Supplier & Buyer Connections",
    summary: "Connecting suitable suppliers with international business requirements to unlock sustainable commercial synergy.",
    description: "International commerce succeeds when buyers and producers share aligned standards, capacity, and expectations. Golden Star Company acts as an active commercial facilitator, aligning supplier capabilities with precise overseas market requirements.",
    iconName: "Handshake",
    scopePoints: [
      "Matching technical capability to buyer procurement requirements",
      "Bridge communication gaps across languages, time zones, and business cultures",
      "Establishment of transparent terms and long-term supply agreements",
      "Resolution of operational inquiries and contract adjustments"
    ],
    keyBenefits: [
      "Accelerated partner discovery without speculative search cycles",
      "Cultivation of transparent, long-term commercial relationships",
      "Clear communication channels throughout contract lifecycles"
    ],
    bestFor: "Producers seeking global markets and buyers seeking verified producers."
  },
  {
    id: "serv-logistics",
    slug: "logistics-coordination",
    title: "Logistics Coordination",
    summary: "Comprehensive support across shipping, multimodal freight, and delivery coordination.",
    description: "From factory gate to target seaport or bonded terminal, our logistics coordination ensures cargo moves with precision. We partner with premier maritime carriers, air cargo operators, and inland hauliers to protect transit timelines.",
    iconName: "Truck",
    scopePoints: [
      "Ocean freight container bookings (20ft, 40ft Standard, 40ft High Cube, Reefer)",
      "Multimodal inland transit (rail, road feeder services to export docks)",
      "Container stuffing and cargo securing supervision",
      "Real-time vessel milestone tracking and port arrival alerts"
    ],
    keyBenefits: [
      "Optimal routing selection balancing cost and transit velocity",
      "Reduced risk of container demurrage and port storage fees",
      "Continuous shipment visibility from bill of lading to discharge"
    ],
    bestFor: "Companies needing hands-on international freight monitoring and coordination."
  },
  {
    id: "serv-documentation",
    slug: "documentation-support",
    title: "Documentation Support",
    summary: "Professional coordination of required trade, customs, and shipping documentation.",
    description: "A single document discrepancy can halt cargo at customs. Golden Star Company prepares, checks, and validates the complete suite of international export documents, ensuring seamless documentary compliance and fast bank clearance under LC terms.",
    iconName: "FileCheck2",
    scopePoints: [
      "Commercial Invoices and detailed Packing Lists tailored to destination customs",
      "Clean On-Board Ocean Bills of Lading (B/L) and Air Waybills (AWB)",
      "Certificates of Origin (Non-preferential and preferential formats)",
      "Phytosanitary, Fumigation, and Weight & Quality inspection certificates where applicable"
    ],
    keyBenefits: [
      "Zero-discrepancy documentation for fast Letter of Credit negotiation",
      "Rapid customs entry clearance at destination seaports",
      "Permanent digital record archiving for buyer trade audits"
    ],
    bestFor: "Importers and procurement officers requiring meticulous trade compliance records."
  },
  {
    id: "serv-custom-sourcing",
    slug: "custom-sourcing-solutions",
    title: "Custom Sourcing",
    summary: "Solutions for businesses looking for specific products, custom formulations, or specialized specifications.",
    description: "When standard commodity grades or catalogue products do not meet unique operational criteria, our custom sourcing desk executes bespoke procurement assignments. We identify capable factories, oversee prototyping or batch formulations, and manage bespoke packaging.",
    iconName: "SearchCheck",
    scopePoints: [
      "Detailed review of buyer technical drawings, purity thresholds, and packaging specs",
      "Factory qualification for OEM or private-label contract manufacturing",
      "Pre-production pilot batches and physical verification runs",
      "Dedicated contract terms governing proprietary specifications"
    ],
    keyBenefits: [
      "Acquire exactly what your business requires without commercial compromises",
      "Full oversight of specialized production and private labeling",
      "Dedicated sourcing specialist assigned to your trade project"
    ],
    bestFor: "Brands, manufacturers, and buyers needing non-standard or bespoke products."
  }
];
