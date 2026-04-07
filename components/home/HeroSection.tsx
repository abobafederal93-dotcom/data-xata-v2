import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

export default function HeroSection() {
  return (
    <section className="overflow-hidden flex flex-col">
      <Container>
        <div className="flex flex-col desktop:flex-row desktop:items-start desktop:justify-between gap-30">
          <div className="pt-72 pb-40">
            <span className="block text-40 leading-58 desktop:text-65 desktop:leading-94 font-bold text-white opacity-[0.08] -mb-20 desktop:-mb-40 whitespace-nowrap pointer-events-none select-none">
              Готовое решение
            </span>
            <h1 className="text-35 leading-51 desktop:text-60 desktop:leading-87 font-medium text-white">
              Аренда сервера
            </h1>
            <p className="text-20 leading-29 desktop:text-40 desktop:leading-58 font-medium text-white">
              для DevOps<span aria-hidden="true">|</span>
            </p>
            <p className="text-15 leading-20 desktop:text-20 desktop:leading-27 font-normal text-[#839ada] mt-20 max-w-[51.3rem]">
              Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах. Быстро,
              дешево, качественно - вы сможете подобрать любую комбинацию!
            </p>
            <div className="flex flex-col desktop:flex-row items-start gap-20 mt-50">
              <Button href="#filter" variant="accent" className="h-48 desktop:w-[35rem]">
                Сервера с мгновенной активацией
              </Button>
              <Button href="/search" variant="secondary">
                Я знаю что делаю - покажите мне ВСЕ!
              </Button>
            </div>
          </div>
          <div className="hidden desktop:block flex-shrink-0 w-[75.6rem] h-[66.5rem] pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/bg-preview.svg"
              alt=""
              width={756}
              height={665}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>
      <div className="hidden desktop:block border-t border-white/10 mt-auto">
        <Container>
          <div className="flex items-center justify-between py-20">
            <span className="text-14 leading-20 text-[#839ada]">
              Скрольте чтобы узнать детали
            </span>
            <ul className="flex items-center gap-40">
              <li>
                <a
                  href="skype:gurnik-dtx?chat"
                  className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-accent"
                >
                  <Icon name="skype" className="text-16" />
                  <span>gurnik-dtx</span>
                </a>
              </li>
              <li>
                <a
                  href="tg://resolve?domain=data_xata"
                  className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-accent"
                >
                  <Icon name="tg" className="text-16" />
                  <span>data_xata</span>
                </a>
              </li>
              <li>
                <span className="flex items-center gap-8 text-14 leading-20 font-medium text-white">
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
