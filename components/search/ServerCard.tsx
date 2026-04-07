import Flag from '../ui/Flag';
import Badge from '../ui/Badge';
import Icon from '../ui/Icon';
import type { Server, ServerStorage, FlagCode } from '../../types';
import { cn } from '../../lib/cn';

interface ServerCardProps {
  server: Server;
  variant?: 'expanded' | 'compact';
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

export default function ServerCard({ server, variant = 'expanded', className }: ServerCardProps) {
  const locationLabel = getLocationLabel(server);
  const flag = getFlagCode(server);
  const storageLines = getStorageLines(server);
  const osNames = getOsNames(server);
  const tagLabels = getTagLabels(server);
  const ram = typeof server.ram === 'number' ? `${server.ram}GB` : server.ram;
  const currency = server.currency === 'EUR' ? '€' : '$';
  const isNat = (server.ipv4 ?? '').toLowerCase().includes('nat');

  return (
    <article
      className={cn(
        'w-full border border-primary rounded-sm bg-bg overflow-hidden',
        className
      )}
    >
      <div className="p-18 flex flex-col gap-16">
        {/* Top row: name + columns + price */}
        <div className="flex items-start gap-16 flex-wrap">
          <div className="flex items-center gap-12 flex-1 min-w-0">
            {flag && <Flag code={flag} width={24} height={14} />}
            <span className="text-14 leading-20 font-medium text-white">{server.name}</span>
            {isNat && <Badge variant="secondary">NAT IPV4</Badge>}
          </div>
          <div className="flex items-center gap-24 flex-shrink-0">
            {server.type && (
              <span className="text-14 leading-20 text-white">{server.type}</span>
            )}
            <span className="text-14 leading-20 text-white">{ram}</span>
            <div className="flex flex-col gap-4">
              {storageLines.map((s, i) => (
                <span key={i} className="text-14 leading-20 text-white">
                  {s.label}: {s.value}
                </span>
              ))}
            </div>
            <div className="flex flex-col items-end gap-4">
              <div className="flex items-baseline gap-8">
                {server.priceOld && (
                  <span className="text-14 leading-20 text-secondary line-through">
                    {currency}
                    {server.priceOld.toFixed(2)}
                  </span>
                )}
                <span className="text-14 leading-20 font-semibold text-white">
                  {currency}
                  {server.price.toFixed(2)}
                </span>
              </div>
              {server.freeInstall && (
                <span className="text-12 leading-17 font-medium text-green">Беспалтная установка</span>
              )}
              {server.deliveryTime && (
                <span className="text-12 leading-17 font-medium text-red">{server.deliveryTime}</span>
              )}
            </div>
          </div>
        </div>

        {/* Location row */}
        {locationLabel && (
          <div className="flex items-center gap-8">
            <Icon name="map" className="text-18" />
            <span className="text-14 leading-20 text-white">
              {[locationLabel, server.bandwidth, server.locationStorage].filter(Boolean).join(' • ')}
            </span>
          </div>
        )}

        {variant === 'expanded' && server.cpu && (
          <div className="flex items-center gap-8">
            <Icon name="tool" className="text-18" />
            <span className="text-14 leading-20 text-white">{server.cpu}</span>
          </div>
        )}

        {variant === 'expanded' && osNames.length > 0 && (
          <div className="flex items-center gap-8">
            <Icon name="windows" className="text-18" />
            <span className="text-14 leading-20 text-white">{osNames.join(' • ')}</span>
          </div>
        )}

        {variant === 'expanded' && tagLabels.length > 0 && (
          <div className="flex items-center gap-8">
            <Icon name="star" className="text-18" />
            <span className="text-14 leading-20 text-accent">{tagLabels.join(' • ')}</span>
          </div>
        )}

        {/* Badges */}
        {variant === 'expanded' && server.badges && server.badges.length > 0 && (
          <div className="flex flex-wrap gap-8">
            {server.badges.map((b) => (
              <Badge key={b} variant="green">
                {b}
              </Badge>
            ))}
          </div>
        )}

        {/* Host row */}
        {variant === 'expanded' && (
          <div className="flex items-center gap-6">
            <span className="text-12 leading-17 text-secondary">Хост: Hosteons</span>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" className="text-18 text-white" />
              ))}
            </div>
            <span className="text-12 leading-17 text-secondary">(1 отзыв)</span>
          </div>
        )}
      </div>

      {/* Buttons section */}
      {variant === 'expanded' && (
        <div className="bg-primary px-18 h-48 flex items-center justify-center gap-40 flex-wrap">
          <button
            type="button"
            className="inline-flex items-center gap-8 text-14 leading-20 font-medium text-white"
          >
            <Icon name="compare" className="text-24" />
            <span>Сравнить с конкурентами</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-8 text-14 leading-20 font-medium text-accent"
          >
            <Icon name="star" className="text-24" />
            <span>Добавить в избранное</span>
          </button>
          <a
            href={server.slug ? `/server/${server.slug}` : '#'}
            className="inline-flex items-center gap-8 text-14 leading-20 font-medium text-white"
          >
            <Icon name="caret" className="text-24 -rotate-90" />
            <span>Смотреть подробности</span>
          </a>
        </div>
      )}
    </article>
  );
}
