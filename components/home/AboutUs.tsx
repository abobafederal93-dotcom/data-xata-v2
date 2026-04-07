import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

export default function AboutUs() {
  return (
    <section className="py-60">
      <Container>
        <SectionHeading ghost="Предыстория" title="О нас и выделенных серверах" />
        <div className="mt-30 grid grid-cols-1 desktop:grid-cols-[50.7rem_1fr] gap-40 items-start">
          {/* Текст: w=507, fs=14 lh=17 color=#839ada */}
          <div className="flex flex-col gap-16 max-w-[50.7rem]">
            <p className="text-14 leading-17 text-[#839ada]">
              Дата-хата работает на рынке с 2006 года. На нашем сайте есть огромное количество
              предложений физических выделенных серверов, которые могут быть доступны в данный
              момент времени для сдачи в аренду.
            </p>
            <p className="text-14 leading-17 text-[#839ada]">
              Оформление заказа происходит в дистанционном режиме, поэтому купить нужные мощности
              можно, находясь в любом городе. Должен лишь оплатить аренду и предоставить емейл, на
              который будут отправлены данные доступа.
            </p>
            <p className="text-14 leading-17 text-[#839ada]">
              Сколько стоит длительная аренда выделенного online сервера и услуга интернет
              хостинга для сайта? Дата-Хата предоставляет лучшие цены на рынке.
            </p>
          </div>
          {/* Картинки: image 18 (386x270) сверху, image 19 (420x332) снизу */}
          <div className="relative flex flex-col items-start gap-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/about-img-1.png"
              alt=""
              width={386}
              height={270}
              className="w-full max-w-[38.6rem] h-auto"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/about-img-2.png"
              alt=""
              width={420}
              height={332}
              className="w-full max-w-[42rem] h-auto desktop:self-end desktop:-mt-20"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
