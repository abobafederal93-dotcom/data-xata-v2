export interface SpecRow {
  label: string;
  value: string;
}

export const serverSpecs: SpecRow[] = [
  { label: 'абонплата', value: '€29.00' },
  { label: 'интервал оплаты', value: '1 месяц' },
  { label: 'плата за установку', value: 'Бесплатно' },
  { label: 'срок установки', value: '3-5 минут' },
  { label: 'количество cpu', value: '1' },
  { label: 'ip v4', value: '1' },
  { label: 'ip v6', value: '1' },
  { label: 'трафик', value: '1 TB' },
  { label: 'название cpu', value: 'Intel Xeon E5530' },
  { label: 'частота', value: '2.4 GHz' },
  { label: 'количество ядер', value: '4 / 8' },
  { label: 'cpu benchmark', value: '3,842' },
  { label: 'защита от Ddos', value: 'Включена' },
  { label: 'внутр. коммутация', value: '1 Gbps' },
  { label: 'firewall', value: 'Включён' },
  { label: 'reverse dns', value: 'Включён' },
  { label: 'Память', value: '60 GB DDR3' },
  { label: 'Жесткие диски', value: 'SSD 120 GB + HDD 2x1 TB' },
  { label: 'фишки', value: 'IPMI, DDoS, IPv6' },
  { label: 'ограничения', value: 'Нет' },
  { label: 'порт', value: '200 Mbps' },
];

export const pricingPlans = [
  { id: '30tb', label: '30 TB', active: true, extra: null },
  { id: '100tb', label: '100 TB', active: false, extra: '+ €40.00' },
  { id: '250tb', label: '250 TB', active: false, extra: '+ €115.00' },
];

export const networkPlans = [
  { id: '1x1000', label: '1x 1000Mbps', active: true, extra: null },
  { id: '2x1000', label: '2x 1000Mbps', active: false, extra: '+ €100' },
  { id: '4x1000', label: '4x 1000Mbps', active: false, extra: '+ €400' },
  { id: '10gbps', label: '1x 10.000Mbps', active: false, extra: '+ €1020', disabled: true },
];
