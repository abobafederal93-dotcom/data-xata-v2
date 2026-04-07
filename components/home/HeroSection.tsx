import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

export default function HeroSection() {
  return (
    <section className="min-h-[85.6rem] overflow-hidden flex flex-col">
      <Container>
        <div className="grid desktop:grid-cols-[1fr_auto] gap-0">
          <div className="pt-72 pb-40">
            <span className="block text-65 leading-94 font-bold text-white opacity-[0.08] -mb-68 whitespace-nowrap pointer-events-none select-none">
              Готовое решение
            </span>
            <h1 className="text-60 leading-[8.7rem] font-medium text-white">Аренда сервера</h1>
            <p className="text-60 leading-[8.7rem] font-medium text-secondary">
              для <span className="text-white">DevOps</span>
              <span aria-hidden="true">|</span>
            </p>
            <p className="text-20 leading-27 font-normal text-secondary mt-20 max-w-[51.3rem]">
              Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах. Быстро,
              дешево, качественно — вы сможете подобрать любую комбинацию!
            </p>
            <div className="flex flex-col desktop:flex-row items-start gap-20 mt-50">
              <Button href="#filter" variant="accent" size="lg" className="w-[35rem]">
                Сервера с мгновенной активацией
              </Button>
              <Button href="/search" variant="ghost">
                Я знаю что делаю - покажите мне ВСЕ!
              </Button>
            </div>
          </div>
          <div className="hidden desktop:block self-start mt-[-9.7rem] mr-93 w-[54.4vw] max-w-[78.4rem] pointer-events-none flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/bg-preview.svg"
              alt=""
              width={784}
              height={743}
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
      <div className="hidden desktop:block border-t border-white/10 mt-auto">
        <Container>
          <div className="flex items-center justify-between py-20">
            <span className="text-14 leading-20 text-secondary">
              Скрольте чтобы узнать детали
            </span>
            <ul className="flex items-center gap-40">
              <li>
                <a
                  href="skype:gurnik-dtx?chat"
                  className="flex items-center gap-8 text-14 text-white hover:text-accent"
                >
                  <Icon name="skype" className="text-16" />
                  <span>gurnik-dtx</span>
                </a>
              </li>
              <li>
                <a
                  href="tg://resolve?domain=data_xata"
                  className="flex items-center gap-8 text-14 text-white hover:text-accent"
                >
                  <Icon name="tg" className="text-16" />
                  <span>data_xata</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-8 text-14 text-white">
                  <Icon name="phone" className="text-16" />
                  <span>+7 (499) 348 1331</span>
                </span>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </section>
  );
}
