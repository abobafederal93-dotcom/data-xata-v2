import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <img
        src="/img/figma/hero-bg-decor.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-[65.2rem] object-cover opacity-[0.3] pointer-events-none z-0"
      />

      <Container className="relative z-10">
        {/* Main flex row */}
        <div className="flex items-start justify-between">
          {/* Left column — text + buttons */}
          <div className="pt-[18.6rem] pb-0 max-w-[53.8rem]">
            {/* Ghost text */}
            <span
              className="block text-65 leading-94 font-bold text-white opacity-[0.08] select-none pointer-events-none"
              aria-hidden="true"
            >
              Готовое решение
            </span>

            {/* H1 */}
            <h1 className="-mt-65 text-60 leading-87 font-medium text-white">
              Аренда сервера
            </h1>

            {/* Subtitle */}
            <p className="text-40 leading-58 font-medium text-white mt-0">
              для DevOps|
            </p>

            {/* Description: y=371, sub bottom=289+58=347, gap=24 */}
            <p className="mt-24 text-20 leading-27 font-normal text-secondary max-w-[51.3rem]">
              Мы предлагаем более 1278 конфигураций выделенных серверов в 11 дата-центрах. Быстро, дешево, качественно - вы сможете подобрать любую комбинацию!
            </p>

            {/* CTA buttons: CTA1 y=502, desc bottom=371+81=452, gap=50 */}
            <div className="flex flex-col mt-50">
              <a
                href="#"
                className={cn(
                  'flex items-center justify-center',
                  'w-[35rem] h-48',
                  'bg-accent hover:bg-accent-dark transition-colors',
                  'text-16 leading-23 font-semibold text-white text-center',
                )}
              >
                Сервера с мгновенной активацией
              </a>
              {/* CTA2 y=558, CTA1 bottom=502+48=550, gap=8 */}
              <a
                href="#"
                className={cn(
                  'flex items-center justify-center mt-8',
                  'w-[34.8rem] h-43',
                  'border border-white bg-transparent hover:bg-white/10 transition-colors',
                  'text-16 leading-23 font-semibold text-white text-center',
                )}
              >
                Я знаю что делаю - покажите мне ВСЕ!
              </a>
            </div>
          </div>

          {/* Right column — illustration */}
          <div className="flex-shrink-0 mt-90 hidden desktop:block">
            <img
              src="/img/hero-servers.svg"
              alt="Серверы"
              width={784}
              height={743}
              className="w-[78.4rem] h-[74.3rem] drop-shadow-[0px_0px_20px_rgba(42,202,247,0.5)]"
            />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-40 py-20 flex items-center justify-between flex-wrap gap-20">
          {/* Scroll hint */}
          <p className="text-14 leading-20 font-medium text-secondary">
            Скрольте чтобы узнать детали
          </p>

          {/* Right contacts group */}
          <div className="flex items-center gap-30">
            {/* Phone */}
            <a
              href="tel:+74993481331"
              className="text-14 leading-20 font-medium text-accent hover:text-accent/80 transition-colors"
            >
              +7 (499) 348 1331
            </a>

            {/* Skype */}
            <a
              href="skype:gurnik-dtx"
              className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-white/80 transition-colors"
            >
              <Icon name="skype" className="text-20" />
              gurnik-dtx
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/data_xata"
              className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-white/80 transition-colors"
            >
              <Icon name="tg" className="text-20" />
              data_xata
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
