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

      <section className="min-h-[50rem] flex items-center">
        <Container>
          <div className="grid desktop:grid-cols-[1fr_auto] items-center gap-60 py-80">
            <div>
              <span className="block text-65 leading-94 font-bold opacity-[0.08] text-white -mb-40 pointer-events-none select-none">
                404
              </span>
              <h1 className="text-60 leading-87 font-medium text-white">Нет такой страницы</h1>
              <p className="text-20 leading-27 text-secondary mt-20 max-w-[51.3rem]">
                Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах.
              </p>
              <div className="mt-40">
                <Button href="/" variant="accent" className="w-[16.8rem] h-48">
                  Вернуться
                </Button>
              </div>
            </div>
            <div className="hidden desktop:flex justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/bg-preview.svg"
                alt="404"
                width={308}
                height={361}
                className="w-[30.8rem] h-auto opacity-50"
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
