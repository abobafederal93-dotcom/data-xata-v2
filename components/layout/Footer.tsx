import Link from 'next/link';
import Container from '../ui/Container';
import {
  footerColumns,
  footerNavLinks,
  socials,
  paymentMethods,
} from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="bg-bg">
      {/* Top action buttons row */}
      <div className="pt-40">
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-20">
            <a
              href="/complaint"
              className="flex items-center justify-center gap-12 h-56 border border-white/20 text-16 leading-23 font-semibold text-white hover:border-accent hover:text-accent transition-colors"
            >
              <i className="icons i-mess text-20" aria-hidden="true" />
              Пожаловаться директору!
            </a>
            <a
              href="/affiliate"
              className="flex items-center justify-center gap-12 h-56 border border-white/20 text-16 leading-23 font-semibold text-white hover:border-accent hover:text-accent transition-colors"
            >
              <i className="icons i-bonus text-20" aria-hidden="true" />
              Заработайте на нас!
            </a>
          </div>
        </Container>
      </div>

      {/* Main footer content */}
      <div className="pt-40 pb-60">
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-5 gap-40">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <p className="text-12 leading-17 font-medium uppercase text-white/40 mb-20">
                  {col.title}
                </p>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.href + l.label} className="mb-10 last:mb-0">
                      <Link
                        href={l.href}
                        className="text-14 leading-20 text-white hover:text-accent transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                {col.title === 'Отдел поддержки' && (
                  <>
                    <p className="text-12 leading-17 font-medium uppercase text-white/40 mt-30 mb-20">
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
                  </>
                )}
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/10 py-20">
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
