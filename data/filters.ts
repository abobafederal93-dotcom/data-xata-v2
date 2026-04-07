import type { FilterGroup, FilterOption, SortOption } from "@/types";

// Главная страница — компактный hero-фильтр
export const heroFilters: FilterGroup[] = [
  {
    id: "ram",
    title: "Ram",
    type: "range",
    range: { min: 4, max: 768, unit: "GB", step: 4 },
  },
  {
    id: "disks",
    title: "Диски",
    type: "checklist",
    options: [
      { value: "any", label: "Все" },
      { value: "ssd", label: "SSD" },
      { value: "nvme", label: "NVMe" },
      { value: "hdd", label: "HDD" },
      { value: "ssd-hdd", label: "SSD+HDD" },
    ],
  },
  {
    id: "price",
    title: "Цена",
    type: "range",
    range: { min: 7.89, max: 920, unit: "€", step: 1 },
  },
];

// Сайдбар на странице поиска
export const sidebarFilters: FilterGroup[] = [
  {
    id: "main",
    title: "Основные",
    type: "checklist",
    options: [
      { value: "instant", label: "Мгновенная доставка" },
      { value: "ddos", label: "DDoS защита" },
      { value: "ipv6", label: "IPv6" },
      { value: "ipmi", label: "IPMI" },
    ],
  },
  {
    id: "price",
    title: "Цена",
    type: "range",
    range: { min: 7.89, max: 920, unit: "€", step: 1 },
  },
  {
    id: "provider",
    title: "Провайдер",
    type: "checklist",
    options: [
      { value: "dell", label: "Dell" },
      { value: "hp", label: "HP" },
      { value: "supermicro", label: "Supermicro" },
      { value: "ibm", label: "IBM" },
    ],
  },
  {
    id: "cpu",
    title: "Процессор",
    type: "checklist",
    options: [
      { value: "xeon", label: "Intel Xeon" },
      { value: "epyc", label: "AMD EPYC" },
      { value: "ryzen", label: "AMD Ryzen" },
      { value: "core-i", label: "Intel Core i7/i9" },
    ],
  },
  {
    id: "ram",
    title: "Память",
    type: "range",
    range: { min: 4, max: 768, unit: "GB", step: 4 },
  },
  {
    id: "disk",
    title: "Жесткий диск",
    type: "checklist",
    options: [
      { value: "ssd", label: "SSD" },
      { value: "nvme", label: "NVMe" },
      { value: "hdd", label: "HDD" },
      { value: "ssd-hdd", label: "SSD + HDD" },
    ],
  },
  {
    id: "speed",
    title: "Скорость",
    type: "checklist",
    options: [
      { value: "100m", label: "100 Mbps" },
      { value: "200m", label: "200 Mbps" },
      { value: "1g", label: "1 Gbps" },
      { value: "10g", label: "10 Gbps" },
    ],
  },
  {
    id: "os",
    title: "ПО",
    type: "checklist",
    options: [
      { value: "linux", label: "Linux", icon: "linux" },
      { value: "windows", label: "Windows", icon: "windows" },
      { value: "freebsd", label: "FreeBSD" },
      { value: "centos", label: "CentOS" },
    ],
  },
  {
    id: "virtualization",
    title: "Виртуализация",
    type: "checklist",
    options: [
      { value: "kvm", label: "KVM" },
      { value: "vmware", label: "VMware" },
      { value: "hyperv", label: "Hyper-V" },
      { value: "proxmox", label: "Proxmox" },
    ],
  },
  {
    id: "location",
    title: "Локация",
    type: "checklist",
    options: [
      { value: "de", label: "Германия", flag: "de" },
      { value: "fr", label: "Франция", flag: "fr" },
      { value: "nl", label: "Нидерланды", flag: "nl" },
      { value: "us", label: "США", flag: "us" },
    ],
  },
  {
    id: "features",
    title: "Особенности",
    type: "checklist",
    options: [
      { value: "ddos", label: "DDoS защита" },
      { value: "backup", label: "Резервное копирование" },
      { value: "ipmi", label: "IPMI" },
      { value: "monitoring", label: "Мониторинг 24/7" },
    ],
  },
];

export const sortOptions: SortOption[] = [
  { value: "price-asc", label: "По цене (возрастание)" },
  { value: "price-desc", label: "По цене (убывание)" },
  { value: "ram-desc", label: "По объёму RAM" },
  { value: "newest", label: "Сначала новые" },
];

export const viewModes = [
  { value: "list", label: "расширено" },
  { value: "grid", label: "компактно" },
] as const;

export const currencies = [
  { value: "EUR", label: "Евро", symbol: "€" },
  { value: "USD", label: "Доллар", symbol: "$" },
] as const;

// Legacy exports (для обратной совместимости)
export const ramOptions: number[] = [4, 8, 16, 32, 64, 128, 256, 512, 768];
export const diskTypes: string[] = ["Все", "SSD", "NVMe", "HDD", "SSD+HDD"];
export const locations: FilterOption[] = [
  { value: "de", label: "Германия", flag: "de" },
  { value: "fr", label: "Франция", flag: "fr" },
  { value: "nl", label: "Нидерланды", flag: "nl" },
  { value: "us", label: "США", flag: "us" },
];
export const priceRange = { min: 7.89, max: 920 };
