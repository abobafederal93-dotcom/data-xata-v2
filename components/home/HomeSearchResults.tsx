import { cn } from '@/lib/cn';
import Container from '@/components/ui/Container';
import HomeServerCard from '@/components/home/HomeServerCard';
import type { Server } from '@/data/servers';

interface HomeSearchResultsProps {
  servers: Server[];
}

export default function HomeSearchResults({ servers }: HomeSearchResultsProps) {
  const displayServers = servers.slice(0, 5);

  return (
    <section className="py-60">
      <Container>
        {/* Section heading */}
        <div className="mb-40">
          <span
            className="block text-65 leading-94 font-bold text-white opacity-[0.08] select-none pointer-events-none"
            aria-hidden="true"
          >
            Конфигурации
          </span>
          <h2 className="-mt-65 text-60 leading-87 font-medium text-white">
            Серверы
          </h2>
          <p className="text-40 leading-58 font-medium text-white">
            для любых задач
          </p>
        </div>

        {/* Server list */}
        <div className="flex flex-col gap-0">
          {displayServers.map((server, index) => (
            <HomeServerCard
              key={server.id}
              cpu={server.cpu}
              type={server.type}
              ram={server.ram}
              ssd={server.ssd}
              hdd={server.hdd}
              location={server.location}
              network={server.network}
              traffic={server.traffic}
              flag={server.flag}
              price={server.price}
              oldPrice={server.oldPrice}
              freeSetup={server.freeSetup}
              fastAccess={server.fastAccess}
              expanded={index === displayServers.length - 1}
            />
          ))}
        </div>

        {/* Show all link */}
        <div className="mt-30 flex justify-center">
          <a
            href="/servers"
            className={cn(
              'flex items-center justify-center',
              'w-[35rem] h-48',
              'border border-white bg-transparent hover:bg-white/10 transition-colors',
              'text-16 leading-23 font-semibold text-white',
            )}
          >
            Смотреть все конфигурации
          </a>
        </div>
      </Container>
    </section>
  );
}
