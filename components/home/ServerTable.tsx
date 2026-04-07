import Container from '../ui/Container';
import Badge from '../ui/Badge';
import Flag from '../ui/Flag';
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
        <span className="text-14 leading-20 text-white">
          HDD: {hdd.map((s) => `${s.count}x ${s.size}`).join(', ')}
        </span>
      )}
    </div>
  );
}

function ServerRow({ server, isActive }: { server: Server; isActive: boolean }) {
  const loc = isLocationObject(server.location) ? server.location : null;
  const locLabel = loc?.label ?? 'Frankfut';
  return (
    <div
      className={cn(
        'mb-12',
        isActive ? 'min-h-166 bg-[#215aee]' : 'min-h-114 border border-white/10'
      )}
    >
      <div className="hidden desktop:flex items-center gap-20 px-20 py-24">
        <div className="flex items-center gap-12 flex-1">
          {loc && <Flag code={loc.code} />}
          <div className="flex flex-col gap-6">
            <span className="text-14 leading-20 font-medium text-white">{server.cpu}</span>
            <span className="text-14 leading-20 font-normal text-white">
              {locLabel} • {server.bandwidth ?? '200 Mbps'} • {server.locationStorage ?? '1 TB'}
            </span>
            <div className="flex flex-wrap items-center gap-6">
              <Badge variant="green">Беспалтная установка</Badge>
              <Badge variant="red">Доступ через 3-5 мин</Badge>
            </div>
          </div>
        </div>
        <div className="text-14 leading-20 font-normal text-white w-[8rem]">
          {server.type ?? 'VPS'}
        </div>
        <div className="text-14 leading-20 font-normal text-white w-[8rem]">
          {typeof server.ram === 'number' ? `${server.ram} GB` : server.ram}
        </div>
        <div className="w-[16rem]">
          <StorageList storage={server.storage} />
        </div>
        <div className="flex flex-col gap-4 w-[10rem] text-right">
          <span className="text-14 leading-20 font-semibold text-white">
            €{server.price.toFixed(2)}
          </span>
          <span className="text-12 leading-17 font-medium text-white opacity-50">абонплата</span>
        </div>
      </div>
      {isActive && (
        <div className="hidden desktop:block px-20 pb-20">
          <div className="flex items-center gap-30">
            <a
              href="#"
              className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-accent"
            >
              <Icon name="star" className="text-16" />
              Добавить в избранное
            </a>
            <a
              href="#"
              className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-accent"
            >
              <Icon name="compare" className="text-16" />
              Сравнить с конкурентами
            </a>
            <a
              href={`/server/${server.slug ?? server.id}`}
              className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-accent"
            >
              Смотреть подробности
              <Icon name="caret-right" className="text-16" />
            </a>
          </div>
        </div>
      )}
      {/* Mobile card */}
      <div className="desktop:hidden flex flex-col gap-12 p-20">
        <div className="flex items-center gap-12">
          {loc && <Flag code={loc.code} />}
          <span className="text-14 leading-20 font-medium text-white">{server.cpu}</span>
        </div>
        <div className="flex flex-wrap gap-6">
          <Badge variant="green">Беспалтная установка</Badge>
          <Badge variant="red">Доступ через 3-5 мин</Badge>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <div className="text-12 leading-17 font-medium text-[#839ada]">RAM</div>
            <div className="text-14 leading-20 text-white">
              {typeof server.ram === 'number' ? `${server.ram} GB` : server.ram}
            </div>
          </div>
          <div>
            <div className="text-12 leading-17 font-medium text-[#839ada]">Цена</div>
            <div className="text-14 leading-20 text-white font-semibold">
              €{server.price.toFixed(2)}
            </div>
          </div>
        </div>
        <StorageList storage={server.storage} />
      </div>
    </div>
  );
}

export default function ServerTable({ servers, activeId }: ServerTableProps) {
  return (
    <section className="py-40">
      <Container>
        <div className="hidden desktop:flex gap-20 px-20 pb-16">
          <span className="text-12 leading-17 font-medium text-[#839ada] flex-1">Сервер</span>
          <span className="text-12 leading-17 font-medium text-[#839ada] w-[8rem]">Продукт</span>
          <span className="text-12 leading-17 font-medium text-[#839ada] w-[8rem]">RAM</span>
          <span className="text-12 leading-17 font-medium text-[#839ada] w-[16rem]">
            Место на диске
          </span>
          <span className="text-12 leading-17 font-medium text-[#839ada] w-[10rem] text-right">
            Цена в месяц
          </span>
        </div>
        <div>
          {servers.map((s) => (
            <ServerRow key={s.id} server={s} isActive={s.id === activeId} />
          ))}
        </div>
        <div className="flex flex-col desktop:flex-row items-center justify-between gap-20 mt-40">
          <a
            href="/search"
            className="text-16 leading-23 font-semibold text-white hover:text-accent"
          >
            Показать больше конфигураций
          </a>
          <span className="text-18 leading-26 font-normal text-[#839ada]">
            еще 1378шт от €7.89
          </span>
        </div>
      </Container>
    </section>
  );
}
