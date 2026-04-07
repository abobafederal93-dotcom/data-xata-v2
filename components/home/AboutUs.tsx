import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

interface AboutCard {
  title: string;
  text: string;
  image: string;
}

interface AboutUsProps {
  cards?: AboutCard[];
}

const defaultCards: AboutCard[] = [
  {
    title: 'Хостинг',
    text: 'Дата-хата работает на рынке с 2006 года. На нашем сайте есть огромное количество предложений физических выделенных серверов.',
    image: '/img/about-1.png',
  },
  {
    title: 'VDI, VPN и Прокси',
    text: 'Оформление заказа происходит в дистанционном режиме, поэтому купить нужные мощности можно, находясь в любом городе.',
    image: '/img/about-2.png',
  },
  {
    title: 'Разработка',
    text: 'Сколько стоит длительная аренда выделенного online сервера и услуга интернет хостинга для сайта? Дата-Хата предоставляет лучшие цены.',
    image: '/img/about-3.png',
  },
];

export default function AboutUs({ cards = defaultCards }: AboutUsProps) {
  return (
    <section className="py-60">
      <Container>
        <SectionHeading ghost="Предыстория" title="О нас и выделенных серверах" />
        <div className="mt-30 grid grid-cols-1 desktop:grid-cols-3 gap-30">
          {cards.map((c) => (
            <div key={c.title} className="border border-white/10 p-20 flex flex-col gap-16">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt="" className="w-full h-auto" />
              <h3 className="text-19 leading-27 font-semibold text-white">{c.title}</h3>
              <p className="text-14 leading-17 text-[#839ada]">{c.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
