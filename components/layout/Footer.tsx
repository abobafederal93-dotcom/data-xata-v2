import Link from "next/link";

interface FooterLink { label: string; href: string; }

// Figma col1 x=165, links y=1115..1435 gap=32px
const serverLinks: FooterLink[] = [
  { label: "Аренда сервера в США",           href: "/arenda-servera-v-ssha" },
  { label: "Аренда сервера в Германии",       href: "/arenda-servera-v-germanii" },
  { label: "Аренда сервера во Франции",       href: "/arenda-servera-vo-francii" },
  { label: "Аренда сервера в Голландии",      href: "/arenda-servera-v-gollandii" },
  { label: "Аренда Windows сервера",          href: "/arenda-windows-servera" },
  { label: "Аренда Linux Сервера",            href: "/arenda-linux-servera" },
  { label: "Аренда игрового сервера",         href: "/arenda-igrovyh-serverov" },
  { label: "Аренда хранилища",               href: "/arenda-hranilishcha" },
  { label: "Аренда офисного сервера",        href: "/arenda-ofisnogo-servera" },
  { label: "Резервное копирование",          href: "/rezervnoe-kopirovanie" },
  { label: "Администрирование серверов",     href: "/administrirovanie-serverov" },
];

// Figma col2 x=450
const vpsLinks: FooterLink[] = [
  { label: "Аренда VPS/VDS в США",           href: "/vps/usa" },
  { label: "Аренда VPS/VDS в Германии",      href: "/vps/germany" },
  { label: "Аренда VPS/VDS во Франции",      href: "/vps/france" },
  { label: "Аренда VPS/VDS в Голландии",     href: "/vps/netherlands" },
  { label: "Аренда VPS/VDS на Windows",      href: "/vps/windows" },
  { label: "Аренда VPS/VDS на Linux",        href: "/vps/linux" },
];

// Figma col3 x=735
const otherLinks: FooterLink[] = [
  { label: "Аренда сервера с тестовым периодом", href: "/server/trial" },
  { label: "Помощь",                             href: "/help" },
  { label: "Оплата и доставка",                  href: "/payment" },
  { label: "Блог",                               href: "/blog" },
  { label: "Партнерская программа",              href: "/affiliate" },
];

// Figma bottom nav
const navLinks: FooterLink[] = [
  { label: "Terms and conditions",   href: "/terms_and_conditions" },
  { label: "Privacy policy",         href: "/privacy_policy" },
  { label: "Refund policy",          href: "/refund_policy" },
  { label: "Delivery time frame",    href: "/delivery_time_frame" },
  { label: "Abuse",                  href: "/abuse" },
  { label: "Acceptable Use Policy",  href: "/acceptable-use-policy" },
];

export default function Footer() {
  return (
    <footer>

      {/* ── Main footer ── */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-cols">

            {/* Col 1 — Аренда сервера */}
            <div className="footer-col">
              <p className="footer-col__title">Аренда сервера</p>
              <ul className="footer-links">
                {serverLinks.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Col 2 — Аренда виртуального сервера */}
            <div className="footer-col">
              <p className="footer-col__title">Аренда виртуального сервера</p>
              <ul className="footer-links">
                {vpsLinks.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Остальное */}
            <div className="footer-col">
              <p className="footer-col__title">Остальное</p>
              <ul className="footer-links">
                {otherLinks.map((l) => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Контакты (Figma x=1024) */}
            <div className="footer-col">
              <p className="footer-col__title">Контакты</p>
              <ul className="footer-contacts">
                <li>
                  <span className="icons i-map" />
                  <address style={{ fontStyle: "normal" }}>Sepapaja 6 Tallinn</address>
                </li>
                <li>
                  <span className="icons i-phone" />
                  <a href="tel:+37280078730">+372 (800) 7873</a>
                </li>
                <li>
                  <span className="icons i-email" />
                  <a href="mailto:support@data-xata.com">support@data-xata.com</a>
                </li>
              </ul>

              <p className="footer-col__subtitle">служба поддержки</p>
              <ul className="footer-contacts">
                <li>
                  <span className="icons i-phone" />
                  <a href="tel:+380442388946">+380 (44) 23 88 946</a>
                </li>
                <li>
                  <span className="icons i-email" />
                  <a href="mailto:support@data-xata.com">support@data-xata.com</a>
                </li>
              </ul>

              <p className="footer-col__subtitle">мы в социальных сетях</p>
              <ul className="social-list">
                <li>
                  <a href="https://www.facebook.com/data.xata" target="_blank" rel="nofollow" aria-label="Facebook">
                    <span className="icons i-fb" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/dataxata" target="_blank" rel="nofollow" aria-label="Twitter">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/img/icons/i-tw.svg" width={24} height={24} alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://vk.com/dataxata" target="_blank" rel="nofollow" aria-label="VK">
                    <span className="icons i-vk" />
                  </a>
                </li>
                <li>
                  <a href="tg://resolve?domain=dtxvti" target="_blank" rel="nofollow" aria-label="Slack">
                    <span className="icons i-tg" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── Footer bottom ── */}
      <div className="footer-bottom">
        <div className="container footer-bottom__inner">

          <Link href="/" className="footer-bottom__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/logo.svg" width={118} height={26} alt="Data-Xata" />
          </Link>

          <div className="footer-payment">
            <Link href="/payment" className="footer-payment__link">Посмотреть все способы оплаты</Link>
            <a href="/payment">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/icons/i-visa.svg" width={67} height={20} alt="Visa" />
            </a>
            <a href="/payment">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/icons/i-mastercard.svg" width={31} height={24} alt="Mastercard" />
            </a>
            <a href="/payment">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/icons/i-paypal.svg" width={75} height={20} alt="PayPal" />
            </a>
            <a href="/payment">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/icons/i-webmoney.svg" width={95} height={20} alt="WebMoney" />
            </a>
            <span className="footer-payment__cash">Безналичный<br />расчёт</span>
          </div>

          <nav className="footer-nav">
            <ul>
              {navLinks.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

        </div>
      </div>

    </footer>
  );
}
