'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { mainNav } from '@/data/navigation';

const serverSubmenu = {
  dedicated: {
    title: 'Аренда сервера',
    countries: [
      { label: 'Аренда сервера в США', href: '#' },
      { label: 'Аренда сервера в Германии', href: '#' },
      { label: 'Аренда сервера во Франции', href: '#' },
      { label: 'Аренда сервера в Голландии', href: '#' },
    ],
    tech: [
      { label: 'Аренда Windows сервера', href: '#' },
      { label: 'Аренда Linux Сервера', href: '#' },
      { label: 'Аренда игрового сервера', href: '#' },
      { label: 'Аренда хранилища', href: '#' },
      { label: 'Аренда офисного сервера', href: '#' },
      { label: 'Резервное копирование', href: '#' },
      { label: 'Администрирование серверов', href: '#' },
    ],
  },
  vps: {
    title: 'Аренда виртуального сервера VPS/VDS',
    countries: [
      { label: 'Аренда виртуального сервера VPS/VDS в США', href: '#' },
      { label: 'Аренда виртуального сервера VPS/VDS в Германии', href: '#' },
      { label: 'Аренда виртуального сервера VPS/VDS во Франции', href: '#' },
      { label: 'Аренда виртуального сервера VPS/VDS в Голландии', href: '#', accent: true },
    ],
    tech: [
      { label: 'Аренда виртуального сервера VPS/VDS на Windows', href: '#' },
      { label: 'Аренда виртуального сервера VPS/VDS на Linux', href: '#' },
    ],
  },
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenuContent({ isOpen, onClose }: MobileMenuProps) {
  const [serverOpen, setServerOpen] = useState(false);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] bg-primary-dark flex flex-col overflow-y-auto transition-transform duration-300',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <div className="flex items-center justify-between px-20 py-20 border-b border-white/10">
        <span className="text-14 leading-20 font-medium text-white">Меню</span>
        <button
          onClick={onClose}
          className="text-white p-5"
          aria-label="Закрыть меню"
        >
          <span className="icons i-close text-20" />
        </button>
      </div>

      <nav className="flex flex-col px-20 py-20 gap-0">
        {mainNav.map((item) => (
          <div key={item.label}>
            {item.hasDropdown ? (
              <>
                <button
                  onClick={() => setServerOpen((v) => !v)}
                  className="flex items-center justify-between w-full py-15 text-14 leading-20 font-medium text-white border-b border-white/10"
                >
                  {item.label}
                  <span
                    className={cn(
                      'icons i-caret text-12 transition-transform duration-200',
                      serverOpen && 'rotate-180',
                    )}
                  />
                </button>
                {serverOpen && (
                  <div className="pb-10 pt-5 flex flex-col gap-0 pl-15">
                    {/* Dedicated section */}
                    <p className="text-12 leading-17 font-medium text-secondary pt-10 pb-5">
                      {serverSubmenu.dedicated.title}
                    </p>
                    <p className="text-12 leading-17 font-medium text-secondary pt-5 pb-3">Страны</p>
                    {serverSubmenu.dedicated.countries.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="py-8 text-14 leading-20 font-normal text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <p className="text-12 leading-17 font-medium text-secondary pt-5 pb-3">Технологии</p>
                    {serverSubmenu.dedicated.tech.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="py-8 text-14 leading-20 font-normal text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                    {/* VPS section */}
                    <p className="text-12 leading-17 font-medium text-secondary pt-10 pb-5">
                      {serverSubmenu.vps.title}
                    </p>
                    <p className="text-12 leading-17 font-medium text-secondary pt-5 pb-3">Страны</p>
                    {serverSubmenu.vps.countries.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className={cn(
                          'py-8 text-14 leading-20 font-normal',
                          (link as { accent?: boolean }).accent ? 'text-accent' : 'text-white',
                        )}
                      >
                        {link.label}
                      </Link>
                    ))}
                    <p className="text-12 leading-17 font-medium text-secondary pt-5 pb-3">Технологии</p>
                    {serverSubmenu.vps.tech.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="py-8 text-14 leading-20 font-normal text-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                href={item.href}
                onClick={onClose}
                className="flex items-center py-15 text-14 leading-20 font-medium text-white border-b border-white/10"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}

        <Link
          href="#"
          onClick={onClose}
          className="flex items-center py-15 text-14 leading-20 font-medium text-accent border-b border-white/10"
        >
          RU
        </Link>
      </nav>

      <div className="px-20 pb-30 mt-auto">
        <Link
          href="#"
          onClick={onClose}
          className="flex items-center justify-center w-full h-36 border border-white text-14 leading-20 font-medium text-white"
        >
          Личный кабинет
        </Link>
      </div>
    </div>
  );
}

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="desktop:hidden flex flex-col justify-center items-center w-36 h-36 gap-[0.6rem]"
        aria-label="Открыть меню"
      >
        <span className="block w-24 h-2 bg-white" />
        <span className="block w-24 h-2 bg-white" />
        <span className="block w-24 h-2 bg-white" />
      </button>

      <MobileMenuContent isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
