import { cn } from '@/lib/cn';
import type { Server } from '@/data/servers';

interface OrderSummaryProps {
  server?: Server;
}

export default function OrderSummary({ server }: OrderSummaryProps) {
  return (
    <div className="bg-white/5 rounded-md p-30 flex flex-col gap-20">
      <h2 className="text-20 leading-29 font-medium text-white">Ваш заказ</h2>

      {server ? (
        <div className="flex flex-col gap-12 border-b border-white/10 pb-20">
          <div className="flex items-start justify-between gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-14 leading-20 font-medium text-white">
                {server.cpu}
              </span>
              <span className="text-12 leading-17 font-normal text-secondary">
                {server.type} • {server.ram}
                {server.ssd ? ` • ${server.ssd}` : ''}
                {server.hdd ? ` • ${server.hdd}` : ''}
              </span>
              <span className="text-12 leading-17 font-normal text-secondary">
                {server.location} • {server.network} • {server.traffic}
              </span>
            </div>
          </div>

          {/* Spec rows */}
          <div className="flex flex-col gap-8">
            {[
              { label: 'Аренда сервера', value: `${server.location}` },
              { label: 'Подключение', value: `${server.network}` },
              { label: 'Абонплата', value: server.price },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between">
                <span className="text-12 leading-17 font-medium text-secondary">{row.label}</span>
                <span className="text-14 leading-20 font-medium text-white">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-secondary text-14 leading-20">Сервер не выбран</div>
      )}

      {/* Price total */}
      <div className="flex items-center justify-between">
        <span className="text-16 leading-23 font-medium text-white">Итого</span>
        <span className="text-16 leading-23 font-semibold text-green">
          {server?.price ?? '€0.00'}
        </span>
      </div>

      {server?.freeSetup && (
        <div className="flex items-center gap-6">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-green flex-shrink-0">
            <path d="M3 9L7 13L15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-12 leading-17 font-medium text-green">Беспалтная установка</span>
        </div>
      )}

      <button
        type="button"
        className={cn(
          'w-full h-48 bg-accent hover:bg-accent-dark transition-colors rounded-sm',
          'text-16 leading-23 font-semibold text-white text-center',
        )}
      >
        Оплатить и получить доступ
      </button>

      <button
        type="button"
        className={cn(
          'w-full h-48 border border-white/20 bg-transparent hover:bg-white/10 transition-colors rounded-sm',
          'text-16 leading-23 font-semibold text-white text-center',
        )}
      >
        Получить ссылку на оплату для отправки третьему лицу
      </button>
    </div>
  );
}
