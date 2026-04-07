import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

const companyLinks: FooterLink[] = [
  { label: "Аренда сервера",          href: "/server" },
  { label: "Помощь",                  href: "/help" },
  { label: "Оплата и документы",      href: "/payment" },
  { label: "Блог",                    href: "/blog" },
  { label: "Партнерская программа",   href: "/partner" },
];

const locationLinks: FooterLink[] = [
  { label: "Серверы в Германии",      href: "/server/de" },
  { label: "Серверы во Франции",      href: "/server/fr" },
  { label: "Серверы в Нидерландах",   href: "/server/nl" },
  { label: "Серверы в США",           href: "/server/us" },
];

interface PaymentMethod {
  label: string;
  icon: string; // text-based badge label
}

const paymentMethods: PaymentMethod[] = [
  { label: "Visa",               icon: "VISA" },
  { label: "Mastercard",         icon: "MC" },
  { label: "PayPal",             icon: "PayPal" },
  { label: "Bitcoin",            icon: "BTC" },
  { label: "USDT",               icon: "USDT" },
  { label: "Банковский перевод", icon: "BANK" },
];

const bottomLinks: FooterLink[] = [
  { label: "Политика конфиденциальности", href: "/privacy" },
  { label: "Условия использования",       href: "/terms" },
  { label: "Карта сайта",                 href: "/sitemap" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#010437",
        borderTop: "1px solid rgba(131,154,218,0.15)",
        marginTop: "auto",
      }}
    >
      {/* ── Main Footer Grid ── */}
      <div className="container" style={{ padding: "5rem 1.5rem 4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
            gap: "3.2rem 2.4rem",
          }}
        >
          {/* Column 1 — Company info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* Logo */}
            <Link href="/" style={{ display: "inline-flex" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/logo.svg"
                alt="Data-Xata"
                style={{ height: "3.2rem", width: "auto" }}
              />
            </Link>

            {/* Company name + address */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <span
                style={{
                  fontSize: "1.6rem",
                  lineHeight: "2.4rem",
                  fontWeight: 600,
                  color: "#fff",
                }}
              >
                Data-Xata OU
              </span>
              <span
                style={{
                  fontSize: "1.3rem",
                  lineHeight: "2rem",
                  color: "#839ada",
                }}
              >
                Harju maakond, Tallinn, Lasnamäe linnaosa,<br />
                Lõõtsa tn 2a, 11415, Estonia
              </span>
            </div>

            {/* Contacts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {/* Telegram */}
              <a
                href="https://t.me/dtxvti"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1.4rem",
                  color: "#839ada",
                  transition: "color 0.15s",
                }}
              >
                <span className="icons i-tg" style={{ fontSize: "1.6rem", color: "#2acaf7" }} />
                @dtxvti
              </a>

              {/* Phone 1 */}
              <a
                href="tel:+37288078730"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1.4rem",
                  color: "#839ada",
                  transition: "color 0.15s",
                }}
              >
                <span className="icons i-phone" style={{ fontSize: "1.6rem", color: "#839ada" }} />
                +372 880 7873
              </a>

              {/* Phone 2 */}
              <a
                href="tel:+380442388946"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.8rem",
                  fontSize: "1.4rem",
                  color: "#839ada",
                  transition: "color 0.15s",
                }}
              >
                <span className="icons i-phone" style={{ fontSize: "1.6rem", color: "#839ada" }} />
                +380 (44) 23 88 946
              </a>
            </div>
          </div>

          {/* Column 2 — Site links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <span
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.4rem",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "1.2rem",
              }}
            >
              Навигация
            </span>
            {companyLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "2.4rem",
                  color: "#839ada",
                  transition: "color 0.15s",
                  padding: "0.3rem 0",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 3 — Locations */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <span
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.4rem",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "1.2rem",
              }}
            >
              Локации
            </span>
            {locationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "1.4rem",
                  lineHeight: "2.4rem",
                  color: "#839ada",
                  transition: "color 0.15s",
                  padding: "0.3rem 0",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Column 4 — Payment methods */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
            <span
              style={{
                fontSize: "1.6rem",
                lineHeight: "2.4rem",
                fontWeight: 600,
                color: "#fff",
                marginBottom: "0.4rem",
              }}
            >
              Способы оплаты
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
              }}
            >
              {paymentMethods.map((method) => (
                <div
                  key={method.label}
                  title={method.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.5rem 1rem",
                    border: "1px solid rgba(131,154,218,0.25)",
                    borderRadius: "0.4rem",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#839ada",
                    letterSpacing: "0.03em",
                    minWidth: "5rem",
                    background: "rgba(131,154,218,0.05)",
                  }}
                >
                  {method.icon}
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: "1.8rem",
                color: "#839ada",
                marginTop: "0.4rem",
                marginBottom: 0,
              }}
            >
              Безопасные платёжные системы.<br />
              Гарантия возврата средств.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div
        style={{
          borderTop: "1px solid rgba(131,154,218,0.15)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.2rem",
            padding: "1.8rem 1.5rem",
          }}
        >
          {/* Copyright */}
          <span
            style={{
              fontSize: "1.3rem",
              color: "#839ada",
            }}
          >
            &copy; 2006–2024 Data-Xata OU
          </span>

          {/* Bottom links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
            {bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  fontSize: "1.3rem",
                  color: "#839ada",
                  transition: "color 0.15s",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
