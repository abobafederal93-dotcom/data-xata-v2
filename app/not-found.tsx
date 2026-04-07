import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import PromoBanner from '../components/ui/PromoBanner';
import Breadcrumb from '../components/ui/Breadcrumb';
import Icon from '../components/ui/Icon';

export default function NotFound() {
  return (
    <main>
      <section className="pt-40">
        <Container>
          <Breadcrumb items={[{ label: 'Список статей', href: '/blog' }, { label: '404' }]} />
        </Container>
      </section>

      {/* Hero 404 */}
      <section className="min-h-[50rem] flex items-center">
        <Container>
          <div className="grid desktop:grid-cols-[1fr_auto] items-center gap-60 py-80">
            <div>
              <span className="block text-65 leading-94 font-bold text-white opacity-[0.08] -mb-68 pointer-events-none select-none">
                404
              </span>
              <h1 className="text-60 leading-[8.7rem] font-medium text-white">
                Нет такой страницы
              </h1>
              <p className="text-20 leading-27 font-normal text-secondary mt-20 max-w-[51.3rem]">
                Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах.
              </p>
              <div className="mt-40">
                <Button href="/" variant="accent" size="lg">
                  Вернуться
                </Button>
              </div>
            </div>
            <div className="hidden desktop:flex justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/bg-preview.svg"
                alt="404"
                width={600}
                height={450}
                className="w-[60rem] h-auto opacity-50"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* PromoBanner + Action buttons */}
      <section className="pb-60">
        <Container>
          <PromoBanner />
          <div className="flex flex-col desktop:flex-row gap-20 mt-20">
            <Button
              href="/complaint"
              variant="outline"
              className="flex-1 justify-center gap-16"
            >
              <Icon name="compare" className="text-24" />
              Пожаловаться директору!
            </Button>
            <Button
              href="/affiliate"
              variant="outline"
              className="flex-1 justify-center gap-16"
            >
              <Icon name="present" className="text-24" />
              Заработайте на нас!
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
