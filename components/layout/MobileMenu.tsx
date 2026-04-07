'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { mainNav, contacts, officeAddress } from '../../data/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

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
        <div className="fixed inset-0 z-[100] bg-bg flex flex-col">
          <div className="flex items-center justify-between h-66 px-20 border-b border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.svg" width={118} height={26} alt="Data-Xata" />
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={() => setIsOpen(false)}
              className="text-white text-24 w-30 h-30 flex items-center justify-center"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-20 py-30">
            <nav>
              <ul className="flex flex-col gap-20">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-19 text-white hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-40 pt-30 border-t border-white/10">
              <p className="text-12 font-medium uppercase text-white/40 mb-15">Контакты</p>
              <p className="flex items-start gap-8 text-14 text-white mb-15">
                <i className="icons i-map mt-2" aria-hidden="true" />
                {officeAddress}
              </p>
              <ul className="flex flex-col gap-12">
                {contacts.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="flex items-center gap-8 text-14 text-white hover:text-accent"
                    >
                      {c.icon && <i className={`icons i-${c.icon}`} aria-hidden="true" />}
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="https://cp.data-xata.com/"
              rel="nofollow noindex"
              className="mt-40 inline-flex items-center justify-center h-48 w-full border border-white text-14 text-white hover:bg-white hover:text-bg transition-colors rounded-sm"
            >
              Личный кабинет
            </a>
          </div>
        </div>
      )}
    </>
  );
}
