import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PromoBanner from "@/components/ui/PromoBanner";
import ActionButtons from "@/components/ui/ActionButtons";

export default function NotFound() {
  return (
    <div className="error-page">
      {/* ── Breadcrumb ── */}
      <div className="container error-breadcrumb">
        <Breadcrumb
          items={[
            { label: "Список статей", href: "/blog" },
            { label: "404" },
          ]}
        />
      </div>

      {/* ── Hero ── */}
      <section className="error-hero">
        <div className="container">
          <div className="error-hero__inner">

            <div className="error-hero__text">
              <span className="error-hero__ghost" aria-hidden="true">404</span>
              <h1 className="error-hero__title">Нет такой страницы</h1>
              <p className="error-hero__desc">
                Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах.
              </p>
              <Link href="/" className="btn btn-warning">
                Вернуться
              </Link>
            </div>

            <div className="error-hero__img">
              <div className="error-hero__img-wrap">
                {/* Background: circuit/laptop pattern */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/404-illustration.svg"
                  alt=""
                  aria-hidden="true"
                  className="error-hero__img-bg"
                  width={790}
                  height={527}
                />
                {/* Foreground: road barrier */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/404.svg"
                  alt="404 страница не найдена"
                  className="error-hero__img-fg"
                  width={308}
                  height={361}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Promo banner ── */}
      <PromoBanner
        ghostText="Хочу скидку!"
        text={"Оформи заказ в течение 10 минут\nи получи бонус $50 на счет!"}
        buttonLabel="Выбрать сервер"
        buttonHref="/server"
      />

      {/* ── Action buttons ── */}
      <ActionButtons
        buttons={[
          {
            label: "Пожаловаться директору!",
            href: "mailto:support@data-xata.com",
            iconBefore: "i-email",
            external: true,
          },
          {
            label: "Заработайте на нас!",
            href: "/affiliate",
            iconAfter: "i-arrow",
          },
        ]}
      />
    </div>
  );
}
