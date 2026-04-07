import Link from "next/link";

// ── Types ────────────────────────────────────────────────────────────────────

interface FooterLink {
  label: string;
  href: string;
}

// ── Static data ───────────────────────────────────────────────────────────────

const serverLinks: FooterLink[] = [
  { label: "Аренда сервера в США",                href: "/arenda-servera-v-ssha" },
  { label: "Аренда сервера в Германии",           href: "/arenda-servera-v-germanii" },
  { label: "Аренда сервера во Франции",           href: "/arenda-servera-vo-francii" },
  { label: "Аренда сервера в Голландии",          href: "/arenda-servera-v-gollandii" },
  { label: "Аренда Windows сервера",              href: "/arenda-windows-servera" },
  { label: "Аренда Linux сервера",                href: "/arenda-linux-servera" },
  { label: "Аренда игрового сервера",             href: "/arenda-igrovyh-serverov" },
  { label: "Аренда хранилища",                    href: "/arenda-hranilishcha" },
  { label: "Аренда офисного сервера",             href: "/arenda-ofisnogo-servera" },
  { label: "Резервное копирование",               href: "/rezervnoe-kopirovanie" },
  { label: "Администрирование серверов",          href: "/administrirovanie-serverov" },
];

const vpsLinks: FooterLink[] = [
  { label: "Аренда VPS SSD NVMe",   href: "/vps/nvme" },
  { label: "Аренда VPS KVM",        href: "/vps/kvm" },
  { label: "Аренда VPS OpenVZ",     href: "/vps/openvz" },
  { label: "Аренда VDS Dedicated",  href: "/vds" },
  { label: "Все VPS / VDS",         href: "/vps" },
];

const otherLinks: FooterLink[] = [
  { label: "Партнёрская программа", href: "/partner" },
];

const navLinks: FooterLink[] = [
  { label: "Пользовательское соглашение",         href: "/terms_and_conditions" },
  { label: "Политика конфиденциальности",          href: "/privacy_policy" },
  { label: "Возврат средств",                      href: "/refund_policy" },
  { label: "Условия доставки",                     href: "/delivery_time_frame" },
  { label: "Допустимое использование",             href: "/acceptable-use-policy" },
  { label: "Abuse",                                href: "/abuse" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer>
      {/* ── Main footer content ── */}
      <div className="footer-content">
        <div className="container">
          <div className="row flex-block flex-wrap">

            {/* Column 1 — Аренда сервера */}
            <div className="col-sm-3 col-xs-12">
              <p className="title-xs">Аренда сервера</p>
              <ul>
                {serverLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 — Аренда виртуального сервера */}
            <div className="col-sm-3 col-xs-12">
              <p className="title-xs">Аренда виртуального сервера</p>
              <ul>
                {vpsLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Остальное */}
            <div className="col-sm-3 col-xs-12">
              <p className="title-xs">Остальное</p>
              <ul>
                {otherLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Контакты */}
            <div className="col-sm-3 col-xs-12 footer-lat-col">
              <p className="title-xs">Контакты</p>

              <ul className="footer-contacts">
                {/* Address */}
                <li>
                  <address style={{ fontStyle: "normal" }}>
                    Tuukri tn 19-216, Tallinn, Estonia
                  </address>
                </li>

                {/* Phone 1 */}
                <li>
                  <span className="icons i-phone" />
                  <a href="tel:+37280078730">+372 (800) 7873</a>
                </li>

                {/* Phone 2 */}
                <li>
                  <span className="icons i-phone" />
                  <a href="tel:+380442388946">+380 (44) 23 88 946</a>
                </li>

                {/* Email */}
                <li>
                  <span className="icons i-email" />
                  <a href="mailto:support@data-xata.com">
                    support@data-xata.com
                  </a>
                </li>
              </ul>

              {/* Social icons */}
              <ul className="social-list">
                <li>
                  <a
                    href="https://www.facebook.com/data.xata"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Facebook"
                  >
                    <span className="icons i-fb" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/dataxata"
                    target="_blank"
                    rel="nofollow"
                    aria-label="Twitter"
                  >
                    <span
                      className="icons i-tw"
                      style={{ display: "inline-block" }}
                    />
                  </a>
                </li>
              </ul>
            </div>

          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.footer-content */}

      {/* ── Footer bottom ── */}
      <div className="footer-bottom">
        <div className="container flex-block flex-wrap">

          {/* Logo */}
          <Link href="/" className="logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/logo.svg"
              width={118}
              height={26}
              alt="Data-Xata"
            />
          </Link>

          {/* Payment */}
          <div className="footer-payment">
            <Link href="/payment">Посмотреть все способы оплаты</Link>

            <a href="/payment">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/icons/i-visa.svg"
                width={67}
                height={20}
                alt="Visa"
              />
            </a>
            <a href="/payment">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/icons/i-mastercard.svg"
                width={31}
                height={24}
                alt="Mastercard"
              />
            </a>
            <a href="/payment">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/icons/i-paypal.svg"
                width={75}
                height={20}
                alt="PayPal"
              />
            </a>

            <span style={{fontStyle: "italic"}}>Безналичный <br />расчёт</span>
          </div>

          {/* Footer nav */}
          <nav className="footer-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
        {/* /.container */}
      </div>
      {/* /.footer-bottom */}
    </footer>
  );
}
