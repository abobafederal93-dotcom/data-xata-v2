import Container from '../../../components/ui/Container';
import PromoBanner from '../../../components/ui/PromoBanner';
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
    { label: 'название cpu', value: server.cpu },
    { label: 'частота', value: server.cpuFreq ?? '2.1 GHz' },
    { label: 'количество ядер', value: server.cpuCores ? `2×${server.cpuCores / 2} cores` : '2×6 cores' },
    { label: 'cpu benchmark', value: '-' },
  ];

  const networkSpecs = [
    { label: 'порт', value: server.bandwidth ?? '1x 1000Mbps' },
    { label: 'ip v4', value: server.ipv4 ?? '6 шт' },
    { label: 'ip v6', value: server.ipv6 ?? '/64 бесплатно' },
    { label: 'трафик', value: server.traffic ?? '30 TB' },
  ];

  const includesItems = [
    { icon: 'server', title: 'Реальное железо', description: 'Выделенные физические серверы корпоративного уровня.' },
    { icon: 'admin', title: 'Удаленное управление', description: 'Полный IPMI/KVM доступ к вашему серверу 24/7.' },
    { icon: 'cloud', title: 'DDoS защита', description: 'Базовая защита от атак включена бесплатно.' },
    { icon: 'present', title: 'Мгновенная доставка', description: 'Доступ к серверу через 3-5 минут после оплаты.' },
    { icon: 'phone', title: 'Поддержка 24/7', description: 'Техническая поддержка на русском и английском.' },
    { icon: 'traffic', title: 'Бесплатный трафик', description: 'Безлимитный входящий трафик и большой исходящий.' },
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
    'Каковы требования ?',
    'Как я могу оформить возврат ?',
  ];

  return (
    <main>
      <Container>
        <div className="desktop:grid desktop:grid-cols-[1fr_38rem] desktop:gap-30 pt-40">
          <div>
            <ServerHero server={server} />
            <PricingCards cards={pricingCards} />
            <SpecBlock title="Процессор" specs={cpuSpecs} />

            <div className="mb-40">
              <h3 className="text-25 leading-36 font-medium text-white mb-20">Память и жесткие диски</h3>
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
              <h3 className="text-25 leading-36 font-medium text-white mb-20">Сеть</h3>
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
              <h3 className="text-25 leading-36 font-medium text-white mb-20">Зона ответственности</h3>
              <div className="grid grid-cols-2 gap-2 border border-primary rounded-sm overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-cyan h-48 flex items-center px-15 text-14 font-medium text-white">
                  Зона
                </div>
                <div className="bg-gradient-to-r from-primary to-cyan h-48 flex items-center px-15 text-14 font-medium text-white">
                  Клиент
                </div>
                {responsibilities.map((row, i) => (
                  <div
                    key={i}
                    className="col-span-2 grid grid-cols-2 gap-2 border-t border-primary"
                  >
                    <div className="px-15 py-12 text-14 text-white">{row}</div>
                    <div className="px-15 py-12 text-14 text-secondary">{i < 4 ? 'Provider' : 'Client'}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-40">
              <h3 className="text-25 leading-36 font-medium text-white mb-20">Операционные системы</h3>
              <div className="flex flex-wrap gap-15">
                {['Windows', 'CentOs', 'Debian', 'VMware', 'CloudLinux', 'Ubuntu'].map((os) => (
                  <span
                    key={os}
                    className="h-48 px-20 border border-primary rounded-sm text-14 text-white flex items-center"
                  >
                    {os}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-40">
              <h3 className="text-25 leading-36 font-medium text-white mb-20">Панели управления</h3>
              <div className="flex flex-wrap gap-15">
                {['R1Soft', 'DirectAdmin', 'cPanel'].map((p) => (
                  <span
                    key={p}
                    className="h-48 px-20 border border-primary rounded-sm text-14 text-white flex items-center"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-40">
              <h3 className="text-25 leading-36 font-medium text-white mb-20">FAQ</h3>
              <div className="flex flex-col gap-10">
                {faq.map((q, i) => (
                  <div
                    key={i}
                    className="border border-primary rounded-sm h-48 px-20 flex items-center justify-between text-14 text-white"
                  >
                    <span>{q}</span>
                    <span className="text-secondary">+</span>
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
        <PromoBanner
          ghost="Скидка"
          title="Получите скидку 15% на первый заказ"
          subtitle="Промокод действует на все выделенные серверы"
          buttonLabel="Заказать"
          buttonHref="/order"
        />
      </Container>
    </main>
  );
}
