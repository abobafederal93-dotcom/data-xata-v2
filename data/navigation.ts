import type {
  NavItem,
  ContactItem,
  SocialLink,
  FooterColumn,
  FooterLink,
} from "@/types";

export const mainNav: NavItem[] = [
  { label: "Аренда сервера", href: "/search" },
  { label: "Помощь", href: "/help" },
  { label: "Оплата и доставка", href: "/payment" },
  { label: "Блог", href: "/blog" },
  { label: "Партнерская программа", href: "/affiliate" },
];

export const langOptions = ["RU", "UA", "EN"] as const;
export type Lang = (typeof langOptions)[number];

export const contacts: ContactItem[] = [
  {
    type: "phone",
    label: "+372 (800) 7873",
    href: "tel:+3728007873",
    icon: "phone",
  },
  {
    type: "phone",
    label: "+380 (44) 23 88 946",
    href: "tel:+380442388946",
    icon: "phone",
  },
  {
    type: "phone",
    label: "+7 (499) 348 1331",
    href: "tel:+74993481331",
    icon: "phone",
  },
  {
    type: "email",
    label: "support@data-xata.com",
    href: "mailto:support@data-xata.com",
    icon: "email",
  },
  {
    type: "skype",
    label: "gurnik-dtx",
    href: "skype:gurnik-dtx?chat",
    icon: "skype",
  },
  {
    type: "tg",
    label: "data_xata",
    href: "https://t.me/data_xata",
    icon: "tg",
  },
];

export const officeAddress = "Sepapaja 6 Tallinn";

export const socials: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/data.xata",
    icon: "fb",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/dataxata",
    icon: "info",
    svgSrc: "/img/icons/i-tw.svg",
  },
  {
    name: "VK",
    href: "https://vk.com/dataxata",
    icon: "vk",
  },
  {
    name: "Telegram",
    href: "tg://resolve?domain=dtxvti",
    icon: "tg",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Аренда сервера",
    links: [
      { label: "Аренда сервера в США", href: "/search?location=us" },
      { label: "Аренда сервера в Германии", href: "/search?location=de" },
      { label: "Аренда сервера во Франции", href: "/search?location=fr" },
      { label: "Аренда сервера в Голландии", href: "/search?location=nl" },
      { label: "Аренда Windows сервера", href: "/search?os=windows" },
      { label: "Аренда Linux Сервера", href: "/search?os=linux" },
      { label: "Аренда игрового сервера", href: "/search?type=game" },
      { label: "Аренда хранилища", href: "/search?type=storage" },
      { label: "Аренда офисного сервера", href: "/search?type=office" },
      { label: "Резервное копирование", href: "/backup" },
      { label: "Администрирование серверов", href: "/admin" },
    ],
  },
  {
    title: "Аренда виртуального сервера",
    links: [
      { label: "Аренда VPS/VDS в США", href: "/search?type=vps&location=us" },
      { label: "Аренда VPS/VDS в Германии", href: "/search?type=vps&location=de" },
      { label: "Аренда VPS/VDS во Франции", href: "/search?type=vps&location=fr" },
      { label: "Аренда VPS/VDS в Голландии", href: "/search?type=vps&location=nl" },
      { label: "Аренда VPS/VDS на Windows", href: "/search?type=vps&os=windows" },
      { label: "Аренда VPS/VDS на Linux", href: "/search?type=vps&os=linux" },
    ],
  },
  {
    title: "Остальное",
    links: [
      { label: "Аренда сервера с тестовым периодом", href: "/trial" },
      { label: "Помощь", href: "/help" },
      { label: "Оплата и доставка", href: "/payment" },
      { label: "Блог", href: "/blog" },
      { label: "Партнерская программа", href: "/affiliate" },
    ],
  },
];

export const footerNavLinks: FooterLink[] = [
  { label: "Terms and conditions", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
  { label: "Sitemap", href: "/sitemap" },
];

export const paymentMethods = [
  { name: "Visa", icon: "/img/pay/visa.svg" },
  { name: "Mastercard", icon: "/img/pay/mastercard.svg" },
  { name: "PayPal", icon: "/img/pay/paypal.svg" },
  { name: "WebMoney", icon: "/img/pay/webmoney.svg" },
] as const;
