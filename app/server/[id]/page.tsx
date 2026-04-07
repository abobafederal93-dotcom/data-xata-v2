import Container from '../../../components/ui/Container';
import PromoBanner from '../../../components/ui/PromoBanner';
import SectionHeading from '../../../components/ui/SectionHeading';
import ServerHero from '../../../components/server/ServerHero';
import PricingCards from '../../../components/server/PricingCards';
import SpecBlock from '../../../components/server/SpecBlock';
import OrderSidebar from '../../../components/server/OrderSidebar';
import IncludesSection from '../../../components/server/IncludesSection';
import { servers } from '../../../data/servers';

export default function ServerDetailPage() {
  const server = servers[0]!;

  const pricingCards = [
    { label: 'абонплата', value: `€${server.price.toFixed(2)}` },
    { label: 'интервал оплаты', value: 'помесячно' },
    { label: 'плата за установку', value: `€${(server.setupFee ?? 0).toFixed(2)}` },
    { label: 'срок установки', value: server.deliveryTime ?? 'Доступ через 3 часа' },
  ];

  const cpuSpecs = [
    { label: 'название cpu ', value: '2x Intel Hexa-Core Xeon E5-2620V2' },
    { label: 'частота', value: server.cpuFreq ?? '2.1 Ghz' },
    { label: 'количество ядер', value: '2х 6 cores' },
    { label: 'cpu benchmark', value: '-' },
  ];

  const networkSpecs = [
    { label: 'порт', value: '1x 1000Mbps Full-Duplex' },
    { label: 'ip v4', value: '6 шт' },
    { label: 'ip v6', value: '/64 бесплтано' },
    { label: 'трафик', value: '30 TB' },
  ];

  const ferment = 'Дата-хата работает на рынке с 2006 года. На нашем сайте есть огромное количество предложений физических выделянных серверов в Америке и Европе, которые могут быть доступны в данный момент.';

  const includesItems = [
    { icon: 'server', title: 'Реальное железо', description: ferment },
    { icon: 'admin', title: 'Удаленное управление', description: ferment },
    { icon: 'cloud', title: 'DDoS защита', description: ferment },
    { icon: 'present', title: 'Многовенная доставка', description: ferment },
    { icon: 'phone', title: 'Поддержка 24/7', description: ferment },
    { icon: 'traffic', title: 'Бесплатный трафик', description: ferment },
  ];

  const diskOptions = [
    '2x2TB SATA (- €14.71)',
    '2x8TB SATA (+ €1.50)',
    '4x8TB SATA (+ €23.67)',
  ];

  const networkOptions = [
    { label: '1x 1000Mbps Full-Duplex', active: true },
    { label: '2x 1000Mbps Full-Duplex (+ €100.00)', active: false },
  ];

  const responsibilities = [
    'Корпус сервера',
    'Подключение к интернету',
    'Аппаратные средства',
    'Операционная система',
    'Программная платформа',
    'Управление сервером',
    'Установка приложений',
    'Управление приложениями',
  ];

  const faq = [
    {
      q: 'Каковы требования ?',
      a: 'Это неуправляемое предложение. Так что вам нужно знать, как использовать сервер.',
    },
    {
      q: 'Как я могу оформить возврат ?',
      a: 'Вы можете запросить возврат средств, если услуга не предоставлена. Возврат средств после активации не производится.',
    },
  ];

  return (
    <main>
      <Container>
        <div className="desktop:grid desktop:grid-cols-[1fr_35rem] desktop:gap-30 pt-40">
          <div>
            <ServerHero server={server} />
            <PricingCards cards={pricingCards} />
            <SpecBlock title="Процессор" specs={cpuSpecs} />

            <div className="mb-40">
              <h3 className="text-20 leading-29 font-medium text-white mb-20">Память и жесткие диски</h3>
              <div className="border border-primary rounded-sm h-86 px-15 flex items-center mb-15">
                <span className="text-14 leading-20 text-white">32GB DDR3 ECC</span>
              </div>
              <div className="flex flex-col gap-10">
                {diskOptions.map((opt, i) => (
                  <label
                    key={i}
                    className={
                      i === 0
                        ? 'h-36 px-15 bg-accent text-white rounded-sm flex items-center text-14 cursor-pointer'
                        : 'h-36 px-15 border border-primary text-white rounded-sm flex items-center text-14 cursor-pointer hover:bg-primary/20'
                    }
                  >
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <SpecBlock title="Подключение" specs={networkSpecs} />

            <div className="mb-40">
              <h3 className="text-20 leading-29 font-medium text-white mb-20">Сеть</h3>
              <div className="flex flex-col gap-10">
                {networkOptions.map((opt, i) => (
                  <label
                    key={i}
                    className={
                      opt.active
                        ? 'h-36 px-15 bg-accent text-white rounded-sm flex items-center text-14 cursor-pointer'
                        : 'h-36 px-15 border border-primary text-white rounded-sm flex items-center text-14 cursor-pointer hover:bg-primary/20'
                    }
                  >
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <IncludesSection items={includesItems} />

            <div className="mb-40">
              <SectionHeading ghost="Обязанности" title="Обязанности делятся следующим образом:" />
              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-15">
                <div className="rounded-sm bg-gradient-to-b from-cyan to-[#0085ff] p-30">
                  <h4 className="text-20 leading-29 font-medium text-white mb-15">Зона</h4>
                  {responsibilities.slice(0, 3).map((row) => (
                    <div key={row} className="text-14 leading-20 text-white">{row}</div>
                  ))}
                </div>
                <div className="rounded-sm bg-gradient-to-b from-accent to-accent-dark p-30">
                  <h4 className="text-20 leading-29 font-medium text-white mb-15">Клиент</h4>
                  {responsibilities.slice(3).map((row) => (
                    <div key={row} className="text-14 leading-20 text-white">{row}</div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-40">
              <SectionHeading ghost="ОС" title="Операционные системы" />
              <div className="grid grid-cols-2 tablet:grid-cols-3 gap-30">
                {['Windows', 'CloudLinux', 'Ubuntu', 'CentOs', 'Debian', 'VMware'].map((os) => (
                  <div key={os} className="flex items-center gap-15 text-20 leading-29 font-medium text-white">
                    {os}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-40">
              <SectionHeading ghost="Управления" title="Панели управления" />
              <div className="grid grid-cols-2 tablet:grid-cols-3 gap-30">
                {['R1Soft', 'DirectAdmin', 'cPanel'].map((p) => (
                  <div key={p} className="text-20 leading-29 font-medium text-white">{p}</div>
                ))}
              </div>
            </div>

            <div className="mb-40">
              <SectionHeading ghost="Помощь" title="FAQ" />
              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-30">
                {faq.map((item, i) => (
                  <div key={i}>
                    <h4 className="text-20 leading-29 font-medium text-white mb-15">{item.q}</h4>
                    <p className="text-14 leading-17 font-normal text-secondary">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-40 desktop:mt-0">
            <OrderSidebar server={server} />
          </div>
        </div>
      </Container>

      <Container className="py-60">
        <PromoBanner />
      </Container>
    </main>
  );
}
