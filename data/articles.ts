export interface Article {
  slug: string;
  title: string;
  category: string;
  date: string;
}

export const articles: Article[] = [
  { slug: 'no-internet-after-update', title: 'Нет подключения к Интернету после обновления', category: 'Мониторинг', date: '2024-01-15' },
  { slug: 'floating-ip-ssl', title: 'Плавающий IP-адрес для капли с SSL', category: 'API', date: '2024-01-10' },
  { slug: 'pgadmin-setup', title: 'Настройка PGAdmin на сервере', category: 'Пространства', date: '2024-01-05' },
];
