import Container from '@/components/ui/Container';
import ServerHero from '@/components/server/ServerHero';
import SpecBlock from '@/components/server/SpecBlock';
import PricingCards from '@/components/server/PricingCards';
import IncludesSection from '@/components/server/IncludesSection';
import OrderSidebar from '@/components/server/OrderSidebar';
import { servers } from '@/data/servers';
import { serverSpecs, pricingPlans, networkPlans } from '@/data/server-details';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServerPage({ params }: PageProps) {
  const { id } = await params;
  const server = servers.find((s) => s.id === id) ?? servers[0];

  const basicSpecs = serverSpecs.slice(0, 8);
  const cpuSpecs = serverSpecs.slice(8, 14);
  const networkSpecs = serverSpecs.slice(14, 21);

  return (
    <div className="min-h-screen">
      {/* Hero breadcrumb */}
      <div className="bg-primary py-30 desktop:py-40">
        <Container>
          <nav className="flex items-center gap-8 mb-20" aria-label="Breadcrumb">
            <a href="/" className="text-secondary hover:text-white transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </a>
            <span className="w-18 h-1 bg-secondary" />
            <span className="text-14 leading-20 font-normal text-secondary">Сервер</span>
            <span className="w-18 h-1 bg-secondary" />
            <span className="text-14 leading-20 font-normal text-secondary">Описание сервера</span>
          </nav>
          <ServerHero server={server} />
        </Container>
      </div>

      <Container className="py-40">
        <div className="flex flex-col desktop:flex-row gap-30 items-start">
          {/* Main content */}
          <div className="flex-1 min-w-0 flex flex-col gap-40">
            {/* Specs */}
            <section className="flex flex-col gap-30">
              <h2 className="text-40 leading-58 font-medium text-white">Цены и сроки</h2>
              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-30">
                <SpecBlock title="Основные" rows={basicSpecs} />
                <SpecBlock title="Процессор" rows={cpuSpecs} />
                <SpecBlock title="Сеть" rows={networkSpecs} />
              </div>
            </section>

            {/* Traffic plans */}
            <section className="flex flex-col gap-16">
              <h2 className="text-20 leading-29 font-medium text-white">Трафик</h2>
              <PricingCards plans={pricingPlans} />
            </section>

            {/* Network plans */}
            <section className="flex flex-col gap-16">
              <h2 className="text-20 leading-29 font-medium text-white">Сеть</h2>
              <PricingCards plans={networkPlans} />
            </section>

            {/* Includes */}
            <IncludesSection />

            {/* OS */}
            <section className="flex flex-col gap-20">
              <h2 className="text-40 leading-58 font-medium text-white">Операционные системы</h2>
              <div className="grid grid-cols-2 tablet:grid-cols-3 desktop:grid-cols-6 gap-20">
                {[
                  { name: 'Windows', src: '/img/figma/os-windows.svg' },
                  { name: 'CentOs', src: '/img/figma/os-centos.svg' },
                  { name: 'Debian', src: '/img/figma/os-debian.svg' },
                  { name: 'VMware', src: '/img/figma/os-vmware.svg' },
                  { name: 'CloudLinux', src: '/img/figma/os-cloudlinux.svg' },
                  { name: 'Ubuntu', src: '/img/figma/os-ubuntu.svg' },
                ].map((os) => (
                  <div key={os.name} className="flex flex-col items-center gap-12 p-20 border border-white/10 rounded-sm hover:border-white/30 transition-colors">
                    <img src={os.src} alt={os.name} width={73} height={73} className="object-contain" />
                    <span className="text-20 leading-29 font-medium text-white">{os.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section className="flex flex-col gap-16">
              <h2 className="text-40 leading-58 font-medium text-white">FAQ</h2>
              <div className="flex flex-col gap-4">
                {[
                  { q: 'Каковы требования ?', a: 'Это неуправляемое предложение. Так что вам нужно знать, как использовать сервер.' },
                  { q: 'Как я могу оформить возврат ?', a: 'Вы можете запросить возврат средств, если услуга не предоставлена. Возврат средств не распространяется на уже использованные ресурсы.' },
                ].map((item) => (
                  <details key={item.q} className="group border-b border-white/10">
                    <summary className="flex items-center justify-between py-16 cursor-pointer list-none select-none">
                      <span className="text-20 leading-29 font-medium text-white">{item.q}</span>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-secondary transition-transform group-open:rotate-180 flex-shrink-0">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </summary>
                    <div className="pb-16">
                      <p className="text-14 leading-17 font-normal text-secondary">{item.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="w-full desktop:w-[35rem] flex-shrink-0">
            <OrderSidebar server={server} />
          </div>
        </div>
      </Container>
    </div>
  );
}
