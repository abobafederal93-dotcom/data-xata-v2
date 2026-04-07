import Link from 'next/link';
import { mainNav } from '../../data/navigation';
import Container from '../ui/Container';
import Flag from '../ui/Flag';
import MobileMenu from './MobileMenu';

interface DropdownCountry { code: 'de' | 'fr' | 'nl' | 'us'; label: string; href: string; }
interface DropdownTech { icon: string; label: string; href: string; }
interface VpsItem { label: string; href: string; price: string; }

const dropdownCountries: DropdownCountry[] = [
  { code: 'de', label: 'Германия', href: '/search?location=de' },
  { code: 'fr', label: 'Франция', href: '/search?location=fr' },
  { code: 'nl', label: 'Нидерланды', href: '/search?location=nl' },
  { code: 'us', label: 'США', href: '/search?location=us' },
];

const dropdownTechs: DropdownTech[] = [
  { icon: 'i-windows', label: 'Windows', href: '/search?os=windows' },
  { icon: 'i-linux', label: 'Linux', href: '/search?os=linux' },
  { icon: 'i-game', label: 'Игровой', href: '/search?type=game' },
  { icon: 'i-repository', label: 'Репозиторий', href: '/search?type=repository' },
  { icon: 'i-office', label: 'Office', href: '/search?type=office' },
  { icon: 'i-backup', label: 'Backup', href: '/backup' },
  { icon: 'i-admin', label: 'Admin', href: '/admin' },
];

const vpsItems: VpsItem[] = [
  { label: 'VPS SSD NVMe', href: '/vps/nvme', price: 'от 3.5 €/мес' },
  { label: 'VPS KVM', href: '/vps/kvm', price: 'от 2.9 €/мес' },
  { label: 'VPS OpenVZ', href: '/vps/openvz', price: 'от 1.5 €/мес' },
  { label: 'VDS Dedicated', href: '/vds', price: 'от 45 €/мес' },
];

const langOptions = [
  { code: 'ua' as const, label: 'UA', href: '/ua' },
  { code: 'ru' as const, label: 'RU', href: '/ru' },
  { code: 'en' as const, label: 'en', href: '/en' },
];

export default function Header() {
  return (
    <header className="h-68 bg-bg border-b border-white/10 sticky top-0 z-50">
      <Container className="h-full">
        <div className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.svg" width={118} height={26} alt="Data-Xata" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden desktop:flex items-center gap-30 ml-40">
            {/* Аренда сервера with mega dropdown */}
            <div className="group relative h-68 flex items-center">
              <Link
                href="/search"
                className="flex items-center gap-6 text-14 text-white hover:text-accent transition-colors"
              >
                Аренда сервера
                <i className="icons i-caret text-10" aria-hidden="true" />
              </Link>

              <div className="hidden group-hover:block absolute top-full left-0 z-50 min-w-[52rem] bg-[#0041be] p-20 shadow-2xl">
                <div className="grid grid-cols-2 gap-30">
                  <div>
                    <p className="text-11 font-medium uppercase tracking-[0.05em] text-white/50 mb-10">Страны</p>
                    <ul className="mb-20">
                      {dropdownCountries.map((c) => (
                        <li key={c.code}>
                          <Link href={c.href} className="flex items-center gap-8 py-5 text-13 text-white hover:text-accent">
                            <Flag code={c.code} alt={c.label} />
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <p className="text-11 font-medium uppercase tracking-[0.05em] text-white/50 mb-10">Технологии</p>
                    <ul>
                      {dropdownTechs.map((t) => (
                        <li key={t.icon}>
                          <Link href={t.href} className="flex items-center gap-8 py-5 text-13 text-white hover:text-accent">
                            <i className={`icons ${t.icon}`} aria-hidden="true" />
                            {t.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-11 font-medium uppercase tracking-[0.05em] text-white/50 mb-10">VPS / VDS</p>
                    <ul className="mb-20">
                      {vpsItems.map((v) => (
                        <li key={v.href} className="flex items-center justify-between py-6">
                          <Link href={v.href} className="text-13 text-white hover:text-accent">{v.label}</Link>
                          <span className="text-12 text-white/60 ml-15">{v.price}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/search"
                      className="inline-flex items-center justify-center h-36 px-20 border border-white/30 text-13 text-white hover:bg-white hover:text-bg transition-colors rounded-sm"
                    >
                      Все серверы
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {mainNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-14 text-white hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right block: lang + login (desktop) */}
          <div className="hidden desktop:flex items-center gap-20">
            {/* Language */}
            <div className="group relative h-68 flex items-center">
              <button type="button" className="flex items-center gap-6 text-14 text-white hover:text-accent">
                <Flag code="ru" alt="RU" />
                RU
                <i className="icons i-caret text-10" aria-hidden="true" />
              </button>
              <ul className="hidden group-hover:block absolute top-full right-0 z-50 min-w-[12rem] bg-[#0041be] py-8 shadow-2xl">
                {langOptions.map((lang) => (
                  <li key={lang.label}>
                    <Link href={lang.href} className="flex items-center gap-8 px-15 py-6 text-13 text-white hover:text-accent">
                      <Flag code={lang.code} alt={lang.label} />
                      {lang.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Login button */}
            <a
              href="https://cp.data-xata.com/"
              rel="nofollow noindex"
              className="inline-flex items-center justify-center h-36 w-[14.1rem] border border-white text-13 text-white hover:bg-white hover:text-bg transition-colors rounded-sm"
            >
              Личный кабинет
            </a>
          </div>

          {/* Mobile right side */}
          <div className="flex desktop:hidden items-center gap-20">
            <a
              href="https://cp.data-xata.com/"
              rel="nofollow noindex"
              aria-label="Личный кабинет"
              className="text-white"
            >
              <i className="icons i-login text-24" aria-hidden="true" />
            </a>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
