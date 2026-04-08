import { cn } from '@/lib/cn';

interface SearchServerCardProps {
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
  badges?: string[];
  tags?: string[];
  host?: string;
  rating?: number;
  reviews?: number;
  osOptions?: string;
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path
        d="M9 1.5L11.09 6.26L16.27 6.77L12.55 10.14L13.63 15.25L9 12.52L4.37 15.25L5.45 10.14L1.73 6.77L6.91 6.26L9 1.5Z"
        fill={filled ? '#ff8311' : 'none'}
        stroke={filled ? '#ff8311' : '#839ada'}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SearchServerCard({
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
  badges,
  tags,
  host,
  rating = 0,
  reviews = 0,
  osOptions,
}: SearchServerCardProps) {
  return (
    <div className="border border-white/10 rounded-sm bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
      <div className="p-20 desktop:p-24">
        {/* Row 1: badges + rating */}
        {badges && badges.length > 0 && (
          <div className="flex flex-wrap gap-6 mb-12">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center text-12 leading-17 font-normal text-white bg-white/10 px-6 py-2 rounded-sm"
              >
                {badge}
              </span>
            ))}
            {reviews > 0 && (
              <div className="flex items-center gap-6 ml-auto">
                <div className="flex items-center gap-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < (rating ?? 0)} />
                  ))}
                </div>
                <span className="text-12 leading-17 font-normal text-secondary">
                  ({reviews} {reviews === 1 ? 'отзыв' : 'отзывов'})
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col desktop:flex-row desktop:items-start gap-16">
          {/* Left: main info */}
          <div className="flex-1 flex flex-col gap-10">
            {/* Location row */}
            <div className="flex items-center gap-8">
              {/* Flag */}
              <img
                src={`/img/flags/${flag}.svg`}
                alt={flag}
                width={24}
                height={14}
                className="flex-shrink-0 object-cover"
              />
              <span className="text-14 leading-20 font-normal text-white">
                {location} • {network} • {traffic}
              </span>
            </div>

            {/* CPU row */}
            {host ? (
              <div className="flex items-center gap-8 flex-wrap">
                <span className="text-12 leading-17 font-normal text-secondary">Хост: {host}</span>
                {reviews >= 0 && (
                  <div className="flex items-center gap-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} filled={i < (rating ?? 0)} />
                    ))}
                    <span className="text-12 leading-17 font-normal text-secondary">
                      ({reviews} {reviews === 1 ? 'отзыв' : 'отзывов'})
                    </span>
                  </div>
                )}
              </div>
            ) : null}

            <div className="flex items-center gap-8">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-secondary flex-shrink-0">
                <rect x="2" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <path d="M6 8h6M6 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-14 leading-20 font-normal text-white">1x Intel Xeon {cpu}</span>
            </div>

            {/* Storage row */}
            <div className="flex items-center gap-8 flex-wrap">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-secondary flex-shrink-0">
                <rect x="2" y="5" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="13" cy="9" r="1" fill="currentColor" />
              </svg>
              <span className="text-14 leading-20 font-normal text-white">
                {type} • {ram}
                {ssd ? ` • ${ssd}` : ''}
                {hdd ? ` • ${hdd}` : ''}
              </span>
            </div>

            {/* OS row */}
            {osOptions && (
              <div className="flex items-center gap-8">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-secondary flex-shrink-0">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M9 2v14M2 9h14" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <span className="text-14 leading-20 font-normal text-secondary">{osOptions}</span>
              </div>
            )}

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex items-center gap-6 flex-wrap">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent flex-shrink-0">
                  <path d="M9.5 2L16 8.5L9.5 16L3 9.5V2H9.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  <circle cx="6" cy="6" r="1" fill="currentColor" />
                </svg>
                <span className="text-14 leading-20 font-normal text-accent">
                  {tags.join(' • ')}
                </span>
              </div>
            )}
          </div>

          {/* Right: price + statuses */}
          <div className="flex flex-col items-start desktop:items-end gap-8 flex-shrink-0">
            <div className="flex items-center gap-8">
              {oldPrice && (
                <span className="text-14 leading-20 font-semibold text-secondary line-through">
                  {oldPrice}
                </span>
              )}
              <span className="text-14 leading-20 font-semibold text-white">{price}</span>
            </div>

            {freeSetup && (
              <div className="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-green flex-shrink-0">
                  <path d="M3 9L7 13L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-12 leading-17 font-medium text-green">Беспалтная установка</span>
              </div>
            )}

            {fastAccess && (
              <div className="flex items-center gap-4">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-red flex-shrink-0">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="text-12 leading-17 font-medium text-red">Доступ через 3-5 мин</span>
              </div>
            )}

            <a
              href={`/server/1`}
              className="mt-4 inline-flex items-center gap-6 text-14 leading-20 font-medium text-white hover:text-accent transition-colors"
            >
              Смотреть подробности
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 9h10M9 4l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
