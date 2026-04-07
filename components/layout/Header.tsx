import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LangOption {
  code: string;
  iconClass: string;
  label: string;
}

const navItems: NavItem[] = [
  { label: "Аренда сервера", href: "/server", hasDropdown: true },
  { label: "Помощь", href: "/help" },
  { label: "Оплата и документы", href: "/payment" },
  { label: "Блог", href: "/blog" },
  { label: "Партнерская программа", href: "/partner" },
];

const langOptions: LangOption[] = [
  { code: "RU", iconClass: "i-flag", label: "RU" },
  { code: "EN", iconClass: "i-us",   label: "EN" },
  { code: "DE", iconClass: "i-de",   label: "DE" },
  { code: "FR", iconClass: "i-fr",   label: "FR" },
  { code: "NL", iconClass: "i-nl",   label: "NL" },
  { code: "US", iconClass: "i-us",   label: "US" },
];

export default function Header() {
  return (
    <header>
      {/* ── Action Banner ── */}
      <div
        className="hidden md:flex items-center justify-center"
        style={{
          background: "#ff8311",
          padding: "0.9rem 1.5rem",
          fontSize: "1.4rem",
          lineHeight: "2rem",
          color: "#fff",
          fontWeight: 500,
          gap: "0.8rem",
          textAlign: "center",
        }}
      >
        <span className="icons i-present" style={{ fontSize: "1.8rem" }} />
        <span>
          Закажи хостинг до конца карантина и получи домен в подарок!&nbsp;
          <strong>Супер предложения!</strong>&nbsp;Не пропусти!
        </span>
      </div>

      {/* ── Main Header Bar ── */}
      <div
        style={{
          background: "#010437",
          borderBottom: "1px solid rgba(131,154,218,0.15)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.4rem",
            padding: "1.6rem 1.5rem",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/logo.svg"
              alt="Data-Xata"
              style={{ height: "3.6rem", width: "auto" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex"
            style={{ flex: 1, alignItems: "center", gap: "0.4rem" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.8rem 1.2rem",
                  fontSize: "1.4rem",
                  lineHeight: "2rem",
                  color: "#fff",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                }}
                className="hover:text-[#ff8311]"
              >
                {item.label}
                {item.hasDropdown && (
                  <span
                    className="icons i-caret-sm"
                    style={{ fontSize: "1rem", color: "#839ada", marginTop: "0.1rem" }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.6rem",
              marginLeft: "auto",
              flexShrink: 0,
            }}
          >
            {/* Заказать button */}
            <Link href="/order" className="btn btn-warning hidden md:inline-flex">
              Заказать
            </Link>

            {/* Login */}
            <Link
              href="/login"
              className="hidden md:inline-flex"
              style={{
                fontSize: "1.4rem",
                color: "#839ada",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
              }}
            >
              Войти
            </Link>

            {/* Language Selector */}
            <div
              className="hidden md:flex"
              style={{
                alignItems: "center",
                gap: "0.6rem",
                cursor: "pointer",
                padding: "0.6rem 1rem",
                border: "1px solid rgba(131,154,218,0.25)",
                borderRadius: "0.4rem",
                position: "relative",
              }}
            >
              <span
                className="icons i-flag"
                style={{ fontSize: "1.6rem", color: "#fff" }}
              />
              <span style={{ fontSize: "1.4rem", color: "#fff", fontWeight: 500 }}>
                RU
              </span>
              <span
                className="icons i-caret-sm"
                style={{ fontSize: "0.9rem", color: "#839ada" }}
              />

              {/* Dropdown list (static — visible on hover via CSS group pattern) */}
              <div
                style={{
                  display: "none",
                  position: "absolute",
                  top: "calc(100% + 0.4rem)",
                  right: 0,
                  background: "#020983",
                  border: "1px solid rgba(131,154,218,0.2)",
                  borderRadius: "0.4rem",
                  minWidth: "9rem",
                  zIndex: 100,
                  padding: "0.4rem 0",
                }}
              >
                {langOptions.map((lang) => (
                  <div
                    key={lang.code}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.8rem",
                      padding: "0.7rem 1.2rem",
                      fontSize: "1.4rem",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      className={`icons ${lang.iconClass}`}
                      style={{ fontSize: "1.6rem" }}
                    />
                    {lang.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile: Hamburger */}
            <div
              className="flex md:hidden"
              style={{
                flexDirection: "column",
                gap: "0.5rem",
                cursor: "pointer",
                padding: "0.4rem",
              }}
              aria-label="Меню"
            >
              <span
                style={{
                  display: "block",
                  width: "2.4rem",
                  height: "0.2rem",
                  background: "#fff",
                  borderRadius: "0.1rem",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "2.4rem",
                  height: "0.2rem",
                  background: "#fff",
                  borderRadius: "0.1rem",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "2.4rem",
                  height: "0.2rem",
                  background: "#fff",
                  borderRadius: "0.1rem",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
