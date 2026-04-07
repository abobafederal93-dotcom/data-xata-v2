import Flag from '../ui/Flag';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
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

  const headerBadges: { label: string; variant: 'secondary' | 'green' | 'red' }[] = [];
  if (server.type) headerBadges.push({ label: server.type, variant: 'secondary' });
  if ((server.ipv4 ?? '').toLowerCase().includes('nat'))
    headerBadges.push({ label: 'NAT IPv4', variant: 'secondary' });

  return (
    <article
      className={cn(
        'w-full border border-primary rounded-sm p-18 flex flex-col gap-16 bg-bg',
        className
      )}
    >
      {/* Top section */}
      <div className="flex items-start justify-between gap-24">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-12 flex-wrap">
            {flag && <Flag code={flag} width={24} height={16} />}
            <h3 className="text-25 leading-29 font-medium text-white">{server.name}</h3>
            {headerBadges.map((b) => (
              <Badge key={b.label} variant={b.variant}>
                {b.label}
              </Badge>
            ))}
          </div>
          <p className="mt-8 text-12 leading-17 text-secondary">
            {[locationLabel, server.bandwidth, server.locationStorage].filter(Boolean).join(' • ')}
          </p>
          {variant === 'expanded' && osNames.length > 0 && (
            <p className="mt-4 text-12 leading-17 text-secondary">{osNames.join(' • ')}</p>
          )}
          {variant === 'expanded' && tagLabels.length > 0 && (
            <p className="mt-8 text-14 leading-20 text-accent">{tagLabels.join(' • ')}</p>
          )}
        </div>

        <div className="flex flex-col items-end gap-8 flex-shrink-0">
          <span className="text-14 leading-20 font-semibold text-white">{ram}</span>
          {storageLines.map((s, i) => (
            <span key={i} className="text-12 leading-17 text-secondary">
              {s.label}: {s.value}
            </span>
          ))}
          <div className="flex items-baseline gap-8 mt-4">
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
          <div className="flex flex-col items-end gap-4">
            {server.freeInstall && <Badge variant="green">Беспалтная установка</Badge>}
            {server.deliveryTime && <Badge variant="red">{server.deliveryTime}</Badge>}
          </div>
        </div>
      </div>

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

      {/* Buttons */}
      {variant === 'expanded' && (
        <div className="flex flex-wrap gap-12 mt-4">
          <Button variant="outline" size="md" className="flex-1 min-w-200">
            Сравнить с конкурентами
          </Button>
          <Button variant="outline" size="md" className="flex-1 min-w-200">
            Добавить в избранное
          </Button>
          <Button
            variant="accent"
            size="md"
            href={server.slug ? `/server/${server.slug}` : '#'}
            className="flex-1 min-w-200"
          >
            Смотреть подробности
          </Button>
        </div>
      )}
    </article>
  );
}
