import type { Server } from '../../types/server';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface OrderSidebarProps {
  server: Server;
}

export default function OrderSidebar({ server }: OrderSidebarProps) {
  const components = [
    `1x ${server.cpu}`,
    typeof server.ram === 'string' ? server.ram : `${server.ram} GB`,
    Array.isArray(server.storage)
      ? server.storage
          .map((s) => `${s.count}x ${s.size} ${s.type.toUpperCase()}`)
          .join(', ')
      : '',
    Array.isArray(server.os) && server.os.length > 0
      ? typeof server.os[0] === 'string'
        ? (server.os[0] as string)
        : (server.os[0] as { name: string }).name
      : '',
    server.bandwidth ?? '',
    server.ipv4 ?? '',
  ].filter(Boolean);

  return (
    <aside className="w-full desktop:w-350 bg-primary rounded-md p-30 desktop:sticky desktop:top-20">
      <h3 className="text-25 leading-36 font-medium text-white mb-20">Ваш заказ</h3>
      <ul className="flex flex-col gap-12 mb-25">
        {components.map((c, i) => (
          <li key={i} className="flex items-start gap-10 text-14 leading-20 text-white">
            <Icon name="check" className="text-16 text-cyan flex-shrink-0 mt-2" />
            <span>{c}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-white/20 pt-20 mb-20">
        <span className="block text-12 leading-17 font-medium text-secondary uppercase tracking-[0.024em] mb-10">
          Период оплаты
        </span>
        <div className="flex flex-col gap-8">
          {(server.pricePeriods ?? [{ period: '1 месяц', price: server.price }]).map((p, i) => (
            <label
              key={i}
              className="flex items-center justify-between h-36 px-15 border border-white/30 rounded-sm text-14 text-white cursor-pointer"
            >
              <span>{p.period}</span>
              <span>€{p.price.toFixed(2)}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-25">
        <div className="text-40 leading-50 font-semibold text-white">€{server.price.toFixed(2)}</div>
        {server.setupFee != null && (
          <div className="text-14 leading-20 text-secondary">
            €{server.setupFee.toFixed(2)} плата за установку
          </div>
        )}
      </div>

      <Button href="/order" variant="accent" className="w-286 h-48 mb-15" fullWidth>
        Оформить заказ
      </Button>

      <div className="flex gap-10">
        <button
          type="button"
          className="flex-1 h-36 border border-white/30 rounded-sm text-14 text-white flex items-center justify-center gap-8 hover:bg-white/10"
        >
          <Icon name="compare" /> Поделиться
        </button>
        <button
          type="button"
          className="flex-1 h-36 border border-white/30 rounded-sm text-14 text-white flex items-center justify-center gap-8 hover:bg-white/10"
        >
          <Icon name="repository" /> Скопировать
        </button>
      </div>
    </aside>
  );
}
