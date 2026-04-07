import type { FlagCode, IconName } from './ui';

export interface ServerLocation {
  code: FlagCode;
  label: string;
}

export interface ServerStorage {
  type: 'ssd' | 'hdd' | 'nvme';
  count: number;
  size: string; // "120 GB", "2 TB"
}

export interface ServerTag {
  label: string;
  variant: 'green' | 'secondary' | 'red';
}

export interface ServerOption {
  id?: string;
  label: string;
  price?: number;
  selected?: boolean;
}

export interface ServerSpec {
  label: string;
  value: string;
  icon?: IconName;
}

export interface ServerOS {
  id: string;
  name: string;
}

export interface Server {
  id: string;
  slug?: string;
  name: string;
  shortDescription?: string;
  cpu: string;
  // Allow legacy numeric ram (GB) and new string ram ("32 GB")
  ram: string | number;
  // Allow new structured storage and legacy shapes
  storage: ServerStorage[] | { ssd?: string; hdd?: string } | string;
  bandwidth?: string;
  locationStorage?: string;
  // Allow new structured location and legacy string
  location: ServerLocation | string;
  locationFlag?: string;
  price: number;
  priceOld?: number;
  currency?: 'EUR';
  instant?: boolean;
  tags?: ServerTag[] | string[];
  // Allow new structured OS list and legacy string array
  os?: ServerOS[] | string[];
  specs?: ServerSpec[];
  includes?: string[];
  options?: ServerOption[];
  description?: string;

  // Legacy optional fields kept for backwards compatibility
  cpuBrand?: string;
  cpuCores?: number;
  cpuFreq?: string;
  type?: string;
  ramType?: string;
  disks?: string[];
  traffic?: string;
  ipv4?: string;
  ipv6?: string;
  discount?: number;
  setupFee?: number;
  pricePeriods?: { period: string; price: number; discount?: number }[];
  badges?: string[];
  couponAvailable?: boolean;
  freeInstall?: boolean;
  deliveryTime?: string;
}
