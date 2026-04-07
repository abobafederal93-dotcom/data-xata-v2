'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Flag from '../ui/Flag';
import { langCountries } from '../../data/navigation';
import type { FlagCode } from '../../types';

interface SubLink { label: string; href: string; flag?: FlagCode; icon?: string; }
interface Section {
  label: string;
  href: string;
  countries?: SubLink[];
  techs?: SubLink[];
}

const serverSection: Section = {
  label: 'Аренда сервера',
  href: '/search',
  countries: [
    { label: 'Аренда сервера в США', href: '/search?location=us', flag: 'us' },
    { label: 'Аренда сервера в Германии', href: '/search?location=de', flag: 'de' },
    { label: 'Аренда сервера во Франции', href: '/search?location=fr', flag: 'fr' },
    { label: 'Аренда сервера в Голландии', href: '/search?location=nl', flag: 'nl' },
  ],
  techs: [
    { label: 'Аренда Windows сервера', href: '/search?os=windows', icon: 'i-windows' },
    { label: 'Аренда Linux Сервера', href: '/search?os=linux', icon: 'i-linux' },
    { label: 'Аренда игрового сервера', href: '/search?type=game', icon: 'i-game' },
    { label: 'Аренда хранилища', href: '/search?type=storage', icon: 'i-repository' },
    { label: 'Аренда офисного сервера', href: '/search?type=office', icon: 'i-office' },
    { label: 'Резервное копирование', href: '/backup', icon: 'i-backup' },
    { label: 'Администрирование серверов', href: '/admin', icon: 'i-admin' },
  ],
};

const vpsSection: Section = {
  label: 'Аренда VPS/VDS',
  href: '/search?type=vps',
  countries: [
    { label: 'Аренда VPS/VDS в США', href: '/search?type=vps&location=us', flag: 'us' },
    { label: 'Аренда VPS/VDS в Германии', href: '/search?type=vps&location=de', flag: 'de' },
    { label: 'Аренда VPS/VDS во Франции', href: '/search?type=vps&location=fr', flag: 'fr' },
    { label: 'Аренда VPS/VDS в Голландии', href: '/search?type=vps&location=nl', flag: 'nl' },
  ],
  techs: [
    { label: 'Аренда VPS/VDS на Windows', href: '/search?type=vps&os=windows', icon: 'i-windows' },
    { label: 'Аренда VPS/VDS на Linux', href: '/search?type=vps&os=linux', icon: 'i-linux' },
  ],
};

const simpleLinks = [
  { label: 'Помощь', href: '/help' },
  { label: 'Оплата и доставка', href: '/payment' },
  { label: 'Блог', href: '/blog' },
  { label: 'Партнерская программа', href: '/affiliate' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setActiveSection(null);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Открыть меню"
        onClick={() => setIsOpen(true)}
        className="flex flex-col justify-center items-center w-30 h-30 gap-5"
      >
        <span className="block w-22 h-2 bg-white" />
        <span className="block w-22 h-2 bg-white" />
        <span className="block w-22 h-2 bg-white" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-bg flex flex-col">
          {/* Top bar */}
          <div className="flex items-center justify-between h-68 px-20 border-b border-white/10 shrink-0">
            {activeSection ? (
              <button
                type="button"
                onClick={() => setActiveSection(null)}
                className="flex items-center gap-8 text-16 leading-23 font-medium text-white"
                aria-label="Назад"
              >
                <i className="icons i-caret text-12 rotate-90" aria-hidden="true" />
                {activeSection.label}
              </button>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src="/img/logo.svg" width={118} height={26} alt="Data-Xata" />
            )}
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={close}
              className="text-white text-30 w-30 h-30 flex items-center justify-center leading-none"
            >
              ×
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {!activeSection ? (
              <nav className="px-20">
                <ul>
                  {[serverSection, vpsSection].map((s) => (
                    <li key={s.label}>
                      <button
                        type="button"
                        onClick={() => setActiveSection(s)}
                        className="w-full flex items-center justify-between h-56 border-b border-white/10 text-16 leading-23 font-medium text-white"
                      >
                        {s.label}
                        <i className="icons i-caret text-12 -rotate-90" aria-hidden="true" />
                      </button>
                    </li>
                  ))}
                  {simpleLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={close}
                        className="flex items-center justify-between h-56 border-b border-white/10 text-16 leading-23 font-medium text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Bottom: login + langs */}
                <div className="mt-30 mb-30">
                  <a
                    href="https://cp.data-xata.com/"
                    rel="nofollow noindex"
                    className="inline-flex items-center justify-center h-48 w-full border border-white text-14 leading-20 font-medium text-white hover:bg-white hover:text-bg transition-colors"
                  >
                    Личный кабинет
                  </a>
                  <ul className="flex items-center gap-20 mt-20">
                    {langCountries.map((lc) => (
                      <li key={lc.code}>
                        <Link
                          href={lc.href}
                          onClick={close}
                          className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-accent"
                        >
                          <Flag code={lc.code} alt={lc.country} />
                          {lc.code.toUpperCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            ) : (
              <nav className="px-20 py-20">
                {activeSection.countries && activeSection.countries.length > 0 && (
                  <>
                    <p className="text-12 leading-17 font-medium uppercase text-[#839ada] mb-15">Страны</p>
                    <ul className="mb-30">
                      {activeSection.countries.map((c) => (
                        <li key={c.href}>
                          <Link
                            href={c.href}
                            onClick={close}
                            className="flex items-center gap-8 py-10 text-14 leading-20 text-white hover:text-accent"
                          >
                            {c.flag && <Flag code={c.flag} alt={c.label} />}
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {activeSection.techs && activeSection.techs.length > 0 && (
                  <>
                    <p className="text-12 leading-17 font-medium uppercase text-[#839ada] mb-15">Технологии</p>
                    <ul>
                      {activeSection.techs.map((t) => (
                        <li key={t.href}>
                          <Link
                            href={t.href}
                            onClick={close}
                            className="flex items-center gap-8 py-10 text-14 leading-20 text-white hover:text-accent"
                          >
                            {t.icon && <i className={`icons ${t.icon}`} aria-hidden="true" />}
                            {t.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </nav>
            )}
          </div>
        </div>
      )}
    </>
  );
}
