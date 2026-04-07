import Flag from '../ui/Flag';
import Icon from '../ui/Icon';
import type { Server, ServerStorage, FlagCode } from '../../types';
import { cn } from '../../lib/cn';

interface ServerCardProps {
  server: Server;
  isActive?: boolean;
  className?: string;
}

function getLocationLabel(server: Server): string {
  if (typeof server.location === 'string') return server.location;
  return server.location?.label ?? '';
}

function getFlagCode(server: Server): FlagCode | null {
  if (typeof server.location === 'object' && server.location?.code) return server.location.code;
  if (server.locationFlag) return server.locationFlag as FlagCode;
  return null;
}

function getStorageLines(server: Server): { label: string; value: string }[] {
  if (Array.isArray(server.storage)) {
    return (server.storage as ServerStorage[]).map((s) => ({
      label: s.type.toUpperCase(),
      value: `${s.count}x ${s.size}`,
    }));
  }
  if (typeof server.storage === 'object' && server.storage) {
    const out: { label: string; value: string }[] = [];
    if ((server.storage as { ssd?: string }).ssd)
      out.push({ label: 'SSD', value: (server.storage as { ssd?: string }).ssd! });
    if ((server.storage as { hdd?: string }).hdd)
      out.push({ label: 'HDD', value: (server.storage as { hdd?: string }).hdd! });
    return out;
  }
  return [];
}

function getOsNames(server: Server): string[] {
  if (!server.os) return [];
  return (server.os as Array<{ name?: string } | string>).map((o) =>
    typeof o === 'string' ? o : o.name ?? ''
  );
}

function getTagLabels(server: Server): string[] {
  if (!server.tags) return [];
  return (server.tags as Array<{ label?: string } | string>).map((t) =>
    typeof t === 'string' ? t : t.label ?? ''
  );
}

const badgeBase = 'inline-flex items-center h-21 px-6 py-2 text-12 leading-17 rounded-sm';

export default function ServerCard({ server, isActive = false, className }: ServerCardProps) {
  const locationLabel = getLocationLabel(server);
  const flag = getFlagCode(server);
  const storageLines = getStorageLines(server);
  const osNames = getOsNames(server);
  const tagLabels = getTagLabels(server);
  const ram = typeof server.ram === 'number' ? `${server.ram}GB` : server.ram;
  const currency = server.currency === 'EUR' ? '€' : '$';
  const isNat = (server.ipv4 ?? '').toLowerCase().includes('nat') || /nat/i.test(server.name);

  const greenBadges = new Set(['Купон доступен', 'DDoS защита', 'Бесплатная установка', 'IPv6 ready', 'до 12 дисков', '4 Cores', 'IPMI', 'FreeBSD', 'Linux', 'TIER III', 'ISO 27001', 'PCI DSS', 'SOC 1', 'HIPAA']);

  return (
    <article
      className={cn(
        'w-full desktop:w-[82.5rem] border border-[#215aee] rounded-sm overflow-hidden',
        isActive && 'bg-[#215aee]',
        className
      )}
    >
      <div className="p-20 flex flex-col tablet:flex-row gap-20">
        <div className="flex-1 min-w-0 flex flex-col gap-10">
          <div className="flex items-center gap-12 flex-wrap">
            {flag && <Flag code={flag} width={24} height={14} />}
            <span className="text-19 leading-27 font-semibold text-white">{server.name}</span>
          </div>
          {server.badges && server.badges.length > 0 && (
            <div className="flex flex-wrap gap-6">
              {isNat && (
                <span className={cn(badgeBase, 'bg-secondary text-white')}>NAT IPV4</span>
              )}
              {server.badges.map((b) => {
                const isRed = b.toLowerCase().includes('доступ через');
                const isGreen = greenBadges.has(b) || b.toLowerCase().includes('бесплат');
                return (
                  <span
                    key={b}
                    className={cn(
                      badgeBase,
                      isRed
                        ? 'bg-[#f50e38] text-white'
                        : isGreen
                          ? 'bg-[#27e35c] text-bg'
                          : 'bg-secondary text-white'
                    )}
                  >
                    {b}
                  </span>
                );
              })}
            </div>
          )}
          {server.cpu && (
            <div className="flex items-center gap-8">
              <Icon name="tool" className="text-18" />
              <span className="text-14 leading-20 text-secondary">{server.cpu}</span>
            </div>
          )}
          {osNames.length > 0 && (
            <div className="flex items-center gap-8">
              <Icon name="windows" className="text-18" />
              <span className="text-14 leading-20 text-secondary">{osNames.join(' • ')}</span>
            </div>
          )}
          {locationLabel && (
            <div className="flex items-center gap-8">
              <Icon name="map" className="text-18" />
              <span className="text-14 leading-20 text-secondary">
                {[locationLabel, server.bandwidth, server.locationStorage].filter(Boolean).join(' • ')}
              </span>
            </div>
          )}
          {tagLabels.length > 0 && (
            <div className="flex items-center gap-8">
              <Icon name="star" className="text-18" />
              <span className="text-14 leading-20 text-accent">{tagLabels.join(' • ')}</span>
            </div>
          )}
          <div className="flex items-center gap-6">
            <span className="text-12 leading-17 text-secondary">Хост: Hosteons</span>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="text-18 text-white" />
              ))}
            </div>
            <span className="text-12 leading-17 text-secondary">(1 отзыв)</span>
          </div>
        </div>
        <div className="flex flex-col gap-6 tablet:items-end">
          {server.type && <span className="text-14 leading-20 text-secondary">{server.type}</span>}
          <span className="text-14 leading-20 text-secondary">{ram}</span>
          {storageLines.map((s, i) => (
            <span key={i} className="text-14 leading-20 text-secondary">
              {s.label}: {s.value}
            </span>
          ))}
          <div className="flex items-baseline gap-8 mt-6">
            <span className="text-14 leading-20 font-semibold text-white">
              {currency}
              {server.price.toFixed(2)}
            </span>
            {server.priceOld && (
              <span className="text-12 leading-17 text-secondary line-through">
                {currency}
                {server.priceOld.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
      {isActive && (
        <div className="border-t border-white/20 h-48 flex items-center px-20 gap-30 flex-wrap">
          <button type="button" className="inline-flex items-center gap-8 text-14 leading-20 text-accent">
            <Icon name="star" className="text-24" />
            <span>Добавить в избранное</span>
          </button>
          <button type="button" className="inline-flex items-center gap-8 text-14 leading-20 text-white">
            <Icon name="compare" className="text-24" />
            <span>Сравнить с конкурентами</span>
          </button>
          <a
            href={server.slug ? `/server/${server.slug}` : '#'}
            className="inline-flex items-center gap-8 text-14 leading-20 text-white"
          >
            <Icon name="caret-right" className="text-24" />
            <span>Смотреть подробности</span>
          </a>
        </div>
      )}
    </article>
  );
}
