import { cn } from '@/lib/cn';
import type { Server } from '@/data/servers';

interface ServerHeroProps {
  server: Server;
}

export default function ServerHero({ server }: ServerHeroProps) {
  return (
    <div className="flex flex-col desktop:flex-row desktop:items-start desktop:justify-between gap-24">
      <div className="flex flex-col gap-16">
        <h1 className="text-30 leading-43 font-medium text-white">Dell R720XD</h1>

        <p className="text-14 leading-17 font-normal text-secondary max-w-[60rem]">
          Процессор XEON E5530 основан на 14 нм микроархитектуре Broadwell. Он был разработан для рабочих станций и серверов.
        </p>

        {/* Specs row */}
        <div className="flex flex-wrap items-center gap-16 mt-4">
          <div className="flex items-center gap-6">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-secondary">
              <rect x="2" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <path d="M6 8h6M6 11h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-14 leading-20 font-normal text-white">{server.cpu}</span>
          </div>
          <div className="flex items-center gap-6">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-secondary">
              <rect x="1" y="5" width="16" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="14" cy="9" r="1" fill="currentColor" />
            </svg>
            <span className="text-14 leading-20 font-normal text-white">{server.ram}</span>
          </div>
          {server.ssd && (
            <div className="flex items-center gap-6">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-secondary">
                <rect x="2" y="5" width="14" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="13" cy="9" r="1" fill="currentColor" />
              </svg>
              <span className="text-14 leading-20 font-normal text-white">{server.ssd}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-12 flex-shrink-0">
        <a
          href={`/order?server=${server.id}`}
          className={cn(
            'inline-flex items-center justify-center h-48 px-24 rounded-sm',
            'bg-accent hover:bg-accent-dark transition-colors',
            'text-16 leading-23 font-semibold text-white',
          )}
        >
          Оформить заказ
        </a>
        <button
          type="button"
          className={cn(
            'inline-flex items-center justify-center gap-8 h-48 px-24 rounded-sm',
            'border border-white/20 bg-transparent hover:bg-white/10 transition-colors',
            'text-16 leading-23 font-semibold text-white',
          )}
        >
          Поделиться
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="18" cy="5" r="2" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="18" cy="19" r="2" stroke="currentColor" strokeWidth="1.2" />
            <path d="M8 10.7L16 6.3M8 13.3L16 17.7" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>
    </div>
  );
}
