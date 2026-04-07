export interface Server {
  id: string;
  name: string;
  cpu: string;
  ram: number; // GB
  storage: string;
  location: string;
  locationFlag: string;
  price: number; // EUR/month
  priceOld?: number;
  discount?: number;
  os: string[];
  tags?: string[];
  instant?: boolean;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface RangeFilter {
  min: number;
  max: number;
  unit: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
