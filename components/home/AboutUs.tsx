import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export default function AboutUs() {
  return (
    <section className="py-80">
      <Container>
        <div className="flex items-start gap-60 flex-col desktop:flex-row">
          {/* Left: text */}
          <div className="flex-1">
            <SectionHeading
              ghost="О компании"
              title="Кто мы"
              subtitle="такие?"
            />

            <div className="mt-40 flex flex-col gap-20">
              <p className="text-20 leading-27 font-normal text-secondary">
                DATA-XATA — хостинг-провайдер с собственным оборудованием в 11 дата-центрах Европы и России. Мы не перепродаём чужие ресурсы — всё железо наше, поэтому мы контролируем качество на каждом уровне.
              </p>
              <p className="text-20 leading-27 font-normal text-secondary">
                Более 1278 конфигураций выделенных серверов доступны к аренде прямо сейчас. Мгновенная активация, честные цены и техподдержка 24/7 — вот наши основные принципы.
              </p>
              <p className="text-20 leading-27 font-normal text-secondary">
                Мы работаем с 2012 года и обслуживаем тысячи клиентов по всему миру — от индивидуальных разработчиков до крупных компаний.
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="flex-shrink-0 desktop:w-[48rem]">
            <img
              src="/img/about-img-1.png"
              alt="Дата-центр DATA-XATA"
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
