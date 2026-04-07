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

  const pricingPeriods = [
    { label: '1 месяц', price: '€46.75', isActive: true },
    { label: '3 месяца', discount: '-2.5%', price: '€136.75' },
    { label: '6 месяцев', discount: '-5%', price: '€266.50' },
    { label: '12 месяцев', discount: '-10%', price: '€504.90' },
  ];

  const cpuSpecs = [
    { label: 'количество cpu', value: '2' },
    { label: 'название cpu', value: 'Intel Hexa-Core Xeon E5-2620V2', highlight: true },
    { label: 'частота', value: '2.1 Ghz' },
    { label: 'количество ядер', value: '2х 6 cores' },
    { label: 'cpu benchmark', value: '-' },
    { label: 'фишки', value: '-' },
  ];

  const memSpecs = [
    { label: 'память', value: '32GB DDR3 ECC', highlight: true },
    { label: 'жесткие диски', value: '1х 480GB SSD', highlight: true },
  ];

  const networkSpecs = [
    { label: 'порт', value: '1x 1000Mbps Full-Duplex', highlight: true },
    { label: 'ip v4', value: '6 шт' },
    { label: 'ip v6', value: '/64 бесплатно' },
    { label: 'трафик', value: '30 TB', highlight: true },
    { label: 'защита от Ddos', value: 'Базовая' },
    { label: 'firewall', value: 'Бесплатно' },
  ];

  const ferment =
    'Дата-хата работает на рынке с 2006 года. На нашем сайте есть огромное количество предложений физических выделенных серверов в Америке и Европе.';

  const includesItems = [
    { icon: 'server', title: 'Реальное железо', description: ferment },
    { icon: 'admin', title: 'Удаленное управление', description: ferment },
    { icon: 'cloud', title: 'DDoS защита', description: ferment },
    { icon: 'present', title: 'Многовенная доставка', description: ferment },
    { icon: 'phone', title: 'Поддержка 24/7', description: ferment },
    { icon: 'traffic', title: 'Бесплатный трафик', description: ferment },
  ];

  const zoneRows = ['Корпус сервера', 'Подключение к интернету', 'Аппаратные средства'];
  const clientRows = [
    'Операционная система',
    'Программная платформа',
    'Управление сервером',
    'Установка приложений',
    'Управление приложениями',
  ];

  const osList: { name: string; src: string }[] = [
    { name: 'Windows', src: '/img/icons/Windows.svg' },
    { name: 'CloudLinux', src: '/img/icons/CloudLinux.svg' },
    { name: 'Ubuntu', src: '/img/icons/Ubuntu.svg' },
    { name: 'CentOs', src: '/img/icons/CentOs.svg' },
    { name: 'Debian', src: '/img/icons/Debian.svg' },
    { name: 'VMware', src: '/img/icons/VMware.svg' },
  ];
  const panelsList: { name: string; src: string }[] = [
    { name: 'R1Soft', src: '/img/icons/R1Soft.svg' },
    { name: 'DirectAdmin', src: '/img/icons/DirectAdmin.svg' },
    { name: 'cPanel', src: '/img/icons/cPanel.svg' },
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
        <div className="flex flex-col desktop:flex-row gap-30 pt-40">
          <div className="flex-1 flex flex-col gap-60">
            <ServerHero server={server} />
            <PricingCards periods={pricingPeriods} />
            <SpecBlock title="Процессор" specs={cpuSpecs} />
            <SpecBlock title="Память и жесткие диски" specs={memSpecs} />
            <SpecBlock title="Подключение" specs={networkSpecs} />

            <IncludesSection items={includesItems} />

            <div>
              <SectionHeading ghost="Обязанности" title="Обязанности делятся следующим образом:" />
              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-30 mt-30">
                <div className="bg-gradient-to-b from-cyan to-[#0085ff] p-30 flex flex-col gap-15">
                  <h4 className="text-20 leading-29 font-medium text-white">Зона / Хостинг</h4>
                  {zoneRows.map((row) => (
                    <div key={row} className="text-14 leading-20 text-white">
                      {row}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-b from-accent to-accent-dark p-30 flex flex-col gap-15">
                  <h4 className="text-20 leading-29 font-medium text-white">Клиент</h4>
                  {clientRows.map((row) => (
                    <div key={row} className="text-14 leading-20 text-white">
                      {row}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <SectionHeading ghost="ОС" title="Операционные системы" />
              <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-6 gap-30 mt-30">
                {osList.map((os) => (
                  <div
                    key={os}
                    className="text-20 leading-29 font-medium text-white text-center"
                  >
                    {os}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading ghost="Управления" title="Панели управления" />
              <div className="grid grid-cols-2 tablet:grid-cols-3 gap-30 mt-30">
                {panelsList.map((p) => (
                  <div
                    key={p}
                    className="text-20 leading-29 font-medium text-white text-center"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading ghost="Помощь" title="FAQ" />
              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-30 mt-30">
                {faq.map((item, i) => (
                  <div key={i} className="flex flex-col gap-15">
                    <h4 className="text-20 leading-29 font-medium text-white">{item.q}</h4>
                    <p className="text-14 leading-17 font-normal text-secondary">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full desktop:w-[35rem] shrink-0">
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
