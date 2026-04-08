import { cn } from '@/lib/cn';
import type { Server } from '@/data/servers';

interface OrderSidebarProps {
  server: Server;
}

export default function OrderSidebar({ server }: OrderSidebarProps) {
  return (
    <aside className="sticky top-20 bg-primary rounded-sm p-24 flex flex-col gap-16">
      <h3 className="text-20 leading-29 font-medium text-white">Ваш заказ</h3>

      {/* Prices */}
      <div className="flex flex-col gap-8">
        {[
          { label: 'АБОНПЛАТА', value: server.price },
          { label: '+ плата за установку', value: 'вкл.' },
          { label: 'интервал оплаты', value: 'помесячно' },
          { label: 'срок установки', value: '3-5 минут' },
        ].map((row) => (
          <div key={row.label} className="flex items-center justify-between py-8 border-b border-white/10 last:border-b-0">
            <div className="flex items-center gap-4">
              <span className="text-12 leading-17 font-medium text-secondary uppercase tracking-[0.024em]">
                {row.label}
              </span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-secondary">
                <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.2" />
                <path d="M9 8v5M9 6v1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-14 leading-20 font-medium text-white">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex items-baseline justify-between mt-4">
        <span className="text-16 leading-23 font-medium text-white">€46.75</span>
        <span className="text-12 leading-17 text-secondary">€82.65 (3 месяца -5%)</span>
      </div>

      {/* CTA */}
      <a
        href={`/order?server=${server.id}`}
        className={cn(
          'flex items-center justify-center h-48 rounded-sm',
          'bg-accent hover:bg-accent-dark transition-colors',
          'text-16 leading-23 font-semibold text-white',
        )}
      >
        Оформить заказ
      </a>

      <button
        type="button"
        className={cn(
          'flex items-center justify-center h-48 rounded-sm',
          'border border-white/20 bg-transparent hover:bg-white/10 transition-colors',
          'text-14 leading-20 font-medium text-white',
        )}
      >
        Доступ через 3 часа
      </button>
    </aside>
  );
}
