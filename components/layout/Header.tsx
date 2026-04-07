import Link from "next/link";

interface DropdownCountry {
  code: string;
  label: string;
  href: string;
}

interface DropdownTech {
  icon: string;
  label: string;
  href: string;
}

interface VpsItem {
  label: string;
  href: string;
  price: string;
}

interface LangOption {
  flag: string;
  label: string;
  href: string;
}

const dropdownCountries: DropdownCountry[] = [
  { code: "de", label: "Германия",   href: "/server/de" },
  { code: "fr", label: "Франция",    href: "/server/fr" },
  { code: "nl", label: "Нидерланды", href: "/server/nl" },
  { code: "us", label: "США",        href: "/server/us" },
];

const dropdownTechs: DropdownTech[] = [
  { icon: "i-windows",    label: "Windows",     href: "/server/windows" },
  { icon: "i-linux",      label: "Linux",       href: "/server/linux" },
  { icon: "i-game",       label: "Игровой",     href: "/server/game" },
  { icon: "i-repository", label: "Репозиторий", href: "/server/repository" },
  { icon: "i-office",     label: "Office",      href: "/server/office" },
  { icon: "i-backup",     label: "Backup",      href: "/server/backup" },
  { icon: "i-admin",      label: "Admin",       href: "/server/admin" },
];

const vpsItems: VpsItem[] = [
  { label: "VPS SSD NVMe",  href: "/vps/nvme",   price: "от 3.5 €/мес" },
  { label: "VPS KVM",       href: "/vps/kvm",    price: "от 2.9 €/мес" },
  { label: "VPS OpenVZ",    href: "/vps/openvz", price: "от 1.5 €/мес" },
  { label: "VDS Dedicated", href: "/vds",        price: "от 45 €/мес"  },
];

const langOptions: LangOption[] = [
  { flag: "i-ua", label: "UA", href: "/ua" },
  { flag: "i-ru", label: "RU", href: "/ru" },
  { flag: "i-en", label: "EN", href: "/en" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-container">

          {/* ── Logo ── */}
          <Link href="/" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.svg" width={118} height={26} alt="Маркетплейс Data-Xata аренда сервера" />
          </Link>

          {/* ── Main Nav ── */}
          <div className="wrap-nav hidden-xs">
            <ul className="nav navbar-nav">

              {/* Аренда сервера — mega dropdown */}
              <li className="dropdown">
                <a href="/server" className="dropdown-toggle" role="button">
                  Аренда сервера
                  <span className="icons i-caret" style={{ fontSize: "0.8rem", marginLeft: "0.4rem" }} />
                </a>

                <div className="dropdown-menu dropdown-menu-large">
                  <div className="row">
                    <div className="col-sm-5">
                      <p className="header-dropdown__title">Страны</p>
                      <ul className="icon-list">
                        {dropdownCountries.map((c) => (
                          <li key={c.code}>
                            <Link href={c.href}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={`/img/icons/i-${c.code}.svg`} width={18} height={12} alt={c.label} className="flag-img" />
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <p className="header-dropdown__title">Технологии</p>
                      <ul className="icon-list">
                        {dropdownTechs.map((t) => (
                          <li key={t.icon}>
                            <Link href={t.href}>
                              <span className={`icons ${t.icon}`} />
                              {t.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col-sm-7">
                      <p className="header-dropdown__title">VPS / VDS</p>
                      <ul>
                        {vpsItems.map((v) => (
                          <li key={v.href}>
                            <Link href={v.href} className="dropdown-link">{v.label}</Link>
                            <span style={{ color: "rgba(255,255,255,0.45)", marginLeft: "0.6rem", fontSize: "1.2rem" }}>
                              {v.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/server" className="btn btn-default btn-sm" style={{ marginTop: "1.2rem" }}>
                        Все серверы
                      </Link>
                    </div>
                  </div>
                </div>
              </li>

              <li><Link href="/help">Помощь</Link></li>
              <li><Link href="/payment">Оплата и доставка</Link></li>
              <li><Link href="/blog">Блог</Link></li>
              <li><Link href="/affiliate">Партнерская программа</Link></li>

            </ul>
          </div>

          {/* ── Language + Login (правый блок) ── */}
          <div className="header-right hidden-xs">

            {/* Язык */}
            <div className="language dropdown">
              <a href="#" className="dropdown-toggle" role="button">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/icons/i-ru.svg" width={18} height={12} alt="RU" className="flag-img" />
                RU
                <span className="icons i-caret" style={{ fontSize: "0.8rem", marginLeft: "0.4rem" }} />
              </a>
              <ul className="dropdown-menu">
                {langOptions.map((lang) => (
                  <li key={lang.label}>
                    <Link href={lang.href}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/img/icons/${lang.flag}.svg`} width={18} height={12} alt={lang.label} className="flag-img" />
                      {lang.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Кнопка Личный кабинет: Figma 141×36px */}
            <a
              href="https://cp.data-xata.com/"
              className="btn btn-default btn-sm login-btn"
              rel="noindex, nofollow"
            >
              Личный кабинет
            </a>

          </div>

          {/* ── Мобильный логин ── */}
          <div className="language-login visible-xs">
            <a href="https://cp.data-xata.com/" rel="noindex, nofollow">
              <span className="icons i-login" />
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="navbar-toggle"
            type="button"
            name="mainMenu"
            aria-label="mainMenu"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

        </div>
      </div>
    </header>
  );
}
