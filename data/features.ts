export interface Feature {
  icon: string;
  title: string;
  text: string;
}

export const features: Feature[] = [
  { icon: 'speed', title: 'Быстрая активация', text: 'Сервер готов к работе через 3-5 минут после оплаты' },
  { icon: 'server', title: 'Своё железо', text: 'Только собственное оборудование в надёжных дата-центрах' },
  { icon: 'protection', title: 'DDoS защита', text: 'Бесплатная защита от DDoS атак включена в каждый тариф' },
  { icon: 'support', title: 'Поддержка 24/7', text: 'Техническая поддержка круглосуточно без выходных' },
  { icon: 'map', title: '11 локаций', text: 'Дата-центры в Европе, России и США' },
  { icon: 'hdd', title: '1278 конфигураций', text: 'Более 1278 вариантов оборудования на любой бюджет' },
  { icon: 'backup', title: 'Резервное копирование', text: 'Автоматическое резервное копирование данных' },
  { icon: 'admin', title: 'Полный root-доступ', text: 'Полный контроль над сервером с момента активации' },
  { icon: 'tool', title: 'Любая ОС', text: 'Windows, Linux, FreeBSD — установим нужную операционную систему' },
];
