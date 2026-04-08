import Container from '../ui/Container';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col">
      {/* Decorative background pattern (Group 3 from Figma: y=1129, w=1440, h=652) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/figma/hero-bg-decor.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute left-0 right-0 top-[112.9rem] w-full h-[65.2rem] opacity-60 z-0"
      />
      <Container className="relative z-10">
        <div className="flex flex-col desktop:flex-row desktop:items-start desktop:justify-between gap-30">
          <div className="pt-[18.6rem] pb-40 relative">
            {/* Ghost: y=186, fs=65 lh=94 fw=700 white opacity 0.08 */}
            <span className="block text-40 leading-58 desktop:text-65 desktop:leading-94 font-bold text-white opacity-[0.08] -mb-[5.4rem] desktop:-mb-[7.8rem] whitespace-nowrap pointer-events-none select-none">
              Готовое решение
            </span>
            {/* H1: y=216, fs=60 lh=87 fw=500 white */}
            <h1 className="relative text-35 leading-51 desktop:text-60 desktop:leading-87 font-medium text-white">
              Аренда сервера
            </h1>
            {/* для DevOps: y=298, fs=40 lh=58 fw=500 */}
            <p className="text-20 leading-29 desktop:text-40 desktop:leading-58 font-medium text-white">
              для DevOps<span aria-hidden="true">|</span>
            </p>
            {/* Описание: y=380, fs=20 lh=27 fw=400 #839ada w=513 */}
            <p className="text-15 leading-20 desktop:text-20 desktop:leading-27 font-normal text-[#839ada] mt-[2.9rem] max-w-[51.3rem]">
              Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах. Быстро,
              дешево, качественно - вы сможете подобрать любую комбинацию!
            </p>
            {/* Кнопки: оранжевая y=509 (w=350,h=48), синяя y=520 (w=330,h=43) */}
            <div className="flex flex-col desktop:flex-row items-start gap-20 mt-[4.6rem]">
              <Button href="#filter" variant="accent" className="h-48 desktop:w-[35rem]">
                Сервера с мгновенной активацией
              </Button>
              <Button href="/search" variant="secondary" className="h-43 desktop:w-[33rem]">
                Я знаю что делаю - покажите мне ВСЕ!
              </Button>
            </div>
          </div>
          {/* Hero image: y=330, w=756, h=665 */}
          <div className="hidden desktop:block flex-shrink-0 w-[75.6rem] h-[66.5rem] mt-[14.4rem] pointer-events-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/hero-server.png"
              alt=""
              width={756}
              height={665}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>
      <div className="hidden desktop:block border-t border-white/10 mt-auto relative z-10">
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
