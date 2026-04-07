import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import PromoBanner from '../components/ui/PromoBanner';
import Breadcrumb from '../components/ui/Breadcrumb';

export default function NotFound() {
  return (
    <main>
      <section className="pt-40">
        <Container>
          <Breadcrumb items={[{ label: 'Список статей', href: '/blog' }, { label: '404' }]} />
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid desktop:grid-cols-[1fr_auto] items-center gap-40 desktop:gap-60 py-60 desktop:py-80">
            <div className="relative">
              <span
                className="absolute -top-30 left-0 text-65 leading-94 font-bold text-white opacity-[0.08] pointer-events-none select-none"
                aria-hidden="true"
              >
                404
              </span>
              <h1 className="relative text-40 leading-58 desktop:text-60 desktop:leading-87 font-medium text-white">
                Нет такой страницы
              </h1>
              <p className="text-16 leading-23 desktop:text-20 desktop:leading-27 text-secondary mt-20 max-w-[51.3rem]">
                Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах.
              </p>
              <div className="mt-40">
                <Button href="/" variant="accent" className="w-[16.8rem]">
                  Вернуться
                </Button>
              </div>
            </div>
            <div className="hidden desktop:flex justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/figma-error-desktop.png"
                alt="404"
                width={520}
                height={400}
                className="w-[52rem] h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-60">
        <Container>
          <PromoBanner />
        </Container>
      </section>
    </main>
  );
}
