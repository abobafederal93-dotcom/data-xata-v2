import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      {/* 3D-иллюстрация серверов (фон справа) */}
      <div className="hero__bg-img" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/bg-preview.svg" alt="" width={784} height={743} />
      </div>

      <div className="container hero__inner">
        <div className="hero__text">
          {/* Ghost */}
          <span className="hero__ghost">Готовое решение</span>
          {/* Title */}
          <h1 className="hero__title">Аренда сервера</h1>
          <p className="hero__subtitle">
            для <span className="hero__subtitle-accent" style={{color:"#fff"}}>DevOps</span>
            <span className="hero__cursor" aria-hidden="true">|</span>
          </p>
          {/* Description */}
          <p className="hero__desc">
            Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах.
            Быстро, дешево, качественно — вы сможете подобрать любую комбинацию!
          </p>
          {/* Buttons */}
          <div className="hero__btns">
            <a href="#filter" className="btn btn-warning btn-lg">
              Сервера с мгновенной активацией
            </a>
            <Link href="/search" className="hero__all-link">
              Я знаю что делаю - покажите мне ВСЕ!
            </Link>
          </div>
        </div>
      </div>

      {/* Footer строка */}
      <div className="hero__footer hidden-xs">
        <div className="container hero__footer-inner">
          <span className="hero__scroll-hint">Скрольте чтобы узнать детали</span>
          <ul className="hero__contacts">
            <li>
              <a href="skype:gurnik-dtx?chat">
                <span className="icons i-skype" />
                <span>gurnik-dtx</span>
              </a>
            </li>
            <li>
              <a href="tg://resolve?domain=data_xata">
                <span className="icons i-tg" />
                <span>data_xata</span>
              </a>
            </li>
            <li>
              <span className="icons i-phone" />
              <span>+7 (499) 348 1331</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
