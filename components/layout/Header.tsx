import Link from "next/link";

// ── Types ────────────────────────────────────────────────────────────────────

interface DropdownCountry {
  code: string;      // icon class suffix, e.g. "de"
  label: string;
  href: string;
}

interface DropdownTech {
  icon: string;      // icons class suffix, e.g. "i-windows"
  label: string;
  href: string;
}

interface VpsItem {
  label: string;
  href: string;
  price: string;
}

interface LangOption {
  iconClass: string; // full flag class, e.g. "i-ua"
  label: string;
  href: string;
}

// ── Static data ───────────────────────────────────────────────────────────────

const dropdownCountries: DropdownCountry[] = [
  { code: "de", label: "Германия",    href: "/server/de" },
  { code: "fr", label: "Франция",     href: "/server/fr" },
  { code: "nl", label: "Нидерланды",  href: "/server/nl" },
  { code: "us", label: "США",         href: "/server/us" },
];

const dropdownTechs: DropdownTech[] = [
  { icon: "i-windows",    label: "Windows",    href: "/server/windows" },
  { icon: "i-linux",      label: "Linux",      href: "/server/linux" },
  { icon: "i-game",       label: "Игровой",    href: "/server/game" },
  { icon: "i-repository", label: "Репозиторий",href: "/server/repository" },
  { icon: "i-office",     label: "Office",     href: "/server/office" },
  { icon: "i-backup",     label: "Backup",     href: "/server/backup" },
  { icon: "i-admin",      label: "Admin",      href: "/server/admin" },
];

const vpsItems: VpsItem[] = [
  { label: "VPS SSD NVMe",   href: "/vps/nvme",    price: "от 3.5 €/мес" },
  { label: "VPS KVM",        href: "/vps/kvm",     price: "от 2.9 €/мес" },
  { label: "VPS OpenVZ",     href: "/vps/openvz",  price: "от 1.5 €/мес" },
  { label: "VDS Dedicated",  href: "/vds",         price: "от 45 €/мес" },
];

const langOptions: LangOption[] = [
  { iconClass: "i-ua", label: "UA", href: "/ua" },
  { iconClass: "i-ru", label: "RU", href: "/ru" },
  { iconClass: "i-us", label: "EN", href: "/en" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-container">

          {/* ── Logo ── */}
          <Link href="/" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo.svg"
              width={118}
              height={26}
              alt="Маркетплейс Data-Xata аренда сервера"
            />
          </Link>

          {/* ── Main Nav ── */}
          <div className="wrap-nav">
            <ul className="nav navbar-nav">

              {/* "Аренда сервера" — mega dropdown */}
              <li className="dropdown">
                <a
                  href="/server"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Аренда сервера
                  <span className="icons i-caret" />
                </a>

                <div className="dropdown-menu dropdown-menu-large">
                  <div className="row">

                    {/* col left: Страны + Технологии */}
                    <div className="col-sm-5">
                      <p className="header-dropdown__title">Страны</p>
                      <ul className="icon-list">
                        {dropdownCountries.map((c) => (
                          <li key={c.code}>
                            <Link href={c.href}>
                              <span className={`icons i-flag i-${c.code}`} />
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

                    {/* col right: VPS/VDS — hidden on xs */}
                    <div className="col-sm-7 hidden-xs">
                      <p className="header-dropdown__title">VPS / VDS</p>
                      <ul>
                        {vpsItems.map((v) => (
                          <li key={v.href}>
                            <Link href={v.href} className="dropdown-link">
                              {v.label}
                            </Link>
                            <span style={{ color: "rgba(255,255,255,0.45)", marginLeft: "0.6rem" }}>
                              {v.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/server" className="btn btn-default btn-sm">
                        Все серверы
                      </Link>
                    </div>

                  </div>
                </div>
              </li>

              {/* "Аренда VDS" */}
              <li>
                <Link href="/vds">Аренда VDS</Link>
              </li>

              {/* "Аренда сервера с тестовым периодом" */}
              <li>
                <Link href="/server/trial">
                  Аренда сервера с тестовым периодом
                </Link>
              </li>

              {/* Контакты dropdown — visible only on xs */}
              <li className="dropdown visible-xs">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Контакты
                  <span className="icons i-caret" />
                </a>
                <ul className="dropdown-menu footer-contatcs">
                  <li>
                    <p>
                      <span className="icons i-phone" />
                      <a href="tel:+3728807873">+372 880 7873</a>
                    </p>
                    <p>
                      <a href="tel:+380442388946">+380 (44) 23 88 946</a>
                    </p>
                  </li>
                  <li>
                    <a href="tg://resolve?domain=dtxvti" target="_blank">
                      <span className="icons i-telegram" />
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@data-xata.com">
                      <span className="icons i-email" />
                      support@data-xata.com
                    </a>
                  </li>
                </ul>
              </li>

            </ul>
          </div>
          {/* /.wrap-nav */}

          {/* ── Language dropdown ── */}
          <div className="language dropdown hidden-xs">
            <a
              href="#"
              className="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-expanded="false"
            >
              <span className="icons i-flag i-ru" />
              RU
              <span className="icons i-caret" />
            </a>
            <ul className="dropdown-menu">
              {langOptions.map((lang) => (
                <li key={lang.label}>
                  <Link href={lang.href}>
                    <span className={`icons i-flag ${lang.iconClass}`} />
                    {lang.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Desktop: Login ── */}
          <div className="language-login">
            <a
              href="https://cp.data-xata.com/"
              className="btn btn-default hidden-xs login-link btn-sm"
              rel="noindex, nofollow"
            >
              Личный кабинет
            </a>

            {/* Mobile: login icon */}
            <a href="https://cp.data-xata.com/" className="visible-xs" rel="noindex, nofollow">
              <span className="icons i-login" />
            </a>
          </div>

          {/* ── Hamburger ── */}
          <button
            className="navbar-toggle"
            type="button"
            name="mainMenu"
            data-toggle="collapse"
            data-target="#navbar-collapse"
            aria-expanded="false"
            aria-label="mainMenu"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>

        </div>
        {/* /.header-container */}
      </div>
      {/* /.container */}
    </header>
  );
}
