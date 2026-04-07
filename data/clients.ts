export const clientCards = [
  {
    id: "hosting",
    title: "Хостинг",
    icon: "i-server",
    description:
      "Хостинг-провайдеры и веб-студии, которым нужны мощные и стабильные серверы.",
  },
  {
    id: "development",
    title: "Разработка",
    icon: "i-tool",
    description:
      "Команды разработки, CI/CD пайплайны, тестовые окружения и DevOps.",
  },
  {
    id: "vdi-vpn-proxy",
    title: "VDI, VPN и Прокси",
    icon: "i-cloud",
    description:
      "Виртуальные рабочие столы, VPN-сервисы и прокси-инфраструктура.",
  },
  {
    id: "business",
    title: "Бизнес",
    icon: "i-office",
    description:
      "Корпоративные клиенты: 1С, CRM, ERP, базы данных и офисные сервисы.",
  },
] as const;

export const letsStart = {
  titleGhost: "Хочу скидку!",
  title: "Хочу скидку!",
  subtitle:
    "Оформи заказ в течение 10 минут и получи бонус $50 на счет!",
  buttons: [
    { label: "Выбрать сервер", href: "/search", variant: "primary" as const },
    {
      label: "Пожаловаться директору!",
      href: "https://cp.data-xata.com/",
      variant: "secondary" as const,
    },
    { label: "Заработайте на нас!", href: "/affiliate", variant: "ghost" as const },
  ],
} as const;
