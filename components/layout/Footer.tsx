import Link from 'next/link';
import Container from '../ui/Container';
import {
  footerColumns,
  footerNavLinks,
  contacts,
  socials,
  officeAddress,
  paymentMethods,
} from '../../data/navigation';

export default function Footer() {
  const phones = contacts.filter((c) => c.type === 'phone');
  const emails = contacts.filter((c) => c.type === 'email');
  const mainPhone = phones[0];
  const mainEmail = emails[0];
  const supportPhone = phones[1];
  const supportEmail = emails[0];

  return (
    <footer className="bg-bg">
      {/* Main footer content */}
      <div className="pt-40 pb-60">
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-40">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-12 leading-17 font-medium uppercase text-white/40 mb-20">
                  {col.title}
                </p>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href} className="mb-32 last:mb-0">
                      <Link
                        href={l.href}
                        className="text-14 leading-20 text-white hover:text-accent transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Col 4 — Контакты */}
            <div>
              <p className="text-12 leading-17 font-medium uppercase text-white/40 mb-20">
                Контакты
              </p>
              <ul className="flex flex-col gap-15">
                <li className="flex items-start gap-8 text-14 leading-20 text-white">
                  <i className="icons i-map mt-3" aria-hidden="true" />
                  <span>{officeAddress}</span>
                </li>
                {mainPhone && (
                  <li className="flex items-start gap-8 text-14 leading-20 text-white">
                    <i className="icons i-phone mt-3" aria-hidden="true" />
                    <a href={mainPhone.href} className="hover:text-accent">{mainPhone.label}</a>
                  </li>
                )}
                {mainEmail && (
                  <li className="flex items-start gap-8 text-14 leading-20 text-white">
                    <i className="icons i-email mt-3" aria-hidden="true" />
                    <a href={mainEmail.href} className="hover:text-accent">{mainEmail.label}</a>
                  </li>
                )}
              </ul>

              <p className="text-12 font-medium uppercase text-white/40 mt-32 mb-15">
                Служба поддержки
              </p>
              <ul className="flex flex-col gap-15">
                {supportPhone && (
                  <li className="flex items-start gap-8 text-14 leading-20 text-white">
                    <i className="icons i-phone mt-3" aria-hidden="true" />
                    <a href={supportPhone.href} className="hover:text-accent">{supportPhone.label}</a>
                  </li>
                )}
                {supportEmail && (
                  <li className="flex items-start gap-8 text-14 leading-20 text-white">
                    <i className="icons i-email mt-3" aria-hidden="true" />
                    <a href={supportEmail.href} className="hover:text-accent">{supportEmail.label}</a>
                  </li>
                )}
              </ul>

              <p className="text-12 font-medium uppercase text-white/40 mt-32 mb-15">
                Мы в социальных сетях
              </p>
              <ul className="flex items-center gap-20">
                {socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label={s.name}
                      className="text-white hover:text-accent inline-flex items-center justify-center w-24 h-24"
                    >
                      {s.svgSrc ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.svgSrc} width={24} height={24} alt={s.name} />
                      ) : (
                        <i className={`icons i-${s.icon} text-24`} aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/15 py-35">
        <Container>
          <div className="flex flex-wrap items-center gap-20 justify-between">
            <Link href="/" className="shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/logo.svg" width={118} height={26} alt="Data-Xata" />
            </Link>

            <div className="flex flex-wrap items-center gap-15">
              <Link
                href="/payment"
                className="text-12 text-white hover:text-accent"
              >
                Посмотреть все способы оплаты
              </Link>
              {paymentMethods.map((p) => (
                <a key={p.name} href="/payment" aria-label={p.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.icon} height={20} alt={p.name} className="h-20 w-auto" />
                </a>
              ))}
              <span className="text-11 leading-12 font-medium text-white/40">
                Безналичный<br />расчёт
              </span>
            </div>

            <nav>
              <ul className="flex flex-wrap items-center gap-20">
                {footerNavLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-12 text-white/60 hover:text-accent"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Container>
      </div>
    </footer>
  );
}
