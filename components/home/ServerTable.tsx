import Container from '../ui/Container';
import Badge from '../ui/Badge';
import Flag from '../ui/Flag';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { cn } from '../../lib/cn';
import type { Server, ServerStorage, ServerLocation } from '../../types';

interface ServerTableProps {
  servers: Server[];
  activeId?: string;
}

function isStorageArray(s: Server['storage']): s is ServerStorage[] {
  return Array.isArray(s);
}

function isLocationObject(l: Server['location']): l is ServerLocation {
  return typeof l === 'object' && l !== null && 'code' in l;
}

function StorageList({ storage }: { storage: Server['storage'] }) {
  if (!isStorageArray(storage)) return null;
  const ssd = storage.filter((s) => s.type === 'ssd' || s.type === 'nvme');
  const hdd = storage.filter((s) => s.type === 'hdd');
  return (
    <div className="flex flex-col gap-4">
      {ssd.length > 0 && (
        <span className="text-14 leading-20 text-white">
          SSD: {ssd.map((s) => `${s.count}x ${s.size}`).join(', ')}
        </span>
      )}
      {hdd.length > 0 && (
        <span className="text-14 leading-20 text-secondary">
          HDD: {hdd.map((s) => `${s.count}x ${s.size}`).join(', ')}
        </span>
      )}
    </div>
  );
}

function ServerRow({ server, isActive }: { server: Server; isActive: boolean }) {
  const loc = isLocationObject(server.location) ? server.location : null;
  return (
    <div
      className={cn(
        'border-b border-primary/30 min-h-[11.4rem]',
        isActive && 'bg-primary/10 border-l-4 border-l-accent'
      )}
    >
      <div className="hidden desktop:grid grid-cols-[1.6fr_1fr_0.8fr_1.2fr_1fr] items-center gap-20 px-20 py-24">
        <div className="flex items-center gap-12">
          {loc && <Flag code={loc.code} />}
          <div className="flex flex-col gap-6">
            <span className="text-14 leading-20 font-medium text-white">{server.cpu}</span>
            <div className="flex flex-wrap items-center gap-6">
              <Badge variant="secondary">NAT IPV4</Badge>
              {server.type && <Badge variant="primary">{server.type}</Badge>}
            </div>
          </div>
        </div>
        <div className="text-14 leading-20 text-secondary">{server.type ?? 'Dedicated'}</div>
        <div className="text-14 leading-20 text-white">
          {typeof server.ram === 'number' ? `${server.ram} GB` : server.ram}
        </div>
        <div>
          <StorageList storage={server.storage} />
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-16 leading-23 font-semibold text-white">
            €{server.price.toFixed(2)}
          </span>
          <span className="text-12 leading-17 text-white opacity-40">абонплата</span>
        </div>
      </div>
      {/* Mobile card */}
      <div className="desktop:hidden flex flex-col gap-12 p-20">
        <div className="flex items-center gap-12">
          {loc && <Flag code={loc.code} />}
          <span className="text-14 leading-20 font-medium text-white">{server.cpu}</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <Badge variant="secondary">NAT IPV4</Badge>
          {server.type && <Badge variant="primary">{server.type}</Badge>}
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <div className="text-12 text-secondary uppercase">RAM</div>
            <div className="text-14 text-white">
              {typeof server.ram === 'number' ? `${server.ram} GB` : server.ram}
            </div>
          </div>
          <div>
            <div className="text-12 text-secondary uppercase">Цена</div>
            <div className="text-16 text-white font-semibold">€{server.price.toFixed(2)}</div>
          </div>
        </div>
        <StorageList storage={server.storage} />
      </div>
      {isActive && <ExpandedBlock server={server} />}
    </div>
  );
}

function ExpandedBlock({ server }: { server: Server }) {
  const loc = isLocationObject(server.location) ? server.location.label : 'Frankfurt';
  return (
    <div className="px-20 pb-30 pt-0 desktop:pl-[3.2rem]">
      <div className="flex flex-col desktop:flex-row desktop:items-center gap-20 desktop:gap-30 mb-20">
        <span className="text-14 text-secondary">
          {loc} • {server.bandwidth ?? '200 Mbps'} • {server.locationStorage ?? '1 TB'}
        </span>
        <div className="flex flex-wrap gap-8">
          <Badge variant="green">Беспалтная установка</Badge>
          <Badge variant="red">Доступ через 3-5 мин</Badge>
        </div>
      </div>
      <div className="flex flex-col desktop:flex-row gap-12">
        <Button variant="outline" size="md">
          Сравнить с конкурентами
        </Button>
        <Button variant="outline" size="md">
          Добавить в избранное
        </Button>
        <Button href={`/server/${server.slug ?? server.id}`} variant="accent" size="md">
          Смотреть подробности
          <Icon name="caret-right" className="text-12 ml-8" />
        </Button>
      </div>
    </div>
  );
}

export default function ServerTable({ servers, activeId }: ServerTableProps) {
  return (
    <section className="py-40">
      <Container>
        <div className="hidden desktop:grid grid-cols-[1.6fr_1fr_0.8fr_1.2fr_1fr] gap-20 px-20 pb-16 border-b border-primary/30">
          {['Сервер', 'Продукт', 'RAM', 'Место на диске', 'Цена в месяц'].map((h) => (
            <span
              key={h}
              className="text-12 leading-17 font-medium text-secondary uppercase tracking-wider"
            >
              {h}
            </span>
          ))}
        </div>
        <div>
          {servers.map((s) => (
            <ServerRow key={s.id} server={s} isActive={s.id === activeId} />
          ))}
        </div>
        <div className="flex flex-col desktop:flex-row items-center justify-between gap-20 mt-40">
          <Button href="/search" variant="outline" size="lg">
            Показать больше конфигураций
          </Button>
          <span className="text-14 text-secondary">еще 1378шт от €7.89</span>
        </div>
      </Container>
    </section>
  );
}
