export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  fullOverview: string;
  images: string[];
  specifications: ProductSpecification[];
  gradesOrVariants: string[];
  packaging: string;
  minimumOrderQuantity: string;
  origin: string; // Editable placeholder
  supplyCapacity: string;
  exportAvailability: 'In Stock' | 'Contract Supply' | 'Seasonal Harvest' | 'Custom Processing';
  incotermsSupported: string[];
  leadTime: string;
  featured?: boolean;
}

export interface ProductCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  itemCountLabel: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  iconName: string;
  scopePoints: string[];
  keyBenefits: string[];
  bestFor: string;
}

export interface TradeRegion {
  id: string;
  name: string;
  code: string;
  type: 'supplier' | 'export' | 'import' | 'both' | 'logistics_hub';
  coordinates: { x: number; y: number }; // SVG map coordinates (0-1000, 0-500)
  description: string;
  keyCommodities: string[];
  portsOrHubs: string[];
}

export interface CompanyInfo {
  name: string;
  descriptor: string;
  tagline: string;
  eyebrow: string;
  heroHeadline: string;
  heroSupportingText: string;
  aboutHeadline: string;
  aboutText: string;
  email: string;
  tradeInquiryEmail: string;
  phone: string;
  whatsapp: string;
  headquarters: string;
  businessHours: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneOrWhatsApp: string;
  country: string;
  productRequirement: string;
  quantityRequired: string;
  unit: string;
  targetDestinationPort: string;
  incoterms: 'FOB' | 'CIF' | 'CFR' | 'EXW' | 'Flexible';
  additionalSpecifications: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phoneOrWhatsApp: string;
  country: string;
  inquiryType: 'Product Sourcing' | 'Supply & Export' | 'Bulk Purchasing' | 'Partnership' | 'General Question';
  message: string;
}
