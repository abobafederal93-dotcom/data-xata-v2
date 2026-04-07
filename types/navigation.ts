import type { IconName } from './ui';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ContactItem {
  type: 'phone' | 'email' | 'tg' | 'skype' | 'telegram' | 'address';
  label: string;
  href?: string;
  value?: string;
  icon?: IconName;
}

export interface SocialLink {
  name: string;
  href: string;
  icon?: IconName | string;
  svgSrc?: string; // для Twitter (нет в иконочном шрифте)
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}
