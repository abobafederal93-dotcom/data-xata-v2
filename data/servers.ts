export interface Server {
  id: string;
  cpu: string;
  type: string;
  ram: string;
  ssd?: string;
  hdd?: string;
  location: string;
  network: string;
  traffic: string;
  flag: string;
  price: string;
  oldPrice?: string;
  freeSetup?: boolean;
  fastAccess?: boolean;
  badges?: string[];
  tags?: string[];
  host?: string;
  rating?: number;
  reviews?: number;
}

export const servers: Server[] = [
  {
    id: '1',
    cpu: 'XEON E5530',
    type: 'VPS',
    ram: '60GB',
    ssd: 'SSD: 1x 120 GB',
    hdd: 'HDD: 2x 1 TB',
    location: 'Frankfut',
    network: '200 Mbps',
    traffic: '1 TB',
    flag: 'de',
    price: '€29.00',
    oldPrice: '€69.00',
    freeSetup: true,
    fastAccess: true,
    badges: ['NAT IPV4', '4 Cores', 'DDoS защита', 'IPv6 ready', 'IPMI', 'Linux'],
    tags: ['Игровой сервер', 'Сервер для стримминга', 'Сервер для высоких нагрузок'],
    host: 'Hosteons',
    rating: 5,
    reviews: 1,
  },
  {
    id: '2',
    cpu: 'XEON E5-2650',
    type: 'DS',
    ram: '128GB',
    ssd: 'SSD: 2x 240 GB',
    hdd: 'HDD: 4x 2 TB',
    location: 'Frankfut',
    network: '1 Gbps',
    traffic: '10 TB',
    flag: 'de',
    price: '€89.00',
    freeSetup: true,
    fastAccess: false,
  },
  {
    id: '3',
    cpu: 'XEON E5-2670',
    type: 'DS',
    ram: '256GB',
    ssd: 'SSD: 4x 480 GB',
    location: 'Amsterdam',
    network: '1 Gbps',
    traffic: 'Unlim',
    flag: 'nl',
    price: '€149.00',
    oldPrice: '€199.00',
  },
  {
    id: '4',
    cpu: 'Core i7-6700',
    type: 'VPS',
    ram: '32GB',
    ssd: 'SSD: 1x 240 GB',
    location: 'Tallinn',
    network: '500 Mbps',
    traffic: '5 TB',
    flag: 'ee',
    price: '€49.00',
  },
  {
    id: '5',
    cpu: 'XEON E3-1270',
    type: 'DS',
    ram: '64GB',
    hdd: 'HDD: 2x 4 TB',
    location: 'Frankfut',
    network: '200 Mbps',
    traffic: '2 TB',
    flag: 'de',
    price: '€39.00',
    freeSetup: true,
    fastAccess: true,
  },
  {
    id: '6',
    cpu: 'XEON E5-2680',
    type: 'DS',
    ram: '512GB',
    ssd: 'SSD: 8x 960 GB',
    location: 'Amsterdam',
    network: '10 Gbps',
    traffic: 'Unlim',
    flag: 'nl',
    price: '€499.00',
  },
  {
    id: '7',
    cpu: 'Core i9-10900',
    type: 'VPS',
    ram: '128GB',
    ssd: 'SSD: 2x 1 TB',
    location: 'Moscow',
    network: '1 Gbps',
    traffic: '10 TB',
    flag: 'ru',
    price: '€79.00',
    oldPrice: '€119.00',
  },
  {
    id: '8',
    cpu: 'XEON Silver 4210',
    type: 'DS',
    ram: '192GB',
    ssd: 'SSD: 2x 480 GB',
    hdd: 'HDD: 2x 8 TB',
    location: 'Frankfut',
    network: '500 Mbps',
    traffic: '5 TB',
    flag: 'de',
    price: '€119.00',
  },
];
