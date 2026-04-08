import { cn } from '@/lib/cn';
import Icon from '@/components/ui/Icon';
import Flag from '@/components/ui/Flag';

interface HomeServerCardProps {
  cpu: string;
  type: string;
  ram: string;
  ssd?: string;
  hdd?: string;
  location: string;
  network: string;
  traffic: string;
  flag: string;
  price: string;
  oldPrice?: string;
  freeSetup?: boolean;
  fastAccess?: boolean;
  expanded?: boolean;
}

export default function HomeServerCard({
  cpu,
  type,
  ram,
  ssd,
  hdd,
  location,
  network,
  traffic,
  flag,
  price,
  oldPrice,
  freeSetup,
  fastAccess,
  expanded = false,
}: HomeServerCardProps) {
  const locationLine = `${location} • ${network} • ${traffic}`;

  return (
    <div className="border border-primary w-full">
      <div className="px-18 pt-18 pb-18">

        {/* ── Row 1: hardware specs ── */}
        {/* Figma w=1110: flag(x=18,w=24) cpu(x=56) type(x=350) i-proc(x=381) ram(x=529) i-mem(x=571) storage(x=708) i-hdd(x=810) price(x=1043) */}
        <div className="flex items-start">

          {/* Left cluster: flag + cpu */}
          <div className="flex items-center gap-14 flex-shrink-0 w-[31.2rem]">
            <Flag code={flag} className="w-24 h-14 flex-shrink-0" />
            <span className="text-14 leading-20 font-normal text-white">{cpu}</span>
          </div>

          {/* Center cluster: type + icons + ram + storage */}
          <div className="flex items-start flex-1">

            {/* type (x=350) */}
            <span className="text-14 leading-20 font-normal text-white w-[3.1rem] flex-shrink-0">{type}</span>

            {/* icon-proc (x=381) gap = 381-350-~30 ≈ 1 */}
            <Icon name="processor" className="text-24 text-secondary flex-shrink-0 ml-5" />

            {/* ram (x=529) icon-proc ends 405; gap=124 */}
            <span className="text-14 leading-20 font-normal text-white flex-shrink-0 ml-100">{ram}</span>

            {/* icon-mem (x=571) ram ends ~559; gap=12 */}
            <Icon name="memory" className="text-24 text-secondary flex-shrink-0 ml-12" />

            {/* storage (x=708) icon-mem ends 595; gap=113 */}
            <div className="ml-100 flex flex-col flex-shrink-0">
              {ssd && (
                <span className="text-14 leading-20 font-normal text-white whitespace-nowrap">{ssd}</span>
              )}
              {hdd && (
                <span className="text-14 leading-20 font-normal text-white whitespace-nowrap">{hdd}</span>
              )}
            </div>

            {/* icon-hdd (x=810) storage ends ~798; gap=12 */}
            <Icon name="hdd" className="text-24 text-secondary flex-shrink-0 ml-auto" />
          </div>

          {/* Right cluster: price (x=1043, right-aligned) */}
          <div className="flex-shrink-0 text-right ml-20 min-w-[6rem]">
            <span className="block text-14 leading-20 font-semibold text-white whitespace-nowrap">{price}</span>
            {oldPrice && (
              <span className="block text-12 leading-17 font-normal text-secondary line-through whitespace-nowrap">{oldPrice}</span>
            )}
          </div>
        </div>

        {/* ── Row 2: location + statuses ── */}
        {/* Figma y=54: i-map(x=18,w=18) location(x=44) statuses(right, x≈972) */}
        <div className="flex items-center mt-18">
          <Icon name="map" className="text-18 text-secondary flex-shrink-0" />
          <span className="ml-8 text-14 leading-20 font-normal text-white">{locationLine}</span>

          <div className="ml-auto flex flex-col items-end">
            {freeSetup && (
              <span className="text-12 leading-17 font-medium text-green whitespace-nowrap">
                Беспалтная установка
              </span>
            )}
            {fastAccess && (
              <span className="text-12 leading-17 font-medium text-red whitespace-nowrap">
                Доступ через 3-5 мин
              </span>
            )}
          </div>
        </div>

      </div>

      {/* ── Expanded actions bar ── */}
      {expanded && (
        <div className="bg-primary px-18 py-12 flex items-center flex-wrap gap-y-10">
          <button className="flex items-center gap-8 text-14 leading-20 font-medium text-white hover:text-white/80 transition-colors">
            <Icon name="compare" className="text-20" />
            Сравнить с конкурентами
          </button>
          <button className="flex items-center gap-8 ml-[18.5rem] text-14 leading-20 font-medium text-white hover:text-white/80 transition-colors">
            <Icon name="favorites" className="text-20" />
            Добавить в избранное
          </button>
          <button className="flex items-center gap-8 ml-[18.5rem] text-14 leading-20 font-medium text-white hover:text-white/80 transition-colors">
            <Icon name="search" className="text-20" />
            Смотреть подробности
          </button>
        </div>
      )}
    </div>
  );
}

export type { HomeServerCardProps };
