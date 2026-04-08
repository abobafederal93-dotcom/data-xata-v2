import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';
import MobileMenu from '@/components/layout/MobileMenu';
import { mainNav } from '@/data/navigation';

const dedicatedCountries = [
  { label: 'Аренда сервера в США', href: '#' },
  { label: 'Аренда сервера в Германии', href: '#' },
  { label: 'Аренда сервера во Франции', href: '#' },
  { label: 'Аренда сервера в Голландии', href: '#' },
];

const dedicatedTech = [
  { label: 'Аренда Windows сервера', href: '#' },
  { label: 'Аренда Linux Сервера', href: '#' },
  { label: 'Аренда игрового сервера', href: '#' },
  { label: 'Аренда хранилища', href: '#' },
  { label: 'Аренда офисного сервера', href: '#' },
  { label: 'Резервное копирование', href: '#' },
  { label: 'Администрирование серверов', href: '#' },
];

const vpsCountries: Array<{ label: string; href: string; accent?: boolean }> = [
  { label: 'Аренда виртуального сервера VPS/VDS в США', href: '#' },
  { label: 'Аренда виртуального сервера VPS/VDS в Германии', href: '#' },
  { label: 'Аренда виртуального сервера VPS/VDS во Франции', href: '#' },
  { label: 'Аренда виртуального сервера VPS/VDS в Голландии', href: '#', accent: true },
];

const vpsTech = [
  { label: 'Аренда виртуального сервера VPS/VDS на Windows', href: '#' },
  { label: 'Аренда виртуального сервера VPS/VDS на Linux', href: '#' },
];

export default function Header() {
  return (
    /* group on header so dropdown can respond to hover on the nav button inside */
    <header className="bg-primary-dark sticky top-0 z-50">
      <Container className="flex items-center h-68">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/img/figma/logo.svg"
            alt="DATA-XATA"
            width={118}
            height={26}
            className="w-[11.8rem] h-[2.6rem]"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden desktop:flex items-center ml-auto gap-0">
          {mainNav.map((item) =>
            item.hasDropdown ? (
              /* group scoped to this nav item; dropdown is absolute to nearest positioned ancestor = header */
              <div key={item.label} className="group/dd relative self-stretch flex items-center">
                <button
                  className="flex items-center gap-5 px-15 h-full text-14 leading-20 font-medium text-white hover:text-white/80 transition-colors"
                >
                  {item.label}
                  <span className="icons i-caret text-12 transition-transform duration-200 group-hover/dd:rotate-180" />
                </button>

                {/* Full-width dropdown: absolute, anchored to header bottom */}
                <div
                  className={cn(
                    'absolute top-full left-1/2 -translate-x-1/2 z-50',
                    'overflow-hidden',
                    'max-h-0 group-hover/dd:max-h-[80rem]',
                    'opacity-0 group-hover/dd:opacity-100',
                    'transition-all duration-200',
                    /* extend to full viewport width */
                    'w-[100vw]',
                  )}
                >
                  <div className="bg-primary-dark/90 backdrop-blur-sm">
                    <Container>
                      <div className="flex gap-40 py-30">
                        {/* Left column — Dedicated servers */}
                        <div className="flex-1">
                          <p className="text-14 leading-20 font-medium text-white mb-15">
                            Аренда сервера
                          </p>
                          <p className="text-12 leading-17 font-medium text-secondary mb-10">
                            Страны
                          </p>
                          <ul className="flex flex-col gap-10 mb-15">
                            {dedicatedCountries.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="text-14 leading-20 font-normal text-white hover:text-accent transition-colors"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <p className="text-12 leading-17 font-medium text-secondary mb-10">
                            Технологии
                          </p>
                          <ul className="flex flex-col gap-10">
                            {dedicatedTech.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="text-14 leading-20 font-normal text-white hover:text-accent transition-colors"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right column — VPS/VDS */}
                        <div className="flex-1">
                          <p className="text-14 leading-20 font-medium text-white mb-15">
                            Аренда виртуального сервера VPS/VDS
                          </p>
                          <p className="text-12 leading-17 font-medium text-secondary mb-10">
                            Страны
                          </p>
                          <ul className="flex flex-col gap-10 mb-15">
                            {vpsCountries.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className={cn(
                                    'text-14 leading-20 font-normal hover:text-accent transition-colors',
                                    link.accent ? 'text-accent' : 'text-white',
                                  )}
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <p className="text-12 leading-17 font-medium text-secondary mb-10">
                            Технологии
                          </p>
                          <ul className="flex flex-col gap-10">
                            {vpsTech.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="text-14 leading-20 font-normal text-white hover:text-accent transition-colors"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Container>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="px-15 py-24 text-14 leading-20 font-medium text-white hover:text-white/80 transition-colors"
              >
                {item.label}
              </Link>
            ),
          )}

          {/* Language switcher */}
          <Link
            href="#"
            className="px-15 py-24 text-14 leading-20 font-medium text-accent hover:text-accent/80 transition-colors"
          >
            RU
          </Link>

          {/* CTA button */}
          <Link
            href="#"
            className={cn(
              'ml-20 flex items-center justify-center',
              'w-[14.1rem] h-36 border border-white',
              'text-14 leading-20 font-medium text-white',
              'hover:bg-white hover:text-primary-dark transition-colors',
            )}
          >
            Личный кабинет
          </Link>
        </nav>

        {/* Mobile burger */}
        <div className="desktop:hidden ml-auto">
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
