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

export interface LangCountry {
  code: "ee" | "ru" | "ua";
  title: string;
  country: string;
  phone: string;
  phoneHref: string;
  href: string;
}

export const langCountries: LangCountry[] = [
  {
    code: "ee",
    title: "ЭСТОНИЯ",
    country: "Эстония",
    phone: "+372 880 7873",
    phoneHref: "tel:+3728807873",
    href: "/et",
  },
  {
    code: "ru",
    title: "РОССИЯ",
    country: "Русский",
    phone: "+7 (499) 348 1331",
    phoneHref: "tel:+74993481331",
    href: "/ru",
  },
  {
    code: "ua",
    title: "УКРАИНА",
    country: "Украина",
    phone: "+380 (44) 23 88 946",
    phoneHref: "tel:+380442388946",
    href: "/ua",
  },
];

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
    name: "Twitter",
    href: "https://twitter.com/dataxata",
    icon: "tw",
    svgSrc: "/img/figma/icon-twitter-24.svg",
  },
  {
    name: "Slack",
    href: "https://data-xata.slack.com",
    icon: "slack",
    svgSrc: "/img/figma/icon-slack-24.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/data.xata",
    icon: "fb",
    svgSrc: "/img/figma/icon-facebook-24.svg",
  },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Аренда серверов",
    links: [
      { label: "Аренда сервера в США", href: "/search?location=us" },
      { label: "Аренда сервера в Германии", href: "/search?location=de" },
      { label: "Аренда сервера во Франции", href: "/search?location=fr" },
      { label: "Аренда сервера в Голландии", href: "/search?location=nl" },
      { label: "Аренда Windows сервера", href: "/search?os=windows" },
      { label: "Аренда Linux сервера", href: "/search?os=linux" },
      { label: "Аренда игрового сервера", href: "/search?type=game" },
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
  {
    title: "Контакты",
    links: [
      { label: "Sepapaja 6 Tallinn", href: "/contacts" },
      { label: "+372 (800) 7873", href: "tel:+3728007873" },
      { label: "support@data-xata.com", href: "mailto:support@data-xata.com" },
    ],
  },
  {
    title: "Служба поддержки",
    links: [
      { label: "+380 (44) 23 88 946", href: "tel:+380442388946" },
      { label: "support@data-xata.com", href: "mailto:support@data-xata.com" },
    ],
  },
];

export const footerNavLinks: FooterLink[] = [
  { label: "Terms and conditions", href: "/terms" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Refund policy", href: "/refund" },
  { label: "Delivery time frame", href: "/delivery" },
  { label: "Abuse", href: "/abuse" },
  { label: "Acceptable Use Policy", href: "/aup" },
];

export const paymentMethods = [
  { name: "Visa", icon: "/img/icons/i-visa.svg" },
  { name: "Mastercard", icon: "/img/figma/logo-mastercard-footer.svg" },
  { name: "PayPal", icon: "/img/icons/i-paypal.svg" },
  { name: "WebMoney", icon: "/img/icons/i-webmoney.svg" },
] as const;
